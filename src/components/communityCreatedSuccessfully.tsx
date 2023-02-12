import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransitionVariant from "../framerMotionVariants.ts/pageTransitionVariant";

export default function CommunityCreatedSuccessfully() {
	return (
		<motion.div
			className="flex flex-col items-center"
			variants={PageTransitionVariant}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<h1 className="font-bold text-5xl mt-20 mb-6 text-fuchsia-900">
				Community created successfully
			</h1>
			<Link to="/dashboard">
				<button className="hover:bg-white hover:text-fuchsia-700 text-white font-bold p-4 transition-colors mt-8 border-2">
					Back to dashboard
				</button>
			</Link>
		</motion.div>
	);
}
