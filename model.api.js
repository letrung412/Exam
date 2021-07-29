const BASE_URL = "https://authencation.vercel.app/api/todo"

const ENDPOINT_API = {
    LIST : `${BASE_URL}/list`,
    GET : `${BASE_URL}/get?id=`,
    CREATE : `${BASE_URL}/create`,
    UPDATE : `${BASE_URL}/update?id=`,
    DELETE : `${BASE_URL}/delete?id=`,
    DELETE_ALL : `${BASE_URL}/delete_all`
}

export function ReadTask() {
    return fetch(ENDPOINT_API.LIST , {
        mode : "cors",
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export function SaveTask(value) {
    return fetch(ENDPOINT_API.CREATE , {
        method : "POST",
        mode : "cors",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({name : value}),
    }).then(res => res.json())
    .then(data => data.id)
    .catch(err => console.log(err))
}

export function RemoveTask(id) {
    fetch(ENDPOINT_API.DELETE + id , {
        method : "POST",
        mode : "cors",
        headers : {
            "Content-Type" : "application/json"
        },
    }).catch(err => console.log(err))
}

export function UpdateTask(data) {
    fetch(ENDPOINT_API.UPDATE + data.id , {
        method : "POST",
        mode : "cors",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({name : data.value}),
    }).catch(err => console.log(err))
}