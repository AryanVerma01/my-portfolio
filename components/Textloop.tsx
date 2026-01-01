import { TextLoop } from "./motion-primitives/text-loop";

export function TextLoopBasic() {
  return (
    <TextLoop className="text-neutral-400">
      <span>Full Stack Web <br className="sm:hidden"/>Developer</span>
      <span>Designer</span>
      <span>Web3 Builder</span>
    </TextLoop>
  );
}
