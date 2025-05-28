import { useState } from "react";
import { staticAsset } from "../lib";

export default function RatingForm({setRating}: {setRating: React.Dispatch<React.SetStateAction<number>>}) {
    const [ratingLocal, setRatingLocal] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    function clickHandler(event: React.MouseEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        setRatingLocal(Number(target.value));
        setError(false);
        console.log('clickHandler', target.value)
    }

    function formHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if(ratingLocal > 0) {
            setRating(ratingLocal);
        } else {
            setError(true);
        }
    }
    return (
      <form>
        <div className="circular-shade">
            <img src={staticAsset("/images/icon-star.svg")} alt="star icon"/>
        </div>
        <h1>
            How did we do?
        </h1>
        <div>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>
            <p className={`error-msg ${error ? '':'opacity-0'}`}>Please rate us!</p>
        </div>
          <div className='rating-buttons flex align-center justify-between'>
            <label htmlFor="rating1" className="circular-shade">
                <input type="radio" id="rating1" name="rating" value="1" onClick={clickHandler} />
                1
            </label>
            <label htmlFor="rating2" className="circular-shade">
                <input type="radio" id="rating2" name="rating" value="2" onClick={clickHandler} />
                2
            </label>
            <label htmlFor="rating3" className="circular-shade">              
                <input type="radio" id="rating3" name="rating" value="3" onClick={clickHandler} />
                3
            </label>
            <label htmlFor="rating4" className="circular-shade">
                <input type="radio" id="rating4" name="rating" value="4" onClick={clickHandler} />
                4
            </label>
            <label htmlFor="rating5" className="circular-shade">
                <input type="radio" id="rating5" name="rating" value="5" onClick={clickHandler} />
                5
            </label>
          </div>
          <button onClick={formHandler}>Submit</button>
      </form>
    )
}