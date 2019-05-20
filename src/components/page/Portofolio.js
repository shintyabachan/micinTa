import React, {Component} from 'react';
import MyCard from "../MyCard";
import { Row,Col } from 'antd';

class Portofolio extends Component {
    render() {
        return (
            <div>
                <h2>PORTOFOLIO</h2>
                <hr/>
                <br/>
                <Row gutter={16} justify="center" type="flex">
                    <Col lg={7} md={12}>
                        <MyCard 
                            alt="Web Design" 
                            img="images/portofolio/1.png"
                            title="Web Design"
                            description="This is the description"
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Web Design" 
                            img="images/portofolio/2.png"
                            title="Web Design"
                            description="This is the description"                            
                        />
                    </Col>                    
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Web Design" 
                            img="images/portofolio/3.png"
                            title="Web Design"
                            description="This is the description"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Web Design" 
                            img="images/portofolio/5.png"
                            title="Web Design"
                            description="This is the description"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Web Design" 
                            img="images/portofolio/6.png"
                            title="Web Design"
                            description="This is the description"                            
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Portofolio;