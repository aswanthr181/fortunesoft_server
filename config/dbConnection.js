const mongoose=require('mongoose')
const url = 'mongodb://127.0.0.1:27017/fortunesoft';

module.exports.connectDB=()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log(err+"database didn't connected");
    })
}