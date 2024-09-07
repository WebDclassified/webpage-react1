import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()


    // const [data , setData ] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/WebDclassified`)
    //     .then((response ) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-900 text-white text-3xl p-4'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="img" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async ()  => {
    const response = await fetch(`https://api.github.com/users/WebDclassified`)
    return response.json()
}