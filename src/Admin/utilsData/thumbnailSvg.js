export const dashboardThumbnail = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <!-- Definitions for Gradients, Glows, and Clip Paths -->
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070520" />
      <stop offset="50%" stop-color="#0e0a35" />
      <stop offset="100%" stop-color="#191350" />
    </linearGradient>

    <!-- Glowing Background Lights -->
    <radialGradient id="glowCyan" cx="10%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#00f2fe" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowPurple" cx="80%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#7b2cbf" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#7b2cbf" stop-opacity="0" />
    </radialGradient>

    <!-- Accent Gradients -->
    <linearGradient id="accentLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="100%" stop-color="#9b5de5" />
    </linearGradient>

    <!-- Pill Gradients -->
    <linearGradient id="fbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1877f2" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#1877f2" stop-opacity="0.02" />
    </linearGradient>
    <linearGradient id="waGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#25d366" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#25d366" stop-opacity="0.02" />
    </linearGradient>
    <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a66c2" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#0a66c2" stop-opacity="0.02" />
    </linearGradient>
    <linearGradient id="floatingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0.02" />
    </linearGradient>
    <linearGradient id="scGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#f97316" stop-opacity="0.02" />
    </linearGradient>
  </defs>

  <style>
    .text-title { font-family: 'Outfit', 'Inter', system-ui, sans-serif; font-weight: 800; fill: #ffffff; }
    .text-tagline { font-family: 'Inter', system-ui, sans-serif; font-weight: 500; fill: #7a7ba3; letter-spacing: 0.5px; }
    .text-body { font-family: 'Inter', system-ui, sans-serif; font-size: 13px; fill: #9da0c2; }
    .text-pill { font-family: 'Inter', system-ui, sans-serif; font-size: 13px; font-weight: 600; }
    .text-stat-num { font-family: 'Outfit', 'Inter', system-ui, sans-serif; font-weight: 800; font-size: 28px; fill: #ffffff; }
    .text-stat-lbl { font-family: 'Inter', system-ui, sans-serif; font-size: 11px; fill: #7a7ba3; font-weight: 500; }
    .browser-text { font-family: 'Inter', system-ui, sans-serif; font-size: 11px; fill: #a5a9d6; }
    .browser-url { font-family: 'Inter', system-ui, sans-serif; font-size: 10px; fill: #65679c; }
  </style>

  <!-- Base Background -->
  <rect width="800" height="500" rx="16" fill="url(#bgGrad)" />

  <!-- Ambient Glow Elements -->
  <rect width="800" height="500" rx="16" fill="url(#glowCyan)" />
  <rect width="800" height="500" rx="16" fill="url(#glowPurple)" />

  <!-- LEFT COLUMN - PRODUCT INFO & STATS -->
  <g transform="translate(45, 50)">
    <!-- Category Badge -->
    <g transform="translate(0, 0)">
      <rect width="70" height="24" rx="6" fill="#ffffff" />
      <!-- Small Share Icon inside badge -->
      <path d="M 14,12 C 14,13.1 13.1,14 12,14 C 10.9,14 10,13.1 10,12 C 10,10.9 10.9,10 12,10 C 13.1,10 14,10.9 14,12 Z M 19.5,8.5 C 19.5,9.6 18.6,10.5 17.5,10.5 C 16.4,10.5 15.5,9.6 15.5,8.5 C 15.5,7.4 16.4,6.5 17.5,6.5 C 18.6,6.5 19.5,7.4 19.5,8.5 Z M 19.5,15.5 C 19.5,16.6 18.6,17.5 17.5,17.5 C 16.4,17.5 15.5,16.6 15.5,15.5 C 15.5,14.4 16.4,13.5 17.5,13.5 C 18.6,13.5 19.5,14.4 19.5,15.5 Z" fill="#070520" transform="translate(4, -1)" />
      <text x="32" y="16" font-family="'Inter', sans-serif" font-weight="800" font-size="11" fill="#070520" letter-spacing="0.5">SHARE</text>
    </g>

    <!-- Plugin Title -->
    <text x="0" y="65" class="text-title" font-size="36">B Social Share</text>

    <!-- Tagline -->
    <text x="0" y="92" class="text-tagline" font-size="15">Modern • Responsive • Lightweight</text>

    <!-- Decorative Gradient Accent Bar -->
    <rect x="0" y="106" width="120" height="3" rx="1.5" fill="url(#accentLineGrad)" />

    <!-- Feature Pills / Badges Grid -->
    <g transform="translate(0, 125)">
      <!-- Pill 1: Facebook -->
      <g transform="translate(0, 0)">
        <rect width="115" height="32" rx="16" fill="url(#fbGrad)" stroke="#1877f2" stroke-width="1.5" />
        <!-- FB icon path -->
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877f2" transform="scale(0.8) translate(11, 8)" />
        <text x="34" y="20" class="text-pill" fill="#6ba4f8">Facebook</text>
      </g>

      <!-- Pill 2: Twitter / X -->
      <g transform="translate(135, 0)">
        <rect width="115" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.6" />
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff" transform="scale(0.7) translate(16, 12)" />
        <text x="34" y="20" class="text-pill" fill="#ffffff" fill-opacity="0.9">Twitter / X</text>
      </g>

      <!-- Pill 3: WhatsApp -->
      <g transform="translate(0, 42)">
        <rect width="115" height="32" rx="16" fill="url(#waGrad)" stroke="#25d366" stroke-width="1.5" />
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.33a9.927 9.927 0 004.93 1.314c5.506 0 9.989-4.478 9.99-9.984A9.998 9.998 0 0012.012 2zm5.78 13.916c-.243.684-1.2 1.349-1.657 1.417-.457.068-.9.313-2.946-.5a10.89 10.89 0 01-4.743-4.175c-.538-.727-.86-1.58-.86-2.47a2.82 2.82 0 01.88-2.09c.243-.243.513-.3.685-.3.172 0 .343 0 .493.007.155.007.362-.058.566.444.207.513.722 1.76.786 1.896.064.135.107.294.014.477-.093.183-.14.298-.28.46l-.41.48c-.135.155-.282.324-.118.608a7.712 7.712 0 001.42 1.77 6.4 6.4 0 002.054 1.266c.28.136.444.116.608-.074.164-.19.707-.822.896-1.106.19-.285.38-.238.64-.143.26.096 1.667.785 1.953.928.286.143.477.21.547.33.07.12.07.69-.173 1.374z" fill="#25d366" transform="scale(0.8) translate(11, 8)" />
        <text x="34" y="20" class="text-pill" fill="#58e78e">WhatsApp</text>
      </g>

      <!-- Pill 4: LinkedIn -->
      <g transform="translate(135, 42)">
        <rect width="115" height="32" rx="16" fill="url(#liGrad)" stroke="#0a66c2" stroke-width="1.5" />
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0a66c2" transform="scale(0.7) translate(16, 12)" />
        <text x="34" y="20" class="text-pill" fill="#5ea9f8">LinkedIn</text>
      </g>

      <!-- Pill 5: Sidebar Layout -->
      <g transform="translate(0, 84)">
        <rect width="115" height="32" rx="16" fill="url(#floatingGrad)" stroke="#a855f7" stroke-width="1.5" />
        <rect x="10" y="8" width="6" height="16" rx="1" fill="#a855f7" />
        <rect x="20" y="8" width="6" height="4" rx="0.5" fill="#a855f7" fill-opacity="0.6" />
        <rect x="20" y="14" width="6" height="4" rx="0.5" fill="#a855f7" fill-opacity="0.6" />
        <text x="32" y="20" class="text-pill" fill="#c084fc">Floating Bar</text>
      </g>

      <!-- Pill 6: Shortcode -->
      <g transform="translate(135, 84)">
        <rect width="115" height="32" rx="16" fill="url(#scGrad)" stroke="#f97316" stroke-width="1.5" />
        <path d="M8 5 L3 10 L8 15 M16 5 L21 10 L16 15" stroke="#f97316" stroke-width="2" fill="none" transform="scale(0.8) translate(8, 6)" />
        <text x="32" y="20" class="text-pill" fill="#fb923c">Shortcode</text>
      </g>
    </g>

    <!-- Stats Section -->
    <g transform="translate(0, 275)">
      <!-- Stat 1 -->
      <g transform="translate(0, 0)">
        <text class="text-stat-num" x="0" y="0">15+</text>
        <text class="text-stat-lbl" x="0" y="18">Social Networks</text>
      </g>

      <!-- Vertical divider -->
      <line x1="100" y1="-25" x2="100" y2="20" stroke="#25215c" stroke-width="1.5" />

      <!-- Stat 2 -->
      <g transform="translate(115, 0)">
        <text class="text-stat-num" x="0" y="0">6+</text>
        <text class="text-stat-lbl" x="0" y="18">Preset Themes</text>
      </g>

      <!-- Vertical divider -->
      <line x1="185" y1="-25" x2="185" y2="20" stroke="#25215c" stroke-width="1.5" />

      <!-- Stat 3 -->
      <g transform="translate(200, 0)">
        <text class="text-stat-num" x="0" y="0">100%</text>
        <text class="text-stat-lbl" x="0" y="18">Responsive</text>
      </g>
    </g>

    <!-- Integrations Badges -->
    <g transform="translate(0, 335)">
      <rect width="105" height="24" rx="12" fill="#1b1747" />
      <text x="52.5" y="15" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#9da0c2" text-anchor="middle">Gutenberg Block</text>

      <rect x="115" width="85" height="24" rx="12" fill="#1b1747" />
      <text x="157.5" y="15" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#9da0c2" text-anchor="middle">Shortcode</text>
    </g>

    <!-- Mini Analytics Panel -->
    <g transform="translate(0, 380)">
      <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#7a7ba3" letter-spacing="0.5">SHARE STATISTICS</text>
      <!-- Charts bar graphics -->
      <g transform="translate(0, 18)">
        <rect x="0" y="15" width="16" height="25" rx="3" fill="#1f185c" />
        <rect x="0" y="25" width="16" height="15" rx="3" fill="#00f2fe" />

        <rect x="22" y="5" width="16" height="35" rx="3" fill="#1f185c" />
        <rect x="22" y="12" width="16" height="23" rx="3" fill="#00f2fe" />

        <rect x="44" y="20" width="16" height="20" rx="3" fill="#1f185c" />
        <rect x="44" y="28" width="16" height="12" rx="3" fill="#00f2fe" />

        <rect x="66" y="10" width="16" height="30" rx="3" fill="#1f185c" />
        <rect x="66" y="18" width="16" height="22" rx="3" fill="#9b5de5" />

        <rect x="88" y="0" width="16" height="40" rx="3" fill="#1f185c" />
        <rect x="88" y="8" width="16" height="32" rx="3" fill="#9b5de5" />
      </g>
    </g>
  </g>

  <!-- RIGHT COLUMN - INTERACTIVE BROWSER PREVIEW -->
  <g transform="translate(415, 50)">
    <!-- Browser Window Card Wrapper -->
    <rect width="340" height="400" rx="14" fill="#0e0a35" fill-opacity="0.8" stroke="#2c2763" stroke-width="1.5" />

    <!-- Browser Navbar -->
    <path d="M 0,14 A 14,14 0 0 1 14,0 L 326,0 A 14,14 0 0 1 340,14 L 340,36 L 0,36 Z" fill="#151147" />
    <!-- Three window control dots -->
    <circle cx="16" cy="18" r="5" fill="#ff5f56" />
    <circle cx="28" cy="18" r="5" fill="#ffbd2e" />
    <circle cx="40" cy="18" r="5" fill="#27c93f" />

    <!-- Browser Address Bar -->
    <rect x="65" y="10" width="230" height="17" rx="8" fill="#0b082e" />
    <text x="180" y="22" class="browser-url" text-anchor="middle">yoursite.com/blog-post</text>

    <!-- Browser Webpage Content Area -->
    <g transform="translate(18, 54)">
      <!-- Blog Title Placeholder -->
      <rect x="0" y="0" width="220" height="12" rx="3" fill="#1e1857" />
      <rect x="0" y="18" width="140" height="8" rx="2" fill="#1e1857" fill-opacity="0.6" />

      <!-- Post content dummy lines -->
      <rect x="0" y="38" width="304" height="4" rx="2" fill="#151147" />
      <rect x="0" y="47" width="304" height="4" rx="2" fill="#151147" />
      <rect x="0" y="56" width="250" height="4" rx="2" fill="#151147" />

      <!-- MAIN PREVIEW: INLINE SHARE BUTTONS (Theme: Rounded Pills with Labels) -->
      <g transform="translate(0, 75)">
        <text x="0" y="12" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#7a7ba3">SHARE THIS POST</text>
        <g transform="translate(0, 20)">
          <!-- Facebook Button -->
          <g>
            <rect width="68" height="24" rx="12" fill="#1877f2" />
            <path d="M8 17v-5H6.5v-2H8V8.5c0-1.8 1-2.7 2.6-2.7.8 0 1.5.1 1.5.1v1.7h-.9c-.9 0-1.2.6-1.2 1.2V10h2l-.3 2H10v5H8z" fill="#ffffff" transform="scale(0.7) translate(2, 2)" />
            <text x="24" y="15" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff">Share</text>
          </g>
          <!-- Twitter Button -->
          <g transform="translate(74, 0)">
            <rect width="68" height="24" rx="12" fill="#000000" stroke="#25215c" stroke-width="1" />
            <path d="M12.6 3H15l-5.1 5.9 6 7.9H11.1L7.4 12 3.7 16.8H1.3l5.5-6.3L1 3h5.1l3.3 4.4L12.6 3zm-.8 12.5h1.3L4.8 4.3H3.4l8.4 11.2z" fill="#ffffff" transform="scale(0.6) translate(6, 4)" />
            <text x="26" y="15" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff">Post</text>
          </g>
          <!-- WhatsApp Button -->
          <g transform="translate(148, 0)">
            <rect width="68" height="24" rx="12" fill="#25d366" />
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.33a9.927 9.927 0 004.93 1.314c5.506 0 9.989-4.478 9.99-9.984A9.998 9.998 0 0012.012 2zm5.78 13.916c-.243.684-1.2 1.349-1.657 1.417-.457.068-.9.313-2.946-.5a10.89 10.89 0 01-4.743-4.175c-.538-.727-.86-1.58-.86-2.47a2.82 2.82 0 01.88-2.09c.243-.243.513-.3.685-.3.172 0 .343 0 .493.007.155.007.362-.058.566.444.207.513.722 1.76.786 1.896.064.135.107.294.014.477-.093.183-.14.298-.28.46l-.41.48c-.135.155-.282.324-.118.608a7.712 7.712 0 001.42 1.77 6.4 6.4 0 002.054 1.266c.28.136.444.116.608-.074.164-.19.707-.822.896-1.106.19-.285.38-.238.64-.143.26.096 1.667.785 1.953.928.286.143.477.21.547.33.07.12.07.69-.173 1.374z" fill="#ffffff" transform="scale(0.6) translate(6, 4)" />
            <text x="24" y="15" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff">Send</text>
          </g>
        </g>
      </g>

      <!-- FLOATING SIDEBAR SHARE BAR (Mockup on the left margin of page) -->
      <g transform="translate(-10, 30)">
        <rect x="-3" y="15" width="16" height="90" rx="4" fill="#13103d" stroke="#25215c" stroke-width="1" />
        <circle cx="5" cy="27" r="5" fill="#1877f2" />
        <path d="M4.5 9v-2.5h-.7v-1h.7V4.5c0-.9.5-1.3 1.3-1.3.4 0 .7 0 .7 0v.8h-.4c-.4 0-.6.3-.6.6V5.5h1l-.1 1h-.9V9h-.7z" fill="#ffffff" transform="scale(0.5) translate(3.5, 30)" />
        
        <circle cx="5" cy="43" r="5" fill="#1da1f2" />
        <circle cx="5" cy="59" r="5" fill="#bd081c" />
        <circle cx="5" cy="75" r="5" fill="#25d366" />
        <circle cx="5" cy="91" r="5" fill="#0077b5" />
      </g>

      <!-- SECONDARY PREVIEW: GRID OF STYLE PRESETS (Like FAQ themes layout) -->
      <g transform="translate(0, 150)">
        <text x="0" y="0" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#7a7ba3">PRESET TEMPLATES</text>

        <g transform="translate(0, 10)">
          <!-- Card Theme 1 -->
          <g>
            <rect width="45" height="30" rx="4" fill="#1877f2" />
            <rect x="5" y="20" width="35" height="4" rx="1" fill="#ffffff" fill-opacity="0.3" />
            <circle cx="22.5" cy="11" r="5" fill="#ffffff" fill-opacity="0.2" />
          </g>

          <!-- Card Theme 2 -->
          <g transform="translate(50, 0)">
            <rect width="45" height="30" rx="4" fill="#00f2fe" />
            <rect x="5" y="20" width="35" height="4" rx="1" fill="#070520" fill-opacity="0.2" />
            <circle cx="22.5" cy="11" r="5" fill="#070520" fill-opacity="0.15" />
          </g>

          <!-- Card Theme 3 -->
          <g transform="translate(100, 0)">
            <rect width="45" height="30" rx="4" fill="#9b5de5" />
            <rect x="5" y="20" width="35" height="4" rx="1" fill="#ffffff" fill-opacity="0.3" />
            <circle cx="22.5" cy="11" r="5" fill="#ffffff" fill-opacity="0.2" />
          </g>

          <!-- Card Theme 4 -->
          <g transform="translate(150, 0)">
            <rect width="45" height="30" rx="4" fill="#25d366" />
            <rect x="5" y="20" width="35" height="4" rx="1" fill="#ffffff" fill-opacity="0.3" />
            <circle cx="22.5" cy="11" r="5" fill="#ffffff" fill-opacity="0.2" />
          </g>

          <!-- Card Theme 5 -->
          <g transform="translate(200, 0)">
            <rect width="45" height="30" rx="4" fill="#f97316" />
            <rect x="5" y="20" width="35" height="4" rx="1" fill="#ffffff" fill-opacity="0.3" />
            <circle cx="22.5" cy="11" r="5" fill="#ffffff" fill-opacity="0.2" />
          </g>

          <!-- Card Theme 6 -->
          <g transform="translate(250, 0)">
            <rect width="45" height="30" rx="4" fill="#0a66c2" />
            <rect x="5" y="20" width="35" height="4" rx="1" fill="#ffffff" fill-opacity="0.3" />
            <circle cx="22.5" cy="11" r="5" fill="#ffffff" fill-opacity="0.2" />
          </g>
        </g>
      </g>

      <!-- FEATURE CARDS AT BOTTOM -->
      <g transform="translate(0, 210)">
        <!-- Left Feature Box -->
        <g>
          <rect width="145" height="50" rx="6" fill="#13103d" stroke="#25215c" stroke-width="1" />
          <!-- Star Icon -->
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="#00f2fe" transform="scale(0.5) translate(14, 18)" />
          <text x="24" y="20" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#ffffff">Hover Transitions</text>
          <text x="24" y="34" font-family="'Inter', sans-serif" font-size="8" fill="#7a7ba3">Spring &amp; Zoom Effects</text>
        </g>

        <!-- Right Feature Box -->
        <g transform="translate(155, 0)">
          <rect width="149" height="50" rx="6" fill="#13103d" stroke="#25215c" stroke-width="1" />
          <!-- Settings Gear Icon -->
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z" fill="#9b5de5" transform="scale(0.5) translate(14, 18)" />
          <text x="24" y="20" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#ffffff">Share Counts</text>
          <text x="24" y="34" font-family="'Inter', sans-serif" font-size="8" fill="#7a7ba3">Real-time counts api</text>
        </g>
      </g>

      <!-- CHECKBOXES AT BOTTOM -->
      <g transform="translate(2, 285)">
        <!-- Checkbox 1 -->
        <g>
          <rect width="8" height="8" rx="1.5" fill="#00f2fe" />
          <path d="M2.5 4 L4 5.5 L6.5 2.5" stroke="#070520" stroke-width="1.2" fill="none" />
          <text x="14" y="8" font-family="'Inter', sans-serif" font-size="8" font-weight="700" fill="#9da0c2">Gutenberg Block</text>
        </g>

        <!-- Checkbox 2 -->
        <g transform="translate(105, 0)">
          <rect width="8" height="8" rx="1.5" fill="#00f2fe" />
          <path d="M2.5 4 L4 5.5 L6.5 2.5" stroke="#070520" stroke-width="1.2" fill="none" />
          <text x="14" y="8" font-family="'Inter', sans-serif" font-size="8" font-weight="700" fill="#9da0c2">Shortcode</text>
        </g>

        <!-- Checkbox 3 -->
        <g transform="translate(200, 0)">
          <rect width="8" height="8" rx="1.5" fill="#00f2fe" />
          <path d="M2.5 4 L4 5.5 L6.5 2.5" stroke="#070520" stroke-width="1.2" fill="none" />
          <text x="14" y="8" font-family="'Inter', sans-serif" font-size="8" font-weight="700" fill="#9da0c2">Floating Sidebar</text>
        </g>
      </g>

    </g>
  </g>
</svg>`;
