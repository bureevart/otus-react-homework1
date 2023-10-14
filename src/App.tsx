import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './Components/Input';
import { SendButton } from './Components/SendButton';

function App() {

  let [url, setUrl] = useState<string>("");

  const onChange = (s:ChangeEvent<HTMLInputElement>) => {
    setUrl(s.target.value);
  }

  return <>
    Введите ссылку: <Input onChange={onChange}/>
    <SendButton text={url}/>
  </>
}

export default App;
