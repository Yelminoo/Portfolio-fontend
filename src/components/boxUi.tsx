import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/ui/box-reveal";

export async function BoxRevealDemo() {
  return (
    <div className="size-full w-100 gap-3 mt-20 flex min-h-100vh justify-center  pt-8 px-10 flex-wrap ">
      <div className={"md:w-[45%] w-[100%]"}>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2.5rem] font-semibold dark:text-white">
            What I do<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            As a Full Stack Developer, I enjoy working on all aspects of web
            development.{" "}
            <span className="text-[#5046e6]">My skills include:</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Frontend Development:</h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  Crafting intuitive and responsive user interfaces using HTML,
                  CSS, JavaScript, and modern frameworks like React and Vue.js.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Backend Development:</h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  Crafting intuitive and responsive user interfaces using HTML,
                  CSS, JavaScript, and modern frameworks like React and Vue.js.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Security-Focused:</h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  I prioritize security in every application I build,
                  implementing encryption, secure authentication, and best
                  practices to safeguard user data. Whether it’s input
                  validation, encrypted transmissions, or role-based access
                  control, I ensure that your platform stays secure.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Full Stack Solutions:</h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  Integrating frontend and backend technologies to create
                  seamless, end-to-end web applications that deliver a great
                  user experience.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
      </div>
      <div className={"md:w-[45%] w-[100%]"}>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2.5rem] font-semibold dark:text-white">
            Why Choose Me<span className="text-[#5046e6]">?</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Technical Expertise:</h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  Proficient in a wide range of web technologies and frameworks.
                  I have hands-on experience creating everything from
                  interactive frontend interfaces to secure backend systems. My
                  ability to work across the entire development stack ensures
                  seamless, well-integrated solutions.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">
                -&gt; User-Centric Development:
              </h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  I strive to build intuitive, responsive, and accessible
                  applications that prioritize the user experience. My attention
                  to detail ensures that your product will be not only
                  functional but also enjoyable to use.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Team Player: </h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  With a background in working closely with teams and customers,
                  I understand the importance of clear communication and
                  collaboration. I love working on projects that improve the
                  lives of end users and take pride in delivering value to both
                  teams and clients.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <div className=" text-gray-800">
              <h5 className="dark:text-white">-&gt; Problem Solver :</h5>

              <div className=" pl-4">
                <span className="font-semibold dark:text-white">
                  I enjoy tackling complex challenges, whether it's optimizing
                  performance, ensuring cross-platform compatibility, or
                  resolving tough bugs. My approach is to find elegant, scalable
                  solutions that stand the test of time.
                </span>
              </div>
            </div>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
