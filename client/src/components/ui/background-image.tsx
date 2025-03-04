import React from 'react';

export function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="h-full w-full bg-[radial-gradient(#111_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000)] opacity-40 dark:opacity-70"
      />
    </div>
  );
}