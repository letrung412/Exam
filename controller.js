import * as view from "./view.js";
import * as model from "./model.api.js";

////////method init////////////////////////////////////////////////
let items = await model.ReadTask();
view.ShowAllTask(items);
///////////////////////////////////////////////////////////////////

///////////////////DOM////////////////////////

//Add
document.getElementById("add-new-task").addEventListener("click" , () => {
    const data = document.getElementById("new-task");
    if(data.value !== ''){
        AddNewTask(data.value);  
        data.value = ''
    } else{
        view.alertMess('Notthing to add!')
    }
})

//delete all
document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); //controller.deleteAlltask -- business logic layer -- bll
})

//addEventListener for li.children- delete button and update button
for(let i=0; i< items.length; i++){

    let li = document.getElementById(items[i].id)
    //delete button
    li.children[1].addEventListener('click', ()=>{
        DeleteTask(items[i].id)
    })
    //update button
    li.children[2].addEventListener('click', ()=>{
        UpdateTask(items[i].id)
    })
    //doubleClick to update
    li.children[0].addEventListener('dblclick', ()=>{
        UpdateTask(items[i].id)
    })
}


//////////////Method view layer, model layer/////////////

async function AddNewTask(value) {
    let id = await model.AddTask(value); //data access layer -- dal
    console.log(id)
    view.AddTask(id, value);

    //addEventListener for delete button and update button of new li
    let li = document.getElementById(id)
    //delete button
    li.children[1].addEventListener('click', ()=>{
        DeleteTask(id)
    })
    //update button
    li.children[2].addEventListener('click', ()=>{
        UpdateTask(id)
    })
    //doubleClick to update
    li.children[0].addEventListener('click', ()=>{
        UpdateTask(id)
    })
}

function DeleteAllTask() {
    model.DeleteAll();
    view.DeleteAll();
}

function DeleteTask(id){
    model.Delete(id)
    view.Delete(id)
}

function UpdateTask(id){
    //create update
    view.createUpdateForm(id)

    //onclick confirm button
    const li = document.getElementById(id)
    const btnConfirm = li.children[4]
    btnConfirm.addEventListener('click',()=>{
        const newValue = li.children[3].value
        model.Update(id, newValue)
        view.Update(id, newValue)
    })
}