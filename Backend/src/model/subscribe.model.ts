import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
},

    {
        timestamps: true
    }
)

const subscriber = mongoose.model("subscriber", subscribeSchema);

export default subscriber;