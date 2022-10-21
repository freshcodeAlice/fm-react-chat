import React, {useEffect, useState, useReducer} from "react";
import styles from './Dashboard.module.css';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageArea from "../MessageArea";
import {UserContext} from '../../contexts';
import { getData } from "../../api";
import {reducer} from '../../reducers';
import CONSTANTS from '../../constants';
const {ACTIONS} = CONSTANTS;



const Dashboard = () => {
   const [user, setUser] = useState({
    id: 1,
    username: 'User',
    imageSrc: './images/userplaceholder.webp'
   });
   const [state, dispatch] = useReducer(reducer, {
                                     messages: []
                                    });
   
    useEffect(()=>{
        getData().then((data)=>{
            console.log(data);
            dispatch({
                type: ACTIONS.DATA_LOAD_SUCCESS,
                data
            })
        }).catch((error)=>{
            dispatch({
                type: ACTIONS.DATA_LOAD_ERROR
            })
        })
    }, []);

    const createMessage = (text) => {
        const newMessage = {
            body: text,
            id: state.messages.length+1,
            user
        };
        dispatch({
            type: ACTIONS.ADD_NEW_MESSAGE,
            data: newMessage
        })
    }
   
    return (
        <UserContext.Provider value={user}>
        <main className={styles.container}>
            <DialogList />
            <section className={styles.wrapper}>
                <Chat dialog={state.messages}/>
                <MessageArea submitMessage={createMessage}/>
            </section>
        </main>
        </UserContext.Provider>
    );
}

export default Dashboard;
