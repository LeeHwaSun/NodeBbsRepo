// routes/board.js

const express = require('express');
const router = express.Router();
const mysql = require('../bin/mysql');

/* 게시판 관련 컨트롤러 */
/* "/board" */

// 게시판 목록 페이지
router.get("/", async function(req, res, next) {
    const sql = 'SELECT num, name, title, reg_date FROM BOARD_TBL';
    const [rows] = await mysql.query(sql);
    console.log(rows);
    res.render("board/list", {data: rows});
});

// 게시판 작성 페이지
router.get("/post", function(req, res, next) {
    res.render("board/post");
});

// 게시글 작성
router.post('/post', async function(req, res, next) {
    try {
        const post = req.body;
        const sql = 'INSERT INTO BOARD_TBL(name, password, title, content, reg_date) values (?, ?, ?, ?, NOW()) ';
        const sqlValue = [post.name, post.password, post.title, post.content];
        const [rows] = await mysql.query(sql, sqlValue);
        console.log(rows);
        return res.json(rows[0]);
        // mysql.query(sql + sqlValue, function(err, rows, fields) {
        //     if (!err) {
        //         res.json(true);
        //     } else { 
        //         console.log(err);
        //         res.json(false);
        //     }
        // });
    } catch (e) {
        console.log(e)
        return res.status(500).json(e);
    }
});

module.exports = router;