import Navbar from "../../components/Navbar";
import { Card, Title, Group, } from '@mantine/core';
import { motion } from 'framer-motion';

const jsonData = [
  {
    "nombre": "Matematica",
    "ruta": "#",
    "Profesor": "Jose gonzalez",
  },
  {
    "nombre": "Fisica",
    "ruta": "#",
    "Profesor": "Jose gonzalez",
  },
  {
    "nombre": "Quimica",
    "ruta": "#",
    "Profesor": "Jose gonzalez",
  },
  {
    "nombre": "Historia",
    "ruta": "#",
    "Profesor": "Jose gonzalez",
  }
];

function HomeStudent() {
  return (
    <>
      <Card w="100%" h="100%" style={{ borderRadius: '15px 0 0 15px' }}>
        <Title mb={15} align="center" order={1}>
          Materias cursadas
        </Title>
        <Group position="center">
          {jsonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01 }} 
              transition={{ duration: 0.5 }} 
              style={{ width: '80%', display: 'flex', justifyContent: 'center' }}
            >
              <Card
                mt={25}
                withBorder
                mb={2}
                style={{ width: '100%' }}
              >

              </Card>
            </motion.div>
          ))}
        </Group>
      </Card>
    </>
  );
}

export default HomeStudent;
