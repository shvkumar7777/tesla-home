import React from 'react'
import Button from './Button'
import './Item.css'

const Item = ({title,desc,descLink,backgroundImg,leftBtnTxt,leftBtnLnk,rightBtnTxt,rightBtnLnk,twoButtons}) => {
  return (
      <div className='item' style={{
          backgroundImage:`url(${backgroundImg})`
      }}>
          <div className="item__container" style={{
              
          }}>
              <div className="item__text">
                  <p>{title}</p>
                  <div className="item__description">
                    <p>{desc}</p>
                  </div>
              </div>
              
              <div className="item__onethird">
                  <div className="item__buttons">
                      <Button
                          imp='primary'
                          text={leftBtnTxt}
                          link={leftBtnLnk}></Button>
                      {/* if twobuttons receives true, then this will render other wise no */}
                      {
                          twoButtons &&  <Button
                          imp='secondary'
                          text={rightBtnTxt}
                          link={rightBtnLnk}></Button>
                      }
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Item