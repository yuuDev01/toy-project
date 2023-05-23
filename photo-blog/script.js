const generateBtn = document.querySelector('#generateBtn');
const container = document.getElementById('gridContainer');


generateBtn.addEventListener('click', () => {
    //이미지가 30개 이상일 경우 모든 이미지 삭제
    if (container.children.length >= 30){
        const confirmed = confirm("모든 사진을 지우시겠습니까?");
        if(confirmed){
            container.innerHTML =""; //모든 이미지 삭제        
    }
}
    else{
        const randomNumber = Math.floor(Math.random() * 1000)+1; // 0부터 999까지의 랜덤한 숫자 생성
        const imageUrl = `https://picsum.photos/500?random=${randomNumber}`;
      
        const image = document.createElement('img');
        image.src = imageUrl;
      
      
        container.appendChild(image);
    }
});
