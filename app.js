const countries = {
    bulgaria: {
        capital: "Sofia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/383px-Flag_of_Bulgaria.svg.png",
    },
    serbia: {
        capital: "Belgrade",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png",
    },
    romania: {
        capital: "Bucuresti",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2560px-Flag_of_Romania.svg.png",
    },
    greece: {
        capital: "Athens",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/400px-Flag_of_Greece.svg.png",
    },
    turkey: {
        capital: "Ankara",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
    },
    "north macedonia": {
        capital: "Skopje",
        flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_proposal_of_Macedonia_-_8.svg",
    },
    albania: {
        capital: "Tirana",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png",
    },
    montenegro: {
        capital: "Podgorica",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1920px-Flag_of_Montenegro.svg.png",
    },
    "bosnia and herzegovina": {
        capital: "Sarajevo",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    },
    croatia: {
        capital: "Zagreb",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1920px-Flag_of_Croatia.svg.png",
    },
    kosovo: {
        capital: "Pristina",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png",
    },
};

const input = document.getElementById("country");
const div = document.getElementById("countryInfo");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const contryName = input.value.toLowerCase();

    if (div.textContent !== "") {
        div.textContent = "";
    }
    const p = document.createElement("p");

    if (countries[contryName] === undefined) {
        p.textContent = "You entered wrong country name, please try again.";
    } else {
        p.textContent = `Capital: ${countries[contryName].capital}`;
        const img = document.createElement("img");
        img.src = countries[contryName].flag;
        div.appendChild(img);
    }
    div.appendChild(p);
    input.value = "";
});
