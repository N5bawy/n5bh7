const topics = [
  { id: "intro", label: "مدخل إلى الفيزياء" },
  { id: "tables", label: "الجداول والوحدات" },
  { id: "motion", label: "الموقع والزمن" },
  { id: "acceleration", label: "التسارع والسقوط الحر" },
  { id: "forces", label: "القوة والحركة" },
  { id: "newton", label: "قوانين نيوتن" },
  { id: "tension", label: "الشد والعمودية" }
];

const baseQuantities = [
  ["الطول", "meter", "m"],
  ["الكتلة", "kilogram", "kg"],
  ["الزمن", "second", "s"],
  ["درجة الحرارة", "Kelvin", "K"],
  ["كمية المادة", "mole", "mol"],
  ["التيار الكهربائي", "ampere", "A"],
  ["شدة الإضاءة", "candela", "cd"]
];

const prefixes = [
  ["femto", "f", "10^-15"],
  ["pico", "p", "10^-12"],
  ["nano", "n", "10^-9"],
  ["micro", "µ", "10^-6"],
  ["milli", "m", "10^-3"],
  ["centi", "c", "10^-2"],
  ["deci", "d", "10^-1"],
  ["kilo", "k", "10^3"],
  ["mega", "M", "10^6"],
  ["giga", "G", "10^9"],
  ["tera", "T", "10^12"]
];

