window.onload = function () {
    // localStorage.clear();

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
    const fonts = document.querySelectorAll(".font");
    // const variable_fonts = document.querySelectorAll(".variable");
    // ??Figure out how to pinpoint nonvariable fonts
    // const nonVariableFonts = Array.from(fonts).filter(
    //     (font) => !font.classList.contains("variable")
    // );

    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result");
    const video = document.querySelector("video");

    const sliderContainer = document.querySelector(".slider-container");
    const widthSlider = document.getElementById("width-slider");

    let currentFontFamily = localStorage.getItem("savedFontFamily");
    let currentFontSize = localStorage.getItem("savedFontSize");
    let currentFontColor = localStorage.getItem("savedFontColor");
    let currentFontVariation = localStorage.getItem("savedFontVariation");
    let currentSliderValue = localStorage.getItem("savedSliderValue");
    let currentVideoDisplay = localStorage.getItem("savedVideoDisplay");
    result.style.fontFamily = currentFontFamily;
    result.style.fontSize = currentFontSize;
    result.style.color = currentFontColor;
    result.style.fontVariationSettings = currentFontVariation;
    widthSlider.value = currentSliderValue;
    video.style.display = currentVideoDisplay;
    console.log(currentFontFamily, currentFontSize, currentFontVariation);

    let FirstUse;
    // console.log("FirstUse", FirstUse);

    if (!FirstUse) {
        FirstUse = {};
        // Set the initial value of isFirstUse for each element
        FirstUse["DeadisBetter"] = true;
        FirstUse["HeartBeat_inside"] = true;
        FirstUse["HeartBeat_merged"] = true;
        FirstUse["HeartBeat_outside"] = true;
        FirstUse["HeartBeat_stroke"] = true;
        FirstUse["Subbookkeeper"] = true;
        FirstUse["Dirts"] = true;
        FirstUse["Wifi_vfvf"] = true;
        FirstUse["Signal_Inflate"] = true;
        FirstUse["Spritch_AVF"] = true;
        FirstUse["Spritch_BVF"] = true;
        FirstUse["Signal_Grow"] = true;
        // console.log("first", FirstUse["DeadisBetter"]);
    } else {
        //localStorage stores data as strings, so when you retrieve the value of "savedFirstUse", it will be a string. To convert it back into a JavaScript object, you can use JSON.parse().
        FirstUse = JSON.parse(localStorage.getItem("savedFirstUse"));
        // console.log("FirstUse", FirstUse["DeadisBetter"]);
    }
    console.log("********************************");
    for (let key in FirstUse) {
        console.log(`${key}: ${FirstUse[key]}`);
    }

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

                    localStorage.setItem("savedFontFamily", currentFontFamily);

                    localStorage.setItem("savedFontSize", currentFontSize);

                    localStorage.setItem("savedFontColor", currentFontColor);

                    localStorage.setItem(
                        "savedFontVariation",
                        currentFontVariation
                    );

                    localStorage.setItem(
                        "savedSliderValue",
                        currentSliderValue
                    );

                    localStorage.setItem(
                        "savedVideoDisplay",
                        currentVideoDisplay
                    );

                    localStorage.setItem("savedFirstUse", FirstUse);

                    // Reload the page with the new URL after a pause
                    setTimeout(() => location.reload(), 500);
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

        //speech recognition automatically turns off after some silence, so restarting it on end for continuous listening
        recognition.addEventListener("end", () => {
            // console.log("Speech recognition ended. Restarting...");
            recognition.start();
        });
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
        result.style.color = "black";
        video.style.display = "block";
        update_font();
    });

    DeadisBetter.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'DeadisBetter'";
        result.style.fontSize = "4em";

        update_font(e.target, "DeadisBetter");
    });

    Dirts.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Dirts'";
        result.style.fontSize = "4em";
        update_font(e.target, "Dirts");
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

    HeartBeat_inside.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'HeartBeat_inside'";
        result.style.fontSize = "6em";
        update_font(e.target, "HeartBeat_inside");
    });

    HeartBeat_merged.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'HeartBeat_merged'";
        result.style.fontSize = "6em";
        update_font(e.target, "HeartBeat_merged");
    });

    HeartBeat_outside.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'HeartBeat_outside'";
        result.style.fontSize = "6em";
        update_font(e.target, "HeartBeat_outside");
    });

    HeartBeat_stroke.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'HeartBeat_stroke'";
        result.style.fontSize = "6em";
        update_font(e.target, "HeartBeat_stroke");
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

    Wifi_vfvf.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Wifi_vfvf'";
        update_font(e.target, "Wifi_vfvf");
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
        result.style.fontSize = "5em";
        update_font();
    });

    PoliticsofResponse_300.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_300'";
        result.style.fontSize = "5em";
        update_font();
    });

    PoliticsofResponse_500.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_500'";
        result.style.fontSize = "5em";
        update_font();
    });

    PoliticsofResponse_700.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_700'";
        result.style.fontSize = "5em";
        update_font();
    });

    PoliticsofResponse_1000.addEventListener("click", function () {
        reset();
        result.style.fontFamily = "'PoliticsofResponse_1000'";
        result.style.fontSize = "5em";
        update_font();
    });

    Signal_Grow.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Signal_Grow'";
        update_font(e.target, "Signal_Grow");
    });

    Signal_Inflate.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Signal_Inflate'";
        update_font(e.target, "Signal_Inflate");
    });

    Spritch_AVF.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Spritch_AVF'";
        result.style.fontSize = "5em";
        update_font(e.target, "Spritch_AVF");
    });

    Spritch_BVF.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Spritch_BVF'";
        result.style.fontSize = "5em";
        update_font(e.target, "Spritch_BVF");
    });

    Subbookkeeper.addEventListener("click", function (e) {
        reset();
        result.style.fontFamily = "'Subbookkeeper'";
        result.style.fontSize = "4em";
        update_font(e.target, "Subbookkeeper");
    });

    function reset() {
        result.style.fontSize = "3em";
        result.style.color = "white";
        video.style.display = "none";
    }

    function update_font(vf, variable_font) {
        // console.log(vf);
        console.log(FirstUse[`${variable_font}`]);
        if (FirstUse[`${variable_font}`]) {
            // result.classList.remove("vf_animation");
            // result.classList.add("vf_animation");
            // console.log(result);
        }
        FirstUse[`${variable_font}`] = false;
        // console.log("changed var", FirstUse[variable_font]);
        currentFontFamily = result.style.fontFamily;
        currentFontSize = result.style.fontSize;
        currentFontColor = result.style.color;
        currentVideoDisplay = video.style.display;
    }

    widthSlider.addEventListener("input", () => {
        sliderValue = parseInt(widthSlider.value);
        set_variable();
    });

    // Update the font width when the slider value changes
    // document.body.addEventListener("keydown", function (event) {
    //     // console.log("keydown");
    //     if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
    //         // Decrease the slider value
    //         widthSlider.value = parseInt(widthSlider.value) - 10;
    //         console.log("decreasing");
    //         set_variable();
    //     } else if (event.key === "ArrowUp" || event.key === "ArrowRight") {
    //         // Increase the slider value
    //         widthSlider.value = parseInt(widthSlider.value) + 10;
    //         console.log("increasing");
    //         set_variable();
    //     }
    // });

    function set_variable() {
        let variableValue = widthSlider.value;
        if (
            currentFontFamily == "DeadisBetter" ||
            currentFontFamily == "HeartBeat_inside" ||
            currentFontFamily == "HeartBeat_merged" ||
            currentFontFamily == "HeartBeat_outside" ||
            currentFontFamily == "HeartBeat_stroke" ||
            currentFontFamily == "Subbookkeeper"
        ) {
            result.style.fontVariationSettings = `"wdth" ${variableValue}`;
        } else if (
            currentFontFamily == "Dirts" ||
            currentFontFamily == "Wifi_vfvf" ||
            currentFontFamily == "Signal_Inflate" ||
            currentFontFamily == "Spritch_AVF" ||
            currentFontFamily == "Spritch_BVF"
        ) {
            result.style.fontVariationSettings = `"wght" ${variableValue}`;
            // console.log("spritch");
        } else if (currentFontFamily == "Signal_Grow") {
            result.style.fontVariationSettings = `"wght" 100, "HGHT" ${variableValue}`;
        }
        currentFontVariation = result.style.fontVariationSettings;
        currentSliderValue = widthSlider.value;
    }
};
