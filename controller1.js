
const formlogin = document.querySelectorAll('.form-text input')
const formlabel = document.querySelectorAll('.form-text label')
for(let i=0;i<2;i++){
    formlogin[i].addEventListener('mouseover',function(){
        formlabel[i].classList.add('focus')
    });
    formlogin[i].addEventListener('mouseout',function(){
        if(formlogin[i].value==''){
            formlabel[i].classList.remove('focus')
        }
    })
}
document.getElementById('login').addEventListener('click',() =>{
    if
})
