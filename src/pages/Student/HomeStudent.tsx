import Navbar from "../../components/Navbar";
import { Card, Title, Text, Button, Grid, Group, } from '@mantine/core';
import { motion } from 'framer-motion';


const jsonData = [
    {
        "nombre": "Matematica",
        "ruta": "#",
        "Profesor": "Jose gonzalez",

    }, {
        "nombre": "Fisica",
        "ruta": "#",
        "Profesor": "Jose gonzalez",

    }, {
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
            <Navbar />
            <Title mb={15} align="center" order={1}>
               Materias cursadas
            </Title>



            <Grid gutter="lg" style={{ justifyContent: 'center' }}>
                {jsonData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }} // Animación inicial
                        animate={{ opacity: 1, scale: 1 }} // Animación al cargar
                        whileHover={{ scale: 1.2 }} // Animación al hacer hover
                        transition={{ duration: 0.5 }} // Duración de la animación
                        style={{ minWidth: '250px', maxWidth: '400px' }}
                    >
                        <Card
                            mt={25}
                            shadow="xl"
                            padding="lg"
                            mb={2}
                            ml={35}
                            mr={35}
                            style={{ width: '85%' }}
                        >

                            <Title fz={25} mb={15} align="center" order={1}>
                                {item.nombre}
                            </Title>
                            <Group position="apart" mb={15}>

                                <Text variant="h4" >
                                    Profesor :
                                </Text>

                                <Text variant="h4" >
                                    {item.Profesor}
                                </Text>

                            </Group>
                            <Group position="center">

                                <Button component="a" href={item.ruta}  >
                                    Entrar
                                </Button>
                            </Group>
                        </Card>
                    </motion.div>
                ))}
            </Grid>
        </>
    );
}
export default HomeStudent;
