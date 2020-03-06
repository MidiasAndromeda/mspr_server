import { Document } from 'mongoose';

export interface QrCodeNew extends Document {
    code: string;
    discountRate: number;
}