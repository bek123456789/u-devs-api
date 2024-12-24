const express = require('express');
const router = express.Router();
const Card = require('../models/cardModel');

// Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new card
router.post('/', async (req, res) => {
  const card = new Card(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a card
router.delete('/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.json({ message: 'Card deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
