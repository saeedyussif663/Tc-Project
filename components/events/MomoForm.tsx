import Wechat from '../icons/wechat';

export default function MomoForm() {
  return (
    <form className="mt-4 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name on card</label>
        <input
          type="text"
          className="form_input"
          placeholder="Meet Patel"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Mobile Money number</label>
        <input
          type="number"
          className="form_input"
          placeholder="0248219834"
          name="number"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-red-secondary py-2 text-white"
      >
        <Wechat />
        Pay Now
      </button>
    </form>
  );
}
