export interface CardItem {
  id: number;
  title: string;
  content: string;
  tag1: string;
  tag2: string;
  state: string;
}

export const CARDS: CardItem[] = [
  {
    id: 1,
    title: "#boraCodar um Kanban 👨‍💻",
    content:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tag1: "rocketseat",
    tag2: "desafio",
    state: "A fazer",
  },
  {
    id: 2,
    title: "Manter a ofensiva 🔥",
    content:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
    tag1: "rocketseat",
    tag2: "",
    state: "A fazer",
  },
  {
    id: 3,
    title: "Almoçar 🥗",
    content:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    tag1: "autocuidado",
    tag2: "",
    state: "A fazer",
  },
  {
    id: 4,
    title: "Conferir o novo desafio 🚀",
    content:
      "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tag1: "rocketseat",
    tag2: "desafio",
    state: "Fazendo",
  },
  {
    id: 5,
    title: "Ser incrível 😎",
    content: "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tag1: "autocuidado",
    tag2: "",
    state: "Fazendo",
  },
  {
    id: 6,
    title: "#boraCodar um Kanban 👨‍💻",
    content:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tag1: "rocketseat",
    tag2: "desafio",
    state: "Feito",
  },
  {
    id: 7,
    title: "Manter a ofensiva 🔥",
    content:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
    tag1: "rocketseat",
    tag2: "",
    state: "Feito",
  },
  {
    id: 8,
    title: "Almoçar 🥗",
    content:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    tag1: "autocuidado",
    tag2: "",
    state: "Feito",
  },
];
