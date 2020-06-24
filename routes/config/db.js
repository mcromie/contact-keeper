const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI'); 

const connectDB = async () => {
    try {
        await mongoose
        .connect("mongodb+srv://michaela123:michaela123@contactkepper-90plv.mongodb.net/ContactKepper?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

}

module.exports = connectDB;


    //PROMISE
    // mongoose.connect(db, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false
    // }).then(() => console.log('MongoDB Connected'))
    // .catch(err => {
    //     console.error(err.message);
    //     process.exit(1);
    // })