import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem';

const Chat = (props) => {

const messageArray = props.dialog.map((msg)=> <ChatItem msg={msg} key={msg.id}/>)

    return (
        <div className={styles.container}>
          {messageArray}
        </div>
    );
}

export default Chat;


/* TODO: 
    отримати контекст, витягти юзера.
    Якщо повідомлення від юзера-автора (від нас), то дати одні стилі ЧатАйтему (справа і інший фон)
    Якщо повідомлення від іншого юзера - дати інші стилі

*/


/*
TODO *:
зробити так, щоб при відкритті чату список повідомлень був в кінці

*/