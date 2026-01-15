import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Gamepad2,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 生成静态参数
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: '文章未找到',
    };
  }
  
  return {
    title: `${post.title} - Tyranor 模拟器`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // 渲染 Markdown 内容（简单处理）
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // 标题
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
            {line.replace('# ', '')}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-5 mb-2 text-gray-900 dark:text-white">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
            {line.replace('#### ', '')}
          </h4>
        );
      }
      
      // 图片
      const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        return (
          <div key={index} className="my-6">
            <img 
              src={imgMatch[2]} 
              alt={imgMatch[1]} 
              className="rounded-lg shadow-md max-w-full mx-auto"
            />
            {imgMatch[1] && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                {imgMatch[1]}
              </p>
            )}
          </div>
        );
      }
      
      // 链接
      const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch && line.trim().startsWith('[')) {
        // 如果整行都是链接
        if (line.trim() === line) {
          return (
            <p key={index} className="mb-4">
              <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">
                {linkMatch[1]}
              </a>
            </p>
          );
        }
      }
      
      // 列表
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*:? ?(.*)/);
        if (match) {
          return (
            <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">{match[1]}</strong>: {match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">
            {line.replace('- ', '')}
          </li>
        );
      }
      
      // 空行
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // 普通段落（处理其中的链接）
      if (line.trim()) {
        const parts = [];
        let remaining = line;
        let partIndex = 0;
        
        while (remaining) {
          const linkIndex = remaining.indexOf('[');
          if (linkIndex === -1) {
            parts.push(remaining);
            break;
          }
          
          if (linkIndex > 0) {
            parts.push(remaining.substring(0, linkIndex));
          }
          
          const closeBracket = remaining.indexOf(']', linkIndex);
          const openParen = remaining.indexOf('(', closeBracket);
          const closeParen = remaining.indexOf(')', openParen);
          
          if (closeBracket !== -1 && openParen !== -1 && closeParen !== -1) {
            const linkText = remaining.substring(linkIndex + 1, closeBracket);
            const linkUrl = remaining.substring(openParen + 1, closeParen);
            parts.push(
              <a 
                key={index + '-' + partIndex++} 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                {linkText}
              </a>
            );
            remaining = remaining.substring(closeParen + 1);
          } else {
            parts.push(remaining);
            break;
          }
        }
        
        return (
          <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {parts}
          </p>
        );
      }
      
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* 返回按钮 */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            <ArrowLeft className="h-4 w-4" />
            返回博客列表
          </Button>
        </Link>
      </div>

      {/* 文章内容 */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* 文章头部 */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <Separator className="my-6" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <User className="h-4 w-4" />
                <span>作者: {post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Heart className="h-4 w-4" />
                  <span>点赞</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Share2 className="h-4 w-4" />
                  <span>分享</span>
                </Button>
              </div>
            </div>
          </header>

          <Separator className="my-8" />

          {/* 文章正文 */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              {renderContent(post.content)}
            </div>
          </div>

          {/* 标签 */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <BookOpen className="h-4 w-4" />
              <span>标签:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${tag}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/30"
                  >
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          {/* 分享卡片 */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-none">
            <CardContent className="pt-6">
              <div className="text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  喜欢这篇文章吗？
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  分享给朋友，让更多人了解 Tyranor 模拟器
                </p>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    分享到微信
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    分享到微博
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 相关文章 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-blue-600" />
              相关文章
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {getBlogPosts()
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-200 dark:hover:border-blue-800">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                        <CardDescription>{relatedPost.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{relatedPost.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
