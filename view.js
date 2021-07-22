export function ShowAllTask(items) {
    const ul = document.getElementsByClassName("collection");
    items.forEach(item => AddItem(ul, item.value));
}

export function AddTask(value) {
    const ul = document.getElementsByClassName("collection");
    AddItem(ul, value);
    location.reload();
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function RemoveTask(li) {
    li.remove();
    location.reload();
}

export function EditTask(li) {
    const btnSave = li.childNodes[3]
    const input = li.firstChild.firstChild
    btnSave.setAttribute("style", "display: inline-block")
    input.removeAttribute("disabled")
}

export function SaveTask(li) {
    const btnSave = li.childNodes[3]
    const input = li.firstChild.firstChild
    const value = input.value
    if(!value) {
        btnSave.setAttribute("style", "display: inline-block")
        input.removeAttribute("disabled")
    } else {
        btnSave.setAttribute("style", "display: none")
        input.setAttribute("disabled", "")
    }
}

function AddItem(ul, value) {
    const li = document.createElement("li");
    li.setAttribute("class" , "collection-item");
    if(value) {
        AddInput(li, value);
        AddBtnDelete(li);
        AddBtnEdit(li);
        AddBtnSave(li);
        ul[0].appendChild(li);
    }
}

function AddInput(li, value) {
    const div_input = document.createElement("div")
    div_input.setAttribute("class", "input-field")
    const input = document.createElement("input")
    input.setAttribute("value", value)
    input.setAttribute("disabled", "")
    div_input.appendChild(input)
    li.appendChild(div_input)
}

function AddBtnDelete(li) {
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(button);
    button.setAttribute("class" , "btn delete red");
}

function AddBtnEdit(li) {
    const button = document.createElement("button")
    button.innerHTML = "Edit"
    li.appendChild(button)
    button.setAttribute("class", "btn orange")
}

function AddBtnSave(li) {
    const button = document.createElement("button")
    button.innerHTML = "Save"
    li.appendChild(button)
    button.setAttribute("class", "btn green save")
    button.setAttribute("style", "display: none")
}
