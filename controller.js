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
///////////////////////////////
const buttons = document.getElementsByClassName("btn delete");
for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener("click" , () => {
        const li = buttons[i].parentElement;
        DeleteOneTask(i,li)
    });
}

document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    AddNewTask(value);  //controller.addnewtask()
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); //controller.deleteAlltask -- business logic layer -- bll
})

