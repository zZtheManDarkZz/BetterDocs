var CurrentPage = 0;

function ParseLinkHeader(link) {
    if (entries)
        var entries = link.split(",");
    var links = {};
    for (var i in entries) {
        var entry = entries[i];
        var link = {};
        link.name = entry.match(/rel=\"([^\"]*)/)[1];
        link.url = entry.match(/<([^>]*)/)[1];
        link.page = entry.match(/page=(\d+).*$/)[1];
        links[link.name] = link;
    }
    return links;
}

function DoGithubComments(comment_id, page_id) {
    var repo_name = "MrRobotjs/BetterDocs";

    if (page_id === undefined)
        page_id = 1;

    var api_url = "https://betterdocs-comments.herokuapp.com/repos/" + repo_name;
    var api_issue_url = "https://api.github.com/repos/MrRobotjs/BetterDocs" + "/issues/" + comment_id;
    var api_comments_url = api_url + "/issues/" + comment_id + "/comments" + "?page=" + page_id;

    var url = "https://github.com/MrRobotjs/BetterDocs/issues/" + comment_id;

    $(document).ready(function () {
        $.getJSON(api_issue_url, function (data) {
            NbComments = data.comments;
        });

        $.ajax(api_comments_url, {
            headers: { Accept: "application/vnd.github.v3.html+json" },
            dataType: "json",
            success: function (comments, textStatus, jqXHR) {

                // Add post button to first page
                if (page_id == 1)
                    $("#gh-comments-list").append("<div class='button small'><a href='" + url + "#new_comment_field' rel='nofollow'>Leave a Review</a></div>");

                // Individual comments
                $.each(comments, function (i, comment) {

                    var date = new Date(comment.created_at);

                    var t = "<div id='gh-comment'>";
                    t += "<img src='" + comment.user.avatar_url + "' width='34px'>";
                    t += "<div class='user'><b><a href='" + comment.user.html_url + "'>" + comment.user.login + "</a></b></div>";
                    t += " ";
                    t += "<div class='badge'>" + comment.author_association + "</div><div class='date'><em>" + date.toUTCString() + "</em></div>";
                    t += "<div id='gh-comment-hr'></div>";
                    t += comment.body_html;
                    t += "<div class='comment-reactions-options'>";
                    t += "<a href='" + comment.html_url + "' target='blank'><div class='reaction' name='input[content]' type='submit' value='Dislike' count='" + comment.reactions["-1"] + "' >" + comment.reactions["-1"] + "</div></a>"
                    t += "<a href='" + comment.html_url + "' target='blank'><div class='reaction' name='input[content]' type='submit' value='Like' count='" + comment.reactions["+1"] + "' >" + comment.reactions["+1"] + "</div></a>"
                    t += "<a href='" + comment.html_url + "' target='blank'><div class='reaction' name='input[content]' type='submit' value='Laugh' count='" + comment.reactions.laugh + "' >" + comment.reactions.laugh + "</div></a>"
                    t += "<a href='" + comment.html_url + "' target='blank'><div class='reaction' name='input[content]' type='submit' value='Hooray' count='" + comment.reactions.hooray + "' >" + comment.reactions.hooray + "</div></a>"
                    t += "<a href='" + comment.html_url + "' target='blank'><div class='reaction' name='input[content]' type='submit' value='Confused' count='" + comment.reactions.confused + "'>" + comment.reactions.confused + "</div></a>"
                    t += "<a href='" + comment.html_url + "' target='blank'><div class='reaction' name='input[content]' type='submit' value='Heart' count='" + comment.reactions.heart + "'>" + comment.reactions.heart + "</div></a>"
                    t += "</div></div>";
                    $("#gh-comments-list").append(t);
                });

                // Setup comments button if there are more pages to display
                var links = ParseLinkHeader(jqXHR.getResponseHeader("Link"));
                if ("next" in links) {
                    $("#gh-load-comments").attr("onclick", "DoGithubComments(" + comment_id + "," + (page_id + 1) + ");");
                    $("#gh-load-comments").show();
                }
                else {
                    $("#gh-load-comments").hide();
                }
            },
            error: function () {
                $("#gh-comments-list").append("Comments are not open for this post yet.");
            }
        });
    });
}
parcelRequire = function(e) {
    var r = "function" == typeof parcelRequire && parcelRequire,
        n = "function" == typeof require && require,
        i = {};

    function u(e, u) {
        if (e in i) return i[e];
        var t = "function" == typeof parcelRequire && parcelRequire;
        if (!u && t) return t(e, !0);
        if (r) return r(e, !0);
        if (n && "string" == typeof e) return n(e);
        var o = new Error("Cannot find module '" + e + "'");
        throw o.code = "MODULE_NOT_FOUND", o
    }
    return u.register = function(e, r) {
        i[e] = r
    }, i = e(u), u.modules = i, u
}(function(require) {
    var c = {};

    function m(e) {
        for (var r, a = /\+/g, $ = /([^&=]+)=?([^&]*)/g, o = function(e) {
                return decodeURIComponent(e.replace(a, " "))
            }, p = {}; r = $.exec(e);) p[o(r[1])] = o(r[2]);
        return p
    }
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = m;

    function l(e) {
        var r = [];
        for (var a in e) e.hasOwnProperty(a) && r.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
        return r.join("&")
    }
    c.deparam = n;
    var g = l;
    c.param = g;
    var d = {};
    Object.defineProperty(d, "__esModule", {
        value: !0
    });
    var b = document.currentScript;
    void 0 === b && (b = document.querySelector("script[src^=\"https://betterdocs.us/js/comments_client.js\"],script[src^=\"http://localhost:4000/https:/betterdocs.us/js/comments_client.js\"]"));
    for (var a = {}, e = 0; e < b.attributes.length; e++) {
        var j = b.attributes.item(e);
        a[j.name] = j.value
    }
    var f = document.querySelector("link[rel='canonical']");
    a.url = f ? f.href : location.origin + location.pathname + location.search, a.origin = location.origin, a.pathname = location.pathname.substr(1).replace(/\.\w+$/, ""), a.title = document.title;
    var k = document.querySelector("meta[name='description']");
    a.description = k ? k.content : "";
    var i = document.querySelector("meta[property='og:title'],meta[name='og:title']");
    a["og:title"] = i ? i.content : "", document.head.insertAdjacentHTML("afterbegin", "<style>\n    .utterances {\n      position: relative;\n      box-sizing: border-box;\n      width: 100%;\n      max-width: 760px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .utterances-frame {\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");
    var h = b.src.match(/^https:\/\/betterdocs.us|http:\/\/localhost:\d+/)[0],
        o = h + "/comments.html";
    b.insertAdjacentHTML("afterend", "<div class=\"utterances\">\n    <iframe class=\"utterances-frame\" title=\"Comments\" scrolling=\"no\" src=\"" + o + "?" + g(a) + "\"></iframe>\n  </div>");
    var p = b.nextElementSibling;
    b.parentElement.removeChild(b), addEventListener("message", function(t) {
        if (t.origin === h) {
            var r = t.data;
            r && "resize" === r.type && r.height && (p.style.height = r.height + "px")
        }
    });
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = d
    } else if (typeof define === "function" && define.amd) {
        define(function() {
            return d
        })
    }
    return {
        "D53L": d,
        "ieWq": c
    };
});