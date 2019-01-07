url example: https://www.zhihu.com/question/270343200/answer/491761554

Report a question:
https://www.zhihu.com/api/v4/reports  POST
{"resource_id":270343200,"type":"question","reason_type":"porn","custom_reason":"","source":"web"}

举报类型：
低质问题：
	不构成提问：reason_type: "ambiguity"
	包含主观判断：reason_type: "subjective"
	缺乏可信来源：reason_type: "rumour"
	辱骂等人身攻击：reason_type: "abuse"
	引战争议等非真实问题：reason_type: "provoke"
	针对具体病情的求医问药：reason_type: "medicine"
	寻人、征友、作业等个人任务：reason_type: "personal"
垃圾广告信息：reason_type: "spam", custom_reason:"..."
有害信息：
	政治敏感：reason_type: "politics"
	色情低俗：reason_type: "porn"
	有人意图自杀或自残：reason_type: "suicide"
	违法违规：reason_type: "illegality", custom_reason:"..."
	看相、算命、星盘等迷信活动：reason_type: "superstition"
涉嫌侵权：xxx
其他：reason_type: "old", custom_reason:"..."
	
Answer:
https://www.zhihu.com/api/v4/reports  POST
{"resource_id":491761554,"type":"answer","reason_type":"porn","custom_reason":"","source":"web"}

举报类型：
垃圾广告信息： reason_type: "spam", custom_reason: "..."
不友善行为：
	骚扰、辱骂、歧视等： reason_type: "abuse"
	其他不友善行为： reason_type: "unfriendly", custom_reason: "..."
有害信息：
	政治敏感：reason_type: "politics"
	色情低俗：reason_type: "porn"
	不实信息：
		科学类不实信息：reason_type: "untruth_science", custom_reason: "..."
		社会谣言类不实信息：reason_type: "untruth_rumor", custom_reason: "..."
		编造经历类不实信息：reason_type: "untruth_fake_profile", custom_reason: "..."
		诽谤等侵权信息：
			不规范转载：reason_type: "repost", custom_reason: "..."
			个人侵权：xxx
			企业侵权：xxx
	有人意图自杀或自残：reason_type: "suicide"
	违法违规：reason_type: "illegality", custom_reason: "..."
	看相、算命、星盘等迷信活动：reason_type: "superstition"
涉嫌侵权：xxx
诱导赞同、关注等行为：reason_type: "temptation", custom_reason: "..."
其他：reason_type: "old", custom_reason: "..."
		
		
JS:
var zhihuReportSpam = function () {
    let http = new XMLHttpRequest();
    let url = 'https://www.zhihu.com/api/v4/reports';
    http.open("POST", url, true);
    http.setRequestHeader('x-requested-with', 'fetch');
    const id = window.location.href.match(/question\/(\d+)/)[1];
    http.send(JSON.stringify({
        "resource_id": id,
        "type": "question",
        "reason_type": "spam",
        "custom_reason": "垃圾广告",
        "source": "web"
    }));
}

zhihuReportSpam();