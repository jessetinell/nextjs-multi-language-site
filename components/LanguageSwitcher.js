import NextLink from 'next/link';
import { linkResolver, hrefResolver } from 'prismic-configuration';

const AltLangs = ({ altLangs = [] }) =>
  altLangs.map((altLang) => {
    return (
      <li key={altLang.id}>
        <NextLink
          locale={altLang.lang}
          as={linkResolver(altLang)}
          href={hrefResolver(altLang)}
          passHref
        >
          <a className={`flag-icon flag-icon-${altLang.lang.slice(-2)}`} />
        </NextLink>
      </li>
    );
  });

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />;

export default LanguageSwitcher;
