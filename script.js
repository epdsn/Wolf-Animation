// JavaScript Document
// Author: Eric Perez
// Assignment #4: JavaScript Pet/Toy 1.0

// wolf sprites by: http://kitsuneredwolf.deviantart.com/art/Wolf-Sprites-Emotions-245567612

	pet = {
		// sets the width and hright of the animation container
		width:167,
		height:114,
		// message box used for displaying action to the user.
		messageBox : document.getElementById('message-box'),
		// this is the pet image that will be swapped out when the user clicks on an action button.
		petImage : document.getElementById('petImage'),
		animate: null,
		// container used to animate the animal.
		petContainer : document.getElementById('petContainer'),
		xPos : 0, // used to store the current X coordinate of the container div for animating.
		// images that will be replaced when the user clicks on an action
		imageIndex : 0,
		images  :  ["images/Wolf_normal.gif", "images/Wolf_howl.gif", "images/Wolf_liedown.gif", "images/Wolf_point.gif","images/Wolf_roll.gif","images/Wolf_sit.gif", "images/leftAnime.gif", "images/rightAnime.gif"],
		// display messages that correspond to the actions.
		commandMessage : ['Use the commands below to control the wolf or to move hime left or right.', 'The wolf goes, "ARH-WOOOOOOOOOOOOOOOOOOOO".', "The wolf Lies down.", "The wolf points and something in the distance.", "The wolf plays dead.", "The wolf sits.", "The wolf runs left.", "The wolf runs right."],
		
		// Action Commands
		howl : function () {/*sitting action*/
			pet.messageBox.innerHTML = pet.commandMessage[1];
			pet.petImage.src = pet.images[1]
		},
		liedown : function () {/*sitting action*/
			pet.messageBox.innerHTML = pet.commandMessage[2];
			pet.petImage.src = pet.images[2]
		},
		point : function () {/*sitting action*/
			pet.messageBox.innerHTML = pet.commandMessage[3];
			pet.petImage.src = pet.images[3]
		},
		roll : function () {/*sitting action*/
			pet.messageBox.innerHTML = pet.commandMessage[4];
			pet.petImage.src = pet.images[4]
		},
		sit : function () {
			pet.messageBox.innerHTML = pet.commandMessage[5];
			petImage.src = pet.images[5]
		},
		// Move left command.
		moveLeft : function (){
			//check to see if an animation action is occurring
			if (pet.animate == null) {
				pet.messageBox.innerHTML = pet.commandMessage[6];
				petImage.src = pet.images[6]
				pet.animateLeft();
			}
		},
		// Move left action that calls itself and keeps going until stop is called.
		animateLeft : function() {
			pet.xPos = pet.petContainer.style.left;
			console.log("xpos: " + pet.xPos );
			pet.petContainer.style.left = parseInt(pet.petContainer.style.left) - 10 + 'px';
			pet.animate = setTimeout(pet.animateLeft,20);	
		},
		// Move right command.
		moveRight : function (){
			//check to see if an animation action is occurring
			if ( pet.animate == null ) {
				pet.messageBox.innerHTML = pet.commandMessage[7];
				petImage.src = pet.images[7]
				pet.animateRight();
			}
		},
		// Move right action that calls itself and keeps going until stop is called.
		animateRight : function () {
			pet.xPos = pet.petContainer.style.left;
			console.log("xpos: " + pet.xPos );
			pet.petContainer.style.left = parseInt(pet.petContainer.style.left) + 10 + 'px';
			pet.animate = setTimeout(pet.animateRight,20);	
		},
		// Stops the animal while running.
		// This function will use the current x position.
		stop : function () {
		   clearTimeout(pet.animate);
		   pet.petContainer.style.left = pet.xPos;
		   petImage.src = pet.images[5];
		   pet.animate = null;
		},
		// Initialization sets the default properties of the animal object.
		init : function(){
			preloader();
			pet.messageBox.innerHTML = pet.commandMessage[0];
			pet.petImage.src = pet.images[0];
			pet.petImage.width=pet.width;
			pet.petImage.height=pet.height;
			pet.petContainer.style.left = 200 + 'px';
		}
	};

//pre loads all the animation images.
function preloader() {
     var i = 0;
     // create image object
     img = new Image();
     // start preloading
	 debugger;
     for(i=0; i<pet.images.length; i++) 
     {
          img.src=pet.images[i];
     }
} 



//bind actions to buttons
document.getElementById("howlButton").onclick = pet.howl;
document.getElementById("lieButton").onclick = pet.liedown;
document.getElementById("pointButton").onclick = pet.point;
document.getElementById("rollButton").onclick = pet.roll;
document.getElementById("sitButton").onclick = pet.sit;
document.getElementById("moveLeftButton").onclick = pet.moveLeft;
document.getElementById("moveRightButton").onclick = pet.moveRight;
document.getElementById("stopRightButton").onclick = pet.stop;


window.onload=pet.init;