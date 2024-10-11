"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-10 min-h-[calc(100vh-13rem)]">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Animated Paragraph Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-4 text-gray-300">
            I am a passionate frontend developer with 2 years of dedicated
            experience in building responsive, scalable web applications using
            React.js and Next.js. My approach to development centers around
            creating seamless user experiences, where every design and
            functionality is optimized for mobile-first usage and cross-browser
            compatibility. With a keen eye for UI/UX design, I deliver intuitive
            and dynamic interfaces that captivate users while ensuring
            performance and efficiency.
          </p>
          <p className="text-gray-300">
            Having worked extensively on projects targeting Arabic and English
            markets, I excel in localization and multilingual support, making
            sure applications resonate with diverse audiences. My ability to
            adapt to the needs of different cultural contexts helps me create
            solutions that are both user-centric and business-focused.
          </p>
        </motion.div>

        {/* Animated Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Card className="bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-300">
                MCA in Computer Application, Lovely Professional University (LPU),  India 2021-23

              </p>
              <p className="text-gray-300">
                BCA in Computer Application, Bhupander Narayan Mandal University (BNMU),  India 2017-2021

              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-300">
                Frontend  Developer at Debut infotech Pvt Ltd.  ( Jan-2023  To  Sep-2024 )

              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
