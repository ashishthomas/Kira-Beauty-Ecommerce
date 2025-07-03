import { useEffect } from 'react';
import "./GoogleTranslate.scss"


// Extend the Window interface for TypeScript
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const GoogleTranslate = () => {

  useEffect(() => {
  // Prevent multiple injections
  if (document.getElementById('google-translate-script')) return;

  const addScript = document.createElement('script');
  addScript.id = 'google-translate-script';
  addScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  addScript.async = true;
  document.body.appendChild(addScript);

  // Avoid duplicate widget injection
  window.googleTranslateElementInit = () => {
    const alreadyExists = document.querySelector('.goog-te-combo');
    if (!alreadyExists) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ta,hi,te,kn,ml',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    }
  };
}, []);


  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
