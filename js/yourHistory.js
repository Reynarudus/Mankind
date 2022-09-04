
//history Array
const historytitle = ['The birth of Humanity','Collapse','Migration to Middle East','Migration to Europe','Invention of Agriculture','Construction Stonehenge'];
const historyimg = ['chief','dead','middleEast','europe','village','stonehenge'];



let params = new URLSearchParams (window.location.search);
let getvalue = params.get('historyvalues');
const getArray = getvalue.split("o");
function generateHistory(a){	
for (i=0; i<(getArray.length); i=i+3){
	document.getElementById(a).innerHTML+=
	"<div class='segment'>"+
	"<div class='elementSegment'>"+historytitle[getArray[i]]+"</div>"+
	"<div class='elementSegment'>  <img src='img/history/"+historyimg[getArray[i+1]]+".png'></div>"+
	"<div class='elementSegment'>"+getArray[i+2]+"</div>"+
	"</div>";	
	console.log(i);
	console.log(getArray.length);

if (i!=getArray.length-3) {
	for (x=0; x<5; x++) {
	document.getElementById(a).innerHTML+="<div class='circle'></div>"
	}
}
	
}
}
generateHistory('history');