import "../style/Posts.css"
import {useEffect, useState} from "react"
import axios from "axios"
import {Button, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import Modal from 'react-bootstrap/Modal';

function Post () {
const navigate = useNavigate();
const [displayPost, setDisplayPost] = useState([]);
const [updatedPost, setUpdatedPost] = useState({})

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


useEffect(() => {
    axios.get("/posts")
    .then(res => {console.log(res);
    setDisplayPost(res.data)
    })
    .catch((err) => console.log(err))
}, []);

const deletePost = (id) => {
    console.log(id)

    axios.delete(`/delete/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

    window.location.reload()
};

const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow()
}

const handleChange = (event) => {
    const{ name, value } = event.target;

    setUpdatedPost(prev => {
        return {
            ...prev,
            [name]: value,
        };
    });
};

const saveUpdatedPost = () => {
    axios.put(`/create/${updatedPost._id}`, updatedPost)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));

    //Close the pop up once "save change" is hit, and remember to not refresh the page
    handleClose();
    window.location.reload();
}

    return (
        <div className="posts">
            {/* <h1>Post page</h1> */}
            {/* <Button onClick={() => navigate(-1)}>BACK</Button> */}
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    {/* Use a ternary opertor check if there was anything updated, if yes update, if not cancel */}
                    <Form.Control className="updateTitle" placeholder="exercise" name="exercise" value={updatedPost.exercise ? updatedPost.exercise : ""} onChange={handleChange}/>
                    {/* Use a ternary opertor check if there was anything updated, if yes update, if not cancel */}
                    <Form.Control className="updateTitle" placeholder="date" name="date" value={updatedPost.date ? updatedPost.date : ""} onChange={handleChange}/>
                    <Form.Control className="updateTitle" placeholder="sets" name="sets" value={updatedPost.sets ? updatedPost.sets : ""} onChange={handleChange}/>
                    <Form.Control className="updateTitle" placeholder="reps" name="reps" value={updatedPost.reps ? updatedPost.reps : ""} onChange={handleChange}/>
                    <Form.Control className="updateTitle" placeholder="weights" name="weights" value={updatedPost.weights ? updatedPost.weights : ""} onChange={handleChange}/>
                    <Form.Control className="updateTitle" placeholder="notes" name="notes" value={updatedPost.notes ? updatedPost.notes : ""} onChange={handleChange}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {displayPost ? (
                <>
                    {displayPost.map(post =>{
                        return(
                            <div key={post._id} className="section">
                                <h4 className="titleColor">Exercise: {post.exercise}</h4>
                                <p className="descriptionColor">Date: {post.date}</p>
                                <p className="descriptionColor">Sets: {post.sets}</p>
                                <p className="descriptionColor">Reps: {post.reps}</p>
                                <p className="descriptionColor">Weights: {post.weights}</p>
                                <p className="descriptionColor">Notes: {post.notes}</p>
                                <div className="buttonOnPost">
                                    <Button onClick={() => updatePost(post)}>Update</Button>
                                    <Button onClick={() => deletePost(post._id)}>Delete</Button>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : ""}
        </div>
    )
}

export default Post