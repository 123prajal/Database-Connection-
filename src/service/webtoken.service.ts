import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { DotenvConfig } from "../config/env.config";
import { type IJwtOptions, type IJwtPayload } from "../interface/jwt.interface";
import { Role } from "../constant/enum.constant";

class ServiceWebToken {
  sign(user: IJwtPayload, options: IJwtOptions, role: Role): string {
    return jwt.sign(
      {
        id: user.id,
        role,
      },

      options.secret,
      {
        expiresIn: options.expiresIn,
      }
    );
  }

  verify(token: string, secret: string): any {
    try {
      return jwt.verify(token, secret);
    } catch (error: any) {
      console.log("🚀 ~ ServiceWebToken ~ verify ~ error:", error);
    }
  }

  genrateToken(
    user: IJwtPayload,
    role: Role
  ): { accessToken: string; refreshToken: string } {
    const accessToken = this.sign(
      user,
      {
        expiresIn:
          DotenvConfig.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
        secret: DotenvConfig.ACCESS_TOKEN_SECRET,
      },
      role
    );

    const refreshToken = this.sign(
      user,
      {
        expiresIn:
          DotenvConfig.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
        secret: DotenvConfig.REFRESH_TOKEN_SECRET,
      },
      role
    );
    return { accessToken, refreshToken };
  }

  genrateAccessToken(user: IJwtPayload, role: Role): string {
    return this.sign(
      user,
      {
        expiresIn:
          DotenvConfig.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
        secret: DotenvConfig.ACCESS_TOKEN_SECRET,
      },
      role
    );
  }
}

export default new ServiceWebToken();
