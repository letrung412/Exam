export function ModelNoti(result) {
    alert(result);
}

export function Redirect(username) {
    alert(`Create username : ${username} Successful`);
    window.location.replace("http://127.0.0.1:5500/login_page/login.html")
}