import { PageType } from "@/types/pageType";
import { FetchApiOptions, fetchApi } from "./apiService";

export async function getPageData(
    path: string,
    options: Partial<FetchApiOptions> = {}
): Promise<PageType> {

  const defaultOptions: Partial<FetchApiOptions> = {
    revalidate: 3600, // Default to 1 hour
    tags: ['page'],
    timeout: 5000,
  };

  const mergedOptions: FetchApiOptions = {
    ...defaultOptions,
    ...options,
    onError: (error) => {
      console.error("Error in getPageData:", error);
      options.onError?.(error);
    }
  };

  return fetchApi<PageType>(
    `/page?path=${encodeURIComponent(path)}`,
    mergedOptions
  );
}
