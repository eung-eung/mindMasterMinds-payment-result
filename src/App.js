import { useEffect, useState } from 'react'
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
  const [result, setResult] = useState('loading')
  useEffect(() => {
    setTimeout(() => {
      setResult(getPaymentResult())
    }, 1000)
  }, [])
  return (
    <div className='container'>
      {result === 'loading' &&
        <>
          <span class="loader"></span>
        </>
      }
      {
        (result !== 'loading') && <img
          style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
          src={result ? '/images/download.png' : "/images/failed.png"} />
      }
    </div>


  );
}

export default App;
