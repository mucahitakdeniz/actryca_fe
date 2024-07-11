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
  const [hoveredItem, setHoveredItem] = React.useState('Anasayfa');

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
              className="flex items-center rounded-md  text-primary-500"
            >
              {item.name}
            </Button>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  display: 'inline-flex',
                  padding: '12px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  borderRadius: '16px',
                  background: '#FFF',
                  boxShadow: '0px 0px 11px 0px rgba(0, 0, 0, 0.10)',
                  marginTop: '10px',
                  marginLeft: '-60px', 
                },
              }}
            >
              {item.children.map((child) => (
                <MenuItem key={child.name} onClick={handleClose}
                className='center hover:bg-primary-50 rounded-lg'>
                  <a
                    href={child.href}
                    className="flex flex-row items-start gap-[10px]  text-sm text-primary-900 "
                  >
                    {child.name}
                    <Image
                      src="/images/dropdownsvg/arrow.svg"
                      alt="Arrow Icon"
                      height={16}
                      width={16}
                    />
                  </a>
                </MenuItem>
                </Stack>
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
                left: '-10px',
                bottom: '0',
                width: '120%',
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
