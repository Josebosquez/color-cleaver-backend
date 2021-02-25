/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator (color, color1){
  if ((color === "red" || color === "yellow") && (color1 === "red" || color1 === "yellow")){
    return "orange";
  } if ((color === "red" || color === "blue") && (color1 === "red" || color1 === "blue")){ 
    return "purple";
  } if (color === "yellow" || "blue" && color1 === "yellow" || "blue"){
    return "green";
  }
}



// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
