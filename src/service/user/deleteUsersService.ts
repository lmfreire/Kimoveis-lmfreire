import AppDataSource from "../../data-source";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";

const deleteUserServie = async (id: string) => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (!user.isActive) {
    throw new AppError(400, "Inactive user");
  }

  await userRepository.update(id, { isActive: false });
  return;
};

export default deleteUserServie;
