import React from 'react'
import { ReactComponent as Manager } from './Icons/manager.svg'
import { ReactComponent as Confetti } from './Icons/confetti.svg'
import { ReactComponent as Brainstorm } from './Icons/brainstorm.svg'

export default [
    {
        title: "Alumni / Industry Experts",
        body: "Read what they got to say about tech used in real world.",
        img: <Manager width="100%" height="100%" />
    },
    {
        title: "College Stories",
        body: "Get to know about stuff happened which you have never heard before.",
        img: <Confetti width="100%" height="100%" />
    },
    {
        title: "Large Community",
        body: "Share your own ideas with everyone and showcase your talents.",
        img: <Brainstorm width="100%" height="100%" />
    },
];
