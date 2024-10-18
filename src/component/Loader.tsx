import IconCloud from "./magicui/icon-cloud";
import { Slugs } from "../User";
import { IconHexagon } from "@tabler/icons-react";

export function Loader() {
  return (
    <div className="relative flex size-full animate-[ping_1.5s_ease-in-out_1_4.5s]   items-center justify-center ">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon
        className="absolute -z-10 animate-[spin_5s_linear_infinite]"
        size={120}
        color="#64ffda"
        stroke={1.25}
      />
      <div className="text-6xl font-mono text-primaryColor font-semibold absolute -z-10 ">
        KA
      </div>
    </div>
  );
}
