namespace View {

    import ToDoItem = Model.ToDoItem

    declare var bootstrap: any

    interface View {
        render(): void
    }
    abstract class TabView implements View {
        protected items: Array<ToDoItem>;
        protected container: HTMLElement
        constructor(items: ToDoItem[], container: HTMLElement) {
            this.items = items
            this.container = container
        }

        abstract render(): void
    }

    function DateDescComparator(a: ToDoItem, b: ToDoItem) {
        const dateA = Date.parse(a?.deadline || '')
        const dateB = Date.parse(b?.deadline || '')
        if (dateA && dateB) {
            if (dateA < dateB) {
                return -1;
            } else if (dateA > dateB) {
                return 1;
            }
            return 0;
        } else if (!dateA && dateB) {
            return 1;
        } else if (dateA && !dateB) {
            return -1
        }
        return 0;
    }
    
    function DateAscComparator(a: ToDoItem, b: ToDoItem) {
        const dateA = Date.parse(a?.deadline || '')
        const dateB = Date.parse(b?.deadline || '')
        if (dateA && dateB) {
            if (dateA < dateB) {
                return 1;
            } else if (dateA > dateB) {
                return -1;
            }
            return 0;
        } else if (!dateA && dateB) {
            return -1;
        } else if (dateA && !dateB) {
            return 1
        }
        return 0;
    }

    abstract class ListView extends TabView {

        abstract render(): void

        protected buildItemList(items: ToDoItem[], container: HTMLElement) {
            for (const item of items) {
                const template = document.getElementById('list-item-template') as HTMLTemplateElement
                const clone = template.content.cloneNode(true) as DocumentFragment
    
                const listItem = clone.querySelector('.list-group-item')
                const description = clone.querySelector('.list-item-desc')
                const badgeContainer = clone.querySelector('.badge-container')
                const deadLine = clone.querySelector('.list-item-deadline')
    
                // TODO: identify the checkboxes
    
                if (description) {
                    description.textContent = item.description
                }
                if (listItem) {
                    container.appendChild(listItem)
                }
            }
        }
    }

    export class NewestView extends ListView {

        render(): void {
            this.items.sort(DateDescComparator)
            this.buildItemList(this.items, this.container)
        }

        
    }

    export class OldestView extends ListView {
        render(): void {
            this.items.sort(DateAscComparator)
            this.buildItemList(this.items, this.container)
        }
    }

    export class AddView implements View {
        render(): void {
            throw new Error("Method not implemented.");
        }
        private container: HTMLElement
        private modal: any

        constructor(container: HTMLElement) {
            this.container = container
            this.modal = new bootstrap.Modal(container)
        }
    }
    // 
    // export function buildItemList(items: ToDoItem[], container: HTMLElement) {
    //     for (const item of items) {
    //         const template = document.getElementById('list-item-template') as HTMLTemplateElement
    //         const clone = template.content.cloneNode(true) as DocumentFragment

    //         const listItem = clone.querySelector('.list-group-item')
    //         const description = clone.querySelector('.list-item-desc')
    //         const badgeContainer = clone.querySelector('.badge-container')
    //         const deadLine = clone.querySelector('.list-item-deadline')

    //         // TODO: identify the checkboxes

    //         if (description) {
    //             description.textContent = item.description
    //         }

    //         if (listItem) {
    //             container.appendChild(listItem)
    //         }
    //     }
    // }
    
}

