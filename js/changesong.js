const songlist = document.querySelectorAll("li");
const nowplayingbar = document.querySelector(".nowplaying-bar");
const nowAlbumImage = document.querySelector(".js-albumImage");
const nowSongTitle = document.querySelector(".js-playerTitle");
const nowSingerName = document.querySelector(".js-playerSubtitle");
const nowSongAudio = document.querySelector("audio");
const nowSongSource = document.querySelector("#js-music-src");

function movePlayingAnimation(target) {
  songlist.forEach((element) => {
    element.querySelector(".song-playing").classList.add("hiding");
  });
  target = target.querySelector(".song-playing");
  target.classList.remove("hiding");
}
function changeNowplayingBar(target) {
  const songTitle = target.querySelector(".js-songTitle").innerHTML;
  const singerName = target.querySelector(".js-singerName").innerHTML;
  nowplayingbar.querySelector(".js-singerName").innerHTML = singerName;
  nowplayingbar.querySelector(".js-songTitle").innerHTML = songTitle;
}
function changeSong(songTitle){
  const musicName = "music/"+songTitle+".mp3";
  nowSongSource.src = musicName;
  nowSongAudio.load();
  nowSongAudio.play();
  if(playerPlayPauseButton.classList.contains("fa-play")){
    toggleIcons();
  }
}
function changePlayerScreen(target) {
  nowSongAudio.pause();
  const songTitle = target.querySelector(".js-songTitle").innerHTML;
  const singerName = target.querySelector(".js-singerName").innerHTML;
  const albumImage = target.querySelector(".song__img").src;
  nowAlbumImage.src = albumImage;
  nowSongTitle.innerHTML = songTitle;
  nowSingerName.innerHTML = singerName;
  changeSong(songTitle);
}

function clickHandler(event) {
  let target = event.target;
  if (target.tagName != "LI")
    while (target.parentNode.className !== "song-list") {
      target = target.parentNode;
    }
  movePlayingAnimation(target);
  changeNowplayingBar(target);
  changePlayerScreen(target);
}

function init() {
  songlist.forEach((element) => {
    element.addEventListener("click", clickHandler);
  });
}

init();
