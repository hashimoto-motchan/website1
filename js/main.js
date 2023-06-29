const category = {
    category_001 : {
        title: "HTML/CSS",
        article: {
            article_001 : "HTMLファイルに外部CSSファイルを読み込む方法",
            article_002 : "preタグとcodeタグ使用時に左にスペースが空いてしまう時の対処法"
        }
    },
    category_002 : {
        title: "キャンプ",
        article: {
            article_001 : "キャンプをやった方がいい理由",
            article_002 : "テントの色は黄色がいい理由"
        }
    },
    category_003 : {
        title: "hashimotoについて",
        article: {
            article_001 : "まごころを込めて準備中",
            article_002 : "なぜ理学療法士からエンジニアになったのか"
        }
    },

}

//HTMLには繰り返したい箇所のクラスにクラス名（一番上の場合はcategory_title_1）を記載する
//クラス（一番上の場合はcategory_title_1）を指定して、取得したものを配列っぽい形にする（array_category_title_1）。そこにオブジェクトで記載されているものを入れる。

let array_category_title_1 = document.getElementsByClassName("category_title_1");
for (let i = 0 ; i < array_category_title_1.length ; i++) {
    array_category_title_1[i].textContent = category.category_001.title;
}

let array_category_title_1_article_1 = document.getElementsByClassName("category_title_1_article_1");
for (let i = 0 ; i < array_category_title_1_article_1.length ; i++) {
    array_category_title_1_article_1[i].textContent = category.category_001.article.article_001;
}

let array_category_title_1_article_2 = document.getElementsByClassName("category_title_1_article_2");
for (let i = 0 ; i < array_category_title_1_article_2.length ; i++) {
    array_category_title_1_article_2[i].textContent = category.category_001.article.article_002;
}

let array_category_title_2 = document.getElementsByClassName("category_title_2");
for (let i = 0 ; i < array_category_title_2.length ; i++) {
    array_category_title_2[i].textContent = category.category_002.title;
}

let array_category_title_2_article_1 = document.getElementsByClassName("category_title_2_article_1");
for (let i = 0 ; i < array_category_title_2_article_1.length ; i++) {
    array_category_title_2_article_1[i].textContent = category.category_002.article.article_001;
}

let array_category_title_2_article_2 = document.getElementsByClassName("category_title_2_article_2");
for (let i = 0 ; i < array_category_title_2_article_2.length ; i++) {
    array_category_title_2_article_2[i].textContent = category.category_002.article.article_002;
}

let array_category_title_3 = document.getElementsByClassName("category_title_3");
for (let i = 0 ; i < array_category_title_3.length ; i++) {
    array_category_title_3[i].textContent = category.category_003.title;
}

let array_category_title_3_article_1 = document.getElementsByClassName("category_title_3_article_1");
for (let i = 0 ; i < array_category_title_3_article_1.length ; i++) {
    array_category_title_3_article_1[i].textContent = category.category_003.article.article_001;
}
