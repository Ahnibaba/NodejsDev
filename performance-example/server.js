const express = require("express");
// const cluster = require("cluster")
// const os = require("os")

const app = express();



function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
       // event loop is blocked
    }
}

app.get("/", (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});


app.get("/timer", (req, res) => {
    delay(4000); // Blocking for 9 seconds
    res.send(`Beep beep beep ${process.pid}`);
});

console.log("Running server.js..."); 
console.log("Worker process started");
    app.listen(4000, () => {
        console.log(`Listening on port ${4000}`);
    });

// if (cluster.isMaster) {
//     console.log("Master has been started");
//     const NUM_WORKERS = os.cpus().length
//     console.log(NUM_WORKERS);
    
//     for (let i = 0; i < NUM_WORKERS; i++) {
//        cluster.fork() 
//     }
    
// } else {
//     console.log("Worker process started");
//     app.listen(4000, () => {
//         console.log(`Listening on port ${4000}`);
//     });
    
// }

