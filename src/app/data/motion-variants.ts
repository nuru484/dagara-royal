import { cubicBezier, Variants } from "framer-motion";

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.6, -0.05, 0.01, 0.99),
    },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.6, -0.05, 0.01, 0.99),
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const numberVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
};

export const quoteVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6, ease: "easeOut" } },
};

export const iconVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const stepVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
};
