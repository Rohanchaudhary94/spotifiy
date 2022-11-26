const music = new Audio('audio/1.mp3');
// music.play();
const songs = [
  {
	id: 1,
	songName: `On My Way <br>
	<div class="subtitle">Alan Walker</div>`,
	
	poster: "img/1.jpg"
  },
  {
	id: 2,
	songName: `Alan Walker-Fade <br>
	<div class="subtitle">Daniel Levi</div>`,
	
	poster: "img/2.jpg"
  },
  {
	id: 3,
	songName: `Cartoon - on & On <br>
	<div class=subtitle">Alan Walker</div>`,
	
	poster: "img/3.jpg"
  },
  {
	id: 4,
	songName: `Warriyo - Mortals <br>
	 <div class="subtitle">Mortals</div>`,
	
	poster: "img/4.jpg"
  },
  {
	id: 5,
	songName: `Ertugrul Gazi <br>
	 <div class="subtitle">Ertugrul</div>`,
	
	poster: "img/5.jpg"
  },
  {
	id: 6,
	songName: `Electronic Music <br>
	 <div class="subtitle">Electro</div>`,
	
	poster: "img/6.jpg"
  },
  {
	id: 7,
	songName: `Agar Tum Sath Ho <br>
	 <div class="subtitle">Tamashaa</div>`,
	
	poster: "img/7.jpg"
  },
  {
	id: 8,
	songName: `Sunna Hai <br>
	 <div class="subtitle">Neha Kakker</div>`,
	
	poster: "img/8.jpg"
  },
  {
	id: 9,
	songName: `Dilbar <br>
	 <div class="subtitle">Satyameva Jayate</div>`,
	
	poster: "img/9.jpg"
  },
  {
	id: 10,
	songName: `Duniya <br>
	 <div class="subtitle">Luka Chuppi</div>`,
	
	poster: "img/10.jpg"
  },
  {
	id: 11,
	songName: `Lagdi Lahore Di <br> 
	<div class="subtitle">Street Dancer</div>`,
	
	poster: "img/11.jpg"
  },
  {
	id: 12,
	songName: `Putt Jatt Da <br> 
	<div class="subtitle">Putt Jatt Da</div>`,
	
	poster: "img/12.jpg"
  },
  {
	id: 13,
	songName: `Baarishein <br>
	 <div class="subtitle">Atif Aslam</div>`,
	
	poster: "img/13.jpg"
  },
  {
	id: 14,
	songName: `Vaaste <br>
	 <div class="subtitle">Dhanvi Bhasuhali</div>`,
	
	poster: "img/14.jpg"
  },
  {
	id: 15,
	songName: `Lut Gaye <br> 
	<div class="subtitle">Jubin Nautiyal</div>`,
	
	poster: "img/15.jpg"
  },
  {
	id: 16,
	songName: `Tu Meri Jindgi Hai Tu <br>
	 <div class="subtitle">Jubin Nautiyal</div>`,
	
	poster: "img/16.jpg"
  },
  {
	id: 17,
	songName: `Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha <br> 
	<div class="subtitle">Rahat Fateh Ali Khan</div>`,
	
	poster: "img/17.jpg"
  },
  {
	id: 18,
	songName: `Mere Dhol Judaiyan <br> 
	<div class="subtitle">Ali Sethi Seha Gill</div>`,
	
	poster: "img/18.jpg"
  },
  {
	id: 19,
	songName: `Eh Munde Pagal Ne Saare <br> 
	<div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
	
	poster: "img/19.jpg"
  },
  {
	id: 20,
	songName: `Dunny 82k <br> 
	<div class="subtitle">Ap Dhillon ,Gurinder Gill, Shinda Kahlon</div>`,
	
	poster: "img/20.jpg"
  },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
	e.getElementsByTagName('img')[0].src = songs[i].poster;
	e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// search data start

let searchResults = document.getElementsByClassName('search-results')[0];

songs.forEach(element => {
	const {id, songName, poster} = element;
	// console.log(id);
	let card = document.createElement('a');
	card.classList.add('card');
	card.href = "#" + id;
	card.innerHTML = `
							<img src="${poster}">
							<div class="content">
								${songName}
							</div>		
	`;
	searchResults.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () =>{
	let inputValue = input.value.toUpperCase();
	let items = searchResults.getElementsByTagName('a');
	for(let index = 0; index < items.length; index++){
		let as = items[index].getElementsByClassName('content')[0];
		let textvalue = as.textContent || as.innerHTML;

		if(textvalue.toUpperCase().indexOf(inputValue) > -1){
			items[index].style.display = "flex";
		}else{
			items[index].style.display = "none";
		}

		if(input.value == 0){
			searchResults.style.display = "none";
		}else{
			searchResults.style.display = "";
		}
	}
})
// search data end

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () =>{
	if(music.paused || music.currentTime <= 0){
		music.play();
		wave.classList.add('active1');
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
	} else{
		music.pause();
		wave.classList.remove('active1');
		masterPlay.classList.add('bi-play-fill');
		masterPlay.classList.remove('bi-pause-fill');
	}
});
const makeAllplays = () =>{
	Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
		el.classList.add('bi-play-circle-fill');
		el.classList.remove('bi-pause-circle-fill');
		
	})
}
const makeAllBackground = () =>{
	Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
		el.style.background = 'rbg(105, 105, 105, .0)';
		

	})
}


let index = 0;
let posterMasterPlay = document.getElementById('poster-master-play');
let downloadMusic = document.getElementById('download-music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
	e.addEventListener('click', (el) =>{
		index = el.target.id;
		music.src = `audio/${index}.mp3`;
		posterMasterPlay.src = `img/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		downloadMusic.href = `audio/$(index).mp3`;
		let songTitles = songs.filter((els) =>{
			return els.id == index;
		});
		songTitles.forEach(elss =>{
			let{songName} = elss;
			title.innerHTML = songName;
			downloadMusic.setAttribute('download',songName);

		});

		makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
	});
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
	let music_curr = music.currentTime;
	let music_dur = music.duration;


	let min1 = Math.floor(music_dur / 60);
	let sec1 = Math.floor(music_dur % 60);


	// console.log(min1);

	if(sec1 < 10){
		sec1 = `0${sec1}`;
	}

     currentEnd.innerText = `${min1}:${sec1}`;

     let min2 = Math.floor(music_curr / 60);
     let sec2 = Math.floor(music_curr % 60);

     if(sec2 < 10){
		sec2 = `0${sec2}`;
	}
     currentStart.innerText = `${min2}:${sec2}`;
	


	let progressBar = parseInt((music_curr / music_dur) * 100);
	seek.value = progressBar;
	// console.log(seek.value);

	let seekbar = seek.value;
	bar2.style.width = `${seekbar}%`;
	dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () =>{
	music.currentTime = seek.value * music.duration / 100;
});

