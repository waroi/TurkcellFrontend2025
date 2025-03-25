import { Tab, Pane } from "#/atoms/Tab";

import Info from "#/user/Info";
import Applications from "#/user/Applications";

export default function User() {
  return (
    <div className="container">
      <Tab>
        <Pane id="personal-info" tab="Kişisel Bilgiler">
          <Info />
        </Pane>
        <Pane id="preferences" tab="Başvurularım">
          <Applications />
        </Pane>
      </Tab>
    </div>
  );
}
