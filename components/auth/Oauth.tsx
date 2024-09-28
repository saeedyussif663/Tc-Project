import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Oauth() {
  return (
    <div className="flex justify-between gap-2 text-black100 md:gap-4">
      <div className="flex items-center gap-2 rounded-md border border-black100 border-opacity-10 px-3 py-1 text-sm md:text-base">
        <FaApple size={20} />
        <span>Sign in with Apple</span>
      </div>
      <div className="flex items-center gap-2 rounded-md border border-black100 border-opacity-10 px-3 py-1 text-sm md:text-base">
        <FcGoogle size={20} />
        <span>Sign in with Google</span>
      </div>
    </div>
  );
}
