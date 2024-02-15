import { useState } from 'react'
import { auth } from '../firebase/Config'
import { useAuthState } from 'react-firebase-hooks/auth'

const Message = ({ message }) => {
    const [user] = useAuthState(auth);

    // Function to format date as string
    const formatDate = (timestamp) => {
        if (!timestamp) return ''; // Check if timestamp is null or undefined
        const date = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
        return date.toLocaleString(); // Format date as string (you can adjust the formatting as needed)
    };

    return (

        <div className={message.uid === user.uid ? ` flex mt-[5px]` : ` `}>

            <div className={`${message.uid === user.uid ? "ml-auto mr-20" : "ml-20"} wts  relative text-xl text-right max-w-65 p-[12px] border rounded-[10px]`}
                style={{ background: "#dcf8c6" }}
            >

                <span className='flex mb-1'>
                    {message.text}
                </span>
                <span>
                    {formatDate(message.createdAt)}
                </span>

            </div>
        </div>
    )
}

export default Message;