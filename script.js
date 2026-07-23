// ===============================
// Experience Timeline Active Point
// ===============================

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            const circle = entry.target.querySelector(".circle");

            if(entry.isIntersecting){
                circle.classList.add("active");
            }
            else{
                circle.classList.remove("active");
            }

        });

    },
    {
        threshold:0.5
    }
);


timelineItems.forEach(item=>{
    observer.observe(item);
});



// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});



// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



// ===============================
// Reveal Sections Animation
// ===============================

const sections = document.querySelectorAll("section");


const reveal = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);


sections.forEach(section=>{
    section.classList.add("hidden");
    reveal.observe(section);
});



// ===============================
// Automatic Footer Year
// ===============================

const year = document.querySelector("footer p");


if(year){

    year.innerHTML =
    `© ${new Date().getFullYear()} Mohnish Hemdev`;

}



// ===============================
// Typing Effect
// ===============================

const title = document.querySelector(".hero-content h2");


if(title){

const text = title.textContent;

title.textContent="";


let index = 0;


function type(){

    if(index < text.length){

        title.textContent += text[index];

        index++;

        setTimeout(type,100);

    }

}


type();

}