import * as view from "./register_views.js";
import * as model from "./register_model.js";

document.getElementById("register").addEventListener("click" , () => Register());

async function Register() {
    const full_name = document.getElementById("full_name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = { full_name , username , password}; 
    const user = await model.Register(data);
    if (typeof(user) == "string") {
        view.ModelNoti(user);
    }
    if (user.username) {
        view.Redirect(user.username);
    }
    console.log(user);
}