export interface SystemMenuType {
  code: string;
  title: string;
  description?: string | null;
  url?: string | null;
  target?: string;
  children?: Array<SystemMenuType>;
  options?: string | Array<Option> | null;
}

export interface Option {
  key: string;
  value: string;
}
