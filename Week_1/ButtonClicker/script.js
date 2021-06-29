
var click1 = 0
function handlesClick1(element){
    click1++
    element.innerHTML = `${click1} like `
    confirm('Ninja was liked')
}

var click2 = 0
function handlesClick2(element){
    click2++
    element.innerHTML = `${click2} like `
    confirm('Ninja was liked')
}




function changeText(element){
    if(element.innerText == "Login"){
    element.innerText = "Logout" 
    } else {element.innerText = "Login"}
}



function removeElement(element){
    element.remove()
}