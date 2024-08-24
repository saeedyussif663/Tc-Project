import AuthHeader from '@/components/auth/AuthHeader';
import Oauth from '@/components/auth/Oauth';
import Seperator from '@/components/auth/Seperator';
import SigninForm from '@/components/auth/SigninForm';

export default function page() {
  return (
    <section className="flex h-screen w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-center gap-5 md:w-[70%] md:justify-center">
        <AuthHeader title="Sign in" desc="Your Social Campaigns" />
        <Oauth />
        <Seperator />
        <SigninForm />
      </article>
    </section>
  );
}
