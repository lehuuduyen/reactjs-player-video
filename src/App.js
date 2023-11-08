import React, { useState } from 'react';

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';
import { Button, Input, Select, Space } from 'antd';

export default props => {
  const [linkTemp, setLnkTemp] = useState("https://v3.szjal.cn/20191101/PZzNpqB1/index.m3u8");
  const [linkVideo, setLinkVideo] = useState("https://v3.szjal.cn/20191101/PZzNpqB1/index.m3u8");

  function onchange(event){
    setLnkTemp(event.target.value)
  }
  function onclick(){
    setLinkVideo(linkTemp)
  }
  
  return (
    <>
    <Player poster="/assets/poster.png">
      <source src="https://v3.szjal.cn/20191101/PZzNpqB1/index.m3u8" fill="true"
    fluid="true"
    autoplay="true"
    controls="true" preload='metadata' type='application/x-mpegURL'/>

      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
    <Space.Compact style={{ width: '90%' }}>
      <Input onChange={onchange} defaultValue={true} />
      <Button type="primary" onClick={onclick}>Play</Button>
    </Space.Compact>
    </>
  );
};