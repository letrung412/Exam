const ul = document.getElementsByClassName('collection')
const addTask = document.getElementById('add-new-task')
const btnDeleteAllTasks = document.getElementById('delete-all')

addTask.addEventListener('click', ()=>addNewTask())

btnDeleteAllTasks.addEventListener('click',()=>deleteAllTasks())

const addNewTask = () =>{
    const newTask = document.getElementById('new-task')

    const li = document.createElement('li')
    li.innerHTML = newTask.value
    li.setAttribute('class', 'collection-item')
    ul[0].appendChild(li)

    const btn = document.createElement('button')
    btn.innerHTML = 'Delete'
    btn.setAttribute('class', 'btn')
    btn.addEventListener('click', ()=> li.remove())
    li.appendChild(btn)    

    const btn = document.createElement('button')
    btn.innerHTML = 'Update'
    btn.setAttribute('class', 'btn')
    btn.addEventListener('click', ()=> li.remove())
    li.appendChild(btn) 

    newTask.value= ''
}

const deleteAllTasks = () =>{
    ul[0].innerHTML=''
}

const updateTask = (tag )=>{

}