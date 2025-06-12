// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // --- Navbar Loading Logic ---
    // --- Existing Logic ---

    // 添加平滑滾動效果 (for anchor links on the same page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加滾動動畫 (for portfolio items, can be generalized or made more specific)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target); // Optional: unobserve after animation
            }
        });
    });

    // Observe elements with class 'portfolio-item' or any other class you want to animate on scroll
    document.querySelectorAll('.portfolio-item, .animate-on-scroll, .timeline-item, .skill-item, .intro-text, .contact-info').forEach((el) => {
        observer.observe(el);
    });

    // 作品集模態框邏輯
    const portfolioModal = document.getElementById('portfolioModal'); // 確保這裡的ID與HTML中的模態框ID一致
    if (portfolioModal) {
        portfolioModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const projectId = button.getAttribute('data-project-id');
            const projectDetails = getProjectDetails(projectId);

            const modalTitle = portfolioModal.querySelector('.modal-title');
            const modalBody = portfolioModal.querySelector('.modal-body');

            modalTitle.textContent = projectDetails.title;
            
            let bodyContent = `<img src="${projectDetails.image}" alt="${projectDetails.title}" class="img-fluid mb-3">`;
            bodyContent += `<p><strong>技術棧:</strong> ${projectDetails.tech}</p>`;
            bodyContent += `<p>${projectDetails.description}</p>`;
            if (projectDetails.link && projectDetails.link !== '#') { // 檢查連結是否為 '#'
                bodyContent += `<a href="${projectDetails.link}" class="btn btn-primary" target="_blank">查看專案</a>`;
            } else {
                bodyContent += `<p>此項目沒有外部連結。</p>`; // 如果沒有有效連結，顯示提示
            }
            modalBody.innerHTML = bodyContent;
        });
    }

    function getProjectDetails(projectId) {
        // 實際項目中，這些數據可能來自後端或一個JSON文件
        const projects = {
            '1': {
                title: '個人作品集網站',
                image: 'images/portfolio-placeholder.jpg',
                tech: 'HTML, CSS, JavaScript, Bootstrap',
                description: '這是一個展示我技能和項目的個人作品集網站。它採用響應式設計，確保在各種設備上都有良好的瀏覽體驗。',
                link: '#'
            },
            '2': {
                title: '任務管理應用',
                image: 'images/portfolio-placeholder.jpg',
                tech: 'React, Node.js, Express, MongoDB',
                description: '一個幫助用戶管理日常任務和項目的Web應用。用戶可以創建、編輯、刪除任務，並設置提醒。',
                link: '#'
            },
            'n8n-1': {
                title: 'AI n8n 教學 (一)：基礎概念與安裝',
                image: 'images/project1-thumbnail.jpg',
                tech: 'n8n, 自動化',
                description: '本篇教學將介紹 n8n 的核心概念、主要功能以及如何在您的環境中安裝 n8n。',
                link: 'n8n_tutorials/n8n-tutorial-1.html'
            },
            'n8n-2': {
                title: 'AI n8n 教學 (二)：第一個 Workflow 實作',
                image: 'images/project2-thumbnail.jpg',
                tech: 'n8n, Workflow',
                description: '跟隨本篇教學，您將學會如何建立您的第一個 n8n workflow，連接節點並執行自動化流程。',
                link: 'n8n_tutorials/n8n-tutorial-2.html'
            },
            // 可以添加更多項目
            'n8n-3': {
                title: 'AI n8n 教學 (三)：資料轉換與處理',
                image: 'images/project1-thumbnail.jpg',
                tech: 'n8n, 資料處理',
                description: '本篇教學將深入探討如何在 n8n workflow 中進行資料的轉換與處理，確保自動化流程的資料準確性。',
                link: 'n8n_tutorials/n8n-tutorial-3.html'
            },
            'n8n-4': {
                title: 'AI n8n 教學 (四)：錯誤處理與日誌記錄',
                image: 'images/project2-thumbnail.jpg',
                tech: 'n8n, 錯誤處理',
                description: '學習如何在 n8n workflow 中實現有效的錯誤處理和日誌記錄，提高自動化流程的穩定性和可維護性。',
                link: 'n8n_tutorials/n8n-tutorial-4.html'
            },
            'n8n-5': {
                title: 'AI n8n 教學 (五)：排程與定時任務',
                image: 'images/project1-thumbnail.jpg',
                tech: 'n8n, 排程',
                description: '學習如何在 n8n 中設定排程和定時任務，讓您的自動化流程在正確的時間自動啟動。',
                link: 'n8n_tutorials/n8n-tutorial-5.html'
            },
            'n8n-6': {
                title: 'AI n8n 教學 (六)：HTTP 請求與 API 整合',
                image: 'images/project2-thumbnail.jpg',
                tech: 'n8n, API',
                description: '本篇教學將介紹如何在 n8n 中發送 HTTP 請求並處理 API 響應，實現與外部服務的整合。',
                link: 'n8n_tutorials/n8n-tutorial-6.html'
            },
            'n8n-7': {
                title: 'AI n8n 教學 (七)：資料庫操作與整合',
                image: 'images/project1-thumbnail.jpg',
                tech: 'n8n, 資料庫',
                description: '學習如何在 n8n 中與各種資料庫系統進行互動，包括讀取、寫入、更新和刪除資料。',
                link: 'n8n_tutorials/n8n-tutorial-7.html'
            },
            'n8n-8': {
                title: 'AI n8n 教學 (八)：檔案操作與雲端儲存整合',
                image: 'images/project2-thumbnail.jpg',
                tech: 'n8n, 檔案',
                description: '本篇教學將介紹如何在 n8n 中處理檔案，並與主流雲端儲存服務進行整合。',
                link: 'n8n_tutorials/n8n-tutorial-8.html'
            },
            'n8n-9': {
                title: 'AI n8n 教學 (九)：自定義節點與擴展',
                image: 'images/project1-thumbnail.jpg',
                tech: 'n8n, 自定義節點',
                description: '學習如何建立自定義 n8n 節點，以擴展 n8n 的功能並整合專有系統。',
                link: 'n8n_tutorials/n8n-tutorial-9.html'
            },
            'n8n-10': {
                title: 'AI n8n 教學 (十)：部署與生產環境考量',
                image: 'images/project2-thumbnail.jpg',
                tech: 'n8n, 部署',
                description: '探討 n8n 部署的常見方式以及在生產環境中需要考慮的安全性、可靠性和性能因素。',
                link: 'n8n_tutorials/n8n-tutorial-10.html'
            }
        };
        return projects[projectId] || { title: '未知項目', image: 'images/portfolio-placeholder.jpg', tech: 'N/A', description: '沒有找到項目詳情。', link: '#' };
    }

    // Blog 模態框邏輯 (假設與 Portfolio 類似)
    const blogModal = document.getElementById('blogModal');
    if (blogModal) {
        blogModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const blogId = button.getAttribute('data-blog-id');
            const blogDetails = getBlogDetails(blogId); // 您需要實現這個函數

            const modalTitle = blogModal.querySelector('.modal-title');
            const modalBody = blogModal.querySelector('.modal-body');

            modalTitle.textContent = blogDetails.title;
            modalBody.innerHTML = blogDetails.content; // 假設 content 包含 HTML
        });
    }

    function getBlogDetails(blogId) {
        // 示例數據，您需要替換為真實的博客文章數據
        const blogs = {
            '1': {
                title: '我的第一篇博客',
                content: '<p>這是我第一篇博客的內容...</p><img src="images/blog-placeholder.jpg" alt="博客圖片" class="img-fluid">',
            },
            '2': {
                title: '關於網頁開發的思考',
                content: '<p>網頁開發是一個不斷變化的領域...</p>',
            }
        };
        return blogs[blogId] || { title: '未知文章', content: '沒有找到文章內容' };
    }
        
    // --- Helper function for Navbar ---
    function setActiveNavLink() {
        const pathParts = window.location.pathname.split('/');
        let currentPage = pathParts.pop() || pathParts.pop(); // Handles trailing slash
        if (currentPage === undefined || currentPage === "") {
            currentPage = "index.html";
        }

        const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (!linkHref) return;

            const linkPage = linkHref.split('/').pop();
            link.classList.remove('active');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }
});
