import axios from "axios";

    //สร้างinstance ของ axios  
    export const axiosInstance = axios.create({
    baseURL: "http://localhost:3002",
    //กำหนดชื่อheadersและค่าเป็นfoobar
    headers: { "X-Custom-Header": "foobar" },
    });

axiosInstance.interceptors.request.use((config) => {
    //ดึงtokenมาจากsessionStorage
  const token = sessionStorage.getItem("token");
  console.log("token: " + token);
  //แก้configส่ง headers ด้วยค่า Default  Bearer
  config.headers.authorization = `Bearer ${token}`;
  return config;
});


export async function fetch(path) {
    try {
        //ดึงข้อมูลมาตามpathและส่งข้อมูลคืนกลับมา
      const response = await axiosInstance.get(path);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export { axiosInstance };