"use client"
import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { ChevronDown } from 'lucide-react'
import { Stack } from '@mui/material'
import navigation from '@/components/home/navbar/(nav-item)/navigation'

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

  return (
    <Stack
      sx={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {navigation.map((item) =>
        item.children ? (
          <Stack key={item.name} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Button
              aria-controls={anchorEl ? 'menu-list' : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<ChevronDown size={20} strokeWidth={1.5} />}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-500"
            >
              {item.name}
            </Button>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="mt-2"
            >
              <Stack sx={{ flexDirection: 'column' }}>
                {item.children.map((child) => (
                  <MenuItem key={child.name} onClick={handleClose}>
                    <a href={child.href} className="block px-4 py-2 text-sm text-primary-900">
                      {child.name}
                    </a>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>
        ) : (
          <Stack key={item.name} sx={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
            <a
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
                paddingBottom: '8px', // Ensure padding for underline visibility
                borderBottom: (item.current || hoveredItem === item.name) ? '2px solid var(--Primary-500, #614B8B)' : 'none',
              }}
            >
              {item.name}
              {item.current && (
                <span
                  style={{
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '-2px',
                    width: '108px',
                    height: '2px',
                    backgroundColor: 'var(--Primary-500, #614B8B)',
                    transition: 'width 0.3s',
                  }}
                />
              )}
            </a>
          </Stack>
        )
      )}
    </Stack>
  )
}

export default NavItem
