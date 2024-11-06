import js from '../public/asset/JavaScript.svg';
import ts from '../public/asset/TypeScript.svg';
import react from '../public/asset/React-Dark.svg';
import nextjs from '../public/asset/NextJS-Dark.svg';
import python from '../public/asset/Python-Dark.svg';
import sass from '../public/asset/Sass.svg';
import git from '../public/asset/Git.svg';
import html from '../public/asset/HTML.svg';
import css from '../public/asset/CSS.svg';
import styledComponent from '../public/asset/StyledComponents.svg';
import flask from '../public/asset/Flask-Dark.svg';
import tailwind from '../public/asset/TailwindCSS-Dark.svg';

export interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'Javascript', icon: js },
  { name: 'Typescript', icon: ts },
  { name: 'Python', icon: python },
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'React', icon: react },
  { name: 'Next.js', icon: nextjs },
  { name: 'Flask', icon: flask },
  { name: 'Sass', icon: sass },
  { name: 'Tailwind', icon: tailwind },
  { name: 'Styled-Component', icon: styledComponent },
  { name: 'Git', icon: git },
];

export default skills;
