import * as view from "./view.js";
import * as model from "./model.js";

///////////////*All Services*///////////////
(() => {
    const items = model.ReadTask();
    view.ShowAllTask(items);
})();

const AddNewTask = (value) => {
    const index = model.SaveTask(value); 
    if (index) {
        view.AddTask(value, index);
    }
    view.AddTask(value , 0);
}

const DeleteAllTask = () => {
    model.DeleteAll();
    view.DeleteAll();
}

const DeleteOneTask = (index,li) => {
    model.RemoveTask(index);
    view.RemoveTask(li);
}

const UpdateTask = (btn_edit) => {
    const data = view.UpdateTask(btn_edit);
    model.UpdateTask(data);
}
///////////////////////////////
const btndels = document.getElementsByClassName("btn delete");
for (let i = 0 ; i < btndels.length; i++) {
    btndels[i].addEventListener("click" , () => {
        const li = btndels[i].parentElement;
        DeleteOneTask(i,li)
    });
}

const btnedits = document.getElementsByClassName("btn edit");
for (let i = 0 ; i < btnedits.length; i++) {
    btnedits[i].addEventListener("click" , () => {
        // const li = btnedits[i].parentElement;
        UpdateTask(btnedits[i])
    });
}

document.getElementById("add-new-task").addEventListener("click" , () => {
    const value = document.getElementById("new-task").value;
    AddNewTask(value);  //controller.addnewtask()
})

document.getElementById("delete-all").addEventListener("click" , () => {
    DeleteAllTask(); //controller.deleteAlltask -- business logic layer -- bll
})

