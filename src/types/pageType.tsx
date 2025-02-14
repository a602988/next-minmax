export interface PageType {
  uri: string;
  route: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: {
    path: string;
  };
  wrap: string;
  breadcrumbs: Array<{
    title: string;
    url: string;
  }>;
  modules: Array<any>; // 你可能想要為 modules 定義更具體的類型
  // 添加其他可能的字段
  id?: number;
  title?: string;
  content?: string;
  slug?: string;
  language?: string;
}
interface MetaImage {
  path: string;
}

interface Breadcrumb {
  title: string;
  url: string;
}



interface Category {
  title: string;
  url: string;
  cover: {
    path: string;
  };
}

interface Tag {
  title: string;
  url: string;
}

interface Post {
  title: string;
  url: string;
  cover: {
    path: string;
  };
}

interface Module {
  component: string;
  api: string;
  data: Array<ModuleData> | null;
}

interface Picture {
  path: string;
  alt?: string;  // 可選的替代文字
}

type ModuleData = 
  | NewsHeader
  | NewsDetail
  | NewsNavigation
  | NewsRelatedPosts
  | NewsList;

  interface NewsHeader {
    title: string;
    pics?: Picture[] | null;
    cover: {
      path: string;
    };
    categories?: Post[];
  }
  
  interface NewsDetail{
    title: string;
    pics?: Picture[] | null;
    cover: {
      path: string;
    };
    categories?: string | Array<Post> | null;
    editor?: string;
    tags?:  string | Array<Tag> | null;
  }
  
  interface NewsNavigation{
    prev_post?: string | Array<Post> | null;
    next_post?: string | Array<Post> | null;
  }
  
  interface NewsRelatedPosts{
    related_posts?: string | Array<Post> | null;
  }
  
  interface NewsList{
    data?: string | Array<NewsDetail> | null;
  }