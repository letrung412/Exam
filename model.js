// export function SaveTask(value) {
//     let index;
//     let array = localStorage["tasks"]; 
//     let obj = {};
//     if (value.length == 0) {
//         return;
//     }
//     if (array == undefined) {
//         index = 0;
//         array = [];
//         obj = {
//             id : index,
//             value : value
//         }
//         array.push(obj);
//         localStorage["tasks"] = JSON.stringify(array);
//     }
//     else if (array) {
//         array = JSON.parse(array);
//         if (array.length == 0) {
//             index = 0;
//         } else {
//             index = array[array.length - 1].id + 1;
//         }
//         obj = {
//             id : index,
//             value : value
//         }
//         array.push(obj);
//         localStorage["tasks"] = JSON.stringify(array);
//     }
//     return obj.id;
// }

// export function ReadTask() {
//     try {
//         const items = JSON.parse(localStorage["tasks"]);
//         if (Array.isArray(items)) {
//             return items;
//         }
//         console.log("Invalid data " + items);
//         return [];
//     }catch(err) {
//         return [];
//     }
// }

// export function DeleteAll() {
//     localStorage["tasks"] = JSON.stringify([]);
// }

// export function RemoveTask(index) {
//     const items = JSON.parse(localStorage["tasks"]);
//     if (Array.isArray(items)) {
//         const new_items = items.filter(item => item.id != index);
//         if (items.length == 1) {
//             localStorage["tasks"] = JSON.stringify([]);
//         }
//         localStorage["tasks"] = JSON.stringify(new_items);
//     }
//     return items;
// }

// export function UpdateTask(data) {
//     const items = JSON.parse(localStorage["tasks"]);
//     if (Array.isArray(items)) {
//         items.forEach(item => {
//             if (item.id == data.id) {
//                 item.value = data.value;
//             }
//         })
//         localStorage["tasks"] = JSON.stringify(items);
//     }
//     return items;
// }

export async function ReadTask() {
    try {
        const res = await fetch('https://authencation.vercel.app/api/todo/list')
        const data = await res.json()
        console.log(data)
        return data
        
    } catch (err) {
        console.log(err);
    }
}


export function SaveTask(value) {
    fetch('https://authencation.vercel.app/api/todo/create', {
        method: 'POST',
        body: JSON.stringify({
            name: value,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => { 
            console.log('Data:', data);
            return data
            
        })
}

export function RemoveTask(id){
    fetch(`https://authencation.vercel.app/api/todo/delete?id=${id}`,{
        method: 'POST'
    })
    .then(alert('xóa một bản ghi thành công'))
    .catch(err => {
        console.log(err);
    })
    
}

export function UpdateTask(id,newValue){
    fetch(`https://authencation.vercel.app/api/todo/update?id=${id}`,{
        method: 'POST',
        body: JSON.stringify({
            name: newValue,
        }),
        headers: {
            'Content-type': 'application/json',
        },

    })
    .then(alert('Sửa thành công'))
    .catch(err => {
        console.log(err);
    })
}


export function DeleteAll(){
    fetch('https://authencation.vercel.app/api/todo/delete_all',{
        method: 'POST'
    })
    .then(alert('Xóa thành công'))
    .catch(err => { console.log(err)})
}





