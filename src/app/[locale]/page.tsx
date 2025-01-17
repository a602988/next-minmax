import { useTranslations } from "next-intl";
import DynamicLayout from "@/components/layout/DynamicLayout";

export default async function Home() {
  const mockLayouts = {
    type: "blog",
    seo: {
      title: "Default Page",
      description: "This is the default layout",
    },
  };

  return (
    <DynamicLayout layoutData={mockLayouts}>
      <h1>home</h1>
    </DynamicLayout>
  );
}
