const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tours', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const tourSchema = new mongoose.Schema({
    tourName: String,
    name: String,
    passportNo: String,
    destination: String,
    duration: String,
    specialRequests: String
});

const Tour = mongoose.model('Tour', tourSchema, "tourData");

// Route for adding new tour booking
app.post('/add', async (req, res) => {
    
    const { tourName, name, passportNo, destination, duration, specialRequests } = req.body;
    try {
        const newTour = new Tour({
            tourName,
            name,
            passportNo,
            destination,
            duration,
            specialRequests
        });
        // Save the document to the database
        const result = await newTour.save();
        console.log('Tour created:', result);
        res.status(201).send("Tour booking has been added!");
    } catch (err) {
        console.error('Error creating tour booking:', err);
        // Log the specific error message returned by MongoDB, if available
        const errorMessage = err.code ? err.code : err.message;
        res.status(500).send(`Tour booking creation failed: ${errorMessage}`);
    }
});

// Route for viewing all tour bookings
app.get('/view', async (req, res) => {
    try {
        const data = await Tour.find();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
