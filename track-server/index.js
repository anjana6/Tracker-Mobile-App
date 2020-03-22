const express = require('express');
const connectDB = require("./config/db");

const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();
connectDB();

app.use(express.json({extended:false}));
app.use(authRoutes); 
app.use(trackRoutes);

app.get('/',(req,res) =>{
    res.send("start");
});

const port = process.env.PORT || 3000;

app.listen(port,() =>console.log(`Listening on port ${port}`));