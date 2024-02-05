let input = document.querySelector("input");

let btn = document.querySelector("button");

const options = {
  method: "GET",
  url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
  headers: {
    "X-RapidAPI-Key": "905c9a1e7amshcb739e86660d349p13a918jsn76ea3cdf270e",
    "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
  },
};

async function callAPI(food) {
  try {
    options.params = { query: food };
    const response = await axios.request(options);
    console.log(response.data[0]);

    let name = document.querySelector(".product");
    name.innerText = response.data[0].name;

    let calories = document.querySelector(".calories");
    calories.innerText = response.data[0].calories;

    let Carbohydrates = document.querySelector(".carbohydrates");
    Carbohydrates.innerText = response.data[0].carbohydrates_total_g;

    let Cholesterol = document.querySelector(".cholestrol");
    Cholesterol.innerText = response.data[0].cholesterol_mg;

    let fat_s = document.querySelector(".fat-s");
    fat_s.innerText = response.data[0].fat_saturated_g;

    let fat_t = document.querySelector(".fat-t");
    fat_t.innerText = response.data[0].fat_total_g;

    let fiber = document.querySelector(".fiber");
    fiber.innerText = response.data[0].fiber_g;

    let potassium = document.querySelector(".potassium");
    potassium.innerText = response.data[0].potassium_mg;

    let protein = document.querySelector(".protein");
    protein.innerText = response.data[0].protein_g;

    let serving = document.querySelector(".serving");
    serving.innerText = response.data[0].serving_size_g;

    let sodium = document.querySelector(".sodium");
    sodium.innerText = response.data[0].sodium_mg;

    let sugar = document.querySelector(".sugar");
    sugar.innerText = response.data[0].sugar_g;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", () => {
  let text = input.value;
  if (text !== "") {
    callAPI(text);
  } else {
    console.log("Please enter a food item.");
  }
});

let Refresh = document.querySelector(".Refresh");
Refresh.addEventListener("click", () => {
  location.reload(true);});