import React from 'react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';

const Offline = () => (
  <Container>
    <Segment placeholder>
      <Header icon>
        <Icon name="unlink" />
        <br />
        Parece que você está offline. Verifique sua conexão com a Internet.
      </Header>
    </Segment>
  </Container>
);

export default Offline;