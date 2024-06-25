import PropTypes from "prop-types";
const SocialButton = ({ icon, link }) => {
  return (
    <div className="hover:scale-125 transition-all cursor-pointer">
      <a href={link} className="">
        {icon}
      </a>
    </div>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.node, // or another appropriate type
  link: PropTypes.string,
};

const SocialButtonGroup = () => {
  return (
    <div className="flex gap-5 py-5">
      <SocialButton
        icon={
          <i
            className="fa-brands fa-facebook fa-2xl"
            style={{ color: "blue" }}
          ></i>
        }
        link={"https://www.facebook.com/Rutemind?mibextid=ZbWKwL"}
      />
      <SocialButton
        icon={
          <i
            className="fa-brands fa-linkedin fa-2xl"
            style={{ color: "#042153" }}
          ></i>
        }
        link={
          "https://www.linkedin.com/in/yelmin-oo-bb8967236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      />
      <SocialButton
        icon={
          <i
            className="fa-brands fa-github fa-2xl"
            style={{ color: "#000000" }}
          ></i>
        }
        link={"https://github.com/Yelminoo"}
      />
      <SocialButton
        icon={
          <i
            className="fa-solid fa-envelope fa-2xl"
            style={{ color: "red" }}
          ></i>
        }
        link={"mailto: yelminoo2015@gmail.com"}
      />
    </div>
  );
};

export default SocialButtonGroup;
