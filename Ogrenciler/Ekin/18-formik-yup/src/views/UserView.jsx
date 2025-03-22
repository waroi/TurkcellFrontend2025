import { Tab, Pane } from "../components/Tabs";

export default function UserView() {
  return (
    <div className="container">
      <Tab>
        <Pane id="A" tab="TabName">
          AAAAAAAAA
        </Pane>
        <Pane id="B" tab="TabName">
          BBBBBBBBBBB
        </Pane>
        <Pane id="C" tab="TabName">
          CCCCCCCCC
        </Pane>
      </Tab>
    </div>
  );
}
