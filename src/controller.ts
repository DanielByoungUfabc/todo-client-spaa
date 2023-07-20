namespace Controller {

    const buttonAdd = document.querySelector('#btn-add')
    const addContainer = document.querySelector('#form-modal') as HTMLElement

    const addView = new View.AddView(addContainer)


    function initToolbar() {
        buttonAdd?.addEventListener('click', () => addView.render())
    }
    async function main() {
        const dao = new Model.ToDoItemDao()
    
        const items = await dao.listAll()
        const containerNewest = document.getElementById('newest-content')
        const containerOldest = document.getElementById('oldest-content')
    
        if (containerNewest) {
            new View.NewestView(items, containerNewest).render()
        }
        if (containerOldest) {
            new View.OldestView(items, containerOldest).render()
        }
    
        
    }
    
    main().then()
}