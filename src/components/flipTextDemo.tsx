import { SlightFlip } from "./ui/flip-text";

export function FlipTextDemo() {
  return (
    <div className=" w-1/2">
      <SlightFlip
        className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
        word="Flip Text With expertise in both frontend and backend development, I bring dynamic and robust web With expertise in both frontend and backend development, I bring dynamic and robust web"
      />
    </div>
  );
}
