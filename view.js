export function ShowAllTask(items) {
    const ul = document.getElementsByClassName("collection");
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item.value;
        li.setAttribute("class" , "collection-item");
        AddBtnDelete(li);
        ul[0].appendChild(li);
    })
}

export function AddTask(value) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    if (value.length != 0) {
        li.innerHTML = value;
        li.setAttribute("class" , "collection-item");
        AddBtnDelete(li);
        ul[0].appendChild(li);
        location.reload();
    }
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}

export function RemoveTask(li) {
    li.remove();
    location.reload();
}

function AddBtnDelete(li) {
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(button);
    button.setAttribute("class" , "btn delete");
    button.addEventListener("click" , () => RemoveTask(li));
}