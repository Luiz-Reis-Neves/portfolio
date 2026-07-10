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
            text: "Sistema interno desenvolvido para a Venttos Electronics, substituindo o processo manual de validação eletrostática (ESD) no chão de fábrica. Além da validação em si, o sistema evoluiu para uma plataforma completa: dashboard administrativo com auditoria de logs, controle de colaboradores ativos e alertas automáticos por email para quem não cumpre a validação dentro do prazo estabelecido."
        },
        {
            title: "Funcionalidades",
            list: [
                "Identificação de colaboradores via integração com API do TOTVS (matrícula ou CPF)",
                "Escolha do tipo de teste: pulseira (mão) ou calcanheira (pé)",
                "Comunicação em tempo real entre hardware e interface via Socket.io",
                "Isolamento multi-estação com Socket.io Rooms — cada estação recebe apenas o sinal do seu próprio dispositivo ESD",
                "Identificação de unidade fabril (VTE, VTT, VAC) via parâmetro de URL",
                "Registro automático de logs no SQL Server com matrícula, nome, setor, turno, unidade e resultado",
                "Dashboard com autenticação, filtros por nome, setor, turno, unidade, resultado e data",
                "Paginação e exportação de logs em CSV e PDF (filtrado ou dia completo)",
                "Controle de colaboradores ativos com preenchimento automático via TOTVS, status ativo/férias e coluna de status do teste do dia",
                "Alertas automáticos por email (com PDF anexo) para colaboradores sem teste aprovado nos horários de corte (07:15 e 13:45)",
                "Backend em TypeScript com tratamento de erros categorizado por status HTTP (400, 409, 500) via wrapper reutilizável",
                "Sistema de logging estruturado (Pino) com timestamp, contexto e stack trace gravados em arquivo — rastreabilidade completa de falhas em produção",
                "Gerenciamento de processos em produção com PM2 — tanto no servidor central quanto em cada Raspberry Pi, com restart automático em falha e inicialização no boot via systemd",
                "Monitoramento de infraestrutura em tempo real via PM2 Event Bus, com alertas automáticos por email em caso de queda, reinício ou retorno online do servidor",
                "Deploy automatizado via script único (SSH + build + restart) para atualização em produção com um comando",
                "Interface em modo quiosque com abertura automática no boot do Raspberry Pi"
            ]
        },
        {
            title: "Tela inicial (Idle)",
            text: "Exibe o manual de uso enquanto nenhum colaborador está realizando o teste.",
            image: "" // seu caminho aqui
        },
        {
            title: "Modal de escolha do teste",
            text: "Após identificação, o colaborador escolhe entre pulseira (1) ou calcanheira (2).",
            image: "" // seu caminho aqui
        },
        {
            title: "Teste em andamento",
            text: "Indicador visual com animação de scan enquanto o teste está sendo realizado.",
            image: "" // seu caminho aqui
        },
        {
            title: "Resultado — Aprovado",
            text: "Exibido quando o colaborador passa no teste dentro do limite de resistência.",
            image: "" // seu caminho aqui
        },
        {
            title: "Resultado — Reprovado",
            text: "Exibido quando o colaborador não passa no teste. O sistema reseta automaticamente após 3 segundos.",
            image: "" // seu caminho aqui
        },
        {
            title: "Dashboard — Auditoria de logs",
            text: "Painel administrativo com todos os testes registrados, filtros por nome, setor, turno, unidade, resultado e data, paginação e exportação em CSV/PDF.",
            image: "" // seu caminho aqui
        },
        {
            title: "Controle de colaboradores",
            text: "Cadastro de colaboradores ativos com preenchimento automático de nome, setor e turno via API do TOTVS a partir da matrícula. Permite marcar férias, remover colaborador e exibe o status do teste do dia de cada um.",
            image: "" // seu caminho aqui
        },
        {
            title: "Arquitetura",
            subtitle: "Servidor central + estações distribuídas",
            text: "O frontend (React, TypeScript, Tailwind, Framer Motion) e o backend (Node.js, Express, TypeScript, Socket.io, mssql) rodam num servidor Ubuntu 24.04 em container LXC, junto com o SQL Server. Cada estação de teste tem um Raspberry Pi 4B rodando um script GPIO que detecta o sinal PASS do dispositivo SK-SL032 e envia via HTTP POST pro backend, que processa o resultado e atualiza a interface em tempo real via Socket.io."
        },
        {
            title: "Multi-estação",
            text: "O isolamento entre estações é feito via Socket.io Rooms. Cada monitor acessa o frontend com um parâmetro de URL único (?estacao=N), e cada Raspberry Pi tem um ESTACAO_ID fixo no .env. O backend roteia o sinal apenas para a sala da estação correspondente, evitando que o resultado de uma estação apareça em outra."
        },
        {
            title: "Alertas de conformidade",
            text: "Dois jobs agendados (07:15 e 13:45) verificam quais colaboradores ativos não possuem teste aprovado dentro da janela do turno. A lista é gerada em PDF (PDFKit) e enviada por email em HTML corporativo via Nodemailer, permitindo acompanhamento em tempo real de quem está fora de conformidade."
        },
        {
            title: "Confiabilidade em produção",
            subtitle: "PM2, logging estruturado e monitoramento ativo",
            text: "Todos os processos críticos — backend no servidor e scripts GPIO em cada Raspberry Pi — rodam sob PM2, com restart automático em falha e boot automático via systemd. Erros são capturados por um wrapper centralizado, categorizados por tipo (validação, conflito, falha de servidor) e gravados em arquivo com Pino (timestamp, contexto e stack trace), garantindo rastreabilidade completa para debugging em produção. Um script dedicado (monitor.js) escuta o PM2 Event Bus em tempo real e dispara alertas por email a cada queda, reinício ou retorno online do processo."
        },
        {
            title: "Desafio técnico — Contaminação de sinal entre estações",
            subtitle: "Múltiplos postos de teste simultâneos, um único backend",
            text: "Com mais de uma estação testando ao mesmo tempo, o resultado de um dispositivo GPIO podia vazar para a tela de outra estação — todas escutavam o mesmo canal Socket.io. Resolvido com Socket.io Rooms: cada estação entra em uma sala isolada via parâmetro de URL (?estacao=N), e cada Raspberry Pi carrega o mesmo ESTACAO_ID em seu .env. O backend roteia o evento exclusivamente para a sala correspondente, permitindo que um único build atenda qualquer quiosque da fábrica sem risco de cruzamento de dados."
        },
        {
            title: "Desafio técnico — Hardware sem distinção de tipo de teste",
            subtitle: "Sinal genérico do dispositivo SK-SL032",
            text: "O testador físico emite apenas um sinal binário de aprovação (PASS/FAIL), sem informar se o teste foi feito na pulseira (mão) ou na calcanheira (pé). Como essa informação é obrigatória no log, a solução foi manter o tipo de teste escolhido como estado no frontend no momento da escolha, associando-o ao sinal recebido do hardware antes de persistir o resultado — sem exigir nenhuma mudança no dispositivo físico."
        },
        {
            title: "Desafio técnico — Conformidade sem persistir estado",
            subtitle: "Como saber quem testou, sem precisar 'resetar' nada no banco",
            text: "A regra de negócio exige dois testes por colaborador ao longo do dia, em duas janelas fixas (manhã e tarde), sem misturar aprovações de uma janela com a outra. A primeira abordagem cogitada envolvia resetar um status no banco a cada janela — introduzindo um job extra e risco de dessincronia. A solução final elimina o reset por completo: a conformidade é calculada dinamicamente com uma query que verifica a existência de um log aprovado dentro do intervalo de tempo da janela (WHERE data_hora BETWEEN...). O 'reset' é uma propriedade natural da janela de tempo, não uma operação que precisa ser executada."
        },
        {
            title: "Desafio técnico — Dados inconsistentes vindos do TOTVS",
            subtitle: "Mais de 20 variações de texto para os mesmos 6 turnos",
            text: "O campo de turno vindo do sistema corporativo (TOTVS) não segue um padrão fixo — a mesma categoria aparece escrita de formas diferentes (\"2° TURNO\", \"2 TURNO\", \"2 TURNO ESPECIAL\"). Filtrar por igualdade exata deixava a maioria dos registros de fora. A solução foi uma função de categorização por expressão regular, que agrupa qualquer variação de escrita nas categorias reais de negócio (Comercial, 1° a 3° Turno, Estagiário, Jovem Aprendiz), com a lista de categorias extraída para uma constante única — extensível para novos turnos sem alterar a lógica de categorização."
        },
        {
            title: "Desafio técnico — Causa raiz de uma falha em cascata em produção",
            subtitle: "Debugging sob produção real, não em ambiente controlado",
            text: "Após um deploy, o processo em produção entrou em crash loop reportando falha na biblioteca de logging (Pino), mascarando o erro original. Investigando a stack trace por camadas, a causa raiz foi isolada: a pasta de logs estava listada no .gitignore e, por isso, nunca existiu no servidor — o Pino falhava ao tentar abrir um arquivo em um diretório inexistente, e essa falha durante o processo de saída do Node gerava um segundo erro que escondia o primeiro. A correção definitiva garante a criação automática do diretório de logs na inicialização do processo, eliminando a dependência de uma etapa manual em qualquer ambiente novo."
        }
    ]
}
]