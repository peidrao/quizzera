import React, { Component } from 'react';
import {
    Container,
    Segment,
    Item,
    Dropdown,
    Divider,
    Button
} from 'semantic-ui-react';
import {
    CATEGORIES,
    NUM_OF_QUESTIONS,
    DIFFICULTY,
    QUESTIONS_TYPE,
    COUNTDOWN_TIME
} from '../../constants/';

import image from '../../assets/shark.png'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: null,
            numOfQ: null,
            difficulty: null,
            type: null,
            time: null
        };
        this.setValue = this.setValue.bind(this);
    }
    setValue(name, value) {
        this.setState({ [name]: value });
    }

    render() {
        const { category, numOfQ, difficulty, type, time } = this.state;

        let allFieldsSelected = false;
        let selectedValues = null;

        if (category && numOfQ && difficulty && type && time) {
            allFieldsSelected = true;

            selectedValues = {
                category,
                numOfQ,
                difficulty,
                type,
                time
            };
        }

        return (
            <Container>
                <Segment>
                    <Item.Group divided>
                        <Item>
                              <Item.Image src={image} /> 
                            <Item.Content>
                                <Item.Header>
                                    <h1>Perguntas!</h1>
                                </Item.Header>
                                <br />
                                <Divider />
                                <Item.Meta>
                                    <Dropdown
                                        fluid
                                        clearable
                                        selection
                                        name="category"
                                        placeholder="Categoria do quiz"
                                        options={CATEGORIES}
                                        onChange={(e, { name, value }) =>
                                            this.setValue(name, value)
                                        }
                                    />
                                    <br />
                                    <Dropdown
                                        fluid
                                        clearable
                                        selection
                                        name="numOfQ"
                                        placeholder="Número de perguntas"
                                        options={NUM_OF_QUESTIONS}
                                        onChange={(e, { name, value }) =>
                                            this.setValue(name, value)
                                        }
                                    />
                                    <br />
                                    <Dropdown
                                        fluid
                                        clearable
                                        selection
                                        name="difficulty"
                                        placeholder="Nível de dificuldade"
                                        options={DIFFICULTY}
                                        onChange={(e, { name, value }) =>
                                            this.setValue(name, value)
                                        }
                                    />
                                    <br />
                                    <Dropdown
                                        fluid
                                        clearable
                                        selection
                                        name="type"
                                        placeholder="Tipo da pergunta"
                                        options={QUESTIONS_TYPE}
                                        onChange={(e, { name, value }) =>
                                            this.setValue(name, value)
                                        }
                                    />
                                    <br />
                                    <Dropdown
                                        fluid
                                        clearable
                                        selection
                                        name="time"
                                        placeholder="Contagem regressiva (em minutos)"
                                        options={COUNTDOWN_TIME}
                                        onChange={(e, { name, value }) =>
                                            this.setValue(name, value)
                                        }
                                    />
                                </Item.Meta>
                                <Divider />
                                <Item.Extra>
                                    {allFieldsSelected ? (
                                        <Button
                                            primary
                                            content="Começar quiz"
                                            onClick={() =>
                                                this.props.startQuiz(
                                                    selectedValues
                                                )
                                            }
                                            size="25px"
                                            icon="play"
                                            labelPosition="left"
                                        />
                                    ) : (
                                        <Button
                                            disabled
                                            primary
                                            content="Começar quiz!"
                                            size="20px"
                                            icon="play"
                                            labelPosition="left"
                                        />
                                    )}
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <br />
            </Container>
        );
    }
}

export default Main;
