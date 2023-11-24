import { IQuestion } from "../utils/types/quiz.type";

export const initialQuoestions: IQuestion[] = [
  {
    id: 1,
    question: "1. Apa kepanjangan HTML",
    options: [
      {
        label: "Hyper mackup language",
        isCorrect: true,
      },
      {
        label: "Hyper salah",
        isCorrect: false,
      },
      {
        label: "Hyper apa aja",
        isCorrect: false,
      },
      {
        label: "Hyper hehe",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "2. Apa fungsi utama tag <p> dalam HTML?",
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
    question: "3. Apa singkatan dari CSS?",
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
    question: "4. Apa peran JavaScript dalam pengembangan web?",
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
    question: "5. Apa yang dimaksud dengan HTTP?",
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
