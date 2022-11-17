import AppDataSource from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError(403, "Invalid credentials");
  }

  if (!user.isActive) {
    throw new AppError(400, "User is not active");
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError(403, "Invalid credentials");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "1d",
    }
  );

  return token;
};
export default userLoginService;
