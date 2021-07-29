import * as view from "./view.js";
import * as model from "./model.api.js";

document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    AddNewTask(value);  
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); 
})

///////////////*All Services*///////////////
let items =  await model.ReadTask();
view.ShowAllTask(items);

async function AddNewTask(value) {
    await model.AddTask(value); 
    view.AddTask(value);
}

const DeleteAllTask = () => {
    //model.DeleteAll();
    view.DeleteAll();
}

async function DeleteOneTask(id,li) {
    await model.RemoveTask(id);
    view.RemoveTask(li);
}

const Edit = (li) => {
    view.EditTask(li)
}

async function Save (li, data) {
    await model.UpdateTask(data)
    view.SaveTask(li)
}
///////////////////////////////
document.querySelectorAll(".delete").forEach(item => item.addEventListener("click", () => {
    const li = document.activeElement.parentNode
    const id  = li.getAttribute("id")
    DeleteOneTask(id, li)
}))

document.querySelectorAll(".orange").forEach(item => item.addEventListener("click", () => {
    const li = document.activeElement.parentNode
    Edit(li)
}))

document.querySelectorAll(".green").forEach(item => item.addEventListener("click", () => {
    const li = document.activeElement.parentNode
    const id = li.getAttribute("id")
    const value = li.firstChild.firstChild.value
    const data = {
        id: id,
        name: value
    }
    Save(li, data)
}))

document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    AddNewTask(value);  
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); 
})
