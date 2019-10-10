import React from "react";
import {Card, CardBody,
    CardTitle, CardSubtitle, Form, Label, Input, Container, Col,} from "reactstrap";
import styled from 'styled-components'

const Header = (props) => {

    const colors = ["#0074D9","#7FDBFF","#3FE0D0","#01FF70","#F8EFBA","#F97F51"]

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const TextField = styled(Input)`
        width: 120px;
        margin: auto;

    `

    const SubmitButton = styled(Input)`
        width:80px;
        margin: auto;
        background-color:grey;
        color: white;
    
    `

    const StyledCard = styled(Card)`
        background-color:${colors[props.colorIndex]};
        border: 2px solid black;
    
    `

    const Title = styled(CardTitle)`
        font-size: 48px;
        font-weight: 600;
    
    `

    return( 
        <div>
            <Container>
                <Col>
                <StyledCard>
                    <Title>{props.data.title}</Title>
                    <CardSubtitle>{props.data.date}</CardSubtitle>
                    <CardBody>{props.data.explanation}</CardBody>
                    <Form onSubmit={handleSubmit}>
                        <Label>Change Date (YYYY-MM-DD)</Label>
                        <TextField type="text" name="test" value={props.newDate} 
                            onChange={e => props.setNewDate(e.target.value)}>
                        </TextField>
                        <SubmitButton type="submit" onClick={() => props.setSubmit(!props.submit)} ></SubmitButton>
                    </Form>
                </StyledCard>
                </Col>
            </Container>
        </div>
    );
};

export default Header;