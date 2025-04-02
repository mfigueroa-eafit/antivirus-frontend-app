import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function RocketLaunch() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-white">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -200, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <Rocket className="w-24 h-24 text-blue-900" />
      </motion.div>
     
    </div>
  );
}
