import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProfitOutput from './ProfitOutput';
import ROIOutput from './RoiOutput';
import WinOutput from './WinOutput';
import BetsOutput from './BetsOutput';
import BetAmountOutput from './BetAmountOutput';

function BetOutput({bets}) {
  return (
      <Container className="stats-container">
        <div className="stats-row">
          <BetsOutput bets={bets}/>
          <BetAmountOutput bets={bets}/>
          <ProfitOutput bets={bets}/>
          <ROIOutput bets={bets}/>
          <WinOutput bets={bets}/>
        </div>
      </Container>
  );
}

export default BetOutput;
