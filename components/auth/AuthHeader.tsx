export default function AuthHeader({ text }: { text: string }) {
  return (
    <div className="text-black100 flex flex-col items-center gap-2">
      <h1 className="text-2xl font-semibold">{text}</h1>
      <p className="opacity-40">Your Social Campaigns</p>
    </div>
  );
}
