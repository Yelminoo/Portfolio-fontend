import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { CircularProgressBar } from "./progressCircle";

const reviews = [
  {
    name: "Typescript",
    username: "85%",
    img: "/ts.png",
    progress: 85,
  },
  {
    name: "HTML5",
    username: "85%",
    img: "/html.png",
    progress: 85,
  },
  {
    name: "CSS",
    username: "85%",
    img: "/css.png",
    progress: 85,
  },
  {
    name: "JS",
    username: "85%",
    img: "/js.png",
    progress: 85,
  },
  {
    name: "NODE JS",
    username: "85%",
    img: "/nodejs.png",
    progress: 85,
  },
  {
    name: "React",
    username: "85%",
    img: "/react.png",
    progress: 85,
  },
  {
    name: "PHP",
    username: "85%",
    img: "/php.png",
    progress: 85,
  },
  {
    name: "Laravel",
    username: "85%",
    img: "/laravel.png",
    progress: 85,
  },
  {
    name: "Express",
    username: "85%",
    img: "/express.png",
    progress: 85,
  },
  {
    name: "React Native",
    username: "85%",
    img: "/react-native.png",
    progress: 85,
  },
  {
    name: "Threejs",
    username: "85%",
    img: "/threejs-logo.png",
    progress: 85,
  },
  {
    name: "NEXTJS",
    username: "85%",
    img: "/next-js.png",
    progress: 85,
  },
  {
    name: "MONGO DB",
    username: "85%",
    img: "/mongo.png",
    progress: 85,
  },
  {
    name: "SQL",
    username: "85%",
    img: "/sql.png",
    progress: 85,
  },
  {
    name: "Tailwind",
    username: "85%",
    img: "/tailwind.png",
    progress: 85,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,

  progress,
}: {
  img: string;
  name: string;
  username: string;

  progress: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt="rel"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}

      <div
        className="w-full mt-4 dark:bg-gray-200 rounded-full h-2.5 mb-4 bg-gray-200 "
        style={{ boxShadow: " inset 0 2px 5px 0 rgb(0 0 0 / 0.5)" }}
      >
        <div
          className={`h-2.5 rounded-full dark:bg-gray-300 border-2 border-white`}
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, rgba(35,53,237,1) 88%)",
          }}
        ></div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] my-20 w-full flex-col items-center justify-center overflow-hidden  border bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
