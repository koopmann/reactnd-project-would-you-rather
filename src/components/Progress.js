import React from "react";
import { Line } from 'rc-progress';


function Progress(props) {
  const { text, voteA, voteB, isA, vote } = props;
  const totalVotes = voteA + voteB;
  const percentage = ( (isA ? voteA : voteB) / totalVotes ) * 100
  return (
    <div style={{marginLeft: "30%", marginBottom: "1cm", marginRight: "30%", borderWidth: "2px", borderStyle: "solid", borderColor: "black"}}>
      {vote ? (
        <div style={{color:'red',fontStyle: 'italic'}}>
            {text + "(Your Vote)"}
        </div>
      ) : (
          <div style={{fontStyle: 'italic'}}>
              {text}
          </div>
      )}
        <h5>Statistics:</h5>
      <p style={{ fontSize: 14 }}>
        {isA
          ? `${voteA} out of ${totalVotes} vote(s)`
          : `${voteB} out of ${totalVotes} vote(s)`}
      </p>
        <div style={{marginLeft: "30%", marginRight: "30%",display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {"Percentage of people voted for this option: " + percentage + " %"}
            <Line percent={percentage}  strokeWidth="10" strokeColor="#faae2b" />
        </div>
    </div>
  );
}

export default Progress;
