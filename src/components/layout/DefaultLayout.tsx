import Header from "@/components/layout/Header";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="default-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}
