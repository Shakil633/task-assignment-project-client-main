import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  // Animation
  const fadeUp = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="hero lg:min-h-[90vh] min-h-screen" variants={fadeUp} initial="hidden" whileInView="show"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/L5mkx2R/Black-and-White-Silhouette-Motivational-Quotes-Facebook-Cover.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">
            We will help you to manage your tasks that will be helpful for your
            office life and personal projects
          </p>
          <Link to="/dashboard" className="btn btn-ghost border border-white">
            Let's Explore
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
