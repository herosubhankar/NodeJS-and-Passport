const express=require('express');
const expressLayouts=require('express-ejs-layouts')
const app=express();
const mongoose=require('mongoose');

//DB config
const db=require('./config/keys').MongoURI;
//connect to Mongo
mongoose.connect(db)
.then(()=>console.log('MongoDB connected......'))
.catch(err=> console.log(err));
//
app.use(expressLayouts)
app.set('view engine','ejs')

//Route
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))

const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server started on port ${PORT}`))