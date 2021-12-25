let musicas = [
    {titulo: 'ME DIZ O QUE VOCE TEM VS BEAT NEYMAR', artista: 'DEENE MAXIMO', src:'musicas/ME DIZ O QUE VOCE TEM.mp3',
     img:'imagens/BrolyT.jpg'},
    {titulo: 'DE 4 EU JOGO O RAB*', artista: 'DJ INGRID / THIAGO SILVESTRE', src:'musicas/DE 4 EU JOGO.mp3',
     img:'imagens/GokuV.jpg'},
    {titulo: 'EU QUERO QUE TU VA', artista: 'DS MOVIC & DEENE MAXIMO', src:'musicas/EU QUERO QUE TU VA.mp3',
     img:'imagens/GokuF.jpg'},
    {titulo: 'QUANDO VOCE ESTA O MUNDO PARA VS BEAT NEYMAR', artista: 'DS MOVIC & DEENE MAXIMO', src:'musicas/QUANDO VOCE SENTA.mp3',
     img:'imagens/PicoloP.jpg'},
    {titulo: 'VEDO - YOU GOT IT, REMIX 160BPM', artista: 'PL TORVIC', src:'musicas/GOT IT.mp3',
     img:'imagens/VegetaF.jpg'},
]

let musica = document.querySelector("audio");
let indexmusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img")
let NomeDamusica = document.querySelector(".descricao h2")
let NomeArtista = document.querySelector(".descricao i")

renderizarMusica(indexmusica)

//Eventos
document.querySelector(".botao-play").addEventListener("click", tocarmusica);

document.querySelector(".botao-pause").addEventListener("click", pausarmusica);

musica.addEventListener("timeupdate", atualizarbarra)

document.querySelector(".anterior").addEventListener("click", () => {
    indexmusica--;
    if(indexmusica < 0) {
       indexmusica = 2;
    }
    renderizarMusica(indexmusica);
});

document.querySelector(".proxima").addEventListener("click", () => {
    indexmusica++;
    if(indexmusica > 2) {
       indexmusica = 0;
    }
    renderizarMusica(indexmusica);
});

//Funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        NomeDamusica.textContent = musicas[index].titulo;
        NomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    })
}

function tocarmusica() {
    musica.play();
    document.querySelector(".botao-pause").style.display = "block";
    document.querySelector(".botao-play").style.display = "none";
}

function pausarmusica() {
    musica.pause();
    document.querySelector(".botao-pause").style.display = "none";
    document.querySelector(".botao-play").style.display = "block";
}

function atualizarbarra() {
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempodecorrido = document.querySelector(".inicio")
    tempodecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {

    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+ ':'+ campoSegundos;
}

