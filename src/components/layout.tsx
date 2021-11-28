import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VideoChat
        </Typography>
        <Button color="inherit">Login</Button>
      </AppBar>
      <Container disableGutters={true} maxWidth="sm" component="main">
        {children}
      </Container>
    </>
  );
};

export default Layout;
