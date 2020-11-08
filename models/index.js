import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

//criando o modelo schema
const gradeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      min: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  },
  {
    //para id virtual
    toJSON: {
      virtuals: true,
    },
  }
);

//definindo o modelo da coleção
const gradeModel = mongoose.model('grade', gradeSchema, 'grade');

export { db, gradeModel };
