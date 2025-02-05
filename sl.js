const content = "Hello, Ureca. . .";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)




// 네비게이션 바 클릭 시 사용할예정 
$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

