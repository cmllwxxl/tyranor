import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Zap, Gamepad2, Shield, Smartphone, Layout } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tyranor 模拟器 - 免费Galgame模拟器下载 | 支持RPG Maker VN Maker KRKR',
  description: 'Tyranor是一款专为安卓移动端设计的免费Galgame模拟器，支持RPG Maker、VN Maker、KRKR、Tyrano、Artemis等20+游戏引擎，覆盖90%日式AVG/RPG游戏格式。独家渲染技术，加载速度提升50%，智能温控算法，无广告无内购，一键安装游戏，云存档同步。v2.4.2最新版免费下载。',
  keywords: 'Tyranor, Tyranor模拟器, galgame模拟器, Galgame, AVG, RPG, 视觉小说, RPG Maker, VN Maker, KRKR, Tyrano, Artemis Engine, 安卓模拟器, 手机玩游戏, galgame手游, 美少女游戏, 文字冒险游戏, 游戏模拟器下载, 免费模拟器, 无广告模拟器, 手机galgame',
  authors: [{ name: 'Tyranor 官方团队' }],
  creator: 'Tyranor 官方团队',
  publisher: '广州智通信息技术咨询有限公司',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5000'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Tyranor 模拟器',
    title: 'Tyranor 模拟器 - 免费Galgame模拟器下载',
    description: 'Tyranor是一款专为安卓移动端设计的免费Galgame模拟器，支持RPG Maker、VN Maker、KRKR、Tyrano、Artemis等20+游戏引擎，覆盖90%日式AVG/RPG游戏格式。独家渲染技术，加载速度提升50%，智能温控算法，无广告无内购。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tyranor 模拟器',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyranor 模拟器 - 免费Galgame模拟器下载',
    description: 'Tyranor是一款专为安卓移动端设计的免费Galgame模拟器，支持RPG Maker、VN Maker、KRKR、Tyrano、Artemis等20+游戏引擎，覆盖90%日式AVG/RPG游戏格式。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* 头部导航 */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tyranor 模拟器
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              功能特点
            </a>
            <a href="#engines" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              支持引擎
            </a>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              博客
            </Link>
            <a href="#download" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              下载
            </a>
          </nav>
        </div>
      </header>

      {/* 主横幅区域 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">最新版本已发布</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200">
            Tyranor 模拟器
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            专为安卓移动端设计的免费 Galgame 模拟器
          </p>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            支持 <strong className="text-blue-600 dark:text-blue-400">20+ 游戏引擎</strong>，覆盖 90% 日式 AVG/RPG 游戏格式<br />
            独家渲染技术，加载速度提升 <strong className="text-purple-600 dark:text-purple-400">50%</strong>，智能温控算法
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              id="download"
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://pan.quark.cn/s/a7362efee2f8" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                立即下载 v2.3.4
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              asChild
            >
              <Link href="/blog/tyranor-guide">
                了解更多
              </Link>
            </Button>
          </div>

          <div className="flex justify-center mb-8">
            <Link href="/blog/tyranor-guide" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2">
              <span>📖</span>
              查看使用教程
            </Link>
          </div>

          <div className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              <span>Android 支持</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>免费使用</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>安全无广告</span>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特点区域 */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            核心优势
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            独家技术加持，为 Galgame 爱好者打造极致体验
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200 dark:hover:border-blue-800">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>极致性能</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <strong>独家渲染技术</strong>，加载速度提升 50%。内存占用优化到极致，<strong>低端设备也能满帧运行</strong>，智能温控算法减少发热。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 dark:hover:border-green-800">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>多引擎支持</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                支持<strong> Artemis、RPG Maker（含 MZ）、KRKR、Tyrano、VN Maker 等 20+ 引擎</strong>，覆盖 90% 日式 AVG/RPG 游戏格式。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-purple-200 dark:hover:border-purple-800">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>纯净体验</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <strong>无广告、无内购</strong>，享受纯粹的游戏乐趣。经过严格测试确保绝对稳定，彻底告别闪退烦恼。
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-orange-200 dark:hover:border-orange-800">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle>轻量高效</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                应用体积仅 <strong>42-90MB</strong>，几乎不占用设备内存。支持 ZIP 压缩包直接读取，云端存档同步。
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 支持的游戏引擎 */}
      <section id="engines" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              支持的游戏引擎
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <strong>20+ 引擎支持</strong>，覆盖 90% 日式 AVG/RPG 游戏格式，针对特殊引擎提供兼容模式
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { name: 'RPG Maker', color: 'from-red-500 to-orange-500' },
              { name: 'RPG Maker MZ', color: 'from-blue-500 to-cyan-500' },
              { name: 'VN Maker', color: 'from-purple-500 to-pink-500' },
              { name: 'Tyrano', color: 'from-green-500 to-teal-500' },
              { name: 'Artemis Engine', color: 'from-yellow-500 to-orange-500' },
              { name: 'KRKR', color: 'from-indigo-500 to-purple-500' },
            ].map((engine, index) => (
              <Card
                key={index}
                className="text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div
                    className={`h-2 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${engine.color}`}
                  />
                  <p className="font-semibold text-gray-900 dark:text-white">{engine.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 使用方法 */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            使用方法
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  下载并安装
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  点击上方下载按钮，下载最新版 Tyranor 模拟器并安装到手机上
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  导入游戏文件
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  将你的游戏文件导入到软件内即可，操作方法非常简单
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  开始游戏
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  选择游戏，即可在手机上畅玩 Galgame 游戏，享受流畅的游戏体验
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            立即开始你的 Galgame 之旅
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            免费下载，畅享游戏，无广告无卡顿，极致体验
          </p>
          <Button
            size="lg"
            className="h-14 px-8 text-lg rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-xl transition-all"
            asChild
          >
            <a href="https://pan.quark.cn/s/a7362efee2f8" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              立即下载 Tyranor 模拟器
            </a>
          </Button>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2024 Tyranor 模拟器. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            致力于为用户提供最佳的 Galgame 游戏体验
          </p>
        </div>
      </footer>
    </div>
  );
}
