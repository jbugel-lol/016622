import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "016622.xyz",
  description: "Guides for everything",
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
            text: "🆓 Trials",
            link: "/trials",
          },
          {
            text: "⌨️ Free KVM",
            link: "/freekvm",
          },
          {
            text: "⬇️ JDownloader2",
            link: "/jdownloader2",
          },
          {
            text: "📄 PDF",
            link: "/pdf",
          },
          {
            text: "🤖 ReziAI",
            link: "/rezi-ai",
          },
          {
            text: "🤖 MerlinAI",
            link: "/merlin-ai",
          },
          {
            text: "🔽IDM",
            link: "/idm",
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
