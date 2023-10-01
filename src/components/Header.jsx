import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, InputBase} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router-dom"

const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '250px',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({ setInputSearch }) {
  const handleChangeInput = (e) =>{
    setInputSearch(e.target.value)
  }

  return (
    <Box sx={{marginBottom: 8}}>
      <AppBar sx={{ backgroundImage: "linear-gradient(to right, #181B4A , #9985F3)"}}>
        <Toolbar sx={{ display: "flex", justifyContent:"space-between"}}>
          <Typography
              variant="h6"
              noWrap
              component="div"
          >
            Movies app
          </Typography>
          <List sx={{ width: "40%"}}>
              <ListItem disablePadding>
                  <ListItemButton sx={{ justifyContent: 'center' }}>
                    <Link to="/" style={{textDecoration: "none" }}>Home</Link>
                  </ListItemButton>
                  <ListItemButton sx={{ justifyContent: 'center' }}>
                    <Link to="/ultimosLanzamientos" style={{textDecoration: "none" }}>Ultimos Lanzamientos</Link>
                  </ListItemButton>
                  <ListItemButton sx={{ justifyContent: 'center' }}>
                    <Link to="/mejorPuntuadas" style={{textDecoration: "none"}}>Mejor Puntuadas </Link>
                  </ListItemButton>
              </ListItem>
          </List>
          <Search>
            <StyledInputBase
                placeholder="Search…"
                onChange={handleChangeInput}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




