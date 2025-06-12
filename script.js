let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let body = document.getElementsByTagName("body")

window.addEventListener("keydown" , (event) => {
    // let para1 = document.createElement("p");
    // let para2 = document.createElement("p");
    // let para3 = document.createElement("p");
    
    // para1.classList.add("p1");
    // para2.classList.add("p2");
    // para3.classList.add("p3");

    // para1.style.color = "white" ;
    // para2.style.color = "white" ;
    // para3.style.color = "white" ;

    // para1.innerText = `${event.key === " " ? "Shift" : event.key}`;
    // box1.append(para1);
    
    // para2.innerText = event.keyCode ;
    // box2.append(para2);
    
    // para3.innerText = event.code;
    // box3.append(para3);

    // console.log(box2);

     box1.innerHTML = `<h1> ${event.key == " " ? "Space" : event.key} </h1>`;
     box2.innerHTML = `<h1> ${event.keyCode} </h1>`;
     box3.innerHTML = `<h1> ${event.code} </h1>`;
    
})