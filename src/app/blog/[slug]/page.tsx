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

  // 渲染 Markdown 内容（美化版）
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    let stepCounter = 0;

    return lines.map((line, index) => {
      // 主标题 - 跳过（已在页面头部显示）
      if (line.startsWith('# ')) {
        return null;
      }

      // 二级标题 - 带装饰线
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '');
        const isStep = title.includes('步骤');
        if (isStep) stepCounter++;

        return (
          <div key={index} className="mt-12 mb-6">
            <div className="flex items-center gap-3">
              {isStep ? (
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg">
                  {stepCounter}
                </span>
              ) : (
                <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {isStep ? title.replace(/步骤\d+[：:]\s*/, '') : title}
              </h2>
            </div>
            <div className="mt-3 h-px bg-gradient-to-r from-blue-200 via-purple-200 to-transparent dark:from-blue-800 dark:via-purple-800"></div>
          </div>
        );
      }

      // 三级标题
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span className="text-blue-500">▸</span>
            {line.replace('### ', '')}
          </h3>
        );
      }

      // 四级标题
      if (line.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-lg font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-200">
            {line.replace('#### ', '')}
          </h4>
        );
      }

      // 分隔线
      if (line.trim() === '---') {
        return (
          <div key={index} className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
            <span className="text-gray-400">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
          </div>
        );
      }

      // 图片 - 美化展示
      const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        return (
          <figure key={index} className="my-8 group">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <img
                src={imgMatch[2]}
                alt={imgMatch[1]}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {imgMatch[1] && (
              <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 italic flex items-center justify-center gap-2">
                <span className="w-8 h-px bg-gray-300 dark:bg-gray-600"></span>
                {imgMatch[1]}
                <span className="w-8 h-px bg-gray-300 dark:bg-gray-600"></span>
              </figcaption>
            )}
          </figure>
        );
      }
      
      // 链接 - 美化为按钮样式（如下载链接）
      const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch && line.trim().startsWith('[')) {
        const isDownload = linkMatch[1].includes('下载');
        if (isDownload) {
          return (
            <div key={index} className="my-6">
              <a
                href={linkMatch[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {linkMatch[1]}
              </a>
            </div>
          );
        }
        return (
          <p key={index} className="mb-4">
            <a
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 hover:decoration-blue-400 transition-colors"
            >
              {linkMatch[1]}
            </a>
          </p>
        );
      }

      // 有序列表（数字开头）
      const orderedMatch = line.match(/^(\d+)\.\s+\*\*(.*?)\*\*[,，]?\s*(.*)/);
      if (orderedMatch) {
        return (
          <div key={index} className="flex gap-4 mb-4 p-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-lg border-l-4 border-blue-500">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full text-sm">
              {orderedMatch[1]}
            </span>
            <div>
              <strong className="text-gray-900 dark:text-white">{orderedMatch[2]}</strong>
              <span className="text-gray-600 dark:text-gray-300">{orderedMatch[3]}</span>
            </div>
          </div>
        );
      }

      // 无序列表 - 带粗体
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*:?\s*(.*)/);
        if (match) {
          return (
            <div key={index} className="flex gap-3 mb-3 ml-2">
              <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
              <div>
                <strong className="text-gray-900 dark:text-white">{match[1]}</strong>
                {match[2] && <span className="text-gray-600 dark:text-gray-300">：{match[2]}</span>}
              </div>
            </div>
          );
        }
      }

      // 普通无序列表
      if (line.startsWith('- ')) {
        return (
          <div key={index} className="flex gap-3 mb-2 ml-2">
            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <span className="text-gray-700 dark:text-gray-300">{line.replace('- ', '')}</span>
          </div>
        );
      }
      
      // 空行
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      }

      // 普通段落（处理其中的链接和粗体）
      if (line.trim()) {
        const parts: React.ReactNode[] = [];
        let remaining = line;
        let partIndex = 0;

        while (remaining) {
          // 查找链接或粗体
          const linkIndex = remaining.indexOf('[');
          const boldIndex = remaining.indexOf('**');

          if (linkIndex === -1 && boldIndex === -1) {
            parts.push(remaining);
            break;
          }

          // 处理粗体
          if (boldIndex !== -1 && (linkIndex === -1 || boldIndex < linkIndex)) {
            if (boldIndex > 0) {
              parts.push(remaining.substring(0, boldIndex));
            }
            const endBold = remaining.indexOf('**', boldIndex + 2);
            if (endBold !== -1) {
              const boldText = remaining.substring(boldIndex + 2, endBold);
              parts.push(
                <strong key={`bold-${partIndex++}`} className="text-gray-900 dark:text-white font-semibold">
                  {boldText}
                </strong>
              );
              remaining = remaining.substring(endBold + 2);
              continue;
            }
          }

          // 处理链接
          if (linkIndex !== -1) {
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
                  key={`link-${partIndex++}`}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 underline decoration-2 underline-offset-2"
                >
                  {linkText}
                </a>
              );
              remaining = remaining.substring(closeParen + 1);
            } else {
              parts.push(remaining);
              break;
            }
          } else {
            parts.push(remaining);
            break;
          }
        }

        return (
          <p key={index} className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
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
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
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
