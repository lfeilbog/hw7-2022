//Get the first element with id="player1"
//Initialize video element: 
var video = document.querySelector('#player1');

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onload_addeventlistener
//Page Load
//addEventListener() method to attach a "load" event
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//turn off autoplay
	video.autoplay = false 
	console.log("Auto play is set to " + video.autoplay)
	//turn off looping
	video.loop = false
	console.log("Loop is set to " + video.loop)
});

//Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	//Play the video
	video.play();
	//update the volume information
	//console.log("Current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume *100+'%'
});
 //Pause button 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	//pauses video 
	video.pause()
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video")
	//Slow the current video speed by 10% each time the button is clicked 
	video.playbackRate *= .90;
	//log the new speed to the console
	console.log("Speed is " + video.playbackRate)
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video")
	//Change it by an amount proportional to the slow down
	video.playbackRate /= .90;
	//log the new speed to the console
	console.log("Speed is " + video.playbackRate)
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	//Advance the current video by 10 seconds
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
	//If the video length has been exceeded go back to the start of the video - no farther
	if(video.currentTime == video.duration){
		video.load();
		video.currentTime = 0;
		console.log("Video current time is " + video.currentTime);
	}
});

//Mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#volume").innerHTML = video.volume*100 + "%";
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("unmute")
	}
	else{
		video.muted = true;
		document.querySelector("#volume").innerHTML = "0%";
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("mute")
	}
});

//volume slider 
document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is " + this.value/100);
	video.volume = (this.value / 100)
	document.querySelector("#volume").innerHTML = this.value/1 + "%";
	


});

//Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

//Original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

