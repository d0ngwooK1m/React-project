## 211008 문제해결

1. fullcalendar css:  
    그리드로 나눠도 다시 그 위에 styled 컴포넌트 적용 가능
    캘린더 css는 그 캘린더의 div 클래스이름으로 접근 가능 ex) .fc-btn  
    background-image: url("주소")
    background-cover: 커버할 방법

2. Document references must have an even number of segment; Firebase Cloud Firestore 오류 해결(https://www.youtube.com/watch?v=Tck4tN4b360)  
    처음 todo를 생성했을 때, 전체 load가 안 돼서 수정 및 삭제를 할 수 없었던 오류(수정 및 삭제는 load로 불러올 때 준 아이디로 접근하기 때문)  
    App.js에 todo의 길이를 구하는 변수를 구하고, 그걸 useEffect의 의존성 배열에 넣었다.  
    생성이 되면 todo의 길이가 변경되고, 그걸 감지해 추가된 todo까지 load를 하면서 바로 수정 및 삭제가 가능해졌다.  

3. 모달창과 이벤트 전파:  
    제일 바깥 그리드에 closeModal 함수를 걸고 선택창에서는 e.stopPropagation() 만 걸어서 closeModal의 영향을 받지 않고 바깥 부분만 클릭하면 꺼지도록 하였다.  