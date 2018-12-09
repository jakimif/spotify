import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlayerActions } from '../../store/ducks/player';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../aseets/images/volume.svg';
import ShuffleIcon from '../../aseets/images/shuffle.svg';
import PlayIcon from '../../aseets/images/play.svg';
import PauseIcon from '../../aseets/images/pause.svg';
import BackwardIcon from '../../aseets/images/backward.svg';
import ForwardIcon from '../../aseets/images/forward.svg';
import RepeatIcon from '../../aseets/images/repeat.svg';

const Player = ({
  player, playSong, pauseSong, nextSong, prevSong, playingSong, position, duration,
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={nextSong}
        onPlaying={playingSong}
      />
    )}
    <Current>
      {!!player.currentSong && (
        <>
          <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </>
      )}
    </Current>
    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="ShuffleIcon" />
        </button>
        <button type="button" onClick={prevSong}>
          <img src={BackwardIcon} alt="BackwardIcon" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={pauseSong}>
            <img src={PauseIcon} alt="PauseIcon" />
          </button>
        ) : (
          <button type="button" onClick={playSong}>
            <img src={PlayIcon} alt="PlayIcon" />
          </button>
        )}
        <button type="button" onClick={nextSong}>
          <img src={ForwardIcon} alt="ForwardIcon" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="RepeatIcon" />
        </button>
      </Controls>
      <Time>
        <span>{position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: '10' }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: '0' }}
            // value={100}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: '10' }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired,
  playingSong: PropTypes.func.isRequired,
  duration: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

function msToTime(duration) {
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}
const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
