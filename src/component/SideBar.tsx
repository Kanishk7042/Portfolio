import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Burger, useMatches } from "@mantine/core";

import { navLinks } from "./Header";

function SideBar() {
  const [opened, { toggle }] = useDisclosure(false);

  const size = useMatches({
    xs: "md",
    sm: "lg",
  });

  return (
    <>
      {/* Drawer is hidden on medium and larger screens */}
      <Drawer.Root
        className="bs:hidden !-z-10"
        position="right"
        opened={opened}
        onClose={toggle}
        size="50vw"
      >
        <Drawer.Overlay className="!z-0 !backdrop-opacity-85 blur-sm" />
        <Drawer.Content className="!z-0" bg="#112240">
          <Drawer.Body
            bg="#112240"
            className="mt-20 xs:mt-24  flex flex-col gap-5"
          >
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {/* Button to open Drawer is hidden on medium and larger screens */}

      <Burger
        className="bs:!hidden !z-50 relative "
        color="#64ffda"
        opened={opened}
        onClick={toggle}
        size={size}
      />
    </>
  );
}

export default SideBar;
