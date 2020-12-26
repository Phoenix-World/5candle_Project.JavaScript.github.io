

const tubelight=()=>{
let btext = document.getElementById("bulbdata");
for(x=1;x<6;x++){
let bid = document.getElementById("lightid".concat(x));
console.log(bid.src);
if(bid.src.match("C5"))
{
bid.src="C2.jpg";
btext.innerHTML="Light OFF";
btext.style.color="white";
}
else {bid.src="C5.jpg";
btext.innerHTML="Light ON";
btext.style.color="yellow";
}
}}