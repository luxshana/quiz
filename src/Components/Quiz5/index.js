import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Paper from '@mui/material/Paper';
const defaultTheme = createTheme();

const Quiz = () => {
    const questions = [
        {
          questionText: "What does SQL stand for?",
          answerOptions: [
            { answerText: "Structured Query Language", isCorrect: true },
            { answerText: "Sequential Query Language", isCorrect: false },
            { answerText: "Standard Query Language", isCorrect: false },
            { answerText: "System Query Language", isCorrect: false },
          ],
        },
        {
          questionText: "Which keyword is used to retrieve data from a SQL database?",
          answerOptions: [
            { answerText: "RETRIEVE", isCorrect: false },
            { answerText: "SELECT", isCorrect: true },
            { answerText: "FETCH", isCorrect: false },
            { answerText: "GET", isCorrect: false },
          ],
        },
        {
          questionText: "Which SQL statement is used to insert new data into a database?",
          answerOptions: [
            { answerText: "ALTER", isCorrect: false },
            { answerText: "UPDATE", isCorrect: false },
            { answerText: "INSERT", isCorrect: true },
            { answerText: "CREATE", isCorrect: false },
          ],
        },
        {
          questionText: "What is the result of the following SQL statement?\n\nSELECT * FROM customers WHERE age > 25;",
          answerOptions: [
            { answerText: "Returns all customers", isCorrect: false },
            { answerText: "Returns customers with an age greater than 25", isCorrect: true },
            { answerText: "Returns customers with an age less than 25", isCorrect: false },
            { answerText: "Returns customers with an age equal to 25", isCorrect: false },
          ],
        },
        {
          questionText: "Which SQL statement is used to delete data from a database?",
          answerOptions: [
            { answerText: "ERASE", isCorrect: false },
            { answerText: "ELIMINATE", isCorrect: false },
            { answerText: "REMOVE", isCorrect: false },
            { answerText: "DELETE", isCorrect: true },
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
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="success"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h4"
            fontWeight={600}
            color="black"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Learning Tool
          </Typography>
          <Avatar
            alt="Travis Howard"
            src="https://w7.pngwing.com/pngs/391/911/png-transparent-graduation-ceremony-national-secondary-school-high-school-college-graduated-furniture-class-graduate-university.png"
          />
        </Toolbar>
      </AppBar>
      <Card fullWidth sx={{ p: 3, m: 3, textAlign: "center" }}>
        <Box fullWidth>
          {showScore ? (
            <Typography variant="h3" fontWeight={500}>
              You scored {score} out of {questions.length}
            </Typography>
          ) : (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight={500}>
                  Question {currentQuestion + 1}/{questions.length}
                </Typography>
                <Typography variant="h6">
                  {questions[currentQuestion].questionText}
                </Typography>
              </Grid>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper>
                    <Button
                      variant="outlined"
                      fullWidth
                      color="success"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </Button>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>
          )}
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default Quiz;
