import { useEffect, useState, useRef } from 'react'
import { auth, db } from '../firebase/Config';
import { collection, query, orderBy, onSnapshot, limit, Query, QuerySnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';
import Message from './Message';

const ChatBox = () => {

    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        // This is firebase query that searching our db and the message collection, limit 50 messages (each doc containn a message).
        const q = query(collection(db, "message"), orderBy("createdAt", "desc"), limit(50));

        // Define observer to q, the observer is the callback func (the second argument) that invoke when query q change (when the docs change) (real-time). 
        // q = all docs that answer the query condtions above. (QuerySnapshot) = takes the docs of the query as the argument.
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort((a, b) => a.createdAt - b.createdAt)
            setMessages(sortedMessages);
        });

        return () => unsubscribe;
    }, []);

    return (
        <div className=''>

            <div className='flex-flex-col  '>
                {messages ? messages.map((message, idx) => {
                    return (
                        <Message key={message.id} message={message} />
                    )
                }) : "nothing yet"}
            </div>

            {/* define the scroll ref as the span component to pulling the scroll down when a new message enters.*/}
            <span ref={scroll}></span>

            <SendMessage scroll={scroll} />

        </div>
    )
}

export default ChatBox;