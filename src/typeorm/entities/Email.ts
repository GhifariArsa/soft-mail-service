import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'email' })
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: number;

  @Column()
  dateJoined: Date;
}
