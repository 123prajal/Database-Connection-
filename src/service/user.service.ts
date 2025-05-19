import { UsbIcon } from "lucide-react";
import { AppDataSource } from "../config/database.config";
import { USER } from "../entities/user.entity";
import HttpException from "../utils/HttpException.utils";
import bcryptService from "./bcrypt.service";
import { Role } from "../constant/enum.constant";
import userInterface from "../interface/user.interface";

export class UserService {
  private readonly userRepo = AppDataSource.getRepository(USER);

  async signUp(data: userInterface) {
    try {
      const emailExist = await this.userRepo.findOneBy({ email: data.email });

      if (emailExist) {
        throw HttpException.badRequest("Email Already Exist");
      }

      const hashedPassword = await bcryptService.hash(data.password);

      const addUser = this.userRepo.create({
        username: data.username,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password,
        role: Role.USER,
        verified: false,
      });

      await this.userRepo.save(addUser);

      return {
        success: true,
        message: "User Registered Succesfully.",
        data: addUser,
      };
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (error instanceof Error) {
        throw HttpException.internalServerError(error.message);
      }
      throw HttpException.internalServerError("Unknown Error Occured");
    }
  }
}
