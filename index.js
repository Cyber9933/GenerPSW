const btnEl=document.querySelector(".btn");
const inputEl=document.getElementById(".input");
const copyIconEl=document.querySelector(".fa-copy");
const alertContainerEl=document.querySelector(".alert-container");

btnEl.addEventListener('click',()=>{
    createPassword();
})
copyIconEl.addEventListener('click',()=>{
    copyPassword();

    if(inputEl.value){
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 2000);
    }
})
function createPassword() {
    const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    const passwardLength=14;
    let password="";
    for(let i=0;i<passwardLength;i++){
        const randomIndex=Math.floor(Math.random()*chars.length);
        password+=chars[randomIndex];
    }
    inputEl.value=password;
    alertContainerEl.innerText=`Password Copied: ${password}`;
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(inputEl.value)
}