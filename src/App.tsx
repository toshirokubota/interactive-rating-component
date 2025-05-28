import { useState } from 'react'
import './App.css'
import AcknowledgementCard from './components/AcknowledgementCard';
import RatingForm from './components/RatingForm';
import Header from './components/Header';

function App() {
  const [rating, setRating] = useState<number>(0);
  return (
    <main>
      {
      rating > 0 ? 
        <AcknowledgementCard rating={rating} />
        :
        <RatingForm setRating={setRating} />
      }
    </main>
  )
}

export default App
