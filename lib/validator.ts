import * as z from "zod";

export const SignupForm = z.object({
  name: z.string().min(1, "Please enter your first name"),
  username: z.string().min(1, "Please enter your last name"),
  email: z
    .string()
    .email("Please enter a valid email")
    .min(1, "Please enter email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase character")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),

});

export const LoginForm = z.object({
  username: z.string().min(1, "Please enter your Username"),
  password: z.string().min(1, "Please enter password"),
  
});
