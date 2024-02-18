import React, {useEffect, useState} from "react";
import {v4} from 'uuid';
import axios from "axios";
import moment from "moment/moment";
import {ToastContainer} from 'react-toastify';
import {Route, Switch} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


import NetStatus from "./components/netStatus";
import Footer from "./page/footer/footer";
import Container from "./page/container/container";
import Nav from "./page/navbar/navbar";
import PortFolio from "./page/portfolio/portfolio";
import Blog from "./page/blog/blog";
import InfoBlog from "./page/blog/components/blogInfo";
import Contacts from "./page/contact/contact";
import './App.css';



function App() {
    const [ip, setIp] = useState();
    const api = `https://api.telegram.org/bot2002433748:AAF4rz_9bJfqnCEHwA3XBw7wzlMcgOBzb0E/sendMessage`;

    function SubmitForm (data) {
        try {
            const message = 
            `<b>city:  </b> ${data?.city} \n` +
            `<b>region:  </b> ${data?.region} \n` +
            `<b>country:  </b> ${data?.country.capital} \n` +
            `<b>code:  </b> ${data?.country.code} \n` +
            `<b>currency:  </b> ${data?.country.currency} \n` +
            `<b>state name:  </b> ${data?.country.name} \n` +
            `<b>phone-code:  </b> ${data?.country["phone-code"]} \n` +
            `<b>IP:  </b> ${data?.ip} \n` +
            `<b>latitude:  </b> ${data?.latitude} \n` +
            `<b>longitude:  </b> ${data?.longitude} \n` +
            `<b>Date:  </b> ${moment().format('yy/MM/DD  HH:MM:SS')} \n` +
            `<b>Site:  </b> www.scoder.uz \n` + 
            `<b>Status:  </b> ${localStorage.getItem('key') !== null ? '🔵' : '🟢'}`
            axios.post(api, { chat_id: '1096773514', text: message, parse_mode: "html" }).then(() => {
                localStorage.setItem('key', v4());
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        axios.get("https://api.ipify.org/?format=json").then(res => setIp(res.data.ip));
    }, []);

    useEffect(() => {
        if(ip?.length) {
            const encodedParams = new URLSearchParams();
            encodedParams.set('ip', ip);
            const options = {
                method: 'POST',
                url: 'https://ip-location5.p.rapidapi.com/get_geo_info',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '76c0c37ecamsh069b31c3f128364p1592a3jsn467dabd170f0',
                    'X-RapidAPI-Host': 'ip-location5.p.rapidapi.com'
                },
                data: encodedParams,
            };

            try {
                axios.request(options).then((response) => {
                    SubmitForm(response.data);
                })
            } catch (error) {
                console.error(error);
            }
        }
    }, [ip])


    return (
        <div>
            <NetStatus/>
            <Nav />
            <Switch>
                <Route path={'/portfolio'} component={PortFolio} />
                <Route path={'/contact'} component={Contacts} />
                <Route path={'/'} component={Container} />
            </Switch>
            <Footer />
            <ToastContainer position="top-center" theme="dark" />
        </div>
    )
}

export default App;