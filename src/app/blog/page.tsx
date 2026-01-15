import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts, getAllCategories, getAllTags } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, Filter, Gamepad2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '博客 - Tyranor 模拟器官方资讯',
  description: 'Tyranor模拟器官方博客，提供最新动态、使用教程、游戏推荐、性能优化技巧和Galgame文化资讯。学习如何使用Tyranor模拟器畅玩RPG Maker、VN Maker、KRKR等引擎的游戏。',
  keywords: 'Tyranor博客, 模拟器教程, Galgame推荐, RPG Maker教程, VN Maker使用, KRKR游戏, 模拟器性能优化, Galgame文化, 视觉小说攻略',
  openGraph: {
    title: '博客 - Tyranor 模拟器官方资讯',
    description: 'Tyranor模拟器官方博客，提供最新动态、使用教程、游戏推荐、性能优化技巧和Galgame文化资讯。',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />

      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Gamepad2 className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">游戏资讯与教程</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            博客
          </h1>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            探索 Tyranor 模拟器的使用技巧、游戏推荐和文化资讯
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边栏 */}
          <aside className="lg:w-1/4">
            <div className="sticky top-20 space-y-6">
              {/* 分类筛选 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-blue-600" />
                    文章分类
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/blog">
                      <Badge variant="default" className="cursor-pointer hover:bg-blue-700">
                        全部
                      </Badge>
                    </Link>
                    {categories.map((category) => (
                      <Link key={category} href={`/blog?category=${category}`}>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/30"
                        >
                          {category}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 热门标签 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">热门标签</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Link key={tag} href={`/blog?tag=${tag}`}>
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          #{tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* 文章列表 */}
          <main className="lg:w-3/4">
            <div className="space-y-6">
              {posts.map((post) => (
                <Card
                  key={post.slug}
                  className="hover:shadow-lg transition-all border-2 hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <CardDescription className="text-base mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          asChild
                        >
                          <Link href={`/blog/${post.slug}`}>
                            阅读更多
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* 订阅区域 */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            订阅我们的博客
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            获取最新的 Tyranor 模拟器资讯、教程和游戏推荐
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              订阅
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
