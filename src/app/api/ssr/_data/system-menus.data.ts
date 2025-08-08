export const systemMenusData = {
    code: "0000",
    message: "成功",
    data: {
        "code": "0000",
        "message": "成功。",
        "data": [
            {
                "parent": null,
                "code": "web-header",
                "title": "json主選單",
                "description": null,
                "url": null,
                "target": "_blank",
                "editor": null,
                "pics": null,
                "cover": null,
                "options": null,
                "children": [
                    {
                        "parent": "web-header",
                        "code": "web-header-home",
                        "title": "HOME",
                        "description": "首頁",
                        "url": "/",
                        "target": "_self",
                        "editor": null,
                        "pics": null,
                        "cover": null,
                        "options": "[{\"key\":\"class\",\"value\":\"home\"}]",
                        "children": []
                    },
                    {
                        "parent": "web-header",
                        "code": "web-header-about",
                        "title": "ABOUT US",
                        "description": "關於我們",
                        "url": "/about",
                        "target": "_self",
                        "editor": null,
                        "pics": null,
                        "cover": null,
                        "options": "[{\"key\":\"class\",\"value\":\"about\"},{\"key\":\"data-color\",\"value\":\"red\"}]",
                        "children": []
                    },
                    {
                        "parent": "web-header",
                        "code": "web-header-works",
                        "title": "OUR PROJECTS",
                        "description": "我們的作品",
                        "url": "/works",
                        "target": "_self",
                        "editor": null,
                        "pics": null,
                        "cover": null,
                        "options": "[{\"key\":\"class\",\"value\":\"works\"}]",
                        "children": []
                    },
                    {
                        "parent": "web-header",
                        "code": "web-header-service",
                        "title": "SERVICE",
                        "description": "服務內容",
                        "url": "/service",
                        "target": "_self",
                        "editor": null,
                        "pics": null,
                        "cover": null,
                        "options": "[{\"key\":\"class\",\"value\":\"service\"}]",
                        "children": []
                    },
                    {
                        "parent": "web-header",
                        "code": "web-header-events",
                        "title": "SPEAKING & EVENTS",
                        "description": "知識與新聞",
                        "url": "/events",
                        "target": "_self",
                        "editor": null,
                        "pics": null,
                        "cover": null,
                        "options": "[{\"key\":\"class\",\"value\":\"events\"}]",
                        "children": [
                            {
                                "parent": "web-header-events",
                                "code": "web-header-events-news",
                                "title": "NEWS",
                                "description": "最新訊息",
                                "url": "/events/news",
                                "target": "_self",
                                "editor": null,
                                "pics": null,
                                "cover": null,
                                "options": null,
                                "children": [
                                    {
                                        "parent": "web-header-events-news",
                                        "code": "web-header-events-news-knowledge",
                                        "title": "Knowledge",
                                        "description": "知識新知",
                                        "url": "/events/Knowledge",
                                        "target": "_self",
                                        "editor": null,
                                        "pics": null,
                                        "cover": null,
                                        "options": "[{\"key\":\"class\",\"value\":\"knowledge\"}]",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parent": "web-header",
                        "code": "web-header-contact",
                        "title": "CONTACT US",
                        "description": "聯絡我們",
                        "url": "/contact",
                        "target": "_self",
                        "editor": null,
                        "pics": null,
                        "cover": null,
                        "options": "[{\"key\":\"class\",\"value\":\"contact\"}]",
                        "children": []
                    }
                ]
            }
        ]
    }
};