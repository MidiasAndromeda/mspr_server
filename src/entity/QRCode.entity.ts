import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: "QRCode"})
export class QRCode {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    code: string;
    @Column()
    discountRate: number;
}