import { Column, Entity, OneToMany } from "typeorm";
import Base from "./base.entity";
import { Role } from "../constant/enum.constant";

@Entity("USER")
export class USER extends Base {
  @Column({ name: "Name" })
  username: string;

  @Column({ type: "enum", enum: Role, default: Role.USER })
  role: Role;

  @Column({ name: "Email", unique: true })
  email: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "Phone" })
  phone: string;

  @Column({ name: "address" })
  address: string;

  @Column({ name: "verified", default: false })
  verified: boolean;
}
