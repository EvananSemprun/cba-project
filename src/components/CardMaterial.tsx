import { Card, Title, Progress, Text, Group, ActionIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight, IconBook, IconHexagonalPyramidPlus, IconMath, IconPlant, IconTypography } from '@tabler/icons-react';

const jsonData = [
	{
		"nombre": "Matematica",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 50,
		"Color": "#DCDDFC",
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconMath style={{ background: '#D1D2F1', padding: 12.5, borderRadius: '100%' }} />
		}
	},
	{
		"nombre": "Fisica",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 70,
		"Color": "#F7CAB7",
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconHexagonalPyramidPlus style={{ background: '#EEBFAB', padding: 12.5, borderRadius: '100%' }} />
		}
	},
	{
		"nombre": "Quimica",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 20,
		"Color": "#EDF1FA",
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconPlant style={{ background: '#E1E9F2', padding: 12.5, borderRadius: '100%' }} />
		}
	},
	{
		"nombre": "Historia",
		"ruta": "#",
		"Profesor": "Jose Gonzalez",
		"Progresoactividades": 10,
		"Color": "#f7eab7",
		"icon": {
			"bg": "#D1D2F1",
			"printIcon": <IconBook style={{ background: '#F1DAA1', padding: 12.5, borderRadius: '100%' }} />
		}
	}
];

function CardMaterial() {
	return (
		<>
			<Group>
				{jsonData.map((item, index) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.05 }}
					>
						<a href="/MateriaStudent" style={{ textDecoration: "none" }}>
							<Card
								key={index}
								w={300}
								h={270}
								mr={15}
								radius="lg"
								style={{
									backgroundColor: item.Color,
									boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.1)',
								}}
								withBorder
							>
								{item.icon.printIcon}
								<Group position="apart" mt="md" mb="xs">
									<Title mb={15} order={3} fw={600}>
										{item.nombre}
									</Title>
								</Group>
								<Title mb={5} order={5} fw={450}>
									Progreso
								</Title>
								<Progress
									size="md"
									radius="xl"
									mb={5}
									color="dark"
									value={item.Progresoactividades}
								/>
								<Text ta='end' fw={600}>
									{item.Progresoactividades}%
								</Text>
								<Group position="apart" mt={22.5}>
									<Text fw={700}>{item.Profesor}</Text>
									<ActionIcon variant="transparent">
										<IconArrowRight size="3.125rem" />
									</ActionIcon>
								</Group>
							</Card>
						</a>

					</motion.div>
				))}
			</Group>
		</>
	);
}

export default CardMaterial;
