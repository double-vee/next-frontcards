import style from './MainWrapper.module.css';

export default function MainWrapper({ children }) {
  return <div className={style.wrapper}>{children}</div>;
}
