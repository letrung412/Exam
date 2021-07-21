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

function AddItem(ul, value) {
    const li = document.createElement("li");
    if (value.length != 0) {
        li.innerHTML = value;
        li.setAttribute("class" , "collection-item");
        AddBtnDelete(li);
        ul[0].appendChild(li);
    }
}

function AddBtnDelete(li) {
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(button);
    button.setAttribute("class" , "btn delete");
}