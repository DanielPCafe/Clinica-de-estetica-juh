
window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 495)
})

function nextImage(){
  count++;
  if(count>7){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 5000)
