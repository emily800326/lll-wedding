import React from 'react';
import Confetti from 'confetti-react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md'
const StyledPopup = styled.section`
z-index: 99999;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:rgba(2,2,2,.8);
  .tip{
      width: 4rem;
      z-index: 9;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      padding:.4rem .3rem;
      font-size: .3rem;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .2rem;
      .title{
          font-size: .3rem;
          font-weight: 800;
      }
      .content{
          color: #333;
          font-size: .2rem;
          padding:.3rem 0;
          word-break: break-all;
          p{
              margin-bottom: .14rem;
              line-height: 1.5;
          }
          strong{
              font-weight: 800;
              padding:0 .05rem;
              color: #000;
          }
      }
      .ps{
          font-size: .12rem;
          color: #ccc;
          align-self: flex-start;
      }
      .close{
          cursor: pointer;
          position: absolute;
          left:50%;
          bottom:-.8rem;
          transform: translate3d(-50%,0,0);
          width:.3rem;
          height: .3rem;
          border-radius: 50%;
          border:1px solid #eee;
          padding:.05rem;
      }
  }
`;
export default function Celebrate({ closeDan, dan = "超长回忆蛋" }) {
    return (
        <StyledPopup>
            <Confetti gravity={0.2} numberOfPieces={300} />
            <div className="tip">
                <h3 className="title">恭喜🎉🎉🎉</h3>
                <div className="content">
                    <p>太棒了！！！</p>
                    <p>找到了一个彩蛋：<strong>{dan}</strong>，截图保存本界面，集齐<strong>两个彩蛋</strong>，即可找新郎🤵🏻（微信:<strong>yanggc_2013</strong>）兑换小两口精心准备的小礼品一件！</p>
                    <p>免费&包邮，仅备10件，送完为止。</p>
                </div>
                <div className="ps">* 活动最终解释权归新郎所有</div>
                <div className="close" onClick={closeDan}>
                    <MdClose color="#fff" />
                </div>
            </div>
        </StyledPopup>
    )
}
