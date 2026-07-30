import { z } from "zod";

export const signupSchema = z
  .object({
    nickName: z.string().trim().nonempty({
      error: "닉네임을 입력해주세요.",
    }),

    email: z
      .string()
      .trim()
      .nonempty({ error: "이메일을 입력해주세요." })
      .pipe(z.email({ error: "올바른 이메일 형식으로 입력해주세요." })),

    password: z.string().nonempty({
      error: "비밀번호를 입력해주세요.",
    }),

    correctPassword: z.string().nonempty({
      error: "비밀번호를 다시 입력해주세요.",
    }),
  })
  .refine((data) => data.password === data.correctPassword, {
    error: "비밀번호가 일치하지 않아요.",
    path: ["correctPassword"],
  });

export type Signup = z.infer<typeof signupSchema>;