let volIcon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let volBar = document.getElementsByClassName('vol-bar')[0];
let volDot = document.getElementById('vol-dot');

vol.addEventListener('change', () =>{
	if(vol.value == 0){
		volIcon.classList.remove('bi-volume-up-fill');
		volIcon.classList.remove('bi-volume-down-fill');
		volIcon.classList.add('bi-volume-off-fill');
	}
	if(vol.value > 0){
		volIcon.classList.remove('bi-volume-up-fill');
		volIcon.classList.add('bi-volume-down-fill');
		volIcon.classList.remove('bi-volume-off-fill');
	}
	if(vol.value > 50){
		volIcon.classList.add('bi-volume-up-fill');
		volIcon.classList.remove('bi-volume-down-fill');
		volIcon.classList.remove('bi-volume-off-fill');
	}
	let vol_a = vol.value;
	volBar.style.width = `${vol_a}%`;
	volDot.style.left = `${vol_a}%`;
	music.volume = vol_a / 100;
});
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
	index -= 1;
	if(index < 1){
		index = Array.from(document.getElementsByClassName('songItem')).length;
	}
	music.src = `audio/${index}.mp3`;
		posterMasterPlay.src = `img/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		let songTitles = songs.filter((els) =>{
			return els.id == index;
		});
		songTitles.forEach(elss =>{
			let{songName} = elss;
			title.innerHTML = songName;

		});

		makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})
next.addEventListener('click', ()=>{
	index++;
	if(index > Array.from(document.getElementsByClassName('songItem')).length){
		index = 1;
	
	
	}
	music.src = `audio/${index}.mp3`;
		posterMasterPlay.src = `img/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		let songTitles = songs.filter((els) =>{
			return els.id == index;
		});
		songTitles.forEach(elss =>{
			let{songName} = elss;
			title.innerHTML = songName;

		});

		makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

});






