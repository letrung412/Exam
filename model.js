export function SaveTask(value) {
    const array = JSON.parse(localStorage["tasks"])
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
    localStorage["tasks"] = JSON.stringify([]);
}

export function Delete(index){
    const tasks = JSON.parse(localStorage["tasks"])
    tasks.splice(index,1)
    localStorage["tasks"] = JSON.stringify(tasks);
}
