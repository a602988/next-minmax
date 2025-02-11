export interface SystemMenuType {
  id: string;
  code: string;
  title: string;
  description?: string | null;
  url?: string | null;
  target?: string;
  children?: Array<SystemMenuType>;
  options?: string | Array<Option> | null;
  sort: number;
  parent_id: string | null;
  path?: string;
}

export interface Option {
  key: string;
  value: string;
}
