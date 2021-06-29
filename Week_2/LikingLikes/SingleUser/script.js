var click = 0
//  var firstLike = documant.querySelector("likeCounter")
//  function addLikes(){
//      likes[0]++;
//      firstLike.innerText = likes[0] + "like(s)"
// }

function handlesClick(){
    click++
    likeCounter.innerHTML = `${click} Like(s) `
}