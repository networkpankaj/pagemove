// const express = require('express');
// const session = require('express-session');
// const path = require('path');  // To resolve file paths correctly

// const app = express();

// // Set up express-session to manage session
// app.use(session({
//     secret: 'your-secret-key', // Secret key for session
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day session expiration
// }));

// // Serve static files (CSS, JS, etc.) from the "public" folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Route for Page A
// app.get('/pageA', (req, res) => {
//     if (!req.session.page) {
//         req.session.page = 'A'; // Set initial page when the user first visits
//     }
//     res.sendFile(path.join(__dirname, 'public', 'pageA.html'));
// });

// // Route for Page B
// app.get('/pageB', (req, res) => {
//     if (!req.session.page) {
//         req.session.page = 'B'; // Set initial page when the user first visits
//     }
//     res.sendFile(path.join(__dirname, 'public', 'pageB.html'));
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
const express = require('express');
const session = require('express-session');
const path = require('path');  // To resolve file paths correctly

const app = express();

// Set up express-session to manage session
app.use(session({
    secret: 'your-secret-key', // Secret key for session
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day session expiration
}));

// Serve static files (CSS, JS, etc.) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for Page A
app.get('/pageA', (req, res) => {
    if (!req.session.page) {
        req.session.page = 'A'; // Set initial page when the user first visits
    }
    res.sendFile(path.join(__dirname, 'public', 'pageA.html'));
});

// Route for Page B
app.get('/pageB', (req, res) => {
    if (!req.session.page) {
        req.session.page = 'B'; // Set initial page when the user first visits
    }
    res.sendFile(path.join(__dirname, 'public', 'pageB.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

