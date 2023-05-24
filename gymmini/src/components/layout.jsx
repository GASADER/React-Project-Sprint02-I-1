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
      <main className="mx-auto flex">
        <div className="sidebar bg-blue-900 w-36 lg:w-48 flex flex-col px-8 py-4 gap-4">
          <Link href="/profile">Profile</Link>
          <Link href="/post">Post</Link>
          <a onClick={() => handleLinkClick("biking")}>Biking</a>
          <a onClick={() => handleLinkClick("walking")}>Walking</a>
          <a onClick={() => handleLinkClick("swimming")}>Swimming</a>
          <a onClick={() => handleLinkClick("hiking")}>Hiking</a>
          <a onClick={() => handleLinkClick("running")}>Running</a>
        </div>
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default Layout;