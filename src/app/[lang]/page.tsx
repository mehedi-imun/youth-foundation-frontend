// import { getDictionary } from "./dictionaries";

import { getDictionary } from "./dictionaries";

// import { getDictionary } from "./dictionaries";

export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as "en-US" | "bn-BD");

  return (
    <main>
      <h1>{dict.welcome}</h1>
      {/* <button>{dict.button}</button> */}
    </main>
  );
}
