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
my_pi  = Math.PI
my_e   = Math.E
root_f = Math.sqrt(2.0)
cos_f  = Math.cos(1) // radian
exp_f  = Math.exp(1)
log_f  = Math.log(2.7183)


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

