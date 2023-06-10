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
    {src: <Phone sx={{ fontSize: 100}}/>, href: "tel: +233240327086"},
    {src: <Instagram sx={{ fontSize: 100}}/>, href: "https://instagram.com/queenceccy_honeycombministries"},
    {src: <WhatsApp sx={{ fontSize: 100}}/>, href:"https://wa.me/+233240327086"},
    {src: <Facebook sx={{ fontSize: 100}}/>, href: "https://facebook.com/thehoneycombministries2021"},
    {src: <Email sx={{ fontSize: 100}}/>, href: "mailto: thehoneycombministries@gmail.com"},
    {src: <Twitter sx={{ fontSize: 100}}/>, href: "https://twitter.com/CDansu"},
    {src: <YouTube sx={{ fontSize: 100}}/>, href: "https://www.youtube.com/@thehoneycombministries2468"},
]

function ContactIcons() {
  return (
    <>
        <div className="icon-grid p-5">
            {icons.map((icon, index) => (
                <div key={index}>
                    <a href={icon.href} target='_blank' rel='noreferrer' className="text-yellow">{icon.src}</a>
                </div>
            ))}
        </div>
    </>
  )
}

export default ContactIcons