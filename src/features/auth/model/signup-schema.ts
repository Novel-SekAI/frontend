import { z } from "zod";

export const signupSchema = z.object({
  nickName: z.string(),
  email: z.string(),
  password: z.string(),
  correctPassword: z.string(),
});

export type Signup = z.infer<typeof signupSchema>;
