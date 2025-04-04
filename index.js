import { config } from 'dotenv';
config();

import express from 'express';
const app = express();




app.listen(process.env.PORT, () => {
  console.log(`Server is listning on port ${process.env.PORT}`);
});