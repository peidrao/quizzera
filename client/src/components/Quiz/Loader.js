import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

const Loader = ({ text }) => (
    <Container>
        <Message icon size="big">
            <Icon name="circle notched" loading />
            <Message.Content>
                <Message.Header>Espere um momento!</Message.Header>
                {text || 'Buscando conteúdo.'}
            </Message.Content>
        </Message>
    </Container>
);

export default Loader;
