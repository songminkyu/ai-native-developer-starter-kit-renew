# AI Native Developer Starter Kit - Frontend

Next.js 14 기반 프론트엔드 애플리케이션입니다. Spring Boot 백엔드와 연동하여 간단한 CRUD 기능을 제공합니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Code Quality**: ESLint + Prettier
- **Runtime**: React 18
- **HTTP Client**: Fetch API
- **Monitoring**: Sentry (optional)

## 프로젝트 구조

```
frontend/
├── src/
│   ├── app/              # App Router (페이지 및 라우팅)
│   ├── components/       # 재사용 가능한 컴포넌트
│   ├── lib/              # 유틸리티 함수 및 API 클라이언트
│   └── types/            # TypeScript 타입 정의
├── public/               # 정적 파일
├── .env.example          # 환경 변수 예시
└── package.json
```

## 로컬 개발 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env.local` 파일을 생성하고, 백엔드 API URL을 설정하세요:

```bash
cp .env.example .env.local
```

`.env.local` 파일 내용:

```env
# Backend API Base URL (for local development only)
# In production, defaults to /api/v1 (ALB proxy)
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1

# Sentry (선택 사항)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
NEXT_PUBLIC_SENTRY_ENVIRONMENT=development
NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE=1.0
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 사용 가능한 스크립트

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint

# 코드 포맷팅 (Prettier)
npm run format
```

## 주요 기능

### Item CRUD 관리

- **Item 목록 조회**: 백엔드 API에서 아이템 목록을 가져와 표시
- **Item 생성**: 폼을 통해 새로운 아이템 생성
- **Item 수정**: 기존 아이템의 이름과 설명 수정
- **Item 삭제**: 삭제 확인 후 아이템 제거

### API 통합

`src/lib/api/items.ts`에서 백엔드 API와 통신:

```typescript
import type { Item, ItemRequest } from '@/types/item';

// Use relative path for production (ALB proxy) or env variable for custom setup
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

export async function getAllItems(): Promise<Item[]>
export async function createItem(data: ItemRequest): Promise<Item>
export async function updateItem(id: number, data: ItemRequest): Promise<Item>
export async function deleteItem(id: number): Promise<void>
```

## 코드 스타일

이 프로젝트는 ESLint와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다.

- **ESLint**: 코드 품질 및 잠재적 오류 검사
- **Prettier**: 코드 포맷팅 자동화

빌드 시 ESLint 오류가 있으면 빌드가 실패합니다. 커밋 전에 `npm run lint`를 실행하여 오류를 확인하세요.

## 개발 가이드

### 컴포넌트 작성

재사용 가능한 컴포넌트는 `src/components/` 디렉토리에 작성합니다.

```typescript
// src/components/MyComponent.tsx
'use client';

import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState('');

  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

### API 호출

API 호출 관련 함수는 `src/lib/api/` 디렉토리에 작성합니다.

```typescript
// src/lib/api/myapi.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

export async function fetchData() {
  const response = await fetch(`${API_BASE_URL}/endpoint`);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
}
```

### 타입 정의

공통으로 사용되는 TypeScript 타입은 `src/types/` 디렉토리에 정의합니다.

```typescript
// src/types/model.ts
export interface MyModel {
  id: number;
  name: string;
  createdAt: string;
}

export interface MyModelRequest {
  name: string;
}
```

## 빌드 및 배포

### Vercel 배포 (권장)

이 프로젝트는 Vercel에 최적화되어 있습니다:

1. GitHub 리포지토리 연결
2. 환경 변수 설정 (`NEXT_PUBLIC_API_BASE_URL` 등)
3. 자동 배포 활성화

### Docker 배포

```bash
# 이미지 빌드
docker build -t starter-frontend .

# 컨테이너 실행
docker run -p 3000:3000 starter-frontend
```

## 트러블슈팅

### 빌드 오류

**문제**: `npm run build` 시 ESLint 오류

**해결**: `npm run lint`로 오류 확인 후 수정, 또는 `npm run format`으로 자동 포맷팅

### API 통신 오류

**문제**: CORS 에러 또는 "Failed to fetch"

**해결**:
1. 로컬 개발: 백엔드 서버가 실행 중인지 확인 (`http://localhost:8080`)
2. 로컬 개발: `.env.local`에 `NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1` 설정
3. 프로덕션: 기본값 `/api/v1` 사용 (ALB가 자동 프록시)
4. 백엔드의 CORS 설정 확인 (`WebConfig.java`)

### Hot Reload 작동 안함

**문제**: 코드 변경 시 자동 새로고침 안됨

**해결**:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Project CLAUDE.md](./CLAUDE.md) - Claude Code 개발 가이드
