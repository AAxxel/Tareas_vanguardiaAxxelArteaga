const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexion exitosa');
    } catch (error) {
        console.log('Error de conexion', error);
        process.exit(1);
    }
};

module.exports = connectDB;