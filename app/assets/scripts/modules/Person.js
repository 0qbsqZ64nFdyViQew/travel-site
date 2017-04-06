/* Class/Constructor are ES6 JS */
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log('Hi there, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
  }
}

/* Tells webpack what it should pass to app.js*/
/*module.exports = Person;*/
/* Native ES6 JS way of exporting */
export default Person;
