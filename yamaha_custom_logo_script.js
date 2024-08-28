<script type="text/javascript">
      window.ymConfig = {"bot":"x1704718036718","host":"https://cloud.yellow.ai"};
    (function() {
        var w = window,
            ic = w.YellowMessenger;
        if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
        else {
            var d = document,
                i = function() {
                    i.c(arguments)
                };
            function l() {
                var e = d.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }
            i.q = [], i.c = function(e) {
                i.q.push(e)
            }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}
    })();
</script>

<script type="text/javascript">
    (function() {
        console.log("inside custom script");
        window.addEventListener("message", function(event1) {
            try {
                let event = JSON.parse(event1.data);
                if ("custom-event" == event.event_code && "cb" === event.data.code) {
                    console.log("value triggered for custom-event", event.event_code);
                    const ymTitle = document.getElementsByClassName("ym-title");
                    if (ymTitle.length > 0) {
                        ymTitle[0].remove();
                    }
                    const ymSubTitle = document.getElementsByClassName("ym-sub-title");
                    if (ymSubTitle.length > 0) {
                        ymSubTitle[0].remove();
                    }
                    var t = document.getElementsByClassName("ym-title-parent");
                    var element = document.createElement("img");
                    element.setAttribute("class", "icon1");
                    element.style.maxWidth = "100px";
                    element.style.margin = "-10";  // Center horizontally by setting auto left and right margins
                    element.style.display = "block";  // Change display to block to apply margin auto correctly
                    element.style.padding = "10px"; 
                    element.setAttribute("src", "https://cdn.yellowmessenger.com/EKlfmd43lEHa1716282500198.png");
                    if (t.length > 0) {
                        // Remove existing title element if present
                        const existingTitle = t[0].querySelector('.icon1');
                        if (existingTitle) {
                            existingTitle.remove();
                        }
                        t[0].appendChild(element);
                    }
                }
                if ("ym-bot-opened" == event.event_code) {
                    window.ymInterval = setInterval(() => {
                        try {
                            console.log("value triggered for event", event.event_code);
                            const frameDocument = window.frames && window.frames.ymIframe && window.frames.ymIframe.document;
                            const title = frameDocument.getElementsByClassName("title");
                            if (title.length > 0) {
                                title[0].remove();
                            }
                            const subTitle = frameDocument.getElementsByClassName("sub-title");
                            if (subTitle.length > 0) {
                                subTitle[0].remove();
                            }
                            var x = frameDocument.getElementsByClassName("title-parent");
                            console.log("title execution parent", x);
                            var element = frameDocument.createElement("img");
                            element.setAttribute("class", "icon1");
                            element.style.maxWidth = "100px";
                            element.style.margin = "-10";  // Center horizontally by setting auto left and right margins
                            element.style.display = "block";  // Change display to block to apply margin auto correctly
                            element.style.padding = "10px"; 
                            element.setAttribute("src", "https://cdn.yellowmessenger.com/VeGn3etUHRqE1724848729259.png");
                            if (x.length > 0) {
                                // Remove existing title element if present
                                const existingTitle = x[0].querySelector('.icon1');
                                if (existingTitle) {
                                    existingTitle.remove();
                                }
                                x[0].appendChild(element);
                            }
                            clearInterval(window.ymInterval);
                        } catch (error) {
                            clearInterval(window.ymInterval);
                        }
                    }, 100);
                }
            } catch (error) {
                console.log(error, "Error occurred");
            }
        }, false);
    })();
</script>
