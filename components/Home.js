import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Button, Modal } from "antd";

const Home = () => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
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
          <Button type="primary" onClick={openSignUpModal} className={styles.signUpButton}>
            Sign up
          </Button>

          <p className={styles.text}>Already have an account?</p>
          <Button type="primary" onClick={openSignInModal} className={styles.signInButton}>
            Sign in
          </Button>
        </form>
        <Modal
      
          visible={signInModalOpen}
          onOk={closeSignInModal}
          onCancel={closeSignInModal}
        >
          <div className={styles.modalContainer}>
            <img
              className={styles.twitterLogo}
              src="twitterLogo.png"
              alt="Twitter Logo"
            />
            <h2 className={styles.modalTitle}>Connect to Hackatweet</h2>
            <form className={styles.modalForm}>
              <input
                className={styles.modalInput}
                type="text"
                placeholder="Username"
              />
              <input
                className={styles.modalInput}
                type="password"
                placeholder="Password"
              />
              <Button
                className={styles.modalButton}
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </div>
        </Modal>
        <Modal 
          visible={signUpModalOpen}
          onOk={closeSignUpModal}
          onCancel={closeSignUpModal}>
          <div className={styles.modalContainer}>
            <img
              className={styles.twitterLogo}
              src="twitterLogo.png"
              alt="Twitter Logo"
            />
            <h2 className={styles.modalTitle}>
              Create your hackatweet account
            </h2>
            <form className={styles.modalForm}>
              <input
                className={styles.modalInput}
                type="text"
                placeholder="Firstname"
              />
              <input
                className={styles.modalInput}
                type="text"
                placeholder="Username"
              />
              <input
                className={styles.modalInput}
                type="password"
                placeholder="Password"
              />
              <Button
                className={styles.modalButton}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
