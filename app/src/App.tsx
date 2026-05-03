import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Complete from './pages/Complete'
import Vocabulary from './pages/Vocabulary'
import Review from './pages/Review'
import ReviewQuiz from './pages/ReviewQuiz'
import ReviewMatch from './pages/ReviewMatch'
import ReviewFlashcards from './pages/ReviewFlashcards'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/:storyId/:lessonNum" element={<Lesson />} />
      <Route path="/complete/:storyId/:lessonNum" element={<Complete />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
      <Route path="/review" element={<Review />} />
      <Route path="/review/quiz" element={<ReviewQuiz />} />
      <Route path="/review/match" element={<ReviewMatch />} />
      <Route path="/review/flashcards" element={<ReviewFlashcards />} />
    </Routes>
  )
}
