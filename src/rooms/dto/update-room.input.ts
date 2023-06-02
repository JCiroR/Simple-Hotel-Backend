import { IsNotEmpty, IsString } from 'class-validator';
import { CreateRoomInput } from './create-room.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoomInput extends PartialType(CreateRoomInput) {
  @Field()
  @IsString()
  @IsNotEmpty()
  roomId: string;
}