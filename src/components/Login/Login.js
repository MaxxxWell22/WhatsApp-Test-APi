import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';


const Login = () => {
  const [instance, setInstance] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleInstanceChange = (event) => {
    setInstance(event.target.value);
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleTel = () => {
    navigate('/tel');
    localStorage.setItem('instance', instance);
    localStorage.setItem('token', token);
  };

  return (
    <div className={styles.parent}>
      <form className={styles.form} onSubmit={handleTel}>
        <label className={styles.label}>
          <span>Ваш idInstance: </span>
          <input className={styles.instance}
            type='text'
            value={instance}
            onChange={handleInstanceChange}
          />
        </label>
        <label className={styles.label}>
          <span>Ваш apiTokenInstance: </span>
          <input className={styles.token}
            type='text'
            value={token}
            onChange={handleTokenChange}
          />
        </label>
        <button className={styles.send} type="submit">Создать чат</button>
      </form>
    </div>
  )
}

export { Login }