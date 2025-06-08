let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
function destructivelyRemoveLastCat(){
cats.pop();
return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
const appendCat = (name) => [...cats, name];
const prependCat = function(name) {
  return [name, ...cats];
};
const removeLastCat = function() {
  return cats.slice(0, -1);
};
const removeFirstCat = function() {
  return cats.slice(1);
};

