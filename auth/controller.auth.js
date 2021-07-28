import * as view from "./view.auth.js";
import * as model from "./model.auth.api.js";

////DOM/////
document.getElementById('btnSignin').addEventListener('click',()=>{
    const username = document.getElementById('unSignin')
    const password = document.getElementById('pwSignin')

    funcLogin(username.value, password.value)
})

document.getElementById('btnSignup').addEventListener('click',()=>{
    const fullname = document.getElementById('fnSignup')
    const username = document.getElementById('unSignup')
    const password = document.getElementById('pwSignup')

    funcRegister(fullname.value, username.value, password.value)
})

///Methods/////

async function funcLogin(un, pw){
    try{
        const data = await model.login(un,pw)
        if(typeof data == 'object')
            view.login(data)
        else 
            view.noti('Username or/and password wrong!')
    }catch(err){
        console.log(err)
    }
}

async function funcRegister(fn, un, pw){
    try{
        const data = await model.register(fn,un,pw)
        if(typeof data == 'object')
            view.register(data)
        else 
            view.noti(data)
    }catch(err){
        console.log(err)
    }
}

