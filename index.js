const image = document.getElementById('cover');
const titre = document.getElementById('music-title');
const artiste = document.getElementById('music-artist');
const heureActuelleEl = document.getElementById('current-time');
const dureeEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const playerProgress = document.getElementById('player-progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const arrierePlan = document.getElementById('bg-img');

const musique = new Audio();

const chansons = [
    {
        chemin: "music/1.mp3",
        nom:  "La vie d'un... / Ma préférée",
        couverture: "assets/1.jpg",
        artiste: 'Dadju, Tayc',
    },
    {
        chemin: "music/2.mp3",
        nom: 'Cohiba',
        couverture: "assets/2.jpg",
        artiste: 'Josman'
    },
    {
        chemin: "music/3.mp3",
        nom: 'ROLE MODELZ',
        couverture: "assets/3.jpg",
        artiste: 'Brent Faiyaz ',
    },
    {
        chemin: "music/4.mp3",
        nom: 'So Far Gone | Fast Life Bluez',
        couverture: "assets/4.jpg",
        artiste: 'Brent Faiyaz '
    },
    {
        chemin: "music/5.mp3",
        nom: 'Compliqué',
        couverture: "assets/5.jpg",
        artiste: 'Dadju'
    },
    {
        chemin: "music/6.mp3",
        nom: '530',
        couverture: "assets/6.jpg",
        artiste: 'Kanye West '
    },
    {
        chemin:"music/7.mp3",
        nom : "alone again",
        couverture :"assets/7.jpg",
        artiste:"the weeknd"
    }
    
];


let indexMusique = 0;
let enLecture = false;

function basculerLecture() {
    if (enLecture) {
        pauseMusique();
    } else {
        jouerMusique();
    }
}

function jouerMusique() {
    enLecture = true;
    // Changer l'icône du bouton de lecture
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Définir le titre du bouton en survol
    playBtn.setAttribute('title', 'Pause');
    musique.play();
}

function pauseMusique() {
    enLecture = false;
    // Changer l'icône du bouton de pause
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Définir le titre du bouton en survol
    playBtn.setAttribute('title', 'Lecture');
    musique.pause();
}

function chargerMusique(chanson) {
    musique.src = chanson.chemin;
    titre.textContent = chanson.nom;
    artiste.textContent = chanson.artiste;
    image.src = chanson.couverture;
    arrierePlan.src = chanson.couverture;
}

function changerMusique(direction) {
    indexMusique = (indexMusique + direction + chansons.length) % chansons.length;
    chargerMusique(chansons[indexMusique]);
    jouerMusique();
}

function mettreAJourBarreProgression() {
    const { duration, currentTime } = musique;
    const pourcentageProgression = (currentTime / duration) * 100;
    progress.style.width = `${pourcentageProgression}%`;

    const formaterTemps = (temps) => String(Math.floor(temps)).padStart(2, '0');
    dureeEl.textContent = `${formaterTemps(duration / 60)}:${formaterTemps(duration % 60)}`;
    heureActuelleEl.textContent = `${formaterTemps(currentTime / 60)}:${formaterTemps(currentTime % 60)}`;
}

function reglerBarreProgression(e) {
    const largeur = playerProgress.clientWidth;
    const clicX = e.offsetX;
    musique.currentTime = (clicX / largeur) * musique.duration;
}



playBtn.addEventListener('click', basculerLecture);
prevBtn.addEventListener('click', () => changerMusique(-1));
nextBtn.addEventListener('click', () => changerMusique(1));
musique.addEventListener('ended', () => changerMusique(1));
musique.addEventListener('timeupdate', mettreAJourBarreProgression);
playerProgress.addEventListener('click', reglerBarreProgression);

chargerMusique(chansons[indexMusique]);


  