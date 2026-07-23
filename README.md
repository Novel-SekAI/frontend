# SekAI — Frontend

세계관·AI(SekAI)의 **웹 클라이언트**입니다. 브리프로 세계관을 생성하고, 인물 관계도·세력 구도·티어표·법칙표·타임라인을 편집합니다.

## 역할

- 세계관 생성 브리프 입력 및 4단계 로딩 UI (진행 이벤트 없이 FE에서 처리)
- 시점별 인물 관계도·세력 구도 시각화
- 티어표·법칙표·타임라인 편집

## 실행 정보

| 항목 | 값 |
|------|-----|
| 포트 | 80 (nginx 정적 서빙) |
| 노드 | CPU |
| 빌드 | Vite — `VITE_*` 는 번들에 포함되므로 **시크릿 금지** |

## 문서

설계·컨벤션 문서는 [`Novel-SekAI/docs`](https://github.com/Novel-SekAI/docs), 디자인 산출물은 [`Novel-SekAI/design`](https://github.com/Novel-SekAI/design)에 있습니다.

- `02-설계/API.md` — 클라이언트↔BE 계약
- `03-컨벤션/ENVIRONMENT.md` · `03-컨벤션/CONTAINER.md`
