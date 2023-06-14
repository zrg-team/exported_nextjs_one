import type { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page404Page from '@components/pages/Page404';

export async function getStaticProps(context: NextPageContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      seo: {
        title: 'awesometodo',
        description: '',
      },
    },
  };
}

export default Page404Page;
