const app = require('./app');
const dotenv = require('dotenv');


dotenv.config();
//connect to DB


app.listen(3000, () => console.log('Server running......'));

