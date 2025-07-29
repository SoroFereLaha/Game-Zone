const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const fermertureModale = document.querySelector('.fermerture-modale');
const imgIndex = document.querySelector('.bloc-modale img');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        imgIndex.src = `ressources/${e.target.getAttribute("data-index")}.jpg`;
        modaleEquipement.classList.add('active-modale');

    })
})

fermertureModale.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
})
modaleEquipement.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
})