window.onload = function () {
    const font_choices = document.querySelectorAll(".font");
    const fair_game = document.querySelector(".fair_game");
    const paaaperchain = document.querySelector(".paaaperchain");
    const as_they = document.querySelector(".as_they");
    const billboards = document.querySelector(".billboards");
    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result");

    let wordCount = 0;

    let currentUrl = window.location.href;
    let newUrl = currentUrl;
    // Get the query string from the URL
    const queryString = window.location.search;

    // Parse the query string to get an object of query parameters and their values
    const queryParams = new URLSearchParams(queryString);

    // Get the value of the 'myVar' query parameter
    const savedFont = queryParams.get("savedFont");

    if (savedFont) {
        result.style.fontFamily = `"${savedFont}`;
        // console.log("font is", result.style.fontFamily);
    }

    let currentFont = result.style.fontFamily;

    if ("webkitSpeechRecognition" in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (event) {
            var interimTranscript = "";
            var finalTranscript = "";

            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");

                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    wordCount = interimTranscript.split(" ").length;

                    // Check if the URL already contains a 'savedFont' query parameter
                    if (currentUrl.includes("?savedFont=")) {
                        // Remove the existing 'savedFont' query parameter from the URL
                        currentUrl = currentUrl.replace(
                            /(\?|&)savedFont=.*?(&|$)/,
                            ""
                        );
                    }

                    // Add a query parameter to the URL
                    newUrl = currentUrl + `?savedFont=${currentFont}`;
                    // Reload the page with the new URL after a pause

                    setTimeout(() => (window.location.href = newUrl), 500);
                } else {
                    interimTranscript += transcript;
                    wordCount = interimTranscript.split(" ").length;
                }
            }
            // if (wordCount > 10) {
            //     console.log("over word limit");
            //     result.innerHTML = "";
            //     finalTranscript = "";
            //     interimTranscript = "";
            // }

            result.innerHTML =
                finalTranscript +
                '<span style="color: #999">' +
                interimTranscript +
                "</span>";

            resultContainer.scrollTop = resultContainer.scrollHeight;
        };

        recognition.onerror = function (event) {};
    } else {
        result.innerHTML =
            "Your browser is not supported. Please download Google chrome or Update your Google chrome!!";
    }

    fair_game.addEventListener("click", function () {
        result.style.fontFamily = "'fairgame'";
    });

    paaaperchain.addEventListener("click", function () {
        result.style.fontFamily = "'paaaperchain'";
    });

    as_they.addEventListener("click", function () {
        result.style.fontFamily = "'asthey'";
    });

    billboards.addEventListener("click", function () {
        result.style.fontFamily = "'Billboards2'";
    });

    font_choices.forEach(function (font) {
        font.addEventListener("click", function () {
            currentFont = result.style.fontFamily;
            console.log(currentFont);
        });
    });
};

// add event listener to resize the result container when the window is resized
// window.addEventListener("resize", function () {
//     resultContainer.style.height = window.innerHeight / 2 + "px";
// });

// set the initial height of the result container
// resultContainer.style.height = window.innerHeight / 2 + "px";
