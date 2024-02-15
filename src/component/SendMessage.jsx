import { useState } from 'react'
import { auth, db } from '../firebase/Config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const SendMessage = ({ scroll }) => {

    const [message, setMessage] = useState("");

    const sendMessage = async (e) => {
        if (message.trim() === "") {
            alert("Enter valid message!");
            return;
        }

        const { uid, displayName, photoUrl } = auth.currentUser;
        // Check if photoURL is null
        let avatar = "";
        if (photoUrl) {
            avatar = photoUrl;
        } else {

            avatar = "https://www.gravatar.com/avatar"; //  default avatar image
        }

        //creating document inside collection (if the collection doesnt exist it creates one)
        await addDoc(collection(db, "message"), {
            text: message,
            name: displayName,
            avatar,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" })
    };

    return (
        <div className='flex justify-end p-2 gap-4'>
            <div className='p-2' >
                <input type="text"
                    className='rounded'
                    value={message}
                    id="username"
                    name="username"
                    autoComplete="off" // Add autocomplete attribute with a value
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: "500px", height: "35px" }}

                />
            </div>
            <button className='text-3xl  text-white' onClick={(e) => sendMessage(e)}>Send Message</button>
        </div>
    )
}
export default SendMessage;