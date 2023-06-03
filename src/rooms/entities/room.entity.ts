import { ObjectType, Field } from '@nestjs/graphql';
import { RoomState } from '../enums/room-state.enum';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType({ description: 'hotel room' })
export class Room {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  roomId: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  guestName?: string;

  @Column()
  @Field()
  @UpdateDateColumn()
  lastChanged: Date;

  @Column({ enum: RoomState })
  @Field(() => RoomState)
  state: RoomState;
}
