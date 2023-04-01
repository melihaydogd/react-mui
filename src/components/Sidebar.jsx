import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import { MyListItem } from "./MyListItem";

export const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <MyListItem href="#home" primary="Homepage" icon={<Home />} />
          <MyListItem href="#simple-list" primary="Pages" icon={<Article />} />
          <MyListItem href="#simple-list" primary="Groups" icon={<Group />} />
          <MyListItem
            href="#simple-list"
            primary="Marketplace"
            icon={<Storefront />}
          />
          <MyListItem href="#simple-list" primary="Friends" icon={<Person />} />
          <MyListItem
            href="#simple-list"
            primary="Settings"
            icon={<Settings />}
          />
          <MyListItem
            href="#simple-list"
            primary="Profile"
            icon={<AccountBox />}
          />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
