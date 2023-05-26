import Link from "next/link";
import { useRouter } from "next/router"; // เพิ่ม import นี้
import Navber from "./navber";
import {
  faSquarePlus,
  faPersonBiking,
  faPersonWalking,
  faPersonSwimming,
  faPersonHiking,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Layout = ({ children }) => {
  const router = useRouter(); // เพิ่มการใช้งาน useRouter()

  const handleLinkClick = (slug) => {
    router.push(`/post/type/${slug}`); // เปลี่ยนหน้าโดยใส่ค่าใน slug
  };

  return (
    <div>
      <Navber />
      <main className="sidebarcontainer mx-auto flex">
        <div className="sidebar w-36 lg:w-48 flex flex-col px-12 py-4 gap-4 text-xl">
          <Link href="/post"><FontAwesomeIcon icon={faSquarePlus} className="px-2" />Post</Link>
          <div className=" border border-white w-full"></div>
          
          <a onClick={() => handleLinkClick("Biking")} className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPersonBiking} className="" />
          <div>Biking</div> 
          </a>

          <a onClick={() => handleLinkClick("Walking")}className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPersonWalking} className="" /> 
          <div>Walking</div> 
          </a>

          <a onClick={() => handleLinkClick("Swimming")}className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPersonSwimming} className="" />
          <div>Swimming</div> 
          </a>
          <a onClick={() => handleLinkClick("Hiking")}className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPersonHiking} className="" />
          <div>Hiking</div> 
          </a>
          <a onClick={() => handleLinkClick("Running")}className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPersonRunning} className="" />
          <div>Running</div> 
          </a>
        </div>
        <div className="h-screen border border-black "></div>
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default Layout;