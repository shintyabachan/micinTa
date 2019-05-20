import React from 'react'
import { Row,Col,Button } from 'antd';
  
class Home extends React.Component{       
    render(){
        return(
            <div>
               <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}                 
                 >
                    <Col xs={10}
                        style={{ 
                            margin: '40px 30px',
                        }}  
                    >
                        <h1 style={{ margin:"0"}}>Hello! I'am </h1>
                        <h1 style={{color:"#ef4b6c"}}> <b>Shintya Devi Bachan</b></h1>
                        <h4>"Saya adalah cinicnicnicnicnincincincinicnicnincincin</h4>
                        <Button href="Profile">Kenalan?</Button>
                    </Col>

                    <Col xs={12}>
                        <Row>
                            <img src="images/sally.png" style={{width:"90%"}}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;