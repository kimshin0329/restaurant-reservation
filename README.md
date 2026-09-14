# 🍽️ 자리잡다

> 맛있는 경험을 위한 예약, 자리잡다

## 📌 프로젝트 소개

**자리잡다**는 식당을 검색하고 원하는 날짜와 시간에 예약할 수 있는 식당 예약 플랫폼입니다.

고객, 식당 운영자, 관리자의 역할을 구분하여 각 사용자에게 필요한 기능을 제공하는 것을 목표로 개발하고 있습니다.

## 🎯 프로젝트 목표

* Spring Boot를 활용한 REST API 개발
* React를 활용한 프론트엔드 개발
* JPA를 활용한 데이터베이스 연동
* JWT와 Spring Security를 활용한 인증 및 인가 구현
* 고객 / 식당 운영자 / 관리자 역할에 따른 기능 구현
* 실제 서비스 형태의 식당 예약 기능 구현

## 🛠️ 기술 스택

### Backend

* Java 21
* Spring Boot
* Spring MVC
* Spring Data JPA
* MySQL
* Gradle
* Lombok

### Frontend

* React
* Vite
* React Router
* React Hook Form

### Tools

* IntelliJ IDEA
* Visual Studio Code
* MySQL Workbench
* Git / GitHub

## ✨ 주요 기능

### 👤 고객

* 회원가입
* 로그인
* 식당 조회
* 식당 상세 조회
* 식당 예약
* 예약 조회 및 취소
* 마이페이지
* 리뷰 작성 및 조회

### 🏪 식당 운영자

* 식당 등록
* 식당 정보 관리
* 예약 관리
* 예약 승인 / 거절
* 전화 예약 관리

### 🔧 관리자

* 회원 관리
* 식당 관리
* 예약 관리

## 📁 프로젝트 구조

```text
restaurant-reservation/
├── README.md
├── restaurant-reservation-backend/
└── restaurant-reservation-frontend/
```

## 🚧 개발 진행 상황

### Backend

* [x] Spring Boot 프로젝트 구성
* [x] MySQL / JPA 환경 구성
* [x] 회원 엔티티 구현
* [x] 회원가입 API 기본 구현
* [ ] JWT 인증 구현
* [ ] Spring Security 적용
* [ ] CORS 설정
* [ ] 식당 기능 구현
* [ ] 예약 기능 구현
* [ ] 리뷰 기능 구현
* [ ] 관리자 기능 구현

### Frontend

* [x] React + Vite 프로젝트 구성
* [x] React Router 설정
* [x] 공통 Header 구성
* [x] 로그인 페이지 구현
* [x] 회원가입 페이지 구현
* [ ] 식당 목록 및 상세 페이지
* [ ] 예약 페이지
* [ ] 마이페이지
* [ ] 고객센터
* [ ] 관리자 페이지

## 🔧 기술적 구현

프로젝트를 진행하면서 주요 기술의 적용 과정과 선택 이유를 기록합니다.

* JWT / Spring Security
* JPA
* React Hook Form
* REST API
* CORS

## 🐛 트러블슈팅

프로젝트 개발 과정에서 발생한 문제와 해결 과정을 기록합니다.

* 문제 상황
* 원인
* 해결 방법
* 해결 과정에서 알게 된 내용

## 💡 회고

프로젝트를 진행하면서 새롭게 학습한 내용과 개발 과정에서 느낀 점을 기록합니다.

* 구현 과정에서 알게 된 내용
* 기술을 선택한 이유
* 문제를 해결한 과정
* 프로젝트를 진행하면서 개선하고 싶은 부분
