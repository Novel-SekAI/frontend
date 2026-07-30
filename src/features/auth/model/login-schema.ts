import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ error: "이메일을 입력해주세요." })
    .pipe(z.email({ error: "올바른 이메일 형식으로 입력해주세요." })),
  password: z.string().nonempty({ error: "비밀번호를 입력해주세요." }),
});

export type Login = z.infer<typeof loginSchema>;
