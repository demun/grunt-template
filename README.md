# 그런트 가이드 문서를 위한 프로젝트

이 그런트 예제는 `grunt 가이드문서` 를 대상으로 만들어진 그런트 예제 템플릿입니다.

그런트를 모르시면 [grunt 가이드 문서](https://github.com/demun/demun.github.com/wiki/01_00_grunt_guide) 를 참고하시기 바랍니다.


## 설치


- 1. nodejs 설치

그런트를 사용하기 위해서는 [Node.js](https://nodejs.org/) 를 먼저 설치하세요.


- 2. grunt-cli 설치

`Grunt`를 사용하려면 먼저 콘솔에서 다음 명령어를 입력하세요.

```shell
npm install -g grunt-cli
```


- 3. grunt 모듈 설치

1.2.번을 한적이 있으면 바로 3번부터 시작하면 됩니다.

모듈을 설치하는 방법은 두가지가 있습니다.

- 1. 이전에 만들어졌던 모듈버젼인 'package.json'에 입력되어진 버젼으로 설치하는 방법
- 2. 현재의 최신버젼으로모듈을 설치하고 'package.json' 에 입력하는 방법

#### 1. 이전에 만들어졌던 모듈버젼인 'package.json'에 입력되어진 버젼으로 설치하는 방법

콘솔에서 다음 명령어를 입력하세요. 그럼 모듈이 설치됩니다.

```sh
npm install
```

> npm install 시 오류가 나면 'package-lock.json' 파일을 삭제하고 설치하세요.


#### 2. 현재의 최신버젼으로모듈을 설치하고 'package.json' 에 입력하는 방법

콘솔에서 아래 명령어를 복사해서 붙여넣고 엔터를 치세요. 그럼 모듈이 설치됩니다.

```sh
npm install --save-dev grunt grunt-autoprefixer grunt-concurrent grunt-contrib-clean grunt-contrib-concat grunt-contrib-connect grunt-contrib-copy grunt-contrib-csslint grunt-contrib-cssmin grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-less grunt-contrib-uglify grunt-contrib-watch grunt-csscomb grunt-htmlhint grunt-includes grunt-newer jshint-stylish load-grunt-tasks time-grunt
```

- 4. 사용

설치가 끝났으니 다음의 명령으로 템플릿을 사용할 수 있습니다.

그런트 기본 빌드

```sh
grunt
```

실시간 동기화

```sh
grunt serve
```


