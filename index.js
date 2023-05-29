// Write your classes here
class Tree {
 constructor(species) {
  this.species = species;
 }

 static definition() {
  return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
 }
}

class Deciduous extends Tree {
 constructor(species, name) {
  super(species)
  this.name = name;
 }

 static definition() {
  return (super.definition() + " Deciduous trees shed their leaves annually.");
 }
}

const tree = new Tree("Maple")
const oak = new Deciduous('Oak', 'Professor')

console.log(Tree.definition());
console.log(Deciduous.definition());

class Evergreen extends Tree {
 constructor(species, name) {
  super(species)
  this.name = name;
 }

 static definition() {
  return (super.definition() + " Evergreens keep their leaves all year round.");
 }
}

const fir = new Evergreen('Fir', 'Douglas')
console.log(Evergreen.definition());