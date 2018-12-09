import React from 'react';
import Slider from 'rc-slider';
import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../aseets/images/volume.svg';
import ShuffleIcon from '../../aseets/images/shuffle.svg';
import PlayIcon from '../../aseets/images/play.svg';
import PauseIcon from '../../aseets/images/pause.svg';
import ForwardIcon from '../../aseets/images/forward.svg';
import RepeatIcon from '../../aseets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://spark.adobe.com/images/landing/examples/create-album-cover.jpg" alt="imgfd" />
      <div>
        <span>Times Like These</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="ShuffleIcon" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="PlayIcon" />
        </button>
        <button type="button">
          <img src={PauseIcon} alt="PauseIcon" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="ForwardIcon" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="RepeatIcon" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: '10' }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: '0' }}
            // value={100}
          />
        </ProgressSlider>
        <span>4:29</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: '10' }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        // value={100}
      />
    </Volume>
  </Container>
);

export default Player;
