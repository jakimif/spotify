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
  player,
  playSong,
  pauseSong,
  nextSong,
  prevSong,
  playingSong,
  position,
  duration,
  handlePositionSong,
  setPositionSong,
  positionShown,
  progress,
  setVolumeSong,
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={nextSong}
        onPlaying={playingSong}
        position={player.position}
        volume={player.volume}
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
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: '10' }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: '0' }}
            max={1000}
            onChange={value => handlePositionSong(value / 1000)}
            onAfterChange={value => setPositionSong(value / 1000)}
            value={progress}
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
        value={player.volume}
        onChange={setVolumeSong}
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
  handlePositionSong: PropTypes.func.isRequired,
  setPositionSong: PropTypes.func.isRequired,
  positionShown: PropTypes.string.isRequired,
  setVolumeSong: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string,
    }),
    status: PropTypes.string,
    volume: PropTypes.number,
  }).isRequired,
};

function msToTime(duration) {
  if (!duration) return '';

  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress: parseInt((state.player.positionShown || state.player.position) * (1000 / state.player.duration), 10),
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
