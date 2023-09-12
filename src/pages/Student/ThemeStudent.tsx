import Navbar from "../../components/Navbar";

import { Card, Badge, ScrollArea, Divider, Title, Tabs, Group } from '@mantine/core';
function ThemeStudent() {


  return (
    <>
      <Navbar />
      <Title align="center">
        Tema: Nombre del tema
      </Title>
      <Card ml={15} mr={15} mt={45} h={755} shadow="sm" padding="lg" radius="lg" withBorder>
        hola
      </Card>
    </>
  );
}
export default ThemeStudent;
