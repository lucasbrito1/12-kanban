import { v4 as uuidv4 } from "uuid";
import { randomBytes } from "crypto";

export type Columns = {
  status: string;
  cards: Card[];
};

type Card = {
  id: number;
  title: string;
  content: string;
  tags: string[];
};

export const Columns: Columns[] = [
  {
    status: "A fazer",
    cards: [
      {
        id: 1,
        title: "#boraCodar um Kanban 👨‍💻",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["rocketseat", "desafio"],
      },
      {
        id: 2,
        title: "Manter a ofensiva 🔥",
        content:
          "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
        tags: ["rocketseat"],
      },
      {
        id: 3,
        title: "Almoçar 🥗",
        content:
          "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
        tags: ["autocuidado"],
      },
    ],
  },
  {
    status: "Fazendo",
    cards: [
      {
        id: 4,
        title: "Conferir o novo desafio 🚀",
        content:
          "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
        tags: ["rocketseat", "desafio"],
      },
      {
        id: 5,
        title: "Ser incrível 😎",
        content:
          "Sempre me lembrar de manter minha autenticidade e espalhar amor",
        tags: ["autocuidado"],
      },
    ],
  },
  {
    status: "Feito",
    cards: [
      {
        id: 6,
        title: "#boraCodar um Kanban 👨‍💻",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["rocketseat", "desafio"],
      },
      {
        id: 7,
        title: "Manter a ofensiva 🔥",
        content:
          "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
        tags: ["rocketseat"],
      },
      {
        id: 8,
        title: "Almoçar 🥗",
        content:
          "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
        tags: ["autocuidado"],
      },
    ],
  },
];
