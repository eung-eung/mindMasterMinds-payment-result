import { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Lottie from "react-lottie";
import Success from "./success.json";
import FailRed from "./fail-red.json";
const getParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(key);
    return myParam;
};
const getPaymentResult = () => {
    const responseCode = getParam("vnp_ResponseCode");

    var result =  responseCode === "00" ? true : false;
    console.log(result);
    var Pay;
    Pay.postMessage(result);
    return result;
};
// const showSwal = (status) => {
//     withReactContent(Swal)
//         .fire({
//             title: status ? "Payment complete!" : "Payment failed",
//             icon: status ? "success" : "error",
//             allowOutsideClick: false,
//             allowEscapeKey: false,
//             allowEnterKey: false,
//         })
//         .then((res) => {
//             if (res.isConfirmed) {
//                 window.postMessage("aaaaa");
//             }
//         });
// };
function App() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const successOptions = {
        ...defaultOptions,
        animationData: Success,
    };
    const failOptions = {
      ...defaultOptions,
      animationData: FailRed,
  };
    const [result, setResult] = useState("loading");
    useEffect(() => {
        setTimeout(() => {
          
            setResult(getPaymentResult());
        }, 1000);
    }, []);
    return (
        <div className="container">
            {result === "loading" && (
                <>
                    <span className="loader"></span>
                </>
            )}
            {result !== "loading" &&
                (result ? (
                    <Lottie options={successOptions} height={400} width={400} />
                ) : (
                    <Lottie options={failOptions} height={400} width={400} />
                ))}
        </div>
    );
}

export default App;
