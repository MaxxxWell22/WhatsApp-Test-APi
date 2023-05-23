import { useState } from 'react';
import styles from './Chat.module.scss';
import axios from 'axios';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [res, setRes] = useState('')
  const numberStorage = localStorage.getItem('number');
  const instanceStorage = localStorage.getItem('instance');
  const tokenStorage = localStorage.getItem('token');

  const handleSendMessage = () => {
    setMessages([...messages, text]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.green-api.com/waInstance${instanceStorage}/SendMessage/${tokenStorage}`;
    try {
      const response = await axios.post(url, {
        "chatId": `${numberStorage}@c.us`,
        "message": `${text}`
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const getMessage = async () => {
    const url1 = `https://api.green-api.com/waInstance${instanceStorage}/ReceiveNotification/${tokenStorage}`;
    try {
      const response = await axios.get(url1);
      console.log(response.data);
      setRes(response.data.body.messageData.textMessageData.textMessage)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const deleteMessage = async () => {
    const url2 = `https://api.green-api.com/waInstance${instanceStorage}/DeleteNotification/${tokenStorage}/34`;
    try {
      const response = await axios.delete(url2);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={styles.parent}>
      <div className={styles.child}></div>
      <form onSubmit={handleFormSubmit}>
        {messages.map((message, index) => (
          <div className={styles.messages} key={index}>{message}</div>
        ))}
        <div className={styles.parentRes}>
          <div className={styles.response}>{res}</div>
        </div>
        <div className={styles.parentLabel}>
          <label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button onClick={handleSendMessage} type="submit">Отправить</button>
          <button onClick={getMessage} type="submit">Получить</button>
          <button onClick={deleteMessage} type="submit">Удалить</button>
        </div>
      </form>
    </div>
  )
}

export { Chat }