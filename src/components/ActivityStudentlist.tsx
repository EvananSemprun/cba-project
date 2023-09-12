import { Card, Group, Text, Grid, Flex, Title } from '@mantine/core';

function ActivityStudentlist() {
  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
      <Card style={titleStyle} shadow="sm" radius="md" withBorder>
        <div style={{ backgroundColor: "#fe513e", border: "2px solid red", width: "10px", height: "100%", position: "absolute", top: 0, left: 0 }}></div>
        <Grid>
          <Grid.Col xl={4} lg={4} md={12} sm={12}>
            <Flex direction="column">
              <Title style={titleStyle} order={3}>
                Examen
              </Title>
              <Text c="#868E96" fz="sm">
                disponible desde 02/02/2023 Hasta 03/03/2023
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xl={4} lg={4} md={12} sm={12}>
            <Flex direction="column" justifyContent="center" alignItems="center">
              <Title order={3}>
                15/20 pts
              </Title>
            </Flex>
          </Grid.Col>
          <Grid.Col xl={4} lg={4} md={12} sm={12}>
            <Flex direction="column" justifyContent="flex-end" alignItems="flex-end">
              <Title order={3}>
                15/20 pts
              </Title>
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </a>
  );
}

export default ActivityStudentlist;
