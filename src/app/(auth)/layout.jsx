import Header from "@/components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-20">
        <div className="w-full max-w-md py-2 px-4 sm:px-2">{children}</div>
      </div>
    </>
  );
}

export default Layout;
