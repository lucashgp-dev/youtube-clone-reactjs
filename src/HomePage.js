import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  ListSubheader,
  Grid,
  Hidden,
  useTheme,
  Switch,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { AccountCircle } from "@material-ui/icons";
import { Apps } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
import { VideoCall } from "@material-ui/icons";
import { Home } from "@material-ui/icons/";
import { Subscriptions } from "@material-ui/icons";
import { Whatshot } from "@material-ui/icons";
import { VideoLibrary } from "@material-ui/icons";
import { History } from "@material-ui/icons";
import { AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  menuIcon: {
    paddingRightt: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  logo: {
    height: "30px",
  },
  listItemText: {
    fontSize: 14,
  },
  ListItem: {
    paddingTop: 4,
    paddingBotton: 4,
  },
  subheader: {
    textTransform: "uppercase",
    color: "#606060",
  },
}));
const videos = [
  {
    id: 1,
    title:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    channel: "Lucas Nhimi",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb1.png",
  },
  {
    id: 2,
    title:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
    channel: "Lucas Nhimi",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb2.png",
  },
  {
    id: 3,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb3.png",
  },
  {
    id: 4,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb4.png",
  },
  {
    id: 5,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Lucas Nhimi",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Lucas Nhimi",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb6.png",
  },
  {
    id: 7,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Lucas Nhimi",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb7.png",
  },
  {
    id: 8,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.png",
  },
];
const categorias1 = [
  { nome: "Inicio", typeIcon: <Home /> },
  { nome: "Explorar", typeIcon: <Whatshot /> },
  { nome: "Inscrições", typeIcon: <Subscriptions /> },
];
const categorias2 = [
  "Música",
  "Esportes",
  "Jogos",
  "Filmes",
  "Notícias",
  "Ao vivo",
  "Destaques",
  "Vídeos 360",
];

function HomePage({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            classesName={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "/images/branco.png"
                : "/images/preto.png"
            }
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.grow}></div>

          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />

          <IconButton classesName={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton classesName={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton classesName={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />

            <div className={classes.drawerContainer}>
              <List>
                {categorias1.map((item, index) => (
                  <ListItem button classes={{ root: classes.ListItem }}>
                    <ListItemIcon>{item.typeIcon} </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={item.nome}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.ListItem }}>
                  <ListItemIcon>{<VideoLibrary />} </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Biblioteca"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.ListItem }}>
                  <ListItemIcon>{<History />} </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Histórico"}
                  />
                </ListItem>
              </List>

              <Divider />

              <Box p={7}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>

                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircle />}
                  >
                    Fazer Login
                  </Button>
                </Box>
              </Box>

              <Divider />

              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O Melhor do Youtube
                  </ListSubheader>
                }
              >
                {categorias2.map((item, index) => (
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={item}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />

                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    {`${item.views}* ${item.date}`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
