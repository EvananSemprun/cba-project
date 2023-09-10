import Navbar from "../../components/Navbar";
import { Card, Badge, ScrollArea, Divider, Title, Group, Button } from '@mantine/core';


function MateriaStudent() {
    return (
        <>
            <Navbar />
            <Title align="center">
                Matematicas
            </Title>
            <Group position="center">

                <Button color="indigo" >Lapso N1</Button>

                <Button color="indigo" >Lapso N2</Button>

                <Button color="indigo" >Lapso N3</Button>
            </Group>

            <Group mt={155} position="center">

                <Divider variant="dashed" orientation="vertical" size="lg" />

                <ScrollArea h={600} >

                    <Card h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                        <Group position="apart" >

                            <Group >
                                <Card style={{ backgroundColor: "#F03E3E", border: "2px solid red" }} h={95} shadow="sm" radius="md" withBorder >
                                </Card>
                                <Title  mt={-55} align="center">
                                    Examen: Examen 1
                                </Title>
                            </Group>
                            <Badge variant="dot" mt={-75} color="red">No entregado</Badge>
                        </Group>

                    </Card>

                    <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                        <Group position="apart" >

                            <Group >
                                <Card style={{ backgroundColor: "#1C7ED6", border: "2px solid #1C7ED6" }} h={95} shadow="sm" radius="md" withBorder >
                                </Card>
                                <Title mt={-55} align="center">
                                    Tarea: Ejercicios
                                </Title>
                            </Group>
                            <Badge variant="dot" mt={-75} color="red">No entregado</Badge>
                        </Group>

                    </Card>

                    <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                        <Group position="apart" >

                            <Group >
                                <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                </Card>
                                <Title  mt={-55} align="center">
                                    Tema: Resta
                                </Title>
                            </Group>
                            <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                        </Group>

                    </Card>

                    <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                        <Group position="apart" >

                            <Group >
                                <Card style={{ backgroundColor: "#1C7ED6", border: "2px solid #1C7ED6" }} h={95} shadow="sm" radius="md" withBorder >
                                </Card>
                                <Title mt={-55} align="center">
                                    Tarea: Ejercicios
                                </Title>
                            </Group>
                            <Badge variant="dot" mt={-75} color="red">No entregado</Badge>
                        </Group>

                    </Card>

                    <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                        <Group position="apart" >

                            <Group >
                                <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                </Card>
                                <Title  mt={-55} align="center">
                                    Tema: Suma
                                </Title>
                            </Group>
                            <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                        </Group>

                    </Card>
                </ScrollArea>
            </Group>
        </>
    );
}

export default MateriaStudent;
