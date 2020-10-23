import React from "react"
import {
    Card, CardText, CardBody,
    CardTitle, Button, Container
} from "reactstrap";
import { useHistory } from "react-router-dom";

const Access = () => {
    const history = useHistory();

    return (
        <div className="app flex-row align-items-center">
            <Container style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "100px",
            }}>
                <Card className="p-5">
                    <CardBody>
                        <CardTitle><h1><b>Welcome to the Covid19 Tracker App</b></h1></CardTitle>
                        <center>
                            <CardText>Click the button below to navigate to the Home page and watch our statistics.</CardText>
                            <Button onClick={() => history.push("/home")}>Watch</Button>
                        </center>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default Access;