const questions = [
  {
    id: "q1",
    topic: "intro",
    difficulty: "easy",
    type: "mcq",
    time: 35,
    title: "ما أفضل وصف للفيزياء؟",
    options: [
      "علم يدرس المادة والطاقة والعلاقات بينهما",
      "علم يدرس أسماء العلماء فقط",
      "طريقة لحفظ القوانين بدون فهم",
      "فرع لا يحتاج قياسا ولا تجربة"
    ],
    answer: 0,
    explain: "الفيزياء تهتم بالمادة والطاقة والحركة والقوى والقياس، وتربط ذلك بالتجربة والنماذج."
  },
  {
    id: "q2",
    topic: "intro",
    difficulty: "easy",
    type: "tf",
    time: 30,
    title: "الرياضيات في الفيزياء تستخدم لوصف العلاقات بين الكميات والتنبؤ بالنتائج.",
    answer: true,
    explain: "صحيح. الرياضيات لغة دقيقة تساعدنا نحول الملاحظات إلى علاقات مثل السرعة = المسافة ÷ الزمن."
  },
  {
    id: "q3",
    topic: "intro",
    difficulty: "medium",
    type: "mcq",
    time: 35,
    title: "ما فائدة النماذج العلمية؟",
    options: [
      "تمثيل فكرة أو جسم أو نظام لتسهيل دراسته",
      "تعقيد الدرس بدون سبب",
      "إلغاء الحاجة إلى القياس",
      "إثبات أن كل الأجسام تتحرك بسرعة واحدة"
    ],
    answer: 0,
    explain: "النموذج العلمي يبسط الواقع، مثل نموذج الجسيم النقطي الذي يمثل الجسم بنقطة عند دراسة مساره."
  },
  {
    id: "q4",
    topic: "tables",
    difficulty: "medium",
    type: "matchBase",
    time: 90,
    title: "رتب جدول 1-1: اختر الوحدة الأساسية والرمز المناسبين لكل كمية أساسية.",
    explain: "هذه هي كميات النظام الدولي الأساسية المهمة في الجدول: الطول m، الكتلة kg، الزمن s، الحرارة K، كمية المادة mol، التيار A، شدة الإضاءة cd."
  },
  {
    id: "q5",
    topic: "tables",
    difficulty: "medium",
    type: "prefix",
    time: 90,
    title: "رتب جدول 1-2: اختر الرمز والقوة لكل بادئة.",
    explain: "البادئات تغير مقدار الوحدة بقوى العدد 10؛ مثلا kilo تعني 10^3 و milli تعني 10^-3."
  },
  {
    id: "q6",
    topic: "motion",
    difficulty: "easy",
    type: "mcq",
    time: 35,
    title: "في نظام الإحداثيات، ماذا نسمي الموقع الذي تكون عنده قيمة الموقع صفرا؟",
    options: ["نقطة الأصل", "السرعة المتجهة", "القوة المحصلة", "الزمن النهائي"],
    answer: 0,
    explain: "نقطة الأصل هي المرجع الذي نقيس منه الموقع والإزاحة."
  },
  {
    id: "q7",
    topic: "motion",
    difficulty: "medium",
    type: "mcq",
    time: 45,
    title: "عداء موقعه عند t = 2 s يساوي 10 m، وعند t = 4 s يساوي 20 m. ما سرعته المتوسطة؟",
    options: ["5 m/s", "10 m/s", "20 m/s", "2 m/s"],
    answer: 0,
    explain: "السرعة المتوسطة = التغير في الموقع ÷ الزمن = (20-10) ÷ (4-2) = 5 m/s."
  },
  {
    id: "q8",
    topic: "motion",
    difficulty: "hard",
    type: "mcq",
    time: 55,
    title: "إذا كان منحنى الموقع والزمن خطا مستقيما مائلا للأعلى، ماذا يعني ذلك غالبا؟",
    options: [
      "الجسم يتحرك بسرعة منتظمة في الاتجاه الموجب",
      "الجسم ساكن تماما",
      "الجسم يتحرك بسرعة عشوائية لا يمكن وصفها",
      "لا توجد علاقة بين الموقع والزمن"
    ],
    answer: 0,
    explain: "ميل منحنى الموقع والزمن يمثل السرعة المتجهة. الخط المستقيم يعني سرعة منتظمة، والميل الموجب يعني اتجاه موجب."
  },
  {
    id: "q9",
    topic: "motion",
    difficulty: "medium",
    type: "graph",
    time: 60,
    title: "من الرسم: خط الموقع والزمن يمر بالنقاط (1s,5m) و(6s,30m). ما قيمة الموقع عند 4.5 s؟",
    answerText: "22.5",
    keywords: ["22.5", "٢٢.٥"],
    explain: "الميل 5 m/s، إذن عند 4.5 s يكون الموقع = 5 × 4.5 = 22.5 m."
  },
  {
    id: "q10",
    topic: "acceleration",
    difficulty: "medium",
    type: "tf",
    time: 40,
    title: "إذا كان التسارع موجبا، فمن المستحيل أن تكون سرعة الجسم سالبة.",
    answer: false,
    explain: "خطأ. إشارة التسارع لا تحدد وحدها إشارة السرعة. يمكن لجسم يتحرك في الاتجاه السالب أن يكون تسارعه موجبا فتقل سرعته السالبة تدريجيا."
  },
  {
    id: "q11",
    topic: "acceleration",
    difficulty: "easy",
    type: "mcq",
    time: 35,
    title: "في السقوط الحر قرب سطح الأرض، ما القوة الأساسية المؤثرة في الجسم إذا أهملنا مقاومة الهواء؟",
    options: ["قوة الجاذبية", "قوة الشد", "قوة دفع أفقية", "قوة كهربائية فقط"],
    answer: 0,
    explain: "عند إهمال مقاومة الهواء، تسارع الجسم الساقط يكون بسبب الجاذبية الأرضية."
  },
  {
    id: "q12",
    topic: "acceleration",
    difficulty: "hard",
    type: "mcq",
    time: 50,
    title: "في نموذج جسيم نقطي، المسافات بين النقاط تكبر مع الزمن في اتجاه الحركة. ماذا نستنتج؟",
    options: ["الجسم يتسارع", "الجسم ساكن", "الجسم يتباطأ دائما", "لا توجد حركة"],
    answer: 0,
    explain: "كبر المسافات بين مواقع متتالية خلال أزمنة متساوية يعني أن السرعة تزداد، أي يوجد تسارع."
  },
  {
    id: "q13",
    topic: "forces",
    difficulty: "easy",
    type: "mcq",
    time: 35,
    title: "القوة في الفيزياء هي:",
    options: [
      "مؤثر يغير حركة الجسم أو يحاول تغييرها",
      "اسم آخر للكتلة",
      "كمية لا اتجاه لها أبدا",
      "شيء يظهر فقط في الأجسام الساكنة"
    ],
    answer: 0,
    explain: "القوة دفع أو سحب، وقد تغير سرعة الجسم أو اتجاهه أو شكله."
  },
  {
    id: "q14",
    topic: "forces",
    difficulty: "medium",
    type: "mcq",
    time: 40,
    title: "ماذا نقصد بالنظام عند تحليل القوى؟",
    options: [
      "الجسم أو الأجسام التي نختار دراستها",
      "كل شيء في الكون بدون استثناء",
      "السطح فقط",
      "القوة الأكبر فقط"
    ],
    answer: 0,
    explain: "تحديد النظام يساعدنا نقرر أي قوى تؤثر فيه وأي قوى تعتبر خارجية."
  },
  {
    id: "q15",
    topic: "forces",
    difficulty: "medium",
    type: "tf",
    time: 35,
    title: "قوة التلامس تظهر عندما يلامس جسم جسما آخر مثل دفع الطاولة أو احتكاك الحذاء بالأرض.",
    answer: true,
    explain: "صحيح. أمثلة قوى التلامس: القوة العمودية، الاحتكاك، الشد، والدفع المباشر."
  },
  {
    id: "q16",
    topic: "newton",
    difficulty: "medium",
    type: "mcq",
    time: 45,
    title: "قوتان متساويتان في المقدار ومتعاكستان في الاتجاه وتؤثران في جسمين مختلفين تسمى:",
    options: ["زوجي التأثير المتبادل", "قوة محصلة على جسم واحد", "كتلة الجسم", "سرعة لحظية"],
    answer: 0,
    explain: "هذا هو معنى أزواج التأثير المتبادل في قانون نيوتن الثالث: قوتان على جسمين مختلفين."
  },
  {
    id: "q17",
    topic: "newton",
    difficulty: "hard",
    type: "tf",
    time: 50,
    title: "في قانون نيوتن الثالث، قوتا الفعل ورد الفعل تلغيان بعضهما دائما لأنهما متساويتان ومتعاكستان.",
    answer: false,
    explain: "خطأ. هما لا تلغيان بعضهما لأن كل قوة تؤثر في جسم مختلف، وليستا على الجسم نفسه."
  },
  {
    id: "q18",
    topic: "newton",
    difficulty: "medium",
    type: "mcq",
    time: 45,
    title: "كرة على الأرض ساكنة. الأرض تؤثر في الكرة بقوة عمودية لأعلى. ما القوة المتبادلة معها؟",
    options: [
      "الكرة تؤثر في الأرض بقوة لأسفل",
      "الأرض تؤثر في الكرة بقوة لأسفل",
      "الكرة لا تؤثر في الأرض أبدا",
      "قوة الشد في حبل"
    ],
    answer: 0,
    explain: "زوج التأثير يكون بين جسمين: الأرض على الكرة لأعلى، والكرة على الأرض لأسفل بالمقدار نفسه."
  },
  {
    id: "q19",
    topic: "tension",
    difficulty: "medium",
    type: "mcq",
    time: 45,
    title: "ما قوة الشد؟",
    options: [
      "قوة يؤثر بها حبل أو خيط مشدود في جسم متصل به",
      "قوة تظهر فقط في السوائل",
      "قوة تجعل الكتلة تختفي",
      "قوة لا علاقة لها بالتلامس"
    ],
    answer: 0,
    explain: "الشد قوة تلامس تنتقل عبر الحبل أو الخيط عندما يكون مشدودا."
  },
  {
    id: "q20",
    topic: "tension",
    difficulty: "hard",
    type: "mcq",
    time: 50,
    title: "فريقان يشدان حبلا بقوة 500 N من كل طرف والحبل لا يتحرك. ما مقدار الشد في الحبل تقريبا؟",
    options: ["500 N", "1000 N", "0 N", "250 N"],
    answer: 0,
    explain: "في الحالة المتزنة، الشد في الحبل يساوي قوة أحد الطرفين، وليس مجموع القوتين."
  },
  {
    id: "q21",
    topic: "tension",
    difficulty: "medium",
    type: "mcq",
    time: 45,
    title: "القوة العمودية هي:",
    options: [
      "قوة تلامس يؤثر بها السطح في الجسم وتكون عمودية على السطح",
      "قوة أفقية دائما",
      "قوة لا تظهر إلا عند وجود حبل",
      "قوة الجاذبية نفسها"
    ],
    answer: 0,
    explain: "القوة العمودية مصدرها السطح، واتجاهها عمودي على سطح التلامس."
  },
  {
    id: "q22",
    topic: "intro",
    difficulty: "hard",
    type: "text",
    time: 70,
    title: "سؤال مقالي قصير: اكتب بجملة واحدة لماذا نستخدم الرياضيات في الفيزياء.",
    keywords: ["وصف", "علاقة", "تنبؤ", "قياس", "الكميات", "القوانين"],
    explain: "إجابة ممتازة تتضمن فكرة أن الرياضيات تصف العلاقات بين الكميات وتساعد على التنبؤ والقياس بدقة."
  }
];

