export function ShowAllTask(items) {
    const ul = document.getElementsByClassName("collection");
    items.forEach((item,index) => {
        if (item != null) {
            AddItem(ul, item.value, item.id);
        } else {
            AddItem(ul, "", index);
        }
    });
}

export function AddTask(value, index) {
    const ul = document.getElementsByClassName("collection");
    AddItem(ul, value, index);
    // location.reload();
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function RemoveTask(li) {
    li.remove();
    // location.reload();
}

export function UpdateTask(btn_edit) {
    const value = prompt("Nhap vao du lieu moi: ");
    if (value == null) {
        return;
    }
    const index = btn_edit.getAttribute("id");
    // location.reload();
    return { index , value };
}

function AddItem(ul, value, index) {
    const li = document.createElement("li");
    if (value.length != 0) {
        li.innerHTML = value;
        li.setAttribute("class" , "collection-item");
        AddBtnDelete(li);
        AddBtnEdit(li, index);
    }
    ul[0].appendChild(li);
}

function AddBtnDelete(li) {
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(button);
    button.setAttribute("class" , "btn delete");
}

function AddBtnEdit(li, index) {
    const button = document.createElement("button");
    button.innerHTML = "Edit";
    li.appendChild(button);
    button.setAttribute("class" , "btn edit");
    button.setAttribute("id" , index)
}

// function AddBtn(li, name) {
//     const button = document.createElement("button");
//     button.innerHTML = name;
//     li.appendChild(button);
//     button.setAttribute("class" , `btn ${name}`);
// }