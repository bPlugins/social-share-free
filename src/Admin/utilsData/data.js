const slug = "b-social-share";

export const dashboardInfo = (info) => {
    const { version, licenseActiveNonce } = info;


    return {
        name: `B Social Share`,
        displayName: `B Social Share - Social Sharing Buttons for Posts and Pages`,
        description:
            "B Social Share is a lightweight and easy-to-use WordPress plugin that allows visitors to share your website pages or posts across popular social networks and messaging platforms. It helps increase your content reach and engagement by making social sharing simple and accessible for users.",
        slug,
        version,
        displayOurPlugins: true,
        media: {
            logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
            banner: `https://ps.w.org/${slug}/assets/banner-772x250.png?rev=3401547`,
            thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
            // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
            // video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
            // isYoutube: true
        },
        pages: {
            org: `https://wordpress.org/plugins/${slug}/`,
            landing: `https://bplugins.com/products/${slug}/`,
            // docs: `https://bplugins.com/docs/${slug}/`,
            pricing: `https://bplugins.com/products/${slug}/pricing/`,
        },
        freemius: {
            product_id: 20173,
            plan_id: 33459,
            public_key: "pk_d6bd48e230834275b20b6a3ee1a68",
        },
        licenseActiveNonce,
        changelogs: [
            {
                version: "2.2.0 – 29 Mar 26",
                list: ["Improved block sidebar layout and user experience", "Added new styling customization options"],
            },
            {
                version: "2.0.1 – 02 Mar 26",
                list: ["Add New Dashboard."],
            },
            {
                version: "2.0.0 – 5 Feb 26",
                list: ["Updated with new a lot features and major updates of the plugin.",],
            },
            {
                version: "1.0.6 – 4 Aug 24",
                list: ["Add translate feature."],
            },
            {
                version: "1.0.5",
                list: ["Add translate feature."],
            },
            {
                version: "1.0.4",
                list: ["Social Item Overflow fix."],
            },
            {
                version: "1.0.3",
                list: ["Reduce PHP Code", "Performance improvement."],
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
        ],
        proFeatures: [
            'Premium Share Theme : Animation icon, Button with text.',
            'Hover Transform Animation',
            'Shortcode support to display posts anywhere.',
            'Absolute / Fixed Position Option',
            'Color, icon, spacing & typography controls.'
        ],
        startButton: {
            label: "Start Now",
            url: `wp-admin/post-new.php?post_type=social_share_cpt`,
        },
    }
}

export const demoInfo = {
    allInOneLabel: 'See All Demos',
    allInOneLink: 'https://bblockswp.com/demo/social-share-all-demo/',
    demos: [
        {
            icon: '',
            title: 'Social Share Section',
            children: [
                {
                    title: "B Social Share - Default",
                    type: "iframe",
                    url: "https://bblockswp.com/demo/social-share-default/",
                },
                {
                    title: "B Social Share - Theme One",
                    type: "iframe",
                    url: "https://bblockswp.com/demo/social-share-theme-one/",
                },
                {
                    title: "B Social Share - Theme Two",
                    type: "iframe",
                    url: "https://bblockswp.com/demo/social-share-theme-two/",
                },
                {
                    title: "B Social Share - Theme Three",
                    type: "iframe",
                    url: "https://bblockswp.com/demo/social-share-theme-three/",
                },
                {
                    title: "B Social Share - Theme Four",
                    type: "iframe",
                    url: "https://bblockswp.com/demo/social-share-theme-four/",
                },
                {
                    title: "B Social Share - Theme Five",
                    type: "iframe",
                    url: "https://bblockswp.com/demo/social-share-theme-five/",
                }
            ]
        },
        {
            icon: '',
            title: 'All Social Share',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-all-demo/'
        }
    ]
}

export const pricingInfo = {
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
    pluginId: 20173,
    planId: 33459,
    licenses: [
        1,
        3,
        null
    ],
    button: {
        label: 'Buy Now ➜'
    },
    featured: {
        selected: 3, // choose from licenses item
    }
}

