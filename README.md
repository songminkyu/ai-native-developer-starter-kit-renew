# 🚀 AI Native Developer Starter Kit

**프로덕션 레벨 풀스택 프로젝트를 빠르게 시작하기 위한 스타터 킷**

Claude Code, JIRA, GitHub Actions를 활용한 AI 기반 개발 워크플로우가 포함되어 있습니다.

---

## 🎯 What's This?

실제 프로덕션 환경에서 검증된 설정과 베스트 프랙티스를 기반으로 한 풀스택 스타터 킷입니다.

### 핵심 특징

**✅ 프로덕션 레디**
- 완전한 CI/CD 파이프라인 (GitHub Actions)
- 에러 추적 (Sentry)
- LLM 모니터링 (Langfuse)
- 데이터베이스 (PostgreSQL with Docker)
- API 문서화 (Swagger/OpenAPI)

**🤖 AI Native 개발 워크플로우**
- **Claude Code 통합 가이드**: 체계적인 AI 기반 개발 프로세스 (CLAUDE.md)
- **2개 MCP 서버**: Playwright (브라우저 자동화), Atlassian (JIRA/Confluence)
- **5개 JIRA 자동화 커맨드**: start, create, commit, test, complete
- **Serena 코드베이스 이해**: 프로젝트 구조 분석 및 메모리 저장
- **Definition of Done 자동 추적**: TodoWrite 연동 체크리스트 관리
- **GitHub PR 자동화**: CLI 기반 브랜치/PR 생성 및 관리

**🏗️ 검증된 기술 스택**
- Frontend: Next.js 14 + TypeScript + Tailwind CSS
- Backend: Spring Boot 3.2 + Java 17 + PostgreSQL
- Infrastructure: Docker + Docker Compose

---

## 📦 What's Included?

```
ai-native-developer-starter-kit/
├── frontend/              # Next.js 14 웹 애플리케이션
│   ├── instrumentation.ts # Sentry 설정
│   └── CLAUDE.md         # Frontend 개발 가이드
├── backend/               # Spring Boot API 서버
│   ├── build.gradle      # Dependencies & Build
│   └── README.md         # Backend 개발 가이드
├── .github/
│   └── workflows/        # CI/CD 파이프라인
├── docker-compose.yml    # 로컬 개발 환경
├── .env.example          # 환경 변수 템플릿
├── CLAUDE.md             # AI Native 개발 워크플로우
├── docs/                 # 프로젝트 문서 및 템플릿
└── examples/             # PRD, 기능 명세 예시
```

---

## 🚀 Quick Start (5분 셋업)

> 💡 **처음 시작하시나요?** 완전한 설정 가이드는 **[docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md)** 를 참조하세요!

### 1️⃣ 필수 요구사항

- Node.js 18+
- Java 17+
- Docker & Docker Compose
- Git
- Claude Code (AI 개발 도구)

### 2️⃣ 프로젝트 생성

```bash
# 저장소 클론
git clone https://github.com/dingcodingco/ai-native-developer-starter-kit.git my-project
cd my-project

# 환경 변수 설정
cp .env.example .env
# .env 파일을 열어서 필요한 값들을 설정하세요
```

### 3️⃣ 데이터베이스 시작

```bash
# PostgreSQL 컨테이너 시작
docker-compose up -d

# 상태 확인
docker-compose ps
```

### 4️⃣ 백엔드 실행

```bash
cd backend

# 빌드 및 실행
./gradlew clean build
SPRING_PROFILES_ACTIVE=local ./gradlew bootRun
```

✅ 백엔드 실행 확인: http://localhost:8080/swagger-ui.html

### 5️⃣ 프론트엔드 실행

```bash
cd frontend

# 의존성 설치 및 실행
npm install
npm run dev
```

✅ 프론트엔드 실행 확인: http://localhost:3000

---

## 🎓 핵심 가이드

### 🧠 AI 기능 & 특징

이 스타터 킷은 **Claude Code**를 활용한 AI Native 개발 환경을 제공합니다.

#### 프로젝트 구조

**AI 관련 설정 파일:**
```
ai-native-developer-starter-kit/
├── CLAUDE.md                   # AI 개발 워크플로우 완전 가이드
├── .mcp.json                   # MCP 서버 설정 (Playwright, Atlassian)
├── .claude/
│   ├── commands/               # JIRA 워크플로우 자동화 커맨드
│   │   ├── jira-start.md      # 티켓 시작 (조회, 상태 변경, 브랜치 생성)
│   │   ├── jira-create.md     # 티켓 생성
│   │   ├── jira-commit.md     # 커밋 및 푸시
│   │   ├── jira-test.md       # 통합 테스트 실행
│   │   └── jira-complete.md   # 티켓 완료 처리
│   └── settings.local.json    # 프로젝트별 Claude 설정
└── .serena/
    ├── project.yml             # Serena MCP 프로젝트 설정 (Java)
    └── memories/               # 코드베이스 지식 메모리
```

#### JIRA 워크플로우 자동화 커맨드

프로젝트에 포함된 **5개의 커스텀 슬래시 커맨드**로 JIRA 티켓 작업을 완전 자동화합니다:

**1. `/jira-start SCRUM-XX "description"`**
- JIRA 티켓 조회 및 상태를 "진행 중"으로 변경
- Git 브랜치 생성 (`feature/SCRUM-XX-description`)
- GitHub Draft PR 자동 생성
- Definition of Done → TodoWrite 변환

**2. `/jira-create`**
- JIRA 티켓 생성 템플릿
- 프로젝트/이슈 타입 선택
- Definition of Done 자동 설정

**3. `/jira-commit`**
- 변경사항 스테이징 및 커밋
- 컨벤션에 맞는 커밋 메시지 생성
- JIRA 티켓 참조 자동 추가

