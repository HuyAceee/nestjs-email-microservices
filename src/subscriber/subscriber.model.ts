/* eslint-disable prettier/prettier */
import { Document, Schema } from 'mongoose';

const SubsciberSchema = new Schema(
  {
    email: String,
    name: String,
  },
  {
    collection: 'subscribers',
  },
);

export { SubsciberSchema };

export interface Subscriber extends Document {
  email: string;
  name: string;
}
