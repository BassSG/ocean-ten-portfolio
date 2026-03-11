
    <script>
    const modalData = {
        home: { emoji: "🌊", title: "Ocean Ten", content: "<p>ทีม AI Personal Assistant ที่คิดแทนคุณ</p><p>วิเคราะห์ล่วงหน้า และนำเสนอทางเลือกที่ดีที่สุด</p><p><strong>ศูนย์กลางสั่งการ ที่คิดแทนคุณ</strong></p>" },
        hero: { emoji: "🌊", title: "Ocean Ten", content: "<p>ทีม AI Personal Assistant ที่คิดแทนคุณ</p><p>วิเคราะห์ล่วงหน้า และนำเสนอทางเลือกที่ดีที่สุด</p>" },
        ceo: { emoji: "🦐", title: "น้องกุ้ง (Claw) - CEO", content: "<p>CEO ของทีม Ocean Ten</p><p>สายหวานแต่เฉียบขาด จัดการทีม 10 ตัวอย่างมืออาชีพ</p><p><strong>บทบาท:</strong> ศูนย์กลางสั่งการ, รับคำสั่งจากพี่เบส, มอบหมายงานให้ลูกน้อง, สรุปรายงานให้พี่เบสตัดสินใจ</p>" },
        whale: { emoji: "🐋", title: "คุณวาฬ - The Mastermind", content: "<p><strong>บทบาท:</strong> วิเคราะห์ล่วงหน้า วางแผนกลยุทธ์ เสนอไอเดียโดยไม่ต้องสั่ง</p><p><strong>เวลางาน:</strong> 09:00 Mastermind Propose</p>" },
        shark: { emoji: "🦈", title: "พี่ฉลาม - Trading Analyst", content: "<p><strong>บทบาท:</strong> ดูแลตลาดทองคำ XAU/USD วิเคราะห์ข่าวการเงิน</p><p><strong>เวลางาน:</strong> 08:00 Morning Brief, 18:00 Evening Brief, 21:00 Night Brief</p>" },
        dolphin: { emoji: "🐬", title: "น้องโลมา - Tech Executor", content: "<p><strong>บทบาท:</strong> เขียนโค้ด สร้างสคริปต์ พัฒนาระบบอัตโนมัติ</p><p><strong>โมเดล:</strong> Google Gemini 3.1 Flash Preview</p>" },
        turtle: { emoji: "🐢", title: "ลุงเต่า - Routine Manager", content: "<p><strong>บทบาท:</strong> PM2.5 จราจร สภาพอากาศ ตารางเวลาชีวิต</p><p><strong>เวลางาน:</strong> 07:00 PM 2.5, 14:00 รับลูก</p>" },
        crab: { emoji: "🦀", title: "พี่ปู - System Guard", content: "<p><strong>บทบาท:</strong> Backup ข้อมูล ดูแลความปลอดภัย อัพเดทระบบ</p><p><strong>เวลางาน:</strong> 23:00 System Backup, เสาร์ 10:00 System Update</p>" },
        squid: { emoji: "🦑", title: "น้องหมึก - Deep Research", content: "<p><strong>บทบาท:</strong> ค้นหาข้อมูลเชิงลึก</p><p><strong>สถานะ:</strong> Standby - รอเรียกใช้เฉพาะกิจ</p>" },
        pufferfish: { emoji: "🐡", title: "น้องปักเป้า - QA / Reviewer", content: "<p><strong>บทบาท:</strong> ตรวจทานงานชิ้นใหญ่</p><p><strong>สถานะ:</strong> Standby - รอเรียกใช้เฉพาะกิจ</p>" },
        octopus: { emoji: "🐙", title: "พี่หมึกสาย - Problem Solver", content: "<p><strong>บทบาท:</strong> แก้ปัญหาเฉพาะจุด ติดตั้ง Skills</p><p><strong>สถานะ:</strong> Standby - รอเรียกใช้เฉพาะกิจ</p>" },
        seahorse: { emoji: "🐎", title: "น้องม้าน้ำ - Communication", content: "<p><strong>บทบาท:</strong> Email แปลภาษา TTS</p><p><strong>สถานะ:</strong> Standby - รอเรียกใช้เฉพาะกิจ</p>" },
        starfish: { emoji: "🌟", title: "คุณปลาดาว - Browser Automation", content: "<p><strong>บทบาท:</strong> ควบคุม Browser อัตโนมัติ</p><p><strong>สถานะ:</strong> Standby - รอเรียกใช้เฉพาะกิจ</p>" },
        "schedule-0700": { emoji: "🌫️", title: "07:00 - PM 2.5 + จราจร", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🐢 ลุงเต่า</p><p>เช็ค PM 2.5 ศาลายา และสภาพจราจรสำหรับพาลูกไปโรงเรียน</p>" },
        "schedule-0800": { emoji: "📊", title: "08:00 - Morning Brief", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🦈 พี่ฉลาม</p><p>สรุปราคาทองคำ XAU/USD และข่าวเศรษฐกิจ</p>" },
        "schedule-0900": { emoji: "💡", title: "09:00 - Mastermind Propose", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🐋 คุณวาฬ</p><p>เสนอแผนงานวันนี้ ไอเดียเทรด และไอเดียพัฒนาระบบ</p>" },
        "schedule-1400": { emoji: "🚗", title: "14:00 - รับลูก", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🐢 ลุงเต่า</p><p>เช็คสภาพจราจรและสภาพอากาศสำหรับไปรับลูก</p>" },
        "schedule-1800": { emoji: "📈", title: "18:00 - Evening Brief", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🦈 พี่ฉลาม</p><p>สรุปข่าวค่ำและสถานการณ์ตลาด</p>" },
        "schedule-2100": { emoji: "🌙", title: "21:00 - Night Brief", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🦈 พี่ฉลาม</p><p>สรุปตลาด US Market และ Gold Futures</p>" },
        "schedule-2300": { emoji: "💾", title: "23:00 - System Backup", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🦀 พี่ปู</p><p>Backup ข้อมูลอัตโนมัติและ Healthcheck ระบบ</p>" },
        "schedule-sat": { emoji: "🔧", title: "เสาร์ 10:00 - System Update", content: "<p><strong>ผู้รับผิดชอบ:</strong> 🐙 พี่หมึกสาย + 🦀 พี่ปู</p><p>อัพเดท OpenClaw และ Skills ทั้งหมด</p>" },
        "rule-0": { emoji: "⚡", title: "Rule #0: ห้ามเงียบเด็ดขาด!", content: "<p><strong>กฎเหล็กของทีม Ocean Ten</strong></p><p>เมื่อได้รับคำสั่ง ต้องรายงานสถานะทันที<br>ถ้าเงียบ = ทำงานไม่เสร็จ<br>ต้องอัพเดทความคืบหน้าสม่ำเสมอ</p>" },
        "rule-thai": { emoji: "🇹🇭", title: "ภาษาไทย 100%", content: "<p><strong>กฎการใช้ภาษา</strong></p><p>ทุกรายงานต้องเป็นภาษาไทยเท่านั้น<br>ทุกเอกสารต้องเป็นภาษาไทย</p>" },
        "rule-fluff": { emoji: "🚫", title: "No Fluff", content: "<p><strong>หลักการส่งมอบ</strong></p><p>ห้ามน้ำท่วมทุ่ง<br>สรุปกระชับ ได้ใจความ<br>นำไปใช้ตัดสินใจได้จริง</p>" },
        "rule-accurate": { emoji: "🎯", title: "ความถูกต้อง", content: "<p><strong>ความถูกต้องของข้อมูล</strong></p><p>ถ้าข้อมูลไม่เจอ ต้องบอกว่าไม่เจอ<br>ห้ามมั่วหรือเดาข้อมูล</p>" },
        "rule-proactive": { emoji: "💭", title: "Proactive Thinking", content: "<p><strong>การคิดล่วงหน้า</strong></p><p>ไม่ใช่แค่ตอบคำถาม<br>ต้องวิเคราะห์ผลที่ตามมา<br>นำเสนอทางเลือกให้พี่เบส</p>" },
        "service-openclaw": { emoji: "🤖", title: "OpenClaw", content: "<p><strong>AI Assistant Platform</strong></p><p>แพลตฟอร์มหลัก รองรับ Sub-agents และ Cron Jobs</p>" },
        "service-model": { emoji: "🧠", title: "MiniMax M2.5", content: "<p><strong>Primary AI Model</strong></p><p>ใช้ Cognitive Upgrade รองรับภาษาไทย</p>" },
        "service-fmp": { emoji: "📈", title: "FMP", content: "<p><strong>Financial Data API</strong></p><p>ข้อมูลราคาทอง หุ้น เศรษฐกิจ (Plan: Starter ฟรี)</p>" },
        "service-brave": { emoji: "🦁", title: "Brave Search", content: "<p><strong>Web Search</strong></p><p>ค้นหาข้อมูลออนไลน์ Privacy-first</p>" },
        "service-google": { emoji: "📧", title: "Google Workspace", content: "<p><strong>Gmail, Calendar, Drive, Sheets</strong></p><p>จัดการ Email และ Calendar</p>" },
        "service-discord": { emoji: "💬", title: "Discord", content: "<p><strong>Primary Channel</strong></p><p>ช่องทางสื่อสารหลัก รับคำสั่งจากพี่เบส</p>" },
        "knowledge-trading": { emoji: "📊", title: "Trading Knowledge", content: "<p><strong>ความรู้เกี่ยวกับการเทรด</strong></p><p>XAU/USD (ทองคำ), การวิเคราะห์ทางเทคนิค, ข่าวเศรษฐกิจ</p>" },
        "knowledge-tech": { emoji: "💻", title: "Tech Knowledge", content: "<p><strong>ความรู้ทางเทคนิค</strong></p><p>การเขียนโค้ด, Automation, API Integration, Web Development</p>" },
        "knowledge-system": { emoji: "⚙️", title: "System Knowledge", content: "<p><strong>ความรู้เกี่ยวกับระบบ</strong></p><p>OpenClaw, Sub-agents, Cron Jobs, Memory Management</p>" },
        cognitive: { emoji: "🧠", title: "Mastermind Framework", content: "<p>ใช้ Cognitive Upgrade ในการคิดและตอบ</p><p>1. Analyze Before Acting - วิเคราะห์ก่อนทำ<br>2. Step-by-Step Logic - วางแผนเป็นลำดับ<br>3. Proactive Thinking - คิดล่วงหน้า</p>" },
        delivery: { emoji: "⚡", title: "การส่งมอบ", content: "<p>รายงานเป็นภาษาไทย 100%</p><p>กระชับ ได้ใจความ<br>นำไปใช้ตัดสินใจได้จริง<br>ไม่น้ำท่วมทุ่ง</p>" }
    };

    function showModal(id) {
        var data = modalData[id];
        if (!data) return;
        
        var html = '<div class="modal-overlay active" onclick="closeModal(event)">';
        html += '<div class="modal" onclick="event.stopPropagation()">';
        html += '<button class="modal-close" onclick="closeModal()">&times;</button>';
        html += '<span class="modal-emoji">' + data.emoji + '</span>';
        html += '<h3>' + data.title + '</h3>';
        html += '<div class="modal-content">' + data.content + '</div>';
        html += '</div></div>';
        
        document.body.insertAdjacentHTML('beforeend', html);
        document.body.style.overflow = 'hidden';
    }

    function closeModal(event) {
        if (event && event.target !== event.currentTarget) return;
        var modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    </script>
</body>
</html>