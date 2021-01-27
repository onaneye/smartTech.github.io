var fCircle = document.querySelector("div.first-circle");
var sCircle = document.querySelector("div.second-circle");

count = 0;

function loader(){
    count++;
    console.log(count);

    if (count == 5) {
        fCircle.classList.add("style")
        sCircle.classList.add("style2")
    }
    if (count == 6) {
        sCircle.classList.add("style3")
        fCircle.classList.add("style4")
    }
    if (count === 7) {
        fCircle.classList.add("style5")
        sCircle.classList.add("style6")
        count=0;
        location.href = "index.html";
    }
   

}

setInterval(loader, 1000);