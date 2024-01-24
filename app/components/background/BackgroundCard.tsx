import Image from 'next/image'
import './Background.css'
import LaunchDate from './utils/launchDate'
import PlayNowBtn from './utils/playNowBtn'
import { BackgroundCardProps } from './utils/allData'

export default function BackgroundCard(props:BackgroundCardProps) {

    const {heading,date,isCover,paragraph} = props
    return (
        <div className={isCover ? "main-card1":"main-card"}>
            <div className={`main-heading ${isCover ? 'animated':""}`}>
                {heading}
            </div>
            <div className={`${isCover ? 'animated':""}`}>
            <LaunchDate dateText={date} /></div>
            <p className={`paragraph ${isCover ? 'animated-paragraph':""}`}>
                {paragraph}
            </p>
            <div className={`card-btn dfc ${isCover ? 'animated':""}`}>
                <PlayNowBtn buttontype='Try For Free'/>

                <h2>Available on: iOS</h2>
                
               
            </div>
            <div className='buy-text'>
                Buy now for 40$ only
            </div>
        </div>
    )
}

