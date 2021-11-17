// const square = function(x) {
//     return x * x;
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x

// console.log(square(5));

const event = {
    name: 'Birthday party',
    guestList: ['Nduke', 'Emediong', 'Mercy', 'Emmanuel', 'Royal', 'Trigger'],
    printGuestList () {
        console.log(`Guess List for ${this.name}`);

        this.guestList.forEach( guest => {
            console.log(`${guest} is attending ${this.name}`);
        });
    }
}


event.printGuestList()