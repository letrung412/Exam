const addTask = document.getElementById('add-new-task');
addTask.addEventListener("click", function () {
    // Add-button
    const new_task = document.getElementById('new-task');
    console.log(new_task.value)
    const li = document.createElement("li");
    const getValue = document.createElement("h3");
    getValue.innerHTML = new_task.value;
    li.setAttribute("class", "item-value collection-item");
    const ul = document.getElementsByClassName('collection');
    ul[0].appendChild(li)
    li.appendChild(getValue)

    //Del-button

    const buttonDel = document.createElement("button");
    buttonDel.innerText = "Delete";
    buttonDel.setAttribute("class", "btn btn-del");
    li.appendChild(buttonDel)

    //Fix-button
    const buttonFix = document.createElement("button");
    buttonFix.innerText = "Fix";
    buttonFix.setAttribute("class", "btn btn-fix");
    li.appendChild(buttonFix)

    //Fix-task
    buttonFix.addEventListener("click", function () {
        let old_value = li.innerText.slice(0, li.innerText.length - 9);
        new_value = prompt(`Nhập giá trị muốn thay đổi cho: ${old_value}`);
        let htmls = `${new_value}`
        if (new_value == getValue.innerText) {
            alert('Thông tin trùng nhau !')
        }
        else if (new_value === "") {
            alert('Bạn phải nhập thông tin sửa!')
        }
        else {
            getValue.innerHTML = '';
            getValue.innerHTML = htmls

        }


    })

    //Del-task

    buttonDel.addEventListener("click", function () {
        li.remove();

    })

})


//Del-all

const dell_all = document.getElementById('delete-all');
dell_all.addEventListener("click", function () {
    const ul = document.getElementsByClassName('collection');
    ul[0].innerHTML = '';
})






