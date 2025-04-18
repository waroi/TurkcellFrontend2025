'use client';

import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import LocaleSwitcherSelect from '../../atoms/LocaleSwitcherSelect.tsx/LocaleSwitcherSelect';
import './LocaleSwitcher.scss'

const LocaleSwitcher = () => {
    const locale = useLocale();
    const t = useTranslations('LocaleSwitcher');

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
            {routing.locales.map((cur) => (
                <option key={cur} value={cur}>
                    {t(`locale.${cur}`)}
                </option>
            ))}
        </LocaleSwitcherSelect>
    );
};

export default LocaleSwitcher;