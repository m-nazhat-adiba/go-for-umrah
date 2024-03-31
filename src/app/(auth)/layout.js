"use client";

import { GlobeIcon } from "@/assets/icons";
import Button from "@/components/button/Button";
import React from "react";
import styles from "./style.module.scss"; // Import SCSS module
import "@/app/custom.scss";

export default function AuthLayout({ children }) {
  return (
    <main className={`container-fluid ${styles.wrapper}`}>
      <nav className={`navbar bg-dark ${styles.parent}`}>
        <div className="container d-flex justify-content-between h-100">
          <a className="navbar-brand" href="#">
            <img src="/Logo.png" alt="go-for-umrah" />
          </a>
          <div className={`${styles.buttonWrapper}`}>
            <div className={`${styles.languageButton}`}>
              <GlobeIcon />
              <p>En</p>
            </div>
            <div className={`${styles.box}`}></div>
            <div className={styles.helpButtonWrapper}>
              <Button variant="outline" size="small">
                Help
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
}
