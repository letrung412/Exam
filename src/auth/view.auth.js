export function noti(str){
    alert(str)
}

export function login(data){
    localStorage.clear()
    localStorage.setItem('user', data.id)
    localStorage.setItem('name', data.full_name)
    window.location.replace('http://127.0.0.1:5500/src/tasks/task-list.html')
}

export function register(data){
    console.log(data)
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
}