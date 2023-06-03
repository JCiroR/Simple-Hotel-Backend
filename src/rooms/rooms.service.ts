import { Injectable } from '@nestjs/common';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
  ) {}

  create(createRoomInput: CreateRoomInput): Promise<Room> {
    return this.roomsRepository.save(createRoomInput);
  }

  findAll(): Promise<Room[]> {
    return this.roomsRepository.find();
  }

  findOne(roomId: string): Promise<Room> {
    return this.roomsRepository.findOneBy({ roomId })
  }

  update(roomId: string, updateRoomInput: UpdateRoomInput): Promise<boolean> {
    return this.roomsRepository
      .update(roomId, updateRoomInput)
      .then((response) => response.affected == 1);
  }

  remove(roomId: string): Promise<boolean> {
    return this.roomsRepository
      .delete(roomId)
      .then((response) => response.affected == 1);
  }
}
