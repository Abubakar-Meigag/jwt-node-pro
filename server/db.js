const mongoose  = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        console.log(process.env.DB_CONNECTION_STRING);
        mongoose.connect(process.env.DB_CONNECTION_STRING, connectionParams);
        console.log('connect to database successfully');
    } catch (error) {
        console.log(error);
        console.log('could not connect to database');
    }
}