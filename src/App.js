import React, {  useState } from "react";

import { Button, Input, Space } from "antd";
import ReactPlayer from "react-player";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [linkTemp, setLnkTemp] = useState();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const url = params.get('url');
  const [linkVideo, setLinkVideo] = useState(
    url
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
