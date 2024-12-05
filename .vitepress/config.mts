import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "cs-CZ",
  title: "a.doc",
  description: "Dokumentace k aplikaci Arad CNB",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Struktura", link: "/structure/main" },
      { text: "Postupy", link: "/procedures/main" },
    ],

    sidebar: {
      "/structure/": [
        {
          text: "Struktura a Funkce Aplikace",
          items: [{ text: "Základ", link: "/structure/main" }],
        },
      ],
      "/procedures/": [
        {
          text: "Pracovní Postupy a Scénáře",
          items: [{ text: "Základ", link: "/procedures/main" }],
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
