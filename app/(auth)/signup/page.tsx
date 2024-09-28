import AuthHeader from '@/components/auth/AuthHeader';
import SignupForm from '@/components/auth/SignupForm';

export default function Page() {
  return (
    <section className="flex h-screen w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-center gap-5 md:w-[70%] md:justify-center">
        <AuthHeader title="Sign Up" desc="Your Social Campaigns" />
        {/* <Oauth /> */}
        {/* <Seperator /> */}
        <SignupForm />
      </article>
    </section>
  );
}
