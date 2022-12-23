import React, { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import Page from './Page';

// условно нам это приходит из БД

export default function MainPage({ user, activity }) {
  console.log(activity);
  const [init, setInit] = useState([]);
  const [searchLevel, setSearchLevel] = useState({ razdel: '', level: '' });
  const [fo, setFo] = useState({});
  // console.log(activity);
  const [cards, setCards] = useState(activity);

  // console.log(searchLevel, 'searchLevel');
  useEffect(() => {
    fetch('api/initall')
      .then((res) => res.json())
      .then((data) => setInit(data));
  }, []);

  useEffect(() => {
    console.log('YA TUT');
    fetch('/auth/allvalue')
      .then((res) => res.json())
      .then((data) => setFo(data));
  }, []);

  const changeHandler = (e) => {
    setSearchLevel((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(init);
  const buttonHandler = () => { window.location.href = '/add'; };

  return (
    <div className="container">
      <br />
      <h4> Фильтрация по:</h4>
      <div style={{ display: 'flex' }}>
        <h5>уровню</h5>
        <select className="form-select form-select-sm" name="level" onChange={changeHandler} value={searchLevel.level} aria-label=".form-select-sm example">
          {fo.level?.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </select>
        <h5>разделу</h5>
        <select className="form-select form-select-sm" name="razdel" aria-label=".form-select-sm example" value={searchLevel.razdel} onChange={changeHandler}>
          {fo.category?.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </select>
        <h5>статусу</h5>
        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
          <option value="1">Активные</option>
          <option value="2">Завершенные</option>
        </select>
      </div>
      <h2 style={{ marginTop: '20px' }}>Городские инициативы</h2>
      {/* <a href="/add" style={{ width: '300px', margin: '0 auto', display: 'flex' }} type="button" className="btn btn-primary">Добавить инициативу</a> */}
      {/* {init?.map((el) => (
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <h5 className="card-title">{el.term }</h5>
              <h5 className="card-title">{el.Level.name}</h5>
              <h5 className="card-title">{el.Category.name}</h5>
            </div>
          </div>
        </div>
      ))} */}

      <button
        onClick={buttonHandler}
        style={{
          margin: '0 auto',
          display: 'flex',
          position: 'sticky',
          top: '0px',
          marginTop: '30px',
        }}
        type="button"
        className="btn btn-primary"
      >
        Добавить инициативу

      </button>
      <div>{cards?.map((init) => <Page key={init.id} init={init} />)}</div>
    </div>

  );
}
