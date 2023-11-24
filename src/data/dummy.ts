import { IQuestion } from "../utils/types/quiz.type";

export const initialQuoestions: IQuestion[] = [
  {
    id: 1,
    question: "Apa kepanjangan HTML",
    options: [
      {
        label: "Hyper Text Markup Language",
        isCorrect: true,
      },
      {
        label: "Hyper Text Multiple Language",
        isCorrect: false,
      },
      {
        label: "Hyper Tool Multi Language",
        isCorrect: false,
      },
      {
        label: "Hyper Text Markup Level",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "Apa fungsi utama tag <p> dalam HTML?",
    options: [
      {
        label: "Paragraph",
        isCorrect: true,
      },
      {
        label: "Perintah",
        isCorrect: false,
      },
      {
        label: "Penyisipan gambar",
        isCorrect: false,
      },
      {
        label: "Penting",
        isCorrect: false,
      },
    ],
  },

  {
    id: 3,
    question: "Apa singkatan dari CSS?",
    options: [
      {
        label: "Computer Style Sheet",
        isCorrect: false,
      },
      {
        label: "Cascading Style Sheet",
        isCorrect: true,
      },
      {
        label: "Coding Style Sheet",
        isCorrect: false,
      },
      {
        label: "Creative Style Sheet",
        isCorrect: false,
      },
    ],
  },

  {
    id: 4,
    question: "Apa peran JavaScript dalam pengembangan web?",
    options: [
      {
        label: "Menyusun layout halaman",
        isCorrect: false,
      },
      {
        label: "Mengatur tata letak",
        isCorrect: false,
      },
      {
        label: "Memberikan interaktivitas",
        isCorrect: true,
      },
      {
        label: "Mengelola basis data",
        isCorrect: false,
      },
    ],
  },

  {
    id: 5,
    question: "Apa yang dimaksud dengan HTTP?",
    options: [
      {
        label: "HyperText Transfer Protocol",
        isCorrect: true,
      },
      {
        label: "High Transfer Protocol",
        isCorrect: false,
      },
      {
        label: "HyperText Translation Protocol",
        isCorrect: false,
      },
      {
        label: "Highway Transfer Protocol",
        isCorrect: false,
      },
    ],
  },
];
