window.onload = function(){

    document.getElementById("doge").innerHTML = "Woof!";

};
function newText()
    {
       
        document.getElementById("doge").innerHTML = "Woof Woof!";
    
    };

function oldText()
    {

        document.getElementById("doge").innerHTML = "doggo";
        
    };
function picture() 
{
   if (document.getElementById("pic1").style.display === "block") {
       document.getElementById("pic1").style.display = "none";
   }
    else  {
        document.getElementById("pic1").style.display = "block";
    }
    
   
}