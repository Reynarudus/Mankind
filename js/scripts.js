var tribleName;
var governmentName;
var religonName;
var populationNumber;
var regionName;
var food;
var force;
var wealth;
var culture;
var militarization = 1;
var battleresult;
var date = 300000;
var BCAD = 'BC';
var turn = 0;
var yourhistorylink = '0o0o300000BC';
var maxculture = 1000


function reset() {
document.getElementById('inputnewname').value = '';	
}
function backToIndex() {
window.location.replace("index.html");	
}
function nextTurn(){
//Culture cannot be negative
if(culture<0){
culture = 0;
}
//Militarization cannot be <1

if(militarization<1){
militarization = 1;
}

forcecalculator()
document.getElementById('civilization-name').innerHTML = 'Name: '+tribleName;
document.getElementById('government-name').innerHTML = 'Government: '+governmentName;
document.getElementById('religon-name').innerHTML = 'Religion: '+religonName;
document.getElementById('population-number').innerHTML = 'Population: '+populationNumber;
document.getElementById('region-name').innerHTML = 'Region: '+regionName;

document.getElementById('food-number').innerHTML = 'Food: '+food;
document.getElementById('wealth-number').innerHTML = 'Wealth: '+wealth;
document.getElementById('culture-number').innerHTML = 'Culure: '+culture;
document.getElementById('militarization-number').innerHTML = 'Militarization: '+militarization;

turn++;


if (BCAD == 'AD') {
switch (true) {
case (date>=1800):
date = date + 25;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
break;

default:
date = date + 50;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
}

}


else if (BCAD == 'BC'&&date!=0){
switch (true) {
 
case (date<=1000):
date = date - 100;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
break;

case (date<=2000):
date = date - 200;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
break;

case (date<=10000):
date = date - 500;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
break;

case (date<=60000):
date = date - 5000;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
break;

default:
date = date - 20000;
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
}
}



else {
date = 50;
BCAD = 'AD';
document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';
}



randomevent()
}


var reseteventlist = false;
function randomevent(){
	
	
if (governmentName=='Hunter-gatherers'){	
switch (true){
case (BCAD=='AD'):
maxculture = 25;
break;

case (date<=300):
maxculture = 50;
break;

case (date<=5000):
maxculture = 100;
break;

case (date<=7000):
maxculture = 200;
break;

case (date<=9000):
maxculture = 500;
break;

default:
maxculture = 1000;
break;
}

document.getElementById('culture-number').innerHTML += '/'+maxculture;
}

	
	
	
	
//END GAME EVENT	
if (populationNumber<=0) {
countryeffect(abruptEnd,0);
}	
else if(food<=0){
countryeffect(lastFamine,0);
}

//Bankruptcy




//IMPORTANT EVENT - THERE MUST HAPPEN IF THE CONDITIONS ARE FULFILLED

//migration to Middle East
else {	
if (date<=54700&&ImportantEventActive[0]==1) {
ImportantEventActive[0] = 0;
event1(migrationToMiddleEast.img,migrationToMiddleEast.name,migrationToMiddleEast.description,migrationToMiddleEast.options,migrationToMiddleEast.descriptions,migrationToMiddleEast.id);
}
//migration to Europe
else if (date<=32500&&ImportantEventActive[1]==1&&ImportantEventActive[0]==0) {
ImportantEventActive[1] = 0;
event1(migrationToEurope.img,migrationToEurope.name,migrationToEurope.description,migrationToEurope.options,migrationToEurope.descriptions,migrationToEurope.id);
}
//Beginning of the Neolithic
else if (governmentName=='Hunter-gatherers'&&culture>=maxculture) {
event1(beginningoftheneolithic.img,beginningoftheneolithic.name,beginningoftheneolithic.description,beginningoftheneolithic.options,beginningoftheneolithic.descriptions,beginningoftheneolithic.id);
}


//Stonhege Construction
else if (governmentName=='Neolithic settlement'&&religonName=='Animism'&&culture>=300&&wealth>=300&&ImportantEventActive[2]==1) {
ImportantEventActive[2] = 0;
event1(stonehengeBuild.img,stonehengeBuild.name,stonehengeBuild.description,stonehengeBuild.options,stonehengeBuild.descriptions,stonehengeBuild.id);
}


else {
	
if (selectedEvents.length==0){


if (governmentName=='Hunter-gatherers'||governmentName=='Neolithic settlement'){
Array.prototype.push.apply(selectedEvents,stoneAgeEvents);
}

if (religonName=='Animism'){
Array.prototype.push.apply(selectedEvents,animismEvents);
if (ImportantEventActive[2] == 0){
Array.prototype.push.apply(selectedEvents,stonehengeEvents);
}
}

if (governmentName=='Hunter-gatherers'){
Array.prototype.push.apply(selectedEvents,hunterGatherersEvents);}


if (governmentName=='Neolithic settlement'){
Array.prototype.push.apply(selectedEvents,neolithEvents);}
//Backward
if (governmentName=='Hunter-gatherers'&&(date<=7000||BCAD=='AD')){
Array.prototype.push.apply(selectedEvents,neolithicVsPalaeolithic);}
}



var randomevent = Math.floor(Math.random()*selectedEvents.length);
var drawevent = selectedEvents[randomevent];
event1(drawevent.img,drawevent.name,drawevent.description,drawevent.options,drawevent.descriptions,drawevent.id);
selectedEvents.splice(randomevent,1);
}

}
}



