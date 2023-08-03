"use client";

import NiceModal from "@ebay/nice-modal-react";
import HomeComponent from "./components/Home/HomeComponent";
import styles from "./page.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <NiceModal.Provider>
      <main className={styles.main}>
        <ToastContainer />
        <HomeComponent />
      </main>
    </NiceModal.Provider>
  );
}
