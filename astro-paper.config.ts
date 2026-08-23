import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://efeozhan.dev/",
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
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", href: "https://github.com/EfeOzhan48" },
    { name: "linkedin", href: "https://www.linkedin.com/in/durmuş-efe-özhan-0719a4323/" },
    { name: "mail", href: "mailto:ozhanefe33@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", href: "https://wa.me/?text=" },
    { name: "x", href: "https://x.com/intent/post?url=" },
    { name: "telegram", href: "https://t.me/share/url?url=" },
    { name: "mail", href: "mailto:?subject=See%20this%20post&body=" },
  ],
});