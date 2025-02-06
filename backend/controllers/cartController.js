import userModel from '../models/userModel.js';

// add item to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: 'Utente non trovato' });
    }
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(201).json({ success: true, message: 'Aggiunto al carrello' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Errore' });
  }
};

// remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "L'utente non esiste",
      });
    }

    let cartData = userData.cartData;

    if (cartData[req.body.itemId]) {
      if (cartData[req.body.itemId] > 1) {
        cartData[req.body.itemId] -= 1;
      } else {
        delete cartData[req.body.itemId];
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "L'elemento non è nel carrello",
      });
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.status(200).json({
      success: true,
      message: 'Prodotto rimosso dal carrello',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Errore',
    });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.status(201).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Errore' });
  }
};

export { addToCart, removeFromCart, getCart };
