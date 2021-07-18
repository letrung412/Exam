const ul = document.getElementsByClassName('collection')
const btnAddTask = document.getElementById('add-new-task')
const btnDeleteAllTasks = document.getElementById('delete-all')

btnAddTask.addEventListener('click', () => addNewTask())
btnDeleteAllTasks.addEventListener('click',()=>deleteAllTasks())

//add task
const addNewTask = () =>{
    const newTask = document.getElementById('new-task')

    if(newTask.value == ''){
        alert('Nothing to add!')
    } else{
        const li = document.createElement('li')
        li.setAttribute('class', 'collection-item')
        li.setAttribute('style', 'display: flex')
    
        const divContent = document.createElement('div')
        divContent.innerHTML = newTask.value
        divContent.setAttribute('style','flex-grow: 8')
        li.appendChild(divContent)
    
        //delete task
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'Delete'
        btnDelete.setAttribute('class', 'btn')
        btnDelete.addEventListener('click', ()=> li.remove())
        li.appendChild(btnDelete)    
    
        //update task
        const btnUpdate = document.createElement('button')
        btnUpdate.innerHTML = 'Update'
        btnUpdate.setAttribute('class', 'btn')
        btnUpdate.addEventListener('click', ()=> updateTask(li))
        li.appendChild(btnUpdate) 
    
        ul[0].appendChild(li)
        newTask.value= ''
    }
}

//delete all tasks
const deleteAllTasks = () =>{
    ul[0].innerHTML=''
}

// update task
const updateTask = (tag )=>{
    //hidden li.children
    const arrChild = tag.children
    for(let i=0; i< arrChild.length; i++)
        arrChild[i].style.display = "none"

    const inputUpdate = document.createElement('input')
    inputUpdate.setAttribute('value',arrChild[0].innerText)
    tag.appendChild(inputUpdate)

    const btnConfirm = document.createElement('button')
    btnConfirm.innerHTML = 'Confirm'
    btnConfirm.setAttribute('class', 'btn')
    btnConfirm.addEventListener('click', ()=> {
        //display li.children
        for(let i=0; i< arrChild.length; i++)
            arrChild[i].style.display = "inline-block"

        //set new value of div
        arrChild[0].innerText = inputUpdate.value

        //delete input update and button confirm
        inputUpdate.remove()
        btnConfirm.remove()
    })
    tag.appendChild(btnConfirm)
}