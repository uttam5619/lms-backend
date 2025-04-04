import { config } from 'dotenv';
config();
import app from './app.js';



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listning on port ${port} in ${process.env.NODE_ENV} mode`);
});