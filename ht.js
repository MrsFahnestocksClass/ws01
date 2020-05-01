


const scriptURL = 'https://script.google.com/macros/s/AKfycbwe13vW6iwlPrRB7pX_JjOceCdZ3CVFeLQf0pq91gDx8hQbRwo/exec'
const sheetURL='https://docs.google.com/spreadsheets/d/1Qpn0WkSZwyFpaMN6fnkNj3gY-aniWBTqUDNPmy10LOU/edit#gid=0'
const total=6;
const pageName="worksheet 1";
  
  
const form = document.forms['sheetPost']


var incorrectAttemps=0;
var correct=0;


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
						e.disabled=true;
						e.style.color="#cccccc";
						console.log(e.disabled);
						ele.dataset.flag=true;
						correct++;
						ele.style.backgroundColor="hsl(120, 100%, 50%)";
						break;
					}
					else{
						incorrectAttemps++;
						ele.style.backgroundColor="hsla(2, 79%, 59%, 0.72)";
					}
				}
				
            }
			
        }
 

	
  }
  

  
  function cclear(element){
	console.log(element.dataset.flag);
	if((element.dataset.flag!='true')){
			
			element.style.backgroundColor="white";
			element.value='';
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
	

//Delegate server side code to google app script
//===========================================================
  form.addEventListener('submit', e => {
    e.preventDefault()
	var formData=new FormData(form);
	formData.append('key',sheetURL.match(/d\/(.*)\//)[1]);
	formData.append('incorrectAttemps',incorrectAttemps);
	formData.append('page',pageName);
	formData.append('number of questions',total);
	formData.append('correct',correct);
	
    fetch(scriptURL, { method: 'POST', body:formData,mode: 'no-cors'})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
	fetch(scriptURL, { method: 'POST', body:formData})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


//Disable autocomplete finaly (stupid google)
//================================================
$('input').attr('autocomplete','off');

