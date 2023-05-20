import { validator } from "cpf-cnpj-validator";
import express, { Request, Response } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";
const Joi = require("joi").extend(validator);

const router = express.Router();

//validation
const signupValidation = Joi.object({
  username: Joi.document().cpf().required(),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
});

// name
// cpf
// email
// role
// acesso
// isEmailVerified

//registrar
router.post("/api/users/signup", (req: Request, res: Response) => {
  const { error } = signupValidation.validate(req.body);

  if (error) {
    throw new RequestValidationError(error.details[0].message);
  }

  throw new DatabaseConnectionError();
});

export { router as signupRouter };
