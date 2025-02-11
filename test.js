const fukuEquipment = [
    { name: "なし", paralysis: 0, sleep: 0, charm: 0, fear: 0 },
    { name: "ロボット", paralysis: 3 },
    { name: "エルフのふく", paralysis: 2, sleep: 2, charm: 2, fear: 2 },
    { name: "ジュエリースーツ", paralysis: 2, sleep: 2, charm: 2, fear: 2 },
    { name: "フィッシュボーン", paralysis: 2 },
    { name: "にゅうしタイツ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "きぐるみ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "くさったうろこ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "しろくろドット", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "もみじのきもの", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "やまぶし", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "びゃくえ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "へいそつのよろい", sleep: 3 },
    { name: "あおだけのふく", charm: 3 },
    { name: "サンタスーツ", charm: 3 },
    { name: "なみ", charm: 3 },
    { name: "ハロウィン", charm: 2 },
    { name: "おばけのきもの", fear: 4 },
    { name: "ぶしょうのよろい", fear: 4 },
    { name: "プラチナのふく", fear: 2 },
    { name: "ゴーストのふく", fear: 2 }
];

const kaoEquipment = [
    { name: "なし", paralysis: 0, sleep: 0, charm: 0, fear: 0 },
    { name: "ジュエリーティアラ", paralysis: 4, charm: 4 },
    { name: "しかくいメガネ", paralysis: 3 },
    { name: "コウモリカチューシャ", paralysis: 2 },
    { name: "くろぬりのかぶと", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "ぶたばなのおめん", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "グレートホーン", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "ふくろうメガネ", sleep: 4 },
    { name: "へいそつのずきん", sleep: 4 },
    { name: "サンタのひげ", charm: 4 },
    { name: "チャイナロリヘア", charm: 4 },
    { name: "カラーゴーグル", charm: 3 },
    { name: "しろいがんたい", charm: 3 },
    { name: "パイレーツハット", charm: 3 },
    { name: "ゆうしゃのかざり", charm: 2 },
    { name: "ピンクのめがね", charm: 1 },
    { name: "ぶしょうのかぶと", fear: 3 }
];

const kubiEquipment = [
    { name: "なし", paralysis: 0, sleep: 0, charm: 0, fear: 0 },
    { name: "ざいほうくびかざり", paralysis: 4 },
    { name: "しんぴのネクタイ", paralysis: 3, sleep: 3, charm: 3, fear: 3 },
    { name: "マヒよけのネクタイ", paralysis: 3 },
    { name: "カジノキングのかざり", paralysis: 2, sleep: 2, charm: 2, fear: 2 },
    { name: "ぶしょうのえりまき", paralysis: 2, sleep: 2, charm: 2, fear: 2 },
    { name: "マヒよけのスカーフ", paralysis: 2 },
    { name: "じゅず", paralysis: 2 },
    { name: "ゆうしゃのもんしょう", paralysis: 1, sleep: 1, charm: 1, fear: 5 },
    { name: "うらじろ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "しんぴのスカーフ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "へいそつのえりまき", paralysis: 1, sleep: 3, charm: 1, fear: 1 },
    { name: "でんせつのくびかざり", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "マヒよけのリボン", paralysis: 1 },
    { name: "ねこのくびわ", sleep: 3 },
    { name: "めざましのネクタイ", sleep: 3 },
    { name: "めざましのスカーフ", sleep: 2 },
    { name: "めざましのリボン", sleep: 1 },
    { name: "グレートプレート", charm: 4 },
    { name: "まどわずのネクタイ", charm: 3 },
    { name: "チャイナロリリボン", charm: 2 },
    { name: "おうのもんしょう", fear: 3 },
    { name: "ひゃくじゅうのきば", fear: 2 }
];

const udeEquipment = [
    { name: "なし", paralysis: 0, sleep: 0, charm: 0, fear: 0 },
    { name: "きぞくのそで", charm: 7 },
    { name: "そぎたけ", charm: 2 },
    // ...
];

const senakaEquipment = [
    { name: "なし", paralysis: 0, sleep: 0, charm: 0, fear: 0 },
    { name: "チャイナロリスカート", paralysis: 2, sleep: 2, charm: 2, fear: 2 },
    { name: "ぶたばなのしっぽ", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "ジンジャークッキー", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "ジュエリーミラー", charm: 4 },
    { name: "かたいこうら", charm: 2 }
];

