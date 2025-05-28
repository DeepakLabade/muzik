"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
    const session = useSession();

    return <div>
        <div className="flex justify-between p-4 bg-slate-400"> 
            <div className="font-bold text-3xl">Muzik</div>
            <div>
                <div>
                    {!session.data?.user && <button className="bg-blue-400 p-2 rounded cursor-pointer" onClick={() => signIn()}>SignIn</button>}
                    {session.data?.user && <button className="bg-blue-400 p-2 rounded cursor-pointer" onClick={() => signOut()}>SignOut</button>}
                </div>
            </div>
        </div>
    </div>
}