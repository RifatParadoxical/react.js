import {  Routes, Route } from 'react-router-dom'
import ParentComponent from "./components/ParentComponent"
import NewBlog from './components/NewBlog'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newBlog' element={<NewBlog/>} />
        <Route path='/blogDetails/:id' element={<BlogDetails />} />
      </Routes>
     </div>
  )
}

export default App;