import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: { type: String, required: true }, // clerk user ID
    receiverId: { type: String, required: true }, // clerk user ID
    content: { type: String, required: true },
}, { timestamps: true });

export const Message = mongoose.model("Message", messageSchema);