import Navber from "./navber";

const Layout = ({ children }) => {
  return (
    <div>
      <Navber />
      <main className="mx-auto flex">
        <div className="sidebar w-36 lg:w-48">sidebar</div>
        <section className="">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
