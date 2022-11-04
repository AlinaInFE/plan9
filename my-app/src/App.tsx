import { Paper, TextField, InputBase} from '@mui/material';
import React from 'react';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="Calculator" style={{display: "flex", justifyItems: "center", justifyContent: "center", alignItems: "center", height: "100%"}}>
      <Paper elevation={3}
      sx={{width: 0.35, height: "700px"}}>
        <InputBase
        sx={{width: 0.85, 
        height: "50px", 
        backgroundColor: "#ebedf0",
        borderRadius: "8px",
        fontFamily: "ZCOOL QingKe HuangYou",
        fontSize: "27px"}}/>
      </Paper>
    </div>
  );
}
