import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Index({params: {locale}}: Props) {
  setRequestLocale(locale);

  const t = useTranslations('Index');

  return <>
    <h2>blog</h2>
  </>;
}
