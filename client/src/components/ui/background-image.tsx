
import React from 'react';

export function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-10"></div>
      <img 
        src="/assets/_06cf3223-09ce-4857-98a6-c8b29c1a0fc9.jpg" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
