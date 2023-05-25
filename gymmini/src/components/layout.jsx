import Link from "next/link";
import { useRouter } from "next/router"; // เพิ่ม import นี้
import Navber from "./navber";


const Layout = ({ children }) => {
  const router = useRouter(); // เพิ่มการใช้งาน useRouter()

  const handleLinkClick = (slug) => {
    router.push(`/post/type/${slug}`); // เปลี่ยนหน้าโดยใส่ค่าใน slug
  };

  return (
    <div>
      <Navber />
      <main className="sidebarcontainer mx-auto flex">
        <div className="sidebar w-36 lg:w-48 flex flex-col px-8 py-4 gap-4 text-2xl">
          <Link href="/post">Post</Link>
          <div className=" border border-white w-full"></div>
          <a onClick={() => handleLinkClick("Biking")}>Biking</a>
          <a onClick={() => handleLinkClick("Walking")}>Walking</a>
          <a onClick={() => handleLinkClick("Swimming")}>Swimming</a>
          <a onClick={() => handleLinkClick("Hiking")}>Hiking</a>
          <a onClick={() => handleLinkClick("Running")}>Running</a>
        </div>
        <div className="h-screen border border-black "></div>
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default Layout;