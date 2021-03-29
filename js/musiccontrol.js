const playerButtonsBox = document.querySelector(".player-buttons-box"),
playerButtons = playerButtonsBox.querySelectorAll("i"),
playerPlayPauseButtonBox = playerButtonsBox.querySelector(".player__playbutton"),
playerPlayPauseButton = playerPlayPauseButtonBox.querySelector(".play_pause");
const nowPlayingButtons = document.querySelector(".nowplaying__btn"),
playingbarPlayPauseButton=nowPlayingButtons.querySelector(".play_pause");

function toggleMusicStatus(){
    if(nowSongAudio.paused){
        nowSongAudio.play();
        playingbarPlayPauseButton.classList.toggle("fa-pause");
        playingbarPlayPauseButton.classList.toggle("fa-play");
        playerPlayPauseButton.classList.toggle("fa-pause");
        playerPlayPauseButton.classList.toggle("fa-play");
    }
    else{
        nowSongAudio.pause();
        playingbarPlayPauseButton.classList.toggle("fa-pause");
        playingbarPlayPauseButton.classList.toggle("fa-play");
        playerPlayPauseButton.classList.toggle("fa-pause");
        playerPlayPauseButton.classList.toggle("fa-play");
    }
}

function clickHandler(event){
    let target = event.target;
    if(target.nodeName === "DIV")
    {
        target = target.firstElementChild;
    }
    if(target.classList.contains("play_pause")){
        toggleMusicStatus();
    }
}

function init(){
    playerButtons.forEach(element => {
        if(!element.classList.contains("play_pause"))
            element.addEventListener("click",clickHandler);
    });
    playerPlayPauseButtonBox.addEventListener("click",clickHandler);
    playingbarPlayPauseButton.addEventListener("click",clickHandler);
}
init();