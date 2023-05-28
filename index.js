import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/user.js';
import routerOfService from './router/service.js';
import routerOfOrder from './router/order.js';
import routerOfExtraService from './router/extraService.js';

dotenv.config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT;
const app = express();
console.log(uri, port);
app.use(cors());
app.use(express.json());
app.use('/customer', router);
app.use('/service', routerOfService);
app.use('/order', routerOfOrder);
app.use('/extraService', routerOfExtraService);

const connect = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(uri, {})

    .then(() => {
      console.log('connected to DB');
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

app.listen(port, async () => {
  console.log(`app running ${port}`);
  connect();
});
