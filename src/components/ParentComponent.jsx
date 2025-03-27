const ParentComponent = ({blog, title, dlt}) => {
    // const blog = props.blog;
    // const title = props.title;
    // const dlt = props.dlt;
  return (
    <div>
        <h1>{ title }</h1>
        {blog.map((blog) => (
            <div key={ blog.key }>
           <h2>Author: {blog.writter}</h2> 
           <h2>Publication: {blog.publisher}</h2>
           <h2>Region: {blog.region}</h2>
           <h2>Topic: {blog.topic}</h2>
           <button onClick={()=> dlt(blog.key)}>Delete</button>
           </div>
        ))}
    </div>
  )
}

export default ParentComponent