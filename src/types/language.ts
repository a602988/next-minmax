/* 語系相關類型 */

import { ApiResponse } from './api';

export interface Language {
  id: string;
  title: string;
  native: string;
  default: boolean;
  current: boolean;
}

export type LanguagesResponse = ApiResponse<Language[]>;
