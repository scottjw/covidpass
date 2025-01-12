import {NextSeo} from 'next-seo';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import Form from '../components/Form';
import Card from '../components/Card';
import Page from '../components/Page';
import Alert from '../components/Alert';
import { useEffect, useState } from 'react';

function Index(): JSX.Element {
    const { t } = useTranslation(['common', 'index', 'errors']);

    const [warning, setWarning] = useState("")
    // If you previously created a vaccination receipt before Sept. 23rd and need to add your date of birth on your vaccination receipt, please reimport your Ministry of Health official vaccination receipt again below and the date of birth will now be visible on the created receipt

    const title = 'Grassroots - Ontario vaccination receipt to your Apple wallet';
    const description = 'Stores it on iPhone with a QR code for others to validate in a privacy respecting way.';

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    url: 'https://grassroots.vaccine-ontario.ca/',
                    title: title,
                    description: description,
                    // images: [
                    //     {
                    //         url: 'https://covidpass.marvinsextro.de/thumbnail.png',
                    //         width: 1000,
                    //         height: 500,
                    //         alt: description,
                    //     }
                    // ],
                    site_name: title,
                }}
                twitter={{
                    handle: '@grassroots_team',
                    site: '@grassroots_team',
                    cardType: 'summary_large_image',
                }}
            />
            <Page content={
                <div className="space-y-5">
                    {warning && <Alert type="error" onClose={() => setWarning(undefined)} message={warning} />}
                    <Card content={
                        <div><p>{t('common:subtitle')}</p><br /><p>{t('common:subtitle2')}</p><br /><p><b>{t('common:update1Date')}</b> - {t('common:update1')}</p><br /><p>{t('common:continueSpirit')}</p></div>
                    }/>
                    <Form/>
                </div>
            }/>
        </>
    )
}


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'index', 'errors'])),
        },
    };
}

export default Index;
