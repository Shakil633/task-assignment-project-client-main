

import  { useState } from 'react';
import { motion } from "framer-motion";

const Blog = () => {
    const [showFullContent1, setShowFullContent1] = useState(false);
    const [showFullContent2, setShowFullContent2] = useState(false);
    const [showFullContent3, setShowFullContent3] = useState(false);

    const toggleContent = (cardNumber) => {
        switch (cardNumber) {
            case 1:
                setShowFullContent1(!showFullContent1);
                break;
            case 2:
                setShowFullContent2(!showFullContent2);
                break;
            case 3:
                setShowFullContent3(!showFullContent3);
                break;
            default:
                break;
        }
    };

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
        <div className="bg-gray-100 p-4">

            {/* Blog Card 1: The Art of Effective Task Management */}
            <motion.div className="bg-white p-8 rounded shadow-md mb-4" variants={fadeUp} initial="hidden" whileInView="show">
                <h2 className="text-2xl font-bold mb-4">The Art of Effective Task Management</h2>

                <p className="text-gray-700">
                    {showFullContent1 ?
                        "Task management is a fundamental skill that can significantly impact productivity and success. In this blog post, we delve into the art of effective task management, exploring strategies and tools to help you streamline your workflow and achieve your goals."
                        :
                        "Task management is a fundamental skill that can significantly impact productivity and success. "
                    }
                </p>

                <div className="mt-4">
                    <button
                        className="desi-btn desi-btn-primary btn btn-sm"
                        onClick={() => toggleContent(1)}
                    >
                        {showFullContent1 ? "Read Less" : "Read More"}
                    </button>
                </div>
            </motion.div>

            {/* Blog Card 2: Overcoming Common Task Management Challenges */}
            <motion.div className="bg-white p-8 rounded shadow-md mb-4" variants={fadeUp} initial="hidden" whileInView="show">
                <h2 className="text-2xl font-bold mb-4">Overcoming Common Task Management Challenges</h2>

                <p className="text-gray-700">
                    {showFullContent2 ?
                        "Task management is not without its challenges. In this blog post, we explore common hurdles individuals face in managing their tasks and provide practical solutions to overcome them. From procrastination to overwhelm, discover how to navigate these obstacles and maintain a more organized and productive lifestyle."
                        :
                        "Task management is not without its challenges. "
                    }
                </p>

                <div className="mt-4">
                    <button
                        className="desi-btn desi-btn-primary btn btn-sm"
                        onClick={() => toggleContent(2)}
                    >
                        {showFullContent2 ? "Read Less" : "Read More"}
                    </button>
                </div>
            </motion.div>

            {/* Blog Card 3: The Role of Mindfulness in Task Management */}
            <motion.div className="bg-white p-8 rounded shadow-md mb-4" variants={fadeUp} initial="hidden" whileInView="show">
                <h2 className="text-2xl font-bold mb-4">The Role of Mindfulness in Task Management</h2>

                <p className="text-gray-700">
                    {showFullContent3 ?
                        "In the fast-paced world we live in, mindfulness might not be the first concept that comes to mind when thinking about task management. However, in this blog post, we explore the profound impact of mindfulness on task management, offering insights into how a present and focused mindset can elevate your productivity."
                        :
                        "In the fast-paced world we live in, mindfulness might not be the first concept that comes to mind. "
                    }
                </p>

                <div className="mt-4">
                    <button
                        className="desi-btn desi-btn-primary btn btn-sm"
                        onClick={() => toggleContent(3)}
                    >
                        {showFullContent3 ? "Read Less" : "Read More"}
                    </button>
                </div>
            </motion.div>

        </div>
    );
};

export default Blog;
