//#1
document.getElementById('btn1').addEventListener("click", display);
function display(){
document.getElementById("demo1").innerText="Im Right"
}
document.getElementById('btn2').addEventListener("click", display2);
function display2(){
document.getElementById("demo1").innerText="No I'm Right"
}
//#2

let x=document.createElement("button");
console.log(x.innerText = "Dont Hover Over Me");
let parent = document.querySelector("section")
console.log(parent.appendChild(x));
x.style.fontWeight="bold";
x.style.backgroundColor="bisque";

x.addEventListener("mouseover", function hover(){alert ("Hey, I told you not to hover over me!")});

//#4
document.getElementById("submit").addEventListener("click",pswCheck)
function pswCheck(){
    if (document.getElementById("password").value==="123456789"){
        document.getElementById("h1").innerText = "Hello "+
  document.getElementById("name").value;
  }
  else
  {
    alert("Password is incorrect!");
  }
}



