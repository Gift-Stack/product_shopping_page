import React from 'react'

// Required deps
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { BsBook } from 'react-icons/bs'
import { AiOutlineShop } from 'react-icons/ai'
import { VscSettings } from 'react-icons/vsc'

import ProfilePhoto from '../../../assets/profile.png'

import { ReactComponent as JupiterLogo } from '../../../assets/jupiter_logo.svg'
import { AppBar } from '../styles'

interface TopnavProps {
  open: boolean
  handleDrawerOpen(): void
}

const Topnav = (props: TopnavProps) => {
  const { open, handleDrawerOpen } = props
  return (
    <AppBar
      style={{ background: 'white', color: '#000', zIndex: 2 }}
      position="fixed"
      open={open}
    >
      <Toolbar>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 10, flexGrow: 1 }}
          component="div"
        >
          <JupiterLogo />
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '50%'
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Jupiter"
              inputProps={{ 'aria-label': 'search jupiter' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap="25px"
          >
            <Button
              variant="contained"
              size="small"
              style={{
                background: 'rgba(236, 102, 97, 1)',
                textTransform: 'capitalize'
              }}
            >
              Get $20 off
            </Button>
            <BsBook fontSize={23} />
            <AiOutlineShop fontSize={23} />
            <img src={ProfilePhoto} alt="Profile" width={40} />
            <VscSettings fontSize={23} />
          </Box>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Topnav