const state = {
  difficulty: "medium",
  activeTopic: "all",
  pool: [],
  current: null,
  currentIndex: 0,
  score: 0,
  answered: false,
  selected: null,
  timerId: null,
  remaining: 45,
  totalTime: 45,
  usedIds: new Set(JSON.parse(localStorage.getItem("physicsUsedIds") || "[]")),
  matchSelections: {},
  prefixSelections: {},
  particlePoints: []
};

const $ = (selector) => document.querySelector(selector);

const els = {
  startBtn: $("#startBtn"),
  randomModelBtn: $("#randomModelBtn"),
  jumpInteractiveBtn: $("#jumpInteractiveBtn"),
  newModelBtn: $("#newModelBtn"),
  resetBtn: $("#resetBtn"),
  revealBtn: $("#revealBtn"),
  checkBtn: $("#checkBtn"),
  nextBtn: $("#nextBtn"),
  topicList: $("#topicList"),
  scoreText: $("#scoreText"),
  countText: $("#countText"),
  timer: $("#timer"),
  progressBar: $("#progressBar"),
  topicTag: $("#topicTag"),
  difficultyTag: $("#difficultyTag"),
  questionTitle: $("#questionTitle"),
  questionBody: $("#questionBody"),
  feedback: $("#feedback"),
  summary: $("#summary"),
  interactions: $("#interactions")
};

