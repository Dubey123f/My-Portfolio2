require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });

  const Contact = mongoose.model('Contact', contactSchema);

  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(200).json({ message: 'Message received and saved to database' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

