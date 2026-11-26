// Вопросы теста
const QUESTIONS = [
  {
    q: "Задание 1. Сколько единиц в двоичной записи десятичного числа 19?",
    answers: ["2", "3", "4", "1"],
    correct: 1,
    expl: "19 = 16 + 2 + 1 = 10011₂. Единиц три."
  },
  {
    q: "Задание 2. Чему равен 1 Кбайт?",
    answers: ["1000 байт", "1024 байта", "8 байт", "1024 бита"],
    correct: 1,
    expl: "1 Кбайт = 2¹⁰ байт = 1024 байта."
  },
  {
    q: "Задание 3. Для какого из слов истинно высказывание:\n(Первая буква гласная) И НЕ (последняя буква гласная)?",
    answers: ["оса", "мир", "арбуз", "лад"],
    correct: 2,
    expl: "Нужно: первая буква гласная И последняя согласная. «Арбуз» — «а» гласная, «з» согласная. Подходит."
  },
  {
    q: "Задание 4. Между населёнными пунктами A, B, C, D построены дороги:\nA→B = 4, B→C = 3, A→C = 10, A→D = 1, D→C = 2.\nЧему равна длина кратчайшего пути из A в C?",
    answers: ["3", "4", "6", "10"],
    correct: 0,
    expl: "Кратчайший путь A→D→C = 1 + 2 = 3."
  },
  {
    q: "Задание 5. В каталоге находятся файлы:\nkot.txt, cat.doc, pets.dat, dog.txt, dog.jpg, dog.pdf.\nСколько файлов имеют расширение .txt?",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    expl: "Расширение — всё после последней точки: .txt у kot.txt и dog.txt."
  },
  {
    q: "Задание 6. Реферат объёмом 16 Кбайт содержит 16 384 символа. Сколько бит памяти занимает один символ?",
    answers: ["8 бит", "4 бита", "16 бит", "1 бит"],
    correct: 0,
    expl: "16 Кбайт = 16 · 1024 · 8 = 131 072 бита. 131 072 / 16 384 = 8 бит."
  },
  {
    q: "Задание 7. Для какого из приведённых значений X истинно высказывание: (X > 5) И НЕ (X > 10)?",
    answers: ["3", "5", "7", "12"],
    correct: 2,
    expl: "(X > 5) истинно для 7 и 12; НЕ (X > 10) истинно, когда X ≤ 10, то есть для 7. Значит, подходит только 7."
  },
  {
  q: "Задание 8. У исполнителя Альфа две команды, которым присвоены номера:\n1. прибавь 3\n2. умножь на 2\nПервая увеличивает число на экране на 3, вторая умножает его на 2.\nСоставьте алгоритм получения из числа 3 числа 18, содержащий не более 4 команд. В ответе запишите только номера команд.",
  answers: ["212", "122", "221", "121"],
  correct: 0,
  expl: "Идём от конца: 18 не делится... нет, делится: 18 : 2 = 9 (команда 2), 9 − 3 = 6 (команда 1), 6 : 2 = 3 (команда 2). Читаем в обратном порядке: 2, 1, 2. Проверка: 3 · 2 = 6, 6 + 3 = 9, 9 · 2 = 18."
  },
  {
  q: "Задание 9. Доступ к файлу test.rar, находящемуся на сервере school.ru, осуществляется по протоколу https. Фрагменты адреса закодированы цифрами от 1 до 7:\n1) ://   2) https   3) school.\n4) /     5) ru      6) test.\n7) rar\nЗапишите последовательность этих цифр, кодирующую адрес указанного файла.",
  answers: ["2135467", "2124356", "2134567", "1234567"],
  correct: 0,
  expl: "Сначала собираем адрес по шаблону «протокол :// сервер / файл»: https://school.ru/test.rar. Теперь заменяем части цифрами: https — 2, :// — 1, school. — 3, ru — 5, / — 4, test. — 6, rar — 7. Получается 2135467."
  },
  {
  q: "Задание 10. В каталоге хранился файл «Отчёт.docx». В этом каталоге создали подкаталог «Квартал» и переместили туда файл. Каким стало полное имя файла, если до перемещения оно было C:\\Документы\\Отчёт.docx?",
  answers: 
    [
      "C:\\Документы\\Квартал\\Отчёт.docx",
      "C:\\Квартал\\Документы\\Отчёт.docx",
      "C:\\Отчёт.docx\\Квартал",
      "C:\\Документы\\Отчёт\\Квартал.docx"
    ],
  correct: 0,
  expl: "При перемещении в подкаталог имя файла не меняется, меняется только путь: добавляется имя подкаталога после текущего пути."
  },
  {
    q: "Задание 11. Скорость передачи данных — 256 000 бит/с. Сколько секунд занимает передача файла объёмом 250 Кбайт?",
    answers: ["4", "8", "10", "16"],
    correct: 1,
    expl: "250 Кбайт = 250 · 1024 · 8 = 2 048 000 бит. 2 048 000 / 256 000 = 8 с."
  },
  {
    q: "Задание 12. Дан алгоритм для исполнителя Чертёжник:\nповтори 4 раз\n  сместиться на (2, 3)\n  сместиться на (−2, −1)\nКонец\nВ какую точку сместится исполнитель из начала координат?",
    answers: ["(0, 8)", "(8, 8)", "(4, 8)", "(0, 12)"],
    correct: 0,
    expl: "За один повтор: (2−2, 3−1) = (0, 2). За 4 повтора: (0, 8)."
  },
  {
    q: "Задание 13. В языке запросов поискового сервера символ «|» означает «ИЛИ», «&» — «И».\nКакой запрос найдёт наименьшее количество страниц?",
    answers: ["собаки & кошки", "собаки | кошки", "собаки & кошки & мыши", "собаки"],
    correct: 2,
    expl: "Чем больше условий через «&», тем меньше найденных страниц. Три условия через И — самый узкий запрос."
  },
  {
    q: "Задание 14. При каких значениях A и B выражение\nНЕ A ИЛИ B\nложно?",
    answers: [
      "A = 0, B = 0",
      "A = 0, B = 1",
      "A = 1, B = 0",
      "A = 1, B = 1"
    ],
    correct: 2,
    expl: "НЕ A ИЛИ B ложно, только если НЕ A = 0 и B = 0, то есть A = 1, B = 0."
  }
];