function saveUsed() {
  localStorage.setItem("physicsUsedIds", JSON.stringify([...state.usedIds]));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function difficultyLabel(value) {
  return { easy: "سهل", medium: "متوسط", hard: "صعب" }[value] || "متوسط";
}

function topicLabel(id) {
  return topics.find((topic) => topic.id === id)?.label || "كل الدروس";
}

function buildTopics() {
  els.topicList.innerHTML = "";
  const all = document.createElement("button");
  all.className = "topic-btn active";
  all.textContent = "كل الدروس";
  all.onclick = () => setTopic("all");
  all.dataset.topic = "all";
  els.topicList.appendChild(all);

  topics.forEach((topic) => {
    const button = document.createElement("button");
    button.className = "topic-btn";
    button.textContent = topic.label;
    button.dataset.topic = topic.id;
    button.onclick = () => setTopic(topic.id);
    els.topicList.appendChild(button);
  });
}

function setTopic(topicId) {
  state.activeTopic = topicId;
  document.querySelectorAll(".topic-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.topic === topicId);
  });
  startModel(false);
}

function setDifficulty(value) {
  state.difficulty = value;
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === value);
  });
  els.difficultyTag.textContent = difficultyLabel(value);
}

function filteredQuestions() {
  let list = questions.filter((q) => state.activeTopic === "all" || q.topic === state.activeTopic);
  const levels = state.difficulty === "easy"
    ? ["easy", "medium"]
    : state.difficulty === "medium"
      ? ["easy", "medium", "hard"]
      : ["medium", "hard"];
  list = list.filter((q) => levels.includes(q.difficulty));
  const unused = list.filter((q) => !state.usedIds.has(q.id));
  if (unused.length >= 8) return unused;
  return list;
}

