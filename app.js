const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const fermertureModale = document.querySelector('.fermerture-modale');
const imgIndex = document.querySelector('.bloc-modale img');


if(window.matchMedia("(min-width: 850px)").matches){
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {

            imgIndex.src = `ressources/${e.target.getAttribute("data-index")}.jpg`;
            modaleEquipement.classList.add('active-modale');

        })
    })

    modaleEquipement.addEventListener('click', () => {
        modaleEquipement.classList.remove('active-modale');
    })
}


// Anim Navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    
    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})
