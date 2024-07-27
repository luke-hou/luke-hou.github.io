document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 添加滾動動畫
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    });

    document.querySelectorAll('.portfolio-item').forEach((el) => {
        observer.observe(el);
    });

    // 模態框功能
    var projectModal = document.getElementById('projectModal')
    var blogModal = document.getElementById('blogModal')
    
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget
            var projectId = button.getAttribute('data-project-id')
            var modalTitle = projectModal.querySelector('.modal-title')
            var modalBody = projectModal.querySelector('.modal-body')
    
            var projectDetails = getProjectDetails(projectId)
    
            modalTitle.textContent = projectDetails.title
            modalBody.innerHTML = projectDetails.content
        })
    }
    
    if (blogModal) {
        blogModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget
            var blogId = button.getAttribute('data-blog-id')
            var modalTitle = blogModal.querySelector('.modal-title')
            var modalBody = blogModal.querySelector('.modal-body')
    
            var blogDetails = getBlogDetails(blogId)
    
            modalTitle.textContent = blogDetails.title
            modalBody.innerHTML = blogDetails.content
        })
    }

    function getProjectDetails(projectId) {
        var details = {
            '1': {
                title: '專案名稱1',
                content: `
                    <img src="images/project1-full.jpg" alt="專案1全圖" class="img-fluid mb-4">
                    <h2>項目概述</h2>
                    <p>這是專案1的詳細描述。該項目旨在解決...（項目背景和目標）</p>
                    <h2>使用的技術</h2>
                    <ul>
                        <li>HTML5 / CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                    </ul>
                    <h2>項目挑戰與解決方案</h2>
                    <p>在開發過程中,我們面臨了...（描述挑戰）。通過...（描述解決方案）,我們成功克服了這些困難。</p>
                    <h2>項目成果</h2>
                    <p>最終,我們成功地...（描述成果）。這個項目不僅提高了...，還為...帶來了顯著的改善。</p>
                    <div class="mt-4">
                        <a href="#" class="btn btn-primary">查看 Demo</a>
                        <a href="#" class="btn btn-secondary ml-2">查看源碼</a>
                    </div>
                `
            },
            '2': {
                title: '專案名稱2',
                content: `
                    <img src="images/project2-full.jpg" alt="專案2全圖" class="img-fluid mb-4">
                    <h2>項目概述</h2>
                    <p>專案2是一個...（項目描述）。我們的目標是...（項目目標）</p>
                    <h2>使用的技術</h2>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>PostgreSQL</li>
                        <li>Docker</li>
                    </ul>
                    <h2>項目挑戰與解決方案</h2>
                    <p>最大的挑戰是...（描述挑戰）。我們通過...（描述解決方案）成功解決了這個問題。</p>
                    <h2>項目成果</h2>
                    <p>這個項目成功地...（描述成果）。它現在被...（描述應用場景或用戶）廣泛使用。</p>
                    <div class="mt-4">
                        <a href="#" class="btn btn-primary">查看 Demo</a>
                        <a href="#" class="btn btn-secondary ml-2">查看源碼</a>
                    </div>
                `
            }
            // 可以繼續添加更多項目...
        }
        return details[projectId] || { title: '未知項目', content: '沒有找到項目詳情' }
    }

    function getBlogDetails(blogId) {
        var details = {
            '1': {
                title: '日本富士山之旅',
                content: `
                    <img src="images/travel-1-full.jpg" alt="富士山全景" class="img-fluid mb-4">
                    <p>在這次難忘的旅程中,我親眼目睹了富士山的壯麗景色。清晨的陽光灑在雪頂上,呈現出令人驚嘆的美景。</p>
                    <p>我們從河口湖出發,沿著登山步道緩緩向上。途中,我們經過了茂密的森林,清澈的山泉,以及古老的神社。每一步都讓我們離日本的自然和文化更近一步。</p>
                    <p>雖然登山過程充滿挑戰,但當我們最終到達山頂時,所有的疲憊都煙消雲散了。站在日本最高峰,俯瞰雲海,那種感覺無法用言語形容。</p>
                    <p>這次富士山之旅不僅讓我欣賞到了大自然的奇觀,也讓我更深入地了解了日本文化。它將永遠是我最珍貴的旅行回憶之一。</p>
                    <img src="images/travel-1-more.jpg" alt="富士山" class="img-fluid mb-4">
                `
            },
            '2': {
                title: '威尼斯水城漫遊',
                content: `
                    <img src="images/travel-2-full.jpg" alt="威尼斯運河" class="img-fluid mb-4">
                    <p>乘坐貢多拉穿梭在威尼斯的運河間,欣賞著兩岸古老的建築,彷彿穿越回了中世紀。這座水上之城的魅力無處不在。</p>
                    <p>我們首先參觀了聖馬可廣場和大教堂,金碧輝煌的馬賽克裝飾讓人嘆為觀止。隨後,我們漫步在狹窄的巷弄中,發現了許多隱藏的小店和美味的當地餐廳。</p>
                    <p>黃昏時分,我們登上了里亞托橋,欣賞著夕陽下的大運河。橋上的小販和藝術家為這座古老的城市增添了幾分現代的活力。</p>
                    <p>威尼斯的美不僅在於其獨特的地理位置和建築,更在於它悠久的歷史和豐富的文化底蘊。這次旅行讓我深深愛上了這座浪漫的水上之城。</p>
                    <img src="images/travel-2-more.jpg" alt="威尼斯運河" class="img-fluid mb-4">
                    `
            },
            '3': {
                title: '浪漫巴黎之旅',
                content: `
                    <img src="images/travel-3-full.jpg" alt="巴黎埃菲爾鐵塔" class="img-fluid mb-4">
                    <p>漫步在塞納河畔，欣賞埃菲爾鐵塔的璀璨夜景，品嚐美味的法式甜點，巴黎的浪漫氣息深深吸引著我。</p>
                    <p>我們登上埃菲爾鐵塔，俯瞰整個巴黎城。城市燈光璀璨，塞納河蜿蜒流淌，整個巴黎就像一幅美麗的畫卷。</p>
                    <p>盧浮宮的藝術品讓我們大開眼界，蒙娜麗莎的微笑更是令人難忘。在巴黎的時裝店裡，我們也感受到了時尚之都的魅力。</p>
                    <p>巴黎，一個充滿藝術、浪漫和美食的城市，這次旅行讓我對它充滿了美好的回憶。</p>
                    <img src="images/travel-3-more.jpg" alt="巴黎街景" class="img-fluid mb-4">
                `
            },
            '4': {
                title: '聖托里尼藍白世界',
                content: `
                    <img src="images/travel-4-full.jpg" alt="聖托里尼海景" class="img-fluid mb-4">
                    <p>湛藍的海水、純白的房屋、浪漫的風車，聖托里尼的美景如夢似幻。在這裡，我感受到了希臘的悠閒與愜意。</p>
                    <p>我們入住了一家擁有無敵海景的酒店，每天早晨醒來，第一眼就能看到這片美麗的海。我們在黑沙灘上曬日光浴，在Oia欣賞日落，在伊亞的小巷裡迷路。</p>
                    <p>我們品嚐了新鮮的海鮮、美味的希臘沙拉，還參加了當地的葡萄酒品嚐活動。聖托里尼的美食和美酒讓我們流連忘返。</p>
                    <p>聖托里尼，一個讓人心醉神迷的島嶼，我一定會再來一次。</p>
                    <img src="images/travel-4-more.jpg" alt="聖托里尼風車" class="img-fluid mb-4">
                `
            },
            '5': {
                title: '紐約大蘋果之旅',
                content: `
                    <img src="images/travel-5-full.jpg" alt="紐約時報廣場" class="img-fluid mb-4">
                    <p>漫步在繁華的第五大道，欣賞百老匯的精彩演出，感受紐約的活力與多元文化，這座城市永遠充滿驚喜。</p>
                    <p>我們登上了帝國大廈，俯瞰整個紐約市。中央公園的綠意盎然，自由女神像的莊嚴肅穆，都讓我們印象深刻。</p>
                    <p>我們在各種美食餐廳品嚐了來自世界各地的美味佳餚，也在小巷裡發現了許多隱藏的酒吧。紐約的夜生活豐富多彩，充滿了活力。</p>
                    <p>紐約，一個永不眠的城市，它充滿了無限的可能性。這趟旅程讓我對這個城市充滿了敬畏。</p>
                    <img src="images/travel-5-more.jpg" alt="紐約布魯克林大橋" class="img-fluid mb-4">
                `
            },
            '6': {
                title: '峇里島海島假期',
                content: `
                    <img src="images/travel-6-full.jpg" alt="峇里島海灘" class="img-fluid mb-4">
                    <p>在寧靜的海灘上享受日光浴，品嚐美味的印尼料理，體驗傳統的巴厘島舞蹈，這是一場身心放鬆的旅程。</p>
                    <p>我們入住了一家豪華的度假村，每天早上可以在私人泳池裡暢遊。我們還參加了SPA按摩，享受了一次徹底的放鬆。</p>
                    <p>我們參觀了烏布的傳統市場，購買了許多手工藝品。我們還參加了庫塔海灘的衝浪課程，體驗了刺激的水上運動。</p>
                    <p>峇里島，一個充滿陽光、沙灘和海浪的島嶼，這趟旅程讓我徹底放鬆了身心。</p>
                    <img src="images/travel-6-more.jpg" alt="峇里島稻田" class="img-fluid mb-4">
                `
            }
        }
        return details[blogId] || { title: '未知文章', content: '沒有找到文章內容' }
    }

        
});