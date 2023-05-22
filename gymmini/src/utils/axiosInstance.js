import axios from "axios";

//สร้างinstance ของ axios
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3002",
  //กำหนดชื่อheadersและค่าเป็นfoobar
  headers: { "X-Custom-Header": "foobar" },
});
//ยัดค่าลงไปในaxiosInstanceตอนที่ส่งไปหาserver
axiosInstance.interceptors.request.use((config) => {
  //ดึงtokenมาจากlocalStorage
  const token = localStorage.getItem("token");
  //แก้configส่ง headers ด้วยค่า Default  Bearer
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export async function fetch(path) {
  try {
    //ดึงข้อมูลมาตามpathและส่งข้อมูลคืนกลับมา
    return await axiosInstance.get(path).then((response) => {
      console.log(response.data);
      return response.data;
    });
  } catch (error) {
    console.error(error);
  }
}
