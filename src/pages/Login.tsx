import { Card, Title, Image, Button, NumberInput, PasswordInput, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconUser } from '@tabler/icons-react';

function Login1() {
  const form = useForm({
    initialValues: {
      user: '',
      password: '',
    },

    validate: {
      user: (value) => (/^\S+@\S+$/.test(value) ? null : 'Usuario es requerido'),
      password: (value) => (value.length >= 6 ? null : 'La contraseña es requerida'),
    },
  });


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '98vh',
        background: `url(https://mapio.net/images-p/94320217.jpg)`,
        backgroundSize: '85%',
        backgroundPosition: 'right center'
      }}
    >
      <Card
        shadow="xl"
        padding="xl"
        radius="xs"
        withBorder
        w={550}
        h={861}
        style={{
          marginRight: 'auto',
        }}
      >
        <Image
          maw={240}
          mx="auto"

          radius="md"
          src="https://cba.edu.ve/images/cba.png"
          alt="Logo" />
        <Title order={1} align="center" mt={50} >
          Bienvenido
        </Title>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <NumberInput
            placeholder="Usuario"
            label="Usuario"
            radius="xl"
            mt={150}
            mb={35}
            {...form.getInputProps('user')}
            hideControls
            icon={<IconUser size="1rem" />}
          />

          <PasswordInput
            placeholder="Contraseña"
            label="Contraseña"
            radius="xl"
            {...form.getInputProps('password')}
            icon={<IconLock size="1rem" />}
          />

          <Group position="center" mt={100}>
            <Button color="indigo" w={502} type="submit">
              Enviar
            </Button>
          </Group>
        </form>
      </Card>
    </div>


  );
}

export default Login1;
