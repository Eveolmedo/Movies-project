import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, TextField} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navItems = ['Home', 'Ultimos lanzamientos', 'Populares'];

export default function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent:"space-between"}}>
          <Typography
              variant="h6"
              noWrap
              component="div"
          >
            Movies app
          </Typography>
          <List sx={{ display: "flex", width: "40%"}}>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
            ))}
          </List>
          <TextField id="outlined-basic" label="Buscar" variant="outlined" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}


