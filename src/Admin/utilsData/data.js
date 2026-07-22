const slug = "b-social-share";
import { elementorTabIcon, gutenbergTabIcon, shortcodeTabIcon } from './icon';
import { dashboardThumbnail } from './thumbnailSvg';

export const dashboardInfo = (info) => {
    const { version, isPremium, hasPro, licenseActiveNonce, adminUrl = '', nonce, action } = info;

    const proSuffix = isPremium ? ' Pro' : '';

    return {
        name: `B Social Share${proSuffix}`,
        displayName: `B Social Share ${proSuffix} -  Social Sharing Buttons for Posts and Pages`,
        description:
            "B Social Share is a lightweight and easy-to-use WordPress plugin that allows visitors to share your website pages or posts across popular social networks and messaging platforms. It helps increase your content reach and engagement by making social sharing simple and accessible for users.",
        slug,
        version,
        isPremium,
        hasPro,
        adminUrl,
        nonce,
        action,
        displayOurPlugins: true,
        media: {
            logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
            banner: `https://ps.w.org/${slug}/assets/banner-772x250.png?rev=3401547`,
            thumbnail: `data:image/svg+xml;utf8,${encodeURIComponent(dashboardThumbnail)}`,
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
        startButton: {
            label: "Start Now",
            url: `${adminUrl}post-new.php?post_type=social_share_cpt`,
        },
    }
}

export const welcomeInfo = (adminUrl) => ({
    keywords: ['Social Share', 'Gutenberg Block', 'Shortcode', 'Sharing Icons'],
    keywordsLabel: 'Features',

    gettingStarted: {
        tabs: [
             {
                key: 'gutenberg',
                label: 'Gutenberg',
                icon: gutenbergTabIcon,
                steps: [
                    {
                        num: 1,
                        title: 'Add the Social Share Block',
                        body: 'Open the block editor on any page/post. Click <strong>+</strong> or type <strong>/Social Share</strong>.',
                        link: { url: `${adminUrl}post-new.php`, label: 'Open Editor' }
                    },
                    { num: 2, title: 'Choose networks & theme', body: 'Select social networks, messenger platforms, and choose a theme.' },
                    { num: 3, title: 'Customize style', body: 'Configure alignment, size, gap, margins, border radius, and animations.' },
                    { num: 4, title: 'Publish', body: 'Hit Publish / Update to see the live sharing buttons on your site.' }
                ]
            },
            {
                key: 'shortcode',
                label: 'Shortcode',
                icon: shortcodeTabIcon,
                steps: [
                    {
                        num: 1,
                        title: 'Create sharing config',
                        body: 'Go to B Social Share CPT page and add a new sharing button configuration.',
                        link: { url: `${adminUrl}post-new.php?post_type=social_share_cpt`, label: 'Create New' }
                    },
                    { num: 2, title: 'Copy shortcode', body: 'Copy the shortcode generated for your layout (e.g., <code>[social-share id="123"]</code>) from the list table.', link: { url: `${adminUrl}edit.php?post_type=social_share_cpt`, label: 'All Layouts' } },
                    { num: 3, title: 'Paste anywhere', body: 'Paste the shortcode into any post, page, widget, or page builder.' }
                ]
            },
            {
                key: 'elementor',
                label: 'Elementor',
                icon: elementorTabIcon,
                steps: [
                    {
                        num: 1,
                        title: 'Copy Shortcode',
                        body: 'Create and configure your social share, then copy the shortcode <code>[social-share id=POST_ID]</code> from the list.'
                    },
                    {
                        num: 2,
                        title: 'Open Elementor',
                        body: 'Open any page or post with the Elementor Editor.'
                    },
                    {
                        num: 3,
                        title: 'Add Shortcode Widget',
                        body: 'Search for the <strong>Shortcode</strong> widget in the Elementor panel and drag it to your section.'
                    },
                    {
                        num: 4,
                        title: 'Paste and Save',
                        body: 'Paste your timeline shortcode into the widget settings and save the page.'
                    }
                ]
            }
        ]
    },

    changelogs: [
         {
            version: "2.4.0 - 22 July 26",
            type: "new",
            list: [
                "<strong>New Block:</strong> Added 10 brand-new Gutenberg blocks to expand social sharing options.",
                "<strong>Fix:</strong> Synchronized plugin version metadata across the main plugin header, block metadata, and readme.",
                "<strong>Update:</strong> Improved UI styling, security escaping, and overall code quality across all blocks."
            ]
        },
        {
            version: "2.2.3 - 16 July 26",
            type: "new",
            list: [
                "<strong>New Block:</strong> Click to Chat – floating/inline contact button for WhatsApp, Messenger, Telegram, phone, SMS & email.",
                "<strong>New Block:</strong> Share Locker – lock any content until the visitor shares the page (share to unlock)."
            ]
        },
        {
            version: "2.5.0 - 15 July 26",
            type: "new",
            list: [
                "<strong>New Block:</strong> Share Card – Open Graph style preview card with share buttons, native share & copy.",
                "<strong>New Block:</strong> QR Code Share – generate a scannable QR to open the page on a phone.",
                "<strong>New Block:</strong> Highlight to Share – visitors select any text and share it via a floating tooltip."
            ]
        },
        {
            version: "2.4.0 - 14 July 26",
            type: "new",
            list: [
                "<strong>New Block:</strong> Floating Share Bar – sticky, scroll-following share bar (left/right/top/bottom).",
                "<strong>New Block:</strong> Click to Share – highlightable quote with one-click social sharing.",
                "<strong>New Block:</strong> Follow Buttons – follow/subscribe buttons for your own profiles with follower counts."
            ]
        },
        {
            version: "2.3.0 - 14 July 26",
            type: "new",
            list: [
                "<strong>New Block:</strong> Share Count Total – animated total-share counter for social proof.",
                "<strong>New Block:</strong> Share Modal Trigger – a share button that opens a popup with networks, copy link & native share.",
                "<strong>New:</strong> Added a dedicated \"Social Share (Pro)\" block category.",
                "<strong>Update:</strong> Shortcode now renders every B Social Share block inside a saved layout."
            ]
        },
        {
            version: "2.2.3 - 14 July 26",
            type: "improve",
            list: [
                "<strong>Update:</strong> Improved Admin Dashboard.",
                "<strong>Fix:</strong> style and assets loading performance issue."
            ]
        },
        {
            version: "2.2.2 – 20 May 26",
            type: "fix",
            list: [
                "<strong>Fix:</strong> Removed all premium/trialware feature gating",
                "<strong>New:</strong> Added source code repository link in readme",
                "<strong>Fix:</strong> Corrected \"Requires at least\" version formatting to use major version numbers.",
                "<strong>Fix:</strong> Removed disallowed remote external script dependencies and loaded them locally.",
                "<strong>Update:</strong> Documented `goodshare.min.js` third-party JSONP external requests in the readme.",
                "<strong>Fix:</strong> Added proper output escaping to shortcode callback return values for better security.",
                "<strong>Fix:</strong> Added `ABSPATH` checks to prevent direct file access in executable PHP files."
            ]
        },
        {
            version: "2.2.0 – 29 Mar 26",
            type: "improve",
            list: [
                "<strong>Improvement:</strong> Improved block sidebar layout and user experience",
                "<strong>New:</strong> Added new styling customization options"
            ]
        },
        {
            version: "2.0.1 – 02 Mar 26",
            type: "new",
            list: [
                "<strong>New:</strong> Add New Dashboard."
            ]
        },
        {
            version: "2.0.0 – 5 Feb 26",
            type: "update",
            list: [
                "<strong>Update:</strong> Updated with new a lot features and major updates of the plugin."
            ]
        },
        {
            version: "1.0.6 – 4 Aug 24",
            type: "new",
            list: [
                "<strong>New:</strong> Add translate feature."
            ]
        },
        {
            version: "1.0.5",
            type: "new",
            list: [
                "<strong>New:</strong> Add translate feature."
            ]
        },
        {
            version: "1.0.4",
            type: "fix",
            list: [
                "<strong>Fix:</strong> Social Item Overflow fix."
            ]
        },
        {
            version: "1.0.3",
            type: "improve",
            list: [
                "<strong>Update:</strong> Reduce PHP Code",
                "<strong>Improvement:</strong> Performance improvement."
            ]
        },
        {
            version: "1.0.2",
            type: "update",
            list: [
                "<strong>Update:</strong> Reduce PHP Code."
            ]
        },
        {
            version: "1.0.1",
            type: "improve",
            list: [
                "<strong>Improvement:</strong> Performance improvement."
            ]
        },
        {
            version: "1.0.0",
            type: "new",
            list: [
                "<strong>New:</strong> Initial Release"
            ]
        }
    ],
    changelogsLimit: 5,
    changelogsReadMoreLabel: 'View More Changelogs',

    proFeatures: [
        'Click to Chat block – WhatsApp/Messenger/Telegram contact button.',
        'Share Locker block – lock content until visitors share (share to unlock).',
        'Share Card block – Open Graph preview card with native share.',
        'QR Code Share block – scannable QR to open on mobile.',
        'Highlight to Share block – select any text to share it.',
        'Floating Share Bar block – sticky scroll-following share bar.',
        'Click to Share block – tweetable / shareable highlighted quotes.',
        'Follow Buttons block – social profile follow/subscribe buttons.',
        'Share Count Total block – animated social-proof counter.',
        'Share Modal Trigger block – popup share with native & copy link.',
        'Premium Share Theme : Animation icon, Button with text.',
        'Hover Transform Animation',
        'Shortcode support to display posts anywhere.',
        'Absolute / Fixed Position Option',
        'Color, icon, spacing & typography controls.'
    ]
});

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
            title: 'Share Count Total',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-share-count-total/'
        },
        {
            icon: '',
            title: 'Floating Share Bar',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-floating-share-bar/'
        },
        {
            icon: '',
            title: 'Click to Share',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-click-to-share/'
        },
        {
            icon: '',
            title: 'Share Modal Trigger',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-share-modal-trigger/'
        },
        {
            icon: '',
            title: 'Highlight to Share',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-highlight-to-share/'
        },
        {
            icon: '',
            title: 'Follow Buttons',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-follow-buttons/'
        },
        {
            icon: '',
            title: 'Share Card',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-share-card/'
        },
        {
            icon: '',
            title: 'Share Locker',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-share-locker/'
        },
        {
            icon: '',
            title: 'Click to Chat',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-click-to-chat/'
        },
        {
            icon: '',
            title: 'QR Code Share',
            type: 'iframe',
            url: 'https://bblockswp.com/demo/social-share-qr-code-share/'
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

