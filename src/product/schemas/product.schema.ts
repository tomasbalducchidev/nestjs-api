/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    imageUrl: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});