// gitprofile.config.js

const config = {
  aboutMe: {
    description: 'I’m pursuing my PhD degree in Statistics at Department of Statistics, University of Connecticut, advised by Dr. Jun Yan.',
  },
  github: {
    username: 'YingfaX', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'yingfa-xie-1ba57314a',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: '', //TODO
    phone: '',
    email: 'yingfa.xie@uconn.edu',
  },
  resume: {
    fileUrl: 'Yingfa_Xie_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python', 'R', 'SAS', 'SQL', 'MATLAB', 'Java', 'JavaScript', 'C++'
  ],
  interests: [
    'Recurrent Event', 'Survivor Analysis'
  ],
  experiences: [
    {
      company: 'University of Connecticut',
      position: 'Research Assistant',
      from: 'Aug 2021',
      to: 'Present',
    },
    {
      company: 'JOYY Inc.',
      position: 'Data Scientist, Intern',
      description: '',
      from: 'Jun 2019',
      to: 'Aug 2019',
    },
  ],
  education: [
    {
      institution: 'University of Connecticut',
      degree: 'Ph.D. Student, Statistics',
      from: 'Aug 2020',
      to: 'Present',
    },
    {
      institution: 'University of Connecticut',
      degree: 'Master of Science, Applied Financial Mathematics.',
      from: 'Jan 2019',
      to: 'Jul 2020',
    },
    {
      institution: 'George Washington University',
      degree: 'Master of Science, Electrical Engineering',
      from: 'Jan 2017',
      to: 'Dec 2018',
    },
    {
      institution: 'Guangdong University of Technology',
      degree: 'Bachelor of Engineering, Microelectronics',
      from: 'Sep 2012',
      to: 'Jun 2016',
    },
  ],

  researches: [
    {
      title: 'Recurrent events modeling based on a reflected Brownian motion with application to hypoglycemia',
      time: '2022 (Working Paper)',
      authors: 'Xie, Y., Fu, H., Huang, Y., Pozdnyakov, V., and Yan, J.',
      description: 'Proposed to model hypoglycemic events with the first hitting time (FHT) model of reflected Brownian motion'
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  //   id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  // },
  // hotjar: {
  //   id: '2617601', //  Please remove this and use your own id or keep it empty
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};



export default config;
