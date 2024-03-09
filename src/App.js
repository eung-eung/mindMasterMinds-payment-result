import { useEffect, useState } from 'react'
import './App.css';
const getParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get(key);
  return myParam;
}
const getPaymentResult = () => {
  const responseCode = getParam('vnp_ResponseCode');
  console.log('response code: ', responseCode);
  console.log('return: ', responseCode === '00' ? true : false);
  return responseCode === '00' ? true : false;
}
function App() {
  const [result, setResult] = useState()
  useEffect(() => {
    setResult(getPaymentResult())
  }, [])
  return (
    <>
      {/* <img
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        src='/images/download.png' /> */}
      {result ? <img
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        src='/images/download.png' /> : <img
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        src='/images/failed.png' />}
    </>


  );
}

export default App;
