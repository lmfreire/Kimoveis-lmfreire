import AppDataSource from "../../data-source";
import { Users } from "../../entities/users";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createUserService = async ({
  email,
  isAdm,
  name,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists");
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    isAdm,
    isActive: true,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
