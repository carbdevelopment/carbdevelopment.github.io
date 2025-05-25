
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Trophy, Target, Brain } from "lucide-react";
import { toast } from "sonner";

export const ExercisesSection = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  const exercises = [
    {
      id: 1,
      type: "multiple-choice",
      question: "Care dintre următoarele figuri are exact 2 axe de simetrie?",
      options: ["Cercul", "Pătratul", "Dreptunghiul", "Triunghiul echilateral"],
      correct: 2,
      explanation: "Dreptunghiul are exact 2 axe de simetrie: mediatoarelor laturilor opuse."
    },
    {
      id: 2,
      type: "input",
      question: "Dacă punctul A(3, 5) este simetric față de axa x = 2, care sunt coordonatele punctului A'?",
      placeholder: "Introdu coordonatele sub forma (x, y)",
      correct: "(1, 5)",
      explanation: "Formula: A'(2a - x, y) = A'(2×2 - 3, 5) = A'(1, 5)"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "Câte axe de simetrie are un hexagon regulat?",
      options: ["3", "6", "12", "Infinite"],
      correct: 1,
      explanation: "Un hexagon regulat are 6 axe de simetrie: 3 prin vârfuri opuse și 3 prin mijlocul laturilor opuse."
    },
    {
      id: 4,
      type: "input",
      question: "Care este distanța de la punctul B(7, 3) la axa de simetrie x = 4?",
      placeholder: "Introdu doar numărul",
      correct: "3",
      explanation: "Distanța = |7 - 4| = 3 unități"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "În natură, care dintre următoarele NU prezintă de obicei simetrie axială?",
      options: ["Frunzele de stejar", "Aripile fluturelui", "Cochiliile de melc", "Petalele florilor"],
      correct: 2,
      explanation: "Cochiliile de melc prezintă simetrie de rotație (spirală), nu simetrie axială."
    },
    {
      id: 6,
      type: "input",
      question: "Dacă punctul M(a, b) are simetricul M'(-2, 3) față de axa Ox, care sunt valorile lui a și b?",
      placeholder: "Introdu sub forma a=..., b=...",
      correct: "a=-2, b=-3",
      explanation: "Pentru simetria față de Ox: M'(x, -y), deci a = -2 și b = -3"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "Care figură geometrică are cel mai mare număr de axe de simetrie?",
      options: ["Pătratul", "Hexagonul regulat", "Cercul", "Triunghiul echilateral"],
      correct: 2,
      explanation: "Cercul are infinite axe de simetrie, orice dreaptă care trece prin centru."
    },
    {
      id: 8,
      type: "input",
      question: "Față de ce axă sunt simetrice punctele P(4, -1) și P'(4, 1)?",
      placeholder: "Introdu axa (ex: Ox, Oy)",
      correct: "Ox",
      explanation: "Punctele sunt simetrice față de axa Ox (y = 0) deoarece au aceeași abscisă și ordonate opuse."
    }
  ];

  const handleAnswer = (answer: string | number) => {
    const newAnswers = [...answers];
    newAnswers[currentExercise] = answer.toString();
    setAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const exercise = exercises[currentExercise];
    const userAnswer = answers[currentExercise];
    let isCorrect = false;

    if (exercise.type === "multiple-choice") {
      isCorrect = parseInt(userAnswer) === exercise.correct;
    } else {
      // For input type, ensure both are strings before comparison
      const userAnswerStr = userAnswer || "";
      const correctAnswerStr = typeof exercise.correct === 'string' ? exercise.correct : exercise.correct.toString();
      isCorrect = userAnswerStr.toLowerCase().trim() === correctAnswerStr.toLowerCase();
    }

    const newShowResults = [...showResults];
    newShowResults[currentExercise] = true;
    setShowResults(newShowResults);

    if (isCorrect) {
      setScore(score + 1);
      toast.success("Corect! Felicitări! 🎉");
    } else {
      toast.error("Încercă din nou! 💪");
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentExercise(0);
    setAnswers([]);
    setShowResults([]);
    setScore(0);
    toast("Quiz resetat! Hai să încercăm din nou! 🚀");
  };

  const exercise = exercises[currentExercise];
  const userAnswer = answers[currentExercise];
  const isAnswered = userAnswer !== undefined && userAnswer !== "";
  const showResult = showResults[currentExercise];
  const isComplete = currentExercise === exercises.length - 1 && showResult;

  let isCorrect = false;
  if (exercise.type === "multiple-choice") {
    isCorrect = parseInt(userAnswer) === exercise.correct;
  } else {
    // For input type, ensure both are strings before comparison
    const userAnswerStr = userAnswer || "";
    const correctAnswerStr = typeof exercise.correct === 'string' ? exercise.correct : exercise.correct.toString();
    isCorrect = userAnswerStr.toLowerCase().trim() === correctAnswerStr.toLowerCase();
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Exerciții Practice
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Testează-ți cunoștințele despre simetria axială cu exerciții interactive
        </p>
      </div>

      {/* Progress Bar */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold">Progres: {currentExercise + 1}/{exercises.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Scor: {score}/{exercises.length}</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Current Exercise */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            Exercițiul {currentExercise + 1}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-900">
              {exercise.question}
            </p>
          </div>

          {exercise.type === "multiple-choice" ? (
            <div className="space-y-3">
              {exercise.options?.map((option, index) => (
                <Button
                  key={index}
                  variant={userAnswer === index.toString() ? "default" : "outline"}
                  className="w-full justify-start text-left"
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                >
                  <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          ) : (
            <div>
              <Input
                placeholder={exercise.placeholder}
                value={userAnswer || ""}
                onChange={(e) => handleAnswer(e.target.value)}
                disabled={showResult}
                className="text-lg"
              />
            </div>
          )}

          {!showResult && isAnswered && (
            <Button onClick={checkAnswer} className="w-full" size="lg">
              Verifică răspunsul
            </Button>
          )}

          {showResult && (
            <div className={`p-4 rounded-lg border-l-4 ${
              isCorrect 
                ? "bg-green-50 border-l-green-500" 
                : "bg-red-50 border-l-red-500"
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className={`font-semibold ${
                  isCorrect ? "text-green-800" : "text-red-800"
                }`}>
                  {isCorrect ? "Corect!" : "Incorect!"}
                </span>
              </div>
              <p className={isCorrect ? "text-green-700" : "text-red-700"}>
                {exercise.explanation}
              </p>
              {!isCorrect && exercise.type === "multiple-choice" && (
                <p className="text-gray-600 mt-2">
                  <strong>Răspunsul corect:</strong> {String.fromCharCode(65 + (exercise.correct as number))}. {exercise.options?.[exercise.correct as number]}
                </p>
              )}
              {!isCorrect && exercise.type === "input" && (
                <p className="text-gray-600 mt-2">
                  <strong>Răspunsul corect:</strong> {exercise.correct}
                </p>
              )}
            </div>
          )}

          {showResult && !isComplete && (
            <Button onClick={nextExercise} className="w-full" size="lg">
              Următorul exercițiu →
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Final Results */}
      {isComplete && (
        <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-none shadow-lg">
          <CardContent className="p-8 text-center">
            <Trophy className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quiz Completat!
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Scorul tău final: <strong>{score}/{exercises.length}</strong>
            </p>
            
            <div className="text-lg text-gray-700 mb-6">
              {score === exercises.length && "Perfect!"}
              {score >= exercises.length * 0.8 && score < exercises.length && "Excelent!"}
              {score >= exercises.length * 0.6 && score < exercises.length * 0.8 && "Bine!"}
              {score < exercises.length * 0.6 && "Încearcă din nou!"}
            </div>

            <Button onClick={resetQuiz} size="lg" className="px-8">
              Încearcă din nou
            </Button>
          </CardContent>
        </Card>
      )}  
    </div>
  );
};
