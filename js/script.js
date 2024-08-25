/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar');
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar');
    })
}

/*=============== Start SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active');


        });
        target.classList.add('skills__active');


        tabs.forEach(tab => {
            tab.classList.remove('skills__active');


        });
        tab.classList.add('skills__active');
    })
    })



/*=============== End SKILLS TABS ===============*/



/*=============== Start MIXITUP FILTER PORTFOLIO ===============*/


let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
}); 


/*=============== End MIXITUP FILTER PORTFOLIO ===============*/


/*===== Start Link Active Work =====*/

const linkWork = document.querySelectorAll(".work__item");


function activeWork() {
    linkWork.forEach(l => l.classList.remove('active__work'))
    this.classList.add('active__work');
}

linkWork.forEach(l=>l.addEventListener("click",activeWork))

/*===== End Link Active Work =====*/



/*===== Start Work Popup =====*/

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        
        togglePortfolioPopup();

        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popoup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {

    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;

    document.querySelector(".portfolio__popoup-subtitles span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popoup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
    // document.querySelector(".portfolio__popoup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;


}

/*===== End Work Popup =====*/

/*=============== SERVICES MODAL ===============*/


/*========================Start Services Model===============================*/


const modalViews = document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');



let modal = function (modalClick)
{
    modalViews[modalClick].classList.add('active-modal');
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i);
    })
})


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modelview) => {
            modelview.classList.remove('active-modal');
        })
    })
})







/*========================End Services Model===============================*/


/*=============== SWIPER TESTIMONIAL ===============*/

// ***********************************Start swiper *******************************************

let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        
    },
});


// ***********************************End swiper *******************************************




    
