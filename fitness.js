
let btn = document.querySelector(".searchButton");
let select = document.querySelector("select")

const url =  "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=";
const header = {
    headers: {
      Accept: "application/json",
      'X-RapidAPI-Key': '905c9a1e7amshcb739e86660d349p13a918jsn76ea3cdf270e',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    },
  };

let c1name = document.querySelector(".c1name");
let c1type =document.querySelector(".c1type");
let c1inst = document.querySelector(".c1inst");
let c1Equip = document.querySelector(".c1Equip");
let c1Difficulty =document.querySelector(".c1Difficulty");

let c2name = document.querySelector(".c2name");
let c2type =document.querySelector(".c2type");
let c2inst = document.querySelector(".c2inst");
let c2Equip = document.querySelector(".c2Equip");
let c2Difficulty =document.querySelector(".c2Difficulty");

let c3name = document.querySelector(".c3name");
let c3type =document.querySelector(".c3type");
let c3inst = document.querySelector(".c3inst");
let c3Equip = document.querySelector(".c3Equip");
let c3Difficulty =document.querySelector(".c3Difficulty");

let c4name = document.querySelector(".c4name");
let c4type =document.querySelector(".c4type");
let c4inst = document.querySelector(".c4inst");
let c4Equip = document.querySelector(".c4Equip");
let c4Difficulty =document.querySelector(".c4Difficulty");

let c5name = document.querySelector(".c5name");
let c5type =document.querySelector(".c5type");
let c5inst = document.querySelector(".c5inst");
let c5Equip = document.querySelector(".c5Equip");
let c5Difficulty =document.querySelector(".c5Difficulty");

let c6name = document.querySelector(".c6name");
let c6type =document.querySelector(".c6type");
let c6inst = document.querySelector(".c6inst");
let c6Equip = document.querySelector(".c6Equip");
let c6Difficulty =document.querySelector(".c6Difficulty");

let c7name = document.querySelector(".c7name");
let c7type =document.querySelector(".c7type");
let c7inst = document.querySelector(".c7inst");
let c7Equip = document.querySelector(".c7Equip");
let c7Difficulty =document.querySelector(".c7Difficulty");

let c8name = document.querySelector(".c8name");
let c8type =document.querySelector(".c8type");
let c8inst = document.querySelector(".c8inst");
let c8Equip = document.querySelector(".c8Equip");
let c8Difficulty =document.querySelector(".c8Difficulty");

let c9name = document.querySelector(".c9name");
let c9type =document.querySelector(".c9type");
let c9inst = document.querySelector(".c9inst");
let c9Equip = document.querySelector(".c9Equip");
let c9Difficulty =document.querySelector(".c9Difficulty");

let c10name = document.querySelector(".c10name");
let c10type =document.querySelector(".c10type");
let c10inst = document.querySelector(".c10inst");
let c10Equip = document.querySelector(".c10Equip");
let c10Difficulty =document.querySelector(".c10Difficulty");




async function callApi(muscle){
    try {
        const response = await axios.get(url+muscle , header);
        console.log(response.data);

          c1name.innerHTML = response.data[0].name ;
          c1type.innerHTML = response.data[0].type ;
          c1inst.innerHTML = response.data[0].instructions ;
          c1Equip.innerHTML = response.data[0].equipment;
          c1Difficulty.innerHTML = response.data[0].difficulty;

          c2name.innerHTML = response.data[1].name ;
          c2type.innerHTML = response.data[1].type ;
          c2inst.innerHTML = response.data[1].instructions ;
          c2Equip.innerHTML = response.data[1].equipment;
          c2Difficulty.innerHTML = response.data[1].difficulty;
       
          c3name.innerHTML = response.data[2].name ;
          c3type.innerHTML = response.data[2].type ;
          c3inst.innerHTML = response.data[2].instructions ;
          c3Equip.innerHTML = response.data[2].equipment;
          c3Difficulty.innerHTML = response.data[2].difficulty;
       
          c4name.innerHTML = response.data[3].name ;
          c4type.innerHTML = response.data[3].type ;
          c4inst.innerHTML = response.data[3].instructions ;
          c4Equip.innerHTML = response.data[3].equipment;
          c4Difficulty.innerHTML = response.data[3].difficulty;

          c5name.innerHTML = response.data[4].name ;
          c5type.innerHTML = response.data[4].type ;
          c5inst.innerHTML = response.data[4].instructions ;
          c5Equip.innerHTML = response.data[4].equipment;
          c5Difficulty.innerHTML = response.data[4].difficulty;

          // c6name.innerHTML = response.data[5].name ;
          // c6type.innerHTML = response.data[5].type ;
          // c6inst.innerHTML = response.data[5].instructions ;
          // c6Equip.innerHTML = response.data[5].equipment;
          // c6Difficulty.innerHTML = response.data[5].difficulty;

          // c7name.innerHTML = response.data[6].name ;
          // c7type.innerHTML = response.data[6].type ;
          // c7inst.innerHTML = response.data[6].instructions ;
          // c7Equip.innerHTML = response.data[6].equipment;
          // c7Difficulty.innerHTML = response.data[6].difficulty;

          // c8name.innerHTML = response.data[7].name ;
          // c8type.innerHTML = response.data[7].type ;
          // c8inst.innerHTML = response.data[7].instructions ;
          // c8Equip.innerHTML = response.data[7].equipment;
          // c8Difficulty.innerHTML = response.data[7].difficulty;

          // c9name.innerHTML = response.data[8].name ;
          // c9type.innerHTML = response.data[8].type ;
          // c9inst.innerHTML = response.data[8].instructions ;
          // c9Equip.innerHTML = response.data[8].equipment;
          // c9Difficulty.innerHTML = response.data[8].difficulty;

          // c10name.innerHTML = response.data[9].name ;
          // c10type.innerHTML = response.data[9].type ;
          // c10inst.innerHTML = response.data[9].instructions ;
          // c10Equip.innerHTML = response.data[9].equipment;
          // c10Difficulty.innerHTML = response.data[9].difficulty;

         
       

    } catch (error) {
        console.error(error);
    }
}
btn.addEventListener("click", () => {
    let muscles = select.value;
    callApi(muscles);
  });


let refresh = document.querySelector(".refresh");
refresh.addEventListener("click",()=>{
    location.reload(true);
})
    