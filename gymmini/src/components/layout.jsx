import Navber from "./navber";

const Layout = ({ children }) => {
  return (
    <div>
      <Navber />
      <main className="mx-auto px-2">
        <div className="sidebar mx-4 md:min-w-min lg:min-w-min">sidebar</div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
