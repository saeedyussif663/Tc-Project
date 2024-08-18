import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Oauth() {
  return (
    <div className="text-black100 flex justify-between gap-4">
      <div className="border-black100 flex items-center gap-2 rounded-md border border-opacity-10 px-3 py-1">
        <FaApple size={20} />
        Sign in with Apple
      </div>
      <div className="border-black100 flex items-center gap-2 rounded-md border border-opacity-10 px-3 py-1">
        <FcGoogle size={20} />
        Sign in with Google
      </div>
    </div>
  );
}
