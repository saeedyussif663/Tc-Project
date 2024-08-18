import AuthHeader from '@/components/auth/AuthHeader';
import Oauth from '@/components/auth/Oauth';

export default function Page() {
  return (
    <section className="my-auto flex h-auto w-full items-center justify-start border border-red-500 font-open-sans md:h-[94%] md:w-1/2">
      <article className="bord flex h-full w-[70%] flex-col items-center justify-center gap-5 border border-green-500">
        <AuthHeader text="Sign Up" />
        <Oauth />
        <div className="seperator flex w-full items-center justify-center gap-4">
          <div className="border-black100 w-[138px] rounded-md border border-opacity-10"></div>
          <p className="text-black100 text-sm opacity-40">Or with Email</p>
          <div className="border-black100 w-[138px] rounded-md border border-opacity-10"></div>
        </div>
        <div className="form"></div>
        <div className="redirect"></div>
      </article>
    </section>
  );
}
