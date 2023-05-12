import Link from "next/link";
import Navber from "./navber";

const Layout = ({ children }) => {
  return (
    <div>
      <Navber />
      <main className="mx-auto flex">
        <Link href="/profile" className="sidebar w-36 lg:w-48">sidebar</Link>
        <section className="">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
