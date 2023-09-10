import Navbar from "../../components/Navbar";
import { Card, Badge, ScrollArea, Divider, Title, Tabs, Group } from '@mantine/core';


function MateriaStudent() {
    return (
        <>
            <Navbar />
            <Title align="center">
                Matematicas
            </Title>

            <Tabs mt={25} color="indigo" variant="pills" defaultValue="gallery">
                <Tabs.List position="center">
                    <Tabs.Tab value="lapso1">Lapso 1</Tabs.Tab>
                    <Tabs.Tab value="lapso2" >Lapso 2</Tabs.Tab>
                    <Tabs.Tab value="lapso3" >Lapso 3</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="lapso1" pt="xs">
                    <Group mt={155} position="center">

                        <Divider variant="dashed" orientation="vertical" size="lg" />

                        <ScrollArea h={600} >
                            <Card h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >

                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >

                                            <Card style={{ backgroundColor: "#F03E3E", border: "2px solid red" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Examen: Examen 1
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No entregado</Badge>
                                    </Group>

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
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

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >
                                            <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Tema: Resta
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                                    </Group>

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
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

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >
                                            <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Tema: Suma
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                                    </Group>

                                </a>
                            </Card>
                        </ScrollArea>

                    </Group>

                </Tabs.Panel>

                <Tabs.Panel value="lapso2" pt="xs">
                    <Group mt={155} position="center">

                        <Divider variant="dashed" orientation="vertical" size="lg" />

                        <ScrollArea h={600} >
                            <Card h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >

                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >

                                            <Card style={{ backgroundColor: "#F03E3E", border: "2px solid red" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Examen: Examen 2
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No entregado</Badge>
                                    </Group>

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
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

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >
                                            <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Tema: Resta
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                                    </Group>

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
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

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >
                                            <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Tema: Suma
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                                    </Group>

                                </a>
                            </Card>
                        </ScrollArea>

                    </Group>
                </Tabs.Panel>

                <Tabs.Panel value="lapso3" pt="xs">
                    <Group mt={155} position="center">

                        <Divider variant="dashed" orientation="vertical" size="lg" />

                        <ScrollArea h={600} >
                            <Card h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >

                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >

                                            <Card style={{ backgroundColor: "#F03E3E", border: "2px solid red" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Examen: Examen 3
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No entregado</Badge>
                                    </Group>

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
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

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >
                                            <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Tema: Resta
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                                    </Group>

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
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

                                </a>
                            </Card>

                            <Card mt={15} h={135} w={755} shadow="sm" padding="lg" radius="md" withBorder >
                                <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Group position="apart" >

                                        <Group >
                                            <Card style={{ backgroundColor: "#37B24D", border: "2px solid #37B24D" }} h={95} shadow="sm" radius="md" withBorder >
                                            </Card>
                                            <Title mt={-55} align="center">
                                                Tema: Suma
                                            </Title>
                                        </Group>
                                        <Badge variant="dot" mt={-75} color="red">No Revisado</Badge>
                                    </Group>

                                </a>
                            </Card>
                        </ScrollArea>

                    </Group>
                </Tabs.Panel>
            </Tabs>

        </>
    );
}

export default MateriaStudent;
