import { PageType } from "@/types/pageType";

export async function getPageData(path: string): Promise<PageType> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/page?path=${encodeURIComponent(path)}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // 檢查 cod 欄位
    if (data.cod !== "0000") {
      console.error(`Invalid cod: ${data.cod}`);
      throw new Error("Invalid response code");
    }
    
    return data;
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    throw error; // 重新拋出錯誤，讓調用者處理
  }
}