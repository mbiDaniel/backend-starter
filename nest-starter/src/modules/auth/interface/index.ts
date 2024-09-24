import { User, UserDocument } from "@app/common";
import { Types } from "mongoose";

export interface UserInterface extends User {
    // declare any instance methods here
}

export interface UserModelInterface {
    verifyUser(email: string, password: string): UserDocument; 
    findUserProfile(query: any, propagation: any): UserDocument[]; 
}