/*
Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansNames1 = ["Atif", "Anmol", "Arsalan", "Ayaan", "Arman"];
var magiciansNamesCopy = __spreadArray([], magiciansNames1, true);
function show_magicians2(great) {
    var withGreatings = "";
    for (var _i = 0, magiciansNames1_1 = magiciansNames1; _i < magiciansNames1_1.length; _i++) {
        var a = magiciansNames1_1[_i];
        withGreatings += "".concat(great, " ").concat(a, " \n");
    }
    return withGreatings;
}
;
var myGreating = show_magicians2("Hello");
var myArray = myGreating.split('\n');
console.log(myArray);
console.log(magiciansNames1);
