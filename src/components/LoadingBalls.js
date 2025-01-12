import { motion } from "framer-motion";

export default function LoadingBalls() {
    return (
        <div className="flex justify-center items-center space-x-3">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ 
                        delay: i * 0.2, 
                        duration: 1.2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />
            ))}
        </div>
    );
}
