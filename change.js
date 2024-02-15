const section=document.querySelector('.sec');
const button=document.querySelector('.btn');
const bgtext=document.querySelector('.bg-text');
const clippath=document.querySelector('.clippath-circle');
const inputFocus=document.querySelector('.newcolor-input');



let newcolor;
button.addEventListener('click',(e) => {
    e.preventDefault();
    newcolor =document.querySelector('.newcolor-input').value;
     section.style.background=newcolor;
     clippath.style.background=newcolor;
     clippath.classList.add('active');
     bgtext.classList.add('fade');
     bgtext.innerHTML = newcolor;
});
 inputFocus.addEventListener('focus', ()=>{
    clippath.classList.remove('active');
    bgtext.classList.remove('fade');
 });