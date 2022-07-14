import mongoose from "mongoose";

const Connection = async (username, password) => {

    try {
        await mongoose.connect(`mongodb://${username}:${password}@ac-3q2snpa-shard-00-00.afixoj2.mongodb.net:27017,ac-3q2snpa-shard-00-01.afixoj2.mongodb.net:27017,ac-3q2snpa-shard-00-02.afixoj2.mongodb.net:27017/?ssl=true&replicaSet=atlas-3mnsg5-shard-0&authSource=admin&retryWrites=true&w=majority`, {useNewUrlParser: true})
        console.log('Database connected successfully!');
    } catch (error) {
        console.log('Something goes wrong!', error);
    }
}

export default Connection;
