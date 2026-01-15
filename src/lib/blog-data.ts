export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  coverImage?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'tyranor-detailed-tutorial',
    title: 'Tyranor 模拟器详细使用教程 - 从安装到游戏畅玩',
    excerpt: 'Tyranor模拟器，这是一款所有二次元玩家，尤其热衷特殊类型的玩家朋友们都绝对不会陌生的终极神器!本文详细讲解如何在手机上设置游戏路径、导入游戏文件并畅玩。',
    content: `# Tyranor 模拟器详细使用教程 - 从安装到游戏畅玩

Tyranor模拟器，这是一款所有二次元玩家，尤其热衷特殊类型的玩家朋友们都绝对不会陌生的终极神器!一句话概括，它可以在手机上游玩所有我们心心念念、爱不释手的游戏!比如：K想曲、四Y草、Q恋W花、W华镜......

## 初次打开

软件打开，默认进入的是游玩记录，这里肯定空空如也，毕竟是初次安装：

![游玩记录](/blog-images/intro.jpg)

## 添加游戏路径

我们点击底部导航里的添加：

![添加按钮](/blog-images/add1.jpg)

在这里，可以设定游戏本体的识别路径，底层逻辑，跟Switch模拟器很像。

![设定游戏路径](/blog-images/path1.jpg)

## 创建游戏文件夹

然后，我们打开自己手机中的文件管理。

![打开文件管理](/blog-images/file1.jpg)

点击内部存储右边的加号。

![点击加号](/blog-images/add2.jpg)

手动建立这个文件夹，这里需要注意大小写，否则无法识别正确路径。

![建立文件夹](/blog-images/folder.jpg)

点击确定之后，手机就多出一个文件夹。

![文件夹创建成功](/blog-images/folder2.jpg)

## 下载并导入游戏

然后，将游戏本体下载到手机。

![下载游戏](/blog-images/download1.jpg)

一般来说，默认都会下载到Download这个文件夹：

![下载文件夹](/blog-images/download2.jpg)

在这里，找到游戏文件夹，长按以后，点击下方的移动。

![移动游戏](/blog-images/move1.jpg)

将它移动到之前我们手动建立的文件夹里去。

![移动到游戏目录](/blog-images/move2.jpg)

正确路径位置，如下图所示：

![正确路径](/blog-images/path2.jpg)

## 启动游戏

后面就简单了，我们返回今天的模拟器，在刚刚的窗口内点击确定。

![点击确定](/blog-images/confirm.jpg)

于是，它"唰"的一下，就出来了!

![游戏显示](/blog-images/game-list.jpg)

点击之后，在弹出的窗口内，选择第1项，也就是运行游戏。

![运行游戏](/blog-images/run.jpg)

## 见证奇迹

接下来，便是见证奇迹的时刻!

![游戏运行](/blog-images/start.jpg)

操作起来，也是极其流畅丝滑。

![流畅操作](/blog-images/play1.jpg)

刺客从来没有想过，居然可以在手机上，体验这些游戏的独特魅力。

![游戏魅力](/blog-images/play2.jpg)

## 回忆与感动

像这类游戏，最早接触，应该还是上初中的时候：

![初中回忆](/blog-images/play3.jpg)

一眨眼功夫，将近30年过去了：

![时光流逝](/blog-images/play4.jpg)

如果没记错的话，最早接触的，还是DOS下的《心跳回忆》：

![心跳回忆](/blog-images/play5.jpg)

之后，又在PS以及PS2上，分别体验了心跳回忆2和3。

![心跳回忆2和3](/blog-images/play6.jpg)

现如今，再看这些AVG游戏，满满的，都是感动。

![满满的感动](/blog-images/play7.jpg)

刺客相信，这份感动会一代一代的传承下去：

![传承](/blog-images/play8.jpg)

在下一个10年、20年之后，你们也会有相同的感慨。

![时光感慨](/blog-images/play9.jpg)

这又何尝不是一种：火之意志的传承呢?

![火之意志](/blog-images/play10.jpg)

## 退出游戏

至于退出游戏，也很简单，在菜单里操作即可，虽然刺客早就习惯了Alt+F4。

![退出游戏](/blog-images/exit.jpg)

## 游戏记录

之后想要继续游戏，那么打开软件，就能看到上次游玩记录，很方便：

![游玩记录](/blog-images/history.jpg)

## 更多内容

本期教程，主要教大家如何使用这款模拟器，所以，仅附带了一款游戏以作演示，更多内容，收录在游戏库内，并且，未来也将持续更新!

![游戏库](/blog-images/library.png)

## 软件特色

软件本身完全免费，没有任何广告，更是无需注册登录即可使用;甚至，还附带了更多模拟器设置：

![更多设置](/blog-images/settings.jpg)

## 总结

总而言之，这是一款令所有二次元玩家为之雀跃的终极神器!它可以帮助我们在手机上，轻松畅享所有心心念念、爱不释手的干货内容!感兴趣的小伙伴，今天的超级神器，可千万不要错过!

## 下载方式

[下载 Tyranor v2.3.4](https://pan.quark.cn/s/a7362efee2f8)`,
    author: '刺客',
    date: '2024-01-21',
    category: '教程',
    readTime: '8 分钟',
    tags: ['详细教程', '安装指南', '游戏导入', '心得'],
  },
  {
    slug: 'tyranor-guide',
    title: 'Tyranor 模拟器完整使用教程',
    excerpt: 'Tyranor是一款非常不错的galgame游戏模拟器，玩家们通过它就可以轻松在手机上畅玩galgame游戏了。本文详细介绍软件功能、使用教程和特色亮点。',
    content: `# Tyranor 模拟器完整使用教程

## 软件介绍

Tyranor模拟器最新版是一款非常不错的galgame游戏模拟器，玩家们通过它就可以轻松在手机上畅玩galgame游戏了，并且操作方法也是非常的简单，只需将自己的游戏文件导入到软件内即可，非常方便。同时软件内提供了强大的游戏引擎，包括了RPG Maker、RPG Maker MZ、VN Maker、Tyrano以及Artemis Engine、KRKR等等，让你玩起来更加流畅。

![Tyranor 模拟器](/blog-images/step1.png)

## 软件功能

1. **游戏运行非常流畅**，不会出现任何的卡，顿使用过程中也不会出现广告。
2. **各种各样的游戏资源都可以获取**，在手机上可以完美运行，拥有非常稳定的服务器。
3. **完全不会出现闪退的情况**，不需任何花费就可以自由畅享游戏。
4. **体积比较小**，不会占用太多的内存，界面打造的也非常干净简约。

## 使用教程

### 步骤1：首次打开 Tyranor 模拟器最新版本

![步骤1](/blog-images/step2.png)

### 步骤2：点击下方导航栏中的添加选项

![步骤2](/blog-images/step3.png)

### 步骤3：来到"添加"界面后，点击右上角的按钮（如下图所示位置）

![步骤3](/blog-images/step4.png)

### 步骤4：在打开的窗口中点击路径后方的按钮来选择游戏路径

![步骤4](/blog-images/step5.png)

### 步骤5：找到自己游戏的目录并点击右下角的勾号

![步骤5](/blog-images/step6.png)

### 步骤6：返回应用后就可以看到游戏已添加完成

![步骤6](/blog-images/step7.png)

### 步骤7：点击游戏并在打开的窗口中点击"启动游戏"即可

![步骤7](/blog-images/step8.png)

## 特色亮点

1. **支持更多的资源**，让多款游戏都能运行在手机上面
2. **免费使用的软件**，不用花费一分钱就能自由的游戏
3. **更稳定的模拟器**，让手机运行各种游戏也不在闪退

## 下载方式

[下载 Tyranor v2.3.4](https://pan.quark.cn/s/a7362efee2f8)

---

立即下载 Tyranor 模拟器，开启你的 Galgame 之旅吧！`,
    author: 'Tyranor 官方团队',
    date: '2024-01-20',
    category: '教程',
    readTime: '5 分钟',
    tags: ['入门', '教程', '使用指南', 'Galgame'],
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap(post => post.tags)));
}
