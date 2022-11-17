import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories";

const listCategoryService = async () => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = categoriesRepository.find();

  return categories;
};

export default listCategoryService;
