/* 通用 API 相關類型 */

export interface ApiResponse<T> {
  code: string;
  message: string;
  data: T;
}
