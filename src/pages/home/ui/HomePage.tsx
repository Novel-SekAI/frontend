import { Button } from "@/shared/ui/button";

export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">FSD + shadcn</h1>
      <Button>Get Started</Button>
    </main>
  );
}
