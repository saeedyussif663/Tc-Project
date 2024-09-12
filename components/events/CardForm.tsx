export default function CardForm() {
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
        <label className="text-sm font-medium">Card number</label>
        <input
          type="text"
          className="form_input"
          placeholder="0000 0000 0000 0000"
          name="number"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Card expirstion</label>

        <input type="month" className="form_input" name="expiration" />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Card Security Code</label>
        <input
          type="text"
          className="form_input"
          placeholder="Code"
          name="code"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-red-secondary py-2 text-white"
      >
        Pay Now
      </button>
    </form>
  );
}
