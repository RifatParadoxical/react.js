import { useState } from 'react'
import ParentComponent from "./components/ParentComponent"

const App = () => {
const [blog, setBlog] = useState([
  {writter: "Rifat", publisher : "Arif Azad", region: "Bangladesh", topic: "Religion", key: 1},
  {writter: "Labib", publisher : "Reimagine", region: "India", topic: "Statistics", key: 2},
  {writter: "Abiran", publisher : "Chingala", region: "Nepal", topic: "Religion", key: 3},
  {writter: "Ali", publisher : "Allama Iqbal", region: "Pakistan", topic: "Secularism", key: 4},
  {writter: "sarukh", publisher : "Maliha", region: "Srilanka", topic: "Activism", key: 5}
])
function dltblog(key) {
  const newBlog = blog.filter((e)=>(e.key !== key))
  setBlog(newBlog)
}
  return (
    <div>
      <ParentComponent  blog={blog} title={"All Blogs"} dlt={dltblog} />
      <ParentComponent  blog={blog.filter((e)=> ( e.topic === "Religion"))} title={"Religious Blogs"}/>
    </div>
  )
}

export default App;