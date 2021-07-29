const BASE_URL = "https://authencation.vercel.app/api/user/"

const ENDPOINT = {
    CREATE : BASE_URL + "create",
    GETUSER : BASE_URL + "get?id="
}

export function Register(data) {
    return fetch(ENDPOINT.CREATE, {
        method : "POST",
        mode : "cors",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}