import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';

class SessionsValidator {
  async create(request: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
      email: Yup.string().email()
        .required(),
    });

    await schema.validate(request.body, { abortEarly: false });

    return next();
  }

  async reset(request: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
      token: Yup.string()
        .required(),
      password: Yup.string()
        .required(),
      confirm_password: Yup.string()
        .required(),
    });

    await schema.validate(request.body, { abortEarly: false });

    return next();
  }
}

export default new SessionsValidator;
