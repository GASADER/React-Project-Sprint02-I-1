import Link from "next/link";
import Navber from "./navber";

const Layout = ({ children }) => {
  return (
    <div>
      <Navber />
      <main className="mx-auto flex">
      <div className="sidebar bg-blue-900 w-36 lg:w-48">
        <Link href="/profile" >profile</Link>
        <Link href="/post" >post</Link>
      </div>
        <section className="">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
