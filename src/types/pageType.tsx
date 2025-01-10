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
  breadcrumbs?: Breadcrumb[];
  modules?: Module[];
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
    categories?: Post[];
  }
  
  interface NewsDetail{
    title: string;
    pics?: [];
    cover: {
      path: string;
    };
    categories?: Post[];
    editor?: string;
    tags?: Tag[];
  }
  
  interface NewsNavigation{
    prev_post?: Post[];
    next_post?: Post[];
  }
  
  interface NewsRelatedPosts{
    related_posts?: Post[];
  }
  
  interface NewsList{
    data?: NewsDetail[];
  }