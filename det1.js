function one() {
  let one = document.getElementById("ro")
  let dif = document.getElementById("dif")
  let two = document.getElementById("rot")
  let three = document.getElementById("rota")
    if (one.style.border=="none") {
        
        one.style.border="5px solid black"
        one.style.backgroundColor="rgb(202, 199, 192)"
        dif.style.display="flex"
        two.style.border="none"
    two.style.backgroundColor="whitesmoke"
    dif.style.rotate="0deg"
    three.style.border="none"
  three.style.backgroundColor="whitesmoke"
    }
    else{
      one.style.border="none"
      one.style.backgroundColor="whitesmoke"
      dif.style.display="none"
    }
}
function two() {
  let one = document.getElementById("ro")
  let two = document.getElementById("rot")
  let dif = document.getElementById("dif")
  let three = document.getElementById("rota")
  if (two.style.border=="5px solid black") {
    two.style.border="none"
    two.style.backgroundColor="whitesmoke"
    dif.style.display="none"
}
else{
    two.style.border="5px solid black"
    two.style.backgroundColor="rgb(202, 199, 192)"
    dif.style.display="flex"
    dif.style.rotate="90deg"
    one.style.border="none"
        one.style.backgroundColor="whitesmoke"
        three.style.border="none"
  three.style.backgroundColor="whitesmoke"
}
}
function three() {
  let one = document.getElementById("ro")
  let two = document.getElementById("rot")
  let three = document.getElementById("rota")
  let dif = document.getElementById("dif")
  if (two.style.border=="5px solid black") {
    two.style.border="none"
    two.style.backgroundColor="whitesmoke"
    dif.style.rotate="270deg"
    three.style.border="5px solid black"
    three.style.backgroundColor="rgb(202, 199, 192)"
}
else if (one.style.border=="5px solid black"){
  one.style.border="none"
  one.style.backgroundColor="whitesmoke"
  dif.style.rotate="270deg"
  three.style.border="5px solid black"
  three.style.backgroundColor="rgb(202, 199, 192)"
}
else if (three.style.border=="5px solid black"){
  one.style.border="none"
  one.style.backgroundColor="whitesmoke"
  two.style.border="none"
  two.style.backgroundColor="whitesmoke"
  three.style.border="none"
  three.style.backgroundColor="whitesmoke"
  dif.style.display="none"
}
else{
    three.style.border="5px solid black"
    three.style.backgroundColor="rgb(202, 199, 192)"
    dif.style.display="flex"
    dif.style.rotate="270deg"
    one.style.border="none"
  one.style.backgroundColor="whitesmoke"
  two.style.border="none"
  two.style.backgroundColor="whitesmoke"
}
}
function choise() {
  let div = document.getElementById("sum")
  if (div.style.display=="flow-root") {
    div.style.display="none"
  }
  
  else{
    div.style.display="flow-root"
    
  }
}
let num = document.getElementById("num")
  let s = 0
function up() {
  s++
num.innerHTML= s
num.style.color="black"
  }
  function down() {
    if (s==0) {
        num.innerHTML="no"
        num.style.color="red"
    }
    else{
        s--
        num.innerHTML= s
        num.style.color="black"
    }
  
  }function rial() {
    var dollar = document.getElementById("chan");
    var rial = document.getElementById("chang");
    var pound = document.getElementById("bot");
    var form = document.getElementById("norm");
    if (dollar.innerHTML === "rial") {
      dollar.innerHTML = "dollar";
      rial.innerHTML = "rial";
      form.innerHTML= (form.innerHTML)/2
    } else {
      dollar.innerHTML = "rial";
      rial.innerHTML = "dollar";
      pound.innerHTML="pound"
      form.innerHTML= (form.innerHTML)*2
    }
  }
  
  function pound() {
    var dollar = document.getElementById("chan");
    var rial = document.getElementById("chang");
    var pound = document.getElementById("bot");
    var form = document.getElementById("norm");
    if (dollar.innerHTML === "pound") {
      dollar.innerHTML = "dollar";
      pound.innerHTML = "pound";
      form.innerHTML= (form.innerHTML)/10

    } else if (dollar.innerHTML === "rial") {
      dollar.innerHTML = "pound";
      pound.innerHTML = "dollar";
      rial.innerHTML = "rial";
      form.innerHTML= (form.innerHTML)/10
    } else {
      dollar.innerHTML = "pound";
      pound.innerHTML = "dollar";
      form.innerHTML= (form.innerHTML)*10
      
    }
  }
  
// function rial() {
//   let dolar = document.getElementById("chan")
//    let rial = document.getElementById("chang")
//   let pound = document.getElementById("bot")
//   if (dolar.innerHTML=="rial") {
//     dolar.innerHTML="dolar"
//     rial.innerHTML="rial"
//   }
//   else{
//     dolar.innerHTML="rial"
//     rial.innerHTML="dolar"
//   }
 
  
// }
// function pound() {
//   let dolar = document.getElementById("chan")
//   let rial = document.getElementById("chang")
//   let pound = document.getElementById("bot")
//   let dego = document.getElementById("deg")

//   if (dolar.innerhtml=="dolar") {
//     dolar.innerHTML="pound"
//     pound.innerHTML ="dolar"
 
//   }
//   else if (dolar.innerHTML=="rial") {
   
//     dolar.innerHTML="pound"
//     pound.innerHTML="dolar"
//     rial.innerHTML="rial"
//   }
//   else{
//     dolar.innerHTML="dolar"
//     pound.innerHTML="pound"
   
//   }
// }

function xx(params) {
  let xx = document.getElementById("xm");
  let x = document.getElementById("x");
  let l = document.getElementById("l");
  let ss = document.getElementById("sm");
  xx.style.backgroundColor = "black";
  xx.style.color = "white";
  x.style.backgroundColor = "white";
  x.style.color="black";
  l.style.backgroundColor = "white";
  l.style.color="black";
  ss.style.backgroundColor = "white";
  ss.style.color="black";
}
function x(params) {
  let xx = document.getElementById("xm");
  let x = document.getElementById("x");
  let l = document.getElementById("l");
  let ss = document.getElementById("sm");
  xx.style.backgroundColor="white";
  xx.style.color="black";
  x.style.backgroundColor="black";
  x.style.color="white";
  l.style.backgroundColor="white";
  l.style.color="black";
  ss.style.backgroundColor="white";
  ss.style.color="black";
}
function l(params) {
  let xx = document.getElementById("xm")
  let x = document.getElementById("x")
  let l = document.getElementById("l")
  let ss = document.getElementById("sm")
  xx.style.backgroundColor="white"
  xx.style.color="black";
  x.style.backgroundColor="white"
  x.style.color="black";
  l.style.backgroundColor="black"
  l.style.color="white"
  ss.style.backgroundColor="white"
  ss.style.color="black";
}
function es(params) {
  let xx = document.getElementById("xm")
  let x = document.getElementById("x")
  let l = document.getElementById("l")
  let ss = document.getElementById("sm")
  xx.style.backgroundColor="white"
  xx.style.color="black";
  x.style.backgroundColor="white"
  x.style.color="black";
  l.style.backgroundColor="white"
  l.style.color="black";
  ss.style.backgroundColor="black"
  ss.style.color="white"
}







