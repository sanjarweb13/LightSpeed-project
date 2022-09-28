function openCloseMenu() {
    const menu = document.querySelector("#mobileMenu")
    if(menu.style.display === "block") {
        menu.style.display = "none"
    }else{
        menu.style.display = "block"
    }
}

document.querySelector("#openBtn").addEventListener("click", function(){
    openCloseMenu();
})

document.querySelector("#closeBtn").addEventListener("click", function(){
    openCloseMenu();
})


//  Sign Up Text Btn functions



//    1
function openCloseText() {
    const text = document.querySelector("#demonstration")
    if(text.style.display === "block") {
        text.style.display = "none"
    }else{
        text.style.display = "block"
    }
}
document.querySelector('#openText').addEventListener('click', function(){
    openCloseText();
})



//     2
function openCloseText2() {
    const text = document.querySelector("#demonstration2")
    if(text.style.display === "block") {
        text.style.display = "none"
    }else{
        text.style.display = "block"
    }
}
document.querySelector('#openText2').addEventListener('click', function(){
    openCloseText2();
})


//     3
function openCloseText3() {
    const text = document.querySelector("#demonstration3")
    if(text.style.display === "block") {
        text.style.display = "none"
    }else{
        text.style.display = "block"
    }
}
document.querySelector('#openText3').addEventListener('click', function(){
    openCloseText3();
})



//     4
function openCloseText4() {
    const text = document.querySelector("#demonstration4")
    if(text.style.display === "block") {
        text.style.display = "none"
    }else{
        text.style.display = "block"
    }
}

document.querySelector('#openText4').addEventListener('click', function(){
    openCloseText4();
})