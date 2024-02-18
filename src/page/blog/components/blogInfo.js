import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader/loader';
import request from '../../../config/request';
import '../style.css';

function InfoBlog() {
    const [Data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        setLoading(true)
        request.call('blogs').then(res => {
            setData(res.find(e => e.id == params.id));
        }).catch(() => alert("SERVER ERROR")).finally(() => setLoading(false));
    }, []);


    return ( loading ? <Loader/> :
        <div className="Info-blog">
            <div className='iframe'>
                <iframe src={Data?.data}/>
            </div>
        </div>
    )
}

export default InfoBlog;