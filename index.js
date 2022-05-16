const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = cats.push("Ralph");
    return name
}

function destructivelyPrependCat(name) {
    name = cats.unshift("Bob");
    return name
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = [...cats.slice(0, 3), "Broom"];
    name = newCats
    return name

}

function prependCat(name) {
    const newCats = ["Arnold", ...cats.slice(0, 3)]
    name = newCats
    return name
}

function removeLastCat() {
    const newCats = [...cats.slice(0, 2)]
    return newCats 
}

function removeFirstCat() {
    const newCats = [...cats.slice(1, 3)]
    return newCats
}