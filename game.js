var character=document.getElementById("character");
var block=document.getElementById("block");
function jump(){
    if(character.classList = "animate"){

    
   character.classList.add("animate");
    }
   setTimeout(function(){
character.classList.remove("animate");
   },500); 
}
// to get top position of character and left position of block
var checkDead=setInterval(function(){
    var characterTop=
 parseInt(window.getComputedStyle(character).getPropertyValue("top"));
 var blockLeft=
 parseInt(window.getComputedStyle(block).getPropertyValue("left"));
 if(blockLeft<20&& blockLeft>0&& character>=130){
   block.style.animation="none";
   block.style.display="none"
    alert("You lose") 
 }
},10);
