import { UnprocessableEntityException } from '@nestjs/common';

export const handleErrorConstraintUnique = (error: Error): never => {
  const splitedMessage: string[] = error.message.split('`');

  const errorMessage = `O campo '${splitedMessage.at(
    -2,
  )}' não está respeitando a constraint UNIQUE`;

  throw new UnprocessableEntityException(errorMessage);
};
