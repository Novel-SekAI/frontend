## 스택

- Vite (rolldown-vite) + React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui (`components.json` 별칭이 `src/shared/ui`, `src/shared/lib`를 가리키도록 설정)
- TanStack Router (파일 기반 라우팅, `src/routes`) + TanStack Query
- react-hook-form + zod
- ky (API 클라이언트)

## 파일 아키텍처

[FSD 참조](https://tech.kakaopay.com/post/fsd/)

```
src/
  app/            # 앱 초기화: providers, router, 전역 스타일
  routes/         # TanStack Router 파일 기반 라우트 (얇은 wrapper)
  pages/          # 페이지 컴포넌트
  widgets/        # 여러 feature/entity를 조합한 독립 UI 블록
  features/       # 사용자 시나리오 단위 기능
  entities/       # 도메인 모델 단위
  shared/
    ui/           # shadcn 컴포넌트
    lib/          # 범용 유틸 (cn 등)
    api/          # API 클라이언트 (ky)
    config/       # 환경설정
    hooks/        # 범용 훅
```

상위 레이어는 하위 레이어만 import할 수 있습니다 (예: `features`는 `entities`/`shared`를 import 가능하지만 반대는 불가).

## 명령어

```bash
pnpm dev       # 개발 서버
pnpm build     # 타입체크 + 빌드
pnpm lint      # eslint
pnpm format    # prettier
```

## shadcn 컴포넌트 추가

```bash
pnpm dlx shadcn@latest add <component>
```

`components.json`에 별칭이 설정되어 있어 `src/shared/ui`에 생성됩니다.