function startModel(scroll = true) {
  stopTimer();
  state.pool = shuffle(filteredQuestions()).slice(0, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.selected = null;
  els.summary.classList.remove("show");
  if (!state.pool.length) {
    els.questionTitle.textContent = "ما فيه أسئلة لهذا الاختيار حاليا.";
    return;
  }
  showQuestion();
  updateStats();
  if (scroll) $("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetAll() {
  state.usedIds.clear();
  saveUsed();
  state.score = 0;
  state.currentIndex = 0;
  startModel(false);
}

function showQuestion() {
  stopTimer();
  state.current = state.pool[state.currentIndex];
  state.answered = false;
  state.selected = null;
  state.matchSelections = {};
  state.prefixSelections = {};
  els.feedback.className = "feedback";
  els.feedback.textContent = "";
  els.checkBtn.disabled = false;
  els.revealBtn.disabled = false;
  els.topicTag.textContent = topicLabel(state.current.topic);
  els.difficultyTag.textContent = difficultyLabel(state.current.difficulty);
  els.questionTitle.textContent = state.current.title;
  renderBody(state.current);
  state.totalTime = state.current.time || 45;
  state.remaining = state.totalTime;
  startTimer();
  updateStats();
}

function renderBody(question) {
  els.questionBody.innerHTML = "";

  if (question.type === "mcq" || question.type === "tf") {
    const options = question.type === "tf" ? ["صح", "خطأ"] : question.options;
    const wrap = document.createElement("div");
    wrap.className = "options";
    options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option";
      button.innerHTML = `<span class="mark">${index + 1}</span><span>${option}</span>`;
      button.onclick = () => selectOption(index, button);
      wrap.appendChild(button);
    });
    els.questionBody.appendChild(wrap);
    return;
  }

  if (question.type === "text") {
    els.questionBody.innerHTML = `
      <div class="answer-box">
        <textarea id="textAnswer" placeholder="اكتب إجابتك هنا... مثال: تستخدم الرياضيات لوصف العلاقة بين الكميات والتنبؤ بالنتائج."></textarea>
      </div>
    `;
    return;
  }

  if (question.type === "graph") {
    els.questionBody.innerHTML = `
      <div class="sim-layout">
        <div class="sim-box"><canvas id="graphCanvas" width="700" height="320"></canvas></div>
        <div class="answer-box">
          <label for="graphAnswer">اكتب قيمة الموقع بالمتر</label>
          <textarea id="graphAnswer" style="min-height:76px" placeholder="مثال: 22.5"></textarea>
        </div>
      </div>
    `;
    drawPositionGraph();
    return;
  }

  if (question.type === "matchBase") {
    renderBaseMatch();
    return;
  }

  if (question.type === "prefix") {
    renderPrefixMatch();
  }
}

function selectOption(index, button) {
  if (state.answered) return;
  state.selected = index;
  document.querySelectorAll(".option").forEach((option) => option.classList.remove("selected"));
  button.classList.add("selected");
}

function renderBaseMatch() {
  const unitOptions = shuffle(baseQuantities.map((row) => row[1]));
  const symbolOptions = shuffle(baseQuantities.map((row) => row[2]));
  const wrap = document.createElement("div");
  wrap.className = "matching-grid";
  baseQuantities.forEach(([quantity], index) => {
    const row = document.createElement("div");
    row.className = "match-row";
    row.innerHTML = `
      <b>${quantity}</b>
      <select data-match-unit="${index}">
        <option value="">الوحدة الأساسية</option>
        ${unitOptions.map((unit) => `<option value="${unit}">${unit}</option>`).join("")}
      </select>
      <select data-match-symbol="${index}">
        <option value="">الرمز</option>
        ${symbolOptions.map((symbol) => `<option value="${symbol}">${symbol}</option>`).join("")}
      </select>
    `;
    wrap.appendChild(row);
  });
  els.questionBody.appendChild(wrap);
}

function renderPrefixMatch() {
  const chosen = shuffle(prefixes).slice(0, 7);
  state.prefixRows = chosen;
  const symbols = shuffle(chosen.map((row) => row[1]));
  const powers = shuffle(chosen.map((row) => row[2]));
  const wrap = document.createElement("div");
  wrap.className = "prefix-grid";
  chosen.forEach(([name], index) => {
    const row = document.createElement("div");
    row.className = "match-row";
    row.innerHTML = `
      <b>${name}</b>
      <select data-prefix-symbol="${index}">
        <option value="">الرمز</option>
        ${symbols.map((symbol) => `<option value="${symbol}">${symbol}</option>`).join("")}
      </select>
      <select data-prefix-power="${index}">
        <option value="">القوة</option>
        ${powers.map((power) => `<option value="${power}">${power}</option>`).join("")}
      </select>
    `;
    wrap.appendChild(row);
  });
  els.questionBody.appendChild(wrap);
}

