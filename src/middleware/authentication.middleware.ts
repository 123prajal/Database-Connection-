import { DotenvConfig } from "../config/env.config";
import { Request, Response, NextFunction } from "express";
import webtokenService from "../service/webtoken.service";

export const authentication = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const tokens = req.headers.authorization?.split(" ");
    console.log("🚀 ~ return ~ tokens:", tokens);

    try {
      if (!tokens) {
        throw new Error("You are not authorize");
      }

      const mode = tokens[0];

      const accessToken = tokens[1];

      if (mode != "Bearer" || !accessToken) {
        console.log("Errrr");

        throw new Error("You are not authorize");
      }

      const payload = webtokenService.verify(
        accessToken,
        DotenvConfig.ACCESS_TOKEN_SECRET
      );

      if (payload) {
        req.user = payload;
        next();
      } else {
        throw new Error("You are not authorized");
      }
    } catch (error: any) {
      if (error.name === "TokenExpired") {
        throw new Error("Token Expired, Please login again");
      }
      return next(new Error("Your are not authorized"));
    }
  };
};
