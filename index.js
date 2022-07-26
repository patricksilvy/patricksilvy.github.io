const iconMobileActivate = document.querySelector('.activeMobileNav')
const iconMobileNotActivate = document.querySelector('.notActiveMobileNav')
const mobileIcon = document.querySelector('#mobileIcon')
const menu  = document.querySelector('.menu')
const skills = document.querySelectorAll('.table-skills article')
const projects = document.querySelectorAll('.project .projects article img')

const linksMenu = document.querySelectorAll('.menu ul li a')

let activeMobileNav = false

mobileIcon.addEventListener("click", () => mobileNav())

window.addEventListener('resize', setWindowSize);
window.addEventListener('scroll', hideMenu)

const activate = (element) => element.style.display = 'flex'
const notActivate = (element) => element.style.display = 'none'

skills.forEach((skill, index) => {
    skill.addEventListener("mouseenter", () => skill.style.transform = "scale(1.1)")
    skill.addEventListener("mouseleave", () => skill.style.transform = "scale(1)")

    // if(index < projects.length) {
    //     console.log(projects[index])
    //     projects[index].addEventListener("mouseenter", () => projects[index].style.transform = "scale(1.5)")
    //     projects[index].addEventListener("mouseleave", () => projects[index].style.transform = "scale(1)")
    // }
})


function mobileNav() {
    if(activeMobileNav) {
        activate(iconMobileActivate)
        notActivate(iconMobileNotActivate)
        activate(menu)
    } else {
        activate(iconMobileNotActivate)
        notActivate(iconMobileActivate)
        notActivate(menu)
    }

    return activeMobileNav = !activeMobileNav
}

let prevScrollpos = window.pageYOffset;

function hideMenu() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.menu-mobile').style.top = '0';
        document.querySelector(".menu").style.top = "0";

    } else {
        document.querySelector('.menu-mobile').style.top = '-50px';
        document.querySelector(".menu").style.top = "-50px";

        if(!activeMobileNav) {
            document.querySelector(".menu").style.top = "-180px";
        }
    }

    prevScrollpos = currentScrollPos;
}

function setWindowSize() {
    if (typeof (window.innerWidth) == 'number') {
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else {
        if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
        }
    }   

    if(myWidth >= 780) {
        mobileNav()
        return activeMobileNav = true
    } else {
        linksMenu.forEach(link => {
            link.onclick = () => mobileNav()
        })
    }
}

mobileNav()
setWindowSize()