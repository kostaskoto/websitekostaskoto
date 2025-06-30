'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useTranslation } from 'react-i18next';
import LanguageChanger from "@/components/language/LanguageChanger";
import Header from "@/components/header/Header";

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className={styles.page}>
      <h1>{t('title')}</h1>
    </div>
  );
}
