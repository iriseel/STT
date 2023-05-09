window.onload = function () {
    const font_choices = document.querySelectorAll(".font");
    const AsTheyDraw_italic = document.querySelector(".AsTheyDraw .italic");
    const AsTheyDraw_medium = document.querySelector(".AsTheyDraw .medium");
    const AsTheyDrawMonomono = document.querySelector(".AsTheyDrawMonomono");
    const Billboards_regular = document.querySelector(".Billboards .regular");
    const Billboards_stencil = document.querySelector(".Billboards .stencil");
    const DeadisBetter = document.querySelector(".DeadisBetter");
    const Dirts = document.querySelector(".Dirts");
    const FairGame_regular = document.querySelector(".FairGame .regular");
    const FairGame_italic = document.querySelector(".FairGame .italic");
    const FairGame_rotated = document.querySelector(".FairGame .rotated");
    const HeartBeat_inside = document.querySelector(".HeartBeat .inside");
    const HeartBeat_merged = document.querySelector(".HeartBeat .merged");
    const HeartBeat_outside = document.querySelector(".HeartBeat .outside");
    const HeartBeat_stroke = document.querySelector(".HeartBeat .stroke");
    const Wifi_bold = document.querySelector(".Wifi .bold");
    const Wifi_bold_extended = document.querySelector(".Wifi .bold-extended");
    const Wifi_bold_extended_italic = document.querySelector(
        ".Wifi .bold-extended-italic"
    );
    const Wifi_bold_italic = document.querySelector(".Wifi .bold-italic");
    const Wifi_condensed = document.querySelector(".Wifi .condensed");
    const Wifi_condensed_italic = document.querySelector(
        ".Wifi .condensed-italic"
    );
    const Wifi_regular = document.querySelector(".Wifi .regular");
    const Wifi_regular_italic = document.querySelector(".Wifi .regular-italic");
    const Wifi_vfvf = document.querySelector(".Wifi .vfvf");
    const OpenStudios_body = document.querySelector(".OpenStudios_body");
    const OpenStudios_headline = document.querySelector(
        ".OpenStudios_headline"
    );
    const PaaaperChain = document.querySelector(".PaaaperChain");
    const PoliticsofResponse_100 = document.querySelector(
        ".PoliticsofResponse .p100"
    );
    const PoliticsofResponse_300 = document.querySelector(
        ".PoliticsofResponse .p300"
    );
    const PoliticsofResponse_500 = document.querySelector(
        ".PoliticsofResponse .p500"
    );
    const PoliticsofResponse_700 = document.querySelector(
        ".PoliticsofResponse .p700"
    );
    const PoliticsofResponse_1000 = document.querySelector(
        ".PoliticsofResponse .p1000"
    );
    const Signal_Grow = document.querySelector(".Signal_Grow");
    const Signal_Inflate = document.querySelector(".Signal_Inflate");
    const Spritch_AVF = document.querySelector(".Spritch .AVF");
    const Spritch_BVF = document.querySelector(".Spritch .BVF");
    const Subbookkeeper = document.querySelector(".Subbookkeeper");

    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result");

    // let wordCount = 0;

    let currentUrl = window.location.href;
    let newUrl = currentUrl;
    // Get the query string from the URL
    const queryString = window.location.search;

    // Parse the query string to get an object of query parameters and their values
    const queryParams = new URLSearchParams(queryString);

    // Get the value of the 'myVar' query parameter
    const savedFont = queryParams.get("savedFont");
    // const savedFontSize = queryParams.get("savedFontSize");

    if (savedFont) {
        result.style.fontFamily = `"${savedFont}"`;
        console.log(savedFont);
        // console.log("font is", result.style.fontFamily);
    }

    // if (savedFontSize) {
    //     result.style.fontSize = `"${savedFontSize}"`;
    //     console.log("savedFontSize", savedFontSize);
    // } else {
    //     result.style.fontSize = `3em`;
    // }

    let currentFontFamily = result.style.fontFamily;
    // let currentFontSize = result.style.fontSize;
    let currentFontSize = localStorage.getItem("currentFontSize") || "3em";
    // console.log(currentFontFamily, currentFontSize);

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
                        currentUrl = currentUrl.replace(/\?savedFont=.*/, "");
                    }

                    // Add a query parameter to the URL
                    newUrl =
                        currentUrl +
                        `?savedFont=${currentFontFamily}&savedFontSize=${currentFontSize}`;
                    // console.log(currentFontFamily, newUrl);

                    // Reload the page with the new URL after a pause
                    setTimeout(() => (window.location.href = newUrl), 500);
                } else {
                    interimTranscript += transcript;
                    wordCount = interimTranscript.split(" ").length;
                }
            }

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

    AsTheyDraw_italic.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'AsTheyDraw_italic'";
        update_font();
    });

    AsTheyDraw_medium.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'AsTheyDraw_medium'";
        update_font();
    });

    AsTheyDrawMonomono.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'AsTheyDrawMonomono'";
        update_font();
    });

    Billboards_regular.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Billboards_regular'";
        result.style.fontSize = "4em";
        update_font();
    });

    Billboards_stencil.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Billboards_stencil'";
        result.style.fontSize = "4em";
        update_font();
    });

    DeadisBetter.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'DeadisBetter'";

        result.style.fontSize = "5em";
        update_font();
    });

    Dirts.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Dirts'";
        result.style.fontSize = "4em";
        update_font();
    });

    FairGame_regular.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'FairGame_regular'";
        update_font();
    });

    FairGame_italic.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'FairGame_italic'";
        update_font();
    });

    FairGame_rotated.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'FairGame_rotated'";
        update_font();
    });

    HeartBeat_inside.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'HeartBeat_inside'";
        result.style.fontSize = "6em";
        update_font();
    });

    HeartBeat_merged.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'HeartBeat_merged'";
        result.style.fontSize = "6em";
        update_font();
    });

    HeartBeat_outside.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'HeartBeat_outside'";
        result.style.fontSize = "6em";
        update_font();
    });

    HeartBeat_stroke.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'HeartBeat_stroke'";
        result.style.fontSize = "6em";
        update_font();
    });

    Wifi_bold.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_bold'";
        update_font();
    });

    Wifi_bold_extended.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_bold-extended'";
        update_font();
    });

    Wifi_bold_extended_italic.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_bold-extended-italic'";
        update_font();
    });

    Wifi_bold_italic.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_bold-italic'";
        update_font();
    });

    Wifi_condensed.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_condensed'";
        update_font();
    });

    Wifi_condensed_italic.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_condensed-italic'";
        update_font();
    });

    Wifi_regular.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_regular'";
        update_font();
    });

    Wifi_regular_italic.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_regular-italic'";
        update_font();
    });

    Wifi_vfvf.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Wifi_vfvf'";
        update_font();
    });

    OpenStudios_body.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'OpenStudios_body'";
        update_font();
    });

    OpenStudios_headline.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'OpenStudios_headline'";
        update_font();
    });

    PaaaperChain.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PaaaperChain'";
        result.style.fontSize = "4em";
        update_font();
    });

    PoliticsofResponse_100.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_0'";
        result.style.fontSize = "8em";
        update_font();
    });

    PoliticsofResponse_300.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_300'";
        result.style.fontSize = "8em";
        update_font();
    });

    PoliticsofResponse_500.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_500'";
        result.style.fontSize = "8em";
        update_font();
    });

    PoliticsofResponse_700.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_700'";
        result.style.fontSize = "8em";
        update_font();
    });

    PoliticsofResponse_1000.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_1000'";
        result.style.fontSize = "8em";
        update_font();
    });

    Signal_Grow.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Signal_Grow'";
        update_font();
    });

    Signal_Inflate.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Signal_Inflate'";
        update_font();
    });

    Spritch_AVF.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Spritch_AVF'";
        result.style.fontSize = "5em";
        update_font();
    });

    Spritch_BVF.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Spritch_BVF'";
        result.style.fontSize = "5em";
        update_font();
    });

    Subbookkeeper.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'Subbookkeeper'";
        result.style.fontSize = "5em";
        update_font();
    });

    function reset() {
        result.style.fontSize = "3em";
    }

    function update_font() {
        currentFontFamily = result.style.fontFamily;
        currentFontSize = result.style.fontSize;
        console.log("currentFontSize", currentFontSize);
    }
};

// add event listener to resize the result container when the window is resized
// window.addEventListener("resize", function () {
//     resultContainer.style.height = window.innerHeight / 2 + "px";
// });

// set the initial height of the result container
// resultContainer.style.height = window.innerHeight / 2 + "px";
