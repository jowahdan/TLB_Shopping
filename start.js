
let div = document.getElementById("bn")
  
function down() {
    let div = document.getElementById("bn")
        div.style.marginTop="40px"   
    
    
   
}
function up() {
    let div = document.getElementById("bn")
    div.style.marginTop="0px"
}
function move() {
   let con = document.getElementById("con")
   con.style.marginTop = "20px"
//    console.log(con);
}
setTimeout(move,200)

