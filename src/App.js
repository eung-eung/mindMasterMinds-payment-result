import logo from './logo.svg';
import './App.css';
const getParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get(key);
  return myParam;
}
const getPaymentResult = () => {
  const responseCode = getParam('vnp_ResponseCode');
  return responseCode === '00' ? true : false;
}
function App() {
  return (
    <>
      {/* <img
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        src='/images/download.png' /> */}
      {getPaymentResult ? <img
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        src='/images/download.png' /> : <img
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        src='/images/failed.png' />}
    </>


  );
}

export default App;
