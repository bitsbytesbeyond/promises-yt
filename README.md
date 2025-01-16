# Async JavaScript Made Easy: Promises, Async/Await Explained

Youtube Video: [Async JavaScript Made Easy: Promises, Async/Await Explained](https://youtu.be/MQ1yovwbtBI)

## Introduction

In this repo, we will discuss the basics of asynchronous JavaScript, and how to use Promises and async/await to write clean and readable asynchronous code.

## Table of Contents

1. [What is Asynchronous JavaScript?](#what-is-asynchronous-javascript)
2. [Callbacks](#callbacks)
3. [Promises](#promises)
4. [Async/Await](#asyncawait)
5. [Conclusion](#conclusion)

## What is Asynchronous JavaScript?

JavaScript is a single-threaded language, which means it can only execute one task at a time. However, there are certain tasks that take a long time to complete, such as fetching data from a server or reading a file from disk. If we were to wait for these tasks to complete before moving on to the next task, our application would become unresponsive.

Asynchronous JavaScript allows us to perform these long-running tasks without blocking the main thread. This means that we can continue to execute other tasks while waiting for the asynchronous task to complete.

## Callbacks

One way to work with asynchronous code in JavaScript is to use callbacks. A callback is a function that is passed as an argument to another function, and is executed once the asynchronous task is complete.

Here is an example of a simple callback function:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched!');
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
```

In this example, the `fetchData` function takes a callback function as an argument, and calls it after a delay of 2 seconds. The callback function is then executed

## Promises

Promises are a more modern way of working with asynchronous code in JavaScript. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and allows us to attach callbacks to handle the result.

Here is an example of a simple Promise:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  });
```

In this example, the `fetchData` function returns a Promise that resolves after a delay of 2 seconds. We can then attach a `then` callback to the Promise to handle the result.

## Async/Await

Async/Await is a "new" feature in JavaScript that allows us to write asynchronous code in a synchronous way. It is built on top of Promises, and provides a cleaner and more readable syntax for working with asynchronous code.

Here is an example of a simple async/await function:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
```

In this example, the `getData` function is marked as `async`, which allows us to use the `await` keyword to wait for the Promise to resolve. This makes the code look and feel like synchronous code, even though it is asynchronous under the hood.

## Conclusion

In this repo, we discussed the basics of asynchronous JavaScript, and how to use Promises and async/await to write clean and readable asynchronous code. By using these modern features, we can avoid the pitfalls of callback hell and write more maintainable code.

