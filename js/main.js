let counter = document.getElementsByClassName("counter");
let lang = document.getElementById("lang");
let arabic = document.getElementById("arabic")

let arr = [];
Array.from(counter).forEach(element => {
    arr = [...arr, element.textContent];
    let demo = new CountUp(element, 0, element.textContent, 0, 2.5);
    demo.start();
});

const changeLang = () => {
    if (arabic.innerHTML == "AR") {
        lang.setAttribute("dir", "rtl")
        arabic.innerHTML = "EN"
    } else
        if (arabic.innerHTML == "EN") {
            lang.setAttribute("dir", "ltr")
            arabic.innerHTML = "AR"
        }
}