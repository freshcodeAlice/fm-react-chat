import React from 'react';
import styles from './Chat.module.css';

const ChatItem = (props) => {
    const {body, id, user} = props.msg;
    return (
        <div className={styles.msg}>
            <img 
            src={user.imageSrc ? user.imageSrc : './images/placeholder2.jpg'} 
            className={styles.useravatar}
            />
            <div className={styles.wrapper}>
                <p>{user.username}</p>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default ChatItem;
