import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
const defaultTheme = createTheme();

const Quiz = () => {
    const questions = [
        {
          questionText: 'What is the result of 2 + 2?',
          answerOptions: [
            { answerText: '3', isCorrect: false },
            { answerText: '4', isCorrect: true },
            { answerText: '5', isCorrect: false },
            { answerText: '6', isCorrect: false },
          ],
        },
        {
          questionText: 'Which keyword is used to declare a variable in JavaScript?',
          answerOptions: [
            { answerText: 'var', isCorrect: true },
            { answerText: 'const', isCorrect: false },
            { answerText: 'let', isCorrect: false },
            { answerText: 'int', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the correct syntax for a for loop in JavaScript?',
          answerOptions: [
            { answerText: 'for (i = 0; i < 5; i++)', isCorrect: true },
            { answerText: 'for (i = 0; i < 5)', isCorrect: false },
            { answerText: 'for (i < 5; i++)', isCorrect: false },
            { answerText: 'for (i < 5)', isCorrect: false },
          ],
        },
        {
          questionText: 'Which built-in method removes the last element from an array and returns it?',
          answerOptions: [
            { answerText: 'pop()', isCorrect: true },
            { answerText: 'push()', isCorrect: false },
            { answerText: 'join()', isCorrect: false },
            { answerText: 'concat()', isCorrect: false },
          ],
        },
        {
          questionText: 'What does the "=== " operator do in JavaScript?',
          answerOptions: [
            { answerText: 'Checks for equal value and type', isCorrect: true },
            { answerText: 'Assigns a value to a variable', isCorrect: false },
            { answerText: 'Compares two values for inequality', isCorrect: false },
            { answerText: 'Performs a logical AND operation', isCorrect: false },
          ],
        },
      ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="success"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h4" fontWeight={600} color="black" noWrap sx={{ flexGrow: 1 }}>
            Learning Tool
          </Typography>
          <Avatar
            alt="Travis Howard"
            src="https://w7.pngwing.com/pngs/391/911/png-transparent-graduation-ceremony-national-secondary-school-high-school-college-graduated-furniture-class-graduate-university.png"
          />
        </Toolbar>
      </AppBar>
    <Card fullWidth sx={{ p: 3, m: 3, textAlign: "center", }}>
      <Box
        sx={{
          
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
        {showScore ? (
          <Typography variant="h3">
            You scored {score} out of {questions.length}
          </Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">
                Question {currentQuestion + 1}/{questions.length}
              </Typography>
              <Typography variant="h6">{questions[currentQuestion].questionText}</Typography>
            </Grid>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <Grid item xs={12} key={index}>
                 <Paper>
                <Button
                  variant="outlined"
                  fullWidth
                  color="success"
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      </Card>
    </ThemeProvider>
  );
};

export default Quiz;