## 1. What is the difference between var, let, and const?

#### var: var is old style. it works in function scope, not block. we can change value and also declare again. it is hoisted, so sometimes make bug.

#### let: let is newer. it works in block scope. we can change value but cannot declare again in same block. safer than var.

#### const: const is also block scope. value cannot change. but if it is object or array, inside things can change. we use const mostly. 

---

## 2. What is the difference between map(), forEach(), and filter()?


#### forEach(): It's loop through array. Do something for each item. 

#### map(): loop through array. return new array with changed values. 

#### filter(): loop through array. return new array but only items that condition is match. 

---

### 3. What are arrow functions in ES6?

#### Arrow function is also a function. but it's a shortest way to write the function. like: const addNumbers = (a,b) => a+b

---

### 4. How does destructuring assignment work in ES6?

#### In Javascript ES6 Destructuring means from array or object we can assign them in a variables like this: const numbers = [1,2,3] to const [a, b] = numbers. so this will assign a=1, b-2 we can this for object as well 

---

### 5. Explain template literals in ES6. How are they different from string concatenation?

#### Templates literals in Javascript in ES6 is simply allow us to use string using backticks symbol(``). We can use multiline, newline easily. Also we can add variable ${variable_name} like this inside Template literals/backticks.


