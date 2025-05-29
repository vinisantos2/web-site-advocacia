import Footer from "./Footer";
import MetaHead from "./Head";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <MetaHead title="escritorio"/>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}