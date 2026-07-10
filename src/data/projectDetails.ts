import type { ProjectDetail } from "../types";

export const projectsDetails: ProjectDetail[] = [
    {
        id: 1, // Fin-Cntrl
        sections: [
            {
                title: "Sobre o projeto",
                text: "..." // seu texto aqui
            }
        ]
    },
    {
        id: 2, // Electrostatic Discharge
        sections: [
            {
                title: "Sobre o projeto",
                text: "..." // seu texto aqui
            },
            {
                title: "Arquitetura",
                subtitle: "Como o sistema foi construído",
                // image: esdArchitecture,
                text: "..." // seu texto aqui
            },
            {
                title: "Desafios técnicos",
                list: [
                    "...",
                    "..."
                ]
            }
        ]
    }
]