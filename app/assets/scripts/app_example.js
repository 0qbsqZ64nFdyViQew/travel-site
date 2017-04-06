/* "require" is part of node.js NOT native JS // ES6 does the same with "import" */
var $ = require('jquery');
/* var Person = require ('./modules/Person');*/
import Person from './modules/Person';

/*alert("123456");*/

class Adult extends Person {
  payTax() {
    console.log(this.name + "now owes $0 in taxes.");
  }
}

var john = new Person ('John Doe','blue');
john.greet();

var jane = new Adult ('Jane Smith','green');
jane.greet();
jane.payTax();
