import { Document } from 'mongoose';

export interface QrCode extends Document{
    _id: string;
    code: string;
    discountRate: number;
}