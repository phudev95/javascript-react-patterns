function Dog(name, age){
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function(){
  console.log(`${this.name} is barking!`);
}

Dog.prototype.wagTail = function(){
  console.log(`${this.name} is wagging their tail!`);
}

const dog1 = new Dog("Max", 4);
const dog2 = new Dog("Sam", 2);
const dog3 = new Dog("Joy", 6);
const dog4 = new Dog("Spot", 8);

console.log(
  'dog1.bark === dog2.bark',
  dog1.bark === dog2.bark
);
