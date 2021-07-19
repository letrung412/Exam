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

export function DeleteAll(array) {
    localStorage["tasks"] = JSON.stringify(array);
}
