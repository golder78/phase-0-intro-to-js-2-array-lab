// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    let append = [...cats, name];
    return append;
}

function prependCat(name) {
    let prepend = [name, ...cats];
    return prepend;
}

function removeLastCat() {
    let last = cats.slice(0, 2);
    return last;
}

function removeFirstCat() {
    let first = cats.slice(-2);
    return first;
}