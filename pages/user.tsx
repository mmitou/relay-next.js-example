import { NextPage } from "next";
import UserInfo from "../src/UserInfo";

interface Props {
  flag: boolean;
}

const User: NextPage<Props> = ({ flag }: Props) => {
  if (flag) {
    return <UserInfo />;
  }
  return <p>developing...</p>;
};

export async function getStaticProps() {
  return { props: { flag: false } };
}

export default User;
