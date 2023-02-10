import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Button, Modal } from 'antd';

const Home = () => {
  const [signInPopupIsOpen, setSignInPopupIsOpen] = useState(false);
  const [signUpPopupIsOpen, setSignUpPopupIsOpen] = useState(false);
  console.log("signInPopupIsOpen = " + signInPopupIsOpen);

  const openSignInPopup = () => {
    setSignInPopupIsOpen(true);
  };

  const closeSignInPopup = () => {
    if (signInPopupIsOpen) {
      setSignInPopupIsOpen(false);
    }
  };

  const openSignUpPopup = () => {
    setSignUpPopupIsOpen(true);
  };

  const closeSignUpPopup = () => {
    if (signUpPopupIsOpen) {
      setSignUpPopupIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="tweetBackground.png" alt="Image" />
      </div>
      <div className={styles.right}>
        {
          <img
            className={styles.twitterLogo}
            src="twitterLogo.png"
            alt="Image"
          />
        }
        <h1 className={styles.titleh1}>
          See what's <br />
          happening
        </h1>
        <h2 className={styles.titleh2}>Join hackatweet today.</h2>
        <form className={styles.formContainer}>
          <button
            type="submit"
            className={styles.signUpButton}
            onClick={openSignUpPopup}
          >
            Sign up
          </button>
          <p className={styles.text}>Already have an account?</p>
          <button
            type="submit"
            className={styles.signInButton}
            onClick={openSignInPopup}
          >
            Sign in
          </button>
        </form>

        <Modal
          isOpen={signInPopupIsOpen}
          onRequestClose={closeSignInPopup}
          contentLabel="Sign In Popup"
          className={styles.popup}
        >
          <form>
            <div className={styles.formGroup}>
              <input
                className="inputText"
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />
              <input
                className="inputText"
                type="text"
                id="password"
                name="password"
                placeholder="password"
              />
              <button type="button" className={styles.signInButton}>
                Sign in
              </button>
            </div>
            <button type="button" onClick={closeSignInPopup}>
              Close
            </button>
          </form>
        </Modal>

    
export default Home;
