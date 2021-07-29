import * as view from "../login/login_views.js";
import * as model from "../login/login_model.js";

document.getElementById("confirm").addEventListener("click" , () => CheckLogin());

async function CheckLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = { username , password }
    const result = await model.Login(data);
    if (result.full_name) {
        view.Redirect(result);
        model.SaveUserInfo(result);
    } 
    else {  
        view.ModelNoti(result);
    }
}