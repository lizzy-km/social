import React, { JSX } from "react";

export default function ProfileCard(props: {
    width: number,
    height: number,
    text: string,
    pfUrl: string
}): JSX.Element {

    const { text, width, height, pfUrl } = props

    // const [val, setval] = React.useState(0)

    return (<div style={{
        width: width,
        height: height,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    }} >
        <img style={{
            width: '100%',
            height: width,
            borderRadius: width * 10

        }} src={pfUrl} alt={`${text}'s profile image`} />
        {text}

        <div onClick={
            (e) => e.currentTarget
        } >
            +

        </div>
    </div>)
}