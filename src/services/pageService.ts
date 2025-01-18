import { ApiResponse, PageType } from "@/types/pageType";

export async function getPageData(path: string): Promise<PageType> {
  try {
    const apiUrl = process.env.API_URL;
    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }

    const response = await fetch(
      `${apiUrl}/page?path=${encodeURIComponent(path)}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const apiResponse: ApiResponse = await response.json();

    if (!isValidApiResponse(apiResponse)) {
      throw new Error("Invalid response data structure");
    }

    if (apiResponse.code !== "0000") {
      throw new Error(`Invalid response code: ${apiResponse.code}`);
    }

    if (!apiResponse.data || apiResponse.data.length === 0) {
      throw new Error("No page data returned");
    }

    // 返回數組中的第一個（也是唯一的）元素
    return apiResponse.data[0];
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    throw error;
  }
}

function isValidApiResponse(data: any): data is ApiResponse {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.code === "string" &&
    typeof data.message === "string" &&
    (data.data === undefined || Array.isArray(data.data))
  );
}
