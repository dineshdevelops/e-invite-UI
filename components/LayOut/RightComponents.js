import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from "../../styles/components/Layout/rightComponents.module.scss"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
const RightComponents = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    router.push(event.target.id)
    setAnchorEl(null);
  };
  return (
    <div className={styles.rightComponents}>
        <div className={styles.menuItems}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Create Invitation
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} id='weddingInvitation'>Wedding Invitation</MenuItem>
                <MenuItem onClick={handleClose} id='houseWarming' >houseWarming</MenuItem>
                <MenuItem onClick={handleClose} id='babyShower'>Baby Shower</MenuItem>
            </Menu>
        </div>
        <IconButton size='small'>
            <Link href='/aboutUs'>About Us</Link>
        </IconButton>
        <IconButton size='small'>
            <Link href='/help'>Help</Link>
        </IconButton>
        <Button variant="contained" size='small' >
            Login
        </Button>
    </div>
  )
}

export default RightComponents