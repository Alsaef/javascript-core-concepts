// Synchronous and Asynchronous Operations in JavaScript
// Synchronous Operation
// code runs line by line, One task must finish befor the next task starts

// console.log('first')
// console.log('second')
// console.log('third')

// Asynchronous Operation

// javascript does not wait for some task like (API Calls, timers, fetching data)

function async() {
    console.log('first')

    setTimeout(()=>{
        console.log('second')
    }, 1000) // 1000 milliseconds = 1 second

    console.log('third')
}

async()
