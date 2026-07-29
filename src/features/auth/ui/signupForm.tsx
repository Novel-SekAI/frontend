import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema, type Signup } from "../model/signup-schema";

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Signup>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (values: Signup) => {
    // TODO
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <Card className="flex h-100 w-120 items-center justify-center">
        <h1>회원가입</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start justify-center gap-2"
        >
          <Input type="text" placeholder="닉네임" {...register("nickName")} />
          <p>{errors.nickName?.message}</p>

          <Input type="email" placeholder="이메일" {...register("email")} />
          <p>{errors.email?.message}</p>

          <Input
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <Input
            type="password"
            placeholder="비밀번호 확인"
            {...register("correctPassword")}
          />
          <p>{errors.correctPassword?.message}</p>

          <Button type="submit">회원가입</Button>
        </form>
      </Card>
    </div>
  );
}
