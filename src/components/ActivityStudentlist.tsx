import { Card, Badge, Text, Grid, Title } from '@mantine/core';

function ActivityStudentlist({ color, title }) { 
  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <a href="/HomeStudent" style={{ textDecoration: "none", color: "inherit" }}>
      <Card mt={10} style={titleStyle} shadow="sm" radius="md" withBorder>
        <div style={{ backgroundColor: color, border: `2px solid ${color}`, width: "10px", height: "100%", position: "absolute", top: 0, left: 0 }}></div>
        <Grid>
          <Grid.Col xl={4} lg={4} md={12} sm={12}>
            <div style={{ textAlign: 'left' }}>
              <Title>
                {title} 
              </Title>
              <Text c="#868E96" fz="sm">
                disponible desde 02/02/2023 Hasta 03/03/2023
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col xl={4} lg={4} md={12} sm={12}>
            <div style={{ textAlign: 'center' }}>
              <Title mt={15} >
                15/20 pts
              </Title>
            </div>
          </Grid.Col>
          <Grid.Col xl={4} lg={4} md={12} sm={12}>
            <div style={{ textAlign: 'right' }}>
              <Badge mt={25} size="lg" color="pink">
                No entregado
              </Badge>
            </div>
          </Grid.Col>
        </Grid>
      </Card>
    </a>
  );
}

export default ActivityStudentlist;
