import TryBtn from './TryBtn'
import { BackgroundCardProps } from './utils/allData'

import './Background.css'

export default function BackgroundCard(props:BackgroundCardProps) {

    const {heading,date,isCover,paragraph} = props


    return (
        <div className={isCover ? "main-card1":"main-card"}>

            <div className={`main-heading ${isCover ? 'animated':""}`}>
                {heading}
            </div>
            <div className={`${isCover ? 'animated':""}`}>
                <div className='launch-date'>
                {`Release Date : ${date}`}

                </div>
           
            </div>
            <p className={`paragraph ${isCover ? 'animated-paragraph':""}`}>
                {paragraph}
            </p>
            <div className={`card-btn dfc ${isCover ? 'animated':""}`}>
                <TryBtn buttontype='Try For Free'/>

                {/* <h2>Available on: iOS</h2> */}
                <div>
                    <img src="/ios_img.png" alt="ios" />
                </div>
                
               
            </div>
            <div className='buy-text'>
                Buy now for 40$ only
            </div>
        </div>
    )
}

