import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-58c8epq-shard-00-00.e0xwarn.mongodb.net:27017,ac-58c8epq-shard-00-01.e0xwarn.mongodb.net:27017,ac-58c8epq-shard-00-02.e0xwarn.mongodb.net:27017/?ssl=true&replicaSet=atlas-482ubo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database connected successfully!');
    } catch (error) {
        console.log('Something goes wrong!', error);
    }
}

export default Connection;
