(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");
    const iconBurger = document.querySelector(".icon-menu-franchising");
    const menuBurger = document.querySelector(".menu-header-franchising__body");
    window.onscroll = () => {
        if (sections && navLinks && iconBurger && menuBurger) sections.forEach((sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - document.querySelector("header").offsetHeight;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            if (top >= offset && top < offset + height) {
                navLinks.forEach((links => {
                    links?.classList.remove("active");
                    document.querySelector(`header nav a[href*=${id}]`)?.classList.add("active");
                }));
                sec.classList.add("show-animate");
            } else sec.classList.remove("show-animate");
            if (iconBurger.classList.contains("menu-open")) {
                document.body.classList.remove("_lock");
                menuBurger.classList.remove("menu-open");
                iconBurger.classList.remove("menu-open");
            }
        }));
    };
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const questions = [ {
        question: "Что произойдет, если не добавить <!DOCTYPE> в документ HTML?",
        answers: [ "Браузер войдёт в режим совместимости, и страница будет показана с ограниченным функционалом", "Браузер добавит <!DOCTYPE> в документ автоматически, и всё будет работать", "Браузер отобразит HTML документ, но не будет загружать или выполнять javascript и подключать стили, если они присутствуют", "Всё будет работать так же, ошибок не будет", "Браузер выдаст ошибку и не загрузит страницу" ],
        correct: 1
    }, {
        question: "Выберите список, состоящий ТОЛЬКО из семантических тегов.",
        answers: [ "time, blockquote, cite, li, dfn, address", "header, nav, main, article, section, aside", "details, p, footer, figure, strong, mark", "header, blockquote, span, cite, article, b", "table, div, span, u, code, var" ],
        correct: 2
    }, {
        question: "В каком варианте ответа правильно разделены на группы блочные и строчные элементы?",
        answers: [ "строчные: ul, a, big, output", "блочные: dd, div, br, p, строчные: aside, cite, em, select", "блочные: li, header, h1, article, строчные: b, textarea, script, button", "блочные: h2, legend, section, strong, строчные: li, pre, mark, small", "блочные: figure, input, noscript, video, строчные: code, blockquote, main, label" ],
        correct: 3
    }, {
        question: "Какое значение атрибута rel нужно указать в элементе 'a', чтобы не дать поисковому роботу индексировать активную ссылку?",
        answers: [ "nofollow", "nosearch", "search", "download", "follow" ],
        correct: 1
    }, {
        question: "Выберите НЕВЕРНОЕ утверждение о теге 'iframe'.",
        answers: [ "Можно задавать размеры iframe с помощью атрибутов width и height", "Можно добавить содержимое, которое будет отображаться в случае, если браузер не поддерживает iframe", "Можно использовать JavaScript для обработки событий в iframe", "Можно запретить изменение размеров встроенного контента пользователем с помощью атрибута noresize", "Тег позволяет встраивать веб-страницы, видео, карты и другой контент с других сайтов" ],
        correct: 4
    }, {
        question: "Какого атрибута НЕТ у тега <meta>?",
        answers: [ "name='keywords'", "name='author'", "charset", "content", "description" ],
        correct: 5
    }, {
        question: "Какой тег нужен для создания подвала таблицы?",
        answers: [ "th", "Тег не нужен, подвал создается атрибутом footer в теге table", "tfoot", "section", "footer" ],
        correct: 3
    }, {
        question: "В чём разница между grid и flexbox?",
        answers: [ "С помощью Flexbox может быть изменена микроразметка веб-страницы, что практически нереализуемо с помощью Grid.", "Grid и flexbox — это два элемента системы компоновки в HTML.Они относятся к одному и тому же набору свойств и методов, используемых для создания адаптивных и гибких макетов.", "Grid используется для базовых структур макета, а flexbox — для продвинутых и сложных макетов. Flexbox обеспечивает больший контроль и гибкость в позиционировании элементов по сравнению с сеткой.", "Grid — это устаревшая система компоновки в HTML, а flexbox — современный и рекомендуемый подход. Flexbox предлагает более продвинутые функции и лучшую совместимость с большинством браузеров.", "Grid — это двумерная система компоновки, которая позволяет создавать сложные и гибкие конструкции как со строками, так и со столбцами. Flexbox — это одномерная система компоновки, фокусирующаяся на расположении элементов вдоль одной оси." ],
        correct: 5
    }, {
        question: "Выберите НЕВЕРНОЕ утверждение.",
        answers: [ "Семантическая разметка облегчает обработку информации поисковым системам, обеспечивает поисковую оптимизацию", "Семантическая разметка в HTML5 приводит к увеличению размера файлов и замедляет загрузку страницы", "Семантическая разметка в HTML5 поддерживается всеми популярными браузерами", "Семантическая разметка в HTML5 является стандартом, рекомендованным W3C для создания современных веб-приложений", "Семантическая разметка в HTML5 включает как базовые, так и специализированные элементы для конкретных типов контента, таких как статьи, видео или меню навигации" ],
        correct: 2
    }, {
        question: "Механизм, который позволяет создавать изолированные части веб-страницы, внутри которых могут находиться свои собственные стили и элементы, не влияющие на стили и элементы остальной страницы, — это…",
        answers: [ "Теневой DOM (Shadow DOM)", "Шаблоны (Templates)", "Блочный контейнер (Block Container)", "Сокрытие данных (Data Hiding)", "Упаковка стилей (Package Style)" ],
        correct: 1
    }, {
        question: "Выберите НЕВЕРНОЕ утверждение о различиях XHTML и HTML.",
        answers: [ "XHTML требует использование строчных букв для всех тегов и атрибутов, в то время как HTML регистронезависим", "В HTML можно использовать атрибуты class и id для стилизации и идентификации элементов, тогда как в XHTML нет такой возможности", "В XHTML атрибуты тегов должны быть заключены в кавычки, в HTML это не обязательно", "В HTML нет обязательности закрывать одиночные теги, тогда как в XHTML все теги должны быть закрыты", "HTML чаще используется для веб-страниц, предназначенных для отображения в браузерах, в то время как XHTML чаще применяется в приложениях, где требуется более строгая структура данных" ],
        correct: 2
    }, {
        question: "Как правильно встроить код JavaScript в файл HTML?",
        answers: [ "Внешний файл JS можно связать с HTML-файлом с помощью атрибутов src, ldаta и rdаta в зависимости от требований к безопасности", "Код JS должен быть написан в отдельном файле CSS и связан с файлом HTML с помощью тега <link>", "В HTML5 был добавлен специальный тег <jаvascript>, чтобы встраивать код JS", "Код JS необходимо писать внутри HTML-элементов с использованием атрибута oncliсk", "Чтобы включить код JS в файл HTML, можно использовать тег <sсript>. Можно либо встроить JS непосредственно в <sсript>, либо связать внешний файл JS с помощью атрибута srс." ],
        correct: 5
    } ];
    const headerContainer = document.querySelector("#header");
    const listContainer = document.querySelector("#list");
    const submitButton = document.querySelector("#submit");
    let score = 0;
    let questionIndex = 0;
    clearPage();
    showQuestion();
    submitButton.addEventListener("click", checkAnswer);
    function clearPage() {
        headerContainer.innerHTML = "";
        listContainer.innerHTML = "";
    }
    function showQuestion() {
        questions[questionIndex].question;
        const headerTemplate = `<h2 class="quiz__title">%title%</h2>`;
        const title = headerTemplate.replace("%title%", questions[questionIndex].question);
        headerContainer.innerHTML = title;
        for (let [index, answerText] of questions[questionIndex].answers.entries()) {
            const questionTemplate = `\n       <li class="quiz__item">\n            <label class="quiz__group">\n                <input type="radio" class="quiz__answer" value="%number%" name="answer"/>\n                <span>%answer%</span>\n            </label>\n        </li>\n       `;
            const answerHtml = questionTemplate.replace("%answer%", answerText).replace("%number%", index + 1);
            listContainer.innerHTML += answerHtml;
        }
    }
    function checkAnswer() {
        const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
        if (!checkedRadio) {
            submitButton.blur();
            return;
        }
        const userAnswer = parseInt(checkedRadio.value);
        if (userAnswer === questions[questionIndex].correct) score++;
        if (questionIndex !== questions.length - 1) {
            questionIndex++;
            clearPage();
            showQuestion();
            return;
        } else {
            clearPage();
            showResults();
        }
    }
    function showResults() {
        const resultsTemplate = `\n        <h2 class="quiz__title">%title%</h2> \n\t\t<h3 class="quiz__summary">%message%</h3>\n\t\t<p class="quiz__result">%result%</p>\n    `;
        let title, message;
        if (score === questions.length) {
            title = "Поздравляем!";
            message = "Вы ответили верно на все вопросы";
        } else if (score * 100 / questions.length >= 50) {
            title = "Неплохой результат)";
            message = "Вы дали более половины правильных ответов";
        } else {
            title = "Стоит постараться";
            message = "Пока у вас менее половины правильных ответов";
        }
        let result = `${score} из ${questions.length}`;
        const finalMessage = resultsTemplate.replace("%title%", title).replace("%message%", message).replace("%result%", result);
        headerContainer.innerHTML = finalMessage;
        submitButton.blur();
        submitButton.textContent = "Начать заново";
        submitButton.addEventListener("click", (() => {
            history.go();
        }));
    }
    window["FLS"] = false;
    isWebp();
})();