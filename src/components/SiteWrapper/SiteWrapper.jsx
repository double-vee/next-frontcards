import style from './SiteWrapper.module.css';

export default function SiteWrapper({ children }) {
  return <div className={style.wrapper}>{children}</div>;
}
