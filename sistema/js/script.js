const imgBanner = ['../sistema\assets\icon\White And Black Gradient Coming Soon Email Header.png,sistema\assets\icon\img\Captura de tela 2024-10-08 140748.png,sistema\assets\icon\img\Captura de tela 2024-10-08 140410.png'];
// definimos as imagens do banner

let fotoInicial = 0;
// index inicial da foto do banner

function slider(){
    // encontrar o banner na pg
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = 
    `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    // mudar para a próxima foto
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 2500)