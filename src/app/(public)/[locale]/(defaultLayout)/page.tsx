import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Index({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div>
      <p className="text-white">index</p>
    </div>
  );
}
