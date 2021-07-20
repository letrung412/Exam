export function ShowAllTask(items) {
    items.forEach(item => {
        AddTask(item)
    })
}

export let a=0

export function AddTask(value) {
    const ul = document.getElementsByClassName("collection");

    const li = document.createElement('li')
    li.setAttribute('class', 'collection-item')
    li.setAttribute('style', 'display: flex')

    const divContent = document.createElement('div')
    divContent.innerHTML = value
    //divContent.addEventListener('dblclick', ()=> updateTask(li)) // double click to update data
    divContent.setAttribute('style','flex-grow: 8')
    li.appendChild(divContent)

    //delete task
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'Delete'
    btnDelete.setAttribute('class', 'btn delete')
    //btnDelete.addEventListener('click', ()=> Delete() )
    li.appendChild(btnDelete)    

    //update task
    const btnUpdate = document.createElement('button')
    btnUpdate.innerHTML = 'Update'
    btnUpdate.setAttribute('class', 'btn')
    //btnUpdate.addEventListener('click', ()=> updateTask(li))
    li.appendChild(btnUpdate) 

    ul[0].appendChild(li)
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function Delete(index){
    const ul = document.getElementsByClassName("collection");
    const li = ul[0].children[index]
    li.remove()
}