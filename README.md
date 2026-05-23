# JavaScript Core Concepts

A beginner-friendly repository for understanding important JavaScript concepts such as scope, function scope, global scope, and block scope with simple examples.

## 📚 Topics Covered

- Global Scope
- Local / Functional Scope
- Block Scope
- Difference between `var`, `let`, and `const`

---

# 🔍 What is Scope in JavaScript?

In JavaScript, **scope** means where a variable can be accessed or used in the code.

There are mainly three types of scope:

- Global Scope
- Local / Functional Scope
- Block Scope

---

# 🌍 Global Scope

A variable declared outside any function or block can be accessed from anywhere in the program.

```js
// global scope it can be accessed anywhere in the code
var x = 10;

console.log(x);
```

### ✅ Output

```js
10
```

---

# 🔒 Local / Functional Scope

A variable declared inside a function can only be accessed inside that function.

```js
// local scope
function test() {
   var x = 20;
   console.log(x);
}

// calling the function
test();

// global scope outside the function
console.log(x);
```

### ✅ Output

```js
20
10
```

### 📌 Explanation

- Inside the function, `x` value is `20`
- Outside the function, JavaScript accesses the global variable `x` which is `10`
- The local variable cannot be accessed outside the function

---

# 📦 Block Scope in JavaScript

In JavaScript:

- `var` is a functional scope variable
- `let` and `const` are block scope variables

```js
if (true) {
  var a = 10; // functional scope variable
  let b = 20; // block scope variable
}

console.log(a);
console.log(b);
```

### ✅ Output

```js
10
ReferenceError: b is not defined
```

### 📌 Explanation

- `a` is declared with `var`, so it can be accessed outside the block
- `b` is declared with `let`, so it can only be accessed inside the block

---

# 🚀 Technologies Used

- JavaScript

---

# 🎯 Purpose of this Repository

This repository is created for beginners who want to understand JavaScript core concepts with simple and practical examples.

---

# 👨‍💻 Author

Al Saef Ratul

---

# ⭐ Support

If you found this repository helpful, give it a star on GitHub and share it with others.
