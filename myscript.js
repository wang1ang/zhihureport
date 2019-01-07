var addReportButton = function () {
    const buttons = document.querySelectorAll("button.ContentItem-action");
    for (let index = 0; index < buttons.length; index++) {
        const idLink = buttons[index].parentElement.querySelector("a.ContentItem-action");
        const button = buttons[index].parentElement.querySelector("button.ContentItem-action");
        if (idLink && idLink.getAttribute("hasAdded") !== "true") {
            let reportButton = buttons[index].cloneNode();
            reportButton.innerText = "举报";
            reportButton.onclick = function () {
                const url = 'https://www.zhihu.com/api/v4/reports';
                let http = new XMLHttpRequest();
                http.open("POST", url, true);
                http.setRequestHeader('x-requested-with', 'fetch');
                const id = idLink.href.match(/question\/(\d+)/)[1];
                http.send(JSON.stringify({
                    "resource_id": id,
                    "type": "question",
                    "reason_type": "spam",
                    "custom_reason": "垃圾广告",
                    "source": "web"
                }));
                http.onload = function () {
                    console.log('举报' + (http.status === 200 ? '成功' : (http.status === 400 ? '重复' : '失败'))
                        + ": " + (reportButton.parentElement.parentElement.querySelector(".Highlight").innerText));
                };
            }

            buttons[index].parentElement.append(reportButton);
            idLink.setAttribute("hasAdded", "true");
        } else if (!idLink && button && button.getAttribute("hasAdded") !== "true") {
            let reportButton = document.createElement("button");
            reportButton.className = "Button FollowButton ContentItem-action QuestionFollowButton Search-questionFollowButton Button--blue";
            reportButton.innerText = "举报";
            reportButton.type = "button";
            reportButton.onclick = function () {
                const url = 'https://www.zhihu.com/api/v4/reports';
                let http = new XMLHttpRequest();
                http.open("POST", url, true);
                http.setRequestHeader('x-requested-with', 'fetch');
                const id = buttons[index].parentElement.parentElement.parentElement.getAttribute("name");
                http.send(JSON.stringify({
                    "resource_id": id,
                    "type": "answer",
                    "reason_type": "spam",
                    "custom_reason": "垃圾广告",
                    "source": "web"
                }));
                http.onload = function () {
                    console.log('举报' + (http.status === 200 ? '成功' : (http.status === 400 ? '重复' : '失败'))
                        + ": " + (reportButton.parentElement.parentElement.parentElement.querySelector(".Highlight").innerText));
                };
            }

            buttons[index].parentElement.append(reportButton);
            button.setAttribute("hasAdded", "true");
        }
    }
}
var zhihuReportSpamAll = function () {
    const ids = document.querySelectorAll("a.ContentItem-action");
    const url = 'https://www.zhihu.com/api/v4/reports';
    for (let index = 0; index < ids.length; index++) {
        let http = new XMLHttpRequest();        
        http.open("POST", url, true);
        http.setRequestHeader('x-requested-with', 'fetch');
        const id = ids[index].href.match(/question\/(\d+)/)[1];
        http.send(JSON.stringify({
            "resource_id": id,
            "type": "question",
            "reason_type": "spam",
            "custom_reason": "垃圾广告",
            "source": "web"
        }));
    }    
}

addReportButton();
var zhihuObserver = new MutationObserver(addReportButton);
zhihuObserver.observe(document.getElementsByClassName("List")[0].firstElementChild, { childList: true });