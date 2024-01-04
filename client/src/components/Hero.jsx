import React from "react";
import wallpaperPic from "../assets/pexels-visit-almaty-848612.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero() {
  const [searchText, setSearchText] = useState("");
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    getTravelData(searchText);
  }, [searchText]);

  const getTravelData = async (text) => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${text}`
      );
      setTravels(result.data.data);
    } catch (error) {
      alert(error);
    }
    // const result = await axios.get("http://localhost:4001");
    // setTravel(result.data.data);
    // console.log(result);
  };

  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-[490px] object-cover "
        src={wallpaperPic}
        alt="snowboard-pic"
      />
      <div className="absolute w-full h-[490px] top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full mt-[420px] flex flex-col justify-center text-center text-white">
        <p className="text-[28px] font-semibold">ค้นหาที่เที่ยว</p>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border m-[10px] p-[5px] rounded-md text-black bg-gray-100/90 ">
          <div>
            <input
              className="mx-[10px] bg-transparent w-[660px] focus:outline-none text-center "
              type="text"
              placeholder="หาที่เที่ยวและไปกัน"
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
        </form>
      </div>

      <div>
        {travels.length > 0 && (
          <>
            {travels.map((travel, index) => {
              return (
                <div
                  className="flex justify-center w-full h-full mt-[50px]"
                  key={index}
                >
                  <div className="w-[400px] h-[300px]">
                    <img
                      className="w-full h-full object-cover rounded-[20px]"
                      src={travel.photos[0]}
                    />
                  </div>
                  <div className="w-[50%] mx-[20px] ">
                    <p className="text-[20px] font-semibold">{travel.title}</p>
                    <p className="mt-[5px]">
                      {travel.description.slice(0, 100)}...{" "}
                      <a
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                        href={travel.url}
                      >
                        อ่านต่อ
                      </a>
                    </p>
                    <div className="flex gap-[10px] mt-[5px]">
                      <span>หมวด</span>{" "}
                      {travel.tags.map((tag, index) => {
                        if (index === travel.tags.length - 1) {
                          return (
                            <div className="flex gap-[10px]">
                              <p>และ</p>
                              <p className="underline">{tag}</p>
                            </div>
                          );
                        } else {
                          return (
                            <div>
                              <p className="underline">{tag}</p>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="flex gap-[10px] w-[200px] h-[100px] mt-[20px]">
                      <img className="rounded-[10px]" src={travel.photos[1]} />
                      <img className="rounded-[10px]" src={travel.photos[2]} />
                      <img className="rounded-[10px]" src={travel.photos[3]} />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
