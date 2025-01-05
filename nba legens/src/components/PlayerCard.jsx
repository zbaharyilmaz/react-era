import Card from "react-bootstrap/Card";
import { useState } from "react";

const PlayerCard = ({ img, name, statistics }) => {

    const [showImage, setShowImg] = useState(false);

    const change = () => {
        setShowImg(!showImage)
    }

    return (
        <div>
            <Card className="player-card rounded-4 m-auto"
                onClick={change}>
                <Card.Img variant="top" src={img} className="player-img" />
                <p>{name}</p>


            </Card>
        </div>
    )
}

export default PlayerCard