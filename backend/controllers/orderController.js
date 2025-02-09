import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const frontend_url = 'http://localhost:5173';

// placing user order
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: 'EUR',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: 'EUR',
        product_data: {
          name: 'Spese consegna',
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(201).json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Errore' });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == 'true') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.status(201).json({ success: true, message: 'Pagato' });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.status(500).json({ success: false, message: 'Non pagato' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Errore' });
  }
};

// user order for front end
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.status(201).json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Errore' });
  }
};

export { placeOrder, verifyOrder, userOrders };
