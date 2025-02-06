import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'Non autorizzato, fai il Login di nuovo',
    });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Errore' });
  }
};

export default authMiddleware;
