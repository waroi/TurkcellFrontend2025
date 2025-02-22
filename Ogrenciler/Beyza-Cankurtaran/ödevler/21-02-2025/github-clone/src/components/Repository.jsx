import styled from "styled-components";
import color from "../util/color";

export default function Repository() {
  const Div = styled.div`
    & a {
      display: block;
      color: var(--primary);
      margin-bottom: 10px;
    }

    & span {
      font-size: 14px;

      &:first-of-type {
        margin-right: 25px;
      }
    }
  `;

  return (
    <Div>
      <a href="#">Reverse-Engineering-Farm-Merge-Valley</a>
      <div>
        {/* <span>{color["JavaScript"].color}</span> */}
        <span>Lang++</span>
        <span>Updated on Jan 10</span>
      </div>
    </Div>
  );
}
