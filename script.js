audio.addEventListener("loadedmetadata", () => {
    let audio = document.getElementById('audio');
    const songDuration = document.querySelector('.songDuration');
    let currentTimeDisplay = document.getElementById("currentTime");
    let range = document.getElementById("range");
    
    const musicDuration = audio.duration;
    const formatedTime = formatTime(musicDuration);
    audio.currentTime = 0;
    songDuration.textContent = formatedTime;
    range.max = Math.floor(musicDuration); 
    currentTimeDisplay.textContent = formatTime(audio.currentTime);

    audio.addEventListener("timeupdate", () => {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        range.value = Math.floor(audio.currentTime);
    });


    range.addEventListener("input", () => {
        audio.currentTime = range.value;
       
    })
});

document.querySelector('.play-button').addEventListener('click', function() {
    const pauseButton = document.querySelector('.js-play');
    let audio = document.getElementById('audio');
    
    if (audio.paused) {
        if (pauseButton) {
            pauseButton.classList.remove('fa-play');
            pauseButton.classList.add('fa-pause');
        }
        audio.play();
    } else {
        if (pauseButton) {
            pauseButton.classList.add('fa-play');
            pauseButton.classList.remove('fa-pause');
        }
        audio.pause();
    }
});

function formatTime(musicDuration) {
    const min = Math.floor(musicDuration / 60);
    const sec = Math.floor(musicDuration % 60);
    return `0${min}:${sec < 10 ? '0' : ''}${sec}`;
}


function letterActivate() {
    const letter = document.querySelector('.js-letter');
    
    if (!letter.classList.contains('letter')) {
        letter.classList.add('letter', 'pop-in');
        letter.classList.remove('pop-out');
        letter.innerHTML = `
            <div class="letterContainer"> 
                <p class="letterTitle">My love,</p><br><br>
                <p class="mainLetter"> &nbsp  Happy first monthsary again, my love! I can’t believe how fast time flies, but every single moment with you has been magical, I love youuu💕.Katulad ng sinabi mo  words cant describe how much I love you. Magready ka kasi marami kang thank you na mababasa rito HAHAHAHAHA. First of all. thank you for giving me another chance para mahalin ka and also for making me feel special. I hope you always remember na you're the only one I want. I hope sa loob ng one month is napasaya kita and napakita kung gaano ka ka importante sa akin, all i want is for you to be happy and mafeel mo yung love na deserve mo.  Super thankful ako kay Lord kasi kahit na sobrang tagal natin na walang connection is gumawa pa rin sya ng way para bumalik tayo sa isa’t isa and ngayon naniniwala na ako na kung para sayo, para sayo talaga. I’ll do my best to make you happy in this relationship. I know na relationship is not all about happiness, may times na magkakaroon ng misunderstanding pero I hope na sana samahan mo ako na harapin yun. I really want to be with you and gawin lahat ng plano natin in the future. I love you more than I could ever really say and thank you for making every moment special. I look forward na marami pang memories na magki-create natin ng magkasama. Lagi mong tandaan na mahal na mahal kita. Thank you rin sa palaging pagcompliment sa akin, actually noon is hindi ako sanay pero ikawwwww sinamay mo ako and nagdadagdagan yung confidence na meron ako. Sana alam mo rin kung gaano ka kaganda para sa akin and you are perfect just the way you are. You’re beautiful, inside and out, and I hope you always remember that. You’re my everything my joy, my hope, my love.  Thank you for being you and for being mine. I love you more than you could ever know and lagi kong ipaparamdam sayo yan.


                
                
                
                </p>
                
            </div>
        `;
    } else {
        letter.classList.remove('pop-in');
        letter.classList.add('pop-out');
        
        setTimeout(() => {
            letter.classList.remove('letter');
            letter.innerHTML = ""; 
        }, 500); 
    }
}
