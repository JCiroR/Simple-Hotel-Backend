import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { Room } from './entities/room.entity';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';

@Resolver(() => Room)
export class RoomsResolver {
  constructor(private readonly roomsService: RoomsService) {}

  @Mutation(() => Room)
  createRoom(@Args('createRoomInput') createRoomInput: CreateRoomInput) {
    return this.roomsService.create(createRoomInput);
  }

  @Query(() => [Room], { name: 'rooms' })
  findAll() {
    return this.roomsService.findAll();
  }

  @Query(() => Room, { name: 'room' })
  findOne(@Args('roomId', { type: () => String }) roomId: string) {
    return this.roomsService.findOne(roomId);
  }

  @Mutation(() => Room)
  updateRoom(@Args('updateRoomInput') updateRoomInput: UpdateRoomInput) {
    return this.roomsService.update(updateRoomInput.roomId, updateRoomInput);
  }

  @Mutation(() => Room)
  removeRoom(@Args('roomId', { type: () => String }) roomId: string) {
    return this.roomsService.remove(roomId);
  }
}
