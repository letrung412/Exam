import * as view from "./view.js";
import * as model from "./model.js";

////////method init////////////////////////////////////////////////
const items = model.ReadTask();
view.ShowAllTask(items);
///////////////////////////////////////////////////////////////////

//DOM///////
document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    let id = Math.floor(Math.random() * 10000);
    AddNewTask({id, value});  //controller.addnewtask()
    const newItems =  model.ReadTask();
    for(let i=0; i< newItems.length; i++){
        let li = document.getElementById(newItems[i].id)
        li.children[1].addEventListener('click', ()=>{
            DeleteTask(newItems[i].id)
        })
    }
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); //controller.deleteAlltask -- business logic layer -- bll
})

for(let i=0; i< items.length; i++){
    let li = document.getElementById(items[i].id)
    li.children[1].addEventListener('click', ()=>{
        DeleteTask(items[i].id)
    })
}

//Method view layer, model layer
function AddNewTask({id, value}) {
    model.AddTask({id, value}); //data access layer -- dal
    view.AddTask({id, value});
}

function DeleteAllTask() {
    model.DeleteAll();
    view.DeleteAll();
}

function DeleteTask(id){
    model.Delete(id)
    view.Delete(id)
}