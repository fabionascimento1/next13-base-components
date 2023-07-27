import { Button } from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50 flex-col gap-4">
      <Button type="submit" contained="primary" />
      <Button contained="secondary" size="xs" />
    </div>
  );
}
