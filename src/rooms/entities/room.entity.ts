import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RoomState } from '../enums/room-state.enum';

@ObjectType({ description: 'hotel room'})
export class Room {
  @Field()
  roomId: string;

  @Field({ nullable: true })
  guestName?: string;

  @Field({ nullable: true })
  lastChanged?: Date;

  @Field(type => RoomState)
  state: RoomState;
}
