import { Wrapper, MenuButton } from './footer-styled';

export default function Footer({ menu, setMenu }) {
  return (
    <>
      <Wrapper>
        <MenuButton onClick={() => setMenu(!menu)}>Menu</MenuButton>
      </Wrapper>
    </>
  );
}
