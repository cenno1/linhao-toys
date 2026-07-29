import type { GuideSection } from "@/lib/guides";

type GuideArticleProps = {
  title: string;
  description: string;
  publishedAt: string;
  readMinutes: number;
  sections: GuideSection[];
};

function renderSection(section: GuideSection, index: number) {
  switch (section.type) {
    case "p":
      return (
        <p key={index} className="text-base leading-8 text-slate-600">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={index} className="mt-10 text-2xl font-black tracking-tight text-slate-950">
          {section.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {section.items.map((item) => (
            <li key={item} className="leading-7">
              {item}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={index} className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                {section.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 font-black uppercase tracking-[0.08em] text-slate-500"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.join("-")} className="border-t border-slate-200">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 leading-6 text-slate-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function GuideArticle({
  title,
  description,
  publishedAt,
  readMinutes,
  sections,
}: GuideArticleProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
        Buyer guide · {readMinutes} min read
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      <p className="mt-4 text-sm text-slate-500">Updated {publishedAt}</p>
      <div className="mt-10 space-y-4">{sections.map(renderSection)}</div>
    </article>
  );
}
