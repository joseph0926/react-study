# Module 0 - basic

## 목차

[media-queries](#media-queries)

[Selectors](#selectors)

[Box Model](#box-model)

## Media Queries

```css
@media (화면 기준) {
}
```

- max-width: x px
  - 0 ~ x px까지 적용됨
- min-width: x px
  - x px ~ 최대 너비까지 적용됨

## Selectors

- Pseudo classes (의사 클래스)

```css
button:hover {
  color: red;
}
```

- 의사 클래스를 사용하면 요소의 **현재 상태를 기반**으로 CSS의 청크를 적용할 수 있음
- 여기서 뜻하는 현재 상태를 기반으로 란 말은,,

  - 예를들어 자바스크립트에서 onMouseEnter / onMouseLeave 이벤트로 비슷한 구현이 가능함
    - 하지만 해당 기능들은 해당 요소가 현재 hover 되고있는지 추적하려면 상태를 관리해야함
  - 반면 pseudo classes는 현재 상태를 자동으로 감지하고 역할을 수행함

- 또한 의사 클래스 중 조건부 논리를 적용하는 것을 도와주는 클래스도 존재

  - :last-child / :first-child
    - 같은 레벨에 존재하는 같은 태그에 대한 각각 마지막 요소 / 처음 요소에 대한 스타일 적용하는데 도움을 줌

  ```html
  <style>
    p:first-child {
      color: red;
    }
  </style>

  <section>
    <p>Hello world!</p>
    <!-- 붉은 색 글씨로 변경됨 -->
    <p>This is a paragraph!</p>
    <p>This is another paragraph!</p>
  </section>
  ```

  - :first-of-type / :last-of-type
    - 두 의사 클래스는 동일한 유형이 아닌 모든 형제를 무시한 후, :last-child / :first-child가 적용되는 느낌

  ```html
  <style>
    p:first-of-type {
      color: red;
    }
  </style>

  <section>
    <h1>Hello world!</h1>
    <p>This is a paragraph!</p>
    <!-- 붉은 색 글씨로 변경됨 -->
    <p>This is another paragraph!</p>
  </section>
  ```

- Pseudo elements (의사 요소)

  - 의사 요소는 의사 클래스와 달리 적용한 대상의 **하위요소**를 대상으로 스타일을 적용함
  - 또한 의사 요소는 일반적으로 `:`대신 `::`을 사용하지만, `:`를 사용하는 일부 의사요소도 존재

  ```html
  <style>
    input::placeholder {
      color: red;
    }
  </style>

  <input placeholder="asdf" />
  ```

## Box Model

- 왜 대부분 글로벌 css 초기값으로 `box-sizing: border-box;`를 지정해줄까
  - 브라우저의 기본값: `box-sizing: content-box`
  - boder-box vs content-box
    - border-box: content + padding + border까지가 width, height에 반영됨
      - ex)
        ```css
        .box {
          box-sizing: border-box;
          width: 200px;
          height: 200px;
          padding: 4px;
          border: 1px solid black;
        }
        ```
        - 실제 차지하는 공간: 각각 200px씩,,
        - 실제 컨텐츠 크기: 200px - (4px _ 2) - (1px _ 2) = 190px
    - cotent-box: content까지가 width, height에 반영됨
      - ex)
        ```css
        .box {
          box-sizing: content-box;
          width: 200px;
          height: 200px;
          padding: 4px;
          border: 1px solid black;
        }
        ```
        - 실제 차지하는 공간: 200px + (4px _ 2) + (1px _ 2) = 210px
        - 실제 컨텐츠 크기: 200px
