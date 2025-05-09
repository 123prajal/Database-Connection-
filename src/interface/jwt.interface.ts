import { Secret, SignOptions } from "jsonwebtoken";

export interface IJwtOptions {
  expiresIn: SignOptions["expiresIn"];
  secret: Secret;
}

export interface IJwtPayload {
  id: string;
}
