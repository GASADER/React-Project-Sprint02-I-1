import Navber from "./navber";

const Layout = ({ children }) => {
  return (
    <div>
      <Navber />
      <main className="">
        <div className="sidebar">sidebar</div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
