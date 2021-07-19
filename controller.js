import * as view from "./view.js";
import * as model from "./model.js";

////////method init////////////////////////////////////////////////
const items = model.ReadTask();
view.ShowAllTask(items);
///////////////////////////////////////////////////////////////////

//DOM///////
document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    AddNewTask(value);  //controller.addnewtask()
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); //controller.deleteAlltask -- business logic layer -- bll
})

//Method view layer, model layer
function AddNewTask(value) {
    model.SaveTask(value); //data access layer -- dal
    view.AddTask(value);
}

function DeleteAllTask() {
    model.DeleteAll();
    view.DeleteAll();
}