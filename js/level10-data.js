const LEVEL10_DATA = {
    id: 10,
    title: "栄養バランスと食事計画",
    icon: "&#129361;",
    description: "PFCバランス、1日の食事設計、栄養素の基礎知識",
    modules: [
        {
            id: 1001,
            title: "栄養バランスと食事計画",
            duration: "15分",
            content: "<h2>三大栄養素（PFC）とは</h2>" +
                "<p>健康的な食生活の基本は、三大栄養素の<strong>PFCバランス</strong>を理解することから始まります。PFCとは、Protein（タンパク質）、Fat（脂質）、Carbohydrate（炭水化物）の頭文字です。</p>" +
                "<table><thead><tr><th>栄養素</th><th>1gあたりのカロリー</th><th>主な役割</th><th>多く含む食品</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>タンパク質（P）</strong></td><td>4kcal</td><td>筋肉・臓器・血液の材料</td><td>肉、魚、卵、大豆製品</td></tr>" +
                "<tr><td><strong>脂質（F）</strong></td><td>9kcal</td><td>エネルギー源、細胞膜の構成</td><td>油、バター、ナッツ、脂身</td></tr>" +
                "<tr><td><strong>炭水化物（C）</strong></td><td>4kcal</td><td>脳と身体のエネルギー源</td><td>ご飯、パン、麺、芋類</td></tr>" +
                "</tbody></table>" +
                "<h3>理想的なPFCバランス</h3>" +
                "<p>厚生労働省が推奨する一般的なPFCバランスは以下の通りです：</p>" +
                "<ul>" +
                "<li><strong>タンパク質：13〜20%</strong></li>" +
                "<li><strong>脂質：20〜30%</strong></li>" +
                "<li><strong>炭水化物：50〜65%</strong></li>" +
                "</ul>" +
                "<div class='info-box tip'><p><strong>例：1日2000kcalの場合</strong><br>タンパク質：65〜100g（260〜400kcal）<br>脂質：44〜67g（400〜600kcal）<br>炭水化物：250〜325g（1000〜1300kcal）</p></div>" +
                "<h2>ビタミン・ミネラルの基本</h2>" +
                "<table><thead><tr><th>栄養素</th><th>主な役割</th><th>不足すると</th><th>多く含む食品</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>ビタミンA</strong></td><td>視覚・皮膚の健康</td><td>夜盲症、肌荒れ</td><td>レバー、にんじん、ほうれん草</td></tr>" +
                "<tr><td><strong>ビタミンC</strong></td><td>免疫力、コラーゲン生成</td><td>壊血病、風邪ひきやすい</td><td>ピーマン、ブロッコリー、柑橘類</td></tr>" +
                "<tr><td><strong>ビタミンD</strong></td><td>カルシウム吸収促進</td><td>骨軟化症</td><td>鮭、きのこ類、卵</td></tr>" +
                "<tr><td><strong>鉄分</strong></td><td>酸素を運搬</td><td>貧血</td><td>レバー、赤身肉、小松菜</td></tr>" +
                "<tr><td><strong>カルシウム</strong></td><td>骨・歯の形成</td><td>骨粗鬆症</td><td>牛乳、小魚、豆腐</td></tr>" +
                "<tr><td><strong>食物繊維</strong></td><td>腸内環境を整える</td><td>便秘、生活習慣病リスク</td><td>野菜、果物、海藻、きのこ</td></tr>" +
                "</tbody></table>" +
                "<h2>一汁三菜の考え方</h2>" +
                "<p>日本の食事の基本形は<strong>「一汁三菜」</strong>です。これは<strong>ご飯＋汁物＋主菜1品＋副菜2品</strong>の構成で、自然と栄養バランスが整う先人の知恵です。</p>" +
                "<ul>" +
                "<li><strong>主食（ご飯）</strong>：エネルギー源となる炭水化物</li>" +
                "<li><strong>汁物（味噌汁）</strong>：水分補給＋野菜摂取</li>" +
                "<li><strong>主菜</strong>：肉・魚・卵・大豆製品などタンパク質源</li>" +
                "<li><strong>副菜1</strong>：野菜のおかず（ビタミン・ミネラル）</li>" +
                "<li><strong>副菜2</strong>：野菜・海藻・きのこ等（食物繊維）</li>" +
                "</ul>" +
                "<div class='info-box success'><p><strong>簡単な目安：</strong>1食あたり、手のひらサイズのタンパク質、握りこぶし大の炭水化物、両手いっぱいの野菜を目指しましょう。これだけで大まかなバランスが取れます。</p></div>" +
                "<h2>1日の食事設計のポイント</h2>" +
                "<ul>" +
                "<li><strong>朝食：</strong>脳のエネルギー補給。炭水化物＋タンパク質（例：ご飯＋卵＋味噌汁）</li>" +
                "<li><strong>昼食：</strong>午後の活動エネルギー。しっかりとした主菜（例：焼き魚定食）</li>" +
                "<li><strong>夕食：</strong>回復と修復。タンパク質中心で炭水化物は控えめに</li>" +
                "</ul>",
            quiz: [
                {
                    id: "q10_1",
                    type: "choice",
                    question: "三大栄養素（PFC）のうち、1gあたりのカロリーが最も高いのはどれですか？",
                    options: ["タンパク質（4kcal）", "脂質（9kcal）", "炭水化物（4kcal）", "すべて同じ"],
                    answer: 1,
                    explanation: "脂質は1gあたり9kcalで、タンパク質（4kcal）や炭水化物（4kcal）の2倍以上のエネルギーがあります。"
                },
                {
                    id: "q10_2",
                    type: "choice",
                    question: "「一汁三菜」の構成として正しいものはどれですか？",
                    options: ["ご飯＋汁物＋おかず3品", "汁物1品＋おかず3品（ご飯なし）", "ご飯＋汁物3種＋おかず1品", "パン＋スープ＋サラダ3種"],
                    answer: 0,
                    explanation: "一汁三菜は「ご飯＋汁物1品＋主菜1品＋副菜2品」の構成です。これにより自然と栄養バランスが整います。"
                },
                {
                    id: "q10_3",
                    type: "choice",
                    question: "厚生労働省が推奨する炭水化物のエネルギー比率はどれですか？",
                    options: ["20〜30%", "30〜40%", "50〜65%", "70〜80%"],
                    answer: 2,
                    explanation: "厚生労働省の推奨では、炭水化物は総エネルギーの50〜65%を占めるのが理想的とされています。"
                }
            ]
        }
    ]
};