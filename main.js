const button = document.getElementById('add-new-task');
  
// const dataList = [];
button.addEventListener('click', () => {
    const new_task = document.getElementById('new-task');
    console.log(new_task.value);
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = new_task.value;

    li.setAttribute('class', 'collection-item');
    const ul = document.getElementsByClassName('collection');
    ul[0].appendChild(li);
    li.appendChild(p);

    //add delete button
    const xoa = document.createElement('button');
    xoa.innerHTML = 'Delete';
    xoa.setAttribute('class', 'btn');
    li.appendChild(xoa);
    xoa.addEventListener('click', () => {
        li.remove();
    })

    //add fix task
    const fix_button = document.createElement('button');
    fix_button.innerHTML = 'Fix';
    fix_button.setAttribute('class', 'btn fix');
    li.appendChild(fix_button);
    
    fix_button.addEventListener('click', function edit(){
        let old_value = p.innerText;
        new_value = prompt(`Nhập giá trị muốn thay đổi cho ${old_value}`);
        let htmls = `${new_value}`;
        p.innerHTML = '';
        p.innerHTML = htmls;
    })
})

// addTask.addEventListener('click', () => newTask())

//delete all task
const delete_all = document.getElementById('delete-all');
delete_all.addEventListener('click', () => {
    const ul = document.getElementsByClassName('collection');
    ul[0].innerHTML = '';
})

