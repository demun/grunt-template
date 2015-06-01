# 그런트 가이드 문서를 위한 프로젝트

이 그런트 예제는 `grunt 가이드문서` 를 대상으로 만들어진 그런트 예제 템플릿입니다.

그러트를 모르시면 [grunt 가이드 문서](https://github.com/demun/demun.github.com/wiki/01_00_grunt_guide) 를 참고하시기 바랍니다.


## 설치


- 1. nodejs 설치

그런트를 사용하기 위해서는 [Node.js](https://nodejs.org/) 를 먼저 설치하세요.


- 2. grunt-cli 설치

`Grunt`를 사용하려면 먼저 콘솔에서 다음 명령어를 입력하세요.

```shell
npm install -g grunt-cli
```


- 3. grunt 모듈 설치

이 예제의 모듈을 한번에 설치할 수 있습니다.

아래의 코드를 복사해서 콘솔창에 붙여넣고 엔터를 치세요.


```javascript
npm i grunt grunt-autoprefixer grunt-concurrent grunt-contrib-clean grunt-contrib-concat grunt-contrib-connect grunt-contrib-copy grunt-contrib-csslint grunt-contrib-cssmin grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-less grunt-contrib-uglify grunt-contrib-watch grunt-csscomb grunt-htmlhint grunt-includes grunt-newer jshint-stylish load-grunt-tasks time-grunt
```

- 4. 사용

설치가 끝났으니 다음의 명령으로 템플릿을 사용할 수 있습니다.

```javascript
// 둘중 하나를 클릭해서 사용해보세요.

// 그러트 기본 빌드
grunt


// 실시간 동기화
// grunt serve
```

