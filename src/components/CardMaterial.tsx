import Navbar from "../../components/Navbar";
import { Card, Title, Progress, Text, Group, Button, ActionIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
const jsonData = [
    {
        "nombre": "Matematica",
        "ruta": "#",
        "Profesor": "Jose gonzalez",
        "Progresoactividades": 50,
        "Color": "#DCDDFC"

    }
    , {
      "nombre": "Fisica",
      "ruta": "#",
      "Profesor": "Jose gonzalez",
      "Progresoactividades": 70,
      "Color": "#F7CAB7"

    }, {
      "nombre": "Quimica",
      "ruta": "#",
      "Profesor": "Jose gonzalez",
      "Progresoactividades": 20,
      "Color": "#b7f7ca"

    },
    {
      "nombre": "Historia",
      "ruta": "#",
      "Profesor": "Jose gonzalez",
      "Progresoactividades": 10,
      "Color": "#f7eab7"

    }
];

function CardMaterial() {
    return (
        <>

            <Group position="center">
                {jsonData.map((item, index) => (

                    <Card
                        key={index}
                        w={300}
                        h={270}
                        mr={15}
                        shadow="sm"
                        radius="lg"
                        style={{ 
                            backgroundColor: item.Color ,
                            boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.2)',
                        }} 
                        withBorder
                    >

                        <Group position="apart" mt="md" mb="xs">
                            <Title mb={15} order={3}>
                                {item.nombre}
                            </Title>

                        </Group>
                        <Title mb={5} order={5}>
                            Progreso
                        </Title>
                        <Progress label={parseFloat(item.Progresoactividades)} size="xl" radius="xl" mb={5} color="dark" value={item.Progresoactividades} />

                        <Group position="apart" mt={95}>

                            <Text fw={700}>
                                {item.Profesor}
                            </Text>
                            <a href="/MateriaStudent">

                            <ActionIcon variant="transparent">
                                <IconArrowRight size="3.125rem" />
                            </ActionIcon>
                            </a>

                        </Group>
                    </Card>


                ))}
            </Group>

        </>
    );
}

export default CardMaterial;





