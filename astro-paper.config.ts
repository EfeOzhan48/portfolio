import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    website: "https://efeozhan.dev/",
    author: "Durmuş Efe Özhan",
    profile: "https://efeozhan.dev/",
    desc: "Kişisel portfolyo, projeler ve mühendislik/yazılım notları.",
    title: "Efe Özhan",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    postPerIndex: 4,
    postPerPage: 3,
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
      url: "https://github.com/EfeOzhan48/portfolio/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/EfeOzhan48" },
    { name: "linkedin", url: "https://www.linkedin.com/in/durmuş-efe-özhan-0719a4323/" },
    { name: "mail", url: "mailto:ozhanefe33@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});