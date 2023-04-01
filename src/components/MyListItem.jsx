import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export const MyListItem = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={props.href}>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.primary} />
      </ListItemButton>
    </ListItem>
  );
};
