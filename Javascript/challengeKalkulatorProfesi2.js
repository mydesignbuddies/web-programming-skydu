// With percentage and if-else
prompt("Your name?");
prompt("Your job?");

var score = Math.floor(Math.random() * 100);

if(score > 70){
	alert("Your match percentage with this job is " + score + " %, Outstanding!");
}else {
	alert("Your match percentage with this job is " + score + " %, Don't give up");
}
