import React, { useState } from "react";
import axios from "axios";
import Previewcard from "../components/previewCard";
import BrandCard from "../components/brandCard";
import Loader from "../components/Loader";
import Image from "next/image";

const Main = () => {
  const [meta, setMeta] = useState({});
  const [input, setInput] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkValidUrl = (validUrl) => {
    const regex = new RegExp(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    );

    if (validUrl.match(regex)) {
      return true;
    }

    return false;
  };
  const appendProtocol = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      url = "http://" + url;
    }
    return url;
  };
  const getBaseUrl = (validUrl) => {
    if (!validUrl) return;
    const url = new URL(validUrl);
    return url["origin"];
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsSuccess(false);
  };
  const handlekeyChange = (e) => {
    setIserror(false);
    if (e.key.toLowerCase() == "enter") {
      getMetaData();
    }
  };
  const getMetaData = async (e) => {
    console.log(process.env.API_URI )
    try {
      if (!checkValidUrl(input)) {
        return alert("please enter a valid url");
      }
      const newUrl = appendProtocol(input);
      setLoading(true);
      setIserror(false);
      let res = await axios.post(process.env.API_URI + "metadata", {
        url: encodeURI(newUrl),
      });
      const metadata = {};
      const { desc, img, title } = res.data;

      metadata["img"] = img;

      metadata["title"] = title;
      metadata["description"] = desc;
      metadata["mainUrl"] = getBaseUrl(newUrl);
      metadata["url"] = newUrl;

      setMeta(metadata);
      setLoading(false);
      setIsSuccess(true);
      setInput("");
    } catch (error) {
      console.log(error.response.data);
      setIserror(true);
      setLoading(false);
      setIsSuccess(false);
    }
  };

  return (
    <>
      <main
        className=" position-relative"
        style={{ backgroundColor: "#f0f1f7", height: "75%" }}>
        <div
          className="container position-absolute rounded-3 w-100 p-4 bg-v-d-voilet d-flex justify-content-center align-items-center"
          style={{
            height: "100px",
            backgroundImage: `url(/assets/bg-shorten-desktop.svg)`,
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <input
            type="url"
            name="url"
            onKeyUp={handlekeyChange}
            onChange={handleInputChange}
            value={input}
            className={`w-75 rounded-3 ${iserror ? "inpError" : ""}`}
            style={{ outline: "none", border: "none", padding: "8px 18px" }}
            placeholder="Paste the url here..."
          />
          <button
            type="submit"
            className="bg-cyan text-light ms-4 rounded-3"
            onClick={getMetaData}
            style={{
              fontWeight: "500",
              outline: "none",
              border: "none",
              padding: "8px 18px",
            }}>
            Get meta data!
          </button>
          {iserror && (
            <div
              className="text-start position-absolute error fw-bold fz-xl"
              style={{ left: "71px", bottom: "3px" }}>
              Either the url is down or enter a valid url
            </div>
          )}
        </div>
        <div className="d-block" style={{ paddingTop: "75px" }}>
          {loading ? (
            <div className="text-center">
              <Image
                className="text-center"
                src="/assets/loader.gif"
                alt="loading"
                width="250"
                height="180"
                objectFit="contain"
              />
              <h3 className="fw-bold mt-2 v-dark-blue">Loading...</h3>
            </div>
          ) : (
            isSuccess && (
              <Previewcard
                img={meta.img}
                title={meta.title}
                description={meta.description}
                mainUrl={meta.mainUrl}
                url={meta.url}
              />
            )
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
