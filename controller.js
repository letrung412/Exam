import * as view from "./view.js";
import * as model from "./model.js";

///////////////*All Services*///////////////
(() => {
    const items = model.ReadTask();
    view.ShowAllTask(items);
})();

const AddNewTask = (value) => {
    model.SaveTask(value); 
    view.AddTask(value);
}

const DeleteAllTask = () => {
    model.DeleteAll();
    view.DeleteAll();
}

const DeleteOneTask = (index,li) => {
    model.RemoveTask(index);
    view.RemoveTask(li);
}

const Edit = (li) => {
    view.EditTask(li)
}

const Save = (li, index, value, oldValue) => {
    view.SaveTask(li)
    model.SaveEditTask(index, value, oldValue)
}
///////////////////////////////
const buttons = document.getElementsByClassName("btn delete");
for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener("click" , () => {
        const li = buttons[i].parentElement;
        DeleteOneTask(i,li)
    });
}

document.querySelectorAll(".orange").forEach(item => item.addEventListener("click", () => {
    const li = document.activeElement.parentNode
    Edit(li)
}))

const btnSave = document.getElementsByClassName("btn save")
for (let i = 0; i < btnSave.length; i++) {
    btnSave[i].addEventListener("click", () => {
        const li = btnSave[i].parentNode
        const value = li.firstChild.firstChild.value
        const oldValue = li.firstChild.firstChild.defaultValue
        Save(li, i, value, oldValue)
    })
}

document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    AddNewTask(value);  //controller.addnewtask()
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); //controller.deleteAlltask -- business logic layer -- bll
})
