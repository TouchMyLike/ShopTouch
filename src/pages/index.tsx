import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}