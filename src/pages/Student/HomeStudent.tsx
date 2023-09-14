
import { Card, Group, Title, Text } from '@mantine/core';
import Cardm from '../../components/Student/CardMaterial'
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
function HomeStudent() {
  return (
    <>
      <Card w="100%" h="100%" style={{ borderRadius: '15px 0 0 15px' }}>
        <Group position='apart'>
          <Title mb={15} order={2} fw={500}>
            Mis Cursos
          </Title>
          {/* <Title mb={15} order={4} fw={500}>
            Ver todos <IconArrowRight style={{ paddingTop: 15 }}/>
          </Title> */}
        </Group>
       <Cardm/>
      </Card>
    </>
  );
}

export default HomeStudent;
