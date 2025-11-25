export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
    viewport: { once: true, amount: 0.1 }
};

export const wavy = (index) => ({
    initial: {
        y: 0,
        opacity: 0
    },
    whileInView: {
        y: [0, -20, 0],
        opacity: [0, 1, 1],
        transition: {
            duration: 1,
            delay: index * 0.2,
            ease: "easeInOut",
            times: [0, 0.5, 1]
        }
    },
    viewport: {
        once: true,
        amount: 0.3
    }
});

export const drag = (index) => ({
    initial: {
        x: -50,
        opacity: 0
    },
    whileInView: {
        x: [-50, 0],
        opacity: [0, 1],
        transition: {
            duration: 1,
            delay: index * 0.1,
            ease: "easeInOut"
        }
    },
    viewport: {
        once: true,
        amount: 0.3
    }
});

