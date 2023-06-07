// -- SERVER FOR MONGODB CONNECTION

const express = require('express');
const app = express();

const apiRoutes = require('./api');

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Backend server is running...');
  });

const PORT = 3001; // Replace with your desired server port

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});












// // -- SOLO EXPRESS BACKEND SERVER

// const express = require('express')
// const cors = require('cors'); // Import the cors package
// const app = express()

// // Set up CSP middleware
// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "style-src 'self' 'unsafe-inline'");
//     next();
//   });
  
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // Parse JSON request bodies

// // Route handler for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, world!'); // Replace with your desired response
//   });

// // Route handler for the /api URL

// app.get("/api", (req, res) => {
//     res.json({ "markers": ["id", "title", "description", "website", "latitude", "longitude"] }) // this is our backend API, now need to fetch
// })

// app.post("/api", (req, res) => {
//     console.log(req.body)
//     res.json({ "markers": ["id", "title", "description", "website", "latitude", "longitude"] }) // this is our backend API, now need to fetch
// })
// // Start the server
// const port = process.env.PORT || 5000
// app.listen(port, () => console.log(`Server running on port ${port}`))

// // app.listen(5000, () => {console.log("server started on port 5000")}) 