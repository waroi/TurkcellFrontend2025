import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import PrimaryButton from "@/app/_components/ui/Buttons/PrimaryButton";
import { useTranslations } from "next-intl";
import React from "react";


type NavListProps = {
  item: string;
  selectedKey?: string;
  parentKey?:string;
  location?:string;
  setSelectedKey: (key: string) => void;
};

const NavList = ({ item, selectedKey, setSelectedKey,parentKey,location }: NavListProps) => {
  const t = useTranslations(location);

  return (
    <>
      {item=== selectedKey ? (
        <PrimaryButton className="px-4">{t(`${parentKey}.${item}`) || item}</PrimaryButton>
      ) : (
        <ButtonDefault className="text-secondary px-4" onClick={() => setSelectedKey(item)}>
          {t(`${parentKey}.${item}`)|| item}
        </ButtonDefault>
      )}
    </>
  );
};

export default NavList;
