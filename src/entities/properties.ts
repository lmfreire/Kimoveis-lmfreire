import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresses";
import { Categories } from "./categories";
import { schedulesUsersProperties } from "./schedulesUsersProperties";

@Entity()
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => Addresses, {
    eager: true,
  })
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, { eager: true })
  category: Categories;

  @OneToMany(() => schedulesUsersProperties, (schedules) => schedules.property)
  schedules: schedulesUsersProperties[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
