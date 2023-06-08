import { randomBytes } from "crypto";

export type Columns = {
  status: string;
  cards: Card[];
};

type Card = {
  id: string;
  title: string;
  content: string;
  tags: string[];
};

export const Columns: Columns[] = [
  {
    status: "A fazer",
    cards: [
      {
        id: randomBytes(20).toString("hex"),
        title: "#boraCodar um Kanban 👨‍💻",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["rocketseat", "desafio"],
      },
      {
        id: randomBytes(20).toString("hex"),
        title: "Manter a ofensiva 🔥",
        content:
          "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
        tags: ["rocketseat"],
      },
      {
        id: randomBytes(20).toString("hex"),
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
        id: randomBytes(20).toString("hex"),
        title: "Conferir o novo desafio 🚀",
        content:
          "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
        tags: ["rocketseat", "desafio"],
      },
      {
        id: randomBytes(20).toString("hex"),
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
        id: randomBytes(20).toString("hex"),
        title: "#boraCodar um Kanban 👨‍💻",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["rocketseat", "desafio"],
      },
      {
        id: randomBytes(20).toString("hex"),
        title: "Manter a ofensiva 🔥",
        content:
          "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
        tags: ["rocketseat"],
      },
      {
        id: randomBytes(20).toString("hex"),
        title: "Almoçar 🥗",
        content:
          "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
        tags: ["autocuidado"],
      },
    ],
  },
];
