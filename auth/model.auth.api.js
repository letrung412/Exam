export async function login(un, pw){
    try{
        const data = { username: un, password: pw };
        const url = 'https://authencation.vercel.app/api/auth/login'

        const res = await fetch(url,{
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

export async function register(fn, un, pw){
    try{
        const data = {full_name: fn, username: un, password: pw };
        const url = 'https://authencation.vercel.app/api/user/create'

        const res = await fetch(url,{
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