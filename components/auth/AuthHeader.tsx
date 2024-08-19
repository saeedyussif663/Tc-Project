export default function AuthHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-black100">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="opacity-40">{desc}</p>
    </div>
  );
}
