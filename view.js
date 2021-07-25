export function ShowAllTask(items) {
    const all_btn = items.map(item => AddTask(item.value,item.id));
    return all_btn;
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
    ShowAllTask();
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function UpdateTask(btn_edit) {
    const value = prompt("Nhap du lieu can thay doi ");
    const id = btn_edit.getAttribute("id");
    return { id , value };
}