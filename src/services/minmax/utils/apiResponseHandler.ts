import { ApiResponse } from '@/services/minmax/types/api';
import { createApiError } from '@/services/core/ApiError';

export function handleMinmaxApiResponse<T>(
  result: ApiResponse<T>,
  successCallback: (data: T) => void
): void {
  if (result.code === '0000') {
    successCallback(result.data);
  } else {
    throw createApiError(400, result.message, result.code);
  }
}
