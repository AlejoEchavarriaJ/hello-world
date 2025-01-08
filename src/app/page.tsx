'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <Image
        src="/images/fondo.jpg?height=1080&width=1920"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="relative z-10 text-center">
        <h1 className={`text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 
                        animate-pulse shadow-lg p-4 rounded-lg 
                        ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
          Hello World
        </h1>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="text-2xl">🌟</span>
          <span className="text-2xl">🚀</span>
          <span className="text-2xl">🌈</span>
        </div>
      </div>
    </div>
  );
}

