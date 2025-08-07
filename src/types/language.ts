/* 語系相關類型 */

import { ApiResponse } from './api';

export interface Language {
  id: string;
  title: string;
  native: string;
  icon: string;
  default: boolean;
}

export type LanguagesResponse = ApiResponse<Language[]>;
