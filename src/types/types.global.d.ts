import React from "react";

type FormEvent = React.FormEvent<HTMLFormElement>;
type MouseEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type ClickEvent = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>;
type KeyboardEvent = React.KeyboardEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type ErrorEvent = {
    code: string;
    message:string;
}

declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  }
}

export {
  FormEvent,
  MouseEvent,
  ChangeEvent,
  ClickEvent,
  KeyboardEvent,
  ErrorEvent,
};
