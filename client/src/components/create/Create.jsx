import {useState, useEffect, useContext} from "react";

import {Box, Button, FormControl, InputBase, styled, TextareaAutosize} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import {useLocation, useNavigate} from "react-router-dom";

import {DataContext} from "../../context/DataProvider";
import {API} from '../../service/api';

const Container = styled(Box) `
    margin: 50px 100px;
`;

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 20px;
`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 20px;
    border: 1px solid black;
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createDate: new Date(),
}

const CreatePost = () => {

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const {account} = useContext(DataContext);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file]);

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const savePost = async () => {
        let response = await API.createPost(post);
        if (response.isSuccess) {
            navigate('/');
        }
    }

    return (
        <Container>
            Hello!
            <StyledFormControl>
                <label htmlFor='fileInput'>
                    <AddCircleIcon fontSize="large" color="action"/>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{display: 'none'}}
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <InputTextField placeHolder='Title' onChange={(e) => handleChange(e)} name="title"/>
                <Button variant='contained' onClick={() => savePost()}>Publikuj!</Button>
            </StyledFormControl>

            <TextArea
                winRows={5} placeholder='Opowiedz coś...!' onChange={(e) => handleChange(e)} name="description"
            />
        </Container>
    )
}

export default CreatePost;