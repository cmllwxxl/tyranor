'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2 } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tyranor 模拟器
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#features"
            className={`text-sm font-medium transition-colors ${
              isActive('/') && !isActive('/blog')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            功能特点
          </Link>
          <Link
            href="/#engines"
            className={`text-sm font-medium transition-colors ${
              isActive('/') && !isActive('/blog')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            支持引擎
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              isActive('/blog')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            博客
          </Link>
          <Link
            href="/#download"
            className={`text-sm font-medium transition-colors ${
              isActive('/') && !isActive('/blog')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
            }`}
          >
            下载
          </Link>
        </nav>
      </div>
    </header>
  );
}
