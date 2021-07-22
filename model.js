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

export function AddTask({id, value}) {
    let array
    if(localStorage["tasks"]) {array = JSON.parse(localStorage["tasks"])}
    else {array = []}
    array.push({id, value});
    localStorage["tasks"] = JSON.stringify(array);
}

export function DeleteAll() {
    localStorage["tasks"] = JSON.stringify([]);
}

export function Delete(id){
    const tasks = JSON.parse(localStorage["tasks"])
    localStorage["tasks"] = JSON.stringify(tasks.filter(task=> task.id !== id));
}
