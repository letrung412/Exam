export function SaveTask(value) {
    let index;
    let array = localStorage["tasks"]; 
    let obj = {};
    if (value.length == 0) {
        return;
    }
    if (array == undefined) {
        index = 0;
        array = [];
        obj = {
            id : index,
            value : value
        }
        array.push(obj);
        localStorage["tasks"] = JSON.stringify(array);
    }
    else if (array) {
        array = JSON.parse(array);
        if (array.length == 0) {
            index = 0;
        } else {
            index = array[array.length - 1].id + 1;
        }
        obj = {
            id : index,
            value : value
        }
        array.push(obj);
        localStorage["tasks"] = JSON.stringify(array);
    }
    return obj.id;
}
    
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

export function RemoveTask(index) {
    const items = JSON.parse(localStorage["tasks"]);
    if (Array.isArray(items)) {
        const new_items = items.filter(item => item.id != index);
        if (items.length == 1) {
            localStorage["tasks"] = JSON.stringify([]);
        }
        localStorage["tasks"] = JSON.stringify(new_items);
    }
    return items;
}

export function UpdateTask(data) {
    const items = JSON.parse(localStorage["tasks"]);
    if (Array.isArray(items)) {
        items.forEach(item => {
            if (item.id == data.id) {
                item.value = data.value;
            }
        })
        localStorage["tasks"] = JSON.stringify(items);
    }
    return items;
}