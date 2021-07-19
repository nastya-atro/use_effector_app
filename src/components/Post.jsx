import { Box, chakra, extendTheme, Textarea } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { useState } from "react";
import { $post, addPost, deletePost, deleteAllPost } from "../models/modelPost";


const Post = () => {

    const theme = extendTheme({
        textStyles: {
            h1: {
                // you can also use responsive styles
                fontSize: ["48px", "72px"],
                fontWeight: "bold",
                lineHeight: "110%",
                letterSpacing: "-2%",
                color: 'green'
            },
            h2: {
                fontSize: ["36px", "48px"],
                fontWeight: "semibold",
                lineHeight: "110%",
                letterSpacing: "-1%",
            },
        },
    })

    const AutoResizeInput = chakra(Textarea, {
        baseStyle: {
            bg: "papayawhip",
            color: "blue",
        },
    })

    const Card = chakra("div", {
        baseStyle: {
            shadow: "lg",
            rounded: "lg",
            bg: "red",
        },
    })

 

    const posts = useStore($post)
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const addNewPost = (e) => {
        e.preventDefault();
        addPost({ id: Date.now(), name: name, text: text })
    }




    return (
        <Card>
            <Box textStyle="h1">Posts:</Box>
            {posts.map((p) => <div>{p.name}
                <span>
                    <button onClick={() => { deletePost(p.id) }}>Del</button>
                </span></div>)}

            <form>
                <AutoResizeInput onChange={(e) => setName(e.target.value)} value={name} placeholder='Your name...' />
                <AutoResizeInput onChange={(e) => setText(e.target.value)} value={text} placeholder='Your text...' />
                
                <button onClick={addNewPost}>Send post</button>
                <div>
                    <button onClick={() => { deleteAllPost() }}>Del all new post</button>
                </div>
            </form>
        </Card>
    )
}
export default Post;
