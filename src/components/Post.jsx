import { useStore } from "effector-react";
import { useState } from "react";
import { $post, addPost, deletePost, deleteAllPost } from "../models/modelPost";


const Post = () => {
    const posts = useStore($post)

    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const addNewPost=(e)=>{
        e.preventDefault();
        addPost ( {id: Date.now(), name: name, text: text})
    }

    


    return (
        <div>
            <h1>Posts:</h1>
            {posts.map((p) => <div>{p.name}
            <span>
                <button onClick ={()=>{deletePost(p.id)}}>Del</button>
                </span></div>)}

            <form>
                <input onChange={(e)=>setName(e.target.value)} value={name} placeholder='Your name...'/>
                <input onChange={(e)=>setText(e.target.value)}  value={text} placeholder='Your text...'/>
                <button onClick={addNewPost}>Send post</button>
                <div>
                    <button onClick ={()=>{deleteAllPost()}}>Del all new post</button>
                </div>
            </form>
        </div>
    )
}
export default Post;
