namespace Model {
    const ra = '11007015'
    const host = 'https://todo-server-spa-ozyq2qhxqq-rj.a.run.app/api'

    export interface ToDoItem {
        id: number
        description: string
        tags?: string[]
        deadline?: string
        
    }
    export class ToDoItemDao {
        async listAll(): Promise<ToDoItem[]> {
            const response = await fetch(`${host}/${ra}/list`)

            if (response.ok) {
                return (await response.json()).items as ToDoItem[]
            }
            console.error('Server status: ' + JSON.stringify(await response.json()))
            throw new Error("Server-side error. Failed to fetch list")
        }

        insert(item: ToDoItem): boolean {
            return false
        }
    
    }
}
/*
async function main() {
    const dao = new Model.ToDoItemDao()
    
    const result = await dao.listAll()

    console.log(result)
}

main().then()
*/