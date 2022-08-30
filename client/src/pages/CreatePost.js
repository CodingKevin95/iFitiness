import "../style/CreatePost.css"
import {Button, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
import Post from "./Posts";
import Footer from "../components/Footer";

function CreatePost() {
    const navigate = useNavigate();
    //The State will hold name and description and set then to undefined
    const [post, setPost] = useState({
        exercise:"",
        description:"",
        reps:"",
        sets:"",
        weights:"",
    });

    //Create an onChange that will target the name and set it as the value
    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prev) => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }

    //The useState for post will on launch whenever we type
    // useEffect(() => {
    //     console.log(post);
    // }, [post])

    const handleClick = (event) => {
        //preventDeafult() does not reload the page when we click the button
        event.preventDefault();

        //axios will send out post value to the backend => ("/create")
    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    
      //This navigate makes it that as soon as we hit "Post", the app will be redirected to the post page
    //   navigate("posts")
    window.location.reload();
    }

    return(
        <div className="wholeCreate">
        <div className="CreatePost">
            <h1>Create a Log</h1>
            <Form>
                <Form.Group>
                    <Form.Control className="description" value={post.exercise} name="exercise" placeholder="Exercise" onChange={handleChange}/>
                    <Form.Control className="description" value={post.date} name="date" placeholder="Date" onChange={handleChange}/>
                    <Form.Control className="description" value={post.sets} name="sets" placeholder="Sets" onChange={handleChange}/>
                    <Form.Control className="description" value={post.reps} name="reps" placeholder="Reps" onChange={handleChange}/>
                    <Form.Control className="description" value={post.weights} name="weights" placeholder="Weights" onChange={handleChange}/>
                </Form.Group>
                <Button className="createPost" onClick={handleClick}>Create Log</Button>
            </Form>
            <Post />
        </div>
            <Footer className='hello'/>
        </div>
    )
}

export default CreatePost;