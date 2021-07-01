
    function handlesClick(){
        confirm('Your cart is empty')
    }

    function hide(element) {
        element.remove()
        document.querySelector('div').remove()
    }

    function changePic1(){
        var newPic = document.querySelector('#succulent');
        newPic.src ="images/succulents-2.jpg";
    }

    function changePic2(){
        var newPic = document.querySelector('#succulent');
        newPic.src ="images/succulents-1.jpg";
    }


//     function changePic1(element) {
//         document.getElementById("succulent").src = "images\assets\succulents-1.jpg";
// }
//     function changePic2(element){
//         document.getElementById("succulent").src = "images\assets\succulents-2.jpg";
// }

