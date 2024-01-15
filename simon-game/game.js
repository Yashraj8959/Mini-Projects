
var buttonColours = [
    "red","blue","green","yellow"
];
var gamePattern=[];
function nextSequence(){
    var randonNumber =Math.floor(Math.random()*4);
    var randonChoseColour = buttonColours[randonNumber];
    gamePattern.push(randonChoseColour);
};