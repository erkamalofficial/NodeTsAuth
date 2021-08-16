import mongoose from 'mongoose';


//@ts-ignore
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected To MongoDB Successfully.....!')
})
.catch((err) => console.log("No Connection", err));