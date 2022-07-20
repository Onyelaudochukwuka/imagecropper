import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from "react";
import App from "../component/Crop";
type event = {
  target?: {
    files?: any
  }
};
const Home: NextPage = () => {
  const [file, setFile] = useState<any>(null);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-300 overflow-scroll">
      <div className="flex items-center justify-center bg-white p-6 w-9/12 overflow-scroll">

      {!file ? <input className="file:hidden text-transparent after:content-['Drag_files_here_to_upload'] flex items-center justify-around pb-16 pt-12 after:align-middle after:my-auto cursor-pointer bg-gray-500 after:text-center p-auto after:box-border after:font-bold after:text-xl after:text-white" type={"file"} accept='image/*' onChange={(e: any) => setFile(URL.createObjectURL(e?.target?.files[0]))} />
        :
        <App src={file} />
      }
      </div>
      </div>
     )
}

export default Home
