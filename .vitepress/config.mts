import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "cs-CZ",
  title: "a.doc",
  description: "Dokumentace k aplikaci Arad CNB",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Co?", link: "/what/index" },
      { text: "Jak?", link: "/how/index" },
    ],

    sidebar: {
      "/what/": [
        {
          text: "Struktura a Funkce Aplikace",
          items: [{ text: "Struktura a Funkce Aplikace", link: "/index" }],
        },
      ],
      "/how/": [
        {
          text: "Pracovní Postupy a Scénáře",
          items: [{ text: "Pracovní Postupy a Scénáře", link: "/index" }],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    theme: {
      // dark: "catppuccin-mocha",
      // dark: "github-dark-default",
      dark: "dracula",
      light: "light-plus",
    },
  },
});
