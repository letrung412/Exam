const ul = document.getElementsByClassName('collection')
const btnAddTask = document.getElementById('add-new-task')
const btnDeleteAllTasks = document.getElementById('delete-all')

btnAddTask.addEventListener('click', () => addNewTask())

btnDeleteAllTasks.addEventListener('click',()=>deleteAllTasks())

const addNewTask = () =>{
    const newTask = document.getElementById('new-task')

    const li = document.createElement('li')
    li.setAttribute('class', 'collection-item')
    li.setAttribute('style', 'display: flex')

    const divContent = document.createElement('div')
    divContent.innerHTML = newTask.value
    divContent.setAttribute('style','flex-grow: 8')
    li.appendChild(divContent)

    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'Delete'
    btnDelete.setAttribute('class', 'btn')
    btnDelete.addEventListener('click', ()=> li.remove())
    li.appendChild(btnDelete)    

    const btnUpdate = document.createElement('button')
    btnUpdate.innerHTML = 'Update'
    btnUpdate.setAttribute('class', 'btn')
    btnUpdate.addEventListener('click', ()=> updateTask(li))
    li.appendChild(btnUpdate) 

    ul[0].appendChild(li)
    newTask.value= ''
}

const deleteAllTasks = () =>{
    ul[0].innerHTML=''
}

const updateTask = (tag )=>{
    const arrChild = tag.children
    for(let i=0; i< 3; i++)
        arrChild[i].style.display = "none"

    const inputUpdate = document.createElement('input')
    inputUpdate.setAttribute('value',arrChild[0].innerText)
    tag.appendChild(inputUpdate)

    const btnConfirm = document.createElement('button')
    btnConfirm.innerHTML = 'Confirm'
    btnConfirm.setAttribute('class', 'btn')
    btnConfirm.addEventListener('click', ()=> {
        for(let i=0; i< 3; i++)
            arrChild[i].style.display = "inline-block"
        tag.children[3].style.display = "none"
        tag.children[4].style.display = "none"
    })
    tag.appendChild(btnConfirm)
}