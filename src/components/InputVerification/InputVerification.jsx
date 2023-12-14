import React, { useRef, useState } from 'react'

export const InputVerification = () => {
    const [verification, setVerification] = useState(['', '', '', '', '', '',])
    const inputRefs = useRef(Array(6).fill(null).map(() => React.createRef()));

    const inputChange = (index, value) => {
        const newVerification = [...verification];
        newVerification[index] = value;
        setVerification(newVerification);

        // move focus to the next input
        if (value !== '' && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].current.focus();
        }
    };

    const inputBackspace = (index, evt) => {
        // move focus to the previous input on backspace
        if (evt.key === 'Backspace' && index > 0) {
            inputRefs.current[index - 1].current.focus();
        };
    }

  return (
    <>
        <label className='verification__label' htmlFor='text'>Code</label>
        <div className="verification__inner">
            {verification.map((digit, index) => (    
                <input className='verification__input'
                    key={index}
                    type="text"
                    ref={inputRefs.current[index]}
                    maxLength='1'
                    value={digit}
                    onChange={(evt) => inputChange(index, evt.target.value)} 
                    onKeyDown={(evt) => inputBackspace(index, evt)}
                />
            ))}
        </div>
            <div className="verification__again">
                <p>
                    will expired in <span>00:55</span>
                </p>
                <button>Send Again</button>
            </div>
    </>
  )
}
