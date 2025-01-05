import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { data } from "../helper/data";
import { useState } from "react"
import PlayerCard from "./PlayerCard";
// import { Image } from "react-bootstrap";


const CartContainer = () => {
    const [input, setInput] = useState("");


    return (
        <div>
            <Form.Control type="search" placeholder="Search Player..." className="w-25 m-auto" />
            <div className="card-container ">
                <Row className="justify-content-center g-3">
                    {data.filter(player => player.name.toLowerCase().includes(input.trim().toLowerCase())).map((player, index) => {
                        return (
                            <Col md={6} lg={4} xl={3} key={index}>
                                <PlayerCard {...player} />
                            </Col>
                        )
                    })



                    }




                </Row>



            </div>



        </div>
    )
}

export default CartContainer