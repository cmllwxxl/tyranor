import Head from 'next/head';
import { ReactNode } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  children?: ReactNode;
}

const SITE_NAME = 'Tyranor 模拟器';
const DEFAULT_DESCRIPTION = 'Tyranor 是一款专为安卓移动端设计的免费 Galgame 模拟器，支持 RPG Maker、VN Maker、KRKR、Tyrano 等 20+ 游戏引擎，覆盖 90% 日式 AVG/RPG 游戏格式。独家渲染技术，加载速度提升 50%，智能温控算法，无广告无内购。';
const DEFAULT_KEYWORDS = 'Tyranor, Tyranor模拟器, galgame模拟器, Galgame, AVG, RPG, 视觉小说, RPG Maker, VN Maker, KRKR, Tyrano, 安卓模拟器, 手机玩游戏, galgame手游, 美少女游戏, 文字冒险游戏, 游戏模拟器下载';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tyranoremu.com';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = `${SITE_URL}/og-image.png`,
  url = SITE_URL,
  type = 'website',
  article,
  children,
}: SEOProps) {
  const fullTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tyranor 官方团队" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="zh_CN" />

      {/* Article specific Open Graph tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags &&
            article.tags.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            type === 'article'
              ? {
                  '@context': 'https://schema.org',
                  '@type': 'Article',
                  headline: fullTitle,
                  description,
                  image,
                  url,
                  ...(article && {
                    datePublished: article.publishedTime,
                    dateModified: article.modifiedTime,
                    author: {
                      '@type': 'Person',
                      name: article.author,
                    },
                  }),
                  publisher: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    logo: {
                      '@type': 'ImageObject',
                      url: `${SITE_URL}/logo.png`,
                    },
                  },
                  mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': url,
                  },
                }
              : {
                  '@context': 'https://schema.org',
                  '@type': 'WebSite',
                  name: SITE_NAME,
                  description,
                  url: SITE_URL,
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: `${SITE_URL}/blog?search={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    logo: {
                      '@type': 'ImageObject',
                      url: `${SITE_URL}/logo.png`,
                    },
                  },
                }
          ),
        }}
      />

      {/* Additional head elements */}
      {children}
    </Head>
  );
}
