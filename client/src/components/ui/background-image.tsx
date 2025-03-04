import React from 'react';

export function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="h-full w-full bg-[radial-gradient(#999_1px,transparent_1px)] dark:bg-[radial-gradient(#555_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000)] opacity-20 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
    </div>
  );
}