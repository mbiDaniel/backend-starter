import mongoose from "mongoose";

export class CreateProfileDto {
    name: string
    actions: mongoose.Types.ObjectId[]
}