let popSongLeft = document.getElementById('pop-song-left');
let popSongRight = document.getElementById('pop-song-right');
let popSong = document.getElementsByClassName('pop-song')[0];


popSongRight.addEventListener('click', () => {
	popSong.scrollLeft += 330;
})
popSongLeft.addEventListener('click', () => {
	popSong.scrollLeft -= 330;
});
let popArtLeft = document.getElementById('pop-art-left');
let popArtRight = document.getElementById('pop-art-right');
let artistBx = document.getElementsByClassName('Artist-bx')[0];


popArtRight.addEventListener('click', () => {
	artistBx.scrollLeft += 330;
})
popArtLeft.addEventListener('click', () => {
	artistBx.scrollLeft -= 330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
	let a = shuffle.innerHTML;

	switch (a){
		case "next":
		shuffle.classList.add('bi-arrow-repeat');
		shuffle.classList.remove('bi-music-note-beamed');
		shuffle.classList.remove('bi-shuffle');
		shuffle.innerHTML = 'repeat';
		break;

		case "repeat":
		shuffle.classList.remove('bi-arrow-repeat');
		shuffle.classList.remove('bi-music-note-beamed');
		shuffle.classList.add('bi-shuffle');
		shuffle.innerHTML = 'random';
		break;
		case "random":
		shuffle.classList.remove('bi-arrow-repeat');
		shuffle.classList.add('bi-music-note-beamed');
		shuffle.classList.remove('bi-shuffle');
		shuffle.innerHTML = 'next';
		break;
	}
});



const nextMusic = () =>{
    // index ++;
    if(index == songs.length){
	  	index = 1
	  }else{
	  	index++;
	  }
		music.src = `audio/${index}.mp3`;
		posterMasterPlay.src = `img/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		downloadMusic.href = `audio/${index}.mp3`;
		let songTitles = songs.filter((els) =>{
			return els.id == index;
		});
		songTitles.forEach(elss =>{
			let{songName} = elss;
			title.innerHTML = songName;
			downloadMusic.setAttribute('download',songName);

		});

		makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const repeatMusic = () =>{
    index;
		music.src = `audio/${index}.mp3`;
		posterMasterPlay.src = `img/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		downloadMusic.href = `audio/${index}.mp3`;
		let songTitles = songs.filter((els) =>{
			return els.id == index;
		});
		songTitles.forEach(elss =>{
			let{songName} = elss;
			title.innerHTML = songName;
			downloadMusic.setAttribute('download',songName);

		});

		makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const randomMusic = () =>{
    if(index == songs.length){
	  	index = 1
	  }else{
	  	index = Math.floor((Math.random() * songs.length) + 1);
	  }
		music.src = `audio/${index}.mp3`;
		posterMasterPlay.src = `img/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		downloadMusic.href = `audio/${index}.mp3`;
		let songTitles = songs.filter((els) =>{
			return els.id == index;
		});
		songTitles.forEach(elss =>{
			let{songName} = elss;
			title.innerHTML = songName;
			downloadMusic.setAttribute('download',songName);

		});

		makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

music.addEventListener('ended' , ()=>{
   
   let b = shuffle.innerHTML;

   switch (b){
   	case 'repeat':
   	repeatMusic();
   	break;
   	case 'next':
   	nextMusic();
   	break;
   	case 'random':
   	randomMusic();
   	break;
   }
})