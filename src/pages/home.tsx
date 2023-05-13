import React from 'react'
import { useAccount, useConnect } from 'wagmi'
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'

const Home = () =>  {



  const { connector: activeConnector, isConnected, address } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

    useEffect(() => {

    }, [address])
 
  return (
    <>
     <div className='flex justify-center items-center flex-col gap-5 mt-10 bg-gradient-to-r from-white to-gray-100 h-auto'>
      <div className='font-semibold text-3xl h-full italic'> Boomer Ape  </div>
    <>
      {isConnected && <div>{}</div>}
 
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
        > {address}
          
          {isLoading &&
            pendingConnector?.id === connector.id &&
            ' (connecting)'}
        </button>
      ))}
 
      {error && <div>{error.message}</div>}
    </>
    <div className='flex flex-row justify-center'>
    <Link to="/onramp">
    <button className='bg-green-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-green-400 rounded shadow'>OnRampKit</button>
    </Link>
    </div>
    </div>
    </>
  )
}

export default Home