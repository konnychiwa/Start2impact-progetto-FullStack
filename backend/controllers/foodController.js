import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: 'File non caricato!' });
  }
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: 'Cibo aggiunto' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Errore' });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Errore' });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await foodModel.findById(id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: 'Food not found' });
    }

    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.error("Errore durante l'eliminazione del file:", err);
    });

    await foodModel.findByIdAndDelete(id);
    res.json({ success: true, message: 'Food removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export { addFood, listFood, removeFood };
