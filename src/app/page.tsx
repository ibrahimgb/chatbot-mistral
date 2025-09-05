"use client";

import { useRouter } from "next/navigation";
import './globals.scss';
import styles from "./page.module.scss";


export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.messageBox}>
        <p>
          Thank you for reviewing my application! My name is <strong>Ibrahim</strong>.<br />
          See you in the interview if I pass the challenge!
        </p>
      </div>
      <button className={styles.chatBtn} onClick={() => router.push("/chat")}>
        Go to Mistral Chat
      </button>
    </div>
  );
}
