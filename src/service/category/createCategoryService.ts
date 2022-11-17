import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (name: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categorys = await categoriesRepository.find();

  const categoryAlreadyExists = categorys.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError(400, "category already exists");
  }

  const categoryReturn = await categoriesRepository.save({
    name,
  });

  return categoryReturn;
};

export default createCategoryService;
