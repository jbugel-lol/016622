import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "016622.xyz",
  description: "Guides for everything related to sailing the seas",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Start here", link: "/start" },
    ],

    sidebar: [
      {
        text: "Safety",
        items: [
          { text: "🏁 Start", link: "/start" },
          { text: "☁️ Cloudflare Proxy", link: "/cloudflare" },
        ],
      },
      {
        text: "Useful",
        items: [
          {
            text: "⌨️ Free KVM",
            link: "/freekvm",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jbugel-lol/016622" },
      { icon: "discord", link: "https://discord.gg/jqruB4FJJ5" },
    ],
  },
  cleanUrls: true,
});
