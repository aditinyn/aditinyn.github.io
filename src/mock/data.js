import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aditi Narayan', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aditinyn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    //{
      //id: nanoid(),
      //name: 'envelope',
      //url: 'mailto:aditinyn@gmail.com',
    //},
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/adiii.narayan/',
    },
    {
      id: nanoid(),
      name: 'discord',
      url: 'https://discord.com/users/637715696549232656',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aditi-narayan-089a861a4/',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCHNTBz5VNK5GFQ-_sSItPNA',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