function checkAnswer(forceReveal = false) {
  if (!state.current || state.answered) return;
  const q = state.current;
  let correct = false;
  let detail = "";

  if (q.type === "mcq") {
    correct = state.selected === q.answer;
    markOptions(q.answer);
    detail = `الإجابة الصحيحة: ${q.options[q.answer]}`;
  }

  if (q.type === "tf") {
    const correctIndex = q.answer ? 0 : 1;
    correct = state.selected === correctIndex;
    markOptions(correctIndex);
    detail = `الإجابة الصحيحة: ${q.answer ? "صح" : "خطأ"}`;
  }

  if (q.type === "text") {
    const value = ($("#textAnswer")?.value || "").trim();
    correct = q.keywords.some((word) => value.includes(word));
    detail = "إجابة نموذجية: تستخدم الرياضيات لوصف العلاقات بين الكميات الفيزيائية والتنبؤ بالنتائج بدقة.";
  }

  if (q.type === "graph") {
    const value = ($("#graphAnswer")?.value || "").replace("٫", ".").trim();
    const numeric = Number(value);
    correct = Math.abs(numeric - 22.5) <= 0.2 || q.keywords?.includes(value);
    detail = "الإجابة الصحيحة: 22.5 m";
  }

  if (q.type === "matchBase") {
    let points = 0;
    baseQuantities.forEach((row, index) => {
      const unit = document.querySelector(`[data-match-unit="${index}"]`)?.value;
      const symbol = document.querySelector(`[data-match-symbol="${index}"]`)?.value;
      if (unit === row[1]) points += .5;
      if (symbol === row[2]) points += .5;
    });
    correct = points >= baseQuantities.length - 1;
    detail = `درجتك في الجدول: ${points} من ${baseQuantities.length}. المطلوب مطابقة الكمية مع الوحدة والرمز.`;
  }

  if (q.type === "prefix") {
    let points = 0;
    state.prefixRows.forEach((row, index) => {
      const symbol = document.querySelector(`[data-prefix-symbol="${index}"]`)?.value;
      const power = document.querySelector(`[data-prefix-power="${index}"]`)?.value;
      if (symbol === row[1]) points += .5;
      if (power === row[2]) points += .5;
    });
    correct = points >= state.prefixRows.length - 1;
    detail = `درجتك في البادئات: ${points} من ${state.prefixRows.length}. ركز على الرمز والقوة فقط.`;
  }

  if (forceReveal) correct = false;
  finishQuestion(correct, `${detail}<br>${q.explain}`);
}

function markOptions(correctIndex) {
  document.querySelectorAll(".option").forEach((option, index) => {
    option.classList.toggle("correct", index === correctIndex);
    option.classList.toggle("wrong", state.selected === index && index !== correctIndex);
  });
}

function finishQuestion(correct, message) {
  state.answered = true;
  stopTimer();
  els.checkBtn.disabled = true;
  els.revealBtn.disabled = true;
  if (correct) state.score += state.current.difficulty === "hard" ? 3 : state.current.difficulty === "medium" ? 2 : 1;
  state.usedIds.add(state.current.id);
  saveUsed();
  els.feedback.className = `feedback show ${correct ? "good" : "bad"}`;
  els.feedback.innerHTML = `<b>${correct ? "ممتاز، إجابة صحيحة." : "قريبة، بس تحتاج تعديل."}</b><br>${message}`;
  updateStats();
}

function nextQuestion() {
  if (!state.pool.length) return;
  if (state.currentIndex < state.pool.length - 1) {
    state.currentIndex += 1;
    showQuestion();
  } else {
    showSummary();
  }
}

function showSummary() {
  stopTimer();
  els.summary.classList.add("show");
  const max = state.pool.reduce((sum, q) => sum + (q.difficulty === "hard" ? 3 : q.difficulty === "medium" ? 2 : 1), 0);
  els.summary.innerHTML = `
    <h2>انتهى النموذج</h2>
    <p class="lead">درجتك: <b>${state.score}</b> من <b>${max}</b>. الأسئلة اللي خلصتها محفوظة عشان النماذج الجاية تقلل التكرار.</p>
    <button class="btn primary" onclick="startModel(true)">نموذج جديد بدون تكرار قدر الإمكان</button>
  `;
  els.summary.scrollIntoView({ behavior: "smooth", block: "center" });
}

function updateStats() {
  els.scoreText.textContent = state.score;
  els.countText.textContent = state.pool.length ? `${state.currentIndex + 1}/${state.pool.length}` : "0/0";
  els.progressBar.style.width = state.pool.length ? `${((state.currentIndex + 1) / state.pool.length) * 100}%` : "0%";
}

