// ==========================================
// CLAIRE ALEXIS PORTFOLIO
// ==========================================


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Typing Effect
// ================================

const typing = document.getElementById("typing");

const text = "Computer Science Student";

let index = 0;

let deleting = false;

function type(){

    if(!typing) return;

    if(!deleting){

        typing.textContent = text.substring(0,index+1);

        index++;

        if(index === text.length){

            deleting = true;

            setTimeout(type,1800);

            return;

        }

    }else{

        typing.textContent = text.substring(0,index-1);

        index--;

        if(index===0){

            deleting=false;

        }

    }

    setTimeout(type,deleting ? 45 : 90);

}

type();


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-180;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ================================
// Fade In On Scroll
// ================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// ================================
// Header Shadow
// ================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.boxShadow="0 18px 40px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}

});


// ================================
// Back To Top Button
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show-top");

}else{

topBtn.classList.remove("show-top");

}

});