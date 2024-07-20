import React from 'react';
import './App.css'
import { Telegram } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

function App() {
  const [account, setAccount] = React.useState('');
  const [wif, setWif] = React.useState('');
  // const [initData, setInitData] = useState('');

  const inviaMessaggio = (): void => {
    const post = {
        account: account,
        wif: wif
    }
    window.Telegram.WebApp.sendData(JSON.stringify(post));
};

  return (
    <>
      <div className="container">
      <input
        type="text"
        placeholder="Write here account"
        className="input-account"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <input
        type="password"
        placeholder="Write here your posting key"
        className="input-wif"
        value={wif}
        onChange={(e) => setWif(e.target.value)}
      />
      {/* Bottone di invio post */}
      <button className="button" onClick={inviaMessaggio}>Login</button>
    </div>
    </>
  )
}

export default App
