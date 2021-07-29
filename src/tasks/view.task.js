export function ShowAllTask(items) {
    items.forEach(item => {
        oneTask(item.id, item.name)
    })
}

export function alertMess(str){
    alert(str)
}

export function AddTask(id, value) {
    oneTask(id, value)
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function Delete(id){
    if(id!==null){
        const li = document.getElementById(id)
        li.remove()
    }   
}

export function createUpdateForm(id){
    const li = document.getElementById(id)
    const arrChild = li.children

    for(let i=0; i<3; i++)
        arrChild[i].style.display = 'none'
    //arrChild.map(el => el.style.display = 'none') 

    const inputUpdate = document.createElement('input')
    inputUpdate.setAttribute('value',arrChild[0].innerText)
    li.appendChild(inputUpdate)

    const btnConfirm = document.createElement('button')
    btnConfirm.innerHTML = 'Confirm'
    btnConfirm.setAttribute('class', 'btn')
    li.appendChild(btnConfirm)
}

export function Update(id, newValue){
    const li = document.getElementById(id)
    const arrChild = li.children

    for(let i=0; i< 3; i++)
        arrChild[i].style.display = "inline-block"

    newValue == '' ? alert('Invalid data!')
    : newValue == arrChild[0].innerText? alert('Nothing change!')
    : arrChild[0].innerText = newValue

    //delete input update and button confirm
    arrChild[4].remove()
    arrChild[3].remove()
}

export function logout(){
    localStorage.clear()
    window.location.replace('http://127.0.0.1:5500/src/auth/login.html')
}

export function userName(){
    return localStorage.getItem('name')
}

//structure of li tag
function oneTask(id, value){
    const ul = document.getElementsByClassName("collection");

    const li = document.createElement('li')
    li.setAttribute('class', 'collection-item')
    li.setAttribute('style', 'display: flex')
    li.setAttribute('id', id)

    // li.children
    const divContent = document.createElement('div')
    divContent.innerHTML = value
    divContent.setAttribute('style','flex-grow: 8')
    li.appendChild(divContent)

        //delete button
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'Delete'
    btnDelete.setAttribute('class', 'btn delete')
    li.appendChild(btnDelete)    

        //update button
    const btnUpdate = document.createElement('button')
    btnUpdate.innerHTML = 'Update'
    btnUpdate.setAttribute('class', 'btn')
    li.appendChild(btnUpdate) 

    ul[0].appendChild(li)
}