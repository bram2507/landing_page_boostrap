
var show = true;

function sendEmail(){

}

function open(){
  
  
}

var flag = false;
function open_menu(){
 
  if(flag){
    document.getElementById("menu_block").style.display = "none";
    flag = !flag;
  }
  else{
    document.getElementById("menu_block").style.display = "block";
    flag = !flag;
  }

}

function ready(){
  document.getElementById('topButton').addEventListener('click',()=>{
    window.scrollTo(0,0);
  });
}





// function goTop(){
//   window.scrollTo(0,0);
//   alert("Hola mundo");
// }