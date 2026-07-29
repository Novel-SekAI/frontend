import logoUrl from "@/shared/assets/logo.svg";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type Login } from "../model/login-schema";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<Login> = (values, e) => {
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
      <Card className="flex h-100 w-100 flex-col items-start justify-center gap-4 p-7">
        <h1 className="text-[22px] font-bold">로그인</h1>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start gap-1.5"
        >
          <Label className="text-[13px]">이메일</Label>
          <Input
            type="email"
            placeholder="이메일"
            {...register("email")}
            className="h-10 w-full"
          />
          <p>{errors.email?.message}</p>
          <Label className="text-[13px]">비밀번호</Label>
          <div className="relative h-10 w-full">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              {...register("password")}
              className="w-full pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
              onClick={() => setShowPassword((previous) => !previous)}
              className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          <p>{errors.password?.message}</p>
          <div>
            <input
              color="accent"
              type="checkbox"
              name=""
              id=""
              className="mb-2"
            />
            <span className="ml-2 text-[15px]">로그인 상태 유지</span>
          </div>
          <Button className="bg-accent hover:bg-accent-foreground h-12 w-full cursor-pointer">
            로그인
          </Button>
        </form>
        <div className="self-center">
          <p className="text-[13px] text-neutral-500">
            아직 계정이 없으신가요?
            <span className="text-accent cursor-pointer font-bold hover:underline">
              회원가입
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}
