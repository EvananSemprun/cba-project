import {
  Group,
  Card,
  Title,
  ActionIcon
} from '@mantine/core';

import { IconUser,IconMenu2  } from '@tabler/icons-react';

function Navbar() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb={15}>
        <Group position="apart" spacing="xs">
          <Title order={2}>Colegio Bellas Artes</Title>
          <Group position="apart" spacing="xs">

            <ActionIcon>
              <IconUser  size="99"  />
            </ActionIcon>

            <ActionIcon>
              <IconMenu2  size="99"  />
            </ActionIcon>
          </Group>
        </Group>
      </Card>
    </>
  )
}

export default Navbar