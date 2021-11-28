import { NextPage } from "next";
import dynamic from "next/dynamic";

const UserInfo = dynamic(() => import("../src/UserInfo"), { ssr: false });

const User: NextPage = () => {
  return <UserInfo />;
};

export default User;
