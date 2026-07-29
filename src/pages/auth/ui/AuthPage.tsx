import { useState } from "react";
import { LoginForm, SignupForm } from "../index";

export function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isLogin = mode === "login";

  return (
    <main className="h-full">
      {isLogin ? <LoginForm /> : <SignupForm />}
      {/* <button
        type="button"
        onClick={() => setMode(isLogin ? "signup" : "login")}
      >
        {isLogin ? "회원가입" : "로그인"}
      </button> */}
    </main>
  );
}
