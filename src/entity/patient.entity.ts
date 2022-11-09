import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Patient {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

}