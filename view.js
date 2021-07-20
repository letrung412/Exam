export function ShowAllTask(items) {
    const ul = document.getElementsByClassName("collection");
    items.forEach(item => {
        const li = document.createElement("li");
        li.setAttribute("class" , "collection-item");

        const div_input = document.createElement("div")
        div_input.setAttribute("class", "input-field")
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("value", `${item}`)
        input.setAttribute("disabled", "")
        div_input.appendChild(input)

        const btnDelete = document.createElement("button")
        btnDelete.setAttribute("class", "btn red")
        btnDelete.innerHTML = "Delete"
        btnDelete.addEventListener("click", () => {
            DeleteTask()
        })

        const btnEdit = document.createElement("button")
        btnEdit.setAttribute("class", "btn orange darken-1")
        btnEdit.innerHTML = "Edit"
        btnEdit.addEventListener("click", () => {
            EditTask()
        })

        const btnSave = document.createElement("button")
        btnSave.setAttribute("class", "btn green")
        btnSave.setAttribute("style", "display: none")
        btnSave.innerHTML = "Save"
        btnSave.addEventListener("click", () => {
            SaveTask()
        })

        li.appendChild(div_input)
        li.appendChild(btnDelete)
        li.appendChild(btnEdit)
        li.appendChild(btnSave)
        ul[0].appendChild(li);
    })
}

export function AddTask(value) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    li.setAttribute("class" , "collection-item");
    const div_input = document.createElement("div")
    div_input.setAttribute("class", "input-field")
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("value", `${value}`)
    input.setAttribute("disabled", "")
    div_input.appendChild(input)

    const btnDelete = document.createElement("button")
    btnDelete.setAttribute("class", "btn red")
    btnDelete.innerHTML = "Delete"
    btnDelete.addEventListener("click", () => {
        DeleteTask()
    })

    const btnEdit = document.createElement("button")
    btnEdit.setAttribute("class", "btn orange darken-1")
    btnEdit.innerHTML = "Edit"
    btnEdit.addEventListener("click", () => {
        EditTask()
    })

    const btnSave = document.createElement("button")
    btnSave.setAttribute("class", "btn green")
    btnSave.setAttribute("style", "display: none")
    btnSave.innerHTML = "Save"
    btnSave.addEventListener("click", () => {
        SaveTask()
    })

    li.appendChild(div_input)
    li.appendChild(btnDelete)
    li.appendChild(btnEdit)
    li.appendChild(btnSave)
    ul[0].appendChild(li)
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection")
    ul[0].innerHTML = ""
}

export function DeleteTask() {
    const li = document.activeElement.parentNode
    const value = li.firstChild.firstChild.value
    const list = JSON.parse(localStorage.getItem("tasks"))
    const newTasks = list.filter(item => item !== value)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    li.remove()
}

export function EditTask() {
    const li = document.activeElement.parentNode
    const input = li.firstChild.firstChild
    const btnSave = li.childNodes[3]
    btnSave.setAttribute("style", "display: inline-block")
    input.removeAttribute("disabled")
}

export function SaveTask() {
    const li = document.activeElement.parentNode
    const btnSave = li.childNodes[3]
    const input = li.firstChild.firstChild
    const oldValue = input.defaultValue
    const value = input.value
    btnSave.setAttribute("style", "display: none")
    input.setAttribute("disabled", "")
    input.setAttribute("value", `${value}`)

    const list = JSON.parse(localStorage.getItem("tasks"))
    const newTasks = list.map(item => item === oldValue ? value : item)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
}
