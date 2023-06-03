import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { RoomState } from '../enums/room-state.enum';

@InputType()
export class CreateRoomInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  roomId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  guestName?: string;

  @Field(() => RoomState)
  state: RoomState;
}
