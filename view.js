export function ShowAllTask(items) {
    return items.map(item => AddItem(item));
}

export function AddTask(value,index) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    li.innerHTML = value;
    li.setAttribute("class" , "collection-item");
    const btn_del = AddBtnDelete(li,index);
    const btn_edit = AddBtnEdit(li,index);
    ul[0].appendChild(li);
    return { btn_del , btn_edit };
}

function AddBtnDelete(li,index) {
    const button = document.createElement("button");
    button.innerHTML = "delete";
    button.setAttribute("class" , "btn");
    button.setAttribute("id" , index);
    li.appendChild(button);
    return button;
}

function AddBtnEdit(li,index) {
    const button = document.createElement("button");
    button.innerHTML = "Edit";
    button.setAttribute("class" , "btn");
    button.setAttribute("id" , index);
    li.appendChild(button);
    return button;
}

export function RemoveTask(li) {
    li.remove();
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
    btnSave.setAttribute("style", "display: none")
    input.setAttribute("disabled", "")
}

function AddItem(item) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    li.setAttribute("class" , "collection-item");
    li.setAttribute("id", item.id)
    if(item) {
        AddInput(li, item.name);
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
