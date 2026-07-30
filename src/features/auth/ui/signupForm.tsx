import logoUrl from "@/shared/assets/logo.svg";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { signupSchema, type Signup } from "../model/signup-schema";

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Signup>({ resolver: zodResolver(signupSchema) });

  const onSubmit = () => {
    // TODO
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-1.5">
          <img src={logoUrl} alt="logo" className="h-12 w-12" />
          <h1 className="text-[40px] font-semibold">
            Novel Sek<span className="text-accent">AI</span>
          </h1>
        </div>
        <p className="mb-6 text-[15px] text-neutral-500">
          소설의 세계관을, 함께 지어요
        </p>
      </div>
      <Card className="flex min-h-130 w-100 flex-col items-start gap-4 p-7">
        <h1 className="text-[22px] font-bold">회원가입</h1>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start gap-1.5"
        >
          <Label className="text-[13px]">닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임"
            {...register("nickName")}
            className="h-10 w-full"
          />
          <p role="alert" className="text-destructive text-[13px]">
            {errors.nickName?.message}
          </p>

          <Label className="text-[13px]">이메일</Label>
          <Input
            type="email"
            placeholder="이메일"
            {...register("email")}
            className="h-10 w-full"
          />
          <p role="alert" className="text-destructive text-[13px]">
            {errors.email?.message}
          </p>

          <Label className="text-[13px]">비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호"
            {...register("password")}
            className="w-full pr-10"
          />
          <p role="alert" className="text-destructive text-[13px]">
            {errors.password?.message}
          </p>

          <Label className="text-[13px]">비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            {...register("correctPassword")}
            className="w-full pr-10"
          />
          <p role="alert" className="text-destructive text-[13px]">
            {errors.correctPassword?.message}
          </p>
          <p className="mt-4"></p>

          <Button className="h-12 w-full cursor-pointer">회원가입</Button>
        </form>
        <div className="self-center">
          <p className="text-[13px] text-neutral-500">
            이미 계정이 있으신가요?{" "}
            <Link
              to="/login"
              className="text-accent cursor-pointer font-bold hover:underline"
            >
              로그인
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
