import { getTranslations } from "next-intl/server";
import H2 from "../../atoms/H2/H2"
import "./style.scss"
import Link from "next/link";

const SectionTitle = async ({ section }: { section: string }) => {
    const t = await getTranslations(`${section}`);
    return (
        <div className="section-title">
            <div className="container">
                <H2 text={t('title')} />
                <div>
                    <Link href="/">{t('link_1')}</Link> /
                    <Link href={t('href_2')}>{t('link_2')}</Link>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle