import {useParams,Link} from 'react-router-dom';

const PostPage = ({posts,handleDelete}) =>{
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString()===id);
    return (
        <main className='postPage' >
            <article className="post">
                {post && 
                    <>
                        <h2 className='postTitle'>{post.title}</h2>
                        <p className='dateTime'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className='editBtn'>Edit Post</button></Link>
                        <button onClick={()=>handleDelete(post.id)} className='deleteBtn'>Delete Post</button>
                    </>
                }

                {!post &&
                    <>
                        <p >We couldn't find the post you requested. </p>
                        <p>Click to go back to home page.</p> 
                        <Link to='/'>Home Page</Link>
                    </>   
                }
            </article>
        </main>
    )
};

export default PostPage;