// Шкала оценивания
function gradeOf(score) {
  if (score >= 12) return { grade: "5", text: "Отлично!", color: "#3fae4a" };
  if (score >= 9) return { grade: "4", text: "Хорошо!", color: "#3b9dd8" };
  if (score >= 5) return { grade: "3", text: "Удовлетворительно.", color: "#e0a83b" };
  return { grade: "2", text: "Нужно ещё подготовиться.", color: "#d84b4b" };
}

// Состояние
let current = 0; // номер вопроса
let score = 0; // счётчик првельных ответов
let userAnswers = []; // тут хранятся ответы 

// Элементы 
const startScreen = document.getElementById("start-screen"); // Стартовый экран
const quizScreen = document.getElementById("quiz-screen"); // Экран с вопросами
const resultScreen = document.getElementById("result-screen"); // Результат
const questionEl = document.getElementById("question"); // Вопросы
const answersEl = document.getElementById("answers"); // Ответ
const explanationEl = document.getElementById("explanation"); // Блок с пояснением 
const nextBtn = document.getElementById("next-btn"); // Кнопка "Далее"
const progressEl = document.getElementById("progress"); // Прогресс

// Запуск 
document.getElementById("start-btn").addEventListener("click", startQuiz); 
// Эта функция должна скрывать стартовый экран, показывать экран теста и выводить первый вопрос.
nextBtn.addEventListener("click", nextQuestion);
// Функция должна увеличивать счётчик вопроса, проверять, не кончились ли вопросы,
// И либо показывать следующий, либо переходить к результатам.
document.getElementById("restart-btn").addEventListener("click", restartQuiz);
// В этой функции сбрасываются все переменные в начальные значения 

function startQuiz() {
  current = 0;
  score = 0;
  userAnswers = [];
  document.getElementById("total").textContent = QUESTIONS.length;
  showSection(quizScreen);
  showQuestion();
}

// Вывод очередного вопроса, очищаем интерфейс, обновляем счётчики и прогресс, создаём кнопки ответов
function showQuestion() {
  const item = QUESTIONS[current];
  questionEl.textContent = item.q;
  answersEl.innerHTML = "";
  explanationEl.style.display = "none";
  nextBtn.style.display = "none";

  document.getElementById("current").textContent = current + 1;
  document.getElementById("score").textContent = score;
  progressEl.style.width = (current / QUESTIONS.length * 100) + "%";

  item.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.addEventListener("click", () => answerQuestion(i, btn));
    answersEl.appendChild(btn);
  });
}

function answerQuestion(index, btn) {
  const item = QUESTIONS[current];
  const buttons = answersEl.querySelectorAll(".answer-btn");
  buttons.forEach(b => (b.disabled = true));

  const isCorrect = index === item.correct;
  userAnswers.push(isCorrect);

  if (isCorrect) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[item.correct].classList.add("correct");
  }

  document.getElementById("score").textContent = score;
  explanationEl.textContent = item.expl;
  explanationEl.style.display = "block";
  nextBtn.style.display = "inline-block";
  nextBtn.textContent = current === QUESTIONS.length - 1 ? "Показать результат" : "Далее";
}

function nextQuestion() {
  current++;
  if (current >= QUESTIONS.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  showSection(resultScreen);
  const g = gradeOf(score);

  document.getElementById("result-title").textContent = "Тест завершён!";
  document.getElementById("result-score").textContent = score + " из " + QUESTIONS.length;
  const gradeBox = document.getElementById("grade-box");
  gradeBox.textContent = "Оценка " + g.grade + " — " + g.text;
  gradeBox.style.background = g.color;

  const review = document.getElementById("review");
  review.innerHTML = "<b>Разбор заданий:</b><br>" + QUESTIONS.map((item, i) => {
    const mark = userAnswers[i] ? "✔" : "✘";
    return mark + " Задание " + (i + 1) + ": " + item.expl;
  }).join("<br><br>");
}

function restartQuiz() {
  showSection(startScreen);
}

function showSection(section) {
  startScreen.style.display = "none";
  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
  section.style.display = "block";
}
