import React, { useCallback, useEffect, useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react';
import { QuizAudioStyle } from './QuizAudio.styled';
import { getApiLink } from '../../api/getApiLink';

import PlayBtn from '../../assets/img/icons/play.svg'
import PauseBtn from '../../assets/img/icons/pause.svg'



const formatTime = (seconds) =>
[seconds / 60, seconds % 60]
.map((v) => `0${Math.floor(v)}`.slice(-2))
.join(':');

export const QuizAudio = ({ QuestData, handleAudioEnd }) => {
  const containerRef = useRef(null);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 57,
    waveColor: '#8DAAC7',
    progressColor: '#5FA2E5',
    barWidth: 1.5,
    barGap: null,
    url: getApiLink(`/${QuestData?.audio_file}`),
  });

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.on('finish', handleAudioEnd);
      return () => {
        wavesurfer.unAll();
      };
    }
  }, [handleAudioEnd, wavesurfer]);

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <QuizAudioStyle className='animate__animated animate__fadeIn'>

      <div className='audio'>
        <div style={{ display: 'flex', gap: '1em' }}>

          <button onClick={onPlayPause}>
            {isPlaying ? 
              <img className='audio__btn' src={PauseBtn} alt="pause ph" />
            : 
              <img className='audio__btn' src={PlayBtn} alt="play ph" />
            }
          </button>
        </div>
        <div className='audio__road' ref={containerRef} />

        <p>{formatTime(currentTime)}</p>
      </div>

    </QuizAudioStyle>
  );
};
