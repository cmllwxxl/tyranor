import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          © 2024 Tyranor 模拟器. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          致力于为用户提供最佳的 Galgame 游戏体验
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            首页
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">
            博客
          </Link>
          <Link href="/#download" className="hover:text-blue-400 transition-colors">
            下载
          </Link>
        </div>
      </div>
    </footer>
  );
}
