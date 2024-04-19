import React from 'react'

export const TavernItem = ({ title, subTitle, dataScoreboard }) => {
    return (
        <li className='desk__item animate__animated animate__fadeInDown'>
            <h2>
                {title}
            </h2>
            <h2>
                {subTitle}
            </h2>

            {!dataScoreboard?.length === 0 ? (
                <h2 className='noData'>No data yet</h2> 
                ) : (
                    <ul className='users'>
                        {dataScoreboard?.map(item => (
                            <li className='users__item' key={item.name}>
                                <div className="users__user">
                                    <div className="users__user_ic">
                                        <p>
                                            {item.name && item.name.substring(0, 2).toUpperCase()}
                                        </p>
                                    </div>
                                    <h3>
                                        {item.name}
                                    </h3>
                                </div>
                                <h3 className='users__percent'>
                                    {item.value}
                                </h3>
                            </li>
                        ))}
                        
                    </ul>
                ) 
            }
            
        </li>
    )
}
