import React from "react"
import styles from "./Cards.module.css";
import { Card, CardTitle, CardText, Container, Row } from 'reactstrap';
import CountUp from "react-countup";
import { Provider, useContexts } from "../../context";

const CardImpl = () => {
    const { dataFetch: { confirmed, recovered, deaths, lastUpdate } } = useContexts();
    if (typeof confirmed !== "undefined" && typeof confirmed !== "undefined" && typeof confirmed !== "undefined" && typeof confirmed !== "undefined") {
        return (
            <div className={styles.container}>
                <Container>
                    <Row>
                        <Card body outline color="primary">
                            <CardTitle ><h3 className="text-muted">Infected</h3></CardTitle>
                            <CardText>
                                <CountUp
                                    start={0}
                                    end={confirmed.value}
                                    duration={1}
                                    separator=","
                                />
                            </CardText>
                            <CardText className="text-muted">{new Date(lastUpdate).toDateString()}</CardText>
                            <CardText>Number of active cases from COVID-19.</CardText>
                        </Card>

                        <Card body outline color="success">
                            <CardTitle ><h3 className="text-muted">Recovered</h3></CardTitle>
                            <CardText>
                                <CountUp
                                    start={0}
                                    end={recovered.value}
                                    duration={1}
                                    separator=","
                                />
                            </CardText>
                            <CardText className="text-muted">{new Date(lastUpdate).toDateString()}</CardText>
                            <CardText>Number of recoveries from COVID-19.</CardText>
                        </Card>

                        <Card body outline color="danger">
                            <CardTitle ><h3 className="text-muted">Deaths</h3></CardTitle>
                            <CardText>
                                <CountUp
                                    start={0}
                                    end={deaths.value}
                                    duration={1}
                                    separator=","
                                />
                            </CardText>
                            <CardText className="text-muted">{new Date(lastUpdate).toDateString()}</CardText>
                            <CardText>Number of deaths caused by COVID-19.</CardText>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return null;
    }
}

const Cards = () => <Provider><CardImpl /></Provider>

export default Cards
