export interface ApiResponse {
  code: string;
  message: string;
  data?: Array<PageType>;
}

export interface PageType {
  uri: string;
  route: string;
  meta_title: string;
  meta_description?: string;
  meta_keywords?: string;
  meta_image?: {
    path: string;
  };
  wrap?: string;
  breadcrumbs?: Array<Breadcrumb>;
  modules?: Array<Module>;
}

interface Breadcrumb {
  title: string;
  url: string;
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
  data: ModuleData;
}

type ModuleData =
  | NewsHeader
  | NewsDetail
  | NewsNavigation
  | NewsRelatedPosts
  | NewsList;

  interface NewsHeader {
    title: string;
    pics?: [];
    cover: {
      path: string;
    };
    categories?: Array<Post>;
  }

  interface NewsDetail{
    title: string;
    pics?: [];
    cover: {
      path: string;
    };
    categories?: Array<Post>;
    editor?: string;
    tags?: Array<Tag>;
  }

  interface NewsNavigation{
    prev_post?: Array<Post>;
    next_post?: Array<Post>;
  }

  interface NewsRelatedPosts{
    related_posts?:Array<Post>;
  }

  interface NewsList{
    data?: Array<NewsDetail>;
  }
