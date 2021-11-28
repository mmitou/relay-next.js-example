import {
  AppBar,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { FC, useState } from "react";

const Layout: FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VideoChat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
        >
          <List>
            <ListItem button key="user">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="user" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Container disableGutters={true} maxWidth="sm" component="main">
        {children}
      </Container>
    </>
  );
};

export default Layout;
