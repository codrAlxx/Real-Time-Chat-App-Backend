const express = require('express');
const app = express();
const cors = require('cors');
const databaseConnect = require('./config/database')
const authRouter = require('./routes/authRoute')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const messengerRoute = require('./routes/messengerRoute');

app.use(cors())

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/messenger',authRouter);
app.use('/api/messenger',messengerRoute);


const PORT = 5050


app.get('/', (req, res)=>{
     console.log(process.env.PORT)
     res.send('This is from backend Sever')
})

databaseConnect();

app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
})