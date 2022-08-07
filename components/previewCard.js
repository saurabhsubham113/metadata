/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";

const Previewcard = (props) => {
  return (
    <div
      className="container rounded-3 mb-3"
      style={{
        padding: "30px 35px",
        cursor: "pointer",
        width: "60%",
        backgroundColor: "rgba(255,255,255,0.40)",
        border: "1px solid hsl(255, 11%, 22%)",
      }}>
      <div
        className="main d-flex align-items-stretch border p-3 rounded-2"
        style={{
          boxShadow: "inset 11px -2px 69px -30px rgba(0,0,0,0.35)",
        }}>
        <div
          className="logo"
          style={{
            width: "25%",
            paddingRight: "12px",
            borderRight: "1px solid grey",
          }}>
          <img
            src={props.img}
            alt="favicon"
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className="details"
          style={{ width: "60%", paddingLeft: "25px", margin: "auto" }}>
          <p className="title mb-1"> {props.title} </p>
          <p className="description mb-1 text-wrap">{props.description} </p>
          <p className="main-url mb-1 text-muted text-decoration-underline">
            {props.mainUrl}
          </p>
        </div>
      </div>
      <a
        href={props.url}
        className="main-url d-inline-block mt-3 link-primary text-decoration-underline">
        {props.url}
      </a>
    </div>
  );
};

export default Previewcard;
