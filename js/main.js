let slides = document.getElementsByClassName('slide');

let imgAttiva;
let prossimaSlide;

document.getElementById('btnNext').addEventListener('click', function () {

    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i];
        console.log(i, slide);
    
    
        if (slide.classList.contains("active")) {
    
            slide.classList.remove('active');
    
            imgAttiva = i;
    
            console.log('rimuovi classe attiva', i);
        }
    }
    
    prossimaSlide = imgAttiva +1;
    
    if( prossimaSlide >= slides.lenght){
        prossimaSlide = 0;
    }
    
    slides[prossimaSlide].classList.add ('active');
    
    console.log('immagine attiva era:', imgAttiva);
});

