
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




function changeText(){
    var button = document.querySelector("button")
    button.textContent = "Logout"
}

function removeElement(element){
    element.remove()
}