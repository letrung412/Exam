import * as view from "./view.auth.js";
import * as model from "./model.auth.api.js";

////DOM/////

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.getElementById('btnSignin').addEventListener('click',()=>{
    const username = document.getElementById('unSignin')
    const password = document.getElementById('pwSignin')
    if(username !== '' && password !== '')
        funcLogin(username.value, password.value)
    else 
        view.noti('Please enter all the information!')
})

document.getElementById('btnSignup').addEventListener('click',()=>{
    const fullname = document.getElementById('fnSignup')
    const username = document.getElementById('unSignup')
    const password = document.getElementById('pwSignup')

    if(username !== '' && password !== '' && fullname !=='')
        funcRegister(fullname.value, username.value, password.value)
    else 
        view.noti('Please enter all the information!')
})

///Methods/////

async function funcLogin(un, pw){
    try{
        const data = await model.login(un,pw)
        if(typeof data == 'object'){
            view.login(data)
        }
        else 
            view.noti('Username or/and password wrong!')
    }catch(err){
        console.log(err)
    }
}

async function funcRegister(fn, un, pw){
    try{
        const data = await model.register(fn,un,pw)
        if(typeof data == 'object'){
            view.noti('Successful!')
            view.register(data)
        }  
        else 
            view.noti(data)
    }catch(err){
        console.log(err)
    }
}