const ashiEquipment = [
    { name: "なし", paralysis: 0, sleep: 0, charm: 0, fear: 0 },
    { name: "ぞうり", paralysis: 1 },
    { name: "オクトのあし", paralysis: 1, sleep: 1, charm: 1, fear: 1 },
    { name: "みけねこのあし", sleep: 1 },
    { name: "サンタのくつ", charm: 3 },
    { name: "パイレーツブーツ", charm: 3 },
    { name: "チャイナロリシューズ", charm: 3 },
    { name: "わらのくつ", charm: 2 },
    { name: "ぶしょうのくつ", fear: 3 }
    // ...
];

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const colorSelect = document.getElementById('color');
    const mixedColorSelect = document.getElementById('mixedColor');
    const patternSelect = document.getElementById('pattern');
    const headShapeSelect = document.getElementById('headShape');
    const paralysisSelect = document.getElementById('paralysisReq');
    const sleepSelect = document.getElementById('sleepReq');
    const charmSelect = document.getElementById('charmReq');
    const fearSelect = document.getElementById('fearReq');

    searchBtn.addEventListener('click', searchCombinations);
    colorSelect.addEventListener('change', () => {
        updateMixedColorOptions();
        updateResistances();
        updateColorSelection();
    });
    mixedColorSelect.addEventListener('change', () => {
        updateResistances();
        updateMixedColorBackground(); // 混色の背景色を更新
    });
    patternSelect.addEventListener('change', updateResistances);
    headShapeSelect.addEventListener('change', updateResistances);
    paralysisSelect.addEventListener('change', updateResistances);
    sleepSelect.addEventListener('change', updateResistances);
    charmSelect.addEventListener('change', updateResistances);
    fearSelect.addEventListener('change', updateResistances);

    // 色の選択後の背景色を変更 (ラベルも対象)
    function updateColorSelection() {
        const selectedColor = colorSelect.value;
        const colorLabel = document.querySelector('label[for="color"]');

        if (selectedColor === "gold") {
            colorSelect.style.backgroundColor = "#e2d06e"; // 金
            colorSelect.style.color = "black";
            if (colorLabel) colorLabel.style.backgroundColor = "#e2d06e";
        } else if (selectedColor === "pink") {
            colorSelect.style.backgroundColor = "#ffc0cb"; // 桃
            colorSelect.style.color = "black";
            if (colorLabel) colorLabel.style.backgroundColor = "#ffc0cb";
        } else if (selectedColor === "black") {
            colorSelect.style.backgroundColor = "#454545"; // 黒
            colorSelect.style.color = "white";
            if (colorLabel) {
                colorLabel.style.backgroundColor = "#454545";
                colorLabel.style.color = "white";
            }
        } else {
            colorSelect.style.backgroundColor = "white"; // デフォルト
            colorSelect.style.color = "black";
            if (colorLabel) {
                colorLabel.style.backgroundColor = "";
                colorLabel.style.color = "";
            }
        }
    }

    // 混色の背景色を更新 (ラベルも更新)
    function updateMixedColorBackground() {
        const mixedColor = mixedColorSelect.value;
        const mixedColorLabel = document.querySelector('label[for="mixedColor"]');

        const mixedColorStyles = {
            "金金": { background: "linear-gradient(to right, #e2d06e 50%, #e2d06e 50%)", labelColor: "#e2d06e", textColor: "black" },
            "金桃": { background: "linear-gradient(to right, #e2d06e 50%, #ffc0cb 50%)", labelColor: "#e2d06e", textColor: "black" },
            "金黒": { background: "linear-gradient(to right, #e2d06e 50%, #454545 50%)", labelColor: "#e2d06e", textColor: "black" },
            "桃桃": { background: "linear-gradient(to right, #ffc0cb 50%, #ffc0cb 50%)", labelColor: "#ffc0cb", textColor: "black" },
            "桃金": { background: "linear-gradient(to right, #ffc0cb 50%, #e2d06e 50%)", labelColor: "#ffc0cb", textColor: "black" },
            "桃黒": { background: "linear-gradient(to right, #ffc0cb 50%, #454545 50%)", labelColor: "#ffc0cb", textColor: "black" },
            "黒黒": { background: "linear-gradient(to right, #454545 50%, #454545 50%)", labelColor: "#454545", textColor: "white" },
            "黒金": { background: "linear-gradient(to right, #454545 50%, #e2d06e 50%)", labelColor: "#454545", textColor: "white" },
            "黒桃": { background: "linear-gradient(to right, #454545 50%, #ffc0cb 50%)", labelColor: "#454545", textColor: "white" },
        };

        if (mixedColor in mixedColorStyles) {
            mixedColorSelect.style.background = mixedColorStyles[mixedColor].background;
            mixedColorSelect.style.color = mixedColorStyles[mixedColor].textColor; // テキスト色を変更
            if (mixedColorLabel) {
                mixedColorLabel.style.backgroundColor = mixedColorStyles[mixedColor].labelColor;
                mixedColorLabel.style.color = mixedColorStyles[mixedColor].textColor;
            }
        } else {
            mixedColorSelect.style.background = "white"; // デフォルト
            mixedColorSelect.style.color = "black";
            if (mixedColorLabel) {
                mixedColorLabel.style.backgroundColor = "";
                mixedColorLabel.style.color = "";
            }
        }

        // 各選択肢の文字色を変更 (黒黒、黒金、黒桃は白)
        for (let i = 0; i < mixedColorSelect.options.length; i++) {
            const option = mixedColorSelect.options[i];
            if (["黒黒", "黒金", "黒桃"].includes(option.value)) {
                option.style.color = "white";
                option.style.backgroundColor = "#454545";
            } else {
                option.style.color = "black";
                option.style.backgroundColor = "white";
            }
        }
    }


    // 色・混色を除いたすべての select 要素の変更時に背景色を変更
    const allSelects = [patternSelect, headShapeSelect, paralysisSelect, sleepSelect, charmSelect, fearSelect];
    allSelects.forEach(select => {
        select.addEventListener('change', function () {
            const label = document.querySelector(`label[for="${this.id}"]`);
            if (this.value !== "--") {
                this.style.backgroundColor = "beige";
                if (label) label.style.backgroundColor = "beige"; // ラベルの背景色も変更
            } else {
                this.style.backgroundColor = "white";
                if (label) label.style.backgroundColor = ""; // ラベルの背景色を元に戻す
            }
        });
    });

    // 耐性の更新
    function updateResistances() {
        let paralysisBonus = 0;
        let charmBonus = 0;
        let sleepBonus = 0;
        let fearBonus = 0;

        const selectedColor = colorSelect.value;
        const selectedMixedColor = mixedColorSelect.value;
        const selectedPattern = patternSelect.value;
        const selectedHeadShape = headShapeSelect.value;

        // 混色ボーナス
        const mixedColorBonuses = {
            "金金": { paralysis: 2, charm: 0, sleep: 0 },
            "金桃": { paralysis: 1, charm: 1, sleep: 0 },
            "金黒": { paralysis: 1, charm: 0, sleep: 1 },
            "桃桃": { paralysis: 0, charm: 2, sleep: 0 },
            "桃金": { paralysis: 1, charm: 1, sleep: 0 },
            "桃黒": { paralysis: 0, charm: 1, sleep: 1 },
            "黒黒": { paralysis: 0, charm: 0, sleep: 2 },
            "黒金": { paralysis: 1, charm: 0, sleep: 1 },
            "黒桃": { paralysis: 0, charm: 1, sleep: 1 }
        };

        if (selectedMixedColor in mixedColorBonuses) {
            const bonus = mixedColorBonuses[selectedMixedColor];
            paralysisBonus = bonus.paralysis;
            charmBonus = bonus.charm;
            sleepBonus = bonus.sleep;
        } else {
            // 混色が `--` の場合のみ単色ボーナスを適用
            if (selectedColor === 'gold') {
                paralysisBonus = 1;
            } else if (selectedColor === 'pink') {
                charmBonus = 1;
            } else if (selectedColor === 'black') {
                sleepBonus = 1;
            }
        }

        // 花柄選択時の処理 (元の値が0でない場合のみ+1)
        if (selectedPattern === "flower") {
            if (paralysisBonus > 0) paralysisBonus += 1;
            if (charmBonus > 0) charmBonus += 1;
            if (sleepBonus > 0) sleepBonus += 1;
        }

        // 頭の形「太陽」選択時の処理 (+3)
        if (selectedHeadShape === "sun") {
            paralysisBonus += 3;
            charmBonus += 3;
            sleepBonus += 3;
            fearBonus += 3;
        }

        // 追加耐性を適用
        document.getElementById("paralysisReq").dataset.colorBonus = paralysisBonus;
        document.getElementById("charmReq").dataset.colorBonus = charmBonus;
        document.getElementById("sleepReq").dataset.colorBonus = sleepBonus;
        document.getElementById("fearReq").dataset.colorBonus = fearBonus;
    }

    // 混色の選択肢を更新
    function updateMixedColorOptions() {
        const selectedColor = colorSelect.value;
        const options = {
            gold: ['--', '金金', '金桃', '金黒'],
            pink: ['--', '桃桃', '桃金', '桃黒'],
            black: ['--', '黒黒', '黒金', '黒桃']
        };

        mixedColorSelect.innerHTML = ''; // 一旦クリア

        if (selectedColor && options[selectedColor]) {
            options[selectedColor].forEach(color => {
                const option = document.createElement('option');
                option.value = color;
                option.textContent = color;
                mixedColorSelect.appendChild(option);
            });
        }
    }
});


