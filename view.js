export function ShowAllTask(items) {
    items.forEach(item => {
        oneTask(item)
    })
}

export function AddTask({id, value}) {
    oneTask({id, value})
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function Delete(id){
    const li = document.getElementById(id)
    li.remove()
}

function oneTask({id, value}){
    const ul = document.getElementsByClassName("collection");

    const li = document.createElement('li')
    li.setAttribute('class', 'collection-item')
    li.setAttribute('style', 'display: flex')
    li.setAttribute('id', id)


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