import { FRIEND_STATUS } from 'src/common/enum/friend.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User)
  @JoinColumn({
    name: 'request_user_id',
    referencedColumnName: 'id',
  })
  requestUser: User;

  @ManyToOne((type) => User)
  @JoinColumn({
    name: 'addressed_user_id',
    referencedColumnName: 'id',
  })
  addressedUser: User;

  @Column({
    type: 'enum',
    enum: FRIEND_STATUS,
    default: FRIEND_STATUS.FRIEND,
  })
  status: FRIEND_STATUS;
}
