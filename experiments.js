

const yourCity = "Rudy";
const yourCountry = "Poland";
function logOutYourHome(yourCity, yourCountry) {
    console.log(`This is your city: ${yourCity} and this is ${yourCountry}!`)
}

logOutYourHome(yourCity, yourCountry);

let string = "hi my name is Ola"; 
string = string.substring(3);
console.log(string)

const person = {
    name: "Ola",
    city: "Gliwice",
    voivodship: "Silesia",
    favoriteFood: "Pizza",
    wantsPizzaRightNow: true,
    numberOfPizzaPiecesWanted: 100,
    passion: {
        title: 'Horse Riding',
        lastTimeDone: '2 years ago'
    },
    getAddress() {
        return `
        My name is: ${this.name} 
        I live in: ${this.voivodship} <3
    
        `
    }


}


console.log(person.getAddress())
console.log(person.passion.title)

favoriteNumbers = [7, 11, 24, 56];
console.log(favoriteNumbers.length);
console.log(favoriteNumbers.join(" | "));