import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { RoomState } from '../enums/room-state.enum';

@InputType()
export class CreateRoomInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  guestName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  lastChanged?: Date;

  @Field(type => RoomState)
  @IsEnum({ entity: RoomState })
  state: RoomState;
}
