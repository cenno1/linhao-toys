type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, text, light = false }: Props) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${light ? "text-blue-400" : "text-blue-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 max-w-3xl text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
