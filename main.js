let mainPlay = document.getElementById('mainPlay');
 let audioElement = new Audio('songs/2.mp3');
let progressBar = document.getElementById('range');
let gif = document.getElementById('gif');
let songIndex = 1;
let masterSong=document.getElementById('masterSong');
let songList=Array.from(document.getElementsByClassName('songs'));
let play=Array.from (document.getElementsByClassName('songPlay'));

let songs = [
    { songName: "Let me love", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Bahut pyaar karte hai", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "O purane din", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Suraj hua madham", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: " Kuch kuch hota hai", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "kaha gaye o din", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Why this kolaveri", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Suit suit krda", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Patiyala peg", filePath: "song/9.mp3", coverPath: "covers/8.jpg" },
    { songName: "Baby baby", filePath: "song/10.mp3", coverPath: "covers/10.jpg" },
]

songList.forEach((element,i) =>{
  
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("p")[0].innerText=songs[i].songName;
})
mainPlay.addEventListener('click', () => {
    if (audioElement.paused ||audioElement.currentTime <= 0) {
       audioElement.play();
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
       audioElement.pause();
        mainPlay.classList.remove('fa-circle-pause');
        mainPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    let songPlayed=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=songPlayed;
})

progressBar.addEventListener('change' ,()=>{
   audioElement.currentTime=((progressBar.value*audioElement.duration)/100);

})
const  makeAllPlays=()=>{
         play.forEach((element)=>{
            element.classList.add('fa-circle-play');
          element.classList.remove('fa-circle-pause');
          

         })
}
 play.forEach((element)=>{
    element.addEventListener('click',(e)=>{
          makeAllPlays();
          songIndex=parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
         audioElement.src= `songs/${songIndex}.mp3`;
          masterSong.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
          gif.style.opacity=1;
          mainPlay.classList.remove('fa-circle-play');
          mainPlay.classList.add('fa-circle-pause');
        
    })
 })
 
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=1;
    }
    else{
        songIndex+=1;
      
    }
    
   audioElement.src= `songs/${songIndex}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
    gif.style.opacity=1;
    mainPlay.classList.remove('fa-circle-play');
    mainPlay.classList.add('fa-circle-pause');
 })

 document.getElementById('previous').addEventListener('click',()=>{
     if(songIndex<=1)
     {
        songIndex=1;
     }
     else{
        songIndex-=1;
     }
   
   audioElement.src= `songs/${songIndex}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
    gif.style.opacity=1;
    mainPlay.classList.remove('fa-circle-play');
    mainPlay.classList.add('fa-circle-pause');
 })

