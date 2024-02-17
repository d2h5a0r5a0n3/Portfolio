const dark=document.getElementById('dark');
const body=document.body;
dark.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
});
function change(){
    let change=dark.querySelector('i');
    if(body.classList.contains('dark-mode')){
        change.classList.remove("fa-sun");
        change.classList.add("fa-moon");
    }
    else{
        change.classList.remove("fa-moon");
        change.classList.add("fa-sun");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const text = "Front end developer";
    const delay = 200; // Adjust the delay between each character

    let index = 0;
    const intervalId = setInterval(function() {
        const char = text[index];
        const animateText = document.getElementById('f');
        animateText.textContent += char;
        index++;

        if (index === text.length) {
            clearInterval(intervalId);
        }
    }, delay);
});
document.addEventListener('DOMContentLoaded', function() {
    const text = "Dharaneshwar";
    const delay = 300; // Adjust the delay between each character

    let index = 0;
    const intervalId = setInterval(function() {
        const char = text[index];
        const animateText = document.getElementById('dha');
        animateText.textContent += char;
        index++;

        if (index === text.length) {
            clearInterval(intervalId);
        }
    }, delay);
});
document.addEventListener('DOMContentLoaded', function() {
    const text = "Html Css BootStrap JavaScript React code";
    const delay = 100; // Adjust the delay between each character

    let index = 0;
    const intervalId = setInterval(function() {
        const char = text[index];
        const animateText = document.getElementById('code');
        animateText.textContent += char;
        if(char==" "){
            animateText.textContent=null;
        }
        index++;

        if (index === text.length) {
            clearInterval(intervalId);
        }
    }, delay);
});
document.addEventListener('DOMContentLoaded', function() {
    const text = "Html Css BootStrap JavaScript React code";
    const delay = 100; // Adjust the delay between each character

    let index = 0;
    const intervalId = setInterval(function() {
        const char = text[index];
        const animateText = document.getElementById('code1');
        animateText.textContent += char;
        if(char==" "){
            animateText.textContent=null;
        }
        index++;

        if (index === text.length) {
            clearInterval(intervalId);
        }
    }, delay);
});