import React, { useState, useEffect } from 'react';
import Page from './Page';

export default function MainPage({ user, activity }) {
  console.log(activity);
  const [init, setInit] = useState([]);
  const [fo, setFo] = useState({});
  const [initFilter, setInitFilter] = useState([]);
  const [isSearchLevel, setIsSearchLevel] = useState('');
  const [isSearchCategory, setIsSearchCategory] = useState('');
  // const [cards, setCards] = useState(activity);

  const changeHandlerLevel = (e) => {
    setIsSearchLevel(!!e.target.value);
    setInitFilter([...init].filter((el) => el.Level.id === +e.target.value));
  };
  const changeHandlerCategory = (e) => {
    setIsSearchCategory(!!e.target.value);
    setInitFilter([...init].filter((el) => el.Category.id === +e.target.value));
  };
  useEffect(() => {
    fetch('api/initall')
      .then((res) => res.json())
      .then((data) => {
        setInitFilter(data);
        setInit(data);
      });
  }, []);
  useEffect(() => {
    fetch('/auth/allvalue')
      .then((res) => res.json())
      .then((data) => setFo(data));
  }, []);

    return (
      <div className="container">
        <br />
        <h4> Фильтрация по:</h4>
        <div style={{ display: 'flex' }}>
          <h5>уровню</h5>
          <select className="form-select form-select-sm" name="level" onChange={changeHandlerLevel} aria-label=".form-select-sm example">
            <option value="">Выберите уровень</option>
            {fo.level?.map((el) => (
              <option value={el.id} key={el.id}>{el.name}</option>
            ))}
          </select>
          <h5>разделу</h5>
          <select className="form-select form-select-sm" name="razdel" aria-label=".form-select-sm example" onChange={changeHandlerCategory}>
            <option value="">Выберите раздел</option>
            {fo.category?.map((el) => (
              <option value={el.id} key={el.id}>{el.name}</option>
            ))}
          </select>
          <h5>статусу</h5>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option value="1">Активные</option>
            <option value="2">Завершенные</option>
          </select>
        </div>
        <h2 style={{ marginTop: '20px' }}>Городские инициативы</h2>
        <a href="/add" style={{ width: '300px', margin: '0 auto', display: 'flex' }} type="button" className="btn btn-primary">Добавить инициативу</a>
        {(isSearchLevel || isSearchCategory ? (initFilter.map((el) => (
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
        )))
          : (init?.map((el) => (
            <div className="card-group">
              <div className="card">
                <div className="card-body">
                  <a href={`page/${el.id}`}>
                    {' '}
                    <h5 className="card-title">{el.title}</h5>
                  </a>
                  <h5 className="card-title">{el.term }</h5>
                  <h5 className="card-title">{el.Level.name}</h5>
                  <h5 className="card-title">{el.Category.name}</h5>
                </div>
              </div>
            </div>
          ))))}
        {/* <div>{cards?.map((init) => <Page key={init.id} init={init} />)}</div> */}
        {/* <button
        onClick={buttonHandler}
        style={{
          margin: '0 auto',
          display: 'flex',
          position: 'sticky',
          top: '10px',
        }}
        type="button"
        className="btn btn-primary"
      >
        Добавить инициативу
      </button> */}
      </div>
    );
  };
