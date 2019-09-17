//nav bar
window.onscroll = function() {scrollFun()};

function scrollFun(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        document.getElementsByClassName("navbar").style.padding = "30px 10px";
        document.getElementsByClassName("logo").style.fontSize = "25px";

    } else {
        document.getElementsByClassName("navbar").style.padding = "12px 16px";
        document.getElementsByClassName("logo").style.fontSize = "35px";
    }
}