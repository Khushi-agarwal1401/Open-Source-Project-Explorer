export default function ProjectCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card-bg">
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <div className="h-6 w-3/4 animate-pulse rounded-lg bg-muted/30" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-muted/20" />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="h-6 w-20 animate-pulse rounded-full bg-muted/20" />
            <div className="h-8 w-8 animate-pulse rounded-lg bg-muted/20" />
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted/20" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted/20" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-muted/20" />
        </div>
        
        <div className="mt-4 flex flex-wrap gap-1.5">
          <div className="h-6 w-16 animate-pulse rounded-md bg-muted/20" />
          <div className="h-6 w-20 animate-pulse rounded-md bg-muted/20" />
          <div className="h-6 w-14 animate-pulse rounded-md bg-muted/20" />
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-border bg-card-bg/50 px-5 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-pulse rounded bg-muted/30" />
          <div className="h-4 w-16 animate-pulse rounded bg-muted/20" />
        </div>
        <div className="h-6 w-20 animate-pulse rounded-full bg-muted/20" />
      </div>
    </div>
  );
}
