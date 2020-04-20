
import "./index.scss"

// 菜单显示
const navDetailBtn = document.querySelector('#nav .icon-list');
const navList = document.querySelector('.nav-list')
navDetailBtn.addEventListener('click',function(){
    navList.classList.toggle('show')
})
navList.addEventListener('click',function(){
    navList.classList.remove('show')
})

// 导航栏显示
const nav = document.querySelector('#nav');
let timer:any = null
window.addEventListener('scroll',function(event){
    clearTimeout(timer);
    timer = setTimeout(()=>{
        if(window.scrollY>88){
            nav.classList.add('float')
        }else{
            nav.classList.remove('float')
        }
    })    
})

// 发送邮箱
document.querySelector('#footer .submit').addEventListener('click',function(){
    alert('发送成功！')
})