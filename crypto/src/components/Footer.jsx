import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl
    border-t border-emerald-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]'>

        <div className=' px-[5%] md:px-[8%] lg:px-[10%]'>
        <p className=' text-center text-sm md:text-base text-gray-300 hover:text-cyan-400/90 transition-colors duration-300'> 
        <span className=' bg-gradient-to-r from bg-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
        &copy; 2025 CryptoTracking 
        </span>
        - All market dat sourced from CoinGecko API
        </p>
        </div>

    </div>
  )
}

export default Footer