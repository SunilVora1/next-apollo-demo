import Head from "next/head";
import Employee from "./employee";

export default function ClientSide() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Employee />
    </div>
  );
}