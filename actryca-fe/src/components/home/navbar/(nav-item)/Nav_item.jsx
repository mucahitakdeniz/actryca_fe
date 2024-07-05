import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { ChevronDown } from 'lucide-react'
import { Stack, useMediaQuery } from '@mui/material'
import navigation from '@/components/home/navbar/(nav-item)/navigation'
import Image from 'next/image'

const NavItem = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [hoveredItem, setHoveredItem] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  // Define the breakpoint for hiding the NavItem
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Stack
      sx={{
        display: { xs: 'none', sm: 'flex' }, // Hide on mobile (xs), show on larger screens
        gap: '32px',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {navigation.map((item) =>
        item.children ? (
          <Stack key={item.name} sx={{ position: 'relative' }}>
            <Button
              aria-controls={anchorEl ? 'menu-list' : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<ChevronDown size={20} strokeWidth={1.5} />}
              className="flex items-center rounded-md px-3 py-2 text-sm  text-primary-500"
            >
              {item.name}
            </Button>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="mt-2"
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
                <MenuItem key={child.name} onClick={handleClose}
                sx={{display: 'flex', flexDirection: 'column', alignItems: "flex-start", gap: '8px'}}>
                  <a
                    href={child.href}
                    className="flex flex-row items-start gap-[10px]  text-sm text-primary-900"
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
              ))}
            </Menu>
          </Stack>
        ) : (
          <a
            key={item.name}
            href={item.href}
            className={`nav-item ${item.current ? 'current' : ''}`}
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
              fontWeight: '700',
              lineHeight: '150%',
              letterSpacing: '0.32px',
              borderBottom: (item.current || hoveredItem === item.name) ? '2px solid var(--Primary-500, #614B8B)' : 'none',
            }}
          >
            {item.name}
           
          </a>
        )
      )}
    </Stack>
  )
}

export default NavItem
