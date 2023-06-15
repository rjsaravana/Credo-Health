import { ConfigProvider } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>

  </ConfigProvider>
  );
}

export default App;
