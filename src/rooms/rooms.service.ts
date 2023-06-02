import { Injectable } from '@nestjs/common';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';

@Injectable()
export class RoomsService {
  create(createRoomInput: CreateRoomInput) {
    return 'This action adds a new room';
  }

  findAll() {
    return `This action returns all rooms`;
  }

  findOne(id: string) {
    return `This action returns a #${id} room`;
  }

  update(id: string, updateRoomInput: UpdateRoomInput) {
    return `This action updates a #${id} room`;
  }

  remove(id: string) {
    return `This action removes a #${id} room`;
  }
}
