let body = document.querySelector('body');
let boxes = document.querySelectorAll(".boxes")
boxes.forEach((box) => {
    box.addEventListener('click', function(e) {
      if(e.target.id === "box1"){
        body.style.backgroundColor = "grey";
      } else if(e.target.id === "box2"){
        body.style.backgroundColor = "rgb(61, 61, 255)";
      }
       else if(e.target.id === "box3"){
        body.style.backgroundColor = "rgb(255, 254, 254)";
      }
       else if(e.target.id === "box4"){
        body.style.backgroundColor = "rgb(248, 255, 50)";
      }else if(e.target.id === "random"){
        let random1 = Math.floor(Math.random() * 200);
        let random2 = Math.floor(Math.random() * 250)
        let random3 = Math.floor(Math.random() * 50)
        body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
      }
    });
})