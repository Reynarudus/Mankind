

//history Array
const historytitle = ['The birth of Humanity','Collapse','Migration to Middle East','Migration to Europe','Invention of Agriculture','Construction Stonehenge','Urbanization'];
const historyimg = ['chief','dead','middleEast','europe','village','stonehenge','city'];


const params = new URLSearchParams (window.location.search);
const getvalue = params.get('historyvalues');
const getArray = getvalue.split("o");
function generateHistory(a){	
for (i=0; i<(getArray.length); i=i+3){
	document.getElementById(a).innerHTML+=
	"<div class='segment'>"+
	"<div class='elementSegment' style='font-weight:bold'>"+historytitle[getArray[i]]+"</div>"+
	"<div class='elementSegment'>  <img src='img/history/"+historyimg[getArray[i+1]]+".png'></div>"+
	"<div class='elementSegment'>"+getArray[i+2]+"</div>"+
	"</div>";	
	console.log(i);
	console.log(getArray.length);

if (i!=getArray.length-3) {
	document.getElementById(a).innerHTML+="<div class='circles'></div>";
	for (x=0; x<5; x++) {
	document.querySelector('.circles:last-child').innerHTML+="<div class='circle'></div>"
	}
}
	
}
}

function copyLink() {
document.getElementById('copyLink').style.backgroundColor='#434343';
document.getElementById('copyLink').style.color='#656565';
document.getElementById('copyLink').innerHTML = "Link copied!";
document.getElementById('copyLink').removeAttribute("onClick");
let temp = document.createElement("textarea");
document.body.appendChild(temp);
temp.value = "http://msz.cba.pl/Mankind/yourHistory.php?"+params;
temp.select();
document.execCommand("copy");
document.body.removeChild(temp);
	
}
generateHistory('history');
