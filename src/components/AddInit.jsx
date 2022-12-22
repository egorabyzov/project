import React, { useState } from 'react';

export default function New() {
  const [input, setInput] = useState({});
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
  };

  return (
    <>
      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5%',
      }}
      >
        <h2>Добавьте свою инициативу</h2>
      </div>

      <form
        onSubmit={submitHandler}
        style={{
          width: '600px',
          margin: 'auto',
          marginTop: '5%',
        }}
      >
        <label htmlFor="title-input" className="block mar-b-1">
          Название:
          <input
            style={{ width: '100%' }}
            id="title-input"
            name="title"
            type="text"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="body-textarea" className="block mar-b-1">
          Описание и мотивация:
          <textarea
            onChange={changeHandler}
            id="body-textarea"
            name="body"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
          />
        </label>
        <label htmlFor="date-textarea" className="block w-100 no-outline no-border pad-1 mar-b-2">
          На каком уровне будет реализована инициатива:
          <select className="block w-100 no-outline no-border pad-1 mar-b-2">
            <option value="DEFAULT">Выберите</option>
            <option value="1">Федеральный</option>
            <option value="2">Региональный</option>
            <option value="3">Муниципалитет</option>
          </select>
        </label>

        <label htmlFor="date-textarea" className="block w-100 no-outline no-border pad-1 mar-b-2">
          Категория:
          <select className="block w-100 no-outline no-border pad-1 mar-b-2">
            <option value="DEFAULT">Выберите</option>
            <option value="1">Социальная защита</option>
            <option value="2">Транспорт и дороги</option>
            <option value="3">Образование и наука</option>
            <option value="4">Здравоохранение</option>
          </select>
        </label>

        <label htmlFor="date-textarea">
          Выберите крайний срок:
          <input type="date" className="form-control" />
        </label>
        <div className="buttons">
          <button style={{ marginTop: '1rem', backgroundColor: 'grey' }} type="submit" className="btn btn-dark" tabIndex="0">Отправить</button>
        </div>
      </form>
    </>
  );
}
