import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties";
import { AppError } from "../../errors/appError";

const listchedulesService = async (id: string) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.findOne({
    relations: {
      schedules: true,
    },
    where: {
      id,
    },
  });

  if (!properties) {
    throw new AppError(404, "Property not found");
  }

  return properties;
};

export default listchedulesService;
