import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tel.module.scss';

const Tel = () => {
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCreateChat = () => {
    navigate('/chat');
    localStorage.setItem('number', number);
  };

  return (
    <form className={styles.parent} onSubmit={handleCreateChat}>
      <label onSubmit={handleCreateChat}>
        <span>Номер телефона получателя: </span>
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
        />
        <button className={styles.createChat} type="submit">Создать чат</button>
      </label>
    </form>
  );
};

export { Tel }