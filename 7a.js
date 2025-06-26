const express = require('express');
const app = express();
const port = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send(`
        <body>
            <h1>Welcome to Engineering College</h1>
            <p>Explore our branches:</p>
            <ul>
                <li><a href="/cse">Computer Science and Engineering (CSE)</a></li>
                <li><a href="/ece">Electronics and Communication Engineering (ECE)</a></li>
                <li><a href="/mech">Mechanical Engineering (MECH)</a></li>
            </ul>
        </body>
    `);
});

// CSE Route
app.get('/cse', (req, res) => {
    res.send(`
        <body>
            <h1>Computer Science and Engineering (CSE)</h1>
            <p>Focuses on programming, AI, ML, data science, and software development.</p>
            <p><a href="/">Home</a></p>
        </body>
    `);
});

// ECE Route
app.get('/ece', (req, res) => {
    res.send(`
        <body>
            <h1>Electronics and Communication Engineering (ECE)</h1>
            <p>Deals with electronic devices, circuits, and communication equipment like transmitters and receivers.</p>
            <p><a href="/">Home</a></p>
        </body>
    `);
});

// Mechanical Route
app.get('/mech', (req, res) => {
    res.send(`
        <body>
            <h1>Mechanical Engineering (MECH)</h1>
            <p>Focuses on design, manufacturing, and maintenance of mechanical systems.</p>
            <p><a href="/">Home</a></p>
        </body>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
