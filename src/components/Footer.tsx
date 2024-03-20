import { useContext } from 'react';
import { translate } from '../utils/translate';
import { LangContext } from './LangContext';

export const Footer = () => {
  const { lang } = useContext(LangContext);

  return (
    <footer>
      {translate('footer.greating', lang)}
    </footer>
  );
}
