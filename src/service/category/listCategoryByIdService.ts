import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories";
import { AppError } from "../../errors/appError";

const listCategoryByIdService = async (id: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = await categoriesRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!categories) {
    throw new AppError(404, "Category not found");
  }
  return categories;
};

export default listCategoryByIdService;
