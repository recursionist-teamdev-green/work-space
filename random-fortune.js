const data = {
    "result": {
        "大吉": {
            "desc": [
                "GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!",
                "リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。"
            ],
            "urls": [
                "./resources/pose_dance_ukareru_woman.png",
                "./resources/money_megakuramu_man.png",
            ]
        },
        "小吉": {
            "desc": [
                "リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。",
                "開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。"
            ],
            "urls": [
                "./resources/businessman1_nayami.png",
                "./resources/sweets_wataame_girl2.png",
            ]
        },
        "中吉": {
            "desc": [
                "リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。",
                "git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・",
            ],
            "urls": [
                "./resources/pose_anshin_woman.png",
                "./resources/pose_genki09_businessman.png",
            ]
        },
        "末吉": {
            "desc": [
                "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。",
                "リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。",
            ],
            "urls": [
                "./resources/sick_kaoiro_man.png",
                "./resources/kaji_kagamu_woman.png",
            ]
        },
        "吉": {
            "desc": [
                "リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。",
                "リファクタリングに成功してプログラムが爆速に!!サクサク動いて気持ちいいーーー!!",
            ],
            "urls": [
                "./resources/pose_dance_ukareru_woman.png",
                "./resources/pose_dance_ukareru_man.png",
            ]
        },
        "凶": {
            "desc": [
                "リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。",
                "前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。",
            ],
            "urls": [
                "./resources/pose_ochikomu_businessman.png",
                "./resources/food_spaghetti_neapolitan.png",
            ]
        }
    },
    "language": [
        "Java",
        "JavaScript",
        "TypeScript",
        "Ruby",
        "C++",
        "C#",
        "Python",
        "PHP",
    ],
    "database": [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "DynamoDB",
        "Oracle Database",
    ],
    "editor": [
        "Sublime",
        "Atom",
        "Visual Studio Code",
        "Xcode",
        "Eclipse",
        "Vim",
        "Emacs"
    ]
};

function randomSet() {
    const resIndex = Math.floor(Math.random() * 6);
    const descIndex = Math.floor(Math.random());
    const urlIndex = Math.floor(Math.random());
    const res = Object.keys(data["result"])[resIndex];
    const desc = Object.values(data["result"])[resIndex]["desc"][descIndex];
    const url = Object.values(data["result"])[resIndex]["urls"][urlIndex];

    const langIndex = Math.floor(Math.random() * data.language.length);
    const lang = data["language"][langIndex];

    const dbIndex = Math.floor(Math.random() * data.database.length);
    const db = data["database"][dbIndex];

    const editorIndex = Math.floor(Math.random() * data.editor.length);
    const ide = data["editor"][editorIndex];
    return { "結果":res, "詳細":desc, "言語":lang, "データベース":db, "エディタ":ide, "url":url};
}

console.log(randomSet());