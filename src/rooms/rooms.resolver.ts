import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { Room } from './entities/room.entity';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';

@Resolver(() => Room)
export class RoomsResolver {
  constructor(private readonly roomsService: RoomsService) {}

  @Mutation(() => Room, { nullable: true })
  createRoom(
    @Args('createRoomInput') createRoomInput: CreateRoomInput,
  ): Promise<Room> {
    return this.roomsService.create(createRoomInput).then(
      res => {
        console.error(res);
        return res;
      }
    );
  }

  @Query(() => [Room], { name: 'rooms' })
  findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Query(() => Room, { name: 'room' })
  findOne(
    @Args('roomId', { type: () => String }) roomId: string,
  ): Promise<Room> {
    return this.roomsService.findOne(roomId);
  }

  @Mutation(() => Boolean)
  updateRoom(
    @Args('updateRoomInput') updateRoomInput: UpdateRoomInput,
  ): Promise<boolean> {
    return this.roomsService.update(updateRoomInput.roomId, updateRoomInput);
  }

  @Mutation(() => Boolean)
  removeRoom(
    @Args('roomId', { type: () => String }) roomId: string,
  ): Promise<boolean> {
    return this.roomsService.remove(roomId);
  }
}
