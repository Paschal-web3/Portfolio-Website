var tablinks = document.getElementsByClassName("tablinks");
var tabcontent = document.getElementsByClassName("tabcontent")

function opentab(tabname){  
    for (tablink of tablinks){   
        tablink.classList.remove("active-link") 
    }
    for (tabcontents of tabcontent){
        tabcontents.classList.remove("activetab") 
    }
    event.currentTarget.classList.add("active-link");/*Enables the feature of the ID active-link in any current list*/
    document.getElementById(tabname).classList.add("activetab");

}

var sidemeu = document.getElementById("sidemenu");
function OpenMenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-240px";
}