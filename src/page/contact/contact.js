import React, { useState, useEffect } from "react";
import request from "../../config/request";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import './style.css';

function Contacts() {
    const [Data, setData] = useState({ chat_id: '', token: '' });
    const { register, handleSubmit, reset } = useForm();
    const api = `https://api.telegram.org/bot${Data.token}/sendMessage`;
    useEffect(() => {
        request.call('bot').then(res => setData(res[0]));
    }, [])
    function SubmitForm (data) {
        const message =
            `<b>FullName:  </b> ${data.FullName} \n` +
            `<b>email:  </b> ${data.email} \n` +
            `<b>message:   </b> ${data.message}`;
        const resolveAfter = axios.post(api, { chat_id: Data.chat_id, text: message, parse_mode: "html" });
        toast.promise(resolveAfter, {
            pending: 'Loading',
            success: 'Message send',
            error: 'Network error'
        });
        resolveAfter.then(res => reset());
    }

    return (
        <div className={'contacts'}>
            <h1>Contact Us</h1>
            <div className="contacts-block">
                <div className="contacts-box-1">
                    <div className={'contacts-box-item'}>
                        <MdLocationOn className={'contacts-icon'} />
                        <div>
                            <b>Address</b>
                            <p>Uzbekistan. Bukhara</p>
                        </div>
                    </div>
                    <div className={'contacts-box-item'}>
                        <RiPhoneFill className={'contacts-icon'} />
                        <div>
                            <b>Phone</b>
                            <p>+998 99 045 30 27</p>
                        </div>
                    </div>
                    <div className={'contacts-box-item'}>
                        <MdOutlineMail className={'contacts-icon'} />
                        <div>
                            <b>Email</b>
                            <p>husenrasulov777@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contacts-box-1">
                    <form onSubmit={handleSubmit(SubmitForm)} className={"Forms"}>
                        <h2>Send Message</h2>
                        <input {...register('FullName', { required: true })} type="text" placeholder="Full Name" />
                        <input {...register('email', { required: true })} type="email" placeholder="Email" />
                        <input {...register('message', { required: true })} type="text" placeholder="Type your Message..." />
                        <button className={"Btn"}> Send </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;