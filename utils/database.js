import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)


    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "share-prompt",
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false,
            useCreateIndex: true,
        });

        isConnected = true;
        console.log('MongoDB connected')
        return true;
    } catch (error) {
        console.log(error)
        throw new Error('Unable to connect to MongoDB');
    }
}