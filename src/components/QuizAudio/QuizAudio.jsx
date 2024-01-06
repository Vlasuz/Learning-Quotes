import React from 'react'
import { QuizAudioStyle } from './QuizAudio.styled'
import WaveSurfer from 'wavesurfer.js'


export const QuizAudio = () => {


    const wavesurfer = WaveSurfer.create({
        container: document.body,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        url: '/examples/audio/audio.wav',
        minPxPerSec: 100,
        dragToSeek: true,
    })

    wavesurfer.once('decode', () => {
        const slider = document.querySelector('input[type="range"]')
      
        slider.addEventListener('input', (e) => {
          const minPxPerSec = e.target.valueAsNumber
          wavesurfer.zoom(minPxPerSec)
        })
      })

      const playButton = document.querySelector('#play')
const forwardButton = document.querySelector('#forward')
const backButton = document.querySelector('#backward')

wavesurfer.once('decode', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.onchange = (e) => {
      wavesurfer.setOptions({
        [input.value]: e.target.checked,
      })
    }
  })

  playButton.onclick = () => {
    wavesurfer.playPause()
  }

  forwardButton.onclick = () => {
    wavesurfer.skip(5)
  }

  backButton.onclick = () => {
    wavesurfer.skip(-5)
  }
})

  return (
    <QuizAudioStyle>
         <label>
            Zoom: <input type="range" min="10" max="1000" value="100" />
        </label>

        <label><input type="checkbox" checked value="scrollbar" /> Scroll bar</label>
        <label><input type="checkbox" checked value="fillParent" /> Fill parent</label>
        <label><input type="checkbox" checked value="autoCenter" /> Auto center</label>

        <div>
            <button id="play">Play/Pause</button>
            <button id="backward">Backward 5s</button>
            <button id="forward">Forward 5s</button>
        </div>
    </QuizAudioStyle>
  )
}
