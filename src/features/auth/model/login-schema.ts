import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("이메일"),
  password: z.string("비밀번호").nonempty("비었음"),
});

export type Login = z.infer<typeof loginSchema>;
