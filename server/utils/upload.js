import {GridFsStorage} from "multer-gridfs-storage";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-58c8epq-shard-00-00.e0xwarn.mongodb.net:27017,ac-58c8epq-shard-00-01.e0xwarn.mongodb.net:27017,ac-58c8epq-shard-00-02.e0xwarn.mongodb.net:27017/?ssl=true&replicaSet=atlas-482ubo-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: {useNewUrlParser: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1) {
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({storage});