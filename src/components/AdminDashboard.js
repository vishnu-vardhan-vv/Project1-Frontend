import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard(){
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/admin/contacts`);
            setContacts(res.data);
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Contact Queries</h2>
            {contacts.map(contact => (
                <div key={contact._id} style={{ borderBottom: '1px solid #ccc', padding: 10 }}>
                    <p><strong>Name:</strong> {contact.name}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Topic:</strong> {contact.topic}</p>
                    <p><strong>Message:</strong> {contact.message}</p>
                    <p><em>Submitted: {new Date(contact.createdAt).toLocaleString()}</em></p>
                </div>
            ))}
        </div>
    );
};
