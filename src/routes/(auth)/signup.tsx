import { SignupPage } from "@/pages/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup")({
  component: SignupPage,
});
