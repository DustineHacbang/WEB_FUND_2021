
var click = 0
function handlesClick(element){
    click++
    element.innerHTML = `${click} like `
    confirm('Ninja was liked')
}




function changeText(){
    var button = document.querySelector("button")
    button.textContent = "Logout"
}

function removeElement(element){
    element.remove()
}