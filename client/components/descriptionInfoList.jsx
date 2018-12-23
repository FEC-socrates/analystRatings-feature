import React from 'react';

const DescriptionInfoList = (props) => {
  return (
    <div>
        <div>
          <div>CEO</div>
          <div>{props.data.ceo}</div>
        </div>
        <div>
          <div>Employees</div>
          <div>{props.data.employees}</div>
        </div>
        <div>
          <div>Headquarters</div>
          <div>{props.data.headquarters}</div>
        </div>
        <div>
          <div>Founded</div>
          <div>{props.data.founded}</div>
        </div>
        <div>
          <div>Market Cap</div>
          <div>{props.data.marketCap}</div>
        </div>
        <div>
          <div>Price-Earnings Ratio</div>
          <div>{props.data.priceEarnings}</div>
        </div>
        <div>
          <div>Dividend Yield</div>
          <div>{props.data.dividendYield}</div>
        </div>
        <div>
          <div>Average Volume</div>
          <div>{props.data.avgVolume}</div>
        </div>
    </div>
  )
}

export default DescriptionInfoList;