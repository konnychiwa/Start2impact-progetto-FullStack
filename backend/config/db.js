import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://konny:NJcACAysZni2owOC@cluster0.q5lb4.mongodb.net/proj-FullStack'
    )
    .then(() => console.log('DB Connected'));
};
