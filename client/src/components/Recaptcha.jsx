//TO-DO: Recaptcha functionality
// import React, { useEffect, useRef, useState } from "react";

// const Recaptcha = (sitekey, callback) => {
//     const recaptchaRef = useRef(null);
//     const [isRecaptchaLoaded, setIsRecaptcaLoaded] = useState(false);
    
//     const onRecaptchaLoad = () => {

//     }
//     useEffect(() => {
//         window.onRecaptchaLoad = onRecaptchaLoad;
//         if(!window.grecaptcha) {
//             const script = document.createElement('script');
//             script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
//             script.async = true;
//             script.defer = true;
//             document.head.appendChild(script);
//         } else if(window.grecaptcha && window.grecaptcha.render) {
//             setIsRecaptcaLoaded(true);
//         }

//         return () => {
//             window.onRecaptchaLoad = null;
//         }
//     }, [])

//     useEffect(() => {
//         if(isRecaptchaLoaded){
//             window.grecaptcha.render(recaptchaRef.current, {
//                 'sitekey' : sitekey,
//                 'callback' : callback 
//             })
//         }
//     }, [isRecaptchaLoaded])

//     return (
//         <>
//             <div>{recaptchaRef.current}</div>
//         </>
//     )
// }

// export default Recaptcha;