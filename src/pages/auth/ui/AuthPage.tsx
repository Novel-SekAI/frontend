import { useState } from "react";
import { LoginForm, SignupForm } from "../index";

export function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isLogin = mode === "login";

  return (
    <main className="h-full">
      {isLogin ? (
        <LoginForm onSwitchToSignup={() => setMode("signup")} />
      ) : (
        <SignupForm onSwitchToLogin={() => setMode("login")} />
      )}
    </main>
  );
}
