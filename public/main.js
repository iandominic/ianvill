const btn = document.querySelector('#btn-explore').addEventListener("mouseover", myFunction);
const btn2 = document.querySelector('#btn-explore').addEventListener("mouseout", myFunction2);
const btn3 = document.querySelector('#btn-explore2').addEventListener("mouseover", myFunction3);
const btn4 = document.querySelector('#btn-explore2').addEventListener("mouseout", myFunction4);
const btn5 = document.querySelector('#toggle').addEventListener("click", myFunction5);
const btn6 = document.querySelector('#toggle2').addEventListener("click", myFunction6);
const textCss = document.querySelector('#explore');
const textCss2 = document.querySelector('#resume');

function myFunction() {
    textCss.style.transform = "translateX(0px)";
}

function myFunction2() {
    textCss.style.transform = "translateX(-48px)";
}

function myFunction3() {
    textCss2.style.transform = "translateX(0px)";
}

function myFunction4() {
    textCss2.style.transform = "translateX(-48px)";
}

function myFunction5() {
    onClick();
}

function myFunction6() {
    onClick2();
}

function onClick() {
    const html = document.querySelector('html');
    const toggleNight = document.querySelector('#toggle2');
    const toggleLight = document.querySelector('#toggle');
    const imageNight = document.querySelector('#imageLogo');
    const imageLight = document.querySelector('#imageLogo2');
    const lightLogo = document.querySelector('#light-icons');
    const nightLogo = document.querySelector('#dark-icons');
    if(html.classList.remove("dark")) {
        html.classList.add("dark");
    }
    if(toggleLight.classList.add("hidden")) {
        toggleLight.classList.remove("hidden");
    }
    if(toggleNight.classList.remove("hidden")) {
        toggleNight.classList.add("hidden");
    }
    if(imageLight.classList.remove("hidden")) {
        imageLight.classList.add("hidden");
    }
    if(imageNight.classList.add("hidden")) {
        imageNight.classList.remove("hidden");
    }
    if(lightLogo.classList.remove("hidden")) {
        lightLogo.classList.add("hidden");
    }
    if(nightLogo.classList.add("hidden")) {
        nightLogo.classList.remove("hidden");
    }
}


function onClick2() {
    const html = document.querySelector('html');
    const toggleNight = document.querySelector('#toggle2');
    const toggleLight = document.querySelector('#toggle');
    const imageNight = document.querySelector('#imageLogo');
    const imageLight = document.querySelector('#imageLogo2');
    const lightLogo = document.querySelector('#light-icons');
    const nightLogo = document.querySelector('#dark-icons');
    if(html.classList.add("dark")) {
        html.classList.remove("dark");
    }
    if(toggleNight.classList.add("hidden")) {
        toggleNight.classList.remove("hidden");
    }
    if(toggleLight.classList.remove("hidden")) {
        toggleLight.classList.add("hidden");
    }
    if(imageLight.classList.add("hidden")) {
        imageLight.classList.remove("hidden");
    }
    if(imageNight.classList.remove("hidden")) {
        imageNight.classList.add("hidden");
    }
    if(lightLogo.classList.add("hidden")) {
        lightLogo.classList.remove("hidden");
    }
    if(nightLogo.classList.remove("hidden")) {
        nightLogo.classList.add("hidden");
    }
}

