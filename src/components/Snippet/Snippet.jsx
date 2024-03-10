import { Code } from 'bright';

import style from './Snippet.module.css';

export default function Snippet({ children }) {
  return (
    <Code
      className={style.snippet}
      lang="js"
      theme="github-dark"
    >
      {children}
    </Code>
  );
}
