import { useState } from "react";
import { staticAsset } from "../lib";

export default function RatingForm({setRating}: {setRating: React.Dispatch<React.SetStateAction<number>>}) {
    const [ratingLocal, setRatingLocal] = useState<number>(0);

    function clickHandler(event: React.MouseEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        setRatingLocal(Number(target.value));
        console.log('clickHandler', target.value)
    }

    function formHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if(ratingLocal > 0) {
            setRating(ratingLocal);
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
        <p>
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
        </p>
          <div className='rating-buttons flex align-center justify-between'>
            <input type="radio" id="rating1" name="rating" value="1" onClick={clickHandler} />
            <label htmlFor="rating1" className="circular-shade">
                1
            </label>
            <input type="radio" id="rating2" name="rating" value="2" onClick={clickHandler} />
            <label htmlFor="rating2" className="circular-shade">
                2
            </label>
            <input type="radio" id="rating3" name="rating" value="3" onClick={clickHandler} />
            <label htmlFor="rating3" className="circular-shade">              
                3
            </label>
            <input type="radio" id="rating4" name="rating" value="4" onClick={clickHandler} />
            <label htmlFor="rating4" className="circular-shade">
                4
            </label>
            <input type="radio" id="rating5" name="rating" value="5" onClick={clickHandler} />
            <label htmlFor="rating5" className="circular-shade">
                5
            </label>
          </div>
          <button  onClick={formHandler}>Submit</button>
      </form>
    )
}