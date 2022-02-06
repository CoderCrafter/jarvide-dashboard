import { useRouter } from "next/router";
import axios, { Axios, ResponseType } from 'axios';
import { useEffect, useState } from "react";
import qs from 'qs'
import Link from "next/link";

interface IOauthResponseType {
    access_token: string,
    token_type: "Bearer",
    expires_in: number,
    refresh_token: string,
    scope: string
}

async function exchangeCode(code: string | string[] | undefined) {
    const client_id = '938891715425751071';
    const client_secret = 'aeqhu6YX8RiWfguqJDuX95TmlLk5kSmK';
    const redirect_uri = 'http://localhost:3000/callback';

    const res = await axios({
        baseURL: 'https://discord.com/api/v8',
        url: '/oauth2/token',
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        data: qs.stringify({
            client_id,
            client_secret,
            redirect_uri,
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

    useEffect(() => {
        if(!router.isReady) return;
        const code = router.query.code;

        (async () => {
            const { access_token } = await exchangeCode(code);
            toLocalStorage(access_token);
        })();
    }, [router]);

    return (
        <Link href="/guilds" passHref>
            <span className="underline text-purple-600 cursor-pointer"> 
                Authentication complete. Click here to go go back.
            </span>
        </Link>
    );
    
}

export default Callback;