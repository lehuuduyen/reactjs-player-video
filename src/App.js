import React, {  useState } from "react";

import { Button, Input, Space } from "antd";
import ReactPlayer from "react-player";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [linkTemp, setLnkTemp] = useState();
  const [linkVideo, setLinkVideo] = useState(
    "https://v3.szjal.cn/20191101/PZzNpqB1/index.m3u8"
  );

  function onchange(event) {
    setLnkTemp(event.target.value);
  }
  function onclick() {
    setLinkVideo(linkTemp);
  }

  return (
    <>
      <div style={{ width:"100%",height:"500px" }}>
        <ReactPlayer controls={true} width="100%"  style={{background:"black",cursor:"pointer"}}  height="100%" url={linkVideo} />
        <Space.Compact className="input">
          <div  style={{ width: "90%" }}><Input onChange={(e) => onchange(e)} defaultValue={linkVideo} /></div>
          <Button type="primary" onClick={onclick}>
            Play
          </Button>
        </Space.Compact>
      </div>
    </>
  );
};
