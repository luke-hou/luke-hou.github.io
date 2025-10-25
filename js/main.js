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
            // 可以添加更多項目
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

    // Back to top button logic
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});