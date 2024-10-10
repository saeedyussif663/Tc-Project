import AuthHeader from '@/components/auth/AuthHeader';

export default function page() {
  return (
    <section className="mx-auto -mt-16 flex w-[98%] flex-col items-center self-center font-open-sans md:-mt-0 md:w-[680px]">
      <AuthHeader
        title="Forgot Password ?"
        desc="Enter your email to reset your password."
      />

      <form className="mt-6 flex w-[348px] flex-col gap-3 px-2">
        <div className="flex w-full flex-col gap-6 md:gap-5">
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            required
            autoComplete="off"
          />
        </div>

        <Button />
      </form>
    </section>
  );
}

function Button() {
  return (
    <button className="mt-2 rounded-lg bg-black py-1.5 text-white">
      Submit
    </button>
  );
}
