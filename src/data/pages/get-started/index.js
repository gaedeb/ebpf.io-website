import videoItems from 'data/pages/get-started/video-data';

const data = {
  pageUrls: {
    en: '/get-started/',
    'fr-fr': '/fr-fr/get-started/',
    'pt-br': '/pt-br/get-started/',
  },
  en: {
    hero: {
      title: 'Get Started with eBPF',
      items: [
        {
          image: 'lab',
          title: 'Try the Lab',
          description:
            'Borrowing the opensnoop example from Liz Rice’s report, this lab teaches you to handle an eBPF tool, watch it loading its components, and even add your own tracing into the source eBPF code.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl:
            'https://play.instruqt.com/embed/isovalent/tracks/ebpf-getting-started?token=em_9nxLzhlV41gb3rKM&show_challenges=true',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Read the Books',
          description:
            'Read the “What is eBPF?” and “Learning eBPF” O’Reilly Books by Liz Rice or BPF Performance Tools by Brendan Gregg to get started. Throughout the books, you will learn what eBPF and why it is so powerful, the capabilities it provides.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Watch the video',
          description:
            'Dive into the history of eBPF with this talk from John Fastabend. Starting in the “early days” of 2014, it covers the main projects, companies, and players that influenced the landscape of Linux networking at the time and how they enabled the creation of eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Read the Documentation to learn more about eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Wikipedia article on eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Ask questions and read answers',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'eBPF community on Reddit',
          description: 'Discuss the eBPF kernel subsystem',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'BPF & XDP Reference Guide',
          description: 'Learn BPF internals and programming',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'BPF Documentation',
          description: 'BPF Documentation in the Linux Kernel',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF Design Q&A',
          description: 'FAQ for kernel-related eBPF questions',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Subscribe',
      afterTitle: 'to bi-weekly eCHO News',
      description: 'Keep up on the latest news and information from the eBPF and Cilium',
      placeholder: 'Email address...',
      buttonTitle: 'Subscribe',
    },
    books: {
      title: 'Explore books on eBPF from the industry experts',
      linkTitle: 'Learn More',
    },
    tutorials: {
      title: 'Dig into the eBPF technology with tutorials from industry experts',
      linkTitle: 'More tutorials',
      items: [
        {
          title: 'eBPF Tracing Tutorials',
          description:
            'Learn how to use eBPF for tracing from just running bcc tools to developing with bpftrace and bcc.',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'XDP Tutorials',
          description:
            'Learn the basic steps needed to effectively write programs for the XDP from what it is to attaching multiple programs to one interface',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Compiler Explorer',
          description:
            'BPF support to run the compiler interactively in your web browser and explore the assembly',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Attend eBPF events to learn from industry experts',
      linkTitle: 'More events',
      linkUrl: '/events/',
    },
    videoGallery: {
      title: 'eBPF introductory videos',
      items: videoItems,
    },
    blog: {
      title: 'Learn more about eBPF in articles from the community',
      linkTitle: 'More articles',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  'fr-fr': {
    hero: {
      title: 'Démarrer avec eBPF',
      items: [
        {
          image: 'lab',
          title: 'Essayez le Lab',
          description:
            'En empruntant l’exemple d’opensnoop de l’ouvrage de Liz Rice, ce lab vous apprend à gérer un outil eBPF, à l’observer lorsqu’il charge ses composants et même à ajouter votre propre traçage dans le code source eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl:
            'https://play.instruqt.com/embed/isovalent/tracks/ebpf-getting-started?token=em_9nxLzhlV41gb3rKM&show_challenges=true',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Lire les livres',
          description:
            'Lisez la section « What is eBPF ? » et  « Learning eBPF» O’Reilly Books de Liz Rice ou BPF Performance Tools de Brendan Gregg pour commencer. À travers ces ouvrages, vous apprendrez ce qu’est eBPF et pourquoi il est si puissant, étudiez les capacités qu’il offre.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Voir la vidéo',
          description:
            'Plongez dans l’histoire d’eBPF avec cette conférence de John Fastabend. À partir des « premiers pas » de 2014, il couvre les principaux projets, entreprises et acteurs qui ont influencé le paysage des réseaux Linux à l’époque et comment ils ont permis la création d’eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Lire la documentation pour en savoir plus sur eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipédia',
          description: 'Article Wikipédia sur eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Poser des questions et trouver des réponses',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Communauté eBPF sur Reddit',
          description: 'Échanger sur eBPF',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'Guide de référence BPF et XDP',
          description: 'Apprendre les rouages et la programmation BPF',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Documentation BPF',
          description: 'Documentation BPF dans le noyau Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'Questions et réponses sur la conception de BPF',
          description: 'FAQ pour les questions eBPF liées au noyau',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Abonnez-vous',
      afterTitle: 'aux nouvelles d’eCHO une fois toutes les deux semaines',
      description:
        'Tenez-vous au courant des dernières actualités et informations d’eBPF et de Cilium',
      placeholder: 'Adresse e-mail...',
      buttonTitle: 'S’abonner',
    },
    books: {
      title: 'Explorez les livres sur eBPF des experts de l’industrie',
      linkTitle: 'Apprendre encore plus',
    },
    tutorials: {
      title: 'Explorez la technologie eBPF avec des tutoriels par les experts',
      linkTitle: 'Plus de tutoriels',
      items: [
        {
          title: 'Tutoriels de traçage eBPF',
          description:
            'Apprenez à utiliser eBPF pour le traçage, de l’exécution d’outils bcc au développement avec bpftrace et bcc.',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Tutoriels XDP',
          description:
            'Apprenez les étapes de base nécessaires pour écrire efficacement des programmes pour XDP, depuis les bases jusqu’à l’attache de plusieurs programmes sur une interface.',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Exploration du compilateur',
          description:
            'Compiler du code BPF de manière interactive dans votre navigateur web et explorer le code assembleur.',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Participez aux événements eBPF pour apprendre des experts du secteur',
      linkTitle: 'Plus d’événements',
      linkUrl: '/fr-fr/events/',
    },
    videoGallery: {
      title: 'Vidéos d’introduction eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Apprenez-en davantage sur eBPF grâce aux articles de la communauté',
      linkTitle: 'Plus d’articles',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  'pt-br': {
    hero: {
      title: 'Comece com eBPF',
      items: [
        {
          image: 'lab',
          title: 'Experimente o laboratório',
          description:
            'Tomando emprestado o exemplo do opensnoop do relatório de Liz Rice, este laboratório ensina como manipular uma ferramenta eBPF, observá-la carregando seus componentes e até mesmo adicionar seu próprio rastreamento ao código-fonte eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl:
            'https://play.instruqt.com/embed/isovalent/tracks/ebpf-getting-started?token=em_9nxLzhlV41gb3rKM&show_challenges=true',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Leia os Livros',
          description:
            'Leia os livros "What is eBPF?" e "Learning eBPF" da O’Reilly, de Liz Rice, ou "BPF Performance Tools" de Brendan Gregg para começar. Ao longo dos livros, você aprenderá o que é eBPF e por que ele é tão poderoso, e as capacidades que ele oferece.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Assista ao vídeo',
          description:
            'Mergulhe na história do eBPF com essa palestra de John Fastabend. Começando nos "primeiros dias" de 2014, ela aborda os principais projetos, empresas e atores que influenciaram o cenário de redes do Linux na época e como eles possibilitaram a criação do eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Leia a Documentação para aprender mais sobre eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Artigo da Wikipedia sobre eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Faça perguntas e leia respostas',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Comunidade eBPF no Reddit',
          description: 'Discuta o subsistema do kernel eBPF',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'BPF & XDP Reference Guide',
          description: 'Aprenda sobre a parte interna do BPF e a programação',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Documentação BPF',
          description: 'Documentação BPF no Kernel Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF Design Q&A',
          description: 'FAQ para perguntas relacionadas ao kernel eBPF',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Assine',
      afterTitle: 'as Notícias quinzenais do eCHO',
      description:
        'Mantenha-se atualizado sobre as últimas notícias e informações do eBPF e Cilium',
      placeholder: 'Endereço de email...',
      buttonTitle: 'Assine',
    },
    books: {
      title: 'Explore livros sobre eBPF dos especialistas do setor',
      linkTitle: 'Aprender mais',
    },
    tutorials: {
      title: 'Aprofunde-se na tecnologia eBPF com tutoriais de especialistas do setor',
      linkTitle: 'Mais tutoriais',
      items: [
        {
          title: 'Tutoriais de Rastreamento eBPF',
          description:
            'Aprenda a usar o eBPF para rastreamento, desde a execução de ferramentas bcc até o desenvolvimento com bpftrace e bcc',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Tutoriais XDP',
          description:
            'Aprenda os passos básicos necessários para escrever programas eficazes para o XDP, desde o que é até a anexação de vários programas a uma interface',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Compiler Explorer',
          description:
            'Suporte BPF para executar o compilador interativamente no navegador e explorar o assembly',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Participe de eventos do eBPF para aprender com especialistas da indústria',
      linkTitle: 'Mais eventos',
      linkUrl: '/pt-br/events/',
    },
    videoGallery: {
      title: 'Vídeos introdutórios do eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Saiba mais sobre o eBPF em artigos da comunidade',
      linkTitle: 'Mais artigos',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
};

export default data;
