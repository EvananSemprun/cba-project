
import { Card, Title, } from '@mantine/core';
import Cardm from '../../components/CardMaterial'

function HomeStudent() {
  return (
    <>
      <Card w="100%" h="100%" style={{ borderRadius: '15px 0 0 15px' }}>
        <Title mb={15} align="center" order={1}>
          Materias cursadas
        </Title>
       <Cardm/>
      </Card>
    </>
  );
}

export default HomeStudent;
