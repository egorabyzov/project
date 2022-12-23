import React, { useEffect, useState } from 'react';

export default function Registration() {
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    surname: '', name: '', patronymic: '', password: '', federal: '', region: '', city: '', email: '',
  });
  const [fo, setFo] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      window.location.href = '/'; // редирект на главную
      // setInput({ name: '' }); // если хотим очистить инпут
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };
  
  useEffect(() => {
    fetch('/auth/allvalue')
      .then((res) => res.json())
      .then((data) => setFo(data));
  }, []);

  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <div
      className="container"
      style={{
        width: '400px',
        margin: '0 auto',
        marginTop: '7%',
      }}
    >
      <h1>Регистрация</h1>
      <form onSubmit={submitHandler}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="field">
          <label className="label" />
          <div className="control has-icons-left has-icons-right">
            <input className="form-control" value={input.surname} name="surname" onChange={changeHandler} type="text" placeholder="Фамилия" />
            <span className="icon is-left">
              <i className="rbc-icon github" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" />
          <div className="control has-icons-left has-icons-right">
            <input className="form-control" value={input.name} name="name" onChange={changeHandler} type="text" placeholder="Имя" />
            <span className="icon is-left">
              <i className="rbc-icon github" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" />
          <div className="control has-icons-left has-icons-right">
            <input className="form-control" value={input.patronymic} name="patronymic" onChange={changeHandler} type="text" placeholder="Отчество" />
            <span className="icon is-left">
              <i className="rbc-icon github" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" />
          <div className="control has-icons-left has-icons-right">
            <input className="form-control" value={input.email} name="email" onChange={changeHandler} type="text" placeholder="Почта" />
            <span className="icon is-left">
              <i className="rbc-icon github" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" />
          <div className="control has-icons-left">
            <input className="form-control" value={input.password} name="password" onChange={changeHandler} type="password" placeholder="Пароль" />
            <span className="icon is-left">
              <i className="rbc-icon lock" />
            </span>
          </div>
        </div>
        <br />
        <div className="field">
          <div
            className="wrapper"
          >
            <select value={input.federal} name="federal" id="" className="form-control" onChange={changeHandler}>
              <option value="">Выберите федеральный округ</option>
              {fo.fed?.map((el) => (
                <option key={el.id}>{el.name}</option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="field">
          <div
            className="wrapper"
          >
            <select value={input.region} name="region" id="" className="form-control" onChange={changeHandler}>
              <option value="">Выберите регион</option>
              {fo.region?.map((el) => (
                <option key={el.id}>{el.name}</option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="field">
          <div
            className="wrapper"
          >
            <select value={input.city} name="city" id="" className="form-control" onChange={changeHandler}>
              <option value="">Выберите муниципалитет</option>
              {fo.city?.map((el) => (
                <option key={el.id}>{el.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="buttons">
          <button style={{ marginTop: '1rem' }} type="submit" className="btn btn-dark" tabIndex="0">Registration</button>
        </div>
      </form>
    </div>
  );
}