function event1(a,b,c,options,descriptions,effect){ //events
document.getElementById('event-img').innerHTML='<img src='+event_list_img[a]+'>';
document.getElementById('event-title').innerHTML=event_list_title[b];
document.getElementById('event-description').innerHTML=event_list_description[c];
optiongeneration(options.length,options,descriptions,effect);
};
//options
function optiongeneration(a,b,c,d) {// a - option.length b - num options 
document.getElementById('options').innerHTML = "";
for (s = 0; s < a; s++) {
var widthdivvalue = ((100-a*3)/a)
var spacedivvalue = (a*3)/(a-1)
var divwidth = 'width:'+widthdivvalue+'%;'
var divspace = 'margin-left:10%; width:20%';
var divstyle = 'width:'+widthdivvalue+'%;margin-left:'+spacedivvalue+'%'
if (a==1){
document.getElementById('options').innerHTML += "<div class='options' style=width:100% onclick='countryeffect("+d+","+s+")' onmouseover='optionsDescription("+s+")' onmouseout='noneOptionsDescription("+s+")'>"+b[s]+"</div>";
document.getElementById('options_description').innerHTML += "<div id='d"+s+"' class='options_descriptions' style=width:100%>"+c[s]+"</div>";
}
else if (s==0){
document.getElementById('options').innerHTML += "<div class='options' style="+divwidth+" onclick='countryeffect("+d+","+s+")' onmouseover='optionsDescription("+s+")' onmouseout='noneOptionsDescription("+s+")'>"+b[s]+"</div>";
document.getElementById('options_description').innerHTML += "<div id='d"+s+"' class='options_descriptions' style="+divwidth+">"+c[s]+"</div>";
}
else {
document.getElementById('options').innerHTML += "<div class='options' style="+divstyle+" onclick='countryeffect("+d+","+s+")' onclick='countryeffect(d,e)' onmouseover='optionsDescription("+s+")' onmouseout='noneOptionsDescription("+s+")'>"+b[s]+"</div>";
document.getElementById('options_description').innerHTML += "<div id='d"+s+"' class='options_descriptions' style="+divstyle+">"+c[s]+"</div>";
}
}
}

