searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        
        // 검색 실행
        const found = window.find(this.value);
        
        // 찾지 못했을 때만 경고 (찾았을 때는 별다른 행동 없음)
        if (!found) {
            console.log("결과 없음"); 
        }
    }
});