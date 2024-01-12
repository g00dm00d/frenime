import Link from "next/link";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const SigninButton = async () => {
  const user = await getServerSession(authOption);
  console.log(user);

  return (
    <div>
      <Link href="/api/auth/signin" className="">
        Sign In
      </Link>
    </div>
  );
};

export default SigninButton;
