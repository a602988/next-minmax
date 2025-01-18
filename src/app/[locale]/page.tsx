import { useTranslations } from "next-intl";
import DynamicLayout from "@/components/layout/DynamicLayout";
import type { Metadata } from "next";
import { PageType } from "@/types/pageType";
import { notFound } from "next/navigation";
import { getPageData } from "@/services/pageService";

async function getPageDataOrNotFound(path: string): Promise<PageType> {
  try {
    const pageData = await getPageData(path);
    if (!pageData) {
      notFound();
    }
    return pageData;
  } catch (error) {
    console.error("Error fetching page data:", error);
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const path = `/${locale}`;
  const pageData = await getPageDataOrNotFound(path);

  return {
    title: pageData.meta_title || "Default Page Title",
    description: pageData.meta_description || "Default page description",
  };
}

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const path = `/${locale}`;
  const pageData = await getPageDataOrNotFound(path);

  if (!pageData) {
    notFound();
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
      <h1>{pageData.meta_title || "Home"}</h1>
    </DynamicLayout>
  );
}
