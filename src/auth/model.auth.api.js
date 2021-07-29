const BASE_URL = 'https://authencation.vercel.app/api/'

const END_POINTS = {
    LOGIN: BASE_URL + 'auth/login',
    REGISTER: BASE_URL + 'user/create',
    GETUSER : BASE_URL + "user/get?id="
}


export async function login(un, pw){
    try{
        const data = { username: un, password: pw };
        const res = await fetch(END_POINTS.LOGIN,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json()
        if (typeof(resData) == "object") {
            const res = await fetch(END_POINTS.GETUSER + resData.user_id, { 
                mode : "cors",
                headers : {
                    'Content-Type': 'application/json'
                }
            });
            const user = await res.json();
            return user;
        }
        return resData
    }catch(err){
        console.log(err)
    }
}

export async function register(fn, un, pw){
    try{
        const data = {full_name: fn, username: un, password: pw };
        const res = await fetch(END_POINTS.REGISTER,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json()
        return resData
    }catch(err){
        console.log(err)
    }
}