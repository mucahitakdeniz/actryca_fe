import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { ChevronDown } from 'lucide-react';
import { Stack, useMediaQuery } from '@mui/material';
import navigation from '@/components/home/navbar/(nav-item)/navigation';
import Image from 'next/image';
import { Icon1, Icon2 } from './Icons';

const NavItem = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hoveredItem, setHoveredItem] = React.useState('Anasayfa'); // 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Stack
      sx={{
        display: { xs: 'none', sm: 'flex' },
        gap: '32px',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {navigation.map((item) => {
        const itemName = item.name === 'Sanatçılar' ? 'Sanatçılar' : item.name;
        return item.children ? (
          <Stack 
            key={item.name} 
            sx={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('Sanatçılar')}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              aria-controls={anchorEl ? 'menu-list' : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<ChevronDown size={20} strokeWidth={1.5} />}
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 500,
                textTransform: 'none',
                color: 'var(--Primary-900, #614B8B)',
                position: 'relative',
                padding: '5px 0',
              }}
            >
              {itemName}
              <span
                style={{
                  content: '""',
                  position: 'absolute',
                  left: '0',
                  bottom: '0',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--Primary-500, #614B8B)',
                  transform: hoveredItem === 'Sanatçılar' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </Button>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  display: 'inline-flex',
                  padding: '24px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  borderRadius: '16px',
                  background: '#FFF',
                  boxShadow: '0px 0px 11px 0px rgba(0, 0, 0, 0.10)',
                },
              }}
            >
              {item.children.map((child) => (
                <MenuItem
                  key={child.name}
                  onClick={handleClose}
                  onMouseEnter={() => setHoveredItem(child.name)}
                  onMouseLeave={() => setHoveredItem('Sanatçılar')}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '8px',
                    backgroundColor: hoveredItem === child.name ? '#f0f0f0' : 'transparent',
                  }}
                >
                  <a
                    href={child.href}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'start',
                      gap: '10px',
                      color: 'var(--Primary-900, #614B8B)',
                      textDecoration: 'none',
                    }}
                  >
                    {child.name === 'Senaristler' ? <Icon1 /> : <Icon2 />}
                    {child.name}
                    <Image
                      src="/images/dropdownsvg/arrow.svg"
                      alt="Arrow Icon"
                      height={16}
                      width={16}
                    />
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        ) : (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              display: 'inline-block',
              textDecoration: 'none',
              color: item.current ? 'var(--Primary-900, #614B8B)' : 'var(--Primary-500, #614B8B)',
              fontFamily: 'dm-sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '150%',
              padding: '5px 0',
            }}
          >
            {itemName}
            <span
              style={{
                content: '""',
                position: 'absolute',
                left: '0',
                bottom: '0',
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--Primary-500, #614B8B)',
                transform: (hoveredItem === item.name || item.name === 'Anasayfa') ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </a>
        );
      })}
    </Stack>
  );
};

export default NavItem;
