


var coll = document.getElementsByClassName("collapsible"); 
 
var i; 
 

 
for (i = 0; i < coll.length; i++) { 
 
    coll[i].onclick = function() { 
 

 
  if(!this.classList.contains('active')){ 
 
     closeAll(); 
 
    } 
 

 
    this.classList.toggle("active"); 
 
    var content = this.nextElementSibling; 
 
    if (content.style.maxHeight){ 
 
      content.style.maxHeight = null; 
 
    } else { 
 
      content.style.maxHeight = content.scrollHeight + "px"; 
 
    } 
 
    } 
 
} 
 

 
function openAll(){ 
 
    for (i = 0; i < coll.length; i++) { 
 
     coll[i].classList.add("active"); 
 
    coll[i].nextElementSibling.style.maxHeight = coll[i].nextElementSibling.scrollHeight + "px"; 
 
    } 
 
} 
 

 
function closeAll(){ 
 
 for (i = 0; i < coll.length; i++) { 
 
     coll[i].classList.remove("active"); 
 
    coll[i].nextElementSibling.style.maxHeight = null; 
 
    } 
 
} 
 

 
document.getElementById('openAll').addEventListener('click', openAll); 
document.getElementById('closeAll').addEventListener('click', closeAll);
document.getElementById('first').click();