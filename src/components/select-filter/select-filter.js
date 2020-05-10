import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
export default function SelectFilter(props) {

    return (
        <Accordion>
            <Card>
                <Card.Header style={{ background: "#fff" }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: 'black' }}>
                        {props.name} <span style={{ fontWeight: "bold" }}>+</span>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <form>
                        {
                            props.data?.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <label style={{ margin: "10px" }} >{v.name || v.code}</label>
                                        <input type="radio" id={v._id} name="select" value={v._id} onChange={(e) => {
                                            const data = {name: props.name , id: e.target.value};
                                            props.sendSelectedValue(data);
                                        }} /> <br></br>
                                    </div>
                                )
                            })
                        }
                    </form>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
