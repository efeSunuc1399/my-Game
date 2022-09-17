'use strict';

//#region  Dom elements

// player text containers
const playerBox1 = $('.player-1-box');
const playerBox2 = $('.player-2-box');

// text field of text container
const playerText1 = $('.player-1-text');
const playerText2 = $('.player-2-text');

// buttons
const gameBtn = $('.gameBtn'); 
const resetBtn = $('.btn-reset'); 

//#endregion

//#region functions

const resetGame = function(){
    // Some code   
};

const switchPlayer = function(){
    
    if(activePlayer == 1){
        activePlayer = 2;
        return;
    }
    activePlayer = 1; 
}

// #endregion

const pickedSpots = {
    player1 : [],
    player2 : []
}

// Initially setting player 1 as active player.
let activePlayer = 1;

// Game Start
resetGame();

gameBtn.on('click',function(){

    // Checking if button was clicked before.
    if($(this).hasClass('player-1-Color') || $(this).hasClass('player-2-Color')){
        return;
    }
    // Disabling the hover effect after it's clicked.
    $(this).addClass('no-hover');

    const btnNumber = $(this).attr('id').split('-')[1];

    $(this).addClass(`player-${activePlayer}-color`);
    pickedSpots[`player${activePlayer}`].push(btnNumber);
    console.log(pickedSpots);
    
    switchPlayer();
});
