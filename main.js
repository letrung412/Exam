const addTask = document.getElementById("add-new-task");

function newTask() {
    const new_task = document.getElementById("new-task");
    const li = document.createElement("li");
    li.innerHTML = new_task.value;
    li.setAttribute("class", "collection-item"); //style

    const ul = document.getElementsByClassName("collection");
    ul[0].appendChild(li);

    //add button
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("class" , "btn"); //style
    li.appendChild(button);

    //add event
    button.addEventListener("click" ,() => {
        li.innerHTML = ""
        // li.remove();
    })
}

addTask.addEventListener("click" , () => newTask());

const deleteAll = document.getElementById("delete-all");
deleteAll.addEventListener("click" , () => {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = "";
})