# 【Portfolio】架起 RD 與 PM 之間的友誼橋梁：智慧協作中樞

> **核心理念**: 「不要做資訊的搬運工，讓工具自動化那些重複的瑣事。」

PM 整天忙著從 LINE 撈截圖、確認 Bug 發生時間；RD 整天忙著問「重現步驟是什麼？圖片在哪？」。這樣的場景，是不是很熟悉？
這不是人的問題，是**工具斷層**的問題。 LINE 是流動的溝通，Jira 是結構化的執行，中間這條鴻溝，就是我這個專案要填補的。

我透過 **FastAPI** 串接 **LINE Webhook** 與 **Jira REST API v3**，打造了一座「友誼橋梁」。

---

## 🚀 核心功能與技術亮點

### 1. Jira 智慧轉單引擎 (Smart Ticket Engine)
這不是簡單的 API 串接，而是充滿細節的自動化流程。
*   **附件自動搬家 (Attachments Migration)**：這是我最自豪的功能之一。系統會偵測你勾選的 LINE 訊息中是否包含圖片或影片。轉單時，後端會自動從 **Supabase Intelligence** 下載這些資產，再透過 API 上傳至新建立的 Jira Ticket。RD 打開工單，所有證據都在附件區，不用再私訊跟 PM 討圖。
*   **智慧比對防呆 (Smart Duplicate Check)**：在開單前，系統背後的 AI 會先執行 `search_by_context`，用簡單的自然語言去 Jira 資料庫撈一撈：「是不是有人報過類似的修不好了？」有效避免重複工單造成的資源浪費。

### 2. 殺手鐧：AI 自動生成工單 (AI-Powered Generation)
這是讓 PM 驚呼 "Magic!" 的功能。
*   **多選一鍵生成**：過去 PM 需要開兩個視窗，一邊看 LINE，一邊複製貼上寫 Jira Description。現在？只要在列表上勾選相關的 5 則對話和 2 張圖，按一下「AI 生成」。
*   **上下文理解 (Context Awareness)**：整合了 **Gemini 1.5 Flash** 模型，AI 會讀懂那一串破碎的對話，自動總結成結構化的工單：
    *   **Summary**: `[客戶回報] iOS 登入畫面按鈕無反應`
    *   **Description**: 自動條列出 `發生時間`、`影響範圍`、`重現步驟` (AI 推論)。
    *   **釋放腦力**：你只需要做最後確認並按下 Submit，原本 10 分鐘的整理工作，現在只要 10 秒。

### 3. 溫柔的靜默同步 (Silent Background Sync)
我不喜歡讓使用者等待。
*   **背景更新**：當你在瀏覽 Dashboard 時，後端 Worker 會在背景悄悄輪詢 Jira API，更新每一張票的最新狀態 (Done/In Progress)。
*   **樂觀 UI (Optimistic UI)**：當你在從「未處理」改成「處理中」時，介面會立即反應，不需要等待伺服器回傳。這種「跟上思考速度」的流暢感，是我對 UX 的堅持。

### 4. 購物車式事件暫存區 (Staging & Grouping)
客戶的需求往往是破碎的，東講一句西講一句。
*   **邏輯重組**：我設計了一個類似「購物車」的側邊暫存區。你可以把散落在早上、下午、甚至昨天的相關訊息，一條條「加入購物車」。
*   **打包處理**：最後在暫存區裡，把這堆碎片打包成一個完整的「事件 (Event)」，統一轉成一張工單，或是一次性標記為「已處理」。

### 5. 堅實的品質後盾 (Automated QA)
MVP 不代表可以犧牲品質。
*   **100% 測試覆蓋**：為了支援快速迭代，我內建了完整的自動化測試 (Test Runner)。
*   **極速回歸**：51 個涵蓋 CRUD、Auth、整合的測項，只需要 **13.86 秒** 就能跑完。
*   **視覺化報告**：
    ![Test Runner Dashboard](assets/test_runner_dashboard.png)
    測試結果直接顯示在 Dashboard，全綠燈才允許部署。這是我身為 SQA 對於「軟體工藝」的堅持。

---

## 👨‍💻 開發者筆記 (Engineer's Note)

在實作 **Jira Integration** 時，我特別注重 **Error Handling** 與 **Edge Cases**。
例如，如果 Jira API 暫時無回應，系統會自動切換為「重試模式」，並在前端顯示優雅的 Toast 提示，而不是讓整個頁面卡住，這就是企業級軟體該有的穩健度。

> **"Great tools are invisible."**
> 最好的工具，是讓你感覺不到它的存在，卻能讓流程順暢得理所當然。

---

## 給未來的合作夥伴
如果你希望你的團隊能從「搬運工」晉升為「架構師」，這套系統會是最好的示範。歡迎與我交流如何透過 API 串接釋放團隊潛能。

*(Designed & Built by Antigravity, 2025)*
