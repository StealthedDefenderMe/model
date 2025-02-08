import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({
    collection: 'users',
    timestamps: true
})

export class UsersModel {

    @Prop({ type: String, required: true })
    firstName: string;

    @Prop({ type: String, required: true })
    lastName: string;

    @Prop({ type: String, required: true })
    userName: string;

    @Prop({ type: String, required: true })
    email: string;

    @Prop({ type: Number, required: true })
    mobileNumber: number;

}

export type UsersModelDocument = HydratedDocument<UsersModel>
export const UserSchemas = SchemaFactory.createForClass(UsersModel)