// 検索処理
function searchCombinations() {
    const paralysisReq = parseInt(document.getElementById("paralysisReq").value, 10) || 0;
    const sleepReq = parseInt(document.getElementById("sleepReq").value, 10) || 0;
    const charmReq = parseInt(document.getElementById("charmReq").value, 10) || 0;
    const fearReq = parseInt(document.getElementById("fearReq").value, 10) || 0;

    // 色ボーナスを考慮
    const paralysisBonus = parseInt(document.getElementById("paralysisReq").dataset.colorBonus || 0, 10);
    const sleepBonus = parseInt(document.getElementById("sleepReq").dataset.colorBonus || 0, 10);
    const charmBonus = parseInt(document.getElementById("charmReq").dataset.colorBonus || 0, 10);
    const fearBonus = parseInt(document.getElementById("fearReq").dataset.colorBonus || 0, 10);

    const maxResults = parseInt(document.getElementById("maxResults").value, 10) || 50;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    const resultTable = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>服</th>
        <th>顔</th>
        <th>首</th>
        <th>腕</th>
        <th>背中</th>
        <th>足</th>
        <th>マヒ</th>
        <th>眠り</th>
        <th>魅了</th>
        <th>恐怖</th>
    `;
    resultTable.appendChild(headerRow);

    let matchCount = 0;

    outermost:
    for (const fuku of fukuEquipment) {
        for (const kao of kaoEquipment) {
            for (const kubi of kubiEquipment) {
                for (const ude of udeEquipment) {
                    for (const senaka of senakaEquipment) {
                        for (const ashi of ashiEquipment) {
                            // 合計計算
                            const pTotal = Math.min(
                                (fuku.paralysis ?? 0) +
                                (kao.paralysis ?? 0) +
                                (kubi.paralysis ?? 0) +
                                (ude.paralysis ?? 0) +
                                (senaka.paralysis ?? 0) +
                                (ashi.paralysis ?? 0) +
                                paralysisBonus,
                                9 // 最大9に制限
                            );

                            const sTotal = Math.min(
                                (fuku.sleep ?? 0) +
                                (kao.sleep ?? 0) +
                                (kubi.sleep ?? 0) +
                                (ude.sleep ?? 0) +
                                (senaka.sleep ?? 0) +
                                (ashi.sleep ?? 0) +
                                sleepBonus,
                                9 // 最大9に制限
                            );

                            const cTotal = Math.min(
                                (fuku.charm ?? 0) +
                                (kao.charm ?? 0) +
                                (kubi.charm ?? 0) +
                                (ude.charm ?? 0) +
                                (senaka.charm ?? 0) +
                                (ashi.charm ?? 0) +
                                charmBonus,
                                9 // 最大9に制限
                            );

                            const fTotal = Math.min(
                                (fuku.fear ?? 0) +
                                (kao.fear ?? 0) +
                                (kubi.fear ?? 0) +
                                (ude.fear ?? 0) +
                                (senaka.fear ?? 0) +
                                (ashi.fear ?? 0) +
                                fearBonus,
                                9 // 最大9に制限
                            );

                            // 要求値を満たすか判定
                            if (pTotal >= paralysisReq && sTotal >= sleepReq && cTotal >= charmReq && fTotal >= fearReq) {
                                matchCount++;
                                const row = document.createElement('tr');
                                row.innerHTML = `
                                    <td>${fuku.name}</td>
                                    <td>${kao.name}</td>
                                    <td>${kubi.name}</td>
                                    <td>${ude.name}</td>
                                    <td>${senaka.name}</td>
                                    <td>${ashi.name}</td>
                                    <td>${pTotal}</td>
                                    <td>${sTotal}</td>
                                    <td>${cTotal}</td>
                                    <td>${fTotal}</td>
                                `;
                                resultTable.appendChild(row);

                                if (matchCount >= maxResults) break outermost;
                            }
                        }
                    }
                }
            }
        }
    }

    if (matchCount === 0) {
        resultsDiv.textContent = "該当する装備組み合わせはありません。";
    } else {
        resultsDiv.appendChild(resultTable);
    }
}
