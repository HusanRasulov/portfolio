import React, {useEffect, useState} from 'react';
import Loader from '../../components/Loader/loader';
import request from '../../config/request';
import {useHistory} from 'react-router-dom';
import './style.css';


function Blog() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        getPosts();
    }, []);
    const getPosts = () => {
        request.call('blogs').then(res => {
            setPost(res.sort((a, b) => b.key - a.key));
        }).catch(() => {
            alert('SERVER ERROR');
        }).finally(() => setLoading(false));
    }

    const ChangePage = data => history.push(`blog/${data.id}`);

    return ( loading ? <Loader/> :
        <div className={'blog'}>
            <div className='blog-box'>
                {post?.map((item, index) => (
                    <div key={index} className={'blog-block'} onClick={()=> ChangePage(item)}>
                        <div className="blog-header">
                            <h1> {item?.title} </h1>
                        </div>
                        <div className="blog-body">
                            <p> {item?.text.substring(0, 300)}. . . </p>
                        </div>
                        <div className='blog-date'>
                            <b> {item?.time} </b>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Blog;