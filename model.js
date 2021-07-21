let array = [];
export function SaveTask(value) {
    array.push(value);
    localStorage["tasks"] = JSON.stringify(array);
}

//notify
export function ReadTask() {
    try {
        const items = JSON.parse(localStorage["tasks"]);
        if (Array.isArray(items)) {
            return items;
        }
        console.log("Invalid data " + items);
        return [];
    }catch(err) {
        return [];
    }
}

export function DeleteAll() {
    localStorage.clear()
<<<<<<< HEAD
}

export function DeleteTask() {
    const li = document.activeElement.parentNode
    const value = li.firstChild.firstChild.value
    const list = JSON.parse(localStorage.getItem("tasks"))
    const newTasks = list.filter(item => item !== value)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
=======
>>>>>>> 40a5553e909e79be4c2e4b6db600c028b11a75db
}

//export function SaveItem() {
//    const li = document.activeElement.parentNode
//    const input = li.firstChild.firstChild
//    const oldValue = input.defaultValue
//    const list = JSON.parse(localStorage.getItem("tasks"))
//    const newTasks = list.map(item => item === oldValue ? value : item)
//    localStorage.setItem("tasks", JSON.stringify(newTasks))
//}
