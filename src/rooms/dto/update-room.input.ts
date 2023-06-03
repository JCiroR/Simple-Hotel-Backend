import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { CreateRoomInput } from './create-room.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { RoomState } from '../enums/room-state.enum';

@InputType()
export class UpdateRoomInput extends PartialType(CreateRoomInput) {
  @Field()
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @Field(() => RoomState, { nullable: true })
  @IsOptional()
  state: RoomState;
}
