import React, { useRef, useState } from 'react';

export const InputVerification = () => {
    const [verification, setVerification] = useState(['', '', '', '', '', '']);
    const [inputValue, setInputValue] = useState('');
    const inputRefs = useRef(Array(6).fill(null).map(() => React.createRef()));
    const [isCodeValid, setIsCodeValid] = useState(false);

    const inputChange = (index, key) => {
        console.log(index);
        const newVerification = [...verification];
        newVerification[index] = inputValue;
        setVerification(newVerification);

        if ( key === 'Backspace') {
            inputRefs.current[index - 1]?.current.focus();
        } else {
            inputRefs.current[index + 1]?.current.focus();
        }

        setIsCodeValid(newVerification.join('').length === 6)
    }

    return (
        <>
            <label className='verification__label' htmlFor='text'>Code</label>
            <div className="verification__inner">
                {verification.map((digit, index) => (
                    <input className='verification__input'
                        key={index + digit}
                        type="text"
                        ref={inputRefs.current[index]}
                        maxLength='1'
                        value={digit}
                        onChange={(evt) => setInputValue(evt.target.value)}
                        onKeyUp={(evt) => inputChange(index, evt.key)}
                    />
                ))}
            </div>

            {isCodeValid && <span>Please enter a valid 6-digit code</span>}

            <div className="verification__again">
                <p>
                    will expire in <span>00:55</span>
                </p>
                <button disabled={!isCodeValid}>Send Again</button>
            </div>
        </>
    );
};
