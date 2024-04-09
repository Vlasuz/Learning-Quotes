import React, { useEffect, useState } from 'react'
import { FaqStyle } from '../Faq/Faq.styled'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';
import { useParams } from 'react-router-dom';

export const Info = () => {
    const [infoData, setInfoData] = useState([]);
    const {slug} = useParams()

    useEffect(() => {
        axios.get(getApiLink(`/api/info/page/${slug}/`))
            .then(({data}) => {
                console.log(data);
                setInfoData(data);
            })
    }, [])

    return (
        <div className='container-login'>
            <FaqStyle>
                <h2>
                    {infoData.title}
                </h2>
                    <div className="question" key={infoData.title}>                        
                        <p>
                            {infoData.body}
                        </p>
                    </div>
            </FaqStyle>
        </div>
    )
}
