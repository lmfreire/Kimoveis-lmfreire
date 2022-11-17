import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties";
import { schedulesUsersProperties } from "../../entities/schedulesUsersProperties";
import { Users } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createschedulesService = async (
  id: string,
  { date, hour, propertyId }: IScheduleRequest
) => {
  const schedulesRepository = AppDataSource.getRepository(
    schedulesUsersProperties
  );
  const newdate = new Date(date);

  const schedules = await schedulesRepository.findOne({
    where: {
      date: newdate,
      hour,
    },
  });

  if (schedules) {
    throw new AppError(400, "User schedule already exists");
  }

  const propertyRepository = AppDataSource.getRepository(Properties);

  const properties = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!properties || !propertyId) {
    throw new AppError(404, "Property not found");
  }

  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({
    id,
  });

  if (hour > "18:00" || hour < "08:00") {
    throw new AppError(400, "Invalid hour");
  }

  if (newdate.getDay() == 0 || newdate.getDay() == 6) {
    throw new AppError(400, "Invalid Date");
  }

  await schedulesRepository.save({
    hour,
    date: newdate,
    users: user!,
    property: properties,
  });

  return "Schedule created";
};

export default createschedulesService;
