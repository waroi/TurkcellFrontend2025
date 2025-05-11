import { useTranslations } from "next-intl";

interface QuickLinkSection {
  header: string;
  links: string[];
}

export const useQuickLinks = (): QuickLinkSection[] => {
  const t = useTranslations();

  return [
    {
      header: t("contact.sections.products.title"),
      links: [
        t("contact.sections.products.items.0"),
        t("contact.sections.products.items.1"),
        t("contact.sections.products.items.2"),
        t("contact.sections.products.items.3"),
        t("contact.sections.products.items.4"),
        t("contact.sections.products.items.5"),
      ],
    },
    {
      header: t("contact.sections.services.title"),
      links: [
        t("contact.sections.services.items.0"),
        t("contact.sections.services.items.1"),
        t("contact.sections.services.items.2"),
        t("contact.sections.services.items.3"),
        t("contact.sections.services.items.4"),
        t("contact.sections.services.items.5"),
      ],
    },
    {
      header: t("contact.sections.support.title"),
      links: [
        t("contact.sections.support.items.0"),
        t("contact.sections.support.items.1"),
        t("contact.sections.support.items.2"),
        t("contact.sections.support.items.3"),
        t("contact.sections.support.items.4"),
        t("contact.sections.support.items.5"),
      ],
    },
    {
      header: t("contact.sections.about.title"),
      links: [
        t("contact.sections.about.items.0"),
        t("contact.sections.about.items.1"),
        t("contact.sections.about.items.2"),
        t("contact.sections.about.items.3"),
        t("contact.sections.about.items.4"),
      ],
    },
  ];
};
