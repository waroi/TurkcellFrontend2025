import { useTranslations } from "next-intl";
import { Container } from "react-bootstrap";
import SocialIcons from "../Logos/SocialIcons";

const HeaderBottom = () => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-surface py-1 fixed-bottom">
      <Container className="d-flex justify-content-between align-items-center">
        {" "}
        <div>{t("copyright")}</div>
        <div className="d-flex justify-content-between align-items-center gap-4">
          <SocialIcons />
        </div>
      </Container>
    </div>
  );
};

export default HeaderBottom;
