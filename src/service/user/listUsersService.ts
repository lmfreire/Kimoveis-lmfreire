import AppDataSource from "../../data-source";
import { Users } from "../../entities/users";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = userRepository.find();

  return users;
};

export default userListService;
