import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Flex,
} from "@mantine/core";
import classes from "./Auth.module.css";
import { Atoms } from "../../atoms";

function Auth() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Flex align="center" justify="center">
          <Atoms.Logo />
        </Flex>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Orders tracking
        </Title>

        <TextInput
          label="Nombre de usuario"
          placeholder="Tu usuario"
          size="md"
        />
        <PasswordInput
          label="Contraseña"
          placeholder="Contraseña"
          mt="md"
          size="md"
        />
        <Checkbox label="Mantener mi sesón iniciada" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" color="red">
          Iniciar sesión
        </Button>
      </Paper>
    </div>
  );
}

export default Auth;
