// public/javascripts/post.js

const main = {
    init: function() {
        const _this = this;
        document.getElementById("write").onclick = function() {
            _this.write();
        }
    },
    write: function() {
        const post = {
            name: document.getElementById("name").value,
            password: document.getElementById("password").value,
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
            regDate: new Date().toLocaleString(),
        };
        axios.post("/board/post", post).then(function(result) {
            //console.log(result.rows);
            console.log(result);
            //alert(result);
            if (result.status == 200) {
                location.href = "/board";
            } else {
                alert("오류입니다.");
            }
        });
    },
};

main.init();