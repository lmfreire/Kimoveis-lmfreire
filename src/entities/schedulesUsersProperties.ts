import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Properties } from "./properties";
import { Users } from "./users";

@Entity("schedules_users_properties")
export class schedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => Users, { eager: true })
  users: Users;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
