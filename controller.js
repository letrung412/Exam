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
const items = await model.ReadTask();
console.log(items);
const all_btns = view.ShowAllTask(items);
function AddEvent(all_btn) {
    all_btn.map(btn => {
        const li = btn.btn_del.parentElement;
        btn.btn_del.addEventListener("click" , () => DeleteOneTask(btn.btn_del.getAttribute("id"),li));
        btn.btn_edit.addEventListener("click" , () => UpdateTask(btn.btn_edit));
    })
}
AddEvent(all_btns);

async function AddNewTask(value) {
    const index = await model.SaveTask(value); 
    const btn = view.AddTask(value,index);
    const li = btn.btn_del.parentElement;
    btn.btn_del.addEventListener("click" , () => DeleteOneTask(btn.btn_del.getAttribute("id"),li));
    btn.btn_edit.addEventListener("click" , () => UpdateTask(btn.btn_edit));
}

function DeleteAllTask() {
    model.DeleteAll();
    view.DeleteAll();
}

function DeleteOneTask(index,li) {
    model.RemoveTask(index);
    view.RemoveTask(li);
}

async function UpdateTask(btn_edit) {
    const data = view.UpdateTask(btn_edit);
    model.UpdateTask(data);
    const items = await model.ReadTask();
    view.DeleteAll();
    const all_btn = view.ShowAllTask(items);
    AddEvent(all_btn);
}






