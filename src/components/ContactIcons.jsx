/* eslint-disable no-unused-vars */
import React from 'react'
import { Phone } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'


const icons = [
    {src: <Phone sx={{ fontSize: 100}}/>},
    {src: <Instagram sx={{ fontSize: 100}}/>},
    {src: <WhatsApp sx={{ fontSize: 100}}/>},
    {src: <Facebook sx={{ fontSize: 100}}/>},
    {src: <Email sx={{ fontSize: 100}}/>},
    {src: <Twitter sx={{ fontSize: 100}}/>},
    {src: <YouTube sx={{ fontSize: 100}}/>},
]

function ContactIcons() {
  return (
    <>
        <div className="icon-grid p-5">
            {icons.map((icon, index) => (
                <div key={index}>
                    <a href="" className="text-yellow">{icon.src}</a>
                </div>
            ))}
        </div>
    </>
  )
}

export default ContactIcons