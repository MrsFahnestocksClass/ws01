function myFunction(e){
  
		
		
		
		
			
          // Get list of linked text objects
		 var idList=JSON.parse(e.dataset.linked); 
		
	
        // LOOP THROUGH EACH ELEMENT.
        for (i = 0; i < idList.length; i++) {
			
			var ele=document.getElementById(idList[i]);
			var ans=JSON.parse(ele.dataset.ans);
			
            // CHECK THE ELEMENT TYPE.
            if (ele.type == 'number' || ele.type == 'text') {
                for(n=0; n<ans.length;n++){
					
					if(ele.value==ans[n]){
						
						ele.style.backgroundColor="hsl(120, 100%, 50%)";
						break;
					}
					else{
						ele.style.backgroundColor="hsla(2, 79%, 59%, 0.72)";
					}
				}
				
            }
        }
 

	
  }
  
  function reset(element){
	if (element.type == 'number' || element.type == 'text') {
		element.style.backgroundColor="white";
	}
  }
  
  function isNumber(e){
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}

function toggleX(elmnt){
		if(elmnt.style.opacity==0){
			elmnt.style.opacity=1;
			}
		else{
			elmnt.style.opacity=0;
		}
}
	
parent.document.getElementsByTagName('iframe')[0].scrolling="no";
/*
// Make the DIV element draggable:

var x = document.getElementsByClassName("drag");
var i;
for (i = 0; i < x.length; i++) {
  dragElement(x[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var canvas=document.getElementById("div-2");
	var bounds= canvas.getBoundingClientRect();
	var elmntBounds=elmnt.getBoundingClientRect();
  
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
	 canvas=document.getElementById("div-2");
	 bounds= canvas.getBoundingClientRect();
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
	
  }

  function elementDrag(e) {
	
	
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
	
	elmntBounds=elmnt.getBoundingClientRect();
	
    
	if(bounds.top+ window.pageYOffset<elmntBounds.top-pos2 && bounds.bottom+ window.pageYOffset>elmntBounds.bottom-pos2 ){
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	}
	if(bounds.left+ window.pageXOffset<elmntBounds.left-pos1 && bounds.right+ window.pageXOffset>elmntBounds.right-pos1 ){
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	if(bounds.top+ window.pageYOffset>elmntBounds.top-pos2 
		|| bounds.bottom+ window.pageYOffset<elmntBounds.bottom-pos2 
		||bounds.left+ window.pageXOffset>elmntBounds.left-pos1 
		|| bounds.right+ window.pageXOffset<elmntBounds.right-pos1)
	{
		closeDragElement();
	}
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  */

