"use client";

import { createConnection } from "@/state/socket/socketSlice";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import SubmitButton from "@/components/SubmitButton"
import { useEffect, useState } from "react";
import joinRoom from "@/actions/RoomJoinAction";

function JoinRoom({ params }: { params: { playerId: string } }) {

    const dispatch = useDispatch();
    useEffect(() => {
        // establish a socket connection using io function
        const socket = io(`http://localhost:8080?userType=player&playerId=${params.playerId}`);
        socket.on("connect", () => {
            dispatch(createConnection(socket));
        });

        return () => {
            socket.disconnect();
        };
    }, [dispatch, params.playerId]);

    const socket = useSelector((state: any) => state?.socket?.socket)

    const [code, setCode] = useState("")

    // player joins room
    function handleSubmit(e: any) {
        e.preventDefault()
        joinRoom(code, socket, params.playerId)
        console.log("yes")
    }

    return <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold uppercase mt-12 text-white">quizzr !</h1>
            <div className="flex flex-col justify-center items-center px-4 py-6 mx-2 md:mx-0 w-11/12 md:w-2/5 my-6 bg-white rounded-lg">
                <form className="flex flex-col justify-center items-center px-2 py-4 w-full md:w-4/5"
                    onSubmit={handleSubmit}
                >
                    <label className="text-lg text-center ">Enter the Code to join the quiz</label>
                    <p className="text-sm text-slate-600 mt-2 mb-3 text-center">It is on the screen in front of you</p>
                    <input
                        type="text"
                        name="Room Code"
                        placeholder="enter room code to join"
                        className="w-full border-black border-2 focus:border-blue-600 outline-none text-slate-900 my-2 rounded p-2 capitalize mb-6 focus:shadow-md"
                        required
                        autoComplete="off"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <SubmitButton style='game' />
                </form>
            </div>
        </div>
    </>
}

export default JoinRoom


// if room already joined
// handle ondisconnect