// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nazhifkojaz', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['nazhifkojaz/steam-game-data-collector', 'nazhifkojaz/Flowfree-Solver', 'nazhifkojaz/eiyuden_review', 'nazhifkojaz/my-spotify-usage-analysis'], 
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: { title: 'Nazhif Rizani', description: '', imageURL: '' },
  social: {
    linkedin: 'nazhifkojaz',
    x: 'nazhifkojaz',
    mastodon: '',
    researchGate: 'Muhammad-Nazhif-Rizani-Asrizal',
    facebook: '',
    instagram: 'nazhifkojaz',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nazhifkojaz@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    {
      category: 'Programming Languages',
      items: ['Python', 'C#', 'C++', 'SQL'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      category: 'Data Science & Machine Learning',
      items: [
        'Analytics (Pandas, Numpy, Scikit-learn)',
        'Deep Learning (PyTorch, TensorFlow, Keras)',
        'Visualization (Matplotlib, Seaborn)',
      ],
    },
    {
      category: 'ML Topics',
      items: [
        'Recomender Systems', 'Reinforcement Learning',
        'Natural Language Processing (NLP)',
      ]
    },
    {
    category: 'Game Development',
    items: [
        'Unity', 'Cocos',
      ],
    },
    // {
    //   category: 'Writing / Reporting',
    //   items: [
    //     'Jupyter Notebook', 'LaTeX (Overleaf)',
    //   ]
    // },
    {
      category: 'Other Tools',
      items: [
        'Docker', 'Git',
        'Jupyter Notebook', 
        // 'Orange Data Mining',
        'LaTeX (Overleaf)', 'Poetry', 'Pytest'
      ],
    },
  ],
  languages: [
    { name: 'English', level: 'Fluent (TOEIC IP 980)' },
    { name: 'Japanese', level: 'Conversational (JLPT N3)' },
    { name: 'Indonesian', level: 'Native' }
  ],
  experiences: [
    {
      company: 'Datalabs, Inc.',
      position: 'Research Engineer',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: 'http://datalabs.jp',
    },
    // {
    //   company: 'ISA, Inc.',
    //   position: 'Independent Contractor/Group Leaders',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
    {
      company: 'ISA, inc.',
      position: 'Independent Contractor / Educator',
      from: 'July 2022',
      to: 'March 2024',
      companyLink: 'https://www.isa.co.jp/',
    },
    {
      company: 'Japan Advanced Institute of Science and Technology',
      position: 'Ph.D Researcher',
      from: 'April 2020',
      to: 'June 2023',
      companyLink: 'https://jaist.ac.jp',
    },
    {
      company: 'Olock',
      position: 'Co-founder / Game Programmer',
      from: 'July 2015',
      to: 'February 2020',
      companyLink: 'https://olock.itch.io',
    },
    {
      company: 'Japan Advanced Institute of Science and Technology (JAIST)',
      position: 'Laboratory Assistant',
      from: 'May 2019',
      to: 'February 2020',
      companyLink: 'https://jaist.ac.jp',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Engineer',
      year: '2025',
      credentialId: '3bcd79a003ba570204f434859cc9075f49fd649e',
      link: 'https://www.datacamp.com/statement-of-accomplishment/track/3bcd79a003ba570204f434859cc9075f49fd649e',
      body: 'Issued by DataCamp',
    },
    {
      name: 'Associate AI Engineer for Data Scientists',
      year: '2025',
      credentialId: '0fae9e89fccc67dd7f2d29c086e21ad8d0686892',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/0fae9e89fccc67dd7f2d29c086e21ad8d0686892',
      body: 'Issued by DataCamp',
    },
    {
      name: 'Associate Data Scientist in Python',
      year: '2025',
      credentialId: '463771e03d653c5365afc01104dfc69428c18cc8',
      link: 'https://www.datacamp.com/statement-of-accomplishment/track/463771e03d653c5365afc01104dfc69428c18cc8',
      body: 'Issued by DataCamp',
    },
    // {
    //   name: 'Intro to Machine Learning',
    //   year: '2024',
    //   credentialId: 'intro-to-machine-learning',
    //   link: 'https://www.kaggle.com/learn/certification/nazhifkojaz/intro-to-machine-learning',
    //   body: 'Issued by Kaggle',
    // },
    {
      name: 'Intro to Game AI and Reinforcement Learning',
      year: '2024',
      credentialId: 'intro-to-game-ai-and-reinforcement-learning',
      link: 'https://www.kaggle.com/learn/certification/nazhifkojaz/intro-to-game-ai-and-reinforcement-learning',
      body: 'Issued by Kaggle',
    },

    // LinkedIn Learning
    {
      name: 'Machine Learning and AI Foundations: Recommendations',
      year: '2024',
      credentialId: '4acabff15b6fad4b807d2f07006b49583e038116c3cad01c98384e1bbca915a2',
      link: 'https://www.linkedin.com/learning/certificates/4acabff15b6fad4b807d2f07006b49583e038116c3cad01c98384e1bbca915a2',
      body: 'Issued by LinkedIn Learning',
    },
    {
      name: 'Education Program for Leaders in Data Analytics',
      year: '2023',
      credentialId: null,
      link: 'https://www.jaist.ac.jp/',
      body: 'Issued by Japan Advanced Institute of Science and Technology (JAIST)',
    },
    // {
    //   name: 'Machine Learning Fundamentals',
    //   year: '2023',
    //   credentialId: '32c74921ab236cdaea3629d0383b2e050b22fd31',
    //   link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/32c74921ab236cdaea3629d0383b2e050b22fd31',
    //   body: 'Issued by DataCamp',
    // },
    // {
    //   name: 'Power BI Fundamentals',
    //   year: '2023',
    //   credentialId: '53542708ad1d3d1b9af011dba80f994d34f53b98',
    //   link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/53542708ad1d3d1b9af011dba80f994d34f53b98',
    //   body: 'Issued by DataCamp',
    // },
    // {
    //   name: 'Python Fundamentals',
    //   year: '2023',
    //   credentialId: 'b71aed05809ebce2646554ffd93ab52864c1c881',
    //   link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/b71aed05809ebce2646554ffd93ab52864c1c881',
    //   body: 'Issued by DataCamp',
    // },
    // {
    //   name: 'SQL Fundamentals',
    //   year: '2023',
    //   credentialId: '7cb02b2e140cdb727271d6ed8608b4b8ced3b643',
    //   link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/7cb02b2e140cdb727271d6ed8608b4b8ced3b643',
    //   body: 'Issued by DataCamp',
    // },
    // {
    //   name: 'Data Analyst in Python',
    //   year: '2023',
    //   credentialId: '11a4f30d68352ca754d27c51407eec68366d20d4',
    //   link: 'https://www.datacamp.com/statement-of-accomplishment/track/11a4f30d68352ca754d27c51407eec68366d20d4',
    //   body: 'Issued by DataCamp',
    // },
    // {
    //   name: 'Data Manipulation with Python',
    //   year: '2023',
    //   credentialId: 'b5217853ae4ba3b4042afb454cf321e7c736f12f',
    //   link: 'https://www.datacamp.com/statement-of-accomplishment/track/b5217853ae4ba3b4042afb454cf321e7c736f12f',
    //   body: 'Issued by DataCamp',
    // },
    // {
    //   name: 'Importing and Cleaning Data with Python',
    //   year: '2023',
    //   credentialId: 'e820792418a2b9c3bb53fffff13021464e95e501',
    //   link: 'https://www.datacamp.com/statement-of-accomplishment/track/e820792418a2b9c3bb53fffff13021464e95e501',
    //   body: 'Issued by DataCamp',
    // },
  ],
  educations: [
    {
      institution: 'Japan Advanced Institute of Science and Technology (JAIST)',
      degree: 'Ph.D in Information Science',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Japan Advanced Institute of Science and Technology (JAIST)',
      degree: 'M.Sc in Information Science',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Sriwijaya University',
      degree: 'B.C.S in Informatics Engineering',
      from: '2012',
      to: '2017'
    }
  ],
  publications: [
    {
      title: 'Application of Meta-Gaming Concept to the Publishing Platform: Analysis of the Steam Games Platform',
      conferenceName: '',
      journalName: 'Information',
      authors: 'Rizani, M.N.; Khalid, M.N.A.; Iida, H',
      link: 'https://www.mdpi.com/2078-2489/14/2/110',
      description:
        'Abstract: The digital marketplace has rapidly grown, transitioning the market of video games from physical localized experiences to more networked, expanded, virtual spaces. With a highly competitive business market, platform governance policy allows for the emergence of rapidly growing publishing platforms for digital video games such as the Steam platform. This study demonstrated the importance of the meta-gaming of a platform based on the Steam platform; 18,658 Steam-listed games were acquired and analyzed from the Steam Store, Steam Spy, and Steam achievement databases. A detailed analysis was conducted where key research questions were formulated concerning the game information. This study found that digital badging (i.e., achievements) increases players’ engagement with the publishing platform with good auxiliary data (such as types, rating, releases, and prices). Based on such findings, an opportunity for a new business model is envisioned.',
    },
    {
      title: 'Puzzle Generation and Analysis in FlowFree',
      conferenceName: 'ASEAN Workshop on Information Science and Technology (AWIST 2022)',
      journalName: 'Rizani, M. N., Kang, X., Khalid M. N. A., Iida, H., and Abuluaih, S.',
      authors: '',
      link: 'https://public-page.github.io/awist/index.html',
      description:
        "Abstract: Due to the increasingly demanding appeal for video game, the workload required to develop more contents in game raises. Procedural Content Generation (PCG) is often used in game to allow automatic content generation in games. Though PCG is quite popular in video games, its uses in puzzle games is limited due to puzzle strict constraints. Moreover, evaluating content's qualities such as difficulty is one of important challenge in PCG. In this paper, we discuss about generating puzzle for FlowFree game, analyzing its puzzle quality through Motion-in-Mind $v$ value by the puzzle's properties as well as analyzing their correlation to player perceived difficulty data we collected. Our result shows that the puzzle motion-in-mind measurement able to show high negative correlation to player perceived difficulty, meaning that the more difficult player perceived the puzzle difficulty, the lower v value (decreases in solving easiness) will be. Furthermore, Introducing a reward when the player able to solve the puzzle within a certain time or move limit will increase the engagement as it incentives the player to put more effort in solving the puzzle.",
    },
    // {
    //   title: 'Motion-in-Mind Approach Level Generation in FlowFree',
    //   conferenceName: 'Artificial Intelligence and Entertainment Science Workshop (AIES 2021)',
    //   journalName: '',
    //   authors: 'Rizani, M. N., Liu, C., Abuluaih, S., Khalid, M. N. A., and Iida, H.',
    //   link: 'https://easychair.org/cfp/aies_2021',
    //   description:
    //     '',
    // },
    {
      title: 'Analysis of Business Model Transition Based on Active User and Review Value',
      conferenceName: 'The International Conference on the Foundations of Digital Games (FDG)',
      journalName: '',
      authors: 'Rizani, M. N., Khalid, M. N. A., Iida, H., and Malik, R. F.',
      link: 'https://dl.acm.org/doi/proceedings/10.1145/3402942',
      description:
      'Abstract: The main barrier that prevents players from playing games with the pay-to-play (P2P) business model is the price of the game that they have to pay to own or play the game. Games with a free-to-play (F2P) business model, this barrier does not exist. In this paper, the effects of the business model transition from a P2P to F2P games are analyzed in two popular first-person shooter games based on data of their active user and review. The data are processed into daily active users (DAU), weekly active users (WAU), positive-to-negative review ratio graph, and keywords extraction. The results provide some insights for the game developers, where the effects of F2P transitions and its possible associated risks are identified.',
    },
    {
      title: 'Analysis of Counter-Strike: Global Offensive',
      conferenceName: '2018 International Conference on Electrical Engineering and Computer Science (ICECOS)',
      journalName: '',
      authors: 'Rizani, M. N., Iida, H.',
      link: 'https://doi.org/10.1109/ICECOS.2018.8605213',
      description:
      'Abstract: This paper explores the nature of multiplayer first-person shooter video games, which have been very popular. We have chosen Counter-Strike: Global Offensive (CS:GO) as the benchmark in this study. Many data from official CS:GO tournaments and public match are collected for the analysis, whereas game refinement measure is employed for the assessment with a focus on two aspects: gameplay and rounds system. The results show that the gameplay aspect has lower game refinement, i.e., the game is highly skillful, whereas the rounds system aspect has higher game refinement, i.e., the game is highly stochastic. The combination of the two aspects successfully balances the skillfulness and chance, which results in their popularity. In addition, since their release, CS: GO has sold more than 40 million game copies, awarded as “Best eSports Game of The Year” and updated maps and successfully maintain the game balance of the maps, as measured by game refinement.'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-06L5DZX7T2', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '6524474', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'coffee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
