const BASE_URL = "https://authencation.vercel.app/api/"

const END_POINTS = {
    LOGIN : BASE_URL + "auth/login",
    GETUSER : BASE_URL + "user/get?id="
}

// export function Login(data) {
//     return fetch(END_POINTS.LOGIN, {
//         method : "POST",
//         mode : "cors",
//         headers : {
//             'Content-Type': 'application/json'
//         },
//         body : JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(data => {
//         if (data.user_id) {
//             return fetch(END_POINTS.GETUSER + data.user_id , 
//                 { mode : "cors", headers : { 'Content-Type': 'application/json'}}
//             ).then(res => res.json())
//             .then(user => user)
//             .catch(err => console.log(err))
//         } 
//         return data
//     })
//     .catch(err => console.log(err))
// }

export async function Login(value) {
    const res = await fetch(END_POINTS.LOGIN, { 
        method : "POST",
        mode : "cors",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(value)
    }); 
    const data = await res.json();
    if (typeof(data) == "object") {
        const res = await fetch(END_POINTS.GETUSER + data.user_id, { 
            mode : "cors",
            headers : {
                'Content-Type': 'application/json'
            }
        });
        const user = await res.json();
        return user;
    }
    return data;
}

export function SaveUserInfo(user) {
    if (localStorage["user"] == "undifined") {
        localStorage["user"] = {};
        localStorage.setItem["user"] = JSON.stringify(user);
    }
    localStorage.setItem["user"] = JSON.stringify(user);
}