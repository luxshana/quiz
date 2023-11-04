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
          questionText: 'What is the difference between Python 2 and Python 3?',
          answerOptions: [
            { answerText: 'Python 2 is the latest version', isCorrect: false },
            { answerText: 'Python 3 uses a different syntax', isCorrect: false },
            { answerText: 'Python 3 is not backward compatible with Python 2', isCorrect: true },
            { answerText: 'There is no difference between Python 2 and Python 3', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the purpose of the "if" statement in Python?',
          answerOptions: [
            { answerText: 'To define a loop', isCorrect: false },
            { answerText: 'To perform mathematical calculations', isCorrect: false },
            { answerText: 'To check conditions and execute specific code blocks', isCorrect: true },
            { answerText: 'To display output on the console', isCorrect: false },
          ],
        },
        {
          questionText: 'Which of the following is NOT a built-in data type in Python?',
          answerOptions: [
            { answerText: 'Integer', isCorrect: false },
            { answerText: 'List', isCorrect: false },
            { answerText: 'String', isCorrect: false },
            { answerText: 'Function', isCorrect: true },
          ],
        },
        {
          questionText: 'What is the correct way to create a function in Python?',
          answerOptions: [
            { answerText: 'def myFunction:', isCorrect: true },
            { answerText: 'create myFunction:', isCorrect: false },
            { answerText: 'function myFunction():', isCorrect: false },
            { answerText: 'func myFunction():', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the purpose of the "import" statement in Python?',
          answerOptions: [
            { answerText: 'To export data from a file', isCorrect: false },
            { answerText: 'To execute a Python script', isCorrect: false },
            { answerText: 'To include external modules or libraries', isCorrect: true },
            { answerText: 'To define constants in the code', isCorrect: false },
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