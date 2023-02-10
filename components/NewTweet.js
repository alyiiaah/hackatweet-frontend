import styles from "../styles/NewTweet.module.css";
import { useState } from "react";

export default function NewTweet() {
  const [tweet, setTweet] = useState("");

  function handleOnClick() {
    const data = {
      username: "aseniliev",
      token: "mKd1A7cf0sT5lpC4HcwmDLifn9cOx4jb",
      content: tweet,
    };

    console.log("Starting the fetch...");
    fetch("http://localhost:3000/tweets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if (data.result)
        //   window.location.assign(
        //     "http://127.0.0.1:5500/week3/weatherapp-part4/frontend/index.html"
        //   );
      });
  }

  return (
    <body class={styles.body}>
      <div className={styles.container}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="What's up?"
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
          />
        </div>
        <div className={styles.bottom}>
          <div>
            <p className={styles.textStats}>{tweet.length}/280</p>
          </div>
          <div>
            <button className={styles.button} onClick={() => handleOnClick()}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
