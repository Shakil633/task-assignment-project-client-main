import { motion } from "framer-motion";
const UserTypesSection = () => {
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
    <section className="lg:w-[1200px] mx-auto px-6">
      <div className="py-16">
        <motion.h2 className="lg:text-4xl text-center font-bold" variants={fadeUp} initial="hidden" whileInView="show">
          Who gains advantages from our platform?
        </motion.h2>

        <div className="mt-16">
          <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-8 px-6 -mt-4 text-black">
            <motion.div
              className="flex gap-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
            >
              <div className="p-6 bg-[#BCECD7] rounded-xl">
                <h4 className="text-2xl font-semibold mb-4">Developers</h4>
                <li className="">
                  Effectively oversee project tasks and timelines.
                </li>
                <li className="">
                  Engage in collaborative coding projects with team members.
                </li>
                <li className="mb-2">
                  Effortlessly monitor and prioritize coding tasks.
                </li>
              </div>
            </motion.div>
            <motion.div className="flex gap-3" variants={fadeUp} initial="hidden" whileInView="show">
              <div className="p-6 bg-[#CACDFF] rounded-xl">
                <h4 className="text-2xl font-semibold mb-4">
                  Corporate Professionals
                </h4>
                <li className="">
                  Facilitate the seamless coordination of team projects.
                </li>
                <li className="">
                  Improve communication and foster collaboration among team
                  members.
                </li>
                <li className="mb-2">
                  Supervise the advancement of the project and consistently meet
                  established deadlines.
                </li>
              </div>
            </motion.div>
            <motion.div className="flex gap-3" variants={fadeUp} initial="hidden" whileInView="show">
              <div className="p-6 bg-[#FBE2AA] rounded-xl">
                <h4 className="text-2xl font-semibold mb-4">
                  Project Managers
                </h4>
                <li className="">
                  Optimize the planning and execution processes of the project
                  for increased efficiency
                </li>
                <li className="">
                  Cultivate an environment for project management that
                  encourages collaboration and enhances productivity
                </li>
                <li className="mb-2">
                  Track the team's advancement and handle any potential
                  obstacles.
                </li>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
