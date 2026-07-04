const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const chatbotCode = `  <!-- AI Chatbot System -->
  <style>
    #WF_CHAT_TOGGLE {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: #0A0A0A;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10000;
      box-shadow: 0 12px 40px rgba(0,0,0,0.6);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #WF_CHAT_TOGGLE:hover {
      transform: scale(1.1) translateY(-4px);
      border-color: rgba(255,255,255,0.4);
      box-shadow: 0 20px 60px rgba(0,0,0,0.8);
    }
    #WF_CHAT_TOGGLE svg {
      width: 26px;
      height: 26px;
      color: white;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #WF_CHAT_TOGGLE.active {
      background: #113B5E;
      border-color: rgba(255,255,255,0.3);
    }
    #WF_CHAT_TOGGLE.active svg {
      transform: rotate(90deg) scale(0.8);
    }
    #WF_CHAT_TOOLTIP {
      position: fixed;
      bottom: 45px;
      right: 105px;
      background: #FFFFFF;
      color: #0A0A0A;
      padding: 8px 16px;
      border-radius: 8px;
      font-family: 'Satoshi', sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transform: translateX(10px);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      z-index: 10001;
    }
    #WF_CHAT_TOGGLE:hover + #WF_CHAT_TOOLTIP {
      opacity: 1;
      transform: translateX(0);
    }
    #WF_CHAT_TOGGLE.active + #WF_CHAT_TOOLTIP {
      display: none;
    }
    #VG_OVERLAY_CONTAINER {
      position: fixed;
      bottom: 110px;
      right: 30px;
      width: 420px;
      height: 620px;
      max-height: calc(100vh - 160px);
      max-width: calc(100vw - 60px);
      background: #0A0A0A;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 32px 80px rgba(0,0,0,0.8);
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transform: translateY(30px) scale(0.9);
      transform-origin: bottom right;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      backdrop-filter: blur(20px);
    }
    #VG_OVERLAY_CONTAINER.open {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0) scale(1);
    }
    @media (max-width: 480px) {
      #VG_OVERLAY_CONTAINER {
        width: calc(100vw - 40px);
        height: calc(100vh - 140px);
        right: 20px;
        bottom: 100px;
      }
      #WF_CHAT_TOGGLE {
        bottom: 20px;
        right: 20px;
      }
      #WF_CHAT_TOOLTIP {
        display: none;
      }
    }
  </style>

  <div id="WF_CHAT_TOGGLE" aria-label="Open support chat">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  </div>
  <div id="WF_CHAT_TOOLTIP">AI Support</div>

  <div id="VG_OVERLAY_CONTAINER" data-lenis-prevent>
    <!-- Chatbot renders here -->
  </div>

  <script defer>
    (function() {
        const toggle = document.getElementById('WF_CHAT_TOGGLE');
        const container = document.getElementById('VG_OVERLAY_CONTAINER');
        
        toggle.addEventListener('click', () => {
            const isOpen = container.classList.toggle('open');
            toggle.classList.toggle('active');
            
            if (isOpen) {
                toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                if (!window.VG_INITIALIZED) {
                    initializeChatbot();
                }
            } else {
                toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
            }
        });

        function initializeChatbot() {
            window.VG_CONFIG = {
                ID: "H0LaGbfSARPoQxv5Mr1v",
                region: 'na',
                render: 'full-width',
                stylesheets: [
                    "https://cdn.convocore.ai/vg_live_build/styles.css",
                ],
            }
            var VG_SCRIPT = document.createElement("script");
            VG_SCRIPT.src = "https://cdn.convocore.ai/vg_live_build/vg_bundle.js";
            VG_SCRIPT.defer = true;
            document.body.appendChild(VG_SCRIPT);
            window.VG_INITIALIZED = true;
        }
    })()
  </script>\n</body>`;

const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('<!-- AI Chatbot System -->')) {
            console.log(`Updating existing chatbot in ${file}...`);
            // Find the start and end of the previous injection
            const startTag = '<!-- AI Chatbot System -->';
            const endTag = '</body>';
            const startIndex = content.indexOf(startTag);
            const endIndex = content.indexOf(endTag) + endTag.length;
            
            if (startIndex !== -1 && endIndex !== -1) {
                content = content.substring(0, startIndex) + chatbotCode + content.substring(endIndex);
            }
        } else if (content.includes('</body>')) {
            console.log(`Injecting new chatbot into ${file}...`);
            content = content.replace('</body>', chatbotCode);
        }
        
        fs.writeFileSync(filePath, content);
    }
});
