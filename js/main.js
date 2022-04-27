// abre e fecha menu quando clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// esconde menu quando clicar em um item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    }) 
}

// mudar o header da pagina quando der scroll
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        //maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}

// Testimonials swiper
const swiper = new Swiper('.swiper-container', {
    slidePerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewhell:true,
    keyboard: true
})

// ScrollReveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})
  
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
{ interval: 100 }
)

// botão voltar para o topo
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY > 560) {
        backToTopButton.classList.add('show')
    } else {
    backToTopButton.classList.remove('show')
}
}

// Rolagem do scrool
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})