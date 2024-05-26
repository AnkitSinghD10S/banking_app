import AuthForm from "@/components/AuthForm"
import { getLoggedInUser } from "@/lib/actions/user.actions";

const SignIn=async () =>{
  const LoggedInUser = await getLoggedInUser();
  console.log(LoggedInUser);
  
    return (
      <section className="flex-center size-full max-sm:px-6">
        <AuthForm type="sign-in"/>
      </section>

    )
}

export default SignIn