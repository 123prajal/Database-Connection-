import { type Role } from "../constant/enum.constant";
import { type Request, type Response, type NextFunction } from "express";

export const authorization = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) throw new Error("You are not authorized");
    try {
      const userRole = req.user.role;
      if (userRole && roles.includes(userRole as Role)) next();
      else throw new Error("You are not authorized");
    } catch (error) {
      throw new Error("You are not authorized");
    }
  };
};
