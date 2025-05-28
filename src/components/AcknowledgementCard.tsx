import { staticAsset } from "../lib";

export default function AcknowledgementCard({rating}: {rating:number}) {
    return (
        <div className="acknowledgement">
            <img src={staticAsset('/images/illustration-thank-you.svg')} alt='thank you image' />
            <p className='rating-score'>You selected {rating} out of 5</p>
            <h1 className="text-center">
                Thank you!
            </h1>
            <p className="text-center">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </div>    
    )

}