import MinimalHeader from "./components/MinimalHeader";
import MinimalFooter from "./components/MinimalFooter";

export default function PublicProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MinimalHeader />
      {children}
      <MinimalFooter />
    </>
  );
}
