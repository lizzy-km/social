import axios from "axios"
import React, { useEffect, useState } from "react"
interface profilesType {
    name: string
}
export default function UI() {

    const [profiles, setProfiles] = useState<profilesType | null>(null)

    function getProfiles() {
        return axios.post('http://localhost:3000/api/v1/auth/checkMail', {
            email: 'test@gmail.com',

        }).then(({ data }): any => {
            console.log(data)
            return data
        })
    }


    useEffect(() => {
        getProfiles().then((data) => {
            setProfiles(data)
        })
    }, [])





    if (profiles)
        return <div>
            UI: {profiles.name}

            {/* {Components } */}

        </div>
}