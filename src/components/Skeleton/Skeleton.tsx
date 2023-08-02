export function Skeleton() {
  return (
    <div
      className="
        space-y-5 rounded-2xl bg-white/5 p-4  
        bg-gradient-to-r from-transparent via-rose-100/10 to-transparent 
        relative 
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-r
        before:from-transparent before:via-rose-100/10 before:to-transparent
        solate
        overflow-hidden
        shadow-xl shadow-black/5
        before:border-t before:border-rose-100/10
      "
    >
      <div className="h-24 rounded-lg bg-rose-100/10"></div>
      <div className="space-y-3 ">
        <div className="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
        <div className="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
        <div className="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
      </div>
    </div>
  );
}
