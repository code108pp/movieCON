import * as React from "react";
import { Avatar, Button,Grid } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import ContactlessIcon from "@mui/icons-material/Contactless";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import { Link } from "react-router-dom";
import { borderRadius } from "@mui/system";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RememberMeIcon from '@mui/icons-material/RememberMe';

const drawerWidth = 190;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0,1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      style={{ display: "flex" ,overflow :'hidden'}}
      marginBottom={3}
      marginRight={3}
      marginLeft={3}
      marginTop={2.5}

    >
    
      <AppBar
        style={{ background: "#5579C6", borderRadius: "20px" }}
        position="xifed"
        elevation={0}
        open={open}
      >
        <Toolbar>

          <IconButton color="inherit" component={Link} to="/home"  >
            <ContactlessIcon  />
          </IconButton>
          <Typography
            variant="h4"
            style={{ flexGrow: 1, textDecoration: "none", color: "white" }}
            
          >
            Movicon
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            style={{ ...(open && { display: "none" }) }}
          >
            <Avatar style={{ background: "#281E5D"}}>
              <FlashOnOutlinedIcon />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        style={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader style={{ background: "#7697A0" }}>
          <IconButton 
          onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Button>
          <Avatar></Avatar>
        </Button>

        <Button color="inherit">
          <Typography variant="h5">USERNAME</Typography>
        </Button>
        <Divider />

        <List>
        <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <RememberMeIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="My Profile" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="Sign Out" />
            </ListItem>
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
