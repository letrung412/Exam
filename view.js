export function ShowAllTask(items) {
    const ul = document.getElementsByClassName("collection");
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class" , "collection-item");
        ul[0].appendChild(li);
    })
}

export function AddTask(value) {
    const ul = document.getElementsByClassName("collection");
    const li = document.createElement("li");
    li.innerHTML = value;
    li.setAttribute("class" , "collection-item");
    ul[0].appendChild(li);
}

export function DeleteAll() {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = ""
}