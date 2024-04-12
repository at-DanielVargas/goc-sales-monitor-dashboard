import { useSocket, useSocketEvent } from "socket.io-react-hook";
import { useState } from "react";
import { AppShell, Burger, Group, Indicator, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome2 } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { Atoms } from "../../atoms";

function AppLayout() {
  const { socket, error } = useSocket("http://localhost:3000");
  const [messages, setMessages] = useState<Record<string, unknown>[]>([]);
  const onMessage = (message: Record<string, unknown>) =>
    setMessages((state) => [...state, message]);
  useSocketEvent<Record<string, unknown>>(socket, "sale", { onMessage });
  const [opened, { toggle }] = useDisclosure();

  console.log({ messages, error });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 280, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Indicator
            inline
            label="Orders Monitor"
            size={12}
            color="gray"
            position="bottom-end"
          >
            <Atoms.Logo />
          </Indicator>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <NavLink
              key={index}
              href="#required-for-focus"
              label="With icon"
              leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;
