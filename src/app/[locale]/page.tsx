import { useTranslations } from "next-intl";
import DynamicLayout from "@/components/layout/DynamicLayout";
import type { Metadata } from "next";
import { PageType } from "@/types/pageType";

// 定義 PageData 接口
interface PageData {
  meta_title?: string;
  meta_description?: string;
  title?: string;
  content?: string;
  description?: string;
}

async function getPageData(path: string): Promise<PageData> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/page?path=${encodeURIComponent(
        path
      )}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return {
      content: "<p>Default content. Unable to fetch page data.</p>",
    };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = `/${locale}`;

  let pageData: PageData;
  try {
    pageData = await getPageData(path);
  } catch (error) {
    console.error("Error fetching page data for metadata:", error);
    pageData = {
      meta_title: "Error",
      meta_description: "An error occurred while loading the page.",
    };
  }

  return {
    title: pageData.meta_title || "Default Page Title",
    description: pageData.meta_description || "Default page description",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const path = `/${locale}`;
  console.log(path);

  let pageData: PageData;
  try {
    pageData = await getPageData(path);
  } catch (error) {
    console.error("Error fetching page data:", error);
    pageData = {
      content: "<p>Error loading page content.</p>",
      title: "Error",
      description: "An error occurred while loading the page.",
    };
  }

  const layoutData = {
    type: "blog",
    seo: {
      title: pageData.meta_title || "Default Page",
      description: pageData.meta_description || "This is the default layout",
    },
  };

  return (
    <DynamicLayout layoutData={layoutData} params={params}>
      <h1>{pageData.title || "Home"}</h1>
    </DynamicLayout>
  );
}
