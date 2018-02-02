/*
~/js/js410/index32.js

This script should help you learn JavaScript.
*/

// I should create a number [ integer actually ]
var num_i = 7

// I should create a number [ decimal actually ]
var float_i = 1.2345 // AKA: "Float"

// I should create strings
var some1_s = 'I can use single quotes'
var some2_s = "I can use double quotes"
var some3_s = "I can use 'both' quotes"
var some4_s = 'You can use "both" quotes'

// I should create an array
var some_a = [num_i, float_i, some1_s, ['arrayinarray',411]]

// I should create an object
var some_o = {'key0': 'hello', num_i: 'world'}
// Above, num_i does NOT get filled by 7

// Works better
var my_o = {'key0': 'hello'}
my_o[num_i] = 'world' // num_i == 7

// I should create two booleans
var is_true  = true
var is_false = false

// I should create a function
function f10(x) {
    return x + x
}

// I should create a function this way:
var f11 = function(x) {
    return x + 4
}

// I like this function too:
print = function(x) {
    console.log(x)
    return true
}

// I should get a Date
my_dt_i = Date.now() // UNIX time
my_dt_s = Date() // Readable

// Some Math
var my_pi  = Math.PI
var my_e   = Math.E
var root_f = Math.sqrt(2.0)
var cos_f  = Math.cos(3.1416) // radians
var exp_f  = Math.exp(1)
var log_f  = Math.log(2.7183)
var pow_i  = Math.pow(2,3)
var rand_f = Math.random()
var round_i = Math.round(2.234567)

// Regular-Expression Demos:
var regx1_i = 'hello javascript'.search(/jav/)
var regx2_i = 'hello javascript'.search(/l.+java/)

// new operator
function Cat(name, type, weight) {
  this.name   = name
  this.type   = type
  this.weight = weight
}
var bob = new Cat('Bob', 'Tabby', 10)

class Dog {
    constructor(name, type, weight) {
      this.name   = name
      this.type   = type
      this.weight = weight
    }
    mood(str) {
	return this.name + ' is ' + str
    }
}
var rex      = new Dog('Rex', 'Lab', 20)
var rex_mood = rex.mood('Happy')

// if, then, else, else if
if ( 1 > 2 ) {
    var is_1_gt2 = true
} else {
    var is_1_gt2 = false
}

var weather  = 'rainy'
var greeting = 'hello'
if (weather == 'snowing') {
    greeting = "Let's ski"
} else if (weather == 'hot') {
    greeting = "Let's swim"
} else {
    greeting = "Let's code"
}

// for-loop
var loop_a = [1,1,1,1,5]

for (i = 0; i < 5; i++) {
    loop_a[i] = i
}

// another for-loop
var obj_a = []
var obj_o = {k1: 1, k2: 2, k3: 3}
for (var prop in obj_o) {
    obj_a.push(prop)
}

print(num_i)
print(float_i)
print(some1_s)
print(some2_s)
print(some3_s)
print(some4_s)
print(some_a)
print(some_o)
print(my_o)
print(is_true)
print(is_false)
print(f10)
print(f11)
print(my_dt_i)
print(my_dt_s)
print(my_pi)
print(my_e)
print(root_f)
print(cos_f)
print(exp_f)
print(log_f)
print(pow_i)
print(rand_f)
print(round_i)
print(regx1_i)
print(regx2_i)
print(bob.type)
print(rex.type)
print(rex_mood)
print(is_1_gt2)
print(loop_a)
print(obj_a)
print(greeting)