function startTimer() {
  updateTimerView();
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    updateTimerView();
    if (state.remaining <= 0) {
      stopTimer();
      if (!state.answered) {
        checkAnswer(true);
      }
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function updateTimerView() {
  els.timer.textContent = Math.max(0, state.remaining);
  const pct = Math.max(0, state.remaining / state.totalTime);
  els.timer.style.setProperty("--angle", `${pct * 360}deg`);
  if (pct < .25) {
    els.timer.style.background = `conic-gradient(var(--red) ${pct * 360}deg, #e5edf5 0deg)`;
  } else if (pct < .5) {
    els.timer.style.background = `conic-gradient(var(--yellow) ${pct * 360}deg, #e5edf5 0deg)`;
  } else {
    els.timer.style.background = `conic-gradient(var(--green) ${pct * 360}deg, #e5edf5 0deg)`;
  }
}

function drawPositionGraph() {
  const canvas = $("#graphCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const pad = 48;
  const w = canvas.width - pad * 2;
  const h = canvas.height - pad * 2;
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 6; i++) {
    const x = pad + (i / 6) * w;
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, pad + h);
    ctx.stroke();
  }
  for (let i = 0; i <= 6; i++) {
    const y = pad + (i / 6) * h;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + w, y);
    ctx.stroke();
  }
  ctx.strokeStyle = "#16202a";
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, w, h);
  ctx.strokeStyle = "#1f9d57";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(pad, pad + h);
  ctx.lineTo(pad + w, pad);
  ctx.stroke();
  ctx.fillStyle = "#16202a";
  ctx.font = "18px Tahoma";
  ctx.textAlign = "center";
  for (let i = 1; i <= 6; i++) {
    ctx.fillText(String(i), pad + (i / 6) * w, pad + h + 30);
    ctx.fillText(String(i * 5), pad - 25, pad + h - (i / 6) * h + 6);
  }
  ctx.fillText("الزمن (s)", pad + w / 2, canvas.height - 8);
  ctx.save();
  ctx.translate(17, pad + h / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("الموقع (m)", 0, 0);
  ctx.restore();
}

function setupParticleCanvas() {
  const canvas = $("#particleCanvas");
  const ctx = canvas.getContext("2d");
  const targets = [
    { x: 610, y: 218 },
    { x: 520, y: 218 },
    { x: 405, y: 218 },
    { x: 265, y: 218 },
    { x: 100, y: 218 }
  ];

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#d1d5db";
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 40, 630, 170);
    ctx.fillStyle = "#16202a";
    ctx.font = "48px Tahoma";
    [580, 500, 390, 255, 100].forEach((x, i) => {
      ctx.fillText("🏃", x, 140 + (i % 2) * 3);
    });
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(625, 230);
    ctx.lineTo(82, 230);
    ctx.stroke();
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.moveTo(82, 230);
    ctx.lineTo(100, 220);
    ctx.lineTo(100, 240);
    ctx.closePath();
    ctx.fill();
    state.particlePoints.forEach((point, index) => {
      ctx.fillStyle = "#111827";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#1463ff";
      ctx.font = "18px Tahoma";
      ctx.fillText(String(index + 1), point.x, point.y - 14);
    });
  }

  canvas.addEventListener("click", (event) => {
    if (state.particlePoints.length >= 5) return;
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (canvas.width / rect.width);
    const y = (event.clientY - rect.top) * (canvas.height / rect.height);
    state.particlePoints.push({ x, y });
    draw();
  });

  $("#checkParticleBtn").onclick = () => {
    let correct = 0;
    state.particlePoints.forEach((point, index) => {
      const target = targets[index];
      const distance = Math.hypot(point.x - target.x, point.y - target.y);
      if (distance < 42) correct += 1;
    });
    const note = $("#particleNote");
    if (correct >= 4) {
      note.textContent = `ممتاز: ${correct}/5 نقاط قريبة من النموذج الصحيح. هذا يمثل تسارعا لأن المسافات تكبر.`;
      note.style.borderColor = "rgba(31,157,87,.45)";
    } else {
      note.textContent = `حاول مرة ثانية: ${correct}/5. ضع النقاط على الخط السفلي واجعل المسافات بينها تزداد تدريجيا.`;
      note.style.borderColor = "rgba(217,54,54,.42)";
      canvas.classList.add("shake");
      setTimeout(() => canvas.classList.remove("shake"), 320);
    }
  };

  $("#clearParticleBtn").onclick = () => {
    state.particlePoints = [];
    $("#particleNote").textContent = "المطلوب: ضع 5 نقاط تتباعد تدريجيا من اليمين لليسار لتمثيل جسم يتسارع.";
    draw();
  };

  draw();
}

