import { useRouter } from "next/router";
import axios, { Axios, ResponseType } from 'axios';
import { useEffect, useState } from "react";
import qs from 'qs'
import Link from "next/link";

import config from "../config";

async function exchangeCode(code: string) {

    const res = await axios({
        baseURL: 'https://discord.com/api/v8',
        url: '/oauth2/token',
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        data: qs.stringify({
            client_id: config.oauth_client_id,
            client_secret: config.oauth_client_secret,
            redirect_uri: config.oauth_redirect_uri,
            code,
            grant_type: "authorization_code"
        }),
    });

    return res.data;

}

function toLocalStorage(access_token: string) {
    if (typeof window !== 'undefined') {
        localStorage.setItem("access_token", access_token);
    }
}

const Callback = () => {
    const router = useRouter();
    const [hasError, setError] = useState(false);

    useEffect(() => {
        if(!router.isReady) return;
        const code = router.query.code;
        if(typeof code !== 'string') {
            setError(true);
            return;
        }

        (async () => {
            const { access_token } = await exchangeCode(code);
            toLocalStorage(access_token);
        })();
    }, [router]);

    if(hasError) return <p>Something went wrong. Please try again.</p>

    return (
        <Link href="/guilds" passHref>
            <span className="underline text-purple-600 cursor-pointer"> 
                Authentication complete. Click here to go go back.
            </span>
        </Link>
    );
    
}

export default Callback;