**4. `/jira-test frontend|backend`**
- **Frontend**: Playwright 브라우저 테스트 (http://localhost:3000)
- **Backend**: API 엔드포인트 curl 테스트 (http://localhost:8080)
- 빌드/린트 검증
- Definition of Done 체크리스트 확인

**5. `/jira-complete SCRUM-XX`**
- 최종 검증 (빌드, 테스트, 문서)
- PR 머지 (GitHub CLI)
- JIRA 코멘트 추가 (완료 내역)
- 티켓 상태를 "완료"로 변경

**사용 예시:**
```bash
# 1. 티켓 작업 시작
/jira-start SCRUM-42 "user-authentication"

# 2. 코드 구현...

# 3. 통합 테스트
/jira-test frontend

# 4. 커밋 및 푸시
/jira-commit

# 5. 티켓 완료
/jira-complete SCRUM-42
```

#### Serena 코드베이스 이해

**.serena/project.yml**로 프로젝트 구조를 Claude에게 학습시킵니다:

```yaml
language: java                  # Java 프로젝트로 인식
encoding: "utf-8"
ignore_all_files_in_gitignore: true
read_only: false
project_name: "ai-native-developer-starter-kit"
```

**.serena/memories/**에 프로젝트별 지식을 저장:
- 아키텍처 패턴
- 주요 컴포넌트 구조
- API 엔드포인트 매핑
- 테스트 전략
- 배포 프로세스

### MCP 서버 설정

이 프로젝트는 **2개의 MCP 서버**를 사용하여 JIRA 워크플로우 자동화와 브라우저 테스트를 지원합니다.

**MCP 서버란?**
Model Context Protocol 서버는 Claude Code가 외부 도구와 통합하여 브라우저 자동화, JIRA 연동 등의 작업을 수행할 수 있게 해줍니다.

#### 프로젝트에 포함된 MCP 서버

**1. Playwright MCP** (브라우저 자동화)
- ✅ 크로스 브라우저 E2E 테스트 (Chrome, Firefox, Safari, Edge)
- ✅ 실제 사용자 인터랙션 시뮬레이션
- ✅ 스크린샷 캡처 및 비주얼 테스트
- ✅ 성능 메트릭 측정 (Core Web Vitals)
- ✅ 접근성(a11y) 테스트

**사용 예시:**
```bash
# 페이지 로드 및 스냅샷
mcp__playwright__browser_navigate(url: "http://localhost:3000")
mcp__playwright__browser_snapshot()

# 버튼 클릭 테스트
mcp__playwright__browser_click(element: "로그인 버튼", ref: "...")

# 스크린샷 캡처
mcp__playwright__browser_take_screenshot(filename: "login-page.png")
```

**2. Atlassian MCP** (JIRA/Confluence 연동)
- ✅ JIRA 티켓 조회/생성/업데이트/전환
- ✅ Confluence 페이지 읽기/쓰기
- ✅ 코멘트 추가 및 이슈 추적
- ✅ Definition of Done 자동 관리

**사용 예시:**
```bash
# 티켓 조회
mcp__atlassian__getJiraIssue(issueIdOrKey: "SCRUM-42")

# 티켓 상태 변경
mcp__atlassian__transitionJiraIssue(
  issueIdOrKey: "SCRUM-42",
  transition: "진행 중"
)

# 코멘트 추가
mcp__atlassian__addCommentToJiraIssue(
  issueIdOrKey: "SCRUM-42",
  commentBody: "구현 완료"
)
```

#### MCP 서버 설정 파일

**파일:** [`.mcp.json`](./.mcp.json)

```json
{
  "mcpServers": {
    "atlassian": {
      "transport": "sse",
      "url": "https://mcp.atlassian.com/v1/sse"
    },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

#### 설치 방법

MCP 서버는 Claude CLI를 통해 설치할 수 있습니다:

```bash
# Atlassian MCP 설치
claude mcp add --transport sse atlassian https://mcp.atlassian.com/v1/sse

# Playwright MCP 설치
claude mcp add playwright npx -- @playwright/mcp@latest
```

#### 환경 변수 설정

- **Atlassian MCP**: Claude Code에서 JIRA Cloud 계정 OAuth 인증 필요
- **Playwright MCP**: 별도 설정 불필요 (자동으로 Chromium 사용)

자세한 사용 방법은 [CLAUDE.md](./CLAUDE.md)를 참조하세요.

---

### AI Native 개발 워크플로우

이 스타터 킷의 핵심은 **Claude Code + JIRA + GitHub**를 활용한 AI 기반 개발 프로세스입니다.

**📖 상세 가이드:** [`CLAUDE.md`](./CLAUDE.md)

**핵심 워크플로우:**
1. **JIRA 티켓 생성** → `mcp__atlassian__getJiraIssue`
2. **작업 브랜치 생성** → `feature/SCRUM-XX-description`
3. **Claude Code로 구현** → 자동 코드 생성 및 리뷰
4. **통합 테스트** → Playwright MCP 활용
5. **PR 생성 및 머지** → GitHub CLI 활용
6. **JIRA 티켓 완료** → 자동 상태 업데이트

### 프론트엔드 개발

```bash
cd frontend

# 개발 서버
npm run dev          # http://localhost:3000

# 빌드 및 검증
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npm run format       # Prettier 포맷팅
```

**주요 기능:**
- ✅ Next.js 14 App Router
- ✅ TypeScript 엄격 모드
- ✅ Tailwind CSS + shadcn/ui
- ✅ Sentry 에러 추적
- ✅ 반응형 디자인

### 백엔드 개발

**📖 상세 가이드:** [`backend/README.md`](./backend/README.md)

```bash
cd backend

# 빌드 및 테스트
./gradlew clean build
./gradlew test

# 실행
SPRING_PROFILES_ACTIVE=local ./gradlew bootRun
```

**주요 기능:**
- ✅ Spring Boot 3.2 + Java 17
- ✅ PostgreSQL + Spring Data JPA
- ✅ Swagger/OpenAPI 문서화
- ✅ Sentry 에러 추적
- ✅ Langfuse LLM 모니터링

---

## 🔧 환경 변수 설정

### 필수 환경 변수

```env
# Database
POSTGRES_PASSWORD=your_secure_password

# API Keys (프로젝트에 맞게 수정)
CLAUDE_API_KEY=your_anthropic_api_key
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
```

### 선택 환경 변수 (모니터링)

```env
# Sentry (에러 추적)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_DSN=your_backend_sentry_dsn

# Langfuse (LLM 모니터링)
LANGFUSE_PUBLIC_KEY=your_langfuse_public_key
LANGFUSE_SECRET_KEY=your_langfuse_secret_key
LANGFUSE_BASE_URL=https://cloud.langfuse.com
```

---

## 📊 모니터링 & 옵저버빌리티

### Sentry (에러 추적)

**설정 방법:**
1. [Sentry.io](https://sentry.io) 계정 생성
2. Frontend/Backend 프로젝트 생성
3. DSN을 환경 변수에 추가
4. 자동으로 에러 추적 시작

**기능:**
- ✅ 실시간 에러 알림
- ✅ 성능 모니터링
- ✅ Release 추적
- ✅ Source Map 자동 업로드

### Langfuse (LLM 모니터링)

**설정 방법:**
1. [Langfuse Cloud](https://cloud.langfuse.com) 계정 생성
2. 프로젝트 생성 후 API 키 발급
3. 환경 변수에 키 추가
4. LLM 호출 자동 추적 시작

**기능:**
- ✅ LLM 비용 추적
- ✅ 토큰 사용량 분석
- ✅ 응답 시간 모니터링
- ✅ 프롬프트 버전 관리

---

## 🏗️ 프로젝트 커스터마이징

### 1. 프로젝트 이름 변경

```bash
# package.json 수정
cd frontend
vim package.json  # "name" 필드 변경

# build.gradle 수정
cd backend
vim build.gradle  # rootProject.name 변경
```

### 2. 도메인 로직 추가

```bash
# Frontend: 페이지 추가
cd frontend/app
mkdir my-feature
touch my-feature/page.tsx

# Backend: API 엔드포인트 추가
cd backend/src/main/java/com/yourproject
mkdir controller
touch controller/MyController.java
```

### 3. 데이터베이스 스키마 설계

```bash
# JPA Entity 추가
cd backend/src/main/java/com/yourproject/domain
touch MyEntity.java

# Repository 추가
cd ../repository
touch MyRepository.java
```

---

## 📋 Git 브랜치 전략

### 브랜치 규칙

```
main           # 프로덕션 배포 브랜치 (보호됨)
develop        # 개발 통합 브랜치

feature/SCRUM-XX-description   # 기능 개발
bugfix/SCRUM-XX-description    # 버그 수정
hotfix/SCRUM-XX-description    # 긴급 수정
```

### 커밋 메시지 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 변경
style: 코드 포맷팅 (기능 변경 없음)
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 설정, 패키지 매니저 설정
```

**예시:**
```
feat(frontend): 사용자 로그인 UI 구현

- 로그인 폼 컴포넌트 추가
- 유효성 검증 로직 구현
- API 연동 및 에러 핸들링
- 반응형 디자인 적용

JIRA: SCRUM-42
```

---

## 🧪 테스트 전략

### 프론트엔드 테스트

```bash
# 단위 테스트
npm run test

# E2E 테스트 (Playwright)
npx playwright test
```

### 백엔드 테스트

```bash
# 단위 테스트
./gradlew test

# 통합 테스트
./gradlew integrationTest
```

---

## 🚢 배포

### Frontend (Vercel)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
cd frontend
vercel --prod
```

### Backend (Docker)

```bash
cd backend

# Docker 이미지 빌드
docker build -t my-backend:latest .

# 실행
docker run -p 8080:8080 my-backend:latest
```

---

## 📚 추가 문서

### 시작 가이드
- **[docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md)**: 🚀 처음 세팅하는 사람을 위한 완전한 가이드
- **[CLAUDE.md](./CLAUDE.md)**: AI Native 개발 워크플로우 완전 가이드

### 개발 가이드
- **[backend/README.md](./backend/README.md)**: Backend 개발 상세 가이드
- **[terraform/README.md](./terraform/README.md)**: Terraform 인프라 가이드

### 배포 가이드
- **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)**: AWS 배포 상세 가이드
- **[docs/AWS_OIDC_SETUP.md](./docs/AWS_OIDC_SETUP.md)**: GitHub Actions OIDC 설정
- **[docs/GITHUB_SECRETS_SETUP.md](./docs/GITHUB_SECRETS_SETUP.md)**: CI/CD Secrets 설정

### 기타
- **[docs/](./docs/)**: 프로젝트 문서 및 템플릿
- **[examples/](./examples/)**: PRD, 기능 명세 예시
- **[.mcp.json](./.mcp.json)**: MCP 서버 설정 (Playwright, Atlassian)

---

## 🛠️ Docker Compose 명령어

```bash
# 서비스 시작
docker-compose up -d

# pgAdmin 포함 시작 (DB GUI)
docker-compose --profile tools up -d

# 서비스 중지
docker-compose down

# 데이터 초기화
docker-compose down -v

# 로그 확인
docker-compose logs -f
```

**PostgreSQL 접속:**
- Host: `localhost:5432`
- Database: `your_db_name` (수정 필요)
- Username: `postgres`
- Password: `.env` 파일의 값

**pgAdmin 접속:**
- URL: http://localhost:5050
- Email: `admin@example.com` (수정 필요)
- Password: `.env` 파일의 값

---

## 🤝 Contributing

이 스타터 킷은 실제 프로젝트에서 검증된 베스트 프랙티스를 담고 있습니다.

개선 사항이나 버그를 발견하시면 이슈를 등록해주세요.

---

## 📄 License

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

## 💡 Tips & Best Practices

### 프로덕션 체크리스트

**배포 전 확인사항:**
- [ ] 모든 환경 변수가 설정되었는가?
- [ ] Sentry DSN이 프로덕션 환경에 맞게 설정되었는가?
- [ ] 데이터베이스 마이그레이션이 준비되었는가?
- [ ] API 문서가 최신 상태인가?
- [ ] 빌드가 에러 없이 성공하는가?
- [ ] 통합 테스트가 모두 통과하는가?
- [ ] HTTPS 인증서가 설정되었는가?
- [ ] Rate Limiting이 설정되었는가?

### 보안 체크리스트

- [ ] API 키가 코드에 하드코딩되지 않았는가?
- [ ] .env 파일이 .gitignore에 포함되었는가?
- [ ] CORS 정책이 적절히 설정되었는가?
- [ ] SQL Injection 방어가 되어있는가?
- [ ] XSS 방어가 되어있는가?
- [ ] 비밀번호가 암호화되어 저장되는가?

---

## 🆘 문제 해결

### PostgreSQL 연결 실패

```bash
# 컨테이너 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs postgres

# 재시작
docker-compose restart postgres
```

### 포트 충돌

`.env` 파일에서 포트 변경:
```env
POSTGRES_PORT=5433
PGADMIN_PORT=5051
```

### 빌드 실패

```bash
# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Backend
cd backend
./gradlew clean
./gradlew build --refresh-dependencies
```

---

**Happy Coding! 🚀**

프로덕션 레벨 프로젝트를 빠르게 시작하세요!

### 참고
* [딩코딩코](https://github.com/dingcodingco/ai-native-developer-starter-kit)

