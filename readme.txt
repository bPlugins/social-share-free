=== Social Share Block – Social Sharing Buttons for Posts and Pages ===
Contributors: bplugins, abuhayat, charlescormier , prosanta10
Donate link: https://www.buymeacoffee.com/abuhayat
Tags: block, share, social share, page share, Gutenberg block
Requires at least: 6.2
Tested up to: 6.9
Stable tag: 2.2.1
Requires PHP: 7.1
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Share your website/website-page link to social networks and mobile messengers.

== Description ==

Share your website or pages on social networks and messaging apps. Social Share Block is a lightweight, Gutenberg-native solution designed to boost your social signals without slowing down your site.

Forget bulky scripts that bloat your page. Our block is built specifically for the modern WordPress editor, giving you full control over how your share buttons look—from colors and sizes to layouts and shadows. Whether you need a simple row of icons or a vertical sidebar, you can set it up in seconds.


[Live Demos](https://bblockswp.com/demo/social-share-all-demo/) | [Pricing](https://bplugins.com/products/b-social-share/pricing/) | [Support](https://bplugins.com/support/) |  [Social Share](https://bplugins.com/products/b-social-share/) 


= Features =
- **Fully Customizable**: All the options you need to arrange the showcase to your liking are available here.

### ⭐ Key Features
- 4 **Free** Social Share themes  
- 2 **Premium** Social Share themes in Pro   
- Popular Social Networks Support
- Layout Direction – Row , Column
- Lightweight & Fast – Optimized for speed and performance
- Gutenberg Block support 
- Icon Size , Color , background-color customization option 
- Box-shadow & border customization
- Shortcode support for any page or widget  


### 🔥 Pro Features
Upgrade to the Pro version for full customization:

- **Premium Share Theme** : Animation icon, Button with text
- **Interactive Animations**: Professional hover transform effects to catch the user's eye.
- **Network Labels**: Show social network names (e.g., "Share on Facebook") for higher CTR. 
- **Floating Positions**: Set your share bar to Fixed or Absolute positions (sticky sidebars).
- **One-Click Copy**: A dedicated "Copy URL" button for easy link sharing.



= How to use =
- First, install the B Social Share plugin
- Add the Social Share block from the block category called "Widgets" in the Gutenberg editor.
- You can change block settings from the right-side settings sidebar.
- Enjoy!

* For installation help click on Installation Tab.


= Feedback =
Love the plugin? Want new features? Need support?  
We’d love to hear from you:  
📩 **[Send your feedback](https://bplugins.com/support/ "Send feedback")**


### Check out the Parent Plugin of this plugin-

[**B Blocks**](https://bblockswp.com) – A blocks collection and page building tool for Gutenberg.


### Check out our other WordPress Plugins-

[**Html5 Video Player**](https://bplugins.com/products/html5-video-player/) – Display videos as single and playlist in multiple skins.

[**PDF Poster**](https://bplugins.com/products/pdf-poster/) – Display/Embed PDF files with different styles.

[**Html5 Audio Player**](https://bplugins.com/products/html5-audio-player/) – Listen audios with awesome visuals.

[**StreamCast**](https://bplugins.com/products/streamcast-radio-player/) – Customizable radio player with different skins.

[**3D Viewer**](https://bplugins.com/products/3d-viewer/) – Embed 3D models and 3D products with interaction.

[**Advanced Post Block**](https://bplugins.com/products/advanced-post-block/) – Show posts and custom posts in different layouts.


== Installation ==

= From Gutenberg Editor: =
1. Go to the WordPress Block/Gutenberg Editor
2. Search For **B Social Share**
3. Click on the **Social Share** to add the block

= Download & Upload: =
1. Download the **B Social Share** plugin (*.zip file*)
2. In your admin area, go to the Plugins menu and click on **Add New**
3. Click on **Upload Plugin** and choose the **`b-social-share.zip`** file and click on **Install Now**
4. Activate the plugin and Enjoy!

= Manually: =
1. Download and upload the **B Social Share** plugin to the **`/wp-content/plugins/`** directory
2. Activate the plugin through the Plugins menu in WordPress


== External Services ==

This plugin utilizes `goodshare.min.js` to provide share count functionality for certain networks. In order to fetch share counts, it makes direct JSONP requests to the following external services when those specific networks are enabled:

*   **Facebook**: Fetches share counts from `graph.facebook.com`. ([Terms of Use](https://www.facebook.com/legal/terms), [Privacy Policy](https://www.facebook.com/privacy/policy/))
*   **Tumblr**: Fetches share stats from `api.tumblr.com`. ([Terms of Use](https://www.tumblr.com/policy/terms-of-service), [Privacy Policy](https://www.tumblr.com/policy/en/privacy))
*   **Mail.ru**: Fetches share counts from `appsmail.ru`. ([Terms of Use](https://help.mail.ru/legal/terms/mail/eng), [Privacy Policy](https://help.mail.ru/legal/terms/privacypolicy/eng))
*   **Buffer**: Fetches share links from `api.bufferapp.com`. ([Terms of Use](https://buffer.com/legal/terms), [Privacy Policy](https://buffer.com/legal/privacy))
*   **Pinterest**: Fetches url counts from `api.pinterest.com`. ([Terms of Use](https://policy.pinterest.com/en/terms-of-service), [Privacy Policy](https://policy.pinterest.com/en/privacy-policy))

These requests are necessary to display the share counts on the frontend. By using this plugin and enabling the share count features for these networks, you acknowledge that these external requests will be made.

== Build Tools and Third-Party Libraries ==

This plugin uses standard Node.js and NPM tools to build its distributed production code (such as minified JavaScript and CSS files located in the `build/` directory).
To review, study, or adapt the uncompiled source code, or to compile the assets yourself:
1. Ensure you have Node.js and npm installed.
2. Navigate to the plugin root directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run build` to compile the production code.

The source code for the generated files can be found in the `src/` directory. 
The plugin uses the following third-party libraries for development and building:
- **@wordpress/scripts**: For building WordPress blocks. ([Repository](https://github.com/WordPress/gutenberg/tree/trunk/packages/scripts))
- **immer**: For immutable state management. ([Repository](https://github.com/immerjs/immer))
- **react-router-dom**: For routing. ([Repository](https://github.com/remix-run/react-router))

The plugin also includes local versions of:
- **Font Awesome**: Used for social icons.
- **Goodshare.js**: Used for fetching share counts.
- **Freemius SDK**: Used for secure opt-in and licensing.

== Frequently Asked Questions ==

= Is B Social Share Block free? =

Yes, B Social Share Block is a free Gutenberg block plugin.

= Does it work with any WordPress theme? =

Yes, it will work with any standard WordPress theme.

= Can I change block settings? =

Yes, you can change block settings from the Gutenberg block editor's right sidebar.

= How many times can I reuse a block? =

You can use unlimited times as you want.

= Where can I get support? =

You can post your questions on the [support forum here](https://wordpress.org/support/plugin/b-social-share/)


== Screenshots ==

1. Social Share Admin Dashboard
2. Add New FAQ (ShortCode)
3. Default 
4. Theme One 
5. Theme Two
6. Theme Three
7. Theme Four
8. Theme Five
9. Gutenberg Block Support
10. Gutenberg Block Settings


== Changelog ==

= 2.2.0 - 2026-03-29 =
* **Update:** Improved block sidebar user interface for better usability
* **Update:** Added new style customization options
* **Update:** Minor UI improvements and code optimization

= 2.0.1 =
* Add New Dashboard

= 2.0.0 - 2026-02-05 =
* Updated with new a lot features and major updates of the plugin

= 1.0.6 - 4 Aug 24 =
* Add translate feature

= 1.0.5 =
* Add translate feature

= 1.0.4 =
* Social Item Overflow fix

= 1.0.3 =
* Reduce PHP Code
* Performance improvement

= 1.0.2 =
* Reduce PHP Code.

= 1.0.1 =
* Performance improvement.

= 1.0.0 =
* Initial Release.


== Upgrade Notice ==

= 2.0.0 - 2026-02-05 =
* Updated with new a lot features and major updates of the plugin