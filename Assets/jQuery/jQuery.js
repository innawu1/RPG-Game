//Array of selectable character ids 
var charArray = ['#cloud','#squall', '#zidane', '#tidus'];
var turnCounter = 1;

function character(hp, atk, counterAtk){
	this.hp = hp;
	this.atk = atk;
	this.counterAtk = counterAtk;
}

function charSelect(){
	for(var i = 0; i < charArray.length; i++){
		$(charArray[i]).on('click', function(){
			$(this).appendTo($('.playerCharacter'));
			unbindChar();
			enemySelect(charArray[i]);
		});
	}
}

function enemySelect(selectedChar){
	for(var i = 0; i < charArray.length; i++){
		if(selectedChar != charArray[i]){
			$(charArray[i]).on('click', function(){
				$(this).appendTo($('.enemyCharacter'));
				unbindChar();
				$('.btn').show(); 
			});
		}
	}
}

//@todo place inside Attack function under win conditions
function newEnemySelect(){
	$('.btn').hide();
	if($('.enemyCharacter').children().length === 0){
		enemySelect();
	}
}

function unbindChar(){
	for(var i = 0; i <charArray.length; i++){
		$(charArray[i]).off('click');
	}
}


function attack(char){
	
	$('#attack-button').on('click', function() {
		//increase turn counter by 1. will use this for attack multiplyer
		turnCounter++;
		console.log(cloud.hp);
		//Set var equal to the children of playerCharacter and enemyCharacter rows
		for(var i =0; i < charArray.length; i++){
			var player = $('.playerCharacter').children(charArray[i]);
			var enemy = $('.enemyCharacter').children(charArray[i]);
			
	 }	//Stuck figuring out how to do this
	 	//@todo research pass by reference
		//subtract player atk from enemy in enemyCharacter row hp
		//after subtract enemy counterAtk from player hp
		//if(('.playerCharacter').children(charArray[i]){

		//console.log(player);
		//console.log(enemy);

		if(player === '#cloud'){
			//(player.atk * turnCounter) - enemy.hp;
			//	(player.hp - enemy.counterAtk)

		}
		

	});

	}



function gameStart(){
	var cloud = new character(400, 10, 30);
	var squall = new character(350, 8, 25);
	var zidane = new character(300, 6, 15);
	var tidus = new character(300, 6, 20);
	$('.btn').hide();
	charSelect();
	attack(cloud);

	
}




$(document).ready(function() {
	gameStart();
});



