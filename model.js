export function SaveTask(value) {
    let index;
    let array = localStorage["tasks"]; 
    let obj = {};
    if (value.length == 0) {
        return alert `Chua nhap gia tri`
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
    localStorage.clear()
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

export function SaveEditTask(index, value, oldValue) {
    const list = JSON.parse(localStorage["tasks"])
    const oldObj = list[index]
    const newObj = {
        id : oldObj.id,
        value : value ? value : oldValue
    }
    if(!value) {
        alert `Khong the bo trong`
    } else {
        list.splice(index, 1, newObj)
        localStorage["tasks"] = JSON.stringify(list)
    }
}