function setupBall() {
  const stage = $("#ballStage");
  const ball = $("#movingBall");
  let x = 38;
  let v = 0;
  let last = performance.now();

  function push() {
    v += 14;
    ball.style.filter = "brightness(1.16)";
    setTimeout(() => { ball.style.filter = "none"; }, 180);
  }

  stage.addEventListener("click", push);
  ball.addEventListener("click", (event) => {
    event.stopPropagation();
    push();
  });

  function tick(now) {
    const dt = Math.min(32, now - last) / 16.67;
    last = now;
    x += v * dt;
    v *= 0.965;
    if (x > stage.clientWidth - 98) {
      x = stage.clientWidth - 98;
      v *= -0.32;
    }
    if (x < 26) {
      x = 26;
      v = 0;
    }
    if (Math.abs(v) < .03) v = 0;
    ball.style.right = `${x}px`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function setupRope() {
  const stage = $("#ropeStage");
  const left = $("#leftHandle");
  const right = $("#rightHandle");
  const rope = $("#ropeLine");
  const note = $("#ropeNote");
  const pos = { left: 22, right: 22 };
  let dragging = null;

  function update() {
    left.style.left = `${pos.left}px`;
    right.style.right = `${pos.right}px`;
    const tension = Math.max(pos.left - 22, pos.right - 22);
    rope.style.left = `${80 + Math.max(0, pos.left - 22) * .35}px`;
    rope.style.right = `${80 + Math.max(0, pos.right - 22) * .35}px`;
    rope.style.transform = `scaleY(${1 + tension / 180})`;
    rope.classList.toggle("breaking", pos.left > 90 && pos.right > 90);
    if (pos.left > 90 && pos.right > 90) {
      note.textContent = "الشد كبير من الطرفين: الحبل على وشك الانقطاع. كل طرف يؤثر بقوة في الآخر.";
      note.style.borderColor = "rgba(217,54,54,.42)";
    } else if (pos.left > 70 || pos.right > 70) {
      note.textContent = "الحبل مشدود باتجاه السحب. الشد قوة تنتقل عبر الحبل.";
      note.style.borderColor = "rgba(255,183,3,.55)";
    } else {
      note.textContent = "الشد الحالي: متزن.";
      note.style.borderColor = "rgba(24,38,55,.14)";
    }
  }

  function pointerMove(event) {
    if (!dragging) return;
    const rect = stage.getBoundingClientRect();
    if (dragging === "left") {
      pos.left = Math.max(22, Math.min(128, event.clientX - rect.left - 26));
    } else {
      pos.right = Math.max(22, Math.min(128, rect.right - event.clientX - 26));
    }
    update();
  }

  function stop() { dragging = null; }

  left.addEventListener("pointerdown", (event) => {
    dragging = "left";
    left.setPointerCapture(event.pointerId);
  });
  right.addEventListener("pointerdown", (event) => {
    dragging = "right";
    right.setPointerCapture(event.pointerId);
  });
  window.addEventListener("pointermove", pointerMove);
  window.addEventListener("pointerup", stop);
  update();
}

document.querySelectorAll("[data-difficulty]").forEach((button) => {
  button.addEventListener("click", () => {
    setDifficulty(button.dataset.difficulty);
    startModel(false);
  });
});

els.startBtn.onclick = () => startModel(true);
els.randomModelBtn.onclick = () => startModel(true);
els.newModelBtn.onclick = () => startModel(true);
els.resetBtn.onclick = resetAll;
els.checkBtn.onclick = () => checkAnswer(false);
els.revealBtn.onclick = () => checkAnswer(true);
els.nextBtn.onclick = nextQuestion;
els.jumpInteractiveBtn.onclick = () => els.interactions.scrollIntoView({ behavior: "smooth", block: "start" });

buildTopics();
setDifficulty("medium");
setupParticleCanvas();
setupBall();
setupRope();
updateStats();
