import React from 'react'
import higherOrderComp from './HOC'

function BannerChild({handleCount, count}) {
  return (
    <div>
        <h2 onMouseOver={handleCount}>Banner hovered {count} times.</h2>
    </div>
  )
}

const MainBanner = higherOrderComp(BannerChild);

export default MainBanner;