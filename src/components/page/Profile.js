import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Menu, Icon} from 'antd';
import MyCard from "../MyCard";


const { Title } = Typography;
const data = [
    { name:'Name',icons:'contacts',content:"Shintya Devi Bachan"},
    { name:'Date of birth',icons:'calendar',content:"October 15, 1999"},
    { name:'Address',icons:'environment',content:"Jl. Lempuyangan Tengah, Yogyakarta"},
    { name:'Phone',icons:'phone',content:"+62 852-2859-9018"},
    { name:'Email',icons:'mail',content:"icinbachan15@gmail.com"},
  ];

class Profile extends Component {
    render() {
        return (
            <div>
                 <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        paddingBottom: "50px",
                    }}                 
                 >
                    <Col xs={12}>
                        <Row>
                            <p/>
                            <p/>
                            <p/>
                            <p/>
                            <img src="images/sally.webp" style={{objectFit:"cover",width:"100%"}}/>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row style={{ margin: '16px 16px' }}>
                            <p/>
                            <Col xs><Title>Shintya Devi Bachan</Title></Col>
                            <List
                                size="large"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                // bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Icon type={item.icons} theme="filled"/> &nbsp;&nbsp; &nbsp;
                                        <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                    </List.Item>
                                )}
                            />
                            <p/>
                        </Row>
                    </Col>

                </Row>
                <Row gutter={16} justify="center" type="flex">
                    <Col lg={7} md={12}>
                        <MyCard 
                            alt="Gadjah Mada University" 
                            img="images/portofolio/1.png"
                            title="Computer Science and Information System"
                            description="2017-2020"
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="SMA N 1 Batusangkar" 
                            img="images/portofolio/2.png"
                            title="Senior High School"
                            description="2014-2017"                            
                        />
                    </Col>                    
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="SMP N 5 Batusangkar" 
                            img="images/portofolio/3.png"
                            title="Junior High School"
                            description="2011-2014"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="SD N 2 Pintu Rayo" 
                            img="images/portofolio/5.png"
                            title="Elementary School"
                            description="2005-2011"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="TK Aisyah" 
                            img="images/portofolio/6.png"
                            title="Kindergarten"
                            description="2003-2005"                            
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;