function hide(element) {
    element.remove()
    document.querySelector('#subscribe').remove()
}

var click = 314
function handlesClick(element){
    click++
    element.innerHTML = `${click}`
}

var click2 = 159
function handlesClick2(element){
    click2++
    element.innerHTML = `${click2}`
}

function timer(){
    confirm("Ninjas Won") 
}
setTimeout(timer,5000)