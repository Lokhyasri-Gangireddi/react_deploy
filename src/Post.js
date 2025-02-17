import { Link } from 'react-router-dom';

const Post = ({post}) =>{
    return (
        <article className="feedPost ">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>    
                <p>{post.datetime}</p>
            </Link>
            {(post.body).length < 25 
                ? <p>{post.body}</p>
                : <p>{`${post.body.slice(0,25)}...`}</p>
            }
        </article>
    )
};

export default Post;