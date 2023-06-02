import { registerEnumType } from '@nestjs/graphql'

export enum RoomState {
    OCCUPIED='OCCUPIED',
    FREE='FREE',
}

registerEnumType(RoomState, {
    name: 'RoomState',
});