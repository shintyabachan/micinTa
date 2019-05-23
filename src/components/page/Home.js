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
                        <h1 style={{ margin:"0"}}>Hello there! I'am.. </h1>
                        <h1 style={{color:"#ef4b6c"}}> <b>Shintya Devi Bachan</b></h1>
                        <p/><p/>
                        <h4>"I'am a 19th years old girl who is studying as second years student in Computer Science and Information System at Gadjah Mada University.
                            I am a friendly, enthusiastic adn honest person. I’m personally interested in becoming a system analyst"</h4>
                        <p></p>
                        <Button href="profile">Kenalan?</Button>
                    </Col>

                    <Col xs={12}>
                        <Row>
                            <img src="images/sally.webp" style={{width:"90%"}} alt="asd"/>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;