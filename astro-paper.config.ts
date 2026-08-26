import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://efeozhan.dev/",
    author: "Durmuş Efe Özhan",
    profile: "https://efeozhan.dev/",
    description: "Hey! I'm Efe. Welcome to my personal devlog where I document my engineering journey, projects, and experiments.",
    title: "Durmuş Efe Özhan", // <-- Burada güncellendi
    ogImage: "astropaper-og.jpg",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/EfeOzhan48" },
    { 
      name: "linkedin", 
      url: "https://www.linkedin.com/in/durmu%C5%9F-efe-%C3%B6zhan-0719a4323/" 
    },
    { name: "mail", url: "mailto:ozhanefe33@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});