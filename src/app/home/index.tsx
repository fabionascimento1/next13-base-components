import { Skeleton } from "@/components/Skeleton";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="box-border h-32 w-32">
        <Skeleton />
      </div>
    </div>
  );
}
