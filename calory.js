let btn = document.querySelector(".searchButton");
let input = document.querySelector("input");

let b1name = document.querySelector(".b1name");
let b1CPH =document.querySelector(".b1CPH")
let b1D =document.querySelector(".b1D")

let b2name =document.querySelector(".b2name")
let b2CPH=document.querySelector(".b2CPH")
let b2D =document.querySelector(".b2D")

let b3name =document.querySelector(".b3name")
let b3CPH =document.querySelector(".b3CPH")
let b3D =document.querySelector(".b3D")

let b4name =document.querySelector(".b4name")
let b4CPH =document.querySelector(".b4CPH")
let b4D = document.querySelector(".b4D")

const url = "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=";
const header = {
 
  headers: {
    Accept : "application/json",
    'X-RapidAPI-Key': '905c9a1e7amshcb739e86660d349p13a918jsn76ea3cdf270e',
    'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
  }
};

async function callAPI(activity){
try {
	const response = await axios.get(url + activity ,header);
	console.log(response.data);
    console.log(response.data[0]);

b1name.innerHTML = response.data[1].name;
b1CPH.innerHTML = response.data[1].calories_per_hour;
 b1D.innerHTML = response.data[1].duration_minutes;

 b2name.innerHTML = response.data[2].name;
b2CPH.innerHTML = response.data[2].calories_per_hour;
 b2D.innerHTML = response.data[2].duration_minutes;

 b3name.innerHTML = response.data[3].name;
b3CPH.innerHTML = response.data[3].calories_per_hour;
 b3D.innerHTML = response.data[3].duration_minutes;

 b4name.innerHTML = response.data[4].name;
b4CPH.innerHTML = response.data[4].calories_per_hour;
 b4D.innerHTML = response.data[4].duration_minutes;

} catch (error) {
	console.error(error);
}}

btn.addEventListener("click", ()=>{
    let activity = input.value;
    console.log(input.value);
    callAPI(activity);
});



let refresh = document.querySelector(".refresh");
refresh.addEventListener("click",()=>{
    location.reload(true);
})
