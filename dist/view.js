"use strict";
var View;
(function (View) {
    class TabView {
        constructor(items, container) {
            this.items = items;
            this.container = container;
        }
    }
    function DateDescComparator(a, b) {
        const dateA = Date.parse((a === null || a === void 0 ? void 0 : a.deadline) || '');
        const dateB = Date.parse((b === null || b === void 0 ? void 0 : b.deadline) || '');
        if (dateA && dateB) {
            if (dateA < dateB) {
                return -1;
            }
            else if (dateA > dateB) {
                return 1;
            }
            return 0;
        }
        else if (!dateA && dateB) {
            return 1;
        }
        else if (dateA && !dateB) {
            return -1;
        }
        return 0;
    }
    function DateAscComparator(a, b) {
        const dateA = Date.parse((a === null || a === void 0 ? void 0 : a.deadline) || '');
        const dateB = Date.parse((b === null || b === void 0 ? void 0 : b.deadline) || '');
        if (dateA && dateB) {
            if (dateA < dateB) {
                return 1;
            }
            else if (dateA > dateB) {
                return -1;
            }
            return 0;
        }
        else if (!dateA && dateB) {
            return -1;
        }
        else if (dateA && !dateB) {
            return 1;
        }
        return 0;
    }
    class ListView extends TabView {
        buildItemList(items, container) {
            for (const item of items) {
                const template = document.getElementById('list-item-template');
                const clone = template.content.cloneNode(true);
                const listItem = clone.querySelector('.list-group-item');
                const description = clone.querySelector('.list-item-desc');
                const badgeContainer = clone.querySelector('.badge-container');
                const deadLine = clone.querySelector('.list-item-deadline');
                // TODO: identify the checkboxes
                if (description) {
                    description.textContent = item.description;
                }
                if (listItem) {
                    container.appendChild(listItem);
                }
            }
        }
    }
    class NewestView extends ListView {
        render() {
            this.items.sort(DateDescComparator);
            this.buildItemList(this.items, this.container);
        }
    }
    View.NewestView = NewestView;
    class OldestView extends ListView {
        render() {
            this.items.sort(DateAscComparator);
            this.buildItemList(this.items, this.container);
        }
    }
    View.OldestView = OldestView;
    class AddView {
        render() {
            throw new Error("Method not implemented.");
        }
        constructor(container) {
            this.container = container;
            this.modal = new bootstrap.Modal(container);
        }
    }
    View.AddView = AddView;
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
})(View || (View = {}));