function countryeffect(a,b) {

b=b*13;
document.getElementById('options').innerHTML = "";
document.getElementById('options_description').innerHTML = "";


//statistics

if (a.effect[b]==true){
tribleName =a[b];
}
if (a.effect[b+1]!=0){
//nextevent
}

if (a.effect[2+b]!=0){
governmentName =a.effect[2+b];
}
if (a.effect[3+b]!=0){
religonName =a.effect[3+b];
}

food += a.effect[4+b];
wealth += a.effect[5+b];
culture += a.effect[6+b];
militarization += a.effect[7+b];
populationNumber += a.effect[8+b];
if (a.effect[9+b]!=0){
regionName = a.effect[9+b];
}


//reset event list

if (a.effect[b+2]||a.effect[b+3]||a.effect[b+9]){
selectedEvents.length =0;
}

//battle

if (a.effect[12+b]!=0){
battleresult = 0;
var enemyStrength = Math.floor(Math.random() * (a.effect[b+11] - a.effect[b+10]) ) + a.effect[b+10];
console.log(enemyStrength);
if (enemyStrength!=force) {
    if (enemyStrength<force){
    battleresult = a.effect[12+b]-1;
	console.log(a.effect[12+b]-1);
    }
    else if  (enemyStrength>force){
    battleresult = a.effect[12+b];
	console.log(a.effect[12+b]);
    }
    drawevent = battleEffect[battleresult];
    event1(drawevent.img,drawevent.name,drawevent.description,drawevent.options,drawevent.descriptions,drawevent.id);
    }

}

if (a.historicalMomentBoolean==b&&a.historicalmoment.length>0) {
	yourhistorylink += a.historicalmoment+date+BCAD;
}

if (a.endgame==true) {
	document.getElementById('event-img').innerHTML='<img src='+event_list_img[a.img]+'>';
	document.getElementById('event-title').innerHTML=event_list_title[a.name];
	document.getElementById('event-description').innerHTML=event_list_description[a.description];
	yourhistorylink += 'o1o1o'+date+BCAD;
	document.getElementById('options').innerHTML += "<div class='options' onclick='redirectToYourHistory()' style=width:100%>View your history</div>";
}

if (a.effect[12+b]==0&&a.endgame!=true) {
nextTurn();
}
}




// 0 change name, 1 event next,  2 government,  3 religion, 4 food, 5 wealth, 6 culture, 7 militarization, 8 population, 9 region, 10 enemy strength min, 11 enemy strength max, 12 battle effect

function optionsDescription(a){
a="d"+a
document.getElementById(a).style.color='white';
document.getElementById(a).style.backgroundColor='#808080';

}
function noneOptionsDescription(a){
a="d"+a
document.getElementById(a).style.color='rgba(0,0,0,0)';
document.getElementById(a).style.backgroundColor='rgba(0,0,0,0)';
}

function firstevent () { //firstevent
if (document.getElementById('inputnewname').value != 0 ){
tribleName = document.getElementById('inputnewname').value
governmentName = 'Hunter-gatherers';
religonName = 'Animism'
populationNumber = 100;
regionName = 'South Africa';
food = 100;
wealth = 50;
culture = 20;
turn = 1;

//First statistics
document.getElementById('civilization-name').innerHTML = 'Name: '+tribleName;
document.getElementById('government-name').innerHTML = 'Government: '+governmentName;
document.getElementById('religon-name').innerHTML = 'Religion: '+religonName;
document.getElementById('population-number').innerHTML = 'Population: '+populationNumber;
document.getElementById('region-name').innerHTML = 'Region: '+regionName;

document.getElementById('food-number').innerHTML = 'Food: '+food;
document.getElementById('wealth-number').innerHTML = 'Wealth: '+wealth;
document.getElementById('culture-number').innerHTML = 'Culure: '+culture;
document.getElementById('militarization-number').innerHTML = 'Militarization: '+militarization;


forcecalculator();
document.getElementById('force-number').innerHTML = 'Force: '+culture;

document.getElementById('text').style.display = 'none';

document.getElementById('date').innerHTML = date+' '+BCAD;
document.getElementById('turn').innerHTML = turn+'th turn';

//next event
randomevent();
}

else {
document.getElementById('inputnewname').style.backgroundColor='red';
}

}

function forcecalculator(){ //force calculator
force = Math.round((populationNumber*0.4)*militarization);
document.getElementById('force-number').innerHTML = 'Force: '+force;
}

//redirect to yourHistory
function redirectToYourHistory(){
window.location.replace("yourHistory.html?historyvalues="+yourhistorylink);	
}

