export interface SystemMenuType {
  code: string;
  title: string;
  description?: string | null;
  url?: string | null;
  target?: string;
  children?: Array<SystemMenuType>;
  options?: string | Array<Option> | null;
  sort: number;
}

export interface Option {
  key: string;
  value: string;
}
