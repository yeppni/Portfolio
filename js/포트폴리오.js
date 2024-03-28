//메뉴 동작
$(".menu>.mainmenu").mouseover(function(){
  $(this).find("ul").stop().slideDown();
}).mouseout(function(){
  $(this).find("ul").stop().slideUp();
})


//이미지 슬라이드
let slid = document.querySelector(".img_slid");
let Child = slid.getElementsByClassName("child");

let currentIndex = 1;
let imgCnt = Child.length;
let time = 2500;
let x = 1902;

setInterval(function(){

  let trans = currentIndex * x;

  slid.style.transform = "translateX(-"+trans+"px)";

  currentIndex++;

  if(currentIndex == imgCnt){
    currentIndex = 0;
  }
},time)









//문의목록 동작
let in_name = document.getElementById("name");
let in_email = document.getElementById("email");
let box = document.getElementById("memo_box");
let but = document.querySelector("button");
let list = document.getElementById("memo-list");

but.addEventListener("click", function(){
  let m_name = in_name.value;
  let m_email = in_email.value;
  let m_box = box.value;

  if( m_name,m_box,m_email != ""){
    let li = document.createElement("li");

    li.innerText = m_name+ " / " + m_box + " / " + m_email;
    li.style.fontSize = "15px"
    li.style.padding = "10px 15px"
    li.style.margin = "5px"
    li.style.backgroundColor = "#fff"
    li.style.border = "1px solid #79767c"
    li.style.borderRadius = "5px"
    li.style.color = "#3D3B40"
    li.style.textAlign = "center"
    li.style.fontFamily = "SUITE-Regular"
    
    list.appendChild(li);
  }

});