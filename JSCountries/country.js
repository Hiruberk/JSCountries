class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber!", "marhabaan bialealam!", ["blue", "yellow", "red"])
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"])
let norway = new Country("Norway", "Norwegian", "Hei Verden!", ["red", "blue", "white"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input=== "France") {
        country = france;
    }
    else {
        country = norway;
    }

    document.getElementById("Name").innerText = country.name;
    document.getElementById("Lang").innerText = country.lang;
    document.getElementById("Greet").innerText = country.greeting;
    document.getElementById("Color1").style.backgroundColor = country.colors[1];
    document.getElementById("Color2").style.backgroundColor = country.colors[2];
    document.getElementById("Color3").style.backgroundColor = country.colors[3];
 

}
