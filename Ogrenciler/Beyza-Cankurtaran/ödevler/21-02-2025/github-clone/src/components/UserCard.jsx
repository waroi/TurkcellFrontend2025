import styled from "styled-components";

export default function UserCard() {
  const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--white);
    box-shadow: 0 0 20px var(--shadow);
    padding: 25px;
    border-radius: 15px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    & img {
      width: 100%;
      border-radius: 100%;
      border: 5px solid var(--text);
      margin-bottom: 20px;
    }

    & h2 {
      font-size: 20px;
    }

    & h3 {
      color: var(--primary);
      font-size: 17px;
    }

    & p {
      font-size: 14px;
    }
  `;

  const Button = styled.a`
    background-color: var(--primary);
    color: var(--white);
    padding: 5px 10px;
    border-radius: 15px;
    text-align: center;
  `;

  return (
    <Aside>
      <img
        src="https://avatars.githubusercontent.com/u/83162864?v=4"
        alt="Profile"
      />
      <h2>Ekin Aslan</h2>
      <h3>
        <a href="#">@ekinaslan</a>
      </h3>
      <p>biography Lorem, ipsum dolor.</p>
      <p>
        <i className="fa-solid fa-users"></i> 19 Followers
        <br />
        <i className="fa-solid fa-user-plus"></i> 23 Following
      </p>
      <Button href="#">View Profile</Button>
    </Aside>
  );
}
