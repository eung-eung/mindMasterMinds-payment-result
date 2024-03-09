import { useEffect, useState } from 'react'
import './App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const getParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get(key);
  return myParam;
}
const getPaymentResult = () => {
  const responseCode = getParam('vnp_ResponseCode');

  return responseCode === '00' ? true : false;
}
const showSwal = (status) => {
  withReactContent(Swal).fire({
    title: status ? "Payment complete!" : "Payment failed",
    icon: status ? "success" : "error",

  }).then(res => {

    if (res.isConfirmed) {
      console.log("aaa");
      window.postMessage("aaaaa");
    }
  })
}
function App() {
  const MySwal = withReactContent(Swal)
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
        (result !== 'loading') && showSwal(result)
      }
    </div>


  );
}

export default App;
