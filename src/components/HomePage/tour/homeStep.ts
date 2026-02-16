import { type Step } from "react-joyride";

export const homeStep: Step[] = [
  {
    target: "body",
    title: "Selamat datang di PortrAI",
    content:
      "Dalam platform ini, Anda akan berinteraksi dengan berbagai skenario yang mencerminkan situasi nyata di tempat kerja — chat dengan rekan kerja, menerima dan membalas email, membuat serta meninjau dokumen, hingga berdiskusi melalui voice call. Mari kenali dulu cara kerjanya.",
    disableBeacon: true,
    placement: "center",
  },
  {
    target: "#notification-tour",
    title: "Pusat Notifikasi",
    content:
      "Di sini Anda bisa melihat semua pesan dan email yang masuk. Klik pada item mana pun untuk membuka detail pesan.",
    disableBeacon: true,
    placement: "left",
    disableScrolling: true,
  },
];
