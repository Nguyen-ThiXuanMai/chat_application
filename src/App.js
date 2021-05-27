import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="e614243c-dc07-48f4-b4d2-6dcf6cc84396"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;