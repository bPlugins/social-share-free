
const slug = "b-social-share";

export const dashboardInfo = (info) => {
    const { version, isPremium, hasPro } = info;

    const proSuffix = isPremium ? " Pro" : "";

    return {
        name: `B Social Share${proSuffix}`,
        displayName: `B Social Share ${proSuffix} -  Social Sharing Buttons for Posts and Pages`,
        description:
            "B Social Share is a lightweight and easy-to-use WordPress plugin that allows visitors to share your website pages or posts across popular social networks and messaging platforms. It helps increase your content reach and engagement by making social sharing simple and accessible for users.",
        slug,
        logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
        banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
        // video: "https://www.youtube.com/watch?v=milYZrqLJsE",
        // isYoutube: true,
        version,
        isPremium,
        hasPro,
        pages: {
            org: `https://wordpress.org/plugins/${slug}/`,
            landing: `https://bplugins.com/products/${slug}/`,
            // docs: `https://bplugins.com/docs/${slug}/`,
            pricing: `https://bplugins.com/products/${slug}/pricing`,
        },
        freemius: {
            product_id: 20173,
            plan_id: 33459,
            public_key: "pk_d6bd48e230834275b20b6a3ee1a68",
        },
    };
};


export const changelogs = [
    {
        version: "2.0.0 – 5 Feb 26",
        list: ["Updated with new a lot features and major updates of the plugin",],
    },
    {
        version: "1.0.6 – 4 Aug 24",
        list: ["Add translate feature"],
    },
    {
        version: "1.0.5",
        list: ["Add translate feature"],
    },
    {
        version: "1.0.4",
        list: ["Social Item Overflow fix"],
    },
    {
        version: "1.0.3",
        list: ["Reduce PHP Code","Performance improvement" ],
    },
    {
        version: "1.0.2",
        list: ["Reduce PHP Code."],
    },
    {
        version: "1.0.1",
        list: ["Performance improvement."],
    },
    {
        version: "1.0.0",
        list: ["Initial Release"],
    },
];


export const demoInfo = {
    title: "Live Overview",
    description: "Click on any section to view it live",
    allInOneLabel: "See All Demos",
    allInOneLink: "https://bblockswp.com/demo/social-share-all-demo/",
    demos: [
        {
            icon: "",
            title: "B Social Share - Default",
            description: "",
            category: "",
            type: "iframe",
            url: "https://bblockswp.com/demo/social-share-default/",
        },
        {
            icon: "",
            title: "B Social Share - Theme One",
            description: "",
            category: "",
            type: "iframe",
            url: "https://bblockswp.com/demo/social-share-theme-one/",
        },
        {
            icon: "",
            title: "B Social Share - Theme Two",
            description: "",
            category: "",
            type: "iframe",
            url: "https://bblockswp.com/demo/social-share-theme-two/",
        },
        {
            icon: "",
            title: "B Social Share - Theme Three",
            description: "",
            category: "",
            type: "iframe",
            url: "https://bblockswp.com/demo/social-share-theme-three/",
        },
        {
            icon: "",
            title: "B Social Share - Theme Four",
            description: "",
            category: "",
            type: "iframe",
            url: "https://bblockswp.com/demo/social-share-theme-four/",
        },
        {
            icon: "",
            title: "B Social Share - Theme Five",
            description: "",
            category: "",
            type: "iframe",
            url: "https://bblockswp.com/demo/social-share-theme-five/",
        }

    ],
};


export const pricingInfo = {
    cycles: [
        // {
        //     cycle: "monthly",
        //     label: "Monthly",
        //     isDefault: false,
        // },
        // {
        //     cycle: "annual",
        //     label: "Yearly",
        //     isDefault: true,
        // },
        {
            cycle: "lifetime",
            label: "Lifetime",
            isDefault: false,
        },
    ],

    // heading: "One-time payment, lifetime access",
    // headingStyles: {
    //     textAlign: "center",
    //     fontSize: "30px",
    //     fontWeight: "bold",
    //     marginBottom: "25px",
    // },

    plans: [
        {
            name: "Single Site",
            quantity: 1,
            prices: {
                monthly: "10.99",
                annual: "55",
                lifetime: "29",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: false,
            note: "",
        },
        {
            name: "3 Sites",
            quantity: 3,
            prices: {
                monthly: "8.99",
                annual: "79",
                lifetime: "69",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: true,
            note: "",
        },
        {
            name: "Unlimited Sites",
            quantity: "null",
            prices: {
                monthly: "33.99",
                annual: "199",
                lifetime: "199",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: false,
            note: "",
        },
    ],

    features: [
        "Popular Social Networks Support",
        "Gutenberg fully compatible",
        "Lightweight & Fast – Optimized for speed and performance.",
        "Layout Direction – Row , Column",
        "Multiple Share Theme : Icon only, Circle icon, Button with text",
        "Shortcode Support : Use shortcode to insert the Social Share in classic editors or widget areas.",
        "Box-shadow & border customization",
        "Absolute / Fixed Position Option",
        "Hover Transform Animation",
        "Integration with WordPress Editor – Fully compatible with Gutenberg & Classic Editor.",
        "Translation Ready – Works with multilingual sites and translation plugin",
    ],
    button: {
        label: "Buy Now ➜",
    },
    featured: {
        text: "",
        // text: "Best Value",
    },
};

export const featureCompareInfo = {
    title: "Features",
    plans: [
        {
            id: "ztbk4ex2fyi",
            name: "Free Plan",
            color: "#485781",
        },
        {
            id: "lhmjqhkeyi",
            name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'></span>`,
            color: "#146EF5",
        },
    ],
    features: [
        {
            label: "Popular Social Networks Support",
            plans: ["lhmjqhkeyi", "ztbk4ex2fyi"],
        },
        {
            label: "Lightweight & Fast – Optimized for speed and performance",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Gutenberg fully compatible",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Layout Direction – Row , Column",
            plans: ["lhmjqhkeyi", "ztbk4ex2fyi"],
        },
        {
            label: "Shortcode Support : Use shortcode to insert the Social Share in classic editors or widget areas.",
            plans: ["lhmjqhkeyi", "ztbk4ex2fyi"],
        },
        {
            label:
                "Integration with WordPress Editor – Works with Gutenberg & Classic Editor",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Box-shadow & border customization",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Premium Share Theme : Animation icon, Button with text",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Hover Transform Animation",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Absolute / Fixed Position Option",
            plans: ["lhmjqhkeyi"],
        }

    ],
};

