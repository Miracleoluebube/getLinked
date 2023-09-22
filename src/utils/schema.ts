import * as yup from "yup";
import isEmailValidator from "validator/lib/isEmail";

export const ContactSchema = yup
  .object()
  .shape({
    name: yup.string().required("Full name is required.").default(""),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      .test(
        "is-valid",
        (message) => `${message.path} is invalid`,
        (value) =>
          value
            ? isEmailValidator(value)
            : new yup.ValidationError("Invalid email format")
      )
      .default(""),
    message: yup.string().required("Message is required.").default(""),
  })
  .required();

export const RegisterSchema = yup
  .object()
  .shape({
    name: yup.string().required("Team's name is required.").default(""),
    phone: yup.number().nullable().required("Phone number is required."),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      .test(
        "is-valid",
        (message) => `${message.path} is invalid`,
        (value) =>
          value
            ? isEmailValidator(value)
            : new yup.ValidationError("Invalid email format")
      )
      .default(""),

    topic: yup.string().required("Project topic is required.").default(""),
    category: yup.string().required("Category is required.").default(""),
    grpSize: yup.string().required("Group size is required.").default(""),
    agree: yup.boolean().required("Required"),
  })
  .required();
