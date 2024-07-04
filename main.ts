/*
Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/

let magiciansNames1:string[] = ["Atif","Anmol","Arsalan","Ayaan","Arman"]
let magiciansNamesCopy = [...magiciansNames1]
function show_magicians2(great:string) {
    let withGreatings = "";

    for (let a of magiciansNames1){
        withGreatings += `${great} ${a} \n`
    } return withGreatings;
};

let myGreating = show_magicians2("Hello");
let myArray = myGreating.split('\n')
console.log(myArray);
console.log(magiciansNames1);