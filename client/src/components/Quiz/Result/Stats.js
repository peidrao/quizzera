import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import ShareButton from '../ShareButton';

import  {grade}  from '../../../utils/grade';
import { timeConverter } from '../../../utils/time';

const Stats = props => {
  const {
    totalQuestions,
    correctAnswers,
    timeTakesToComplete,
    retakeQuiz,
    backToHome
  } = props;

  const score = Number(((correctAnswers * 100) / totalQuestions).toFixed(2));
  const { grades, remarks } = grade(score);
  const { hours, minutes, seconds } = timeConverter(
    timeTakesToComplete.totalTime - timeTakesToComplete.timerTime
  );

  return (
    <Segment>
      <Header as="h1" textAlign="center" block>
        {remarks}
      </Header>
      <Header as="h3" textAlign="center" block>
        Total de Questões: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block>
        Questões corretas: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block>
        Sua pontuação: {score}%
      </Header>
      <Header as="h3" textAlign="center" block>
       Pontuação para aprovação: 60%
      </Header>
      <Header as="h3" textAlign="center" block>
       Tempo usado: {`${hours} : ${minutes} : ${seconds}`}
      </Header>
      <div style={{ marginTop: 35 }}>
      <Button.Group>
        <Button
         onClick={retakeQuiz}
         size="big"
          >Refazer </Button>
        <Button.Or text='ou' />
        <Button
           content="Voltar"
           onClick={backToHome}
           size="big"
        positive>
          Voltar
        </Button>
      </Button.Group>
      
      
       {/*  <Button
          primary
          content="Refazer"
         
        />
        <Button
          color="teal"
          content="Voltar"
          onClick={backToHome}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        /> */}
        <ShareButton />
      </div>
    </Segment>
  );
};

export default Stats;