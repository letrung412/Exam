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

const btnDeletes = document.getElementsByClassName("delete")
for(let i=0; i< btnDeletes.length; i++){
    btnDeletes[i].addEventListener('click',()=>{
        DeleteTask(i)
    })
}

//Method view layer, model layer
function AddNewTask(value) {
    model.SaveTask(value); //data access layer -- dal
    view.AddTask(value);
}

function DeleteAllTask() {
    model.DeleteAll();
    view.DeleteAll();
}

function DeleteTask(index){
    model.Delete(index)
    view.Delete(index)
}