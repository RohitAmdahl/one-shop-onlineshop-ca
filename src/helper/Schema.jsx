import * as yup from "yup";
const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .required("Please enter your first name"),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .required("Please write your subject"),
    email: yup
      .string()
      .email("email should be valid email.")
      .required("Please write your valid email"),
    message: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .required("Please write your subject"),
  })
  .required();

export default schema;

export const submitForm = (data) => {
  console.log(data);
};
