- structures => 봇 유틸을 위한 폴더
- utils => Discord 관련 유틸을 위한 폴더

# 다국어 지원 관련

- translate 폴더 내부에 추가 데이터를 __함수없이__ 포함하고 언어별 트리 구성.

- discord.events.createMessage 에서 추가로 TextBinder 함수를 translate.bind 함수로 연결.

(root) -> (lang) -> (categories...*